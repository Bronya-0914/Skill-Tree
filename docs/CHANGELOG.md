<a id="top"></a>

# 變更紀錄 · CHANGELOG

> **狀態**：`current` — 依本機 Git 歷史與唯讀勘查報告編寫，對應本機 HEAD `8d7b4cb`（2026-11-16）。
> **語言切換**：[繁體中文（本頁）](#top) ｜ [English](CHANGELOG.en.md)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **本機推送狀態**：無 remote、未 push、無 release tag（見[第 2 節](#2-版本與標記)）。線上 GitHub Pages 為較舊版本，非本機 HEAD。
> **文件性質**：變更歷史；所有「驗證數值」皆為**量測當日、對應 commit** 的紀錄，現況以 [`ARCHITECTURE.md`](ARCHITECTURE.md) 與根目錄 [`README.md`](../README.md) 為準。

---

## 目錄

- [1. 資料來源與範圍](#1-資料來源與範圍)
- [2. 版本與標記](#2-版本與標記)
- [3. R0–R8 與提交對照](#3-r0r8-與提交對照)
- [4. 逐項變更（時間軸，17 個 commit）](#4-逐項變更時間軸17-個-commit)
  - [4.1 階段一：初始、托管與玻璃主題（2026-11-09）](#41-階段一初始托管與玻璃主題2026-11-09)
  - [4.2 階段二：全螢幕工作台、連線與 A+ 補強（2026-11-10）](#42-階段二全螢幕工作台連線與-a-補強2026-11-10)
  - [4.3 階段三：書籍參考與教材改寫（2026-11-12 至 2026-11-15）](#43-階段三書籍參考與教材改寫2026-11-12-至-2026-11-15)
  - [4.4 階段四：現況定型（2026-11-16）](#44-階段四現況定型2026-11-16)
- [5. 最後一筆 `8d7b4cb`](#5-最後一筆-8d7b4cb)
- [6. 部署與推送狀態](#6-部署與推送狀態)
- [7. 累積驗證數值對照（舊記載 → 現況）](#7-累積驗證數值對照舊記載--現況)
- [8. 已知限制彙總](#8-已知限制彙總)

---

## 1. 資料來源與範圍

本文件依下列唯讀來源編寫，未執行任何建置指令、未修改程式／JSON／ZIP、未設定 remote、未 push：

```
cd "<repo-root>"
git log --oneline --reverse --date=short --pretty=format:'%h %ad %s'
```

取得結果為 **17 個 commit**，由 `b56ed7b`（2026-11-09）至 `8d7b4cb`（2026-11-16），分支 `main`。其餘事實（驗證數值、檔案職責、限制）取自唯讀勘查報告與三份歷史文件（`DESIGN-v2.md`、`BOOK-REFERENCE.md`、`MULTIUSER-ARCH.md`）。

> **範圍註記**：老闆提示「從 `e5c9145` 到 `8d7b4cb`」；惟 `git log --reverse` 的最早一筆為 `b56ed7b`（`Update Site source`），`e5c9145` 為第二筆。若由 `e5c9145` 起算僅 16 筆。本文件依 Git 權威結果收錄完整 17 筆，不省略首筆，以免變更史出現缺口。此差異已列為回報事項。

本機 Git 狀態（勘查當日）：`git remote -v` 為空、`git config --list` 無 `remote.*`、`git branch --show-current` = `main`、`git status --short` 乾淨、`git ls-files | wc -l` = **105**（代表 `references/` 48 個 txt 全被追蹤）、作者 `Sites <sites@users.noreply.openai.com>`、reflog 僅見本機 commit，無 push／fetch 紀錄。

---

## 2. 版本與標記

| 項目 | 現況 |
|---|---|
| Release tag | **尚未建立 tag**（本機無任何 tag、無 release；不假造版本號）。 |
| 軟體發行版本 | **無**。本專案從未標註語意化版號，本文不臆測任何 `vX.Y.Z`。 |
| `topic.json` 的 `version: 5` | 屬**學習包教材版本**（`learning-packs/cis221-calculus/topic.json`），由 1 → 2 → 3 → 5 遞增；**不是**網站發行版本，兩者不可混淆。 |
| `schemaVersion` | 學習包與各 `localStorage` 狀態鍵為 `1`；`js/i18n-messages.js` 為訊息目錄，無版號。 |
| 第三方函式庫版本 | `PACK_FORMAT.md` 記 `fflate 0.8.3`，惟 `js/vendor/fflate.js` 內**查無版本字串**，無法從檔案核對，故不列為已驗證版本。 |

---

## 3. R0–R8 與提交對照

本專案沿用 R0–R8 研發流程。以下把 17 個 commit 對映至流程階段（一提交可跨多階段，僅標主要歸屬）：

| 階段 | 意義 | 對應 commit |
|---|---|---|
| R0 | 需求與範圍凍結 | `f9ad456`（多使用者方案裁示「先做 A」，見 `MULTIUSER-ARCH.md` §0.1） |
| R1 | 現況查證與風險 | `b56ed7b`、`e5c9145`、`cd2b45a`（書籍來源歸檔）、`f9ad456` |
| R2 | 架構與版面設計 | `5c72b40`、`b92f25c`、`f9ad456`（`MULTIUSER-ARCH.md` A/B/C 設計） |
| R3 | 環境與托管設定 | `e5c9145`（修正 `js/hosting.json` 的 `static.directory`） |
| R4 | 分層實作 | `5c72b40`、`b92f25c`、`289a6bd`、`d7051df`、`bdd4a10`、`ecdf8bc`、`82e7051`、`3261234`、`2ec72f2`、`56786a6` |
| R5 | 三層驗證與缺陷閉環 | `fdac21f`、`f9ad456`、`2b5a01c`、`2ec72f2`、`56786a6`、`8d7b4cb` |
| R6 | 版本與發布 | **未執行**（無 tag、無 push、無授權發布）；線上 Pages 為既有較舊版本 |
| R7 | 產物歸檔與決策紀錄 | `cd2b45a`、`3261234`、`56786a6`、`8d7b4cb`（含 `docs/` 文件） |
| R8 | 真機／真托管驗證 | **未執行**；`static.directory="."` 未於真實托管平台驗證，列為已知限制 |

---

## 4. 逐項變更（時間軸，17 個 commit）

> 下表「驗證數值」欄之數字皆為該輪文件所載之量測當日值；標「—」者表示該提交未附獨立驗收數值，相關量測見同日章節。「已知限制」欄摘錄該輪文件所列限制，現況請見[第 8 節](#8-已知限制彙總)。

### 4.1 階段一：初始、托管與玻璃主題（2026-11-09）

| # | Commit | 日期 | 變更 | 驗證數值（量測當日） | 已知限制 |
|---|---|---|---|---|---|
| 1 | `b56ed7b` | 2026-11-09 | `Update Site source`：建立／更新站台初始來源，為後續所有提交的基準。 | —（初始匯入，無獨立驗收數值） | 尚無 `.gitignore`、`LICENSE`、`package.json`；`references/` 後續被 Git 追蹤的風險自此存在。 |
| 2 | `e5c9145` | 2026-11-09 | `Maintain site: fix hosting static directory and commit current sources`：修正 `js/hosting.json`，把 `static.directory` 定為 `"."`，並提交當時來源。 | 托管設定僅此一檔；`{"project_id":"appgprj_6af1852c8bc88191999e930daeb549ac","static":{"directory":"."}}` | `static.directory="."` 會以整個專案根目錄為靜態根，設計稿、測試、來源教材與 `references/` 有外洩風險；此設定未於真實托管平台驗證（`DESIGN-v2.md` §10.4 自列限制）。 |
| 3 | `5c72b40` | 2026-11-09 | `Restyle site to glass dark/light theme per reference HTML`：依 `index(1).html` 風格來源重寫 `styles.css` 色彩與玻璃質感，建立深／淺主題。 | `DESIGN-v2.md` §2.1 記載此時期檔案大小：`index.html` 8 KB、`styles.css` 23 KB、`app.js` 16 KB、`catalog.js` 131 KB；§2.3 記載「34 個 DOM ID、`760×950` viewBox、`localStorage` 三鍵、5 檔 script 載入順序」 | 只改色彩與質感，版面尺寸、區塊配置、元件形狀沿用舊站；`DESIGN-v2.md` §3.3 列為必須修正之偏差。 |

### 4.2 階段二：全螢幕工作台、連線與 A+ 補強（2026-11-10）

| # | Commit | 日期 | 變更 | 驗證數值（量測當日） | 已知限制 |
|---|---|---|---|---|---|
| 4 | `b92f25c` | 2026-11-10 | `Redesign frontend as full-screen workbench with customizable ignite glow`：全螢幕工作台改成，加入可自訂點亮光效（8 色票＋HSV 色盤）、深淺主題切換、節點卡狀態。 | `DESIGN-v2.md` §10.2 R4 驗收記載「現 44 個含 ID 元素」、`11/11` 資源、`14/14` 測試；§10.2 亦記 `Fit scale=0.596` | 答案仍在前端；無後端、無帳號；`static.directory="."` 未驗證；`DESIGN-v2.md` §10.4。 |
| 5 | `289a6bd` | 2026-11-10 | `Route skill-tree links layer by layer with straight vertical segments`：連線由貝茲曲線改為逐層直線段（S1）。 | `DESIGN-v2.md` §11.4 記載 `43 條／234 段／最長垂直 115px／最長水平 630px` | §11.6：純呈現層改動，未動資料層；走線數值為該輪量測，後續已重構。 |
| 6 | `fdac21f` | 2026-11-10 | `Cross-reference the later routing change from the R4 spec table`：於 R4 規格表補上交叉參照，標明 S1 之後續走線改版。 | —（文件對照更新，無獨立驗收數值） | 屬文件一致性修正；歷史章節日後仍出現 `117 段／31 接點` 過時值，須以檔首對照表判讀。 |
| 7 | `d7051df` | 2026-11-10 | `Center the tree on the visible canvas and align Start with the lesson axis`：置中調整，讓技能樹對齊可視畫布與課程軸。 | `DESIGN-v2.md` §12.4 記載 `Fit scale=0.596`、`12/12` 資源、`14/14` 測試、`M 590 101 V 122.5 H 590 V 144` 首邊 | §12.6：置中公式依賴當時 bounds；`static.directory="."` 未驗證。 |
| 8 | `bdd4a10` | 2026-11-10 | `Route connections layer by layer and add movable resizable lesson panel with scratchpad`：逐層接續走線；加入可拖曳、可縮放的答題框與手寫草稿紙。 | `DESIGN-v2.md` §13.5 記載 `117 段／43 條邊／31 個接點／總水平段 7,213px`；§13.4 提到 `resize:both`、雙擊標題列還原、第三個「草稿紙」分頁 | §13.7：當時採 `resize:both` 與雙擊還原；此三者現已改為 8 方向自訂把手／練習分頁內草稿側欄／單擊開合，見[第 7 節](#7-累積驗證數值對照舊記載--現況)。 |
| 9 | `f9ad456` | 2026-11-10 | `Add multi-user architecture assessment and A-mode persistence verification`：新增 `MULTIUSER-ARCH.md`（A/B/C 評估、R0–R2 設計）與第 9 節 A 模式持久性實測。 | `MULTIUSER-ARCH.md` §9.1：兩個不同 port 之靜態服務、CDP、乾淨設定檔、**11 項檢查**、`BROWSER_ERRORS=0`；§9.4：B 站「六個鍵全部 `null`」 | §8：全程未開通服務、未發布、未產生對外連結；③ 帳號＋雲端同步未動；`117 段連線`、`六／七個鍵` 為過時值。 |
| 10 | `ecdf8bc` | 2026-11-10 | `Persist session state and add export/import backup for A-mode`：A+ 補強。新增 `calculus-tree-session-v1`（`schemaVersion:1`）保存 `selectedId`／`activeTab`／`attempts`；新增 `js/backup-ui.js` 匯出／匯入備份 JSON。 | `DESIGN-v2.md` §14.4、`MULTIUSER-ARCH.md` §9.5：**28 項 CDP＋既有 37 項回歸**、`BROWSER_ERRORS=0`；§9.6 草稿重繪 **961 個非透明像素** | 備份不加密、含草稿筆跡、匯入為覆蓋式；`localStorage` 受同源限制，換網域需手動匯出／匯入。 |
| 11 | `82e7051` | 2026-11-10 | `Clarify glow scope, gate quiz submit on full answers, color feedback red/green`：釐清光效範圍；交卷鈕須答滿才啟用；作答回饋改紅／綠配色。 | `DESIGN-v2.md` §15.4 R5 驗收表；`node --test` 記載 `14/14` | §15.6：仍是純前端批改，答案可被檢視；`static.directory="."` 風險未解。 |

### 4.3 階段三：書籍參考與教材改寫（2026-11-12 至 2026-11-15）

| # | Commit | 日期 | 變更 | 驗證數值（量測當日） | 已知限制 |
|---|---|---|---|---|---|
| 12 | `cd2b45a` | 2026-11-12 | `Archive 3000 Solved Problems in Calculus as project book reference`：建立 `BOOK-REFERENCE.md` 與 `references/3000-solved-problems/`（書目、46 章、版權宣告、OCR 失真說明）。 | 書目：465 頁、文字層 **868,739 字元**、全文 913,123 bytes、46 個分章檔 | 書籍為 Schaum's／McGraw-Hill 1988 版權物，全文僅存本機；`references/` 已被 Git 追蹤且無 `.gitignore`，不得隨靜態站發布（`BOOK-REFERENCE.md` §8）。 |
| 13 | `3261234` | 2026-11-12 | `Rewrite functions lesson as book-based sample and bump pack version`：以書本導向改寫 01 樣板節點 `functions`，並把 `topic.json` 版本由 1 升 2。 | `BOOK-REFERENCE.md` §9：01 樣板 9 個 `content` 區塊、10 題四選一、答案分布 2／2／3／3 | 題庫其餘 260 題本輪保留未換；新中文原文使既有英文 key 失效，需補 `js/i18n-messages.js`。 |
| 14 | `2b5a01c` | 2026-11-12 | `Document sample lesson English catalog fix`：補正樣板節點的英文訊息目錄（`js/i18n-messages.js`）。 | `BOOK-REFERENCE.md` §9：以附加 `Object.assign` 補 **50 個 key**（39 整段＋11 逐行），既有 1,139 個 key 未動；`lang=en` 無漢字殘留、`BROWSER_ERRORS=0` | i18n 以「整段中文原文」為 key，教材文字一改舊 key 即失效；純數學式不翻譯。 |
| 15 | `2ec72f2` | 2026-11-13 | `Line-break formula block, sync catalog keys and tests for v3`：公式區塊改明確 `\n` 分行，同步英文 key 與測試；`topic.json` 版本由 2 升 3。 | `BOOK-REFERENCE.md` §9：公式改 5 行、4 個 `<br>`、`text-align:center`；`tests/topic-packs.test.cjs` 硬編碼版本常數改為 `sample.topic.version + 1`（**14/14 通過**） | 公式採 `white-space:nowrap`＋`overflow-x:auto`，手機字級降至 15px；長公式仍可能需水平捲動。 |
| 16 | `56786a6` | 2026-11-15 | `Rewrite lessons 02-27 from the calculus book and line-break every content box`：改寫其餘 26 節點 `intro`＋`content`，全部方框換行優化；`topic.json` 版本 4 → 5。 | `BOOK-REFERENCE.md` §9.1：補 **559 個 key**，既有 1,272 個未動，「目錄總計 1,830 個 key」；§9.2：27 個 `formula` 共 **116 個 `<br>`**、例題 169 個 `<br>`、中英 27 個公式方框溢位皆為 0；§9.3：**14/14**、靜態資源 12 個腳本、CDP **23 項**、`BROWSER_ERRORS=0` | §9.4：題庫 260 題未換；當時記載 `styles.css`／`js/i18n-messages.js` 仍屬「未提交」、`35 個 DOM ID`、`七個 localStorage 鍵`、`117 段／31 接點`——以上皆為過時值，見[第 7 節](#7-累積驗證數值對照舊記載--現況)。 |

### 4.4 階段四：現況定型（2026-11-16）

| # | Commit | 日期 | 變更 | 驗證數值（量測當日） | 已知限制 |
|---|---|---|---|---|---|
| 17 | `8d7b4cb` | 2026-11-16 | `Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs`：把 i18n、樹狀佈局、點亮特效、工作區與文件一併寫入 Git，形成目前版本。 | **`20/20` 測試通過**（`node --test tests/*.test.cjs`）；`node --check` 對 15 個 JS／CJS 檔全數通過；`git status --short` 乾淨、`git ls-files` = 105。詳[第 5 節](#5-最後一筆-8d7b4cb)。 | 無 remote、未 push、無 tag；線上 Pages 版本較舊；`references/` 仍被追蹤且無 `.gitignore`；無 `LICENSE`。詳[第 8 節](#8-已知限制彙總)。 |

---

## 5. 最後一筆 `8d7b4cb`

此為本機 `main` 的 HEAD，也是「目前版本」：

- **目前版本寫入 Git**：`8d7b4cb Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs`（2026-11-16），作者 `Sites <sites@users.noreply.openai.com>`。
- **20/20 測試**：`node --test tests/*.test.cjs` 結果 `# tests 20 / # pass 20 / # fail 0`（`topic-packs.test.cjs` 14、`tree-layout.test.cjs` 3、`i18n.test.cjs` 3）。多份歷史文件寫「14/14」，那是只有 `topic-packs.test.cjs` 時期的數字。
- **工作樹乾淨**：`git status --short` 無輸出；`styles.css` 與 `js/i18n-messages.js` 皆已納入提交、`git ls-files` 含兩檔（歷史文件 §9.4「仍屬未提交改動」之記載已過時）。
- **現行量測**：13 個靜態資源（1 CSS ＋ 12 JS）、53 個靜態 DOM ID、8 個 `localStorage` 鍵（其中 5 個帶 `schemaVersion:1`）、43 條 `.connection` path、0 個中繼接點、`bounds = 3069 × 1998`、`js/i18n-messages.js` 1,831 個 key、教材 `version: 5`／27 節點／270 題／`passCount: 7`／`minutes: 15`。
- **未做的事**：未執行 `node scripts/build-learning-packs.cjs`（該指令會重寫 `catalog.js` 與 ZIP）、未設 remote、未 push、未建立 tag、未公開發布。

---

## 6. 部署與推送狀態

| 項目 | 狀態 |
|---|---|
| 本機 remote | **無**（`git remote -v` 空、`git config --list` 無 `remote.*`）。 |
| push／fetch | **無任何紀錄**；reflog 僅見本機 commit。 |
| Release tag | **尚未建立 tag**。 |
| 線上展示 | <https://bronya-0914.github.io/Skill-Tree/> 回應 `200`，標題「微積分漫遊 · Calculus Skill Tree」；13 個資源路徑與本機逐項相同。 |
| 線上與本機差異 | 線上 `topic.json` 為 `version: 1`（本機 5）；線上 `catalog.js` 首節點僅 6 個 content 區塊（本機 11）；`app.js`／`styles.css`／`catalog.js` 之 SHA-256 與本機皆不同；線上 `app.js` 459 行採**雙擊開合**，本機 435 行採**單擊開合**。 |
| 線上歷史文件 | `README.md`、`js/hosting.json` → `200`；`DESIGN-v2.md`、`BOOK-REFERENCE.md`、`references/3000-solved-problems/*` → `404`（書籍全文未公開）。 |
| 儲存庫 | <https://github.com/Bronya-0914/Skill-Tree>；本機未與之建立 remote 關聯。 |

---

## 7. 累積驗證數值對照（舊記載 → 現況）

歷史文件（`DESIGN-v2.md` §10–16、`BOOK-REFERENCE.md` §9、`MULTIUSER-ARCH.md` §9）保留大量量測當日數值。下表為**舊記載 → 現況**對照，現況以 HEAD `8d7b4cb` 為準；完整對照亦見三份歷史文件檔首之「現況對照表」。

| 項目 | 舊記載（量測當日） | 現況（`8d7b4cb`） |
|---|---|---|
| 單元測試 | `14/14` | **20/20** |
| 靜態資源 | `11/11`、`12/12`、`13/13` | **13 個靜態資源**（1 CSS ＋ 12 JS） |
| DOM ID | 34／35／44 | **53** |
| `localStorage` 鍵 | 3／6／7 鍵 | **8 鍵**（其中 5 個帶 `schemaVersion:1`） |
| 連線 | 117 段／31 中繼接點 | **43 條 `.connection` path、0 relay** |
| 答題框互動 | `resize:both`／雙擊還原／第三個「草稿紙」分頁 | **8 方向自訂把手**／練習分頁內草稿側欄／**單擊開合** |
| `topic.version` | 1 → 2 → 3 | **1 → 2 → 3 → 5** |
| i18n 目錄 | 1,830 keys | **1,831 keys** |
| Fit 比例 | `Fit scale=0.596` | 現行 `bounds = 3069 × 1998`（`minX:40`、`maxX:3045`、`maxY:1974`） |
| 部署 | 「未發布、未部署、未對外分享」 | **GitHub Pages 已 200，但版本較舊** |
| 未提交改動 | 「`styles.css`／`js/i18n-messages.js` 未提交」 | **HEAD `8d7b4cb` 已提交、工作樹乾淨** |
| `fflate` | `0.8.3`（`PACK_FORMAT.md`） | **檔案內查無版本字串**，無法核對 |

---

## 8. 已知限制彙總

1. **答案在前端**：`learning-packs/catalog.js` 有 270 個 `answer` 欄位，`nodes/*.json` 與 ZIP 同源；`renderQuiz()` 直接比對 `question[2]`。全專案無 `fetch(`／`XMLHttpRequest`／`/api/`／後端服務命中，**無伺服端批改**。本專案不是安全邊界，不可用於保密考試，詳 [`SECURITY.md`](SECURITY.md)。
2. **同源限制**：所有狀態存於瀏覽器 `localStorage`；換網址／網域／瀏覽器／裝置／無痕／清除資料即全部重來，僅能靠「資料備份」手動匯出匯入。備份 JSON 不加密、含草稿筆跡、匯入為覆蓋式。
3. **版權資料不得公開**：`references/` 的 Schaum's／McGraw-Hill 1988 OCR 書籍全文已被 Git 追蹤（48 個 txt），且 `static.directory="."`、無 `.gitignore`；線上目前為 `404`，但本機設定並未保證排除，推送或打包發布時極易外洩。
4. **無 LICENSE**：專案本身無授權條款，僅第三方 `js/vendor/fflate-LICENSE.txt`（MIT）。
5. **部署不一致**：GitHub Pages 可存取但版本較舊（教材 v1 vs v5、雙擊 vs 單擊）；文件多處「未發布」記載已過時。
6. **未驗證項目（R8）**：`static.directory="."` 未於真實托管平台驗證；真機觸控、跨裝置同步、大量節點效能皆未實測。
7. **隱性耦合**：`BACKUP_KEYS` 與 `FALLBACK_KEYS` 兩份重複定義；`app.js` 與 `pack-ui.js` 共用全域 `map`／`viewport`；`SkillTreeLayout.build()` 會就地改寫傳入節點的 `x/y`；`i18n-messages.js` 需精確中文字串 key。
8. **本機限制**：無 remote、未 push、無 tag、無 `package.json`／`CNAME`／`.nojekyll`／GitHub Actions workflow；Node 僅用於建置與測試。

---

[↑ 回到頂部 · Back to top](#top)
