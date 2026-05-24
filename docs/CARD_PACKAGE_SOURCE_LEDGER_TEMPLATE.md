# Card Package Source Ledger Template

Use this file as the source and rights ledger for official or community word-card
packages.

```text
package_id:
package_version:
package_title:
creator:
maintainer:
reviewer:
created_at:
updated_at:
package_license:
commercial_reuse: yes / no / unknown / separate-permission-required
redistribution: yes / no / unknown
modification: yes / no / unknown
official_status: official / community / internal / candidate
```

## Source Summary

| Source ID | Source name | URL or identifier | Owner / publisher | License / permission | Used for | Copying level | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| source-001 |  |  |  |  | fact check / examples / audio / translation / scene design | original wording / summary / short quote / direct copy |  |

## Card Coverage

| Scene | Card count | Main sources | Reviewer | Status |
| --- | ---: | --- | --- | --- |
|  |  |  |  | candidate / draft / approved / hold |

## Audio and Pronunciation

| Audio type | Source | License / permission | Storage mode | Notes |
| --- | --- | --- | --- | --- |
| browser speech synthesis | browser runtime | browser-provided | not packaged | preferred fallback |
| remote audio URL |  |  | linked only | verify URL protocol and rights |
| bundled audio asset |  |  | packaged | require explicit permission |

## AI Assistance

```text
ai_tool_or_model:
ai_role: scene analysis / draft definitions / examples / translation / QA
human_reviewer:
verification_sources:
known_limitations:
```

## Rights Review

Before release, confirm:

- [ ] Every source has a license or permission status.
- [ ] No bulk-copied dictionary entries are included.
- [ ] No proprietary audio files are bundled without permission.
- [ ] Long excerpts were replaced with original wording or links.
- [ ] Third-party names are used only as truthful source references.
- [ ] Official and community content boundaries are clear.
- [ ] Package metadata declares creator, license, and commercial-use status.
- [ ] The package passes schema validation.

## Release Decision

```text
decision: approve / hold / reject
decision_date:
decision_maker:
reason:
follow_up:
```
