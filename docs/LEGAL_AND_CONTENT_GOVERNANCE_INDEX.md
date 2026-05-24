# Legal and Content Governance Index

This index connects the repository's software, brand, content, and community
package governance documents.

## License Layers

```text
Software code: LICENSE
Third-party notices: NOTICE
Official learning content: CONTENT_LICENSE.md
Documentation text: DOCS_LICENSE.md
Brand and official identity: BRAND_POLICY.md
Commercial-use boundary: COMMERCIAL_USE.md
```

## User and Community Rules

```text
User terms: TERMS_OF_USE.md
Contributor content rules: CONTRIBUTOR_CONTENT_POLICY.md
Takedown process: TAKEDOWN_POLICY.md
Privacy boundary: PRIVACY.md
Security reporting: SECURITY.md
```

## Card Package Governance

```text
Source ledger template: docs/CARD_PACKAGE_SOURCE_LEDGER_TEMPLATE.md
Community package submission template: docs/COMMUNITY_CARD_PACKAGE_SUBMISSION_TEMPLATE.md
Official content distribution policy: docs/OFFICIAL_CONTENT_DISTRIBUTION_POLICY.md
Release checksums and integrity: docs/PACKAGE_INTEGRITY_AND_RELEASE_CHECKSUMS.md
Card package schema: schemas/standard-word-card-package.schema.json
Import format: docs/IMPORT_FORMAT.md
Production standard: docs/REAL_WORD_CARD_PRODUCTION_STANDARD.md
```

## Third-Party Algorithm Governance

```text
Third-party algorithm governance: docs/THIRD_PARTY_ALGORITHM_GOVERNANCE.md
Memory algorithm freeze: docs/MEMORY_ALGORITHM_FREEZE_v1.0.md
```

FSRS/ts-fsrs is a third-party algorithm dependency. The project must keep the
library version locked, record scheduler metadata in review events, keep golden
tests, and distinguish raw FSRS output from product-rule adapted state.

## Public Release Minimum

Before publishing a release:

1. Run typecheck, FSRS golden test, build, and security smoke checks.
2. Verify package source ledgers for official learning content.
3. Verify that official content is not accidentally licensed as software code.
4. Generate and publish SHA256 checksums for release assets.
5. Keep community packages marked as untrusted unless reviewed.
6. Keep product rules separate from raw FSRS behavior.
