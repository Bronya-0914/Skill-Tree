<a id="top"></a>

# AGENTS.md — 給 AI 的課題生成指引 / AI Course-Generation Guide

> **這份檔案是給 AI 讀的，不是給人讀的簡介。** 若你是被交派「幫使用者在這個網站上建立新課題」的 AI，請由頭到尾照本檔執行。
> **This file is a machine-readable instruction set for AI agents, not a human introduction.** If you have been asked to create a new course for this site, follow it end to end.
>
> **線上展示 / Live demo**：<https://bronya-0914.github.io/Skill-Tree/>
> **儲存庫 / Repository**：<https://github.com/Bronya-0914/Skill-Tree>
> **繁體中文完整流程**：[§A](#a-繁體中文完整流程) · **Full English workflow**: [§B](#b-full-english-workflow) · **機讀規格**: [§C](#c-機讀規格-machine-readable-contract)

---

## 為何存在 · Why this exists

> **兩個頁面**：`index.html` 是「知識星系」總覽，用來看全部課題與已點亮的主題；`tree.html` 是「技能樹」學習頁，讀概念、作答、解鎖都在這裡。兩頁互相連結。

> **Two pages**: `index.html` is the knowledge-galaxy overview showing all subjects and lit topics; `tree.html` is the skill-tree learning page where concepts, answering and unlocking happen. The two pages link to each other.

這個網站把**任意學科資料**轉成一棵可逐步點亮的技能樹。學習的出發點不是「把課上完」，而是**讓進度看得見、讓每一次完成都有成就感**：每解鎖一個節點就點亮一條路徑，下一步永遠清楚。

課題不是內建的。使用者提供資料，AI 生成課題，網站負責呈現。因此你的第一個動作**永遠是提問，不是生成**。

The site turns **any subject material** into an unlockable skill tree. The point is visible progress and a sense of achievement, not covering a fixed syllabus. Courses are not built in: the user supplies material, you generate the course, the site renders it. **Your first action is always to ask, never to generate.**

---

<a id="a-繁體中文完整流程"></a>

## A. 繁體中文完整流程

### 兩條鐵律 · Two hard rules

1. **未取得資料，不得生成。** 使用者還沒給書、講義、筆記、PDF 或主題清單之前，不要輸出任何教材 JSON、不要猜內容、不要拿自己的記憶當資料來源。
2. **未確認答題方式，不得生成題目。** 先問使用者想用什麼方式回答問題，再把答案寫進題目設計；順序不可對調。

### Step 1 — 先問使用者要一份資料（必問）

逐字可用的提問：

> 請先給我一份資料，我才會開始生成課題。可以是：一本書或其中幾章、課堂講義、筆記、PDF、試題、簡報，或一份你希望涵蓋的主題清單。你也可以直接告訴我主題名稱與範圍，但請說明希望以哪份資料為依據。
> 另外請告訴我：這份資料的語言、大約篇幅，以及有沒有特別想強調或跳過的部分。

| 項目 | 說明 |
|---|---|
| 目的 | 取得可追溯的內容依據，避免憑空生成 |
| 可接受答案 | 檔案、連結、貼上的文字、主題清單＋範圍 |
| 若使用者只給主題 | 追問：「有沒有指定教材或參考資料？若沒有，我會依公開知識整理，但會在教材標明這一點。」 |
| 版權 | 取得資料 ≠ 取得公開授權；不要將原文全文放進會發布的檔案 |
| 完成條件 | 你手上確實有一份可引用的資料，或使用者明確同意「無指定資料、依通用知識整理」 |

**未達完成條件就停在這裡**，不要往下走。

### Step 2 — 再問使用者想用什麼方式回答問題（必問）

逐字可用的提問：

> 你希望用什麼方式回答問題？網站支援：① 選擇題（2–6 個選項，交卷立即批改）② 數值輸入題（自己算出答案再輸入，可輸入分數與 `sqrt(2)`、`pi` 等數值式）③ 分步長題（一題拆成數個小問，全部答對才算通過）④ 混合／自訂（請描述你的做法）。
> 另外請告訴我：每節點大概要幾題、要錯幾題仍能通過、有沒有時間限制。

| 偏好 | 生成時怎麼落地 |
|---|---|
| 選擇題 | `prompt`＋`options`（2–6 個）＋`answer` 索引＋`explanation`；干擾項來自典型誤解 |
| 數值輸入題 | `type: 'input'`＋`answers`（1–8 個可接受值）＋`explanation`，必要時加 `tolerance` |
| 分步長題 | `type: 'multipart'`＋`parts`（2–8 個輸入小問）＋`explanation`，適合需要逐步推導的題目 |
| 混合／自訂 | 依節點性質分配三種題型；自訂做法先確認可行性 |

網站目前支援三種題型：**選擇題**（2–6 個選項）、**數值輸入題**（可輸入整數、小數、分數或 `sqrt(2)`、`pi` 等數值式，可設容差）、**分步長題**（一題含 2–8 個小問，全部小問正確才算通過該題），並提供手寫草稿紙。

AI 應依使用者偏好選用對應題型；若想要的是這三種之外的方式（例如口述回答、上傳手寫照片批改），先說明落差，再把偏好落實在題目措辭與解析寫法。不得宣稱網站已具備該功能，也不得虛構不存在的欄位。

### Step 3 — 確認課題輪廓

| 要確認 | 預設（使用者未指定時） |
|---|---|
| 課題名稱與 ID | 由資料主題命名，英文小寫、連字號 |
| 節點數與先修關係 | 由資料章節／知識點切分，形成有向無環圖 |
| 每節點題數 | 10 |
| 通過門檻 | 7 |
| 每節點建議時間 | 15 分鐘 |
| 教材語言 | 跟隨資料語言；雙語需求另外確認翻譯目錄 |

### Step 4 — 生成

依 [`PACK_FORMAT.md`](PACK_FORMAT.md) 產出 `topic.json` 與各節點 JSON，再封裝成學習包 ZIP。詳細八階段見 [`AI_TEACHING_GUIDE.md`](AI_TEACHING_GUIDE.md)。

### Step 5 — 驗證

```bash
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

之後在網站載入 ZIP 實測：節點可見、概念可讀、題目可答、達門檻可解鎖、進度重開仍在。

### Step 6 — 交付

告訴使用者：ZIP 放哪裡、如何從網站「匯入學習包」上傳、如何匯出／匯入進度備份、如何重設進度。勿宣稱已發布上網或已推送 GitHub，除非實際執行並取得授權。

### 檢查清單

- [ ] 已問資料，且取得可引用依據或明確的「無指定資料」同意
- [ ] 已問答題方式，並記錄偏好
- [ ] 已確認課題輪廓（名稱、節點、題數、門檻、時間、語言）
- [ ] 題目設計與答題方式一致，題型欄位符合 `PACK_FORMAT.md`
- [ ] 已依偏好選用三種題型之一；超出範圍的方式已說明落差
- [ ] 已依格式產出並通過 builder 與測試
- [ ] 已網站實測解鎖與進度保存
- [ ] 未虛構資料、未抄錄版權全文、未宣稱未執行的部署

---

<a id="b-full-english-workflow"></a>

## B. Full English workflow

### Two hard rules

1. **No material, no generation.** Do not emit any lesson JSON, do not invent content, and do not use your own memory as the source before the user supplies a book, lecture notes, a PDF, a question set, slides, or a topic outline.
2. **No questions without an answer mode.** Ask how the user wants to answer before designing any quiz item. The order is fixed.

### Step 1 — Ask for source material (required)

> Please give me one source of material before I generate anything: a book or selected chapters, lecture notes, your own notes, a PDF, a question bank, slides, or an outline of the topics you want covered. You may also just name the subject and scope, but please say what the content should be based on.
> Also tell me the language, the approximate size, and anything you want emphasised or skipped.

Stop here until you actually have a citable source, or the user explicitly agrees to "no specific source, organise from general knowledge" — in which case say so inside the generated material. Receiving a file is **not** a license to republish its full text.

### Step 2 — Ask how they want to answer (required)

Verbatim prompt:

> How would you like to answer the questions? The site supports: (1) multiple choice (2–6 options, graded on submit); (2) numeric input, where you work out the value and type it, including fractions and expressions such as `sqrt(2)` or `pi`; (3) multipart questions, where one item has several sub-questions and all must be correct; (4) mixed or custom — describe your approach.
> Also tell me roughly how many questions per node, how many correct answers are needed to pass, and whether there is a time limit.

| Preference | How it lands in the pack |
|---|---|
| Multiple choice | `prompt` + `options` (2–6) + `answer` index + `explanation`; distractors from real misconceptions |
| Numeric input | `type: 'input'` + `answers` (1–8 accepted values) + `explanation`, optional `tolerance` |
| Multipart | `type: 'multipart'` + `parts` (2–8 input sub-questions) + `explanation`; good for stepwise derivations |
| Mixed / custom | Mix the three types by node; confirm feasibility for custom approaches |

The site currently supports three item types: **multiple choice** (2–6 options), **numeric input** (integers, decimals, fractions, or expressions such as `sqrt(2)` and `pi`, with optional tolerance), and **multipart questions** (2–8 sub-questions; all must be correct for the item to count). A handwritten scratchpad is also available.

Choose the item type that matches the user's preference. Only for modes outside these three (for example spoken answers or grading uploaded handwriting) should the AI disclose the gap first, then apply the preference to wording and explanations. Never claim an unimplemented feature or invent fields that do not exist.

### Step 3 — Confirm the course shape

Confirm: course name and ID, node count and prerequisite graph, questions per node (default 10), pass threshold (default 7), minutes per node (default 15), and content language.

### Step 4 — Generate

Produce `topic.json` and node JSON files per [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md), then package them into a learning-pack ZIP. The full eight-stage method is in [`AI_TEACHING_GUIDE.en.md`](AI_TEACHING_GUIDE.en.md).

### Step 5 — Validate

```bash
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

Then load the ZIP on the site and check: nodes visible, concepts readable, questions answerable, unlock on pass, progress retained after reload.

### Step 6 — Hand off

Tell the user where the ZIP is, how to use the site's "import learning pack" control, how to export/import a progress backup, and how to reset progress. Do not claim the site was deployed or changes were pushed unless that actually happened with authorisation.

### Checklist

- [ ] Source material requested and obtained (or explicit "no specific source" agreement)
- [ ] Answer mode requested and recorded
- [ ] Course shape confirmed
- [ ] Question design matches the chosen answer mode
- [ ] Unsupported modes disclosed honestly
- [ ] Builder and tests pass; on-site unlock and persistence verified
- [ ] No invented content, no copyrighted full text, no false deployment claims

---

<a id="c-機讀規格-machine-readable-contract"></a>

## C. 機讀規格 · Machine-readable contract

```yaml
agent_role: course-generator
site: "https://bronya-0914.github.io/Skill-Tree/"
repo: "https://github.com/Bronya-0914/Skill-Tree"
purpose: "visible progress and a sense of achievement through an unlockable skill tree"
content_source: "user-supplied material; no built-in syllabus is assumed"
hard_rules:
  - "do_not_generate_before_source_material"
  - "do_not_design_questions_before_answer_mode"
  - "disclose_unsupported_answer_modes"
  - "no_copyrighted_full_text"
  - "no_false_deployment_claims"
workflow:
  - step: 1
    id: ask_for_source
    required: true
    blocking: true
    ask: "Which book, notes, PDF, question bank, slides, or topic outline should this course be based on?"
    complete_when: "citable source present OR user explicitly approves general-knowledge basis"
  - step: 2
    id: ask_answer_mode
    required: true
    blocking: true
    ask: "How do you want to answer the questions? (multiple choice / numeric input / multipart / mixed / custom)"
    options: [multiple_choice, numeric_input, multipart, mixed, custom]
    complete_when: "preference recorded"
  - step: 3
    id: confirm_shape
    fields: [course_name, topic_id, node_count, prerequisites, questions_per_node, pass_count, minutes, language]
    defaults: {questions_per_node: 10, pass_count: 7, minutes: 15}
  - step: 4
    id: generate
    spec: "PACK_FORMAT.md"
    method: "AI_TEACHING_GUIDE.md"
    outputs: [topic.json, "nodes/*.json", "learning-pack ZIP"]
  - step: 5
    id: validate
    commands: ["node scripts/build-learning-packs.cjs", "node --test tests/*.test.cjs"]
    on_site: [nodes_visible, concepts_readable, quiz_answerable, unlock_on_pass, progress_persists]
  - step: 6
    id: handoff
    tell_user: [zip_location, import_steps, backup_export_import, reset_progress]
spec_files:
  format: PACK_FORMAT.md
  method: AI_TEACHING_GUIDE.md
  i18n: I18N.md
  security: docs/SECURITY.md
  architecture: docs/ARCHITECTURE.md
```

---

**相關文件**：[使用指南](README.md) ｜ [教材生成方法](AI_TEACHING_GUIDE.md) ｜ [學習包格式](PACK_FORMAT.md) ｜ [文件總覽](docs/README.md)

[↑ 回到頂部 · Back to top](#top)
