<a id="top"></a>

# Changelog · 變更紀錄

> **One line**: upload one piece of material, grow one skill tree — progress you can see, achievement you can feel.
> **How to use**: [User guide, How to Use](../README.en.md#how-to-use) · [Mandatory AI prompts](../AGENTS.md) · [Live demo](https://bronya-0914.github.io/Skill-Tree/)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **繁體中文**: [CHANGELOG.md](CHANGELOG.md)

---

## How this is recorded

This file tracks **changes to the documentation set and product positioning**, not individual code commits. The format is "version → change → reason → blast radius". Code history lives in Git; course content changes are tracked by the learning pack's `version`.

---

## 2026-11-19 — Documentation rewrite (current)

### Changes

| Item | Detail |
|---|---|
| Positioning | "Upload one piece of material, grow one skill tree"; no pre-existing course used as the framing |
| Motivation | States visible progress and a sense of achievement on every completion |
| How to use | A prominent "How to Use" block **before the table of contents** in the main README, with three entry points: learner, subject switcher, AI |
| AI-readable | New [`AGENTS.md`](../AGENTS.md), single-file bilingual plus a machine-readable YAML contract |
| Generation flow | Two blocking mandatory questions: ask for material, then ask the answer mode, then generate |
| Honesty rule | Three item types chosen by preference; only out-of-scope modes need disclosure |
| Scope | The entire documentation set rewritten for consistent positioning; technical and historical documents reframed as general principles and methods |

### Reason

Earlier documents framed the site around a fixed body of content, which obscured the core ability to swap subjects by swapping material. They also failed to put "how to use" and "how an AI should take over" somewhere obvious. This version aligns positioning, the usage entry point and the AI workflow.

### Blast radius

- All 23 uploadable documents updated; `AGENTS.md` added.
- Both local handoff documents (`START_HERE.md`, `AI_UPLOAD_GUIDE.md`) updated for the new count and destination map.
- **No code, course sources, generated artefacts or tests were changed**; Markdown only.
- Links, URL coverage and tests re-verified before delivery.

---

## Earlier versions (summary)

| Period | Focus |
|---|---|
| Interface and interaction | Dark/light themes, custom glow, draggable resizable answer panel, handwritten scratchpad, single-click open/close, centring and edge routing |
| Data and persistence | Browser-side persistence, backup export/import, answer threshold and per-item feedback, pack validation and version comparison |
| Bilingual | Interface language switching, catalogue maintenance, bilingual documentation set |
| Documentation | Paired `.en.md` mirrors, single-file bilingual documents, technical and security guides |

> The table records direction only, not measured figures; measurement and acceptance records belong to their own stage documents.

---

## Version comparison

| Documentation version | Positioning | AI guidance |
|---|---|---|
| Current | Upload material to add subjects; visible progress and achievement | Two mandatory questions in `AGENTS.md` |
| Earlier | Usage notes framed around fixed content | Scattered across authoring guides |

---

## Open items and known limitations

- Modes outside the three item types have no dedicated UI and must be disclosed as a gap.
- No server-side grading; unsuitable for secure examinations.
- No license specified yet.
- The live demo may lag behind the state described here; documentation updates are not deployments.

---

**Related**: [AGENTS.md](../AGENTS.md) ｜ [User guide](../README.en.md) ｜ [Decision record](MD-AUDIT.md) ｜ [Docs index](README.md)

[↑ Back to top](#top)
