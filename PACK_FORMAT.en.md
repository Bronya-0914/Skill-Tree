# Learning-pack format v1

[繁體中文](PACK_FORMAT.md) · English

Each topic is a UTF-8 folder with one JSON file per node. Share or upload it as a ZIP. The website can load built-in content directly from a local `index.html`.

```text
learning-packs/
  <topic-id>/
    topic.json
    README.md
    nodes/
      <topic-id>.<node-id>.json
  <topic-id>.zip
  catalog.js
```

A ZIP contains `topic.json` and `nodes/`, optionally under one enclosing folder. Relationships use JSON IDs rather than filenames.

## Build the default library

Edit topic/node JSON, then run from the repository root:

```text
node scripts/build-learning-packs.cjs
```

The builder validates topics and prerequisites and generates each ZIP plus `learning-packs/catalog.js`. Do not edit the generated catalog. Add new topic folders and run the same command. The default calculus pack has 27 nodes and 270 questions; Start is a shared navigation entry, not a lesson.

## Topic metadata

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

- `schemaVersion`: format version, currently 1.
- `version`: integer content version, beginning at 1; increase it when changing content.
- `id`: starts with a lowercase English letter; may include digits, hyphens, and periods; maximum 100 characters.
- `attachTo`: entry attachment node; defaults to `start` when omitted.

## Node example

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

- Node IDs must start with the topic ID followed by a period.
- `parents` lists prerequisite IDs. An empty list attaches to the topic's `attachTo`. All prerequisites must be completed.
- `kind` supports `base`, `derivative`, or `integral` for styling.
- Supported content types: `heading`, `paragraph`, `formula`, `example`, `tip`. Use `\n` for line breaks and Unicode formulas such as x², ∫, and √. HTML is displayed as text.
- Each node has 1–20 questions and each question has 2–6 distinct options.
- `answer` is zero-based: 1 selects the second option.
- `passCount` is between 1 and the total number of questions.

## Prerequisites across packs

The common entry ID is `start`. Course IDs come from packs, such as `cis221-calculus.functions` and `cis221-calculus.chain`.

To attach a topic after the chain rule, set `attachTo` to `cis221-calculus.chain` and leave the entry node's `parents` empty. Nodes can also reference complete IDs in other loaded topics. Load dependencies first; missing prerequisites and cycles are rejected.

## Import and update

1. Open the website's learning-pack manager and choose or drop a ZIP.
2. Review the topic name, version, node additions/updates, and prerequisites.
3. Confirm the import, then use the topic navigation control to find it.

An existing topic ID is merged. Matching node IDs are updated; old nodes omitted from the incoming pack remain. Importing identical content is idempotent. Older versions and changed content without a version increase are rejected.

Content and progress are stored separately. Completed records survive updates; incomplete nodes follow the new prerequisite conditions. Updated questions can be practiced again.

Uploaded content and progress are stored in the current browser/site origin, without cross-device synchronization. Exported learning-pack ZIPs contain teaching content, not personal progress. Local files and hosted URLs use separate storage.

When default and uploaded packs share an ID, only one topic is displayed. An equal or newer stored version takes precedence. A newer bundled version updates matching IDs while preserving extra nodes. CIS221 completion records remain; removed legacy introductory lessons do not count toward the new course's progress.

## Limits

- ZIP: at most 5 MB, unencrypted, Store or Deflate compression.
- Each pack: 1–100 nodes and at most 128 ZIP entries.
- Expanded file: at most 512 KB; total expanded size: at most 4 MB.
- At most 30 stored topics and 300 imported nodes, also subject to browser storage quotas.
- JSON paths must be `topic.json` or `nodes/*.json`; `.txt` and `.md` documentation is allowed.

Built-in course sources are under `learning-packs/cis221-calculus/`. ZIP handling uses fflate 0.8.3; its MIT license is preserved at `js/vendor/fflate-LICENSE.txt`.
