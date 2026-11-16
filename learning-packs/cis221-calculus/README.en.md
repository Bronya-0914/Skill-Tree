<a id="top"></a>

<div align="center">

# Complete Calculus Learning Pack

**微積分漫遊 · Calculus Skill Tree — CIS221 Complete Calculus Route**

`id = cis221-calculus`

27 lessons · 270 questions · 10 four-option questions per lesson · per-question explanations

[繁體中文](README.md) · English

</div>

**Status line:** Document version `rev. 2.0 (rewritten 2026-11-17)` | Local HEAD `8d7b4cb` | Course `topic.version=5`

> **Document information**
>
> | Item | Value |
> |---|---|
> | Document version | `rev. 2.0`, rewritten 2026-11-17, merging the existing English and Chinese documents from GitHub |
> | Local HEAD | `8d7b4cb Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs` |
> | Course `topic.version` | `5` (`schemaVersion=1`, `attachTo=start`) |
> | Live site | <https://bronya-0914.github.io/Skill-Tree/> |
> | Source repository | <https://github.com/Bronya-0914/Skill-Tree> |
> | Content source | `learning-packs/cis221-calculus/` (this folder) |
> | Generated artifacts | `learning-packs/catalog.js`, `learning-packs/cis221-calculus.zip` |

<details>
<summary><strong>Table of Contents (click to expand)</strong></summary>

