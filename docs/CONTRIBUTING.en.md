<a id="top"></a>

# Contributing · 修改 SOP

> **One line**: upload one piece of material, grow one skill tree — progress you can see, achievement you can feel.
> **How to use**: [User guide, How to Use](../README.en.md#how-to-use) · [Mandatory AI prompts](../AGENTS.md) · [Pack format](../PACK_FORMAT.en.md) · [Live demo](https://bronya-0914.github.io/Skill-Tree/)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **繁體中文**: [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 1. Identify what you are changing

| Goal | Path | Code change? |
|---|---|---|
| Switch subject | Prepare material → hand to AI → import the learning-pack ZIP | **No** |
| Edit a node's text or items | Edit pack sources → rebuild → test → verify on site | No |
| Change interaction or layout | Edit front end → static checks → screen-by-screen verification | Yes |
| Change the format | Update validation and builder → add tests → define version and migration | Yes |
| Change documentation | Edit Markdown → check links and bilingual consistency | No |

**Most common misconception**: switching subjects requires code changes. It does not — it needs material and the two mandatory questions in [`AGENTS.md`](../AGENTS.md).

---

## 2. Development environment

| Item | Requirement |
|---|---|
| Runtime | Node.js for tests and the builder |
| Front end | A modern browser; any static server can serve `index.html` |
| Dependencies | The site itself needs none; do not rewrite it with a framework |
| Version control | Git; check the working tree scope before committing |

```bash
node --test tests/*.test.cjs
node --check app.js
node scripts/build-learning-packs.cjs
```

---

## 3. Course and material SOP

1. Read [`AGENTS.md`](../AGENTS.md): **ask for material**, then **ask the answer mode**. No generation before both.
2. Follow the eight stages in [`AI_TEACHING_GUIDE.en.md`](../AI_TEACHING_GUIDE.en.md).
3. Write sources per [`PACK_FORMAT.en.md`](../PACK_FORMAT.en.md); increment `version` on any content change and record the basis in `sourceNote`.
4. Keep node IDs stable; warn the user before changing them because progress may no longer match.
5. Run the builder to regenerate the catalogue and ZIP; **never hand-edit generated files**.
6. Run tests, then verify on site: import, concepts, answering, unlock, lighting, persistence after reload.
7. For bilingual output, add whole-block and per-line keys per [`I18N.md`](../I18N.md).

---

## 4. Front-end SOP

1. Assess blast radius first: DOM IDs, state machine, data layer, storage keys.
2. Visual changes must not change unlock rules; click-to-open must work on desktop and mobile.
3. Static checks: syntax, CSS braces, reachable assets, local links.
4. Runtime verification with evidence: start, expanded tree, themes, panel open/closed, quiz, grading, mobile widths.
5. Defect closure: symptom → root cause → fix → regression; record only reproducible issues.
6. Respect `prefers-reduced-motion`; keep animation to necessary feedback.

---

## 5. Documentation rules

- **Consistent positioning**: the site ships with no pre-existing course; courses come from material. Changing positioning means changing the whole set.
- **Bilingual**: paired `.md` / `.en.md` files move together; both sections of single-file bilingual documents move together.
- **Two URLs**: every document carries the live demo and repository links.
- **Links**: relative only; renaming a file means updating every reference.
- **No absolute local paths**, no tokens, no claims of deployments that did not happen.
- New rules for agents go into [`AGENTS.md`](../AGENTS.md) first, not scattered across documents.

---

## 6. Prohibited

| Prohibited | Reason |
|---|---|
| Hand-editing `catalog.js` or ZIPs | The next build overwrites it |
| Skipping the two mandatory questions in [`AGENTS.md`](../AGENTS.md) | Untraceable content, items mismatched to preferences |
| Using a mode outside the three item types without disclosure | Misleads users |
| Putting full copyrighted text into publishable files | Legal risk, see [`SECURITY.en.md`](SECURITY.en.md) |
| Pushing, deploying or publishing without authorisation | External actions require consent |
| Changing positioning only in the main README | The documentation set becomes self-contradictory |

---

## 7. Pre-commit checklist

- [ ] Tests green, syntax checks pass
- [ ] Main flow verified on site with zero browser errors
- [ ] Themes, mobile widths and formula wrapping checked
- [ ] Relative links unbroken, bilingual content aligned
- [ ] Both URLs present, no absolute local paths
- [ ] No confidential material, no hand-edited generated files
- [ ] Clear about what is uncommitted and undeployed

---

## 8. Acceptance criteria (R5)

| Layer | Exit condition |
|---|---|
| Static analysis | Syntax, braces, links and assets clean |
| Runtime verification | Evidence for each screen; defects closed or listed as known limitations |
| Defect closure | Every issue has symptom, root cause, fix and regression result |

---

**Related**: [AGENTS.md](../AGENTS.md) ｜ [User guide](../README.en.md) ｜ [Authoring method](../AI_TEACHING_GUIDE.en.md) ｜ [Format](../PACK_FORMAT.en.md) ｜ [Security](SECURITY.en.md) ｜ [Docs index](README.md)

[↑ Back to top](#top)
