# Start Here: Janus Wordscape OS

This is the first reading page for GitHub users and future domestic mirror users.

Project name:

```text
Janus Wordscape OS
Current scenario app: Janus Wordscape OS · Technical Vocabulary Network
```

The product is a local-first vocabulary memory runtime. It imports prepared word-card packages, runs learning and review workflows, records memory events, and uses a relationship graph to help users understand why a word is hard to remember.

## Choose Your Path

| I want to... | Start here | Then read |
|---|---|---|
| Use the app on phone or PC | [Local Adaptation Guide](USER_LOCAL_ADAPTATION_GUIDE.md) | [Quick Start](QUICK_START.md) |
| Import my own cards | [Quick Start](QUICK_START.md) | [Import Format](IMPORT_FORMAT.md) |
| Ask AI to make cards | [Card Factory Shape Guide](CARD_FACTORY_SHAPE_GUIDE.md) | [Portable Card Factory](JANUS_WORDSCAPE_CARD_FACTORY_PORTABLE.md) |
| Validate a card package | [Card Factory Shape Guide](CARD_FACTORY_SHAPE_GUIDE.md) | `scripts/janus-card-factory-cli.mjs` |
| Connect an AI Agent | [Card Factory Shape Guide](CARD_FACTORY_SHAPE_GUIDE.md) | `scripts/janus-card-factory-mcp-server.mjs` |
| Read the frozen product baseline | [Project Baseline Freeze Index](PROJECT_BASELINE_FREEZE_INDEX_v1.0.md) | [UI Freeze Index](UI_FREEZE_INDEX_v1.0.md) |
| Publish or mirror the repo | [GitHub and Domestic Mirror Guide](GITHUB_AND_DOMESTIC_MIRROR_GUIDE.md) | [GitHub Release Plan](GITHUB_RELEASE_PLAN.md) |

## The Five User-Facing Areas

| Area | What it does |
|---|---|
| Today | Shows only due review cards and runs formal FSRS review. |
| Notebook | Organizes cards by domain and second-level scene, with study and word-list subpages. |
| Stats | Shows only decision-useful memory statistics. |
| Graph | Shows word, scene, source, tag, family, and confusing-word relationships. |
| Settings | Manages learning rules, profile, card import/backup, data health, help, and algorithm notes. |

## First Import Choice

Open the public app:

```text
https://janus-ai.github.io/cijing-wordscape-os/
```

Then go to:

```text
设置 -> 词卡与备份
```

Use this decision rule:

| Situation | Choose | Meaning |
|---|---|---|
| First time, just checking whether it works | 导入小样例 | Small functional test package. |
| Want to see the full product effect | 导入演示包 | Product demo package with scene cards and graph relationships. |
| Already have your own cards | 选择文件 | Choose a local `.json` card package, then click import. |

All imported learning data is stored in the current browser's local IndexedDB.

## The Three Card Factory Forms

| Form | Best for | Where it runs |
|---|---|---|
| Portable prompt / knowledge base | Non-technical AI users | Any AI assistant that supports custom instructions or knowledge files. |
| CLI validator | Local users and developers | GitHub checkout, local terminal, CI, domestic mirror checkout. |
| MCP server | Agent builders | MCP-capable AI agents and local tool runtimes. |

## GitHub First, Mirror Ready

GitHub is the source-of-truth repository for code, issues, releases, and GitHub Pages deployment.

Domestic code platforms can mirror the same repository tree for access speed and distribution. The mirror should not become a separate product truth source unless an explicit governance decision is made.

Recommended remote names:

```text
origin -> GitHub source repository
gitee  -> domestic mirror repository
```

Read [GitHub and Domestic Mirror Guide](GITHUB_AND_DOMESTIC_MIRROR_GUIDE.md) before publishing or mirroring.

## Minimal Reading Order

For normal users:

1. [Quick Start](QUICK_START.md)
2. [Local Adaptation Guide](USER_LOCAL_ADAPTATION_GUIDE.md)
3. [Card Factory Shape Guide](CARD_FACTORY_SHAPE_GUIDE.md)

For developers:

1. [Project Baseline Freeze Index](PROJECT_BASELINE_FREEZE_INDEX_v1.0.md)
2. [Data Flow Freeze](DATA_FLOW_FREEZE_v1.0.md)
3. [Memory Algorithm Freeze](MEMORY_ALGORITHM_FREEZE_v1.0.md)
4. [GitHub and Domestic Mirror Guide](GITHUB_AND_DOMESTIC_MIRROR_GUIDE.md)
