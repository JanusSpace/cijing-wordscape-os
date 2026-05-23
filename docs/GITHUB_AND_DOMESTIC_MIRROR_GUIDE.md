# GitHub And Domestic Mirror Guide

This guide defines how to publish Janus Wordscape OS through GitHub while preparing for future domestic code mirrors.

## Source Of Truth

GitHub is the source-of-truth repository for:

- source code
- issues and pull requests
- release tags
- GitHub Actions CI
- GitHub Pages deployment
- official release assets
- governance and freeze documents

Domestic mirrors are distribution mirrors unless explicitly promoted by a governance decision.

## Recommended Remote Layout

```bash
git remote -v
```

Recommended names:

```text
origin -> GitHub source repository
gitee  -> domestic mirror repository
```

Add a domestic mirror:

```bash
git remote add gitee <domestic-repo-url>
```

Push after GitHub source is clean:

```bash
git push origin main
git push gitee main
git push origin --tags
git push gitee --tags
```

## Release Order

1. Run local validation.
2. Push to GitHub `origin`.
3. Wait for GitHub Actions CI.
4. Publish GitHub Release.
5. Verify GitHub Pages.
6. Push the same commit and tags to the domestic mirror.
7. Attach or mirror release assets if the domestic platform supports releases.

## Required Pre-Push Checks

```bash
git status --short
corepack pnpm run typecheck
corepack pnpm run test:fsrs-golden
corepack pnpm run build
corepack pnpm run card-factory:report -- examples/standard-word-card-package.example.json
```

For UI release candidates, also run the current UI regression smoke script when the local browser environment is available:

```bash
corepack pnpm run smoke:phase11
```

## What To Mirror

Mirror:

- source code
- docs
- schemas
- examples
- release tags
- release notes
- sample card packages

Do not treat mirrors as independent truth for:

- license policy
- official brand rights
- algorithm governance
- product freeze baselines
- security advisories

Those decisions should be made in the source repository first, then mirrored.

## GitHub Pages And Domestic Pages

If a domestic platform also serves static pages, treat it as a separate site origin.

Important:

```text
Browser IndexedDB data is isolated per origin.
GitHub Pages data and domestic Pages data will not automatically share learning records.
```

Users should export a backup before moving between hosted origins.

Current domestic mirror landing page:

```text
https://gitee.com/janusai_admin/cijing-wordscape-os
```

This `gitee.com` URL is the repository and documentation entry point. It can explain how to import sample packs and own `.json` card packages, but it is not the running PWA origin.

If Gitee Pages is enabled later, document the actual `gitee.io` application URL here and in `README.md`. Do not imply that the repository page and the application page share the same browser storage.

## Release Asset Checklist

Attach these to public releases when available:

- `dist.zip`
- sample word-card package
- schema file
- quick start guide
- changelog
- license and notice files

## Mirror Risk Controls

| Risk | Control |
|---|---|
| Mirror diverges from GitHub | Push only the same commit hash and tags. |
| Users import unsafe community cards | Validate packages with CLI/MCP before import. |
| Domestic pages create a new data origin | Tell users to backup and restore explicitly. |
| License text drifts | Keep license files in source repo and mirror unchanged. |
| Release asset mismatch | Compare checksums where practical. |

## Minimal Public Repo Landing Flow

The GitHub README should point users to:

1. [Start Here](START_HERE.md)
2. [Local Adaptation Guide](USER_LOCAL_ADAPTATION_GUIDE.md)
3. [Card Factory Shape Guide](CARD_FACTORY_SHAPE_GUIDE.md)
4. [GitHub and Domestic Mirror Guide](GITHUB_AND_DOMESTIC_MIRROR_GUIDE.md)

The same four links should remain valid in domestic mirrors.
