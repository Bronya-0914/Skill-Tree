<a id="top"></a>

# AI Course Authoring Guide · AI 課題生成指南

> **One line**: upload one piece of material, grow one skill tree — progress you can see, achievement you can feel.
> **How to use**: [Start here](README.en.md#how-to-use) · [Machine-readable AGENTS.md](AGENTS.md) · [Pack format](PACK_FORMAT.en.md) · [Live demo](https://bronya-0914.github.io/Skill-Tree/)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **繁體中文**: [AI_TEACHING_GUIDE.md](AI_TEACHING_GUIDE.md)

---

## 0. Role of this document

| File | Audience | When |
|---|---|---|
| [`AGENTS.md`](AGENTS.md) | AI | Read on intake: machine-readable contract and mandatory questions |
| **This file** | AI / human | When you need the full method, verbatim prompts and quality bar |
| [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md) | AI | When writing JSON and packaging |
| [`README.en.md`](README.en.md) | User | When you want to know how the site works |

**This project assumes no pre-existing subject content.** Every course comes from material the user supplies. Your job is "ask clearly → organise well → generate something verifiable", not to transplant a fixed syllabus.

### Two hard rules

1. **No material, no generation.** Without a book, notes, PDF, question bank, slides or topic outline, emit no lesson content; never pass off model memory as a source.
2. **No questions without an answer mode.** Ask how the user wants to answer before designing any item. The order is fixed.

---

## 1. The eight stages

| Stage | Name | Exit condition |
|---|---|---|
| 0 | Intake and scope | Confirmed the task is "build a new course" and understood the site's purpose |
| 1 | **Ask for material (blocking)** | A citable source exists, or the user explicitly approves "no specific source" |
| 2 | **Ask answer mode (blocking)** | Preference recorded and any interface gap disclosed |
| 3 | Design the course shape | Name, ID, nodes, prerequisite DAG, item count, threshold, time, language all agreed |
| 4 | Write node content | Every node has an intro, segmented concepts, worked example and tips |
| 5 | Design items and explanations | Wording and explanation structure match the stage 2 preference |
| 6 | Package and build | Format validation passes; builder produces the catalogue and ZIP |
| 7 | Validate and hand off | Tests green, on-site unlock and persistence verified, handoff complete |

Stages 1 and 2 are **blocking**: stop until they pass. Do not "produce a draft first and fix it later".

---

## 2. Stage 1 — Ask for material

### Verbatim prompt

> Please give me one source of material before I generate anything: a book or selected chapters, lecture notes, your own notes, a PDF, a question bank, slides, or an outline of the topics you want covered. You may also just name the subject and scope, but please say what the content should be based on.
> Also tell me the language, the approximate size, and anything you want emphasised or skipped.

### Exit conditions and handling

| Situation | Action |
|---|---|
| A file or pasted text | Record source name, language and scope; proceed to stage 2 |
| Only a subject name | Follow up: "Is there a specific textbook or reference you want used?" |
| Explicitly "no source, just organise it" | Record as "no specific source, organised from general knowledge", state it inside the material, still proceed to stage 2 |
| Material appears copyrighted | It may be used as a basis, but **do not put full original text into files that will be published**; rewrite in your own words and keep the knowledge points |
| Scanned / OCR material | Flag distortion risk; verify formulas, figures and stems against the original page, never copy blindly |

### Why this is strict

The value of a skill tree is visible progress. If the content is invented, a lit node corresponds to no real learning and the sense of achievement is hollow. Traceable sourcing is the premise of the whole design.

---

## 3. Stage 2 — Ask how they want to answer

### Verbatim prompt

> How would you like to answer the questions? The site supports: (1) multiple choice (2–6 options, graded on submit); (2) numeric input, where you work out the value and type it, including fractions and expressions such as `sqrt(2)` or `pi`; (3) multipart questions, where one item has several sub-questions and all must be correct; (4) mixed or custom — describe your approach.
> Also tell me roughly how many questions per node, how many correct answers are needed to pass, and whether there is a time limit.

### Turning preference into content

| Preference | Item design | Explanation style | Format fields |
|---|---|---|---|
| Multiple choice | 2–6 options; distractors from real misconceptions | Why the answer is right and why each distractor is wrong | `prompt` / `options` / `answer` |
| Numeric input | Work out a value and type it; equivalent forms accepted | Step-by-step derivation to compare with your own working | `type:'input'` / `answers` / `tolerance` |
| Multipart | 2–8 sub-questions; all must be correct | Explain each sub-question, forming one full derivation | `type:'multipart'` / `parts` |
| Mixed / custom | Mix the three types by node | Each item uses its own structure | Confirm feasibility first |

### Honesty rule

The site currently supports three item types: **multiple choice** (2–6 options), **numeric input** (integers, decimals, fractions, or expressions such as `sqrt(2)` and `pi`, with optional tolerance), and **multipart questions** (2–8 sub-questions; all must be correct for the item to count). A handwritten scratchpad is also available.

Choose the item type that matches the user's preference. Only for modes outside these three (for example spoken answers or grading uploaded handwriting) should the AI disclose the gap first, then apply the preference to wording and explanations. Never claim an unimplemented feature or invent fields that do not exist.

---

## 4. Stage 3 — Design the course shape

| Decision | Recommendation |
|---|---|
| Splitting | By knowledge point, not by the source's chapter numbers; one node = one independently completable unit |
| Prerequisites | Directed acyclic graph; every parent must exist, no cycles |
| Node count | Driven by the amount of material; do not pad it out |
| Questions per node | 10 (adjustable) |
| Pass threshold | 7 (adjustable), always below the item count |
| Suggested time | 15 minutes (adjustable) |
| Naming | Course ID in lowercase with hyphens; keep node IDs stable across edits so old progress survives |

**Visibility matters**: the prerequisite graph becomes the tree the user sees. Too few branches look like a straight line with no choice; too many make "what next?" unclear. While designing, keep asking "looking at this map, can the user tell at a glance what to do now?"

---

## 5. Stage 4 — Write node content

| Block | How to write it |
|---|---|
| Intro | Two or three sentences on what problem this knowledge point solves and why it is worth learning |
| Segmented concepts | One idea per paragraph; break long formulas onto explicit lines so they do not wrap inside boxes |
| Worked example | Step-by-step, noting which part of the material it comes from |
| Tips | Common misconceptions, pitfalls, memory hooks |
| Language | Follow the material; maintain a separate translation catalogue if bilingual output is needed |

**Achievement matters**: the intro should tell the learner "after this, what can I do that I could not before?". Completing a node should produce one concrete takeaway, not just the memory of having read something.

---

## 6. Stage 5 — Design items and explanations

- Distribute correct-answer positions; picking the same option everywhere must not pass.
- Distractors should come from real misconceptions, not obvious absurdities.
- Every item needs an explanation; explaining is part of learning, not just answer disclosure.
- Keep item count and threshold consistent: too low makes a lit node meaningless, too high stalls progress.
- Apply the stage 2 preference to tone and explanation structure, and record the preference in the handoff note.

---

## 7. Stage 6 — Package and build

Produce the course descriptor and node files per [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md), then let the builder regenerate the catalogue and ZIP:

```bash
node scripts/build-learning-packs.cjs
```

**Never hand-edit generated files.** Validation rejects missing fields, prerequisite cycles, contradictory counts and duplicate IDs. When rejected, fix the source rather than bypassing validation.

---

## 8. Stage 7 — Validate and hand off

```bash
node --test tests/*.test.cjs
```

On-site checklist:

- [ ] Tree expands; nodes and edges visible
- [ ] Concept tab readable; formulas do not overflow
- [ ] Items answerable; submit disabled until complete
- [ ] Per-item feedback and explanations work
- [ ] Passing unlocks successors and lighting animation plays
- [ ] Progress survives a reload
- [ ] No horizontal scrolling on desktop or mobile

Tell the user where the ZIP is, how to import it, how to export/import a progress backup, and how to reset. **Do not claim deployment or a push** unless it actually happened with authorisation.

---

## 9. Quality checklist

- [ ] Stage 1 prompt actually asked, with a traceable source
- [ ] Stage 2 prompt actually asked, with the preference applied
- [ ] One of the three item types chosen per preference; out-of-scope modes disclosed
- [ ] Prerequisite graph has no cycles, no orphans, and a clear next step
- [ ] Node IDs stable across edits
- [ ] Items, explanations and threshold consistent; correct answers distributed
- [ ] No copyrighted full text copied
- [ ] Builder and tests pass; on-site verification done
- [ ] Handoff complete, with no false deployment claims

---

## 10. Common mistakes

| Mistake | Consequence | Fix |
|---|---|---|
| Skip the questions and generate | Content misses expectations; source untraceable | Return to stage 1 |
| Write items before asking answer mode | Every item needs rewriting | Return to stage 2 |
| Treat source chapters as nodes | Nodes too large, lighting too rare, achievement diluted | Split by knowledge point |
| Used a mode outside the three item types without disclosing it | Loss of trust | Disclose the gap, then apply it to wording and explanations |
| Hand-edit generated files | Next build overwrites the work | Edit the source and rebuild |
| Test JSON only | Misses unlock, wrapping and mobile issues | Add on-site verification |

---

**Related**: [AGENTS.md](AGENTS.md) ｜ [User guide](README.en.md) ｜ [Pack format](PACK_FORMAT.en.md) ｜ [i18n](I18N.md) ｜ [Docs index](docs/README.md)

[↑ Back to top](#top)
