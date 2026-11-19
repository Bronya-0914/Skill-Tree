<a id="top"></a>

# Security & Pre-release Checks · 安全邊界與發布前檢查

> **One line**: upload one piece of material, grow one skill tree — progress you can see, achievement you can feel.
> **How to use**: [User guide, How to Use](../README.en.md#how-to-use) · [Mandatory AI prompts](../AGENTS.md) · [Persistence boundaries](../MULTIUSER-ARCH.md) · [Live demo](https://bronya-0914.github.io/Skill-Tree/)
> **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>
> **繁體中文**: [SECURITY.md](SECURITY.md)

---

## 1. Security model

| Item | Today |
|---|---|
| Backend | None |
| Accounts | None |
| Data location | The user's browser `localStorage` |
| Network | No external APIs, no tracking |
| Grading | Client-side |
| Answer location | Client-side data files |

**Conclusion**: this is a tool for open practice and visible progress, **not for formal assessment where answers must stay secret**. A client that grades must be able to read the answers; no front-end trick avoids that.

---

## 2. Data boundaries

| Data | Risk | Mitigation |
|---|---|---|
| Progress backup JSON | Plain text, unencrypted, overwrite import | Confirm before import; keep out of public folders |
| Handwritten scratchpad | Stored in the browser, may contain personal handwriting | Treat as personal data, do not share |
| User-supplied material | May be copyrighted or confidential | See [`BOOK-REFERENCE.md`](../BOOK-REFERENCE.md) |
| Theme, glow, panel position | Low-risk preferences | Still personal data; handle with backups |

---

## 3. Copyright and confidential material

- Having a file **is not** a license to publish it. It can be a basis for generation without being redistributable.
- Do not put full original text, scanned pages or OCR dumps into publishable files or a static site.
- Keep personal notes, grades and identity data out of course material, examples and sample backups.
- If a static site serves the whole project root, **any folder placed there may become public**; exclude the delivery bundle, reference material and handoff documents before publishing, or add ignore rules.
- **No license has been specified yet**; confirm with the project owner before using or distributing.

---

## 4. Constraints on AI agents

[`AGENTS.md`](../AGENTS.md) defines two blocking mandatory questions (material, answer mode), plus:

| Rule | Reason |
|---|---|
| Do not invent a source | A lit node must correspond to real learning |
| Disclose modes outside the three item types first | Do not mislead users |
| Do not claim deployments that did not happen | No false "live" or "pushed" claims |
| Never request or write tokens | Credentials do not belong in documents |
| Never copy copyrighted full text | Legal risk |

---

## 5. Pre-release checklist

- [ ] Confirm the static root scope; exclude reference material, local handoff documents and private backups
- [ ] No absolute local paths, accounts, tokens or deployment identifiers
- [ ] No copyrighted full text or scanned pages
- [ ] License resolved, or explicitly marked as unspecified
- [ ] Documentation state matches the actual live version; no false deployment claims
- [ ] Any `references/` style folder is outside the public scope
- [ ] Tests green, main flow verified on site, zero browser errors
- [ ] External actions (upload, push, publish) explicitly authorised

---

## 6. Reporting issues

Open an issue at <https://github.com/Bronya-0914/Skill-Tree/issues> with reproduction steps and blast radius. **Never paste private backup contents or credentials into a public issue.**

---

## 7. Known limitations

| Limitation | Detail |
|---|---|
| Answers on the client | Not suitable for secure examinations |
| Unencrypted backups | Anyone with the file can read it |
| Overwrite import | A mistaken import replaces existing data |
| No server compute | No truly secure grading or class-wide aggregation |
| No license | Legal status undecided |
| Broad static root | Requires manual exclusion; do not assume the platform filters it |

---

**Related**: [AGENTS.md](../AGENTS.md) ｜ [User guide](../README.en.md) ｜ [Preparing material](../BOOK-REFERENCE.md) ｜ [Multi-user boundaries](../MULTIUSER-ARCH.md) ｜ [Architecture](ARCHITECTURE.en.md) ｜ [Docs index](README.md)

[↑ Back to top](#top)
