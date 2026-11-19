<a id="readme-top"></a>

<div align="center">

<h1 align="center">Skill Tree</h1>

<p align="center"><strong>Upload one piece of material, grow one skill tree. Hand a book, lecture notes or your own notes to an AI, get a course that lights up node by node — progress you can see, achievement you can feel.</strong></p>

<p align="center"><a href="README.md">繁體中文</a> · English</p>

<p align="center">
  <a href="https://bronya-0914.github.io/Skill-Tree/">Live Demo</a> ·
  <a href="https://github.com/Bronya-0914/Skill-Tree">GitHub Repo</a> ·
  <a href="#how-to-use">How to Use</a> ·
  <a href="AGENTS.md">AGENTS.md for AI</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/runtime-pure%20static-2ea44f" alt="Pure static">
  <img src="https://img.shields.io/badge/content-upload%20your%20own-1f6feb" alt="Bring your own material">
  <img src="https://img.shields.io/badge/progress-visible-2ea44f" alt="Visible progress">
  <img src="https://img.shields.io/badge/backend-none-8250df" alt="No backend">
  <img src="https://img.shields.io/badge/AI-ready-AGENTS.md-6f42c1" alt="AI-readable guide">
  <img src="https://img.shields.io/badge/docs-bilingual-6f42c1" alt="Bilingual docs">
  <img src="https://img.shields.io/badge/license-not%20specified-lightgrey" alt="License not specified">
</p>

<p align="center"><sub>Static · bring your own material · visible progress · no backend · AI-ready · bilingual · license not specified</sub></p>

</div>

---

<a id="how-to-use"></a>

# How to Use · 如何使用

> **This is the single most important entry point on the site.** Whether you are a learner or an AI agent handed a task, start here.

