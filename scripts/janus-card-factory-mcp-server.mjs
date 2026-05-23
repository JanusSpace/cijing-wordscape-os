#!/usr/bin/env node
import {
  countPackage,
  dedupePackage,
  generatePackageReport,
  loadPackageFromFile,
  loadPackageFromJson,
  validatePackage,
} from './janus-card-factory-core.mjs';

const SERVER_INFO = {
  name: 'janus-card-factory',
  version: '0.1.0',
};

const PACKAGE_INPUT_SCHEMA = {
  type: 'object',
  properties: {
    file_path: {
      type: 'string',
      description: 'Path to a Janus Wordscape OS standard word-card package JSON file.',
    },
    package_json: {
      type: 'object',
      description: 'Inline Janus Wordscape OS standard word-card package JSON object.',
    },
  },
  anyOf: [{ required: ['file_path'] }, { required: ['package_json'] }],
  additionalProperties: false,
};

const TOOLS = [
  {
    name: 'validate_word_card_package',
    description: 'Validate a Janus Wordscape OS standard word-card package.',
    inputSchema: PACKAGE_INPUT_SCHEMA,
  },
  {
    name: 'count_word_cards',
    description: 'Count cards by domain, scene, frequency tier, status, and source priority.',
    inputSchema: PACKAGE_INPUT_SCHEMA,
  },
  {
    name: 'dedupe_word_cards',
    description: 'Find duplicate card_id and duplicate headword entries.',
    inputSchema: PACKAGE_INPUT_SCHEMA,
  },
  {
    name: 'generate_package_report',
    description: 'Generate a combined validation, count, and duplicate report.',
    inputSchema: PACKAGE_INPUT_SCHEMA,
  },
];

let inputBuffer = Buffer.alloc(0);

function send(message) {
  const body = JSON.stringify(message);
  process.stdout.write(`Content-Length: ${Buffer.byteLength(body, 'utf8')}\r\n\r\n${body}`);
}

function sendResult(id, result) {
  send({ jsonrpc: '2.0', id, result });
}

function sendError(id, code, message) {
  send({
    jsonrpc: '2.0',
    id,
    error: { code, message },
  });
}

function toolResult(value, isError = false) {
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(value, null, 2),
      },
    ],
    isError,
  };
}

async function getPackageData(args) {
  if (args?.file_path) {
    return {
      data: await loadPackageFromFile(args.file_path),
      sourceLabel: args.file_path,
    };
  }
  if (args?.package_json) {
    return {
      data: loadPackageFromJson(args.package_json),
      sourceLabel: 'package_json',
    };
  }
  throw new Error('Either file_path or package_json is required.');
}

async function callTool(name, args) {
  const { data, sourceLabel } = await getPackageData(args ?? {});

  if (name === 'validate_word_card_package') {
    return validatePackage(data, sourceLabel);
  }
  if (name === 'count_word_cards') {
    return countPackage(data);
  }
  if (name === 'dedupe_word_cards') {
    return dedupePackage(data);
  }
  if (name === 'generate_package_report') {
    return generatePackageReport(data, sourceLabel);
  }
  throw new Error(`Unknown tool: ${name}`);
}

async function handleMessage(message) {
  if (!message || message.jsonrpc !== '2.0') {
    return;
  }

  const { id, method, params } = message;

  try {
    if (method === 'initialize') {
      sendResult(id, {
        protocolVersion: params?.protocolVersion ?? '2024-11-05',
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO,
      });
      return;
    }

    if (method === 'notifications/initialized') {
      return;
    }

    if (method === 'ping') {
      sendResult(id, {});
      return;
    }

    if (method === 'tools/list') {
      sendResult(id, { tools: TOOLS });
      return;
    }

    if (method === 'tools/call') {
      const toolName = params?.name;
      const args = params?.arguments ?? {};
      const result = await callTool(toolName, args);
      sendResult(id, toolResult(result));
      return;
    }

    if (id !== undefined) {
      sendError(id, -32601, `Method not found: ${method}`);
    }
  } catch (error) {
    if (id !== undefined) {
      sendResult(id, toolResult({ error: error instanceof Error ? error.message : String(error) }, true));
    }
  }
}

function readMessages() {
  while (true) {
    const headerEnd = inputBuffer.indexOf('\r\n\r\n');
    if (headerEnd === -1) return;

    const headerText = inputBuffer.slice(0, headerEnd).toString('utf8');
    const match = headerText.match(/Content-Length:\s*(\d+)/i);
    if (!match) {
      inputBuffer = inputBuffer.slice(headerEnd + 4);
      continue;
    }

    const length = Number(match[1]);
    const bodyStart = headerEnd + 4;
    const bodyEnd = bodyStart + length;
    if (inputBuffer.length < bodyEnd) return;

    const body = inputBuffer.slice(bodyStart, bodyEnd).toString('utf8');
    inputBuffer = inputBuffer.slice(bodyEnd);

    try {
      void handleMessage(JSON.parse(body));
    } catch {
      // Invalid JSON-RPC payloads are ignored because they may not include ids.
    }
  }
}

process.stdin.on('data', (chunk) => {
  inputBuffer = Buffer.concat([inputBuffer, chunk]);
  readMessages();
});
