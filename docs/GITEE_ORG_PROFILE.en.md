# Janus Wordscape OS

Janus Wordscape OS is a local-first personal vocabulary learning runtime. It combines standard word-card packages, FSRS review, relationship graphs, learning analytics, and local backup into a reusable vocabulary-network foundation for technical English, exam English, workplace English, and other domain-specific learning scenarios.

![Janus Wordscape OS Core Value](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/01-core-value.svg)

## What We Are Building

This project is not just a dictionary and not just a flashcard page. The goal is to help each learner build a personal scenario vocabulary network:

- import curated word-card packages for the learner's target scenarios;
- schedule reviews with the FSRS memory algorithm;
- convert real browsing behavior into learning signals through the product rule "clicking a word card means I do not know it";
- use the relationship graph to inspect scenes, sources, word families, confusing words, and tags;
- use analytics to track execution, memory health, stage distribution, and weak scenes;
- protect learning data with local backup and restore.

![From Wordscape OS To Personal Vocabulary Network](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/02-os-card-network.svg)

## Three Layers

**Philosophy**  
Words are not isolated items. They form a network between the learner, scenes, tasks, sources, relationships, and memory states. The learner should not only memorize a word, but also understand why it is hard to remember and which scene should trigger recall.

**Protocol**  
We publish the word-card field standard, import format, FSRS audit rules, copyright boundaries, and community contribution guidelines. Official card packages and official content assets keep separate commercial authorization rights. Community card packages belong to their creators or original rights holders, and contributors should declare sources, licenses, and reuse boundaries.

**Product**  
The current application has five core pages: Today, Notebook, Stats, Graph, and Settings. Together they create a loop: import cards -> learn or browse -> review today -> inspect analytics -> diagnose with graph -> backup and migrate.

![Five Core Pages](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/03-five-pages.svg)

## Quick Start

Online app:

- Cloudflare Pages: https://cijingos.pages.dev
- GitHub Pages: https://janusspace.github.io/cijing-wordscape-os/

Basic workflow:

1. Open the online app.
2. Go to `Settings -> Cards & Backup`.
3. To verify that the app works, import the small sample package. It is a functional test package.
4. To see the full product effect, import the demo package. It includes multiple scene cards and graph relationships.
5. If you already have your own package, choose a `.json` word-card package and import it.
6. Open `Notebook` and start learning or browsing by second-level scene.
7. Clicking a word row means "I do not know this word"; the word enters today's review queue.
8. Open `Today` to complete formal reviews.
9. Export backups regularly from `Settings -> Cards & Backup`.

## Card Factory Skill And Community Packs

We provide a portable card-production method for AI copilots and agents. It helps an assistant analyze a learner's target domain, split it into first-level and second-level scenes, and generate import-ready card packages that follow the Janus Wordscape OS standard.

- Card Factory Skill: `docs/JANUS_WORDSCAPE_CARD_FACTORY_PORTABLE.md`
- Card Field Standard: `docs/REAL_WORD_CARD_PRODUCTION_STANDARD.md`
- Package Schema: `schemas/standard-word-card-package.schema.json`
- Functional Test Package: `data/imports/janus-wordscape-core-acceptance-60.json`
- Product Demo Package: `public/scene-classification-demo-450.json`

![Community Card Ecosystem](https://gitee.com/cijingos/cijing-wordscape-os/raw/main/docs/assets/gitee-profile/04-community-ecosystem.svg)

## How To Contribute

We welcome three types of contribution:

- code contributions for import, backup, review, graph, analytics, compatibility, and security;
- card-package contributions built with auditable sources and the standard field schema;
- real user feedback about learning needs, device compatibility, and interaction issues.

We encourage shared building, but not low-quality bulk copying without sources, permissions, or attribution.

## Copyright And Content Boundary

Janus Wordscape OS uses layered licensing. Software code is governed by the repository's open-source license. Brand assets, official card packages, sample packs, screenshots, manuals, field standards, and other official content assets are not automatically licensed for commercial use with the code. Community card packages belong to their creators or original rights holders, and contributors should declare sources, licenses, and reuse boundaries. The project may remove infringing content, unauthorized bulk copies, and non-compliant community packages.

See `LICENSE`, `CONTENT_LICENSE.md`, `CONTRIBUTOR_CONTENT_POLICY.md`, `TERMS_OF_USE.md`, `TAKEDOWN_POLICY.md`, and `docs/LEGAL_AND_CONTENT_GOVERNANCE_INDEX.md` for the detailed rules.

## Repositories

- Gitee: https://gitee.com/cijingos/cijing-wordscape-os
- GitHub: https://github.com/JanusSpace/cijing-wordscape-os

Start here:

- `README.md`
- `docs/START_HERE.md`
- `docs/QUICK_START.md`
- `docs/PROJECT_BASELINE_FREEZE_INDEX_v1.0.md`