| You are | Do this first | Details |
|---|---|---|
| **Learner, ready to start** | Open the live demo (galaxy overview) → enter the skill tree → click **Start** → pick a node → read the concept → answer in the chosen item type → pass to unlock the next node. | [§3 Full walkthrough](#sec3) |
| **Want your own subject** | Prepare material (book / notes / PDF / topic outline) → hand it to an AI → get a learning-pack ZIP → upload it through the site's import control. | [§4 Create a new course](#sec4) |
| **An AI asked to build a course** | **Read [`AGENTS.md`](AGENTS.md) directly.** Follow "ask for material → ask how they want to answer → then generate". Do not generate before both answers arrive. | [§4.2 The three steps](#sec42) |

**One line for agents**: this site assumes no built-in syllabus. Every course comes from material the user supplies. Your first action is a question, not lesson output. The machine-readable contract is the YAML block in [`AGENTS.md`](AGENTS.md).

> **Two pages**: `index.html` is the knowledge-galaxy overview showing all subjects and lit topics; `tree.html` is the skill-tree learning page where concepts, answering and unlocking happen. The two pages link to each other.

---

<details>
<summary><strong>Table of Contents (click to expand)</strong></summary>

<ol>
  <li><a href="#how-to-use">How to Use</a></li>
  <li><a href="#sec1">1. What This Is · Why Learn This Way</a></li>
  <li><a href="#sec2">2. What You See · Visible Progress</a></li>
  <li><a href="#sec3">3. Full Walkthrough</a></li>
  <li><a href="#sec4">4. Create a New Course with AI</a></li>
  <li><a href="#sec5">5. What Your Material Becomes</a></li>
  <li><a href="#sec6">6. Features</a></li>
  <li><a href="#sec7">7. Data &amp; Privacy</a></li>
  <li><a href="#sec8">8. Built With</a></li>
  <li><a href="#sec9">9. Development &amp; Testing</a></li>
  <li><a href="#sec10">10. Documentation Index</a></li>
  <li><a href="#sec11">11. Known Limitations</a></li>
  <li><a href="#sec12">12. FAQ</a></li>
  <li><a href="#sec13">13. Contributing &amp; License</a></li>
</ol>

</details>

---

<a id="sec1"></a>

## 1. What This Is · Why Learn This Way

This is not a fixed syllabus. It is a learning interface that **turns any material into an unlockable skill tree**. You supply material; an AI cuts it into nodes with prerequisites; you complete them one by one and watch them light up.

**The motive is visibility.** Most self-study stops not because the material is too hard, but because "how far have I actually got?" has no answer. A skill tree turns abstract learning into a map:

| Problem | How this solves it |
|---|---|
| I cannot tell whether I am improving | Each completed node lights up immediately and the connecting path glows; progress is a visual fact, not a feeling |
| Finishing a chapter feels like nothing | A node is an explicit unit of completion; unlocking only happens on a pass, so every unlock is a confirmed achievement |
| I never know what to do next | Prerequisites are drawn on the map, so the next available lesson is always visible |
| What I want to learn is not on the syllabus | Swap the material and a different tree grows; subject, depth and node count all follow the material |
| I am afraid of losing progress on another device | Progress lives in the browser and can be exported as a backup and imported elsewhere |

The project therefore **assumes no pre-existing course content**. Every course is the result of "user supplies material → AI generates → site renders".

---

<a id="sec2"></a>

## 2. What You See · Visible Progress

- **A tree**: from the start node downward, with edges showing prerequisites.
- **Lighting up**: finishing a node lights the node and its path; the glow colour is customisable.
- **Three states**: locked (dim), available (outlined), completed (lit).
- **Answer threshold**: the submit button stays disabled until every item is answered; all three item types can be graded
- **Resizable answer panel**: draggable, resizable, double-click to reset, plus a handwritten scratchpad for working things out first.
- **Persistence**: theme, glow, panel position, scratchpad, in-progress answers and the selected tab all stay in the browser.
- **Dark/light theme and language switch**, mobile layout, click the background to close the lesson, click a node to open it.

---

<a id="sec3"></a>

## 3. Full Walkthrough

### 3.1 Learner (shortest path)

1. Open <https://bronya-0914.github.io/Skill-Tree/>, or serve `index.html` locally.
2. Click **Start** to light the origin and expand the tree.
3. Single-click any available node to open the lesson panel.
4. Read the **Concept** tab; use the **Scratchpad** tab to work through anything by hand.
5. Answer in the **Practice** tab: pick an option, type a numeric value, or fill every sub-question of a multipart item; the submit button turns active only when all are complete.
6. Read the per-item feedback and explanations; reaching the pass threshold unlocks the next nodes.
7. Closing the page is fine — progress is still there next time. For another device, export a backup from the drawer and import it there.

### 3.2 Bringing a different subject

1. Prepare material: chapters, lecture notes, your own notes, a PDF, a question bank, slides, or a topic outline.
2. Hand it to an AI and say how you want to answer questions (see §4.2).
3. Once the AI produces a learning-pack ZIP, upload it via the site's import control.
4. Export a progress backup first if you want to keep old progress, then decide whether to reset.

### 3.3 Desktop vs. mobile

| | Desktop | Mobile |
|---|---|---|
| Open lesson | Single-click node | Single-click node |
| Close lesson | Single-click background | Single-click background |
| Answer panel | Draggable + resizable | Bottom sheet, adapts to width |
| Side panel | Expanded by default, collapsible | Collapsed by default |

---

<a id="sec4"></a>

## 4. Create a New Course with AI

### 4.1 Core idea

Courses are not hard-coded. They are **generated from material**. You do not need to change code: give an AI your material and preferences, it produces structured content per [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md), and the site renders it as a new tree.

<a id="sec42"></a>

### 4.2 The three steps (order is fixed)

| Step | The AI must ask | Why |
|---|---|---|
| **1** | "Please give me a book, lecture notes, a PDF, a question bank, or a topic outline as the basis for this course." | No basis, no generation; model memory must not masquerade as source material |
| **2** | "How do you want to answer the questions? Multiple choice / numeric input / multipart / mixed / custom?" | The answer mode determines the item type and explanation style |
| **3** | Confirm course name, node count, prerequisites, questions per node, pass threshold, time and language — then generate | Generating before the shape is agreed causes rework |

> **For agents**: steps 1 and 2 are **blocking and mandatory**. No lesson output before both answers. Verbatim prompts, the answer-mode table and a machine-readable YAML contract are all in [`AGENTS.md`](AGENTS.md). The eight-stage authoring method is in [`AI_TEACHING_GUIDE.en.md`](AI_TEACHING_GUIDE.en.md).

### 4.3 Honesty boundary

The site currently supports three item types: **multiple choice** (2–6 options), **numeric input** (integers, decimals, fractions, or expressions such as `sqrt(2)` and `pi`, with optional tolerance), and **multipart questions** (2–8 sub-questions; all must be correct for the item to count). A handwritten scratchpad is also available.

Choose the item type that matches the user's preference. Only for modes outside these three (for example spoken answers or grading uploaded handwriting) should the AI disclose the gap first, then apply the preference to wording and explanations. Never claim an unimplemented feature or invent fields that do not exist.

---

<a id="sec5"></a>

## 5. What Your Material Becomes

| Output | Contents |
|---|---|
| Course descriptor | Name, ID, version, language, attach point |
| Node list | One node per knowledge point: intro, segmented concepts, formulas / examples / tips, practice items, pass threshold, suggested time |
| Prerequisites | A directed acyclic graph that determines unlock order and drawn edges |
| Practice items | Multiple choice, numeric input and multipart items with stems, answers and explanations, designed around §4.2 |
| Learning-pack ZIP | A package the site can import |

Field limits, validation rules and version merging are in [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md). Let the builder regenerate derived artefacts; never hand-edit generated files.

---

<a id="sec6"></a>

## 6. Features

| Area | Features |
|---|---|
| Visible progress | Skill tree, per-node lighting, edge sweep, custom glow colour |
| Learning flow | Concept / Practice / Scratchpad tabs, three item types, answer threshold, per-item red-green feedback, unlock on pass |
| Course source | Learning-pack ZIP import, version merging, error rejection, topological ordering |
| Personalisation | Dark/light theme, language switch, draggable resizable panel, handwritten scratchpad |
| Data | Browser-side persistence, backup export/import, progress reset |
| Devices | Desktop and mobile layouts, click to open/close, keyboard and touch |
| Boundaries | Pure static, no backend, no accounts, no tracking, no external APIs |

---

<a id="sec7"></a>

## 7. Data & Privacy

- All progress, scratchpad strokes and answer state live in **your own browser's localStorage**; nothing is uploaded to a server.
- Exported backups are plain JSON, imported **by overwrite**, and are not encrypted; a confirmation appears before import.
- Switching browsers, changing origin, or clearing site data loses progress — export first.
- Questions and answers live on the client, so this is **not suitable for exams where answers must stay secret**.
- Full pre-release checks are in [`docs/SECURITY.en.md`](docs/SECURITY.en.md).

---

<a id="sec8"></a>

## 8. Built With

| Layer | Description |
|---|---|
| Presentation | A single `index.html` plus CSS, SVG edges, native DOM, no framework |
| Logic | State machine, unlock rules, centring and zoom, answer threshold, theme/language switching |
| Data | Learning-pack parsing and validation, ZIP reading, `localStorage` persistence |
| Build | A generator turns source material into a catalogue file and ZIPs; tests run on Node's built-in test runner |
| Deliberately absent | Backend, accounts, database, cloud SDK, tracking, external APIs |

Module responsibilities, the state machine and data flow are in [`docs/ARCHITECTURE.en.md`](docs/ARCHITECTURE.en.md).

---

<a id="sec9"></a>

## 9. Development & Testing

```bash
# Run all tests
node --test tests/*.test.cjs

# Syntax check
node --check app.js

# Rebuild learning-pack artefacts (only after changing source material)
node scripts/build-learning-packs.cjs
```

Derived files come from the builder: edit the source and rebuild, do not hand-edit them. The SOP for material, format and translation changes is in [`docs/CONTRIBUTING.en.md`](docs/CONTRIBUTING.en.md).

---

<a id="sec10"></a>

## 10. Documentation Index

| File | Purpose |
|---|---|
| [`AGENTS.md`](AGENTS.md) | **Machine-readable AI guide**: ask for material → ask answer mode → generate |
| [`README.md`](README.md) / `README.en.md` | Chinese landing page / this English mirror |
| [`AI_TEACHING_GUIDE.md`](AI_TEACHING_GUIDE.md) / [`AI_TEACHING_GUIDE.en.md`](AI_TEACHING_GUIDE.en.md) | Eight-stage course authoring method |
| [`PACK_FORMAT.md`](PACK_FORMAT.md) / [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md) | Learning-pack format and validation rules |
| [`I18N.md`](I18N.md) | Single-file bilingual guide to language switching |
| [`BOOK-REFERENCE.md`](BOOK-REFERENCE.md) | Preparing material and copyright guidance |
| [`DESIGN-v2.md`](DESIGN-v2.md) | Interface design principles and verification method |
| [`MULTIUSER-ARCH.md`](MULTIUSER-ARCH.md) | Persistence and multi-user boundaries |
| [`docs/README.md`](docs/README.md) | Documentation index with bilingual table |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) / [`docs/ARCHITECTURE.en.md`](docs/ARCHITECTURE.en.md) | Technical architecture |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) / [`docs/CHANGELOG.en.md`](docs/CHANGELOG.en.md) | Version and change records |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) / [`docs/CONTRIBUTING.en.md`](docs/CONTRIBUTING.en.md) | Change SOP |
| [`docs/SECURITY.md`](docs/SECURITY.md) / [`docs/SECURITY.en.md`](docs/SECURITY.en.md) | Security boundaries |
| [`docs/MD-AUDIT.md`](docs/MD-AUDIT.md) | Documentation set and decision record |
| `learning-packs/<topic-id>/README.md` | Topic folder guide (generic template) |

