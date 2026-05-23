# Card Factory Shape Guide

Janus Wordscape Card Factory has three portable shapes. They serve the same card standard but fit different user environments.

## Shape 1: Portable Prompt / Knowledge Base

File:

```text
docs/JANUS_WORDSCAPE_CARD_FACTORY_PORTABLE.md
```

Use when:

- the user works in ima, GPTs, Claude Projects, Dify, Coze, WorkBuddy-style copilots, or another AI assistant
- the assistant can read a knowledge file or long instruction
- no local code execution is available

How to use:

1. Upload or paste the portable document into the AI assistant.
2. Ask it to produce a production blueprint first.
3. Ask for a 30 to 120 card acceptance sample.
4. Validate the sample before scaling.

Best for:

```text
human-guided card production
scene analysis
first-level and second-level taxonomy planning
source and copyright review
```

Limit:

```text
It can guide AI output, but it cannot deterministically validate files unless the assistant has a tool runtime.
```

## Shape 2: CLI Validator

Files:

```text
scripts/janus-card-factory-core.mjs
scripts/janus-card-factory-cli.mjs
```

Use when:

- a user has a local GitHub or domestic mirror checkout
- a card package must be checked before import
- CI or release scripts need deterministic checks

Commands:

```bash
corepack pnpm run card-factory:validate -- examples/standard-word-card-package.example.json
corepack pnpm run card-factory:count -- examples/standard-word-card-package.example.json
corepack pnpm run card-factory:dedupe -- examples/standard-word-card-package.example.json
corepack pnpm run card-factory:report -- examples/standard-word-card-package.example.json
```

Best for:

```text
schema-level safety
URL protocol checks
frequency and source priority checks
duplicate card_id and duplicate headword checks
card-package acceptance reports
```

Exit codes:

```text
0 -> clean result
1 -> invalid package or duplicates found
2 -> wrong command usage
```

## Shape 3: MCP Tool Server

File:

```text
scripts/janus-card-factory-mcp-server.mjs
```

Use when:

- an AI Agent supports MCP tools
- the agent should validate packages instead of only reading prompt rules
- validation should happen inside the agent workflow

Start command:

```bash
corepack pnpm run card-factory:mcp
```

Tools:

| Tool | Purpose |
|---|---|
| `validate_word_card_package` | Validate package structure and field rules. |
| `count_word_cards` | Count cards by domain, scene, frequency, status, and source. |
| `dedupe_word_cards` | Detect duplicate ids and duplicate headwords. |
| `generate_package_report` | Return validation, counts, duplicate report, and import readiness. |

Input:

```json
{
  "file_path": "examples/standard-word-card-package.example.json"
}
```

or:

```json
{
  "package_json": {
    "package_id": "..."
  }
}
```

## Which Shape Should I Use?

| Situation | Recommended shape |
|---|---|
| I only have an AI chat | Portable prompt / knowledge base |
| I can run local commands | CLI validator |
| I am building an Agent | MCP tool server |
| I want reproducibility | CLI or MCP |
| I want creative card drafting | Portable prompt first, CLI/MCP second |

## Production Flow

Recommended flow for real packages:

```text
1. Portable prompt creates blueprint.
2. Portable prompt creates 30 to 120 sample cards.
3. CLI or MCP validates the sample.
4. Human checks source and learning quality.
5. Scale to 1200 to 2000 cards in batches.
6. Validate every batch before import.
```

This keeps creative generation and deterministic validation separate.
