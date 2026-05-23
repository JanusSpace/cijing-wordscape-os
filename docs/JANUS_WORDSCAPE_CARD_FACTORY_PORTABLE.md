# Janus Wordscape Card Factory Portable v1.0

This document is the portable form of the Janus Wordscape OS word-card factory. It is designed for AI knowledge bases, custom copilots, GPTs, Claude Projects, Dify, Coze, WorkBuddy-style agents, and other assistant runtimes. It is not Codex-specific.

## Purpose

Produce import-ready word-card packages for Janus Wordscape OS scenario applications.

The factory must work backward from graph value:

- A learner should know why a word is hard to remember.
- The graph should reveal the word's scene, source, frequency, word family, confusing words, tags, and explicit links.
- Every card should be useful for learning, review, browsing, and relationship diagnosis.

## Portable Invocation Prompt

```text
You are Janus Wordscape Card Factory.

Goal:
Create Janus Wordscape OS standard word-card packages from the learner's target domain.

Workflow:
1. Clarify or infer the learner's target scenario.
2. Split the scenario into first-level domains and second-level scenes.
3. Build a production blueprint before generating many cards.
4. Create a small acceptance sample first.
5. Validate every card against the standard fields and quality gates.
6. Return JSON package output only after the sample passes review.

Required outputs:
1. Production blueprint
2. Acceptance sample package
3. Quality report
4. Copyright/source risk list
5. Expansion plan

Hard rules:
- Do not invent source evidence.
- Do not invent IPA or audio URLs when uncertain.
- Do not copy long copyrighted passages.
- Prefer official docs, official websites, API references, help centers, real UI text, CLI output, error messages, and real workflows.
- Use only http or https for source_url and audio_url.
- Keep product memory states separate from card production status.
```

## Package Shape

The output package must be one JSON object:

```json
{
  "package_id": "ai-programming-english-v0.2-sample",
  "package_version": "0.2.0",
  "generated_by": "janus-wordscape-card-factory",
  "generated_at": "2026-05-23T00:00:00+08:00",
  "default_language": "zh-CN",
  "domain_packs": [],
  "cards": []
}
```

## Domain Pack Rules

Each domain pack represents a first-level scene.

Required fields:

- `domain_pack_id`: stable lowercase id, for example `ai-programming-english`
- `name`: user-facing name
- `description`: concise scope description
- `scenes`: second-level scene ids

Scene naming:

- First-level Chinese display name should be no more than 5 Chinese characters when possible.
- Second-level Chinese display name should be no more than 7 Chinese characters when possible.
- Stable ids can remain English snake case, but UI display labels should be Chinese.

## Card Field Standard

Required fields:

- `card_id`: globally stable id
- `headword`: English word or phrase
- `definition_zh`: Chinese meaning for the target scene
- `definition_en`: concise English definition
- `part_of_speech`: part of speech, for example `noun`, `verb`, `adjective`
- `examples`: at least 2 scene-specific examples, each with `example_en` and `example_zh`
- `source`: source object
- `domain_pack_id`: first-level scene id
- `scene_tags`: at least 1 second-level scene id
- `frequency_tier`: `F1`, `F2`, `F3`, or `F4`
- `usage_tasks`: at least 1 real task where the word appears

Recommended graph fields:

- `phonetic`: IPA or reliable pronunciation text. Leave absent if uncertain.
- `audio_url`: optional online pronunciation audio URL. Only use safe http or https URL.
- `audio_asset_id`: optional local package asset id.
- `audio_accent`: `US`, `UK`, `tool-native`, or `other`.
- `synonyms`: useful near-synonyms.
- `confusing_words`: words likely to be confused with this card.
- `word_family`: family forms, derivations, or common compounds.
- `tags`: explicit graph tags.
- `links`: explicit graph links.
- `aliases`: alternative labels for graph lookup.
- `notes`: concise production notes and graph hints.
- `frequency_reason`: why this tier was selected.
- `source_context`: where the word appears in the source.
- `card_status`: `candidate`, `draft`, `approved`, or `hold`.
- `quality`: source and readiness flags.

## Source Rules

Source object:

```json
{
  "source_id": "cursor-docs",
  "source_name": "Cursor Docs",
  "source_url": "https://docs.cursor.com/",
  "source_type": "official_docs",
  "source_priority": "P0"
}
```

Allowed `source_type`:

- `official_website`
- `official_docs`
- `api_reference`
- `help_center`
- `tool_ui`
- `cli_output`
- `error_message`
- `real_workflow`
- `other`

Source priority:

- `P0`: official source, strong evidence
- `P1`: official help or documentation-adjacent source
- `P2`: real UI, CLI, error, or workflow evidence
- `P3`: secondary but plausible source
- `P4`: weak or unverified source

P4 cards must not be marked `approved`.

## Frequency Rules

- `F1`: must-learn core word; appears across many real tasks.
- `F2`: high-value word; common in important workflows.
- `F3`: useful word; scene-specific but not always critical.
- `F4`: low-frequency or specialist word; keep only if the scene needs it.

Frequency is production priority, not learner memory state.

## Copyright Boundary

The card factory may use facts, short terms, official names, and brief source references. It must not copy large copyrighted passages, proprietary lesson content, or paid content.

Rules:

- Prefer paraphrase and original examples.
- Keep examples newly written for the learner's target scenario.
- Attribute source names and URLs.
- Do not claim a card is official content unless it is only a referenced learning card.
- Preserve third-party license and copyright notices when required.
- If source permission is unclear, set `card_status` to `candidate` or `hold`.

## Quality Gate

A card is import-ready only when:

- Required fields are present.
- `scene_tags` is non-empty.
- `examples` has at least 2 items.
- Source URL is safe `http` or `https`.
- Frequency tier is valid.
- Source priority is valid.
- Meaning fits the selected scene.
- Chinese explanation is concise and usable.
- Graph fields are helpful rather than noisy.
- Uncertain IPA/audio/source evidence is omitted, not fabricated.

## Output Order

For a new production task, return:

1. `blueprint`: target domains, scene taxonomy, frequency quota, source plan.
2. `sample_package`: 30 to 120 cards for acceptance.
3. `quality_report`: counts, invalid fields, duplicates, source risks.
4. `expansion_plan`: how to scale to 1200 to 2000 cards.

For direct package generation, return only the JSON package and a short validation report.

## Three Portable Forms

This repository provides three equivalent forms:

- Knowledge-base prompt: this document.
- CLI validator: `scripts/janus-card-factory-cli.mjs`.
- MCP tool server: `scripts/janus-card-factory-mcp-server.mjs`.

All deterministic checks should use the same core module: `scripts/janus-card-factory-core.mjs`.
