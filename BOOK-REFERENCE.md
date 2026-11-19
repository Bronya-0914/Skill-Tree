<a id="top"></a>

# 準備資料與版權指引 · Preparing Source Material

> **一句話**：上傳一份資料，長出一棵技能樹 —— 讓進度看得見，讓每次完成都有成就感。
> **如何使用**：[網站使用指南](README.md#how-to-use) · [AI 必問流程](AGENTS.md) · [生成方法](AI_TEACHING_GUIDE.md) · [線上展示](https://bronya-0914.github.io/Skill-Tree/)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/> · **儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **本檔為單檔雙語**：[繁體中文](#繁體中文) ｜ [English](#english)

---

## 繁體中文

### 1. 這份文件的用途

本專案**不附帶、也不假設任何既定教材**。每一棵技能樹都由使用者提供的一份資料長出來。本檔說明：可以交給 AI 什麼、怎麼整理、以及哪些事不能做。

[`AGENTS.md`](AGENTS.md) 把「先問使用者要一本書或資料」訂為阻塞式必問；本檔是那一題的補充說明。

### 2. 可以提供的資料

| 類型 | 適合用於 | 注意 |
|---|---|---|
| 書籍或指定章節 | 建立完整課題 | 只取知識點，不要複製全文 |
| 課堂講義／簡報 | 切分節點、抓重點順序 | 確認是否有使用限制 |
| 自己的筆記 | 個人化課題 | 先整理成可讀條列 |
| PDF／掃描檔 | 公式、例題、題目 | OCR 文字層常失真，須回原頁核對 |
| 題庫／歷屆試題 | 設計練習題 | 留意著作權與使用範圍 |
| 主題清單＋範圍 | 沒有教材時的最小依據 | 必須在教材標明「無指定資料」 |

### 3. 交給 AI 前先整理

1. **說清範圍**：哪幾章、哪些主題、要不要跳過。
2. **說清語言與篇幅**：影響教材語言、節點數與時間設定。
3. **標出重點與易錯處**：讓例題與提示更貼近實際需求。
4. **確認答題方式**：這是 [`AGENTS.md`](AGENTS.md) 的第二個必問；網站支援選擇題、數值輸入題、分步長題，偏好會決定題目型別與解析寫法。
5. **說明可否引用**：若資料不宜公開，明講「僅供本地生成，不得隨專案發布」。

### 4. 版權與私隱底線

- 取得一份資料 **不等於** 取得公開授權。可作為生成依據，不代表可以散布原文。
- **不要把原文全文、掃描頁或 OCR 全文放進會發布的檔案或靜態站台**。用自己的話重寫，只保留知識點、公式與解題方法。
- 個人筆記、成績、身份資料不要放進教材或備份範例。
- 靜態站台若以整個專案根目錄為根，任何放在裡面的參考資料都可能被公開；發布前須排除。
- 詳見 [`docs/SECURITY.md`](docs/SECURITY.md)。

### 5. 品質風險

| 風險 | 處理 |
|---|---|
| OCR 把符號認錯 | 公式與數值一律回原頁核對，不直接抄錄 |
| 章節順序不適合當學習順序 | 按知識點重切，不照章節編號 |
| 資料過大 | 先切出可用範圍，節點數由資料決定，不必硬湊 |
| 內容無法追溯 | 在 `sourceNote` 記錄依據；無指定資料時明確標明 |

### 6. 與生成流程的對應

| 流程 | 本檔對應 |
|---|---|
| [`AGENTS.md`](AGENTS.md) 階段 1 | 本檔第 2、3 節：要什麼、怎麼給 |
| [`AGENTS.md`](AGENTS.md) 階段 2 | 本檔第 3 節第 4 點：答題方式 |
| [`AI_TEACHING_GUIDE.md`](AI_TEACHING_GUIDE.md) 階段 3–5 | 知識點切分、內容與題目設計 |
| [`PACK_FORMAT.md`](PACK_FORMAT.md) | `sourceNote` 與欄位結構 |

---

## English

### 1. Purpose

This project **ships with no course content and assumes none**. Every skill tree grows from one piece of material the user supplies. This guide covers what you can hand to an AI, how to prepare it, and what must not be done.

[`AGENTS.md`](AGENTS.md) makes "ask the user for a book or other material" a blocking first question; this document expands on that question.

### 2. What you can supply

| Type | Good for | Caution |
|---|---|---|
| A book or selected chapters | Building a complete course | Extract knowledge points, do not copy full text |
| Lecture notes / slides | Splitting nodes, ordering topics | Check usage restrictions |
| Your own notes | A personal course | Tidy into readable bullet points first |
| PDF / scans | Formulas, examples, questions | OCR layers are often wrong; verify against the page |
| Question banks / past papers | Designing practice items | Mind copyright and permitted use |
| Topic outline plus scope | Minimal basis when no textbook exists | Must be labelled "no specific source" in the material |

### 3. Prepare before handing it over

1. **State the scope**: which chapters, which topics, what to skip.
2. **State language and size**: affects content language, node count and timing.
3. **Flag emphasis and pitfalls**: makes examples and tips relevant.
4. **State the answer mode**: the second mandatory question in [`AGENTS.md`](AGENTS.md); the site supports multiple choice, numeric input and multipart items, and the preference sets the item type and explanation style.
5. **State reuse permission**: if the material must stay private, say "local generation only, do not publish with the project".

### 4. Copyright and privacy boundaries

- Having a file **is not** a license to publish it. It can be a basis for generation without being redistributable.
- **Do not place full original text, scanned pages or OCR dumps into files that will be published, or into a static site.** Rewrite in your own words, keeping only knowledge points, formulas and methods.
- Keep personal notes, grades and identity data out of course material and example backups.
- If a static site serves the whole project root, any reference material placed there may become public; exclude it before publishing.
- See [`docs/SECURITY.en.md`](docs/SECURITY.en.md).

### 5. Quality risks

| Risk | Handling |
|---|---|
| OCR misreads symbols | Verify formulas and figures against the original page; never copy blindly |
| Chapter order is not learning order | Re-cut by knowledge point, not chapter number |
| Material too large | Narrow the scope first; let node count follow the material |
| Content not traceable | Record the basis in `sourceNote`; state explicitly when no source was specified |

### 6. Mapping to the workflow

| Workflow | Here |
|---|---|
| [`AGENTS.md`](AGENTS.md) stage 1 | Sections 2–3: what to ask for, how to give it |
| [`AGENTS.md`](AGENTS.md) stage 2 | Section 3.4: answer mode |
| [`AI_TEACHING_GUIDE.en.md`](AI_TEACHING_GUIDE.en.md) stages 3–5 | Splitting, content, item design |
| [`PACK_FORMAT.en.md`](PACK_FORMAT.en.md) | `sourceNote` and field structure |

---

**相關文件 / Related**: [AGENTS.md](AGENTS.md) ｜ [使用指南 / User guide](README.md) ｜ [安全邊界 / Security](docs/SECURITY.md) ｜ [文件總覽 / Docs index](docs/README.md)

[↑ 回到頂部 · Back to top](#top)
