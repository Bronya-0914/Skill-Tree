<a id="top"></a>

# Changelog

> **Status**: `current` — compiled from the local Git history and a read-only survey report; corresponds to local HEAD `8d7b4cb` (2026-11-16).
> **Language switch**: [繁體中文](CHANGELOG.md) ｜ [English (this page)](#top)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/>
> **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **Local push state**: no remote, not pushed, no release tag (see [§2](#2-versioning-and-tags)). The live GitHub Pages build is older than local HEAD.
> **Document type**: change history. Every "verification figure" below is a **measurement-day value tied to a specific commit**; for the current state rely on [`ARCHITECTURE.en.md`](ARCHITECTURE.en.md) and the root [`README.en.md`](../README.en.md).

---

## Contents

- [1. Sources and Scope](#1-sources-and-scope)
- [2. Versioning and Tags](#2-versioning-and-tags)
- [3. R0–R8 vs. Commits](#3-r0r8-vs-commits)
- [4. Change-by-Change Timeline (17 commits)](#4-change-by-change-timeline-17-commits)
  - [4.1 Phase 1: Bootstrap, hosting, glass theme (2026-11-09)](#41-phase-1-bootstrap-hosting-glass-theme-2026-11-09)
  - [4.2 Phase 2: Workbench, routing and A+ persistence (2026-11-10)](#42-phase-2-workbench-routing-and-a-persistence-2026-11-10)
  - [4.3 Phase 3: Book reference and courseware rewrite (2026-11-12 to 2026-11-15)](#43-phase-3-book-reference-and-courseware-rewrite-2026-11-12-to-2026-11-15)
  - [4.4 Phase 4: Current state frozen (2026-11-16)](#44-phase-4-current-state-frozen-2026-11-16)
- [5. Final Entry `8d7b4cb`](#5-final-entry-8d7b4cb)
- [6. Deployment and Push State](#6-deployment-and-push-state)
- [7. Accumulated Figures (old record → current)](#7-accumulated-figures-old-record--current)
- [8. Known Limitations](#8-known-limitations)

---

## 1. Sources and Scope

This document was compiled exclusively from read-only sources. No build script was run, no program/JSON/ZIP file was modified, no remote was configured, and nothing was pushed:

```
cd "<repo-root>"
git log --oneline --reverse --date=short --pretty=format:'%h %ad %s'
```

This yields **17 commits**, from `b56ed7b` (2026-11-09) to `8d7b4cb` (2026-11-16), on branch `main`. Remaining facts (verification figures, file responsibilities, limitations) come from the read-only survey report and the three historical documents (`DESIGN-v2.md`, `BOOK-REFERENCE.md`, `MULTIUSER-ARCH.md`).

> **Scope note**: the brief describes the range as "from `e5c9145` to `8d7b4cb`"; however `git log --reverse` starts at `b56ed7b` (`Update Site source`), with `e5c9145` as the second commit — counting only 16 entries. This document follows the authoritative Git output and includes all 17 commits so the history has no gap. The discrepancy is listed as a reporting item.

Local Git state at survey time: `git remote -v` empty, no `remote.*` in `git config --list`, `git branch --show-current` = `main`, `git status --short` clean, `git ls-files | wc -l` = **105** (all 48 `references/` txt files are tracked), author `Sites <sites@users.noreply.openai.com>`, reflog shows local commits only with no push/fetch records.

---

## 2. Versioning and Tags

| Item | Current state |
|---|---|
| Release tag | **No tag has been created** (no tags, no releases locally; no version number is invented). |
| Software release version | **None.** The project has never carried a semantic version; this document does not fabricate a `vX.Y.Z`. |
| `topic.json` `version: 5` | The **learning-pack courseware version** (`learning-packs/cis221-calculus/topic.json`), incremented 1 → 2 → 3 → 5. It is **not** a site release version; the two must not be confused. |
| `schemaVersion` | `1` for learning packs and each `localStorage` state key; `js/i18n-messages.js` is a message catalogue with no version number. |
| Third-party library version | `PACK_FORMAT.md` records `fflate 0.8.3`, but `js/vendor/fflate.js` **contains no version string**, so it cannot be verified from the file and is not listed as a confirmed version. |

---

## 3. R0–R8 vs. Commits

The project follows an R0–R8 engineering process. The 17 commits map onto it as follows (a commit may span several phases; only its primary assignment is shown):

| Phase | Meaning | Commits |
|---|---|---|
| R0 | Requirements and scope freeze | `f9ad456` (multi-user decision "do A first", `MULTIUSER-ARCH.md` §0.1) |
| R1 | Current-state survey and risks | `b56ed7b`, `e5c9145`, `cd2b45a` (book archive), `f9ad456` |
| R2 | Architecture and layout design | `5c72b40`, `b92f25c`, `f9ad456` (A/B/C design) |
| R3 | Environment and hosting config | `e5c9145` (fix `js/hosting.json` `static.directory`) |
| R4 | Layered implementation | `5c72b40`, `b92f25c`, `289a6bd`, `d7051df`, `bdd4a10`, `ecdf8bc`, `82e7051`, `3261234`, `2ec72f2`, `56786a6` |
| R5 | Three-layer verification and defect closure | `fdac21f`, `f9ad456`, `2b5a01c`, `2ec72f2`, `56786a6`, `8d7b4cb` |
| R6 | Versioning and release | **Not performed** (no tag, no push, no authorised release); live Pages is a pre-existing older build |
| R7 | Artefact archiving and decision log | `cd2b45a`, `3261234`, `56786a6`, `8d7b4cb` (including `docs/`) |
| R8 | Real-device / real-hosting validation | **Not performed**; `static.directory="."` never validated on a real hosting platform — listed as a known limitation |

---

## 4. Change-by-Change Timeline (17 commits)

> Figures in the "verification figures" column are measurement-day values recorded in the corresponding round; "—" means the commit carries no independent acceptance figures (see the same-day section). The "known limitations" column quotes that round's stated limitations; for the current state see [§8](#8-known-limitations).

### 4.1 Phase 1: Bootstrap, hosting, glass theme (2026-11-09)

| # | Commit | Date | Change | Verification figures (as measured) | Known limitations |
|---|---|---|---|---|---|
| 1 | `b56ed7b` | 2026-11-09 | `Update Site source` — establishes/updates the initial site source; baseline for all later commits. | — (initial import, no independent acceptance figures) | No `.gitignore`, `LICENSE` or `package.json` yet; the risk of `references/` later being Git-tracked originates here. |
| 2 | `e5c9145` | 2026-11-09 | `Maintain site: fix hosting static directory and commit current sources` — corrects `js/hosting.json`, setting `static.directory` to `"."`, and commits the then-current sources. | This is the only hosting config: `{"project_id":"appgprj_6af1852c8bc88191999e930daeb549ac","static":{"directory":"."}}` | `static.directory="."` makes the entire project root the static root, exposing design docs, tests, source courseware and `references/`; never validated on a real hosting platform (`DESIGN-v2.md` §10.4 self-listed). |
| 3 | `5c72b40` | 2026-11-09 | `Restyle site to glass dark/light theme per reference HTML` — rewrites `styles.css` colours and glass treatment per `index(1).html`, establishing dark/light themes. | `DESIGN-v2.md` §2.1 file sizes at the time: `index.html` 8 KB, `styles.css` 23 KB, `app.js` 16 KB, `catalog.js` 131 KB; §2.3 records "34 DOM IDs, `760×950` viewBox, three `localStorage` keys, 5-script load order" | Only colour/treatment changed; layout dimensions, block placement and component shapes still follow the old site — listed as a deviation to fix in `DESIGN-v2.md` §3.3. |

### 4.2 Phase 2: Workbench, routing and A+ persistence (2026-11-10)

| # | Commit | Date | Change | Verification figures (as measured) | Known limitations |
|---|---|---|---|---|---|
| 4 | `b92f25c` | 2026-11-10 | `Redesign frontend as full-screen workbench with customizable ignite glow` — full-screen workbench, customisable ignite glow (8 swatches + HSV wheel), theme toggle, node-card states. | `DESIGN-v2.md` §10.2 R4 acceptance: "now 44 ID-bearing elements", `11/11` assets, `14/14` tests; §10.2 also records `Fit scale=0.596` | Answers remain client-side; no backend, no accounts; `static.directory="."` unvalidated (`DESIGN-v2.md` §10.4). |
| 5 | `289a6bd` | 2026-11-10 | `Route skill-tree links layer by layer with straight vertical segments` — connections changed from Bézier curves to layer-by-layer straight segments (S1). | `DESIGN-v2.md` §11.4: `43 lines / 234 segments / longest vertical 115px / longest horizontal 630px` | §11.6: presentation-layer change only, data layer untouched; routing figures are that round's measurements and were later refactored. |
| 6 | `fdac21f` | 2026-11-10 | `Cross-reference the later routing change from the R4 spec table` — adds a cross-reference in the R4 spec table marking the later revision to S1. | — (documentation consistency update, no independent acceptance figures) | Historical sections later still quote the stale `117 segments / 31 relays`; read them via the header comparison table. |
| 7 | `d7051df` | 2026-11-10 | `Center the tree on the visible canvas and align Start with the lesson axis` — centring adjustment aligning the tree with the visible canvas and lesson axis. | `DESIGN-v2.md` §12.4: `Fit scale=0.596`, `12/12` assets, `14/14` tests, first edge `M 590 101 V 122.5 H 590 V 144` | §12.6: the centring formula depends on the bounds of that time; `static.directory="."` unvalidated. |
| 8 | `bdd4a10` | 2026-11-10 | `Route connections layer by layer and add movable resizable lesson panel with scratchpad` — layer-by-layer routing; draggable, resizable answer panel and handwriting scratchpad. | `DESIGN-v2.md` §13.5: `117 segments / 43 edges / 31 junctions / total horizontal 7,213px`; §13.4 mentions `resize:both`, double-click title-bar restore, and a third "scratchpad" tab | §13.7: `resize:both` and double-click restore were used then; all three have since become 8-direction custom handles / a draft sidebar inside the quiz tab / single-click open-close — see [§7](#7-accumulated-figures-old-record--current). |
| 9 | `f9ad456` | 2026-11-10 | `Add multi-user architecture assessment and A-mode persistence verification` — adds `MULTIUSER-ARCH.md` (A/B/C evaluation, R0–R2 design) and §9 A-mode persistence measurements. | `MULTIUSER-ARCH.md` §9.1: two static servers on different ports, CDP, clean profiles, **11 checks**, `BROWSER_ERRORS=0`; §9.4: site B "six keys all `null`" | §8: no service enabled, nothing published, no external links produced; ③ account + cloud sync untouched; `117 segments` and "six/seven keys" are stale values. |
| 10 | `ecdf8bc` | 2026-11-10 | `Persist session state and add export/import backup for A-mode` — A+ hardening. Adds `calculus-tree-session-v1` (`schemaVersion:1`) for `selectedId`/`activeTab`/`attempts`; adds `js/backup-ui.js` for backup JSON export/import. | `DESIGN-v2.md` §14.4, `MULTIUSER-ARCH.md` §9.5: **28 CDP checks + 37 existing regressions**, `BROWSER_ERRORS=0`; §9.6 scratchpad redraw **961 non-transparent pixels** | Backups are unencrypted, contain handwriting strokes, and import is overwrite-based; `localStorage` is same-origin bound, so changing domain requires manual export/import. |
| 11 | `82e7051` | 2026-11-10 | `Clarify glow scope, gate quiz submit on full answers, color feedback red/green` — scopes the glow, requires all answers before submit, red/green feedback colours. | `DESIGN-v2.md` §15.4 R5 acceptance table; `node --test` recorded as `14/14` | §15.6: grading is still client-side and answers are inspectable; `static.directory="."` risk unresolved. |

### 4.3 Phase 3: Book reference and courseware rewrite (2026-11-12 to 2026-11-15)

| # | Commit | Date | Change | Verification figures (as measured) | Known limitations |
|---|---|---|---|---|---|
| 12 | `cd2b45a` | 2026-11-12 | `Archive 3000 Solved Problems in Calculus as project book reference` — adds `BOOK-REFERENCE.md` and `references/3000-solved-problems/` (bibliography, 46 chapters, copyright notice, OCR artefacts). | Bibliography: 465 pages, **868,739 characters** of text layer, 913,123 bytes full text, 46 chapter files | The book is Schaum's / McGraw-Hill 1988 copyrighted material stored locally only; `references/` is Git-tracked with no `.gitignore` and must not be published (`BOOK-REFERENCE.md` §8). |
| 13 | `3261234` | 2026-11-12 | `Rewrite functions lesson as book-based sample and bump pack version` — rewrites the `functions` sample node (01) from the book and bumps `topic.json` version 1 → 2. | `BOOK-REFERENCE.md` §9: sample 01 has 9 `content` blocks, 10 four-option questions, answer distribution 2/2/3/3 | The remaining 260 questions were kept this round; new Chinese source text invalidates existing English keys, so `js/i18n-messages.js` must be extended. |
| 14 | `2b5a01c` | 2026-11-12 | `Document sample lesson English catalog fix` — corrects the English message catalogue (`js/i18n-messages.js`) for the sample node. | `BOOK-REFERENCE.md` §9: appends **50 keys** (39 whole-block + 11 per-line) via `Object.assign`; 1,139 existing keys untouched; no Han characters under `lang=en`, `BROWSER_ERRORS=0` | i18n uses the **entire Chinese source string as key**; any courseware text change invalidates old keys; pure mathematical expressions are not translated. |
| 15 | `2ec72f2` | 2026-11-13 | `Line-break formula block, sync catalog keys and tests for v3` — formula blocks switch to explicit `\n` line breaks, English keys and tests synced; `topic.json` version 2 → 3. | `BOOK-REFERENCE.md` §9: formula becomes 5 lines, 4 `<br>`, `text-align:center`; `tests/topic-packs.test.cjs` hard-coded version constants changed to `sample.topic.version + 1` (**14/14 pass**) | Formulas use `white-space:nowrap` + `overflow-x:auto`, mobile font reduced to 15px; long formulas may still require horizontal scrolling. |
| 16 | `56786a6` | 2026-11-15 | `Rewrite lessons 02-27 from the calculus book and line-break every content box` — rewrites `intro` + `content` for the other 26 nodes, optimises line breaks in every box; `topic.json` version 4 → 5. | `BOOK-REFERENCE.md` §9.1: **559 keys** appended, 1,272 existing untouched, "catalogue totals 1,830 keys"; §9.2: 27 `formula` blocks with **116 `<br>`**, examples 169 `<br>`, overflow 0 for all 27 Chinese and English formula boxes; §9.3: **14/14**, 12 script assets, CDP **23 checks**, `BROWSER_ERRORS=0` | §9.4: 260 questions not replaced; records `styles.css` / `js/i18n-messages.js` as "uncommitted", `35 DOM IDs`, `seven localStorage keys`, `117 segments / 31 junctions` — all stale, see [§7](#7-accumulated-figures-old-record--current). |

### 4.4 Phase 4: Current state frozen (2026-11-16)

| # | Commit | Date | Change | Verification figures (as measured) | Known limitations |
|---|---|---|---|---|---|
| 17 | `8d7b4cb` | 2026-11-16 | `Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs` — commits i18n, tree layout, unlock effects, workspace and docs together, forming the current version. | **20/20 tests pass** (`node --test tests/*.test.cjs`); `node --check` passes on all 15 JS/CJS files; `git status --short` clean, `git ls-files` = 105. See [§5](#5-final-entry-8d7b4cb). | No remote, not pushed, no tag; live Pages build is older; `references/` still tracked with no `.gitignore`; no `LICENSE`. See [§8](#8-known-limitations). |

---

## 5. Final Entry `8d7b4cb`

This is the HEAD of local `main` and the "current version":

- **Current version written to Git**: `8d7b4cb Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs` (2026-11-16), author `Sites <sites@users.noreply.openai.com>`.
- **20/20 tests**: `node --test tests/*.test.cjs` reports `# tests 20 / # pass 20 / # fail 0` (`topic-packs.test.cjs` 14, `tree-layout.test.cjs` 3, `i18n.test.cjs` 3). Several historical documents say "14/14" — that was the era with only `topic-packs.test.cjs`.
- **Clean working tree**: `git status --short` produces no output; `styles.css` and `js/i18n-messages.js` are both committed and present in `git ls-files` (the §9.4 "still uncommitted" note is stale).
- **Current measurements**: 13 static assets (1 CSS + 12 JS), 53 static DOM IDs, 8 `localStorage` keys (5 carrying `schemaVersion:1`), 43 `.connection` paths, 0 relay junctions, `bounds = 3069 × 1998`, 1,831 keys in `js/i18n-messages.js`, courseware `version: 5` / 27 nodes / 270 questions / `passCount: 7` / `minutes: 15`.
- **Not done**: `node scripts/build-learning-packs.cjs` was **not** run (it rewrites `catalog.js` and the ZIP); no remote configured, nothing pushed, no tag created, nothing publicly released.

---

## 6. Deployment and Push State

| Item | State |
|---|---|
| Local remote | **None** (`git remote -v` empty, no `remote.*` in `git config --list`). |
| push / fetch | **No records**; reflog shows local commits only. |
| Release tag | **No tag has been created**. |
| Live demo | <https://bronya-0914.github.io/Skill-Tree/> returns `200`, title "微積分漫遊 · Calculus Skill Tree"; all 13 asset paths match local ones. |
| Live vs. local | Live `topic.json` is `version: 1` (local 5); live `catalog.js` first node has only 6 content blocks (local 11); SHA-256 of `app.js` / `styles.css` / `catalog.js` all differ; live `app.js` is 459 lines with **double-click** open/close, local is 435 lines with **single-click**. |
| Live historical docs | `README.md`, `js/hosting.json` → `200`; `DESIGN-v2.md`, `BOOK-REFERENCE.md`, `references/3000-solved-problems/*` → `404` (book full text not published). |
| Repository | <https://github.com/Bronya-0914/Skill-Tree>; no local remote association was established. |

---

## 7. Accumulated Figures (old record → current)

The historical documents (`DESIGN-v2.md` §10–16, `BOOK-REFERENCE.md` §9, `MULTIUSER-ARCH.md` §9) retain many measurement-day figures. The table below maps **old record → current**, with current defined by HEAD `8d7b4cb`. The same comparison appears in the header block of each of the three historical documents.

| Item | Old record (as measured) | Current (`8d7b4cb`) |
|---|---|---|
| Unit tests | `14/14` | **20/20** |
| Static assets | `11/11`, `12/12`, `13/13` | **13 static assets** (1 CSS + 12 JS) |
| DOM IDs | 34 / 35 / 44 | **53** |
| `localStorage` keys | 3 / 6 / 7 keys | **8 keys** (5 carrying `schemaVersion:1`) |
| Connections | 117 segments / 31 relay junctions | **43 `.connection` paths, 0 relay** |
| Answer-panel interaction | `resize:both` / double-click restore / third "scratchpad" tab | **8-direction custom handles** / draft sidebar inside the quiz tab / **single-click open-close** |
| `topic.version` | 1 → 2 → 3 | **1 → 2 → 3 → 5** |
| i18n catalogue | 1,830 keys | **1,831 keys** |
| Fit scale | `Fit scale=0.596` | current `bounds = 3069 × 1998` (`minX:40`, `maxX:3045`, `maxY:1974`) |
| Deployment | "not published, not deployed, not shared" | **GitHub Pages returns 200, but the build is older** |
| Uncommitted changes | "`styles.css` / `js/i18n-messages.js` uncommitted" | **Committed in HEAD `8d7b4cb`; working tree clean** |
| `fflate` | `0.8.3` (`PACK_FORMAT.md`) | **No version string in the file**, cannot be verified |

---

## 8. Known Limitations

1. **Answers are client-side**: `learning-packs/catalog.js` contains 270 `answer` fields, with `nodes/*.json` and the ZIP sharing the same source; `renderQuiz()` compares `question[2]` directly. There are zero matches for `fetch(` / `XMLHttpRequest` / `/api/` / backend services across the project, so there is **no server-side grading**. This project is not a security boundary and must not be used for confidential examinations — see [`SECURITY.en.md`](SECURITY.en.md).
2. **Same-origin constraint**: all state lives in browser `localStorage`; changing URL/domain/browser/device, using incognito, or clearing site data resets everything. Only manual "data backup" export/import can move it. Backup JSON is unencrypted, contains handwriting strokes, and import is overwrite-based.
3. **Copyrighted material must not be published**: the Schaum's / McGraw-Hill 1988 OCR book full text under `references/` is Git-tracked (48 txt files), with `static.directory="."` and no `.gitignore`. Live currently returns `404`, but local configuration does not guarantee exclusion — pushing or packaging for release can easily leak it.
4. **No LICENSE**: the project has no licence of its own; only the third-party `js/vendor/fflate-LICENSE.txt` (MIT).
5. **Deployment inconsistency**: GitHub Pages is reachable but older (courseware v1 vs v5, double-click vs single-click); several "not published" statements in the docs are stale.
6. **Unverified (R8)**: `static.directory="."` never validated on a real hosting platform; real-device touch, cross-device sync and large-node performance are untested.
7. **Implicit coupling**: `BACKUP_KEYS` and `FALLBACK_KEYS` are duplicated definitions; `app.js` and `pack-ui.js` share global `map` / `viewport`; `SkillTreeLayout.build()` mutates the `x/y` of passed-in nodes; `i18n-messages.js` requires exact Chinese string keys.
8. **Local constraints**: no remote, nothing pushed, no tag, no `package.json` / `CNAME` / `.nojekyll` / GitHub Actions workflow; Node is used only for building and testing.

---

[↑ Back to top](#top)