---

<a id="sec11"></a>

## 11. Known Limitations

- Modes outside the three supported item types (for example spoken answers or grading uploaded handwriting) have no dedicated UI and must be disclosed as a gap.
- No server-side grading; answers are on the client, so this cannot be used for secure examinations.
- Progress is tied to the browser origin and does not sync across devices automatically.
- Importing a backup overwrites existing data rather than merging.
- No license has been specified; resolve licensing and exclude confidential material before publishing.

---

<a id="sec12"></a>

## 12. FAQ

**Q: Can I use this without coding?** Yes. Open the site, click a node, answer questions. You only need an AI to produce a pack when you want a new subject.

**Q: What subjects can I learn?** Whatever your material supports — anything that can be broken into knowledge points with prerequisites.

**Q: Will the AI just make things up?** Under [`AGENTS.md`](AGENTS.md) it must ask you for material first. If you explicitly agree to "no specific source, organise from general knowledge", it must state that inside the material.

**Q: Can I choose how questions are asked?** Yes — that is exactly the mandatory second question; see §4.2.

**Q: Does progress follow me to another computer?** No. Export a JSON backup from the drawer and import it on the new device.

**Q: Are there accounts?** No. Everyone uses their own browser; data neither collides nor syncs.

---

<a id="sec13"></a>

## 13. Contributing & License

See [`docs/CONTRIBUTING.en.md`](docs/CONTRIBUTING.en.md) for the contribution flow and [`docs/SECURITY.en.md`](docs/SECURITY.en.md) for pre-release checks. **No license has been specified yet** — confirm with the project owner before using or distributing. Issues: <https://github.com/Bronya-0914/Skill-Tree/issues>.

---

<div align="center">

**Live demo** · <https://bronya-0914.github.io/Skill-Tree/> ｜ **Repository** · <https://github.com/Bronya-0914/Skill-Tree>

**Next**: [How to Use](#how-to-use) ｜ [AGENTS.md](AGENTS.md) ｜ [Docs index](docs/README.md)

[↑ Back to top](#readme-top)

</div>
