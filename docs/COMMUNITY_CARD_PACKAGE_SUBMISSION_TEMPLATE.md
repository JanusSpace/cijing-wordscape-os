# Community Card Package Submission Template

Use this template when submitting a community-created word-card package.

## Package Identity

```text
package_id:
package_title:
package_version:
creator_name:
creator_contact:
target_learners:
target_scenes:
card_count:
language_pair:
```

## License and Reuse

```text
package_license:
commercial_reuse: yes / no / unknown
redistribution: yes / no / unknown
modification: yes / no / unknown
contains_third_party_material: yes / no / unknown
```

If no license is declared, the package is treated as all-rights-reserved by the
creator and should not be redistributed.

## Source Ledger

Attach or link a completed source ledger:

```text
docs/CARD_PACKAGE_SOURCE_LEDGER_TEMPLATE.md
```

Required source information:

- source name;
- URL or publication identifier;
- owner or publisher when known;
- license or permission status;
- whether text, audio, image, or only factual reference data was used.

## Quality Checklist

- [ ] JSON package matches `schemas/standard-word-card-package.schema.json`.
- [ ] Required fields are complete.
- [ ] Scene tags are meaningful and not overly broad.
- [ ] Frequency tiers are assigned consistently.
- [ ] Definitions and examples are original or properly licensed.
- [ ] Audio URLs use `https:` or another approved safe protocol.
- [ ] No unsupported URL protocol is used.
- [ ] Package size is appropriate for browser import.
- [ ] Package does not claim official status.
- [ ] Package includes creator and license metadata.

## Security Checklist

- [ ] No executable code is embedded.
- [ ] No HTML or script payload is included in text fields.
- [ ] No tracking URLs are intentionally embedded.
- [ ] No private keys, tokens, or personal data are included.
- [ ] External URLs are necessary and source-related.

## Review Result

```text
reviewer:
review_date:
result: accept / request changes / reject / hold
reason:
required_changes:
```
