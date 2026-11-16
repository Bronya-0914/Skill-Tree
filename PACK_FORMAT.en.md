<a id="top"></a>

<div align="center">

# Learning-Pack Format v1

**微積分漫遊 · Calculus Skill Tree**

Specification for the Topic Learning Pack

A verifiable, versioned, UTF-8 JSON and ZIP packaging format: one topic per folder, one JSON file per node.

[繁體中文](PACK_FORMAT.md) · English

</div>

**Status line:** Document version `rev. 2.0 (rewritten 2026-11-17)` | Local HEAD `8d7b4cb` | Course `topic.version=5`

> **Document information**
>
> | Item | Value |
> |---|---|
> | Document version | `rev. 2.0`, rewritten 2026-11-17, merging the existing English and Chinese documents from GitHub |
> | Local HEAD | `8d7b4cb Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs` |
> | Course `topic.version` | `5` (`id=cis221-calculus`, `schemaVersion=1`, `attachTo=start`) |
> | Source of truth | `validate()` / `prepare()` / `loadLibrary()` / `readZip()` / `writeZip()` in `js/topic-packs.js`; `scripts/build-learning-packs.cjs` |
> | Live site | <https://bronya-0914.github.io/Skill-Tree/> |
> | Source repository | <https://github.com/Bronya-0914/Skill-Tree> |
> | License | The project has no `LICENSE` file; the bundled third-party `fflate` is MIT, see `js/vendor/fflate-LICENSE.txt` |

<details>
<summary><strong>Table of Contents (click to expand)</strong></summary>

