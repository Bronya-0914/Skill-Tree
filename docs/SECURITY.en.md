<a id="top"></a>

# Security Policy

> **Status**: `current` — describes this project's security boundary, data visibility and pre-publish obligations; corresponds to local HEAD `8d7b4cb` (2026-11-16).
> **Language switch**: [繁體中文](SECURITY.md) ｜ [English (this page)](#top)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/>
> **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **One-line conclusion**: **This project is not a security boundary.** It is a purely client-side, zero-backend learning demo; anything delivered to the browser can be fully inspected by the user.
> **Document type**: current security statement; no remote, nothing pushed, no release tag locally, and the live Pages build is older.

---

## Contents

- [1. Security Boundary Statement](#1-security-boundary-statement)
- [2. Answers Are Client-Side (Not for Confidential Exams)](#2-answers-are-client-side-not-for-confidential-exams)
- [3. No Backend, No Accounts, No Server-Side Grading](#3-no-backend-no-accounts-no-server-side-grading)
- [4. Eight localStorage Keys and the Same-Origin Constraint](#4-eight-localstorage-keys-and-the-same-origin-constraint)
- [5. Data Backup: Unencrypted, Contains Strokes, Overwrite Import](#5-data-backup-unencrypted-contains-strokes-overwrite-import)
- [6. static.directory and the Copyrighted references/ Book](#6-staticdirectory-and-the-copyrighted-references-book)
- [7. Licence Status (No LICENSE)](#7-licence-status-no-license)
- [8. How to Report Issues](#8-how-to-report-issues)
- [9. Pre-Publish Checklist](#9-pre-publish-checklist)
- [10. Risk Register Summary](#10-risk-register-summary)

---

## 1. Security Boundary Statement

The project's design goal is "single-machine, purely client-side, self-study skill tree"; it was **never designed to protect confidential data**:

- No authentication, no roles, no server-side computation, no data isolation.
- There is no trusted "server" in which to keep a secret; anything the browser receives can be read from DevTools, source files or network responses.
- Therefore the project **must not** be used for formal examinations requiring answer secrecy, scored assessments, or storage of sensitive personal data.
- This is an architectural decision, not a defect. `MULTIUSER-ARCH.md` §0 already states that "pure front-end + cloud database cannot keep answers secret". Confidential grading would require separate trusted server-side logic (options B/C, not implemented).

---

## 2. Answers Are Client-Side (Not for Confidential Exams)

| Item | Fact |
|---|---|
| Answer count | `learning-packs/catalog.js` contains **270** `"answer"` fields (27 lessons × 10 questions). |
| Same-source files | `learning-packs/cis221-calculus/nodes/*.json` (27 source JSON files) and `learning-packs/cis221-calculus.zip` (29 entries) are consistent with `catalog.js`. |
| Grading location | `app.js` `renderQuiz()` compares `question[2]` (answer index) directly and scores; `js/topic-packs.js` `validate()` only checks answer format. |
| Visibility | These files are static assets shipped to the browser; anyone can open DevTools or download `catalog.js` / the ZIP to obtain every correct answer and explanation. |
| Conclusion | **Answers are fully public.** "Open-source platform, answers on the back end" was an earlier concept and was **not implemented here**; this project is a demo with answers in the front end. |

> Risk `F1` (`MULTIUSER-ARCH.md` §3.2): 270 answers ship with front-end files, amplified in multi-user scenarios. Current treatment is "explicitly accept publicity and document it", not technical concealment.

---

## 3. No Backend, No Accounts, No Server-Side Grading

Read-only survey result: project-wide searches for `fetch(`, `XMLHttpRequest`, `/api/`, `firebase`, `supabase`, `cloudservice` returned **zero matches**.

| Item | State |
|---|---|
| Backend service | None. No Express/Node service, no API routes, no `server/`. |
| Account system | None. No `users`, no sessions, no roles, no `owner_user_id`, no data isolation. |
| Server-side grading | None. Grading happens in the browser inside `app.js`. |
| Cloud services | None. No database, auth, file storage or model calls enabled; no `config.json`, no token/API key in the repo. |
| Secret scan | No `token` / `password` / `secret` / `api key` / `Bearer` / `moodle` matches project-wide (`MULTIUSER-ARCH.md` §3.1). |

> The A/B/C evaluation, R0–R2 design and the `server/`, `cloud.js` directories in `MULTIUSER-ARCH.md` are **unimplemented designs** and do not represent existing functionality.

---

## 4. Eight localStorage Keys and the Same-Origin Constraint

All state lives in browser `localStorage`. `BACKUP_KEYS` in `app.js` (identical to `FALLBACK_KEYS` in `js/backup-ui.js`) holds **8 keys**, of which **5** carry `schemaVersion:1`:

| Key | Value format | `schemaVersion` | Purpose |
|---|---|---|---|
| `calculus-tree-progress-v1` | `{started, completed[], scores{}}` | none | Progress and scores |
| `calculus-tree-packs-v1` | `{schemaVersion:1, packs:[...]}` | 1 | User-imported learning packs |
| `calculus-tree-session-v1` | `{schemaVersion:1, selectedId, activeTab, attempts}` | 1 | Selected lesson / tab / unsubmitted answers |
| `skill-tree-theme` | `'dark' \| 'light'` | none | Dark/light theme |
| `calculus-tree-glow-v1` | `{schemaVersion:1, color}` | 1 | Ignite glow colour |
| `calculus-tree-lesson-frame-v1` | `{schemaVersion:1, left, top, width, height, ...}` | 1 | Answer-panel position and size |
| `calculus-tree-scratch-v1` | `{schemaVersion:1, strokes:[...]}` | 1 | Handwriting scratchpad strokes |
| `skill-tree-language` | `'zh-Hant' \| 'en'` | none | UI language |

**Same-origin policy**: `localStorage` is scoped by origin (scheme + domain + port).

- Changing URL, domain, port, browser, device; using incognito; or clearing site data → **all state resets**, with no automatic sync.
- `MULTIUSER-ARCH.md` §9.4 measured: on a different port (equivalent to a different domain), all eight keys were `null`, `started=false`, `0 / 27`, dark theme, white glow.
- The only way to move data is manual "data backup" JSON export/import (see [§5](#5-data-backup-unencrypted-contains-strokes-overwrite-import)).
- This is browser behaviour, not a program defect.

---

## 5. Data Backup: Unencrypted, Contains Strokes, Overwrite Import

`js/backup-ui.js` provides a client-side backup (`window.SkillTreeBackup`):

| Item | Detail |
|---|---|
| Payload | `{app:'calculus-skill-tree', schemaVersion:1, exportedAt, keys:{key: raw string \| null}}`; the 8 keys are stored as **raw strings**, `null` meaning the key is absent. |
| Filename | `skill-tree-backup-YYYY-MM-DD.json`. |
| Encryption | **None.** The file is plaintext JSON containing progress, scores, answer sheets, answer-panel position, glow settings and **handwriting stroke coordinates**. |
| Import behaviour | **Overwrite-based**: writes each key back, `removeItem` on `null`/`undefined`, rolls back via `before` on write failure, then `location.reload()` after 500ms. A `window.confirm` prompt precedes import. |
| Validation | `validate()` only checks `app`, `schemaVersion===1`, `keys` being an object, values being `null` or strings, plus parsing the progress key; it **does not verify authenticity or prevent tampering**. |
| Excluded | The `learning-packs/cis221-calculus.zip` file itself is not included; however user-imported courseware lands in `PACKS_KEY` and is backed up. Built-in default courseware (`catalog.js`) never enters `localStorage`. |
| A second export | `js/pack-ui.js` "topic pack export ZIP" contains courseware only, no personal progress, named `${topic.id}-v${topic.version}.zip`. |

**Recommendation**: treat a backup file as plaintext personal data — keep it private, never upload it to a public space. When receiving someone else's backup, export your current state first, because import overwrites directly.

---

## 6. static.directory and the Copyrighted references/ Book

| Item | Fact |
|---|---|
| Hosting config | `js/hosting.json`: `{"project_id":"appgprj_6af1852c8bc88191999e930daeb549ac","static":{"directory":"."}}`. `static.directory="."` means **the entire project root is the static root**. |
| Copyrighted material | `references/3000-solved-problems/` contains `book-full.txt` (892 KB full text), `chapters.json` and 46 `chNN-*.txt` chapter files — the OCR text layer of **Schaum's Outline Series / Elliot Mendelson / McGraw-Hill 1988**, *3000 Solved Problems in Calculus*. `BOOK-REFERENCE.md` states the copyright and that the full text is local-only, never published, uploaded or shared. |
| Local risk | All 48 `references/` txt files **are Git-tracked** (`git ls-files | wc -l` = 105), and the project has **no `.gitignore`**, no `LICENSE`, and no clean publish directory. Pushing, packaging or publishing with `static.directory="."` can easily leak design docs, tests, source courseware and the book full text together. |
| Live state | Read-only check: <https://bronya-0914.github.io/Skill-Tree/> returns `200`; however `DESIGN-v2.md`, `BOOK-REFERENCE.md` and `references/3000-solved-problems/*` return **`404`** (book full text not published). |
| Important caveat | "Live currently 404" is an **already-excluded present state**, **not a guarantee provided by local configuration**. With no `.gitignore` and `references/` still tracked, any subsequent push or packaging could change that. |
| Mitigation | Before release, build an exclusion list or clean publish directory (changing `static.directory` requires separate owner approval); see [§9](#9-pre-publish-checklist). |

---

## 7. Licence Status (No LICENSE)

- No `LICENSE` file exists in the project root or any subdirectory; the project has no licence of its own.
- Only the third-party `js/vendor/fflate-LICENSE.txt` (MIT, Copyright (c) 2026 Arjun Barrett) is bundled.
- `PACK_FORMAT.md` records `fflate 0.8.3`, but `js/vendor/fflate.js` **contains no version string**, so this cannot be verified from the file.
- Until a `LICENSE` is added, do not assume free redistribution; the `references/` book full text is additionally bound by the original publisher's copyright, independent of the project licence, and must never be published.

---

## 8. How to Report Issues

| Situation | Recommended action |
|---|---|
| General usage issues, courseware typos, front-end defects | Report via the Issue feature of the repository <https://github.com/Bronya-0914/Skill-Tree> (if enabled), or record locally with a Git commit message and a documentation note. |
| Suspected secret leakage (`references/` book full text, tokens, personal identity data, backup contents) | **Do not post publicly.** Notify the repository maintainer through a private/non-public channel first and avoid forwarding the file before confirmation; remove it from any pending publish artefacts if necessary. |
| Local Git anomalies | No remote, nothing pushed locally; first confirm read-only with `git status --short` and `git log --oneline`; never use `git reset --hard` or delete `.git/` as a shortcut. |
| Live/local version mismatch | This is an existing state (live is older); record the difference and do not attempt a push to overwrite without authorisation. |

> This project has no dedicated security team, no SLA and no CVE process. This section offers a pragmatic reporting path only; it is not a bug bounty or a confidential-handling commitment.

---

## 9. Pre-Publish Checklist

> The project is **not currently authorised for release**; the following applies only once explicit approval is obtained.

- [ ] **Explicit** release authorisation obtained from the owner, with scope confirmed (static site only / whether docs are included).
- [ ] `references/` fully excluded: change `static.directory` to a clean directory or build an exclusion list (requires separate approval); confirm book full text, `BOOK-REFERENCE.md`, `DESIGN-v2.md`, tests and source courseware are not published.
- [ ] Add a `.gitignore` (at minimum excluding `references/`, local temp files, backup files); confirm `git ls-files` no longer contains the book txt files.
- [ ] Decide on and add a `LICENSE`; confirm the third-party `fflate-LICENSE.txt` is bundled.
- [ ] No `config.json`, tokens, passwords, API keys, personal identity data, Moodle account or token-bearing download URLs in the repo.
- [ ] `git status --short` clean; `node --test tests/*.test.cjs` **20/20**; `node --check` fully passing.
- [ ] Confirm local and live versions match (courseware `version: 5`, single-click open/close, `app.js` / `styles.css` / `catalog.js` hashes).
- [ ] Record publish configuration, date and corresponding commit in docs ([`CHANGELOG.en.md`](CHANGELOG.en.md), [`README.md`](README.md), this page).
- [ ] Sync the checkbox state in [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md) "Pre-Publish Checklist".

---

## 10. Risk Register Summary

| ID | Risk | Severity | Current treatment |
|---|---|---|---|
| F1 | 270 answers ship with front-end files | Must fix first | Explicitly accept publicity and document it; not for confidential exams (§2) |
| F2 | Cross-user data read/write | Must fix first | No multi-user data table exists, so no cross-user leakage; purely local and independent |
| F3 | Answer secrecy requires server-side computation | Must fix first | Do not pretend pure front-end can keep secrets; server-side grading not implemented (`MULTIUSER-ARCH.md`) |
| F4 | `static.directory="."` publishes design docs / tests / `references/` | Must fix first | Live currently 404; no local `.gitignore`, must exclude before release (§6) |
| F5 | Scratchpad strokes and user-uploaded courseware are user data | Must fix first | Plaintext in `localStorage`, backups unencrypted; user keeps their own copies (§4, §5) |
| F6 | Quota and billing | Must be informed | No cloud service enabled; no estimates or promises |
| F7 | Legacy data migration conflicts | Can defer | Each key has `schemaVersion:1`; backup import is overwrite-based |
| F8 | Concurrent progress writes | Can defer | Single-machine, single-tab primary; `window.storage` event for cross-tab sync |
| F9 | Pack upload validation and size | Can defer | Reuse `validate()` limits (30 topics / 300 nodes / 512 KB per file / 4 MB total / 5 MB ZIP) |
| F10 | Real-device touch, real hosting, cross-device `localStorage` | R8 | Unverified; `static.directory="."` never validated on a real hosting platform |

---

[↑ Back to top](#top)
