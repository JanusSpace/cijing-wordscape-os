# Contributor Content Policy

This policy applies to community card packages, examples, documentation assets,
screenshots, audio metadata, and any learning content submitted to Janus
Wordscape OS.

## 1. Core Rule

Only contribute content that you created, have permission to share, or can
legally reuse under a compatible license.

When in doubt, cite the source and mark the item for review instead of publishing
it as approved content.

## 2. Required Source Discipline

Every submitted card package should include a source ledger. At minimum, each
source entry should identify:

- source name;
- source URL or publication identifier;
- source owner or publisher when known;
- source license or permission status;
- whether text, audio, image, or only factual reference data was used;
- whether the card wording is original, summarized, quoted, or translated.

Use `docs/CARD_PACKAGE_SOURCE_LEDGER_TEMPLATE.md` as the default format.

## 3. Dictionary and Reference Boundaries

Do not bulk-copy dictionary entries, paid decks, paid course material, textbook
content, screenshots, or audio files unless their license clearly allows that
reuse.

Allowed patterns:

- use public sources to verify facts;
- write original definitions and examples;
- cite short source references where needed;
- link to the source instead of copying long passages;
- use browser speech synthesis or licensed audio instead of embedding
  third-party audio files.

Not allowed without permission:

- copying dictionary definitions at scale;
- scraping commercial word lists and packaging them as original work;
- bundling proprietary audio files;
- removing source or license metadata;
- submitting content that impersonates official Janus content.

## 4. AI-Assisted Card Creation

AI-assisted drafting is allowed when the contributor remains responsible for the
result.

AI-assisted packages should still declare:

- model or tool used when relevant;
- human reviewer;
- source materials used for verification;
- quality status: `candidate`, `draft`, `approved`, or `hold`;
- known uncertainty or rights restrictions.

AI output is not automatically copyright-safe, accurate, or ready for learning.

## 5. Community Package License

Each shared community package should declare a package license. If no license is
declared, the package must be treated as all-rights-reserved by its creator and
should not be redistributed.

Recommended metadata:

```text
creator:
package_license:
commercial_reuse:
redistribution:
modification:
source_ledger:
contact:
```

## 6. Official Status

Community packages are not official packages unless explicitly accepted and
published as official content by the project owner.

Do not use names, screenshots, or descriptions that imply official endorsement
without written permission.

## 7. Review Checklist

Before submitting a community card package:

- run schema validation;
- remove unsupported URL protocols;
- verify audio URLs;
- check package size;
- include source and license metadata;
- include creator contact or issue-reporting path;
- confirm that no official content has been repackaged as community content;
- confirm that the package does not claim official status.

For package submission details, use
`docs/COMMUNITY_CARD_PACKAGE_SUBMISSION_TEMPLATE.md`.
