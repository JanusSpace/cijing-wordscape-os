# Adaptation Matrix

This matrix helps users choose the right runtime, device path, and card-factory form without reading every technical document.

## Device And Runtime Matrix

| Environment | Recommended access | Data storage | Notes |
|---|---|---|---|
| Phone browser | GitHub Pages or LAN dev URL | Browser IndexedDB | Best for daily learning and review. Export backups regularly. |
| PC browser | GitHub Pages, local dev, or local dist server | Browser IndexedDB | Best for import, backup, graph inspection, and package validation. |
| Installed PWA | Browser install from HTTPS page | Browser IndexedDB | Feels like an app, but data is still browser-site data. |
| Local GitHub checkout | `corepack pnpm run dev` | Browser IndexedDB | Best for development and full regression testing. |
| GitHub Pages | Static PWA | Browser IndexedDB | Best public demo/distribution path. |
| Domestic mirror checkout | Same commands as GitHub checkout | Browser IndexedDB | Mirror is for access and distribution, not a separate source of truth. |

## User Role Matrix

| Role | Use this first | Avoid starting with |
|---|---|---|
| Learner | `Today`, `Notebook`, backup export | Schema, MCP, source governance |
| Card creator | Portable Card Factory doc, sample package, CLI report | Direct 2000-card generation without acceptance sample |
| AI Agent user | Portable prompt / knowledge-base form | MCP server if the agent cannot call tools |
| Developer | CLI validator, schema, freeze docs, smoke tests | Manual app clicks as the only validation |
| Publisher | GitHub Release Plan, mirror guide, license files | Pushing releases before CI and backup checks |

## Card Factory Selection Matrix

| Need | Choose | Why |
|---|---|---|
| I use an AI chat or knowledge-base copilot | Portable prompt / knowledge base | No code required; copy or upload one document. |
| I want to check JSON packages locally | CLI validator | Deterministic validation, count, duplicate report. |
| I want an Agent to call validation tools | MCP server | Tool-callable and reusable across agent workflows. |
| I want all three to stay consistent | Core module | CLI and MCP share `scripts/janus-card-factory-core.mjs`. |

## Compatibility Rules

| Area | Rule |
|---|---|
| Audio | Prefer Web Speech fallback or safe `https` audio URLs. Do not depend on one browser brand. |
| Mobile layout | Use fluid widths, compact chips, and avoid fixed-width panels. |
| Graph | Keep idle graph grayscale, focus red, and provide settings for node size and link strength. |
| Storage | Treat IndexedDB as local user data; export backup before clearing site data. |
| Import | Treat all community packages as untrusted input. Validate URL protocol, size, and schema. |
| Mirror | Mirror code and release assets, but keep governance decisions in GitHub source docs. |

## Recommended Default For Public Users

```text
Open GitHub Pages -> import sample package -> learn on phone -> export backup -> use portable prompt to produce a small custom package -> validate with CLI before importing.
```

## Recommended Default For Developers

```text
Clone GitHub repo -> run typecheck/build -> run card-factory report -> run smoke regression -> push to origin -> mirror to gitee only after source repo passes.
```
