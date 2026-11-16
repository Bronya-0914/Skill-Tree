# Skill Tree

[繁體中文](README.md) · English

Learn through a tree of skills: read short explanations, follow worked examples, complete a quiz, and unlock the next lesson. The built-in calculus course has 27 lessons. You can also import learning packs for other subjects.

## Get started

1. Open this folder's `index.html` in your browser. No account or package installation is required.
2. Select Start and use its start button to begin.
3. Select an available lesson, read its concepts and examples, then open the practice quiz. All listed prerequisites must be completed.
4. Use the whiteboard beside the quiz for working. Drag the window's title bar or edges to position and resize it.
5. Pass the quiz to light up the skill and continue. Each built-in calculus lesson has 10 questions and requires 7 correct answers.

Use the Chinese / EN controls to switch the built-in content's language. The sidebar's glow settings change the unlock color.

## Add another subject

The website imports structured learning-pack ZIP files. It does not automatically turn a PDF into a course.

1. Give an AI your source documents and the [AI teaching guide](AI_TEACHING_GUIDE.en.md). Specify the learner's level, goals, language, and any required lesson count.
2. Have it prepare a teaching plan, explanations, examples, questions, and a learning-pack ZIP.
3. Open the website's learning-pack manager and select or drop the ZIP.
4. Review the topic, version, and prerequisites, then confirm the import.

Choose a new subject's lesson count from its learning goals. It does not need 27 lessons. Keep the existing calculus course's 27-step structure unchanged. New subjects normally attach to Start and coexist with existing courses.

Unknown imported text stays in its original language. Supporting the Chinese / English switch also requires website translation-catalog entries; see [Languages](I18N.md).

## Back up your data

Progress, settings, and imported content are stored in the current browser and site origin. They do not automatically sync across devices. Export a backup before switching browsers or URLs, or clearing site data.

- **Export a learning-pack ZIP:** share or back up teaching content, without personal progress.
- **Data backup → Export records:** save personal records. Importing records replaces the current site's records.

## Documentation

| Document | Purpose |
|---|---|
| [AI teaching guide](AI_TEACHING_GUIDE.en.md) | Eight production stages, lesson-count decisions, and content checks |
| [Learning-pack format](PACK_FORMAT.en.md) | JSON fields, ZIP structure, versions, and limits |
| [Calculus course](learning-packs/cis221-calculus/README.en.md) | The 27 lessons and prerequisites |
| [Languages](I18N.md) | Maintaining Chinese and English translations |

## Maintain the course

Edit `learning-packs/<topic>/topic.json` and `nodes/*.json`. Increase the topic's integer `version` when changing existing content, keep node IDs stable, then run from the repository root:

```text
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

`catalog.js` and topic ZIP files are generated assets used by the website. Do not hand-edit or delete them. Add English translations when introducing built-in Chinese content.

`app.js`, `styles.css`, and `js/` contain the website code; `tests/` contains automated checks. Original books and full-text indexes are local references: do not include them in shared packs or public deployments.
