# Complete calculus learning pack

[繁體中文](README.md) · English

27 lessons and 270 questions. Each lesson includes explanations, formulas, worked examples, 10 four-option questions, and answer explanations. Answer 7 questions correctly to complete a lesson. Source content is Traditional Chinese; the website provides its English translations. Trigonometric angles use radians.

## Learn on the website

1. This pack loads automatically; there is no need to upload it again.
2. Light up Start and follow the prerequisites. A lesson with multiple prerequisites requires all of them.
3. To use the pack on another compatible site, upload `cis221-calculus.zip` through its learning-pack manager, review it, and confirm the import. English switching requires the matching website translation catalog.

## Source files

- `topic.json`: topic name, content version, and attachment point.
- `nodes/*.json`: one node per file, including teaching content, questions, answers, and prerequisites.

To change content, edit the source JSON and increase `topic.json`'s `version`. Run `node scripts/build-learning-packs.cjs` from the repository root to update the catalog and ZIP. Alternatively, ZIP `topic.json` and `nodes/` together. Keep IDs stable to preserve learning records. Use UTF-8.

## Lessons

| Lesson | Prerequisites | Questions |
|---|---|---|
| 01 · Functions, domain, and range | Start | 10 |
| 02 · Lines and quadratic functions | 01 | 10 |
| 03 · Trigonometry and radians | 02 | 10 |
| 04 · Exponentials and logarithms | 01 | 10 |
| 05 · Average and instantaneous rates | 02 | 10 |
| 06 · Limits and continuity | 05 | 10 |
| 07 · Basic and higher-order derivatives | 06 | 10 |
| 08 · Product and quotient rules | 07 | 10 |
| 09 · Trigonometric, exponential, and logarithmic derivatives | 08, 03, 04 | 10 |
| 10 · Composite functions and the chain rule | 09, 08 | 10 |
| 11 · Implicit differentiation | 10 | 10 |
| 12 · Critical points and extrema tests | 07 | 10 |
| 13 · Optimization models and applications | 12, 02 | 10 |
| 14 · Multivariable functions and surfaces | 01, 02 | 10 |
| 15 · First partial derivatives | 14, 10 | 10 |
| 16 · Higher-order and implicit partial derivatives | 15, 11 | 10 |
| 17 · Multivariable chain rule | 15, 10 | 10 |
| 18 · Indefinite integrals and the power rule | 07 | 10 |
| 19 · Exponential, logarithmic, and trigonometric integrals | 18, 09 | 10 |
| 20 · Definite integrals and the fundamental theorem | 18 | 10 |
| 21 · Integral properties and odd/even symmetry | 20, 03 | 10 |
| 22 · Substitution and the reverse chain rule | 19, 10 | 10 |
| 23 · Integral applications and initial conditions | 20, 19 | 10 |
| 24 · Differentials and linear approximation | 10 | 10 |
| 25 · Taylor polynomials and second-order approximation | 24, 09 | 10 |
| 26 · Newton's root-finding method | 24, 10 | 10 |
| 27 · Newton optimization and result checks | 26, 13, 25 | 10 |

Every question has four options and one correct answer. Questions mix concepts, calculations, and applications, with explanations after submission. Any required numerical approximation is specified in the question.
