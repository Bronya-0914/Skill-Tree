<a id="top"></a>

# 文件導覽 · Documentation Index

> **狀態**：`current` — 本頁為「微積分漫遊 · Calculus Skill Tree」文件集的總索引，隨文件集同步維護。
> **語言切換**：[繁體中文（本頁）](#top) ｜ [English](#english-navigation) — 本頁採「繁中＋English 對照表」雙語並列，單一檔案內含兩種語言，不另設 `.en.md`。
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **對應本機 HEAD**：`8d7b4cb`（2026-11-16）。本機 Git 無 remote、未 push；線上 GitHub Pages 為較舊版本，詳 [`CHANGELOG.md`](CHANGELOG.md)。
> **維護狀態**：本頁隨專案內 22 份 Markdown 文件同步維護；所有列出的檔案均已落地於本機，無「規劃中」或外部待搬項目。

---

## 目錄 · Contents

- [1. 如何使用本索引](#1-如何使用本索引)
- [2. 完整文件導覽表](#2-完整文件導覽表)
  - [2.1 入門](#21-入門--getting-started)
  - [2.2 格式與教材](#22-格式與教材--format--courseware)
  - [2.3 設計與架構](#23-設計與架構--design--architecture)
  - [2.4 歷史與評估](#24-歷史與評估--history--evaluation)
  - [2.5 社群與稽核](#25-社群與稽核--community--audit)
- [3. 狀態定義](#3-狀態定義--status-definitions)
- [4. 線上展示與本機差異](#4-線上展示與本機差異)
- [5. English Navigation](#english-navigation)
- [6. 文件撰寫約定](#6-文件撰寫約定)

---

## 1. 如何使用本索引

本專案為零建置、純前端的靜態網站，文件分散於專案根目錄、`learning-packs/` 與 `docs/`。本索引把全部 Markdown 文件按用途分為五類，並以**單一對照表同時列出中文檔、英文檔、用途（繁中）、Purpose (English) 與狀態**，方便中英讀者在同一列取得完整資訊。

閱讀建議：

1. 初次接觸請先讀使用入門 [`README.md`](../README.md)（或 [`README.en.md`](../README.en.md)）。
2. 欲了解現行技術架構，以 [`ARCHITECTURE.md`](ARCHITECTURE.md) 與根目錄 `README.md` 為準；`DESIGN-v2.md`、`MULTIUSER-ARCH.md`、`BOOK-REFERENCE.md` 為**歷史紀錄，非現況規格**，其數值僅代表量測當日。
3. 欲改教材或前端，先讀 [`CONTRIBUTING.md`](CONTRIBUTING.md)；發布或分享前必讀 [`SECURITY.md`](SECURITY.md)。
4. 欲查文件增刪與盤點決策，見 [`MD-AUDIT.md`](MD-AUDIT.md)；欲查逐次提交與驗證數值，見 [`CHANGELOG.md`](CHANGELOG.md)。

---

## 2. 完整文件導覽表

> 狀態代碼：`current`＝現行有效；`historical`＝歷史紀錄／評估，數值不代表現況；`local-only`＝僅存本機、不得隨靜態站公開。詳[第 3 節](#3-狀態定義--status-definitions)。

### 2.1 入門 · Getting Started

| 分類 | 中文檔 | English 檔 | 用途（繁中） | Purpose (English) | 狀態 |
|---|---|---|---|---|---|
| 入門 | [`README.md`](../README.md) | [`README.en.md`](../README.en.md) | 使用入門、五步驟操作、新增他科學習包、資料備份、維護指令與文件入口 | Project overview, quick start, adding learning packs, backup, maintenance commands | `current` |
| 入門 | [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) | [`docs/ARCHITECTURE.en.md`](ARCHITECTURE.en.md) | 現行技術架構：12 支 JS 載入順序、13 個靜態資源、53 個 DOM ID、8 個 `localStorage` 鍵、`schemaVersion`、驗證與限制 | Current architecture: load order, static assets, DOM IDs, storage keys, validation, constraints | `current` |
| 入門 | [`docs/README.md`](README.md)（本頁） | —（本頁雙語對照） | 文件總索引、中英對照導覽表、狀態定義與線上連結 | Documentation hub with bilingual navigation table, status definitions, live links | `current` |

### 2.2 格式與教材 · Format & Courseware

| 分類 | 中文檔 | English 檔 | 用途（繁中） | Purpose (English) | 狀態 |
|---|---|---|---|---|---|
| 格式 | [`PACK_FORMAT.md`](../PACK_FORMAT.md) | [`PACK_FORMAT.en.md`](../PACK_FORMAT.en.md) | 學習包格式 v1：`topic.json`／node 欄位、ZIP 限制、版本合併與接入點 | Learning-pack format v1: schema, ZIP limits, version merge, attachment points | `current` |
| 教材 | [`AI_TEACHING_GUIDE.md`](../AI_TEACHING_GUIDE.md) | [`AI_TEACHING_GUIDE.en.md`](../AI_TEACHING_GUIDE.en.md) | 給接手 AI 的教材製作指南：八個階段、課數決策、來源索引、雙語交付 | Guide for authoring courseware with an AI: eight stages, lesson count, sources, bilingual delivery | `current` |
| 教材 | [`I18N.md`](../I18N.md) | —（同檔雙語對照） | 語言切換維護：`skill-tree-language`、訊息目錄、`english()` 機制、測試方式 | i18n maintenance: language switch, message catalogue, translation engine, tests | `current` |
| 教材 | [`learning-packs/cis221-calculus/README.md`](../learning-packs/cis221-calculus/README.md) | [`learning-packs/cis221-calculus/README.en.md`](../learning-packs/cis221-calculus/README.en.md) | 27 課清單、前置節點、檔案結構與改題流程 | 27-lesson list, prerequisites, file layout, question-edit workflow | `current` |

### 2.3 設計與架構 · Design & Architecture

| 分類 | 中文檔 | English 檔 | 用途（繁中） | Purpose (English) | 狀態 |
|---|---|---|---|---|---|
| 設計 | [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) | [`docs/ARCHITECTURE.en.md`](ARCHITECTURE.en.md) | 現況規格的唯一技術來源（與入門類重複列出，便於查閱） | Authoritative current technical reference (cross-listed) | `current` |
| 設計 | [`DESIGN-v2.md`](../DESIGN-v2.md) | — | 前端重新設計與 R4／R5 逐輪驗收歷史（第 0–16 節） | Front-end redesign and per-round R4/R5 acceptance history | `historical` / `local-only` |
| 設計 | [`MULTIUSER-ARCH.md`](../MULTIUSER-ARCH.md) | — | A／B／C 多使用者方案評估、R0–R2 設計、A 模式持久性實測 | Multi-user A/B/C evaluation, R0–R2 design, A-mode persistence measurements | `historical` |

### 2.4 歷史與評估 · History & Evaluation

| 分類 | 中文檔 | English 檔 | 用途（繁中） | Purpose (English) | 狀態 |
|---|---|---|---|---|---|
| 歷史 | [`BOOK-REFERENCE.md`](../BOOK-REFERENCE.md) | — | 書籍來源與版權、46 章清單、27 節點對應、OCR 失真、改寫進度 | Book source & copyright, 46-chapter list, node mapping, OCR artefacts, rewrite log | `historical` / `local-only` |
| 歷史 | [`DESIGN-v2.md`](../DESIGN-v2.md) | — | 設計與驗收歷史（同上，跨類列出） | Design/acceptance history (cross-listed) | `historical` / `local-only` |
| 歷史 | [`MULTIUSER-ARCH.md`](../MULTIUSER-ARCH.md) | — | 架構評估與決策紀錄（同上，跨類列出） | Architecture evaluation & decision log (cross-listed) | `historical` |
| 歷史 | [`docs/CHANGELOG.md`](CHANGELOG.md) | [`docs/CHANGELOG.en.md`](CHANGELOG.en.md) | 依 R0–R8／時間軸整理 17 個 commit、變更、驗證數值與已知限制 | 17 commits by R0–R8/timeline with changes, verification figures, known limitations | `current` |

### 2.5 社群與稽核 · Community & Audit

| 分類 | 中文檔 | English 檔 | 用途（繁中） | Purpose (English) | 狀態 |
|---|---|---|---|---|---|
| 社群 | [`docs/CONTRIBUTING.md`](CONTRIBUTING.md) | [`docs/CONTRIBUTING.en.md`](CONTRIBUTING.en.md) | 開發環境、檔案職責、教材／前端修改 SOP、提交風格、禁止事項、R5 驗證、決策紀錄 | Dev environment, file ownership, edit SOPs, commit style, prohibitions, R5 verification, decision log | `current` |
| 社群 | [`docs/SECURITY.md`](SECURITY.md) | [`docs/SECURITY.en.md`](SECURITY.en.md) | 安全邊界宣告、答案在前端、備份與同源限制、版權資料不得公開、發布前檢查清單 | Security posture, client-side answers, backup/origin limits, copyrighted material, pre-publish checklist | `current` |
| 稽核 | [`docs/MD-AUDIT.md`](MD-AUDIT.md) | —（同檔含 English Summary） | MD 檔盤點與分類稽核：8 個專案內 MD、35 個專案外 MD、保留決策與風險 | Markdown inventory & classification audit: 8 in-project, 35 out-of-project, retention decision, risks | `current` |
| 社群 | [`docs/CHANGELOG.md`](CHANGELOG.md) | [`docs/CHANGELOG.en.md`](CHANGELOG.en.md) | 變更歷史（同上，跨類列出） | Change history (cross-listed) | `current` |

> 註：本專案另含 `js/vendor/fflate-LICENSE.txt`（MIT，第三方授權），屬純文字授權檔、非導覽文件；專案本身**無 LICENSE**，見 [`SECURITY.md`](SECURITY.md)。

---

## 3. 狀態定義 · Status Definitions

| 狀態 | 繁中說明 | English description |
|---|---|---|
| `current` | 現行有效，反映本機 HEAD `8d7b4cb` 的實際狀態；可作為作業依據。 | Current and authoritative for local HEAD `8d7b4cb`; safe to act upon. |
| `historical` | 歷史紀錄或方案評估；當中的驗收數值、DOM 數、連線數、資源數等僅代表量測當日與對應 commit，**不得引用為現況**。 | Historical record or evaluation; all figures are measurement-day values tied to a specific commit and must not be quoted as current. |
| `local-only` | 僅存本機、含版權或內部資料，若 `js/hosting.json` 維持 `static.directory="."` 則不得隨靜態站發布。 | Local-only; contains copyrighted or internal material and must not be published while `static.directory="."` remains in effect. |

三份歷史文件（`BOOK-REFERENCE.md`、`DESIGN-v2.md`、`MULTIUSER-ARCH.md`）皆已於檔首插入「文件狀態與現況對照」區塊，明確標示舊記載與現況的差異，並指向本索引與 `docs/ARCHITECTURE.md`。

---

## 4. 線上展示與本機差異

| 項目 | 本機（`8d7b4cb`） | 線上 GitHub Pages |
|---|---|---|
| 存取 | 本機 Git 工作樹；文件基準 HEAD `8d7b4cb` 時 `git status` 乾淨，本批文件整併後有未提交變更 | <https://bronya-0914.github.io/Skill-Tree/> 回應 `200` |
| 教材版本 | `topic.json` `version: 5` | `version: 1`（較舊） |
| 開合互動 | 單擊開合（`app.js` 435 行） | 雙擊開合（`app.js` 459 行） |
| 歷史文件 | 本機可讀 | `DESIGN-v2.md`、`BOOK-REFERENCE.md`、`references/*` 回應 `404` |
| 推送狀態 | 無 remote、無 push／fetch 紀錄 | 版本較舊，非本機 HEAD |

儲存庫：<https://github.com/Bronya-0914/Skill-Tree>。本機未設定 remote，亦未執行 push；線上與本機不一致屬既有狀態，詳 [`CHANGELOG.md`](CHANGELOG.md) 與 [`SECURITY.md`](SECURITY.md)。

---

<a id="english-navigation"></a>

## 5. English Navigation

> **Status**: `current`. **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>. **Local HEAD**: `8d7b4cb` (no remote, not pushed; the Pages build is older).

This page is the documentation hub for *微積分漫遊 · Calculus Skill Tree*, a zero-build, purely client-side static site. Section 2 above is a single bilingual table: every row lists the Chinese file, the English counterpart, a Traditional-Chinese purpose note, an English purpose note, and a status code. All listed files are present in the local repository; there are no planned placeholders.

Reading order:

1. Start with [`README.md`](../README.md) / [`README.en.md`](../README.en.md) for usage.
2. For the **current** technical picture rely on [`ARCHITECTURE.md`](ARCHITECTURE.md) and the root `README.md`. `DESIGN-v2.md`, `MULTIUSER-ARCH.md` and `BOOK-REFERENCE.md` are `historical`: their figures are measurement-day snapshots, not current specifications.
3. Before editing anything read [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md); before publishing or sharing read [`SECURITY.en.md`](SECURITY.en.md).
4. [`MD-AUDIT.md`](MD-AUDIT.md) records the Markdown inventory decision; [`CHANGELOG.en.md`](CHANGELOG.en.md) records all 17 commits.

Status codes: `current` (authoritative for HEAD), `historical` (do not quote figures as current), `local-only` (must not be published while `static.directory="."`).

---

## 6. 文件撰寫約定

- 中文一律使用**書面繁體中文（香港用字）**，英文使用技術英文；兩者皆**不使用表情符號**。
- 成對文件以 `檔名.md`／`檔名.en.md` 命名，並互設語言切換連結；單檔雙語者（本頁、`I18N.md`、`MD-AUDIT.md`）以兩節對照呈現。
- 每份文件須具備：標題區、狀態、目錄、語言切換或雙語對照、`back-to-top`，以及線上展示與儲存庫兩個網址。
- 歷史文件的數值須標註量測日期與對應 commit；現況以 `docs/ARCHITECTURE.md` 與根目錄 `README.md` 為準。
- 完整規範見 [`CONTRIBUTING.md`](CONTRIBUTING.md)「文件雙語規則」一節。

---

[↑ 回到頂部 · Back to top](#top)