- [1. Overview](#s1)
- [2. Current `topic.json`](#s2)
- [3. Learning outcomes](#s3)
- [4. Passing criteria and quiz mechanics](#s4)
- [5. The 27 lessons](#s5)
- [6. Statistics and distributions](#s6)
- [7. Per-lesson structure: 10 four-option questions and explanations](#s7)
- [8. Book chapter mapping and "extended compilation" notes](#s8)
- [9. Source files](#s9)
- [10. English translations and language switching](#s10)
- [11. ZIP and generated artifacts](#s11)
- [12. Changing questions](#s12)
- [13. Version upgrades](#s13)
- [14. Known limitations](#s14)
- [15. Appendix: related documents and links](#s15)

</details>

---

<a id="s1"></a>

## 1. Overview

This pack is the built-in topic of "微積分漫遊 · Calculus Skill Tree" and is also a standalone importable ZIP. It contains **27 progressive learning nodes and 270 questions**, covering algebra and functions, differentiation, multivariable calculus, integration, and numerical methods. Each node includes teaching text, explicitly line-broken formulas, worked examples, 10 four-option questions, and per-question explanations.

Source content is written in **formal Traditional Chinese**; the website supplies English translations from `js/i18n-messages.js`. Trigonometric angles use **radians**. All 27 nodes have `passCount = 7` and `minutes = 15`.

> Important: **English switching requires the website translation catalog; a ZIP alone does not guarantee switching.** A pack ZIP contains teaching content only, with no translation catalog. When imported into another compatible site, text not present in that site's `js/i18n-messages.js` stays in its source language (Traditional Chinese). See section 10.

[Back to top](#top)

---

<a id="s2"></a>

## 2. Current `topic.json`

The actual content at local HEAD `8d7b4cb`, unchanged:

```json
{
  "schemaVersion": 1,
  "id": "cis221-calculus",
  "title": "CIS221 微積分完整學習路線",
  "version": 5,
  "description": "27 個循序漸進的學習節點，涵蓋代數、微分、多變量、積分及數值方法。每節點 10 題，附教學、例題與解析。",
  "attachTo": "start"
}
```

| Field | Value | Notes |
|---|---|---|
| `schemaVersion` | `1` | The only supported format version |
| `id` | `cis221-calculus` | Topic ID; every node ID begins with `cis221-calculus.` |
| `title` | `CIS221 微積分完整學習路線` | Topic title |
| `version` | `5` | Content version; progressed 1 → 2 → 3 → 4 → 5 |
| `description` | 27 progressive learning nodes… | Topic summary |
| `attachTo` | `start` | Entry attachment; `start` is a shared navigation entry, not a lesson |

[Back to top](#top)

---

<a id="s3"></a>

## 3. Learning outcomes

After completing this pack, a learner should be able to:

- Determine a function's domain and range, and work with lines, quadratic functions, trigonometric functions, exponentials, and logarithms.
- Build on limits and continuity to understand average and instantaneous rates of change, and compute basic, higher-order, product, quotient, composite, and implicit derivatives.
- Use derivatives for critical points, extrema tests, optimization modeling, differentials and linear approximation, and Taylor polynomials.
- Handle multivariable functions and surfaces, first- and higher-order partial derivatives, implicit partial derivatives, and the multivariable chain rule.
- Compute indefinite integrals, exponential/logarithmic/trigonometric integrals, definite integrals and the fundamental theorem, integral properties and odd/even symmetry, substitution, and integral applications with initial conditions.
- Apply Newton's root-finding method, Newton optimization, and check whether results are sensible.

Each node centers on one main skill; branching prerequisites reflect knowledge dependencies, and all prerequisites must be completed before a node unlocks.

[Back to top](#top)

---

<a id="s4"></a>

## 4. Passing criteria and quiz mechanics

| Item | Value |
|---|---|
| Questions per lesson | 10, four options each |
| Passing threshold | `passCount = 7`, i.e. at least 7 correct answers |
| On passing | The skill node lights up and the next lesson becomes available |
| Prerequisites | Every listed prerequisite must be completed; empty `parents` attaches to `start` |
| Estimated time | `minutes = 15` for all 27 lessons |

Grading flow in `app.js` (`renderQuiz()`):

- The submit button stays disabled (grey, `quiz-pending`) until all 10 questions are answered, then becomes enabled (green, `quiz-ready`).
- On submit, `score = quiz.filter((q, i) => attempt.answers[i] === q[2]).length` and `passed = score >= lesson.passCount`.
- On passing, the ID is written to `progress.completed` and the highest score is kept; otherwise "practice again" clears that attempt and allows a retry.
- After grading, each question shows correct/incorrect options and a per-question explanation (`.feedback-detail`); explanations give reasoning, not just the answer.
- Any required numerical approximation is stated explicitly in the question.

[Back to top](#top)

---

<a id="s5"></a>

## 5. The 27 lessons

The table below preserves the original 27 rows, prerequisites, and question counts, and adds `kind` plus the node ID suffix (full ID: `cis221-calculus.<suffix>`). "Website entry" in the prerequisites column means `start`.

| Lesson | Prerequisites | Questions | `kind` | ID suffix |
|---|---|---|---|---|
| 01 · Functions, domain, and range | Website entry | 10 | `base` | `functions` |
| 02 · Lines and quadratic functions | 01 | 10 | `base` | `graphs` |
| 03 · Trigonometry and radians | 02 | 10 | `base` | `trigonometry` |
| 04 · Exponentials and logarithms | 01 | 10 | `base` | `exp-log` |
| 05 · Average and instantaneous rates | 02 | 10 | `derivative` | `rates` |
| 06 · Limits and continuity | 05 | 10 | `base` | `limits` |
| 07 · Basic and higher-order derivatives | 06 | 10 | `derivative` | `power` |
| 08 · Product and quotient rules | 07 | 10 | `derivative` | `product-quotient` |
| 09 · Trigonometric, exponential, and logarithmic derivatives | 08, 03, 04 | 10 | `derivative` | `elementary` |
| 10 · Composite functions and the chain rule | 09, 08 | 10 | `derivative` | `chain` |
| 11 · Implicit differentiation | 10 | 10 | `derivative` | `implicit` |
| 12 · Critical points and extrema tests | 07 | 10 | `derivative` | `extrema` |
| 13 · Optimization models and applications | 12, 02 | 10 | `derivative` | `optimization` |
| 14 · Multivariable functions and surfaces | 01, 02 | 10 | `base` | `surfaces` |
| 15 · First partial derivatives | 14, 10 | 10 | `derivative` | `partials` |
| 16 · Higher-order and implicit partial derivatives | 15, 11 | 10 | `derivative` | `higher-implicit` |
| 17 · Multivariable chain rule | 15, 10 | 10 | `derivative` | `multi-chain` |
| 18 · Indefinite integrals and the power rule | 07 | 10 | `integral` | `antiderivatives` |
| 19 · Exponential, logarithmic, and trigonometric integrals | 18, 09 | 10 | `integral` | `elementary-integrals` |
| 20 · Definite integrals and the fundamental theorem | 18 | 10 | `integral` | `definite` |
| 21 · Integral properties and odd/even symmetry | 20, 03 | 10 | `integral` | `integral-properties` |
| 22 · Substitution and the reverse chain rule | 19, 10 | 10 | `integral` | `substitution` |
| 23 · Integral applications and initial conditions | 20, 19 | 10 | `integral` | `integral-applications` |
| 24 · Differentials and linear approximation | 10 | 10 | `derivative` | `linearization` |
| 25 · Taylor polynomials and second-order approximation | 24, 09 | 10 | `derivative` | `taylor` |
| 26 · Newton's root-finding method | 24, 10 | 10 | `derivative` | `newton-roots` |
| 27 · Newton optimization and result checks | 26, 13, 25 | 10 | `derivative` | `newton-optimization` |

Every question has four options and one correct answer. Questions mix concepts, calculations, and applications, with explanations after submission. Any required numerical approximation is specified in the question.

[Back to top](#top)

---

<a id="s6"></a>

## 6. Statistics and distributions

Computed read-only against local HEAD `8d7b4cb` and cross-checked file by file against `catalog.js`, the 27 source JSON files, and the ZIP.

| Item | Value |
|---|---|
| Nodes / questions | 27 nodes / 270 questions (10 per node, 4 options each) |
| `passCount` | `7` for all |
| `minutes` | `15` for all |
| `kind` distribution | `base` **6**, `derivative` **15**, `integral` **6** |
| `parents` distribution | 0 prerequisites: 1; 1: 12; 2: 12; 3: 2 (max 3, limit 10) |
| `content` blocks | **271**: `heading` 81, `paragraph` 81, `formula` 27, `example` 55, `tip` 27 |
| `\n` line breaks | **365**: `formula` 116, `example` 169, `paragraph` 54, `tip` 26, `heading` 0 |
| `catalog.js` | 169,996 B / 4,515 lines, containing 270 `"answer"` fields |
| ZIP | 29 entries, 58,184 B compressed / 145,337 B uncompressed |
| English catalog | `js/i18n-messages.js`: 1,831 keys / 1,848 lines / 270,208 B |
| Tests | **20 / 20** (`topic-packs` 14, `tree-layout` 3, `i18n` 3) |

`kind` only affects the node card's left color bar and styling (`base` / `derivative` / `integral`); unlocking always follows `parents`. All 27 `formula` blocks use explicit `\n` line breaks, one formula per line, centered line by line via `styles.css` `.formula{text-align:center;white-space:nowrap}` with automatic wrapping disabled.

[Back to top](#top)

---

<a id="s7"></a>

## 7. Per-lesson structure: 10 four-option questions and explanations

Each `nodes/*.json` has fixed keys: `schemaVersion, id, title, intro, kind, minutes, parents, content, questions, passCount`.

- `intro`: the lesson's goal and source note (all 27 name *3000 Solved Problems in Calculus* and the chapters used).
- `content[]`: `{type, text}` with `type` limited to `heading` / `paragraph` / `formula` / `example` / `tip`; `\n` inside `text` is converted to `<br>` by `lessonFromNode()` after HTML escaping. Each lesson includes plain-language intuition, deeper explanation, explicitly line-broken formulas, two worked examples labeled with book chapters, and a tip.
- `questions[]`: 10 questions, each `{prompt, options[4], answer, explanation}`; `answer` is a **zero-based index** and `explanation` is the per-question reasoning.
- `passCount`: 7.

`lessonFromNode()` produces the runtime `lesson`, whose `quiz` is a `[prompt, options, answer, explanation]` tuple; `icon` is `∫` (integral) or `◇`; an empty `parents` array is replaced with `[topic.attachTo]`.

[Back to top](#top)

---

<a id="s8"></a>

## 8. Book chapter mapping and "extended compilation" notes

This section follows **section 4** of `BOOK-REFERENCE.md`, "Knowledge points and the existing 27-node mapping". Parenthesized values are supplementary chapters; chapter numbers refer to the book's 46 chapters and page numbers to PDF file order.

| Node | Existing title | Main book chapters | Supplementary chapters |
|---|---|---|---|
| 01 | Functions, domain, and range | 5 | 1, 2 |
| 02 | Lines and quadratic functions | 3, 5 | 4 |
| 03 | Trigonometry and radians | 10 | 27, 29 |
| 04 | Exponentials and logarithms | 23, 24 | 26 |
| 05 | Average and instantaneous rates | 8, 14 | 17 |
| 06 | Limits and continuity | 6, 7 | 25 |
| 07 | Basic and higher-order derivatives | 8, 12 | — |
| 08 | Product and quotient rules | 8, 9 | 10 |
| 09 | Trigonometric, exponential, and logarithmic derivatives | 10, 23, 24 | 27 |
| 10 | Composite functions and the chain rule | 9 | 12 |
| 11 | Implicit differentiation | 12 | 42 |
| 12 | Critical points and extrema tests | 13 | 11 |
| 13 | Optimization models and applications | 16 | 13, 43 |
| 14 | Multivariable functions and surfaces | 41 | 40 |
| 15 | First partial derivatives | 42 | — |
| 16 | Higher-order and implicit partial derivatives | 42 | 12 |
| 17 | Multivariable chain rule | 42, 43 | 9 |
| 18 | Indefinite integrals and the power rule | 19 | — |
| 19 | Exponential, logarithmic, and trigonometric integrals | 19, 23, 24 | 29 |
| 20 | Definite integrals and the fundamental theorem | 20 | — |
| 21 | Integral properties and odd/even symmetry | 20, 21 | 32 |
| 22 | Substitution and the reverse chain rule | 9, 19 | 28, 29 |
| 23 | Integral applications and initial conditions | 21, 22, 31 | 46 |
| 24 | Differentials and linear approximation | 18 | 8 |
| 25 | Taylor polynomials and second-order approximation | 39 | 38, 11 |
| 26 | Newton's root-finding method | 18, 8 (no dedicated chapter; self-compiled) | — |
| 27 | Newton optimization and result checks | 13, 43 (no dedicated chapter; self-compiled) | — |

**"Extended compilation" note**: nodes 26 and 27 have no dedicated book chapter. They are extended compilations based on chapters 18/8 (tangent approximation) and 13/43 (extrema tests), and the content honestly labels them as such rather than claiming a single source chapter. The other 25 nodes are sliced by knowledge point, not constrained by book chapters.

**Knowledge points in the book but not in the tree** (the 27-node skeleton is fixed; these serve only as supplementary question sources, with no new nodes): inequalities and absolute value (1, 2), circles (4), Rolle's theorem / MVT (11), related rates (14, 17), curve sketching (15), rectilinear motion (17), integration by parts (28), partial fractions (30), improper integrals (32), planar and spatial vectors (33, 40), parametric equations and polar coordinates (34, 35), sequences and series (36–38), multiple integrals (44), vector fields and line integrals (45), differential equations (46).

**Book OCR must not be copied directly.** The PDF is a scan with an OCR text layer; confirmed distortions include `*` for `x`, `SL` / `s` for `≤`, `^` for `≥`, `V4-x2` for `√`, mixed minus signs and em dashes, misaligned or missing question stems, and figures reduced to figure numbers. All formulas and numbers were rewritten using standard mathematics after checking the original PDF pages; the text layer was never pasted. Original books and full-text indexes live only in local `references/` and are not published with the site.

[Back to top](#top)

---

<a id="s9"></a>

## 9. Source files

```text
learning-packs/cis221-calculus/
├── topic.json                        topic settings (section 2)
├── README.md                         this document's Traditional Chinese counterpart
├── README.en.md                      this document (English)
└── nodes/                            27 nodes, one file per node
    ├── cis221-calculus.functions.json
    └── … (the other 26)
```

- `topic.json`: the topic's name, version, and attachment point.
- `nodes/*.json`: one file per node, containing teaching content, `questions`, answers, and prerequisites.
- `README.md` / `README.en.md`: course list and usage notes; `README.md` is included in the ZIP by the builder.

The website loads `learning-packs/catalog.js` directly from `index.html`. To use this pack on another compatible site, upload `cis221-calculus.zip` through its learning-pack manager, review it, and confirm the import.

[Back to top](#top)

---

<a id="s10"></a>

## 10. English translations and language switching

The teaching JSON itself contains Traditional Chinese only. English is supplied by the website's **`js/i18n-messages.js`**: exact, complete Traditional Chinese source strings used as keys, **1,831 keys** in total (270,208 B / 1,848 lines), covering the `intro`, `content`, questions, options, and explanations of all 27 lessons. `js/i18n.js` adds **46** parameterized templates for dynamic UI messages. Switching updates only text and display attributes; it does not rebuild the quiz or change progress, and under `html[lang="en"]` node card titles may wrap onto two lines without changing tree geometry.

**Explicit limitation: English switching requires the website translation catalog; a ZIP alone does not guarantee switching.**

- A pack ZIP contains only `topic.json`, `nodes/*.json`, and `README.md`; `readZip()` skips `.md` / `.txt`, and **the ZIP contains no translation catalog**.
- When this pack is imported into another compatible site, any exact Chinese string missing from that site's `js/i18n-messages.js` **stays in its source language** (Traditional Chinese) rather than becoming English.
- Pure mathematical expressions and full-width punctuation contain no Han characters, so `english()` does not look them up; this is expected behavior.
- To make an imported pack bilingual, add exact keys and English values to the target site (both whole-block and per-line keys), then run `node --test tests/i18n.test.cjs` to confirm no Han characters remain. The maintenance SOP is in `I18N.md`.

[Back to top](#top)

---

<a id="s11"></a>

## 11. ZIP and generated artifacts

| File | Role | Hand-editable |
|---|---|---|
| `topic.json` / `nodes/*.json` / `README*.md` | Content sources | Yes |
| `learning-packs/cis221-calculus.zip` | Generated artifact, uploadable/shareable | No |
| `learning-packs/catalog.js` | Generated artifact loaded by the website | No |

`scripts/build-learning-packs.cjs`:

1. Reads `topic.json` and `nodes/*.json`, then calls `validate()`;
2. Sorts nodes with `a.title.localeCompare(b.title, 'zh-Hant', {numeric: true})` (so `01` through `27` sort numerically);
3. Produces a ZIP with `zipSync(files, {level: 6})` containing `topic.json`, the 27 `nodes/<id>.json` files, and **`README.md`** (hence 29 entries);
4. **Self-validates with `readZip(bytes, zip)`** before writing `learning-packs/cis221-calculus.zip`;
5. Writes `learning-packs/catalog.js`: `// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。` followed by `const LEARNING_PACKS = …;`.

`catalog.js` and the ZIP let the browser obtain content even when `index.html` is opened via `file://`. **Both are generated artifacts; do not hand-edit or delete them.** Every content change belongs in the source JSON, followed by a rebuild.

[Back to top](#top)

---

<a id="s12"></a>

## 12. Changing questions

1. Edit the relevant `nodes/*.json`: `intro`, `content[].text`, and `questions[].prompt` / `options` / `explanation` may change. **Preserve `id`, `title`, `parents`, `passCount=7`, and option order**; `answer` is zero-based, so reordering options requires updating it too.
2. Always use **UTF-8** and valid JSON (`readZip()` decodes with `TextDecoder('utf-8', {fatal:true})`).
3. Solve every question independently, confirming exactly one correct answer, no two equivalent options, and explanations that give reasoning rather than restating the answer.
4. If Chinese strings change, update the exact keys and English values in the root `js/i18n-messages.js`; **add both whole-block and per-line keys** (`\n` becomes `<br>`, so each line is a separate text node).
5. Increase `topic.json`'s `version` (see section 13).
6. Run from the repository root:

```text
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

Confirm 20/20 passing; `tests/topic-packs.test.cjs` compares `catalog.js`, the ZIP, and the 27 source JSON files file by file.

7. Open the site and check readability, formula wrapping, quiz grading, unlocking, and both languages. Use isolated browser data when testing ZIP import so personal progress is not overwritten.

You may also ZIP `topic.json` and `nodes/` together (one enclosing folder is allowed), but generating through the build script is less error-prone and also includes `README.md`.

[Back to top](#top)

---

<a id="s13"></a>

## 13. Version upgrades

`topic.version` is an integer content version, currently `5`. `prepare()` merge rules:

- **Any content change requires a bump**: if `changes` contains added/updated entries, or the topic differs, without a higher `version` the pack is rejected ("內容有修改，請把 topic.json 的 version 增加後再上傳。" / "Content changed; increase `topic.json`'s version before uploading.").
- **Older versions rejected**: a pack with a version lower than the existing topic is rejected.
- **Idempotent**: importing an identical pack again yields `changed === false`, with no bump required.
- **Old nodes retained**: nodes omitted from an update are retained via `retained`; keep existing `id` values to preserve learning records.

History (see `BOOK-REFERENCE.md`, sections 7 and 9): version 1 was the initial content; the 01 template on 2026-11-12 raised it to 2, formula line breaks on 2026-11-13 raised it to 3, then 4, and the 02–27 teaching-content rewrite on 2026-11-15 raised it to **5**. `catalog.js` and the ZIP were rebuilt by `build-learning-packs.cjs` each time, and `tests/topic-packs.test.cjs` replaced hard-coded version constants with `sample.topic.version + 1` so upgrades do not break tests.

The version range is 1–1,000,000; numbers may skip, as long as a content change uses a value strictly greater than the existing version.

[Back to top](#top)

---

<a id="s14"></a>

## 14. Known limitations

- **Answers are in the front end**: `catalog.js`, the 27 `nodes/*.json` files, and the ZIP share a source and contain all 270 `answer` fields. The project is purely front-end, with no backend, accounts, or server-side grading, so answers cannot be kept secret.
- **Data is same-origin bound**: progress, settings, and imported content live in browser `localStorage` and do not sync across devices. Switching browsers, URLs, or clearing site data resets everything; only a manual "Data backup" export/import (overwriting, unencrypted) can move it.
- **English switching requires the website translation catalog**: a ZIP alone does not guarantee switching; see section 10.
- **Question bank retained**: the 2026-11-15 rewrite changed only `intro` and `content`; the existing 260-question bank was kept, so not every question is book-oriented.
- **Book OCR distortion**: formulas and numbers were rewritten with standard mathematics, not copied from the text layer; `references/` must not be published with the public site.
- **Live version differs**: GitHub Pages currently serves an older deployment (its `topic.json` is `version: 1`, with different interaction behavior), unlike local HEAD `8d7b4cb` (`version: 5`).
- **No LICENSE**: the project has no license of its own; only `js/vendor/fflate-LICENSE.txt` carries an MIT license.
- **Presentation layer**: `js/tree-layout.js` holds a fixed 28-row `preview`; new or modified topics use fallback geometry, so their layout may differ from the built-in 27 lessons.

[Back to top](#top)

---

<a id="s15"></a>

## 15. Appendix: related documents and links

### 15.1 Project documents (paths relative to this file; `../../` reaches the repository root)

| Document | Purpose |
|---|---|
| [README.md](../../README.md) / [README.en.md](../../README.en.md) | Getting started and documentation index |
| [PACK_FORMAT.md](../../PACK_FORMAT.md) / [PACK_FORMAT.en.md](../../PACK_FORMAT.en.md) | JSON fields, ZIP structure, versions, and limits |
| [AI_TEACHING_GUIDE.md](../../AI_TEACHING_GUIDE.md) / [AI_TEACHING_GUIDE.en.md](../../AI_TEACHING_GUIDE.en.md) | Eight production stages and checklists for AI authors |
| [I18N.md](../../I18N.md) | Maintaining Chinese and English translations (single bilingual file) |
| [BOOK-REFERENCE.md](../../BOOK-REFERENCE.md) | Bibliography, 46 chapters, 27-node mapping, OCR risks, rewrite progress (section 8 here follows its section 4) |
| [DESIGN-v2.md](../../DESIGN-v2.md) | Design and acceptance history (some figures are stale) |
| [MULTIUSER-ARCH.md](../../MULTIUSER-ARCH.md) | Multi-user architecture assessment |
| [Calculus course README](README.md) / [README.en.md](README.en.md) | This document and its Chinese counterpart |

### 15.2 Source code and verification

| File | Role |
|---|---|
| `js/topic-packs.js` | `validate()` / `prepare()` / `readZip()` / `writeZip()` |
| `js/i18n.js` / `js/i18n-messages.js` | In-place translation engine and 1,831 English keys |
| `js/tree-layout.js` | 28-row preview and fallback geometry |
| `scripts/build-learning-packs.cjs` | Generates `catalog.js` and `cis221-calculus.zip` |
| `tests/topic-packs.test.cjs` / `tree-layout.test.cjs` / `i18n.test.cjs` | 14 / 3 / 3 tests, 20/20 in total |

### 15.3 Online links

- Live site: <https://bronya-0914.github.io/Skill-Tree/>
- Source repository: <https://github.com/Bronya-0914/Skill-Tree>

[Back to top](#top)
