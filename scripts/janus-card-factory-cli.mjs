#!/usr/bin/env node
import {
  countPackage,
  dedupePackage,
  generatePackageReport,
  loadPackageFromFile,
  validatePackage,
} from './janus-card-factory-core.mjs';

const COMMANDS = new Set(['validate', 'count', 'dedupe', 'report']);

function usage() {
  return [
    'Usage:',
    '  node scripts/janus-card-factory-cli.mjs validate path/to/package.json',
    '  node scripts/janus-card-factory-cli.mjs count path/to/package.json',
    '  node scripts/janus-card-factory-cli.mjs dedupe path/to/package.json',
    '  node scripts/janus-card-factory-cli.mjs report path/to/package.json',
  ].join('\n');
}

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

async function main() {
  const args = process.argv.slice(2).filter((arg) => arg !== '--');
  const [command, filePath] = args;

  if (!COMMANDS.has(command) || !filePath) {
    process.stderr.write(`${usage()}\n`);
    process.exitCode = 2;
    return;
  }

  try {
    const data = await loadPackageFromFile(filePath);
    if (command === 'validate') {
      const result = validatePackage(data, filePath);
      printJson(result);
      process.exitCode = result.valid ? 0 : 1;
      return;
    }

    if (command === 'count') {
      printJson(countPackage(data));
      process.exitCode = 0;
      return;
    }

    if (command === 'dedupe') {
      const result = dedupePackage(data);
      printJson(result);
      process.exitCode = result.has_duplicates ? 1 : 0;
      return;
    }

    const result = generatePackageReport(data, filePath);
    printJson(result);
    process.exitCode = result.ready_for_import ? 0 : 1;
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}

await main();