- [1. Overview](#s1)
- [2. Current built-in calculus pack](#s2)
- [3. Directory layout and file roles](#s3)
- [4. `topic.json` metadata](#s4)
- [5. Node JSON fields](#s5)
- [6. Complete `validate()` rules](#s6)
- [7. ZIP format and `readZip()` validation](#s7)
- [8. `loadLibrary()` and `prepare()`: version comparison and merging](#s8)
- [9. `buildLessons()`: topological order and geometry](#s9)
- [10. Build pipeline and the generated `catalog.js`](#s10)
- [11. `fflate` and licensing](#s11)
- [12. Complete JSON examples](#s12)
- [13. Error examples and troubleshooting](#s13)
- [14. Import and update (user workflow)](#s14)
- [15. FAQ](#s15)
- [16. Changelog](#s16)
- [17. Appendix: related documents and links](#s17)

</details>

---

<a id="s1"></a>

## 1. Overview

Every course is distributed as a **Learning Pack (topic pack)**: one folder per topic, one JSON file per node, wrapped into a single ZIP for sharing or upload. All files are UTF-8. The website is a pure front-end application and can be opened directly from a local `index.html`; there is no backend, no account, and no server-side grading of content.

Design principles:

- **Single source**: `topic.json` and `nodes/*.json` are the only files meant to be edited by hand; `learning-packs/catalog.js` and `learning-packs/<id>.zip` are generated artifacts and must not be edited.
- **Verifiable**: all content passes `validate()` in `js/topic-packs.js` at build or import time; a ZIP additionally passes the binary checks in `readZip()`.
- **Versioned**: `topic.version` is an integer content version. Any content change requires a version increase, otherwise `prepare()` rejects the pack.
- **Relationships are ID-based**: prerequisites are determined by `id`, `parents`, and `attachTo` inside the JSON, not by filename order.
- **Content and progress are separate**: a pack contains teaching content only. Personal progress, settings, and scratch strokes live in browser `localStorage` and are never written into a pack ZIP.

The current validator `js/topic-packs.js` is authoritative; this document is a written description of that behavior.

[Back to top](#top)

---

<a id="s2"></a>

## 2. Current built-in calculus pack

The figures below were computed read-only against local HEAD `8d7b4cb` and cross-checked file by file against `learning-packs/catalog.js` and `learning-packs/cis221-calculus.zip`.

| Item | Value | Notes |
|---|---|---|
| `id` | `cis221-calculus` | Topic ID and the prefix for every node ID |
| `schemaVersion` | `1` | The only supported format version |
| `version` | `5` | Content version, incremented from 1 |
| `title` | `CIS221 微積分完整學習路線` | 1–60 characters |
| `description` | 27 progressive nodes covering algebra, differentiation, multivariable calculus, integration, and numerical methods; 10 questions per node with teaching, examples, and explanations. | ≤2,000 characters |
| `attachTo` | `start` | Entry attachment; `start` is a shared navigation entry, not a lesson |
| Nodes | 27 | 27 files under `nodes/*.json` |
| Questions | 270 | 10 per node, 4 options each |
| `passCount` | 7 | All 27 nodes; at least 7 correct answers light up a node |
| `minutes` | 15 | All 27 nodes |
| `kind` distribution | `base` 6, `derivative` 15, `integral` 6 | Styling only; does not affect unlocking |
| `parents` distribution | 0 prerequisites: 1; 1: 12; 2: 12; 3: 2 | Max observed 3; hard limit 10 |
| `content` blocks | 271 | `heading` 81, `paragraph` 81, `formula` 27, `example` 55, `tip` 27 |
| `\n` line breaks | 365 | `formula` 116, `example` 169, `paragraph` 54, `tip` 26, `heading` 0 |
| `catalog.js` | 169,996 B / 4,515 lines | Contains 270 `"answer"` fields |
| `cis221-calculus.zip` | 29 entries / 58,184 B compressed / 145,337 B uncompressed | `topic.json` + `README.md` + 27 `nodes/*.json` |
| Tests | `20 / 20` passing | `topic-packs` 14, `tree-layout` 3, `i18n` 3 |

Current `topic.json` in full:

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

> Note: the live GitHub Pages site is reachable but serves an older build (its `topic.json` is `version: 1`, with different interaction behavior). It does not match local HEAD `8d7b4cb`. All figures in this document describe the local build.

[Back to top](#top)

---

<a id="s3"></a>

## 3. Directory layout and file roles

```text
learning-packs/
├── cis221-calculus/                 topic source folder (the only hand-edited part)
│   ├── topic.json                   topic settings: name, version, attachment point
│   ├── README.md                    course list and usage notes (also packed into the ZIP)
│   └── nodes/                       one JSON file per node
│       ├── cis221-calculus.functions.json
│       └── … (the other 26 nodes)
├── cis221-calculus.zip              generated artifact: an uploadable/shareable pack
└── catalog.js                       generated artifact: a JS constant loaded by the website
```

| File | Role | Hand-editable |
|---|---|---|
| `topic.json` | Topic-level settings | Yes; primary editing target |
| `nodes/<full-node-id>.json` | Teaching content, quiz, and prerequisites for one node | Yes |
| `README.md` | Topic notes; included in the ZIP by the builder, but skipped by `readZip()` | Yes |
| `<topic-id>.zip` | Generated by `build-learning-packs.cjs` via `zipSync(files, {level:6})` | No; overwritten |
| `catalog.js` | `const LEARNING_PACKS = …;` loaded by `index.html` with `<script defer>` | No; overwritten |

A ZIP contains `topic.json` and `nodes/`, optionally under one enclosing folder (for example `course/topic.json` and `course/nodes/…`). Filenames are flexible, but the relative relationship between `topic.json` and `nodes/` must be preserved; relationships are resolved from the `id` values inside the JSON.

[Back to top](#top)

---

<a id="s4"></a>

## 4. `topic.json` metadata

```json
{
  "schemaVersion": 1,
  "id": "calculus-extra",
  "title": "Extra calculus practice",
  "version": 1,
  "description": "Practice tangent lines and implicit differentiation.",
  "attachTo": "start"
}
```

| Field | Type | Rule | Default |
|---|---|---|---|
| `schemaVersion` | integer | Must equal `1` exactly | none (required) |
| `id` | string | ≤100 characters, matching `/^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/` | none (required) |
| `title` | string | 1–60 characters (non-empty after trimming) | none (required) |
| `version` | integer | 1–1,000,000; increase when content changes | none (required) |
| `description` | string | 1–2,000 characters | none (required) |
| `attachTo` | string | Same ID rule as `id`; entry nodes with empty `parents` attach here | `start` |

`id` starts with a lowercase English letter and may then contain lowercase letters, digits, and hyphens, with optional dot-separated segments. `attachTo` may point to a full node ID from another loaded topic, allowing a new topic to be attached after an existing course.

[Back to top](#top)

---

<a id="s5"></a>

## 5. Node JSON fields

Node keys are fixed: `schemaVersion, id, title, intro, kind, minutes, parents, content, questions, passCount`.

| Field | Type | Rule |
|---|---|---|
| `schemaVersion` | integer | Must be `1` |
| `id` | string | Valid ID, must begin with `<topic.id>.`, unique within the pack |
| `title` | string | 1–60 characters |
| `intro` | string | 1–2,000 characters |
| `kind` | string | `base` / `derivative` / `integral`; defaults to `base` |
| `minutes` | integer | 1–120; defaults to `8` |
| `parents` | string[] | ≤10 entries, no duplicates, each a valid ID; empty attaches to the topic's `attachTo` |
| `content` | object[] | 1–60 blocks; each `{type, text}` with `type` in `heading`/`paragraph`/`formula`/`example`/`tip`, `text` ≤6,000 characters |
| `questions` | object[] | 1–20 questions; each `{prompt, options, answer, explanation}` |
| `passCount` | integer | 1 … `questions.length` |

`\n` inside `content[].text` is converted to `<br>` by `lessonFromNode()`, after `escape()` applies HTML escaping; HTML tags are therefore displayed as plain text and never executed. Lists inside `paragraph.text` use `•` and newlines; there is no separate `list` block, and arbitrary HTML, Markdown tables, or custom schema fields are not rendered. Formulas may use Unicode directly (for example `x²`, `∫`, `√`).

`questions[]` details:

| Field | Rule |
|---|---|
| `prompt` | 1–1,000 characters |
| `options` | 2–6 entries; each 1–500 characters; no duplicates within a question |
| `answer` | integer, `0` … `options.length - 1`, **zero-based** (`1` selects the second option) |
| `explanation` | 1–2,000 characters |

`lessonFromNode()` produces the runtime `lesson`: `{id, title, intro, kind, topicId, topicTitle, icon, minutes, parents, body, passCount, quiz}`, where `quiz` is a `[prompt, options, answer, explanation]` tuple, `icon` is `∫` (integral) or `◇`, and an empty `parents` array is replaced with `[topic.attachTo]`.

[Back to top](#top)

---

<a id="s6"></a>

## 6. Complete `validate()` rules

The tables below cover `validate()`, `ordered()`, and `buildLessons()` in `js/topic-packs.js`. Text fields are checked for `typeof === 'string'`, non-empty after trimming, and a maximum length; integer fields use `Number.isInteger`.

### 6.1 Rules shared by topics and nodes

| Target | Rule |
|---|---|
| `topic.schemaVersion` / `node.schemaVersion` | Must be `=== 1`; anything else is rejected |
| All IDs | ≤100 characters and matching `/^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/` |

### 6.2 Topic level

| Field | Rule |
|---|---|
| `topic.id` | Valid ID, ≤100 characters |
| `topic.title` | 1–60 characters |
| `topic.version` | Integer 1–1,000,000 |
| `topic.description` | ≤2,000 characters (non-empty after trimming) |
| `topic.attachTo` | Valid ID; defaults to `start` |
| `pack.nodes.length` | 1–100 nodes |

### 6.3 Node level

| Field | Rule |
|---|---|
| `node.id` | Valid ID, must begin with `<topic.id>.`, unique within the pack |
| `node.title` | ≤60 characters |
| `node.intro` | ≤2,000 characters |
| `node.kind` | One of `base` / `derivative` / `integral`; defaults to `base` |
| `node.minutes` | Integer 1–120; defaults to `8` |
| `node.parents` | Array, ≤10 entries; no duplicates; each a valid ID |
| `node.content` | Array, 1–60 blocks; `type` limited to five values, `text` ≤6,000 characters |
| `node.questions` | Array, 1–20 questions |
| `node.passCount` | Integer 1 … `questions.length` |

### 6.4 Question level

| Field | Rule |
|---|---|
| `question.options` | Array, 2–6 entries; each ≤500 characters; no duplicates within a question |
| `question.prompt` | ≤1,000 characters |
| `question.answer` | Integer, zero-based, `0 … options.length - 1` |
| `question.explanation` | ≤2,000 characters |

### 6.5 Graph and library level (`ordered()` / `buildLessons()`)

| Target | Rule |
|---|---|
| Globally unique node IDs | `ordered()` builds `Set(['start', ...ids])` and rejects collisions |
| Prerequisites exist | Each `parents` entry must exist among currently loaded nodes or be `start` |
| No cycles | `ordered()` performs a topological sort; if no node is ever ready, a cycle is reported |
| Topic count | `buildLessons()` allows at most 30 topics; topic IDs must be unique |
| Imported node total | At most 300 imported nodes in aggregate |

> `validate()` checks the structure of a single pack only. Cross-topic prerequisites, the aggregate 30/300 limits, cycles, and missing prerequisites are fully checked after merging, in `buildLessons()` / `ordered()` and `prepare()`.

[Back to top](#top)

---

<a id="s7"></a>

## 7. ZIP format and `readZip()` validation

`readZip(bytes, zip)` parses the ZIP binary structure itself rather than trusting a browser decompression API. Full rules:

| Check | Value / rule |
|---|---|
| File size | `22` bytes ≤ `bytes.length` ≤ `5 MB` (`5 × 1024 × 1024`); 22 bytes is the minimum empty EOCD |
| EOCD signature | `0x06054b50`; searched backwards from the end, with `i + 22 + commentLength === bytes.length` |
| Central directory signature | `0x02014b50` (per entry) |
| Local file header signature | `0x04034b50` (per entry) |
| Entry count | `1 … 128`; split archives unsupported (disk numbers and per-disk counts must agree and be 0) |
| Directory offset | `offset + centralDirectorySize === end`, otherwise the directory is invalid |
| Compression method | `0` (Store) or `8` (Deflate); `flags & 1` (encryption) must be 0 |
| CRC32 | Reflected polynomial `0xedb88320`, initial `0xffffffff`, final XOR `0xffffffff`; recomputed for every decompressed file and compared with the directory CRC |
| Per-file expanded limit | ≤ `512 KB` (`MAX_FILE = 512 × 1024`) |
| Total expanded limit | ≤ `4 MB` (`MAX_TOTAL = 4 × 1024 × 1024`); enforced incrementally during Inflate |
| Filename decoding | Strict `TextDecoder('utf-8', {fatal:true})` |
| Filename validity | Non-empty; no leading `/` (absolute path); no `\`, `:`, or NUL; no `..` or `.` path segments (path traversal) |
| Filename uniqueness | No duplicate filenames |
| Filename consistency | The local header filename must equal the central directory filename exactly |
| Expanded length | Actual decompressed length must equal the declared `original` size |
| Directory end | After iterating, `offset === end` |
| Ignored files | `.md` / `.txt` (case-insensitive) are skipped and never parsed as content |
| Manifest | Exactly one `topic.json` (`name === 'topic.json'` or ending in `/topic.json`) |
| File locations | All other files must be `<prefix>topic.json` or `<prefix>nodes/<single-level>.json`; `prefix` derives from the `topic.json` location, allowing **exactly one enclosing folder** |
| JSON content | All remaining files must be valid UTF-8 JSON |
| Final validation | The resulting `{topic, nodes}` is passed to `validate()` |

`writeZip(pack, zip)` emits `topic.json` and `nodes/<node.id>.json` (`JSON.stringify(..., null, 2)`) compressed with `zipSync(files, {level:6})`; the build script additionally includes `README.md`. `tests/topic-packs.test.cjs` verifies `readZip(writeZip(sample)) === sample`, a single enclosing folder (`course/` prefix), Store (`level:0`), truncated archives, invalid JSON, path traversal, a missing `topic.json`, CRC corruption, and oversized expansion.

[Back to top](#top)

---

<a id="s8"></a>

## 8. `loadLibrary()` and `prepare()`: version comparison and merging

### 8.1 `loadLibrary(bundled, saved = [])`

Merges the site's built-in packs with packs stored in the browser at startup; only one pack is kept per `topic.id`.

- Both arguments must be arrays; every pack is validated.
- Topic IDs inside `saved` must be unique.
- For each stored pack:
  - If the topic ID is not yet in `library`, append it.
  - If the **user version `>=` built-in version** (`stored.topic.version >= library[index].topic.version`), replace the entry entirely with the stored pack (equal or newer stored versions win).
  - If the **built-in version is newer**, keep the built-in `topic` but merge nodes with a `Map`: start from all stored nodes, then overwrite matching IDs with built-in nodes. The result updates same-ID nodes while preserving extra user nodes.
- Finally `buildLessons(library)` validates the whole graph (30 topics / 300 nodes, existing prerequisites, no cycles).

### 8.2 `prepare(raw, packs)`

Used by the import preview and confirmation; returns `{packs, lessons, changes, changed, topic, retained}`.

1. `incoming = validate(raw)`; locate and validate `previous` with the same ID, if any.
2. **Older version rejected**: if `previous` exists and `incoming.topic.version < previous.topic.version`, throw "這個包的版本較舊，請使用相同或較新的版本。" ("This pack is older; use the same or a newer version.").
3. Build `changes`: for each incoming node emit `{id, title, action, parents}`, where `action` is:
   - `新增` / added: ID absent from the old pack;
   - `相同` / unchanged: `JSON.stringify(node) === JSON.stringify(oldNodes.get(node.id))`;
   - `更新` / updated: everything else.
   `parents` is `node.parents.length ? node.parents : [incoming.topic.attachTo]`.
4. `changed = changes.some(c => c.action !== '相同') || JSON.stringify(incoming.topic) !== JSON.stringify(previous?.topic)`.
5. **Changed content without a version bump rejected**: if `previous` exists and `changed === true`, require `incoming.topic.version > previous.topic.version`, otherwise throw "內容有修改，請把 topic.json 的 version 增加後再上傳。" ("Content changed; increase `topic.json`'s version before uploading."). This check happens before merging, so the original collection is untouched on failure.
6. Merge: `mergedNodes = new Map(oldNodes)`, then overwrite with each incoming node. Old nodes not listed in the incoming pack are retained; `retained = mergedNodes.size - incoming.nodes.length` counts those retained old nodes.
7. `buildLessons(next)` validates the merged graph, and the result is returned.

### 8.3 Idempotency and semantics

| Scenario | Result |
|---|---|
| An identical pack imported again | Every `action` is unchanged and the topic is equal, so `changed === false`; no version bump required; the UI reports "already imported" |
| Older version | `prepare()` rejects; `loadLibrary()` prefers the newer version |
| Content changed but version unchanged | `prepare()` rejects and leaves `packs` unmodified |
| Only some nodes changed, version bumped | Those nodes are `更新`; omitted old nodes are preserved via `retained` |
| New node added with a version bump | That node is `新增`; existing nodes are untouched |

`tests/topic-packs.test.cjs` asserts `prepare(sample, first.packs).changed === false`, `retained === 26`, `assert.throws(..., /較舊/)`, `assert.throws(..., /version/)`, and `JSON.stringify(library) === before` after a failed import.

Content and progress are stored separately: completed records survive updates, incomplete nodes follow the new prerequisite conditions, and updated questions can be practiced again.

[Back to top](#top)

---

<a id="s9"></a>

## 9. `buildLessons()`: topological order and geometry

- `ordered()` performs a topological sort from `start`; a node is emitted only when all its `parents` are ready. Order does not depend on filenames.
- `buildLessons()` allows at most 30 topics and 300 imported nodes in aggregate.
- Geometry constants: `left = 65`, layer step `115`, column step `210`, `+60` after each topic; `depth` derives from prerequisite depth, with `node.x = left + width/2 + (index - (n-1)/2) * 210` and `node.y = 65 + level * 115`.
- The presentation layer is handled separately by `SkillTreeLayout.build()` in `js/tree-layout.js`: it holds a **28-row fixed `preview`** (`start` plus 27 nodes). When `nodes.length === 28` and every row's `parents` match exactly, the preview `x, y` values are written back onto the nodes; otherwise (new topics, imported or modified packs) a fallback geometry is used (`columnStep = 350`, `layerStep = 168`, `nodeWidth = 282`, `nodeHeight = 74`), placing nodes at subtree midpoints or incrementing columns.
- `SkillTreeLayout.build()` mutates the `x/y` of the nodes passed to it; this is existing behavior. `parents` remain unchanged and are still the sole authority for unlocking.

This section explains the data flow only; content authors never put coordinates in JSON.

[Back to top](#top)

---

<a id="s10"></a>

## 10. Build pipeline and the generated `catalog.js`

`scripts/build-learning-packs.cjs` (37 lines) is run from the repository root:

```text
node scripts/build-learning-packs.cjs
```

Pipeline:

1. Scan subdirectories of `learning-packs/` that contain `topic.json`, sorted with `a.name.localeCompare(b.name)`.
2. Read each `topic.json` and `nodes/*.json` (filenames sorted) and call `api.validate({topic, nodes})`.
3. Sort nodes with `pack.nodes.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hant', {numeric: true}))`; `numeric: true` orders `01 · …` through `27 · …` numerically instead of lexicographically.
4. If no topics exist, throw `learning-packs 至少需要一個主題。` ("learning-packs requires at least one topic.").
5. Merge into a library with `api.loadLibrary(packs.map(p => p.pack))`.
6. For each pack, build a ZIP via `zip.zipSync(files, {level: 6})` containing `topic.json`, `nodes/<id>.json`, and (if present) `README.md`; **immediately self-validate with `api.readZip(bytes, zip)`** before writing `learning-packs/<id>.zip`.
7. Write `learning-packs/catalog.js`:

```js
// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。
const LEARNING_PACKS = [ /* JSON.stringify(library, null, 2) */ ];
```

8. Log `已建立 N 個 Learning Pack、M 個節點。`.

`catalog.js` lets the browser obtain content even when `index.html` is opened directly with `file://` (no `fetch`). **Do not hand-edit `catalog.js` or the ZIPs**; both are generated artifacts. All changes belong in `topic.json` and `nodes/*.json`, followed by a rebuild. To add a topic, create a folder under `learning-packs/` containing `topic.json` and `nodes/`, then run the same command.

The site loads the built-in CIS221 pack (27 nodes, 270 questions) automatically; no upload is needed. The old 10 introductory nodes were removed; `start` is a shared navigation entry, not a lesson.

[Back to top](#top)

---

<a id="s11"></a>

## 11. `fflate` and licensing

| Item | Detail |
|---|---|
| File | `js/vendor/fflate.js`, UMD minified build, 33,044 B, single line |
| Role | Provides `zipSync` / `unzipSync` / `strToU8` / `strFromU8` / `Inflate`; exposed as `window.fflate` in browsers and via `require()` in Node |
| Version | **The previous `PACK_FORMAT.md` recorded `fflate 0.8.3`; this is a documented claim that could not be verified inside `js/vendor/fflate.js`** — the file is minified onto one line and contains no version string |
| License | MIT, see `js/vendor/fflate-LICENSE.txt` (Copyright (c) 2026 Arjun Barrett) |
| Project license | No `LICENSE` file exists anywhere in the project; only the third-party `fflate` carries a license |

Because the version string is not verifiable, this document does not treat `0.8.3` as a confirmed fact. For an exact version, consult the official `fflate` release notes or a freshly obtained copy of the package, and update `js/vendor/fflate-LICENSE.txt` when upgrading.

[Back to top](#top)

---

<a id="s12"></a>

## 12. Complete JSON examples

A minimal complete example that passes `validate()` (one `topic.json`, one node JSON). It preserves the correct `calculus-extra` example from the existing English document on GitHub.

`topic.json`:

```json
{
  "schemaVersion": 1,
  "id": "calculus-extra",
  "title": "Extra calculus practice",
  "version": 1,
  "description": "Practice tangent lines and implicit differentiation.",
  "attachTo": "start"
}
```

`nodes/calculus-extra.tangent.json`:

```json
{
  "schemaVersion": 1,
  "id": "calculus-extra.tangent",
  "title": "Tangent-line practice",
  "intro": "Use a derivative to find a tangent's slope.",
  "kind": "derivative",
  "minutes": 6,
  "parents": [],
  "content": [
    {"type": "heading", "text": "Tangent equation"},
    {"type": "formula", "text": "y − f(a) = f′(a)(x − a)"},
    {"type": "example", "text": "For f(x) = x² at a = 2:\nSlope = 4, so y = 4x − 4."}
  ],
  "questions": [
    {
      "prompt": "What is the derivative of x² at x = 3?",
      "options": ["3", "6", "9"],
      "answer": 1,
      "explanation": "The derivative is 2x; substituting 3 gives 6."
    }
  ],
  "passCount": 1
}
```

Key points:

- Node IDs start with the topic ID plus a period (`calculus-extra.tangent`).
- An empty `parents` array attaches the entry to the topic's `attachTo` (`start` here).
- `answer` is zero-based: `1` selects the second option, `6`.
- `passCount` is between 1 and the total question count; with one question it is `1`.
- `\n` in `content` becomes `<br>`; HTML is displayed as plain text.

[Back to top](#top)

---

<a id="s13"></a>

## 13. Error examples and troubleshooting

Messages below are taken from `requireValue()` in `js/topic-packs.js`, with typical causes and fixes.

| Message (excerpt) | Cause | Fix |
|---|---|---|
| `目前只支援 schemaVersion 1。` | `topic.schemaVersion` is not `1` | Set it to `1` |
| `每個節點必須使用 schemaVersion 1。` | Node `schemaVersion` is not `1` | Set it to `1` |
| `主題 ID 請使用小寫英文字母、數字、連字號或句點。` | ID has uppercase, underscore, whitespace, or is too long | Match `/^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/`, ≤100 chars |
| `主題名稱 必須是 1–60 字的文字。` | Title too long or empty | Shorten to ≤60 characters |
| `主題版本 必須是 1–1000000 的整數。` | `version` non-integer or out of range | Use an integer 1–1,000,000 |
| `節點 〈id〉 的 ID 必須以 〈topic.id〉. 開頭。` | Namespace mismatch | Prefix the node ID with the topic ID and a period |
| `節點 ID 重複：〈id〉` | Duplicate ID in the same pack | Make IDs unique |
| `〈id〉 的 parents 必須是先修 ID 陣列，最多 10 個。` | `parents` is not an array or exceeds 10 | Use a valid array |
| `〈id〉 的先修節點重複。` | Duplicate prerequisite IDs | Remove duplicates |
| `〈id〉 需要 1–60 段教學內容。` | `content` empty or over 60 blocks | Adjust the block count |
| `〈id〉 的內容類型無效。` | `type` outside the five allowed values | Use only `heading` / `paragraph` / `formula` / `example` / `tip` |
| `〈id〉 需要 1–20 題練習。` | Wrong `questions` count | Use 1–20 questions |
| `〈id〉 每題需要 2–6 個選項。` | Wrong option count | Use 2–6 options |
| `〈id〉 的題目包含重複選項。` | Duplicate options in one question | Rewrite the options |
| `答案索引 必須是 0–〈n〉 的整數。` | `answer` out of range or non-integer | Use `0 … options.length - 1` |
| `〈id〉 的 kind 無效。` | Custom `kind` | Use one of the three values |
| `通過題數 必須是 1–〈n〉 的整數。` | `passCount` exceeds the question count | Use 1 … question count |
| `〈node.id〉 的先修節點不存在：〈parent〉` | Prerequisite not loaded or mistyped | Load the dependency topic or fix the ID |
| `先修關係形成循環，請修正節點的 parents。` | Cycle in the graph | Remove a cyclic edge |
| `這個包的版本較舊，請使用相同或較新的版本。` | `prepare()` received an older version | Increase `topic.version` |
| `內容有修改，請把 topic.json 的 version 增加後再上傳。` | Content changed without a version increase | Bump `topic.version` and rebuild |
| `請選擇有效的 ZIP，檔案上限為 5 MB。` | ZIP too small or too large | Use a valid ZIP of 22 bytes–5 MB |
| `不支援分卷 ZIP。` | Split archive or inconsistent counts | Repackage as a single volume |
| `ZIP 目錄無效，或超過 128 個項目。` | More than 128 entries or bad offset | Reduce entries and repackage |
| `請使用未加密的普通 ZIP（Store 或 Deflate）。` | Encrypted or unsupported method | Repackage unencrypted with Store/Deflate |
| `ZIP 含有不支援的檔案路徑。` | Absolute path, `..`, `.`, backslash, colon, or NUL | Use simple relative paths |
| `ZIP 包含重複檔案：〈name〉` | Duplicate entry name | Remove the duplicate |
| `解壓內容過大：單檔最多 512 KB，總量最多 4 MB。` | Size limit exceeded | Trim content or split topics |
| `ZIP 檔案校驗失敗：〈name〉` | CRC32 mismatch or corruption | Regenerate the ZIP |
| `每個 ZIP 必須包含一份 topic.json。` | Missing or multiple `topic.json` | Include exactly one |
| `不支援的檔案位置：〈name〉` | JSON outside `topic.json` / `nodes/*.json` | Fix the path (one enclosing folder is allowed) |
| `〈name〉 不是有效的 UTF-8 JSON。` | Invalid JSON or non-UTF-8 encoding | Fix the JSON and save as UTF-8 |

[Back to top](#top)

---

<a id="s14"></a>

## 14. Import and update (user workflow)

1. Open the website's learning-pack manager and choose or drop a ZIP.
2. Review the topic name, version, per-node added/updated/unchanged status, and prerequisites.
3. Confirm the import, then use the topic navigation control to find it.

An existing topic ID is merged. Matching node IDs are updated; old nodes omitted from the incoming pack remain (`retained`). Importing identical content is idempotent (`changed === false`) and the UI reports "already imported". Older versions and changed content without a version increase are rejected.

Content and progress are stored separately. Completed records survive updates; incomplete nodes follow the new prerequisite conditions. Updated questions can be practiced again.

Uploaded content and progress are stored in the current browser/site origin's `localStorage`, without cross-device synchronization. Exported learning-pack ZIPs contain teaching content, not personal progress. Local files and hosted URLs use separate storage, so records do not carry over between them.

When default and uploaded packs share an ID, only one topic is displayed. An equal or newer stored version takes precedence. A newer bundled version updates matching IDs while preserving extra nodes. CIS221 completion records remain; removed legacy introductory lessons do not count toward the new course's progress.

**Prerequisites across packs**: the common entry ID is `start`. Course IDs come from packs, such as `cis221-calculus.functions` and `cis221-calculus.chain`; the full list is available in each topic's `nodes/`. To attach a topic after the chain rule, set `attachTo` to `cis221-calculus.chain` and leave the entry node's `parents` empty. Nodes can also reference complete IDs in other loaded topics. Load dependencies first; missing prerequisites and cycles are rejected.

[Back to top](#top)

---

<a id="s15"></a>

## 15. FAQ

**Q: Can `content` contain Markdown tables or custom HTML?**
A: No. `content` supports only five `type` values; `text` is HTML-escaped before display, so tags render as plain text. Use `•` and `\n` for lists.

**Q: Can I add a new `kind` value?**
A: No. `validate()` accepts only `base` / `derivative` / `integral`; use `base` for other subjects.

**Q: What happens if I change questions and forget the version bump?**
A: `prepare()` rejects with "內容有修改，請把 topic.json 的 version 增加後再上傳。" and leaves existing data untouched. Increase `topic.version` and rebuild.

**Q: Can a ZIP contain `README.md`?**
A: Yes. `readZip()` skips `.md` / `.txt`; `build-learning-packs.cjs` automatically includes `README.md` when it exists in the topic folder.

**Q: Can a ZIP have one enclosing folder? Two?**
A: Exactly one enclosing folder is allowed (for example `course/topic.json` and `course/nodes/…`); `prefix` derives from the `topic.json` location, and every other file must sit under the same `prefix`. `tests/topic-packs.test.cjs` verifies the single-folder case.

**Q: Can I rename a node ID?**
A: Technically yes, but it is discouraged. Progress records map to IDs; a renamed ID is treated as "added" while the old node is retained via `retained`, so learning history no longer carries over.

**Q: Can version numbers skip?**
A: Yes. Any integer 1–1,000,000 works, as long as it is strictly greater than the existing version when content changes.

**Q: Can I use 7z, RAR, or an encrypted ZIP?**
A: No. Only unencrypted standard ZIPs using Store or Deflate are accepted.

**Q: Why does the live site's content differ from this document?**
A: GitHub Pages currently serves an older deployment (its `topic.json` is `version: 1`), unlike local HEAD `8d7b4cb` (`version: 5`). This document describes the local build.

**Q: Are answers protected by a server?**
A: No. `catalog.js`, `nodes/*.json`, and the ZIP share the same source and contain all 270 `answer` fields. The project is purely front-end: no backend, no accounts, no server-side grading.

[Back to top](#top)

---

<a id="s16"></a>

## 16. Changelog

| Version | Date | Notes |
|---|---|---|
| v1 | 2026-11-09 | Initial format description: directory tree, `topic.json` / node fields, attachment point, import/update, file limits |
| English edition on GitHub | 2026-11 | Added `PACK_FORMAT.en.md`, establishing bilingual documents with a language switch link |
| `rev. 2.0` | 2026-11-17 | Merged the existing English and Chinese GitHub documents and expanded substantially: current figures (27 / 270 / 7 / 15), complete `validate()` rules, `readZip()` technical validation (EOCD / CRC32 / signatures / paths), `loadLibrary()` and `prepare()` semantics, `catalog.js` generation and `localeCompare('zh-Hant',{numeric:true})` sorting, an fflate version caveat, complete examples, error/troubleshooting tables, an FAQ, a changelog, a status line, a `<details>` TOC, back-to-top links, language switching, and related links |

Stale statements corrected: the old document claimed "fflate 0.8.3", now marked as a documented claim that cannot be verified inside the file; the old "14/14" test count is now **20/20** (`topic-packs` 14, `tree-layout` 3, `i18n` 3).

[Back to top](#top)

---

<a id="s17"></a>

## 17. Appendix: related documents and links

### 17.1 Project documents

| Document | Purpose |
|---|---|
| [README.md](README.md) / [README.en.md](README.en.md) | Getting started and documentation index |
| [AI_TEACHING_GUIDE.md](AI_TEACHING_GUIDE.md) / [AI_TEACHING_GUIDE.en.md](AI_TEACHING_GUIDE.en.md) | Eight production stages and checklists for AI authors |
| [PACK_FORMAT.md](PACK_FORMAT.md) / [PACK_FORMAT.en.md](PACK_FORMAT.en.md) | This document and its Chinese counterpart |
| [I18N.md](I18N.md) | Maintaining Chinese and English translations (single bilingual file) |
| [BOOK-REFERENCE.md](BOOK-REFERENCE.md) | Book sources, 46 chapters, the 27-node mapping, and OCR risks |
| [DESIGN-v2.md](DESIGN-v2.md) | Design and acceptance history (some figures are stale) |
| [MULTIUSER-ARCH.md](MULTIUSER-ARCH.md) | Multi-user architecture assessment |
| [Calculus course README](learning-packs/cis221-calculus/README.md) / [README.en.md](learning-packs/cis221-calculus/README.en.md) | The 27 lessons and prerequisites |

### 17.2 Source code and verification

| File | Role |
|---|---|
| `js/topic-packs.js` | `validate` / `prepare` / `buildLessons` / `loadLibrary` / `ordered` / `readZip` / `writeZip` / `escape` |
| `scripts/build-learning-packs.cjs` | Generates `catalog.js` and topic ZIPs |
| `tests/topic-packs.test.cjs` | 14 tests: format, version merging, ZIP round-trip, security |
| `tests/tree-layout.test.cjs` | 3 tests: presentation graph and 300-node stress |
| `tests/i18n.test.cjs` | 3 tests: translation coverage, dynamic labels, unknown text |
| `js/vendor/fflate-LICENSE.txt` | MIT license for `fflate` |

### 17.3 Online links

- Live site: <https://bronya-0914.github.io/Skill-Tree/>
- Source repository: <https://github.com/Bronya-0914/Skill-Tree>

### 17.4 Deployment reminder

The book OCR full text under `references/` is copyrighted and for local reference only; **it must be excluded before publishing**. `js/hosting.json` sets `static.directory: "."`, which currently exposes the whole project root as the static root, and the project has no `.gitignore`. Take care when pushing or packaging a release not to publish `references/`, design drafts, or tests alongside the public site.

[Back to top](#top)
