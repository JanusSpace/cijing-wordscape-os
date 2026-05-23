# User Local Adaptation Guide

This guide explains how to adapt Janus Wordscape OS to different phones, browsers, and local environments.

## Core Rule

The app is local-first. Learning data is saved in the browser's IndexedDB for the current site origin.

That means these are different data spaces:

```text
https://user.github.io/cijing-wordscape-os/
http://127.0.0.1:5173/
http://192.168.x.x:5173/
https://gitee-pages-or-other-mirror/
```

Export a backup before switching devices, clearing browser data, or changing site origin.

## Phone Use

Recommended path:

1. Open the published HTTPS page.
2. Import a standard JSON word-card package.
3. Use `Today` for due review.
4. Use `Notebook` for scene-based learning and word-list browsing.
5. Export backup regularly from `Settings`.

If using a LAN preview:

```text
PC and phone must be on the same network.
The dev server must bind to 0.0.0.0, not only 127.0.0.1.
Use the PC LAN IP, for example http://192.168.10.6:5173/.
```

## PC Use

Recommended path:

1. Use PC for import, backup, graph inspection, and card-package validation.
2. Use phone for daily review if that is more natural.
3. Do not assume PC browser data and phone browser data are synced.

## PWA Install

The app can be installed from a browser that supports PWA installation.

The PWA still uses browser-site storage. Uninstalling the PWA or clearing site data may remove local learning records.

## Audio Adaptation

The app supports pronunciation through:

- card fields such as `phonetic`, `audio_url`, and `audio_asset_id`
- browser speech capability when available

Compatibility rule:

```text
If a browser blocks autoplay or external audio, require a direct user click and fall back to browser speech.
```

Card creators must not fabricate audio URLs. Use safe `https` URLs or omit the field.

## Graph Adaptation

For smaller phones:

- increase node size if nodes are too hard to touch
- reduce link density if the graph feels crowded
- use graph focus settings before forcing more visual labels

For PC:

- use mouse wheel to zoom
- click once to highlight a node
- click the highlighted node again to open details
- drag canvas for navigation

For touch devices:

- touch once to highlight
- touch highlighted node again to open details
- pinch to zoom where supported

## Backup And Restore

Minimum safe habit:

```text
Before importing a large package -> export backup.
Before clearing browser data -> export backup.
Before switching URL origin -> export backup.
After a successful restore -> verify card count and Today queue.
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Phone cannot open LAN address | Dev server bound to localhost or firewall blocked | Run dev server on host `0.0.0.0`, check firewall, use PC LAN IP. |
| Imported data not visible on another device | IndexedDB is local per browser and origin | Export backup on source device and restore on target device. |
| Audio has no sound | Browser permission, missing audio URL, or speech unsupported | Click directly, use HTTPS, verify device volume, fall back to another browser. |
| Graph nodes too small | Device density or graph settings mismatch | Increase node size and reduce density. |
| Page looks different after mirror | Different URL origin and cache | Hard refresh, verify same release version, restore backup if needed. |
