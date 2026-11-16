<a id="top"></a>

# Contributing Guide

> **Status**: `current` — the standard operating procedure for modifying this project's code, courseware and documentation; corresponds to local HEAD `8d7b4cb` (2026-11-16).
> **Language switch**: [繁體中文](CONTRIBUTING.md) ｜ [English (this page)](#top)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/>
> **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **Scope**: the local `main` working tree; no remote, nothing pushed, no release tag. The live GitHub Pages build is older — see [`CHANGELOG.en.md`](CHANGELOG.en.md).
> **Document type**: current operating procedure, not a historical record.

---

## Contents

- [1. Development Environment](#1-development-environment)
- [2. File Responsibilities](#2-file-responsibilities)
- [3. Courseware Change SOP](#3-courseware-change-sop)
- [4. Front-End Change SOP](#4-front-end-change-sop)
- [5. Commit Message Style](#5-commit-message-style)
- [6. Prohibitions](#6-prohibitions)
- [7. Defect Discipline](#7-defect-discipline)
- [8. R5 Three-Layer Verification](#8-r5-three-layer-verification)
- [9. Writing Decision Records](#9-writing-decision-records)
- [10. Bilingual Documentation Rules](#10-bilingual-documentation-rules)
- [11. Pre-Publish Checklist](#11-pre-publish-checklist)

---

## 1. Development Environment

This project is a **zero-build, purely client-side static site**: open `index.html` directly in a browser. There is no `package.json`, no bundler, and no npm install step.

| Item | Detail |
|---|---|
| Running the site | Open the root `index.html` directly, or serve it over a local static HTTP server (different ports are different origins, so `localStorage` is not shared). |
| Node.js | **Used only for building and testing**; it is not part of the runtime. Survey-time version was Node v22.x; `node --check` and `node --test` are available. |
| Package manager | **None.** Do not add a `package.json` or introduce npm/bundler. The third-party ZIP library ships as `js/vendor/fflate.js` (UMD minified), licensed under `js/vendor/fflate-LICENSE.txt` (MIT). |
| Build command | `node scripts/build-learning-packs.cjs` — the **only** command that rewrites `learning-packs/catalog.js` and `learning-packs/cis221-calculus.zip`. |
| Test command | `node --test tests/*.test.cjs` (currently **20/20**); `node --check` for syntax on all `.js` / `.cjs` files. |
| Version control | Local Git, branch `main`, author `Sites <sites@users.noreply.openai.com>`; keep `git status --short` clean. |
| Language / style | Documentation Chinese is **written Traditional Chinese (Hong Kong usage)**; English is technical English; neither uses emoji. |

> Note: `scripts/build-learning-packs.cjs` rewrites build artefacts — back up or commit first. This document was written **without running** that command.

---

## 2. File Responsibilities

| Path | Responsibility | Editable by hand? |
|---|---|---|
| `index.html` | Single site entry; 53 static DOM IDs, 13 static assets, theme inline script | Yes (front-end work) |
| `app.js` | State machine, DOM templates, zoom/pan, connection drawing, quiz grading, progress | Yes |
| `styles.css` | Visual layer, theme variables, glass treatment, answer panel, mobile bottom sheet | Yes |
| `js/topic-packs.js` | Pure data layer: validation, topological sort, coordinates, version merge, ZIP read/write/CRC32 | Yes |
| `js/pack-ui.js` | Learning-pack import preview UI, library export, topic jump | Yes |
| `js/workspace.js` | Draggable, 8-direction-resizable answer panel; canvas handwriting scratchpad | Yes |
| `js/backup-ui.js` | Client-side backup export/import | Yes |
| `js/glow-settings.js` | Glow colour, HSV wheel, cross-tab sync | Yes |
| `js/i18n.js` | Language-switch engine (translates text nodes in place, no DOM rebuild) | Yes |
| `js/i18n-messages.js` | English message catalogue (`window.SkillTreeEnglish`), currently **1,831 keys** | Yes (append keys) |
| `js/tree-layout.js` | Connection geometry, 28-row fixed `preview` coordinates, `bounds` | Yes |
| `js/unlock-effects.js` | Ignite particle effects | Yes |
| `js/vendor/fflate.js` | Third-party ZIP library (single-line minified) | **No** (third-party file) |
| `js/hosting.json` | Hosting config, `static.directory="."` | Only with owner approval |
| `learning-packs/cis221-calculus/topic.json` | Pack settings (`schemaVersion:1`, `version:5`, `attachTo:start`) | Yes (bump version on change) |
| `learning-packs/cis221-calculus/nodes/*.json` | 27 node sources (**single source of courseware truth**) | Yes |
| `learning-packs/cis221-calculus/README.md` | 27-lesson list | Course index and question-edit workflow |
| `learning-packs/catalog.js` | **Build artefact**: `const LEARNING_PACKS = [...]` | **Never hand-edit** |
| `learning-packs/cis221-calculus.zip` | **Build artefact**: 29 entries | **Never hand-edit** |
| `scripts/build-learning-packs.cjs` | Generates the two artefacts above | Yes (with care) |
| `tests/*.test.cjs` | 3 test files, 20 tests total | Yes |
| `references/3000-solved-problems/*` | OCR book full text (Schaum's / McGraw-Hill 1988), copyrighted | **Never publish, never edit** |
| `README.md`, `README.en.md`, `PACK_FORMAT*`, `AI_TEACHING_GUIDE*`, `I18N.md` | Usage, format, courseware and language documents | See the index |
| `docs/*` | Documentation index, changelog, contributing, security, audit, architecture | Maintained per this guide |

---

## 3. Courseware Change SOP

The **single source of truth** is `topic.json` and `nodes/*.json` under `learning-packs/cis221-calculus/`; `catalog.js` and the ZIP are always build artefacts.

1. **Confirm scope**: change `intro` / `content[]` (concepts and examples) or `questions[]` (quiz items). Their English-catalogue maintenance differs — see step 5.
2. **Edit source JSON**: change `nodes/*.json` only; respect the limits in `js/topic-packs.js` (`schemaVersion===1`, `id` prefixed with `<topic.id>.`, `title` ≤60, `content` 1–60 blocks with `text` ≤6,000 each, `questions` 1–20 with 2–6 options each, `passCount` 1…question count, etc.). Use explicit `\n` line breaks in formula blocks; never rely on browser auto-wrapping.
3. **Bump `topic.version`**: the `version` in `topic.json` must **increase** (currently `5`). `prepare()` rejects courseware whose content changed without a version bump, and rejects older versions. The 1 → 2 → 3 → 5 progression is in [`CHANGELOG.en.md`](CHANGELOG.en.md).
4. **Run the build**: `node scripts/build-learning-packs.cjs`. It scans topic directories, validates, sorts nodes via `localeCompare(...,'zh-Hant',{numeric:true})`, produces the ZIP with `zipSync(...,{level:6})` and immediately self-verifies with `readZip()`, then rewrites `catalog.js` and the ZIP. **Never hand-edit those two artefacts.**
5. **Run tests**: `node --test tests/*.test.cjs`, confirm **20/20**; also run `node --check` on changed files. `topic-packs.test.cjs` compares `catalog.js`, the ZIP and all 27 source JSON files byte-for-byte.
6. **Update i18n**: `js/i18n.js` looks up `window.SkillTreeEnglish` using the **entire Chinese source string as key**, falling back to Chinese when missing; `content` `\n` becomes `<br>`, so each line is a separate text node. Any Chinese text change therefore invalidates old keys — append **whole-block + per-line** keys via `Object.assign(window.SkillTreeEnglish, {...})` in `js/i18n-messages.js` (currently 1,831 keys, 46 parameterised templates). Verify no Han characters remain under `lang=en` in the concept tab, questions, options and graded explanations.
7. **R5 verification**: run static analysis, per-screen measurement and defect closure per [§8](#8-r5-three-layer-verification); Chinese/English formula-box overflow must be 0 and `BROWSER_ERRORS=0`.
8. **Commit**: write the message per [§5](#5-commit-message-style); confirm `git status --short` is clean.

---

## 4. Front-End Change SOP

1. **Read the current spec first**: rely on [`ARCHITECTURE.en.md`](ARCHITECTURE.en.md) and the root `README.en.md`; `DESIGN-v2.md` / `MULTIUSER-ARCH.md` / `BOOK-REFERENCE.md` are historical records whose figures are not current.
2. **Identify the layer**: data (`js/topic-packs.js`) → presentation (`js/tree-layout.js`, `app.js` `renderTree()`) → interaction (`app.js`, `js/workspace.js`) → features (`js/pack-ui.js`, `js/backup-ui.js`, `js/glow-settings.js`, `js/i18n*.js`). Each layer is independently verifiable.
3. **Beware implicit coupling**: `app.js` and `pack-ui.js` share global `map` / `viewport`; `SkillTreeLayout.build()` **mutates** the `x/y` of passed-in nodes; `BACKUP_KEYS` (`app.js`) and `FALLBACK_KEYS` (`js/backup-ui.js`) are duplicated definitions that must be kept in sync when adding/removing `localStorage` keys (currently 8).
4. **Syntax and tests**: run `node --check` on every changed `.js`; run `node --test tests/*.test.cjs` (20/20).
5. **Per-screen measurement**: verify desktop and mobile (390px), dark/light themes, Chinese/English switch, single-click open/close, ignite effects, answer-panel drag and 8-direction resize, scratchpad, backup export/import; record `BROWSER_ERRORS=0`.
6. **Documentation sync**: if the change affects DOM IDs, asset count, `localStorage` keys, connection count, bounds or i18n key count, update `docs/ARCHITECTURE.en.md` and related docs, and note it in the header comparison table of the historical documents (their body text stays unchanged).

---

## 5. Commit Message Style

Follow the convention of the existing 17 local commits:

| Rule | Detail |
|---|---|
| Language | **English**, single line. |
| Tone | Verb-first or noun phrase, sentence case, **no trailing period**, no emoji. |
| Length | Concise, roughly 50–72 characters; use `:` to introduce scope where useful, e.g. `Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs`. |
| Content | Describe *what was done*; may include version/scope keywords; no empty messages, no "WIP" mixed into formal history. |
| Real examples | `Update Site source`, `Restyle site to glass dark/light theme per reference HTML`, `Rewrite lessons 02-27 from the calculus book and line-break every content box`, `Checkpoint current site: ...`. |
| Boundary | **No remote, no push** locally; commits are written to local Git only. No public release without the owner's explicit approval. |

---

## 6. Prohibitions

The following are hard boundaries:

1. **Never hand-edit `learning-packs/catalog.js` or `learning-packs/cis221-calculus.zip`**: both are build artefacts of `scripts/build-learning-packs.cjs` and must always be regenerated from source JSON.
2. **Never publish `references/`**: it contains the OCR full text of a copyrighted book (Schaum's Outline Series / Elliot Mendelson / McGraw-Hill 1988); it is Git-tracked with no `.gitignore` and leaks easily on release or packaging. See [`SECURITY.en.md`](SECURITY.en.md).
3. **Never delete `.git/`**: the local Git history (17 commits) is the only version record; no `rm -rf .git`, no `git reset --hard` that overwrites existing commits.
4. **Never release without approval**: no push, no remote, no release tag, no cloud service, no public share link; release requires separate explicit owner authorisation.
5. **Maintain bilingual pairs and the index when editing docs**: `README.md` / `README.en.md` / `PACK_FORMAT*` / `AI_TEACHING_GUIDE*` / `I18N.md` / the `learning-packs` READMEs.
6. **Do not modify code / JSON / ZIP as a documentation-tidying measure**: documentation work writes `.md` only; within this task's boundary `app.js`, `styles.css`, `*.json`, `*.zip` must not change.
7. **Do not move or delete the 35 out-of-project MD files**: the owner chose "keep all in place, do not delete or move" — see [`MD-AUDIT.md`](MD-AUDIT.md).
8. **Never commit Moodle tokens, token-bearing download URLs, original course materials, or personal identity data into the repo**: an established confidentiality red line.

---

## 7. Defect Discipline

Every defect must complete the "symptom → root cause → fix → regression" loop and leave a written record (format: the "defect closure" tables in the sections of `DESIGN-v2.md`):

| Field | Requirement |
|---|---|
| Symptom | Reproducible, concrete description (which screen, which step, which value). |
| Root cause | Point to the specific file and function; no "probably" or "roughly". |
| Fix | State what changed, why, and which alternatives were rejected. |
| Regression | List re-run commands and results (`node --check`, `node --test`, per-screen CDP item count, `BROWSER_ERRORS`), confirming no new defects. |

Defects must not be silently fixed without a record; a failing verification must never be marked as passed.

---

## 8. R5 Three-Layer Verification

All three layers of the project's existing R5 definition are mandatory:

| Layer | Content | Command / criterion |
|---|---|---|
| ① Static analysis | Syntax, unit tests, format and string scans | `node --check` on all `.js` / `.cjs`; `node --test tests/*.test.cjs` **20/20**; CSS bracket depth 0 / bad 0; `js/i18n-messages.js` untranslated-string scan 0; secret scan with no token/secret hits. |
| ② Runtime per-screen measurement | Browser/CDP verification of each screen | Concept tab, quiz tab, Chinese/English switch, ignite effects, answer-panel drag/resize, scratchpad, backup export/import, mobile 390px; `docWidth = innerWidth`, formula-box overflow 0, `BROWSER_ERRORS=0`; screenshots stored where no build command clears them. |
| ③ Defect closure | Symptom → root cause → fix → regression table | Per [§7](#7-defect-discipline); every "must-fix-first" risk has a mitigation; regression results written back to docs. |

> "Answers are not in the front end" **does not hold** for this project (see [`SECURITY.en.md`](SECURITY.en.md)). If server-side grading is adopted later, a separate "no answers in front-end source or network responses" check must be defined; it is not a current pass criterion.

---

## 9. Writing Decision Records

Technical decisions must be traceable, following `DESIGN-v2.md` §0/§9 and `MULTIUSER-ARCH.md` §4.7:

- **Decision table**: list "item → explicit option → rationale → impact" for each; no "roughly" or "later"; list out-of-scope items explicitly deferred.
- **Rejected options**: a table of "rejected approach → reason", e.g. "pure front-end + cloud DB for answer secrecy" was rejected because the front end must read answers to grade and any user can scrape them.
- **Baseline metadata**: every decision carries a date, baseline commit hash (e.g. `8d7b4cb`) and workspace path.
- **Measurements**: any figure (DOM ID count, connection count, test count, bounds, key count) is tagged with its **measurement day and corresponding commit**; the current state comes from `docs/ARCHITECTURE.en.md` and `README.en.md`.
- **Change control**: a "file → change required? → impact" list, noting which documents are preserved as historical records and left untouched.

---

## 10. Bilingual Documentation Rules

| Rule | Detail |
|---|---|
| Paired files | `name.md` (Traditional Chinese) / `name.en.md` (English), each **linking to the other**; e.g. [`CONTRIBUTING.md`](CONTRIBUTING.md) ↔ [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md). |
| Single-file bilingual | One file with two sections: `docs/README.md` uses a "Traditional-Chinese + English comparison table", [`MD-AUDIT.md`](MD-AUDIT.md) includes an "English Summary", `I18N.md` uses "## 繁體中文" / "## English". |
| Required elements | Every document has: title block, status (`current` / `historical` / `local-only`), table of contents, language switch or bilingual comparison, and back-to-top. |
| Required URLs | Every document includes the live demo <https://bronya-0914.github.io/Skill-Tree/> and the repository <https://github.com/Bronya-0914/Skill-Tree>. |
| Wording | Chinese in written Traditional Chinese (Hong Kong usage); English in technical English; no emoji in either. |
| Historical documents | The three historical documents (`BOOK-REFERENCE.md`, `DESIGN-v2.md`, `MULTIUSER-ARCH.md`) receive a "Document Status & Current-State Comparison" block at the top (language switch / bilingual summary, URLs, nature, HEAD, `<details>` TOC, comparison table, usage note); **original titles and all original sections are preserved**. |
| Current-state source | All current figures in documentation come from `docs/ARCHITECTURE.en.md` and the root `README.en.md`, never from historical measurement values. |

---

## 11. Pre-Publish Checklist

> This project is **not currently authorised for release**; the following applies only once explicit approval is obtained, and is recorded here for reference. Full risks are in [`SECURITY.en.md`](SECURITY.en.md).

- [ ] **Explicit** release authorisation obtained from the owner (verbal/written), with scope confirmed.
- [ ] `references/` fully excluded from the static root (change `static.directory` or build a clean publish directory — requires separate approval); confirm book full text, design docs and tests are not published.
- [ ] No `config.json`, token, password, API key or personal identity data in the repo.
- [ ] `git status --short` clean; `node --test tests/*.test.cjs` **20/20**; `node --check` fully passing.
- [ ] Local and live versions confirmed identical (courseware version, open/close interaction, `app.js` / `styles.css` / `catalog.js` hashes).
- [ ] `LICENSE` decided (currently absent); third-party `fflate-LICENSE.txt` included.
- [ ] [`CHANGELOG.en.md`](CHANGELOG.en.md) and the documentation index [`README.md`](README.md) status updated.
- [ ] Publish configuration and reporting channel recorded in [`SECURITY.en.md`](SECURITY.en.md).

---

[↑ Back to top](#top)
