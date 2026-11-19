<a id="top"></a>

# Topic Folder Guide (Generic Template) · 課題資料夾說明

> **One line**: upload one piece of material, grow one skill tree — progress you can see, achievement you can feel.
> **How to use**: [User guide, How to Use](../../README.en.md#how-to-use) · [Mandatory AI prompts](../../AGENTS.md) · [Pack format](../../PACK_FORMAT.en.md) · [Live demo](https://bronya-0914.github.io/Skill-Tree/)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **繁體中文**: [README.md](README.md)

---

## 0. This is not a course list

This is a **generic template** describing what a topic folder should look like and how to prepare one. It describes no particular subject or pre-existing course. The site ships with no built-in content; every course is generated from material the user supplies.

For how to use the site, see [`README.en.md`](../../README.en.md#how-to-use). If you are an AI asked to build a course, read [`AGENTS.md`](../../AGENTS.md) directly.

---

## 1. Folder layout

```text
learning-packs/<topic-id>/
  topic.json        course descriptor (name, ID, version, language, source note)
  nodes/            one JSON per knowledge point
    <node-id>.json
  README.md         this folder guide (optional)
```

| File | Produced by | Hand-editable |
|---|---|---|
| `topic.json` | AI / human | Yes |
| `nodes/*.json` | AI / human | Yes |
| `README.md` | AI / human | Yes |
| Parent `catalog.js`, `<topic-id>.zip` | Builder | **No** |

Field definitions, validation and version comparison are in [`PACK_FORMAT.en.md`](../../PACK_FORMAT.en.md).

---

## 2. Preparing a new course

1. **Material first**: a book, notes, a PDF, a question bank or a topic outline. No material, no generation — the first blocking question in [`AGENTS.md`](../../AGENTS.md).
2. **Answer mode second**: multiple choice / numeric input / multipart / mixed / custom.
3. **Confirm the shape**: course name and ID, node count, prerequisites, items per node, pass threshold, time, language.
4. **Split by knowledge point**, not by chapter number; each node must be independently completable and independently lit.
5. **Write content and items**: intro, segmented concepts, worked example, tips, practice items and per-item explanations.
6. **Record the source**: put the basis in `sourceNote`; state explicitly when no specific source was used.

The eight-stage method is in [`AI_TEACHING_GUIDE.en.md`](../../AI_TEACHING_GUIDE.en.md).

---

## 3. Making progress visible

The structure of this folder becomes the tree the user sees:

| Design choice | What the user sees |
|---|---|
| Clear prerequisites | Readable edges, obvious next step |
| Right-sized nodes | A completable, lightable unit at a regular cadence |
| Sensible threshold | Neither stalls progress nor hands it away |
| Stable node IDs | Old progress still matches after edits |

The sense of achievement comes from the visible loop "complete → light up → unlock". Keep that experience in mind while designing nodes.

---

## 4. Build and validation

```bash
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

Then import the ZIP on the site and check: nodes visible, concepts readable, items answerable, unlock on pass, lighting works, progress survives a reload.

---

## 5. FAQ

**Q: Can I put course material straight in here?** Yes, but follow the format (`topic.json` and `nodes/`) and let the builder regenerate the parent artefacts.

**Q: Can I rename the directory?** The directory name is part of the existing site structure; check every reference and import path first.

**Q: Do I need code changes to switch subjects?** No. Prepare material, hand it to an AI, import the ZIP — see [`AGENTS.md`](../../AGENTS.md).

**Q: What about bilingual output?** Material is not translated automatically; see [`I18N.md`](../../I18N.md).

---

## 6. Checklist

- [ ] Both mandatory prompts completed (material, answer mode)
- [ ] `topic.json` has `schemaVersion`, an incremented `version`, a clear `sourceNote`
- [ ] No prerequisite cycles; node IDs stable
- [ ] Item type matches the preference; `prompt` / `answers` / `parts` fields correct; explanations and threshold consistent
- [ ] Long formulas explicitly broken into lines
- [ ] Rebuilt, tested, verified on site
- [ ] No copyrighted full text, no hand-edited generated files

---

**Related**: [AGENTS.md](../../AGENTS.md) ｜ [User guide](../../README.en.md) ｜ [Authoring method](../../AI_TEACHING_GUIDE.en.md) ｜ [Format](../../PACK_FORMAT.en.md) ｜ [Docs index](../../docs/README.md)

[↑ Back to top](#top)
