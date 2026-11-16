<a id="top"></a>

# 貢獻指南 · CONTRIBUTING

> **狀態**：`current` — 本頁為修改本專案程式、教材與文件的標準作業程序，對應本機 HEAD `8d7b4cb`（2026-11-16）。
> **語言切換**：[繁體中文（本頁）](#top) ｜ [English](CONTRIBUTING.en.md)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **適用範圍**：本機 `main` 工作樹；本機無 remote、未 push、無 release tag。線上 GitHub Pages 為較舊版本，詳 [`CHANGELOG.md`](CHANGELOG.md)。
> **文件性質**：現行作業規範，非歷史紀錄。

---

## 目錄

- [1. 開發環境](#1-開發環境)
- [2. 檔案職責一覽](#2-檔案職責一覽)
- [3. 修改教材 SOP](#3-修改教材-sop)
- [4. 修改前端 SOP](#4-修改前端-sop)
- [5. 提交訊息風格](#5-提交訊息風格)
- [6. 禁止事項](#6-禁止事項)
- [7. 缺陷紀律](#7-缺陷紀律)
- [8. R5 三層驗證](#8-r5-三層驗證)
- [9. 決策紀錄寫法](#9-決策紀錄寫法)
- [10. 文件雙語規則](#10-文件雙語規則)
- [11. 發布前檢查清單](#11-發布前檢查清單)

---

## 1. 開發環境

本專案是**零建置、純前端靜態站**：直接用瀏覽器開啟 `index.html` 即可運行，沒有 `package.json`、沒有 bundler、沒有 npm 依賴安裝步驟。

| 項目 | 說明 |
|---|---|
| 執行網站 | 瀏覽器直接開啟根目錄 `index.html`；或本機靜態 HTTP 服務（不同 port 等同不同 origin，`localStorage` 不相通）。 |
| Node.js | **只用於建置與測試**，不參與網站執行環境。勘查當日為 Node v22.x；`node --check`、`node --test` 皆可用。 |
| 套件管理 | **無**。不新增 `package.json`、不引入 npm／bundler。第三方 ZIP 函式庫以 `js/vendor/fflate.js`（UMD 壓縮版）隨檔提供，授權見 `js/vendor/fflate-LICENSE.txt`（MIT）。 |
| 建置指令 | `node scripts/build-learning-packs.cjs`——**唯一**會改寫 `learning-packs/catalog.js` 與 `learning-packs/cis221-calculus.zip` 的指令。 |
| 測試指令 | `node --test tests/*.test.cjs`（現況 **20/20**）；`node --check` 對所有 `.js`／`.cjs` 做語法檢查。 |
| 版本控制 | 本機 Git，分支 `main`，作者 `Sites <sites@users.noreply.openai.com>`；`git status --short` 應維持乾淨。 |
| 語言／用字 | 文件中文用**書面繁體中文（香港用字）**，英文用技術英文；兩者皆不用表情符號。 |

> 提醒：`scripts/build-learning-packs.cjs` 會重寫建置產物，執行前請確認已備份或已提交；本文件之撰寫過程**未執行**該指令。

---

## 2. 檔案職責一覽

| 路徑 | 職責 | 可否手改 |
|---|---|---|
| `index.html` | 網站唯一入口；53 個靜態 DOM ID、13 個靜態資源載入順序、深淺主題 inline script | 可（改前端時） |
| `app.js` | 狀態機、DOM 模板、縮放平移、連線繪製、答題批改、進度計算 | 可 |
| `styles.css` | 視覺層、主題變數、玻璃質感、答題框與手機 bottom sheet | 可 |
| `js/topic-packs.js` | 純資料層：格式驗證、拓樸排序、座標、版本合併、ZIP 讀寫／CRC32 | 可 |
| `js/pack-ui.js` | 學習包匯入預覽 UI、圖書館匯出、主題跳轉 | 可 |
| `js/workspace.js` | 可拖曳、8 方向縮放的答題框；canvas 手寫草稿紙 | 可 |
| `js/backup-ui.js` | 純前端備份匯出／匯入 | 可 |
| `js/glow-settings.js` | 光效換色、HSV 色盤、跨分頁同步 | 可 |
| `js/i18n.js` | 語言切換引擎（就地翻譯文字節點，不重建 DOM） | 可 |
| `js/i18n-messages.js` | 英文訊息目錄（`window.SkillTreeEnglish`），現況 **1,831 個 key** | 可（補 key） |
| `js/tree-layout.js` | 技能樹連線幾何、28 列固定 `preview` 座標、`bounds` | 可 |
| `js/unlock-effects.js` | 點亮粒子特效 | 可 |
| `js/vendor/fflate.js` | 第三方 ZIP 函式庫（單行 minified） | **不可**（第三方檔） |
| `js/hosting.json` | 托管設定，`static.directory="."` | 需老闆同意才可改 |
| `learning-packs/cis221-calculus/topic.json` | 教材主題設定（`schemaVersion:1`、`version:5`、`attachTo:start`） | 可（改教材時升版本） |
| `learning-packs/cis221-calculus/nodes/*.json` | 27 個節點來源（**唯一教材來源**） | 可 |
| `learning-packs/cis221-calculus/README.md` | 27 課清單 | 課程索引與改題流程 |
| `learning-packs/catalog.js` | **建置產物**：`const LEARNING_PACKS = [...]` | **不可手改** |
| `learning-packs/cis221-calculus.zip` | **建置產物**：29 個項目 | **不可手改** |
| `scripts/build-learning-packs.cjs` | 產生上述兩項建置產物 | 可（謹慎） |
| `tests/*.test.cjs` | 3 個測試檔、共 20 個測試 | 可 |
| `references/3000-solved-problems/*` | OCR 書籍全文（Schaum's／McGraw-Hill 1988），版權物 | **不可公開、不可改** |
| `README.md`、`README.en.md`、`PACK_FORMAT*`、`AI_TEACHING_GUIDE*`、`I18N.md` | 使用／格式／教材／語言文件 | 見導覽表 |
| `docs/*` | 文件導覽、變更紀錄、貢獻、安全、稽核、架構 | 依本指南維護 |

---

## 3. 修改教材 SOP

教材的**唯一來源**是 `learning-packs/cis221-calculus/` 下的 `topic.json` 與 `nodes/*.json`；`catalog.js` 與 ZIP 永遠是建置產物。

1. **確認範圍**：改 `intro`／`content[]`（概念與例題）或 `questions[]`（練習題）。兩者英文目錄的維護方式不同，見第 5 步。
2. **編輯來源 JSON**：只改 `nodes/*.json`；遵守 `js/topic-packs.js` 的驗證上限（`schemaVersion===1`、`id` 以 `<topic.id>.` 開頭、`title` ≤60、`content` 1–60 段、每段 `text` ≤6,000、`questions` 1–20 題、每題 2–6 選項、`passCount` 1…題數等）。公式區塊用明確 `\n` 分行，勿讓瀏覽器自動折行。
3. **升 `topic.version`**：`topic.json` 的 `version` 必須**遞增**（現況為 `5`）。`prepare()` 會拒絕「內容有變更卻未提高版本」的教材；舊版亦會被拒。版本 1 → 2 → 3 → 5 的演進見 [`CHANGELOG.md`](CHANGELOG.md)。
4. **跑 build**：`node scripts/build-learning-packs.cjs`。此指令會掃描主題目錄、驗證、依 `localeCompare(...,'zh-Hant',{numeric:true})` 排序節點、以 `zipSync(...,{level:6})` 產生 ZIP 並立即 `readZip()` 自我驗證，最後重寫 `catalog.js` 與 ZIP。**切勿手改這兩個產物**。
5. **跑測試**：`node --test tests/*.test.cjs`，確認 **20/20** 通過；另對改動檔跑 `node --check`。`topic-packs.test.cjs` 會逐檔比對 `catalog.js`、ZIP 與 27 個來源 JSON 完全一致。
6. **補 i18n**：`js/i18n.js` 以**整段中文原文當 key** 查 `window.SkillTreeEnglish`，查不到就保留中文；`content` 的 `\n` 會被轉成 `<br>`，每一行成為獨立文字節點。故更動中文後舊 key 全數失效，須在 `js/i18n-messages.js` 以附加 `Object.assign(window.SkillTreeEnglish, {...})` 區塊補上**整段＋逐行** key（現況目錄 1,831 個 key、46 個參數化 templates）。驗證 `lang=en` 時概念分頁、題目、選項、批改解析皆無漢字殘留。
7. **R5 驗證**：依[第 8 節](#8-r5-三層驗證)跑靜態分析、逐屏實測與缺陷閉環；中英公式方框溢位須為 0、`BROWSER_ERRORS=0`。
8. **提交**：依[第 5 節](#5-提交訊息風格)寫訊息；確認 `git status --short` 乾淨。

---

## 4. 修改前端 SOP

1. **先讀現況規格**：以 [`ARCHITECTURE.md`](ARCHITECTURE.md) 與根目錄 `README.md` 為準；`DESIGN-v2.md`／`MULTIUSER-ARCH.md`／`BOOK-REFERENCE.md` 為歷史紀錄，其數值不代表現況。
2. **辨識改動層**：資料層（`js/topic-packs.js`）→ 呈現層（`js/tree-layout.js`、`app.js` 的 `renderTree()`）→ 互動層（`app.js`、`js/workspace.js`）→ 功能層（`js/pack-ui.js`、`js/backup-ui.js`、`js/glow-settings.js`、`js/i18n*.js`）。分層可獨立驗證。
3. **注意隱性耦合**：`app.js` 與 `pack-ui.js` 共用全域 `map`／`viewport`；`SkillTreeLayout.build()` 會**就地改寫**傳入節點的 `x/y`；`BACKUP_KEYS`（`app.js`）與 `FALLBACK_KEYS`（`js/backup-ui.js`）為兩份重複定義，增減 `localStorage` 鍵時必須同步（現況 8 鍵）。
4. **語法與測試**：對所有改動 `.js` 跑 `node --check`；跑 `node --test tests/*.test.cjs`（20/20）。
5. **逐屏實測**：以 CDP／瀏覽器驗證桌機與手機（390px）、深淺主題、中英切換、單擊開合、點亮特效、答題框拖曳與 8 方向縮放、草稿紙、備份匯出入；記錄 `BROWSER_ERRORS=0`。
6. **文件同步**：若改動影響 DOM ID、資源數、`localStorage` 鍵、連線數、bounds 或 i18n key 數，須同步更新 `docs/ARCHITECTURE.md` 與相關文件，並在歷史文件檔首對照表補註（歷史文件本文不改）。

---

## 5. 提交訊息風格

依本機 17 個 commit 的既有慣例：

| 規則 | 說明 |
|---|---|
| 語言 | **英文**、單行。 |
| 語氣 | 動詞開頭或名詞短語、首字母大寫、**不加句點**、不用表情符號。 |
| 長度 | 精簡，約 50–72 字元內；必要時以 `:` 帶出範圍，例如 `Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs`。 |
| 內容 | 描述「做了什麼」，可帶版本／範圍關鍵字；不寫空白訊息、不寫「WIP」混入正式歷史。 |
| 對照實例 | `Update Site source`、`Restyle site to glass dark/light theme per reference HTML`、`Rewrite lessons 02-27 from the calculus book and line-break every content box`、`Checkpoint current site: ...`。 |
| 邊界 | 本機**不設 remote、不 push**；提交僅寫入本機 Git。未經老闆明確同意不得對外發布。 |

---

## 6. 禁止事項

以下為硬性邊界，違者視為破壞專案：

1. **不手改 `learning-packs/catalog.js` 與 `learning-packs/cis221-calculus.zip`**：兩者為 `scripts/build-learning-packs.cjs` 的建置產物，一律由來源 JSON 重建。
2. **不公開 `references/`**：內含 Schaum's Outline Series／Elliot Mendelson／McGraw-Hill 1988 之 OCR 書籍全文，屬版權物；已被 Git 追蹤且無 `.gitignore`，發布或打包時極易外洩。詳 [`SECURITY.md`](SECURITY.md)。
3. **不刪除 `.git/`**：本機 Git 歷史（17 個 commit）是唯一版本依據；不得 `rm -rf .git`、不得 `git reset --hard` 覆寫既有提交。
4. **不未經同意發布**：不 push、不設 remote、不建立 release tag、不啟用雲端服務、不產生對外分享連結；發布須老闆另行明確授權。
5. **修改文件須同步維護中英對照與導覽表**：`README.md`／`README.en.md`／`PACK_FORMAT*`／`AI_TEACHING_GUIDE*`／`I18N.md`／`learning-packs` 的 README 皆屬同一文件集。
6. **不改動程式／JSON／ZIP 作為文件整理手段**：文件工作只寫 `.md`；本次邊界內不得改 `app.js`、`styles.css`、`*.json`、`*.zip`。
7. **不搬移／刪除本機專案外的 35 個 MD**：老闆已選「全部保留原處、不刪不搬」，詳 [`MD-AUDIT.md`](MD-AUDIT.md)。
8. **不把 Moodle token、帶 token 的下載網址、原廠教材或個人身份資料寫入 repo**：此為既定的機密紅線，沿用之。

---

## 7. 缺陷紀律

每個缺陷須走完「現象 → 根因 → 修法 → 回歸」閉環，並留下書面紀錄（體例見 `DESIGN-v2.md` 各節之「缺陷閉環」表）：

| 欄位 | 要求 |
|---|---|
| 現象 | 可重現的具體描述（哪個畫面、哪個步驟、哪個數值）。 |
| 根因 | 指向具體檔案與函式，不寫「疑似」「大概」。 |
| 修法 | 說明改了什麼、為何這樣改、有無替代方案被否決。 |
| 回歸 | 明列重跑的指令與結果（`node --check`、`node --test`、逐屏 CDP 項數、`BROWSER_ERRORS`），確認未引入新缺陷。 |

缺陷不得靜默修復後不記錄；驗證失敗不得標記為通過。

---

## 8. R5 三層驗證

沿用專案既有的 R5 定義，三層缺一不可：

| 層 | 內容 | 指令／判準 |
|---|---|---|
| ① 靜態分析 | 語法、單元測試、格式與字串掃描 | `node --check` 對所有 `.js`／`.cjs`；`node --test tests/*.test.cjs` **20/20**；CSS 括號 depth 0／bad 0；`js/i18n-messages.js` 未翻譯字串掃描 0；機密掃描無 token／secret 命中。 |
| ② 執行期逐屏實測 | 以瀏覽器／CDP 逐畫面驗證 | 概念分頁、練習分頁、中英切換、點亮特效、答題框拖曳與縮放、草稿紙、備份匯出入、手機 390px；`docWidth = innerWidth`、公式方框溢位 0、`BROWSER_ERRORS=0`；存證截圖置於不被建置清除的位置。 |
| ③ 缺陷閉環 | 現象→根因→修法→回歸表 | 依[第 7 節](#7-缺陷紀律)；每個「必須先解決」風險皆有解法；回歸結果回寫文件。 |

> 「答案不在前端」在本專案**不成立**（見 [`SECURITY.md`](SECURITY.md)）；若未來改採伺服端批改，須另定義「前端原始碼與網路回應皆看不到答案」的驗證項，現階段不列為通過條件。

---

## 9. 決策紀錄寫法

技術決策須可追溯，體例比照 `DESIGN-v2.md` §0／§9 與 `MULTIUSER-ARCH.md` §4.7：

- **決策表**：逐項列出「決策項 → 明確選項 → 理由 → 影響」，不接受「大概」「之後再說」；範圍外項目明列留待下一版。
- **被否決選項**：以表列出「被否決做法 → 理由」，例如「純前端＋雲端資料庫做答案保密」被否決，因前端必須讀答案才能批改、任何使用者皆可抓取。
- **基準資訊**：每個決策標註日期、基準 commit hash（如 `8d7b4cb`）、工作空間路徑。
- **量測值**：任何數值（DOM ID 數、連線數、測試數、bounds、key 數）皆標註**量測當日與對應 commit**；現況以 `docs/ARCHITECTURE.md` 與 `README.md` 為準。
- **變更控制**：列出「檔案 → 是否要改 → 影響」，並註明哪些文件保留為歷史紀錄不改。

---

## 10. 文件雙語規則

| 規則 | 說明 |
|---|---|
| 成對檔案 | 以 `檔名.md`（繁中）／`檔名.en.md`（English）成對，兩份**互設語言切換連結**；例：[`CONTRIBUTING.md`](CONTRIBUTING.md) ↔ [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md)。 |
| 單檔雙語 | 單一檔案採兩節對照：`docs/README.md` 用「繁中＋English 對照表」，[`MD-AUDIT.md`](MD-AUDIT.md) 含「English Summary」，`I18N.md` 用「## 繁體中文」／「## English」兩節。 |
| 必備元件 | 每份文件皆須有：標題區、狀態（`current`／`historical`／`local-only`）、目錄、語言切換或雙語對照、`back-to-top`。 |
| 必寫網址 | 每份文件皆寫入線上展示 <https://bronya-0914.github.io/Skill-Tree/> 與儲存庫 <https://github.com/Bronya-0914/Skill-Tree>。 |
| 用字 | 中文書面繁體中文（香港用字）；英文技術英文；兩者皆無表情符號。 |
| 歷史文件 | 三份歷史文件（`BOOK-REFERENCE.md`、`DESIGN-v2.md`、`MULTIUSER-ARCH.md`）於檔首插入「文件狀態與現況對照」區塊（語言切換／雙語摘要、網址、性質、HEAD、`<details>` 目錄、現況對照表、使用說明）；**保留原標題與所有原段落**。 |
| 現況來源 | 文件內的現況數值一律以 `docs/ARCHITECTURE.md` 與根目錄 `README.md` 為準，不引用歷史文件的量測值。 |

---

## 11. 發布前檢查清單

> 本專案**目前未獲授權發布**；以下為日後取得明確授權時才執行的檢查，現階段僅供備查。完整風險見 [`SECURITY.md`](SECURITY.md)。

- [ ] 已取得老闆**明確**發布授權（口頭／書面），並確認發布範圍。
- [ ] `references/` 全數排除於靜態根之外（改 `static.directory` 或建立乾淨發布目錄，需另行同意）；確認書籍全文、設計稿、測試不隨站公開。
- [ ] 無 `config.json`、token、密碼、API key、個人身份資料進入 repo。
- [ ] `git status --short` 乾淨；`node --test tests/*.test.cjs` **20/20**；`node --check` 全數通過。
- [ ] 已確認本機與線上版本一致（教材版本、開合互動、`app.js`／`styles.css`／`catalog.js` 雜湊）。
- [ ] 已決定 `LICENSE`（目前無）；第三方 `fflate-LICENSE.txt` 隨附。
- [ ] 已更新 [`CHANGELOG.md`](CHANGELOG.md) 與文件導覽 [`README.md`](README.md) 之狀態。
- [ ] 已於 [`SECURITY.md`](SECURITY.md) 記錄發布組態與回報管道。

---

[↑ 回到頂部 · Back to top](#top)
