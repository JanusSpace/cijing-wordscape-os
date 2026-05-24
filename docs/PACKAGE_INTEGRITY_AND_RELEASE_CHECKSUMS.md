# Package Integrity and Release Checksums

Release packages should be verifiable after download. This reduces accidental
corruption, mirror drift, and supply-chain ambiguity.

## 1. What to Publish

Each release should publish:

- release zip;
- sample or demo card packages;
- schema file;
- quick-start guide;
- `SHA256SUMS.txt`.

The checksum file should list every release asset that users may download.

## 2. How Checksums Are Generated

`corepack pnpm run package` creates a release folder under:

```text
releases/cijing-wordscape-os-v{version}
```

The package process writes:

```text
SHA256SUMS.txt
```

inside that release folder.

The GitHub release workflow also writes a root `SHA256SUMS.txt` for uploaded
release assets.

## 3. How Users Verify

On macOS or Linux:

```bash
sha256sum -c SHA256SUMS.txt
```

On Windows PowerShell:

```powershell
Get-FileHash .\cijing-wordscape-os-v0.1.0-alpha-dist.zip -Algorithm SHA256
```

Compare the printed hash with `SHA256SUMS.txt`.

## 4. What Checksums Do Not Prove

Checksums confirm that a file matches the published asset. They do not prove:

- legal rights to included content;
- package learning quality;
- that community content is safe;
- that a third-party mirror is official.

For official content rights, use `CONTENT_LICENSE.md` and the package source
ledger.
