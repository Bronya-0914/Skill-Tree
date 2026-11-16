# 前端重新設計 · 設計方案與版面稿 v2

<a id="top"></a>

---

## 文件狀態與現況對照 · Document Status & Current-State Comparison

> **狀態**：`historical` / `local-only` — 本文件為**設計與驗收歷史紀錄，非現況規格**；原始標題與全部 721 行原始段落皆保留，**不逐段改寫**，僅於標題之後附加本對照區塊作清楚警示。
> **語言切換／雙語摘要**：[繁體中文摘要](#zh-summary) ｜ [English Summary](#en-summary) ｜ [文件導覽（繁中＋English）](docs/README.md)。本區塊並列繁中 4 行與 English 4 行摘要；正文為繁體中文，無獨立 `.en.md`。
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **文件性質**：R0–R2 設計產出＋第 10–16 節逐輪 R4／R5 驗收歷史；含大量 CDP 量測值與 `%TEMP%` 存證路徑，屬 `historical` / `local-only`。
> **對應本機 HEAD**：`8d7b4cb`（2026-11-16，分支 `main`）；本文件之基準提交為 `5c72b40`（2026-11-09），兩者不同，請勿混淆。本機無 remote、未 push、無 release tag；線上 GitHub Pages 為較舊版本。
> **現況來源**：[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與根目錄 [`README.md`](README.md)；逐次提交見 [`docs/CHANGELOG.md`](docs/CHANGELOG.md)；安全邊界見 [`docs/SECURITY.md`](docs/SECURITY.md)。

<a id="zh-summary"></a>

### 繁體中文摘要

本文件為「前端重新設計 · 設計方案與版面稿 v2」，記錄 2026-11-09 起之 R0 決策、R1 查證、R2 架構，以及第 10–16 節逐輪 R4 實作與 R5 驗收歷史。
第 10–15 節保留大量量測當日 CDP 數值：117 段／31 中繼接點、`Fit scale=0.596`、11～13/13 資源、14/14 測試、34／35／44 個 DOM ID、六／七個 `localStorage` 鍵、`resize:both`／雙擊還原／第三分頁等，**全部已過時**。
第 16 節（2026-11-15）記錄全站教材改寫與方框換行；本機現況已演進至 43 條 `.connection` path、0 relay、53 IDs、8 鍵、13 資源、20/20、1,831 keys、`version=5`，且 GitHub Pages 已 200（版本較舊）。
本文件保留 721 行原始紀錄供追溯，不逐段改寫；現況以 `docs/ARCHITECTURE.md` 與 `README.md` 為準，歷史數值一律以本區塊「現況對照表」判讀。

<a id="en-summary"></a>

### English Summary

This document, "Front-End Redesign · Design & Layout Draft v2", records the R0 decisions, R1 survey and R2 architecture from 2026-11-09, plus per-round R4 implementation and R5 acceptance history in §§10–16.
§§10–15 retain extensive measurement-day CDP figures: 117 segments / 31 relay junctions, `Fit scale=0.596`, 11–13/13 assets, 14/14 tests, 34/35/44 DOM IDs, six/seven `localStorage` keys, `resize:both` / double-click restore / a third tab — **all now stale**.
§16 (2026-11-15) logs the site-wide courseware rewrite and box line-breaking; the current local state has evolved to 43 `.connection` paths, 0 relay, 53 IDs, 8 keys, 13 assets, 20/20, 1,831 keys, `version=5`, with GitHub Pages returning 200 (older build).
All 721 original lines are preserved for traceability rather than rewritten; for the current state refer to `docs/ARCHITECTURE.md` and `README.md`, and read every historical figure through the comparison table below.

<details><summary>目錄</summary>

**本文件既有章節（第 0–16 節，原樣保留，未改動）**

- 第 0 節　已凍結決策（老闆 2026-11-09）
- 第 1 節　範圍（1.1 本版要做／1.2 本版不做／1.3 功能凍結清單）
- 第 2 節　R1 現況查證（2.1 前端檔案職責／2.2 HTML 大半不在 `index.html`／2.3 硬約束／2.4 既存缺陷）
- 第 3 節　R1 風格來源拆解
- 第 4 節　R2 目標資訊架構
- 第 5 節　元件規格（重做範圍）
- 第 6 節　風險登記（6.1 風險閉環結果）
- 第 7 節　R5 驗證計畫（預先定義，進 R4 前不改）
- 第 8 節　開放項（老闆 2026-11-09 23:32 已全部確認）
- 第 9 節　決策紀錄
- 第 10 節　R4 實作與 R5 驗收結果（2026-11-09）
- 第 11 節　連線改為「一個一個直線向下連」（2026-11-10）
- 第 12 節　置中調整（2026-11-10）
- 第 13 節　逐層接續、可調式答題框與手寫草稿區（2026-11-10）
- 第 14 節　A+ 資料保存補強（2026-11-10）
- 第 15 節　光效範圍、交卷門檻與答題回饋配色（2026-11-10）
- 第 16 節　全站教材改寫與方框換行（2026-11-15）

</details>

### 現況對照表（舊記載 → 現況）

> 「舊記載」為本文件（基準 `5c72b40` 起之各輪）於量測當日所載數值；「現況」為本機 HEAD `8d7b4cb` 之實測值。第 10–15 節歷史數值**不得引用為現況**。

| 項目 | 舊記載（量測當日） | 現況（HEAD `8d7b4cb`） |
|---|---|---|
| 單元測試 | `14/14` | **20/20**（`node --test tests/*.test.cjs`） |
| 靜態資源 | `11/11`、`12/12`、`13/13` | **13 個靜態資源**（1 CSS ＋ 12 JS） |
| DOM ID | 34／35／44 | **53** |
| `localStorage` 鍵 | 3／6／7 鍵 | **8 鍵**（其中 5 個帶 `schemaVersion:1`） |
| 連線 | 117 段／31 個中繼接點 | **43 條 `.connection` path、0 relay**（16 母線＋27 進線、8 個 `.tree-junction`） |
| 答題框互動 | `resize:both`／雙擊還原／第三個「草稿紙」分頁 | **8 方向自訂把手**／練習分頁內 `#quiz-scratch` 草稿側欄／**單擊開合** |
| `topic.version` | 1 → 2 → 3 | **1 → 2 → 3 → 5** |
| i18n 目錄 | 1,830 keys | **1,831 keys** |
| Fit 比例 | `Fit scale=0.596` | 現行 `bounds = 3069 × 1998`（`minX:40`、`maxX:3045`、`maxY:1974`） |
| 部署狀態 | 「未發布、未部署、未對外分享」 | **GitHub Pages 已 200，但版本較舊**（線上教材 v1／雙擊開合；本機 v5／單擊開合） |
| 未提交改動 | 「`styles.css`／`js/i18n-messages.js` 未提交」 | **HEAD `8d7b4cb` 已提交、工作樹乾淨** |
| 第三方 `fflate` | `0.8.3`（`PACK_FORMAT.md`） | **`js/vendor/fflate.js` 內查無版本字串**，無法核對 |
| 本文件 §2.1 檔案大小 | `index.html` 8 KB／`styles.css` 23 KB／`app.js` 16 KB／`catalog.js` 131 KB | **14.5／44.4／26.9／170 KB** |
| 本文件 §10.2 | 「現 44 個含 ID 元素」、`760×950` viewBox、5 檔 script | **53 個靜態 ID**；viewBox 改為 `0 0 3069 1998`；13 個資源／12 支 JS |
| 本文件 §10–15 連線 | 43 條／234 段、`M 590 101 V 122.5 H 590 V 144`、117 段／43 條邊／31 接點／總水平 7,213px | **43 條 `.connection` path、0 relay**；`connectionSegments`／`buildLaneMap`／`.relay` 於程式內零命中 |
| 本文件 §10.4／§11.6／§12.6／§16 | 「`static.directory` 未在真實托管驗證」「未發布、未部署」 | **GitHub Pages 已 200，惟版本較舊**；`static.directory="."` 仍未於真實托管平台驗證 |

### 如何使用本歷史文件

- 本文件所有數值（測試數、資源數、DOM ID、連線段數與接點數、`localStorage` 鍵數、bounds、i18n key 數、`Fit scale`、CDP 項數、`%TEMP%` 截圖路徑等）**僅代表量測當日與對應 commit**，反映該輪驗收情境，不代表本機現況。
- 第 10–15 節之「117 段／31 接點」「`resize:both`」「雙擊還原」「第三分頁」「未發布」等記載，文件本身於 §16（第 717 行）已自承過時；請一律以上表「現況」欄判讀。
- **現況以 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與根目錄 [`README.md`](README.md) 為準**；逐次提交與驗證數值見 [`docs/CHANGELOG.md`](docs/CHANGELOG.md)。
- 本文件保留原始段落以供追溯決策與驗收歷程；本專案不是安全邊界、答案在前端、`references/` 版權書籍不得公開，詳 [`docs/SECURITY.md`](docs/SECURITY.md)。

[↑ 回到頂部 · Back to top](#top)

---

> **狀態：R0–R2 設計已交付；老闆於 2026-11-09 23:32 確認五項開放項後放行 R4，R5 驗證已通過；2026-11-10 追加連線改版、置中調整、逐層接續與學習工作區、A+ 資料保存補強，以及光效範圍／交卷門檻／紅綠提示；2026-11-15 完成全站 27 節點教學改寫與所有方框換行優化，R5 複驗皆通過。**
> 本文保留設計階段原始紀錄（第 0–9 節），**第 10 節為 R4 實作與驗收、第 11 節為連線改版、第 12 節為置中調整、第 13 節為逐層接續與學習工作區、第 14 節為 A+ 資料保存補強、第 15 節為光效範圍與答題回饋、第 16 節為教材改寫與方框換行**；第 8 節開放項已補上老闆的答覆。
> 日期：2026-11-09　基準提交：`5c72b40`　工作空間：`<repo-root>`
> 風格來源：`index(1).html`（思維維度圖 · 前端雛形 v0.1，5,385 行 / 320,880 bytes，單檔無外部資源）

---

## 0. 已凍結決策（老闆 2026-11-09）

| 項目 | 決策 |
|---|---|
| 本輪交付物 | **設計方案與版面稿**，不改任何程式檔 |
| 改造深度 | **A 視覺與版面重做**：改 `index.html`、`styles.css` 與 JS 內的 HTML 模板；DOM ID、狀態機、資料層、`localStorage` 鍵全部保留 |
| 視覺方向 | 以 `index(1).html` 為風格來源 |
| 目標裝置 | 桌機優先，手機可用（760px 以下堆疊／收合） |
| 未動項目 | 授權／README／`.gitignore`、答案移往後端、發布上網皆不在本版 |

**解讀備註**：上一輪（`5c72b40`）已用同一份參考檔，但只重寫 `styles.css` 的色彩與質感，版面尺寸、區塊配置、元件形狀全部沿用舊站。本版「重新設計整個前端」定義為：**風格來源不變，連資訊架構、版面與元件語彙一起照參考檔重做**。此解讀已向老闆說明，如理解有誤應於進 R4 前糾正。

**後續追加規格（老闆 2026-11-09 23:29–23:36，已併入 R4）**

| # | 規格 | 落地方式 |
|---|---|---|
| S1 | 連線改用**直的實線** | `app.js` 的 SVG 路徑由 `C` 貝茲曲線改 `L` 直線；`.connection` 移除 `stroke-dasharray` |
| S2 | **點亮要有動畫發白光** | 一次性 `just-lit` 類別，觸發節點光暈、白色閃光與連線掃光；動畫結束即清除類別 |
| S3 | 「自定義光效」= **可在介面上把白光改成其他顏色** | 抽屜新增「光效設定」：8 個色票＋選色器＋預覽＋還原白光；寫入 `--glow-rgb`，存 `calculus-tree-glow-v1`（`schemaVersion:1`）；深淺主題各自保留亮度 alpha |

> **S1 後續（2026-11-10）**：老闆再指示「一個一個直線向下連」，連線已由 `L` 直線改為逐層正交走線，見第 11 節；上表保留 R4 當時的紀錄。

S3 是對「不改任何一行邏輯」的**唯一例外範圍**：以獨立新檔 `js/glow-settings.js` 實作，`app.js`／`js/pack-ui.js` 的既有邏輯、狀態機、`localStorage` 進度鍵完全未動。S1／S2 需要一個純呈現用的 `justLitId` 旗標，亦屬此例外，見第 10 節。

---

## 1. 範圍

### 1.1 本版要做

- 由「捲動式文件頁」改為「全螢幕工作台」：畫布佔滿視窗，頁面不捲動。
- 所有控制項改為浮動玻璃層：左上膠囊、左側抽屜、右上工具組、底部工具列、右下縮放組。
- 課程內容由固定右欄改為可收合的浮動玻璃側板。
- 重做元件語彙：節點卡、按鈕、對話框、狀態色、字體層級、hover 提示。
- 修正色彩主調偏差（見 3.3）與歡迎頁插圖的綠色硬編碼（見 2.4）。
- 保留所有功能與資料，含既有使用者的進度與已匯入教材。

### 1.2 本版不做（明列留待下一版）

- 中英語系切換（參考檔的語言鈕目前為 `aria-disabled="true"`，本站亦維持預留）。
- 新增或改動任何功能邏輯、題目規則、教材格式。
- 換框架、引入 npm／建置工具（維持純靜態、可直接開 `index.html`）。
- 授權、`README`、`.gitignore`、答案後端化、發布上網。

**例外（老闆後續追加）**：「光效設定」與「點亮白光」屬純呈現功能，以獨立新檔 `js/glow-settings.js` 與一個呈現旗標 `justLitId` 實作；既有 11 項功能邏輯、題目規則、教材格式、狀態機全部未動。詳見第 0 節 S1–S3 與第 10 節。

### 1.3 功能凍結清單（逐項不得增減）

| # | 功能 | 現行實作位置 |
|---|---|---|
| 1 | Start 入場門檻，未點亮時只顯示 Start | `renderTree()` / `progress.started` |
| 2 | 點亮後展開 27 節點、依先修解鎖三態 | `isAvailable()` / `renderTree()` |
| 3 | SVG 連線，已完成路徑變色 | `renderTree()` / `.connection.done` |
| 4 | 歡迎頁、課程分頁（概念／練習） | `renderWelcome()` / `renderLesson()` |
| 5 | 每課 10 題四選一、7 題及格、批改解析、重做、下一課 | `renderQuiz()` |
| 6 | 進度與成績保存 | `calculus-tree-progress-v1` |
| 7 | 學習包：上傳／拖放／預覽差異／匯入／匯出／跨分頁衝突 | `js/pack-ui.js` / `calculus-tree-packs-v1` |
| 8 | 主題跳轉下拉 | `#topic-jump` |
| 9 | 縮放 0.03–2.2、拖曳平移、雙指、Fit、Focus | `zoomAt()` / `fitTree()` / `focusTree()` |
| 10 | 重設進度、深淺主題、進度條、toast、儲存狀態提示 | `#reset-dialog` / `skill-tree-theme` / `#toast` |
| 11 | 無障礙：skip link、tablist、aria-*、鍵盤操作 | 散布於 HTML 與 JS 模板 |

---

## 2. R1 現況查證

### 2.1 前端檔案職責

| 檔案 | 大小 | 職責 |
|---|---|---|
| `index.html` | 8 KB | 骨架、`dialog`、主題初始化 inline script |
| `styles.css` | 23 KB | 視覺層（上一輪改寫） |
| `app.js` | 16 KB | 狀態機、縮放平移 **＋節點／歡迎頁／課程／測驗的整塊 HTML 模板** |
| `js/pack-ui.js` | 7 KB | 學習包邏輯 **＋下拉／預覽／圖書館的 HTML 模板** |
| `js/topic-packs.js` | 15 KB | 純資料層（驗證、排序、ZIP）— **不改** |
| `learning-packs/catalog.js` | 131 KB | 產生檔，教材資料 — **不改** |

### 2.2 關鍵發現：HTML 大半不在 `index.html`

`renderTree()`、`renderWelcome()`、`renderLesson()`、`renderQuiz()` 直接把 HTML 字串灌進 `#nodes`、`#connections`、`#lesson`、`#lesson-body`；`pack-ui.js` 灌進 `#topic-jump`、`#pack-preview`、`#pack-library`。

**結論**：只改 `index.html` + `styles.css` 改不到節點卡、課程面板、測驗選項、歡迎頁插圖與預覽列表。深度 A 必須連 JS 內的模板字串一起改，但**只改模板標記與 class，不改任何一行邏輯**；改完用 diff 逐行確認邏輯未動。

### 2.3 硬約束（動到即視為改功能）

- 34 個 DOM ID 全數保留、不改名；JS 生成的 class（`.node`、`.option`、`.result`、`.lesson-tabs`、`.library-item`…）保留。
- 座標幾何：`node.x/y`、`760×950` 的 `#connections` viewBox、`left/top` 定位。
- `app.js` 頂層 `const map = $('#map')` 是全域常數，`pack-ui.js` 第 110 行直接取用（跨檔隱性耦合）→ `#map` 必須存在於 DOM 且載入順序不變。
- `localStorage` 三鍵不改：`calculus-tree-progress-v1`、`calculus-tree-packs-v1`、`skill-tree-theme`。
- script 載入順序不改：`catalog.js → fflate.js → topic-packs.js → app.js → pack-ui.js`。
- `#pack-dialog` 由 `showModal()` 開啟；改為非 modal 會動到 `pack-ui.js`，屬深度 B。

### 2.4 既存缺陷（本版一併修正）

- `renderWelcome()` 的小樹 SVG 寫死綠色色碼（`#86a17b`、`#c7d7b8`、`#95b486`、`#c6aa7d`、`#b7c1aa`），與黑白灰基調衝突。
- 深色／淺色 `dialog::backdrop` 已在上一輪修好，本版 redesign 時不得回退。
- `focusTree()` 內 `map.clientWidth < 500 ? .85 : 1` 與 `ResizeObserver` 已依賴容器尺寸，改全螢幕時須實測。

---

## 3. R1 風格來源拆解

### 3.1 參考檔版面骨架

`body{display:flex;flex-direction:column;height:100%}`，`.stage{flex:1;min-height:0;overflow:hidden}`，SVG canvas 佔滿。**沒有 topbar、沒有 hero、沒有頁尾、沒有頁面捲動。**

| 浮動層 | 參考檔 class | 位置 | 本站對應 |
|---|---|---|---|
| 網站膠囊 | `.site-card` | `fixed` top 14 / left 14 | 品牌、選單、主題／重設入口 |
| 左側抽屜 | `.main-menu` | `fixed` left 0，寬 `min(320px,100vw-48px)`，`transform` 滑入 | 導覽、進度、學習包、說明 |
| 右上工具組 | `.topright-ctl` | `fixed` top +64 / right 14，垂直玻璃條 | 重設進度等次要動作 |
| 底部工具列 | `.bottombar` | `fixed` bottom 22，置中 | 主題／學習包／前往主題 |
| 右下縮放組 | `.zoom-ctl` | `fixed` bottom 90 / right 22，垂直圓形 | 放大／縮小／比例／Fit／深淺切換 |
| 狀態列 | `.world-dock` | `fixed` 底部 | 進度、儲存狀態 |

### 3.2 設計 token（取自參考檔，直接沿用）

```
--bg-base:#0a0a0b          --panel:rgba(26,26,28,.62)
--glass-bg:rgba(255,255,255,.06)   --glass-border:rgba(255,255,255,.14)
--glass-shadow:0 8px 32px rgba(0,0,0,.55)   --blur:14px
--text:#e6e6e8   --muted:#949499   --accent:#8a8a92   --danger:#e0655f
淺色：--bg-base:#ffffff  --text:#24242a  --muted:#76767c  --glass-bg:rgba(255,255,255,.55)
功能色（僅用於狀態點綴）：藍 #5B7FA6 · 琥珀 #E0A04B · 青綠 #3FA7A0 · 紅 #D65A5A
```

背景為兩層漸變交叉淡入（`body::before` 淺／`body::after` 深，`opacity .5s`），畫布為細網格＋點陣。觸控裝置以 `@media (hover:none) and (pointer:coarse)` 關閉 `backdrop-filter`。

元件語彙：**44×44 / 48×48 圓角 12px 或圓形玻璃鈕**、hover 浮出絕對定位 `.lbl` 提示、面板圓角 14–18px、`safe-area-inset` 預留、圖示為 24×24 線性 SVG（`stroke-width:2`）。

### 3.3 與上一輪實作的偏差（必須修正）

| 項目 | 參考檔 | 上一輪 `5c72b40` | 本版處置 |
|---|---|---|---|
| 主強調色 | `--accent:#8a8a92` 中性灰 | `#6C5CE7` 紫／`#8b7bff` 紫 | 回復中性灰，紫降為可選點綴或移除 |
| Start 節點 | 無對應（畫布方塊） | 紫色實心膠囊 | 改中性玻璃／灰階實心 |
| 版面 | 全螢幕工作台 | 文件流 topbar＋hero＋雙欄＋頁尾 | 改全螢幕工作台 |
| 控制項 | 浮動玻璃層 | 固定在卡片／頂欄 | 改浮動層 |
| 主題鈕位置 | 併入右下 `.zoom-ctl` | 頂欄右側 | 併入右下縮放組 |

### 3.4 現站與參考檔落差表

| 現站區塊 | 參考檔對應 | 本版處置 |
|---|---|---|
| `.topbar` 89px 橫條 | `.site-card` 浮動膠囊 | 拆為左上膠囊；`#theme-toggle`／`#reset` 搬到浮動層但保留 ID |
| `.intro` 大標題＋進度卡 | 無（收進抽屜） | 文案與 `#progress*` 收進左側抽屜 |
| `.pack-toolbar` 獨立橫條 | `.bottombar` 工具鈕 | `#manage-packs`／`#pack-count`／`#topic-jump` 收進底部工具列或抽屜，ID 保留 |
| `.workspace` 雙欄固定高 575px | `.stage` 全螢幕 | `#map` 改 `fixed inset:0`；地圖工具組留在 `#map` 內即可定位到視窗角落 |
| `.lesson-card` 右欄 374px | 浮動側板 | `#lesson` 改 `fixed` 右側玻璃側板，可收合 |
| `.map-tools` 地圖內右下 | `.zoom-ctl` 右下 | 位置對齊，仍留在 `#map` 內以避免動 JS |
| `#pack-dialog` 中央彈窗 | 玻璃面板 | 維持 `dialog.showModal()`，改玻璃側板式樣 |
| `.path-notes` 三欄文案 | `.main-menu` 功能介紹 | 收進抽屜（**待老闆確認是否保留**） |
| `.page-footer` | `.world-dock` 狀態列 | `#storage-note` 收進狀態列 |

---

## 4. R2 目標資訊架構

### 4.1 全螢幕工作台（桌機）

```
┌──────────────────────────────────────────────────────────────┐
│ [≡ 微積分漫遊 ▾]                              [重設] [主題]  │ ← 浮動膠囊／右上組
│ ┌──────────┐                                                │
│ │ 左側抽屜 │        細網格全螢幕畫布 #map                  │
│ │ 導覽     │         Start → 節點 → 分支                   │ ┌──────────┐
│ │ 進度     │                                              │ │ #lesson  │
│ │ 學習包   │                                              │ │ 浮動側板  │
│ │ 說明     │                                              │ └──────────┘
│ └──────────┘                                    [＋][%][−] │ ← 右下縮放組
│                    [工具列：學習包 · 主題 · 前往]      [⊙] │
└──────────────────────────────────────────────────────────────┘
```

### 4.2 保留 DOM 合約的做法

- **只搬位置，不改名、不刪 ID**：用 CSS `position:fixed/absolute` 與父容器重排達成，必要時在 `index.html` 調整 DOM 巢狀層級，但 ID 集合保持 34 個不變。
- **JS 模板只改標記**：`app.js`／`pack-ui.js` 的 `innerHTML` 字串可調整 class、包一層 wrapper、替換硬編碼色碼；**不得改動任何條件式、事件綁定、資料欄位**。
- **幾何不動**：`#connections` 維持 `viewBox="0 0 760 950"`，`node.x/y` 不動。`fitTree()`／`focusTree()` 已用 `map.clientWidth/clientHeight` 動態計算，全螢幕後應可自動適應，須實測確認。
- **驗證方式**：`git diff` 逐行檢查 `app.js`／`pack-ui.js`，確認只有模板字串變動；重跑 `node --test tests/topic-packs.test.cjs`（14/14）。

### 4.3 狀態與互動流程（完全不改）

`未開始 → 只見 Start → 點亮 → 展開全樹 → 選節點 → 課程／練習 → 及格點亮 → 解鎖後繼`。縮放、拖曳、雙指、Fit、重設、學習包匯入匯出流程照舊。

### 4.4 手機（760px 以下）

畫布仍全螢幕；`#lesson` 改為底部工作表（可收合），左側抽屜覆蓋式滑入，右下縮放組縮為 2×2 網格（參考檔 `@media(max-width:480px)` 做法），底部工具列可橫向捲動。保留 `selectNode()` 內既有的 `scrollIntoView` 行為。

---

## 5. 元件規格（重做範圍）

| 元件 | 現行 | 目標 |
|---|---|---|
| 節點卡 | 174×72 圓角 13 玻璃卡 | 維持尺寸（幾何依賴），改中性灰階三態、狀態色僅作左側細邊／圖示點綴；淺色主題鎖定態補對比 |
| Start | 160×70 紫色實心膠囊 | 中性灰 `#8a8a92` 實心，點亮轉青綠；紫色全數移除 |
| 連線 | 虛線貝茲曲線 | **直實線**（`M … L …`），已完成轉青綠；點亮時沿線掃過一次自訂光效 |
| 按鈕 | 10px 圓角膠囊 | 44×44 / 48×48 圓角 12 或圓形玻璃，hover 浮出提示 |
| 課程側板 | 固定 374px 右欄 | 浮動玻璃側板，圓角 18；桌機預設展開、手機收合為底部工作表，兩者皆可手動切換 |
| 左側抽屜 | 無 | 預設收合、滑入；收納進度、主題學習包、功能介紹與**光效設定** |
| 對話框 | 中央 650px 玻璃彈窗 | 玻璃面板；淺色主題維持淺遮罩；`#pack-dialog` 仍為 `showModal()` |
| 動畫 | 多處 hover 位移 | 只保留主題淡入、抽屜滑入、點亮白光三種；`prefers-reduced-motion` 全部關閉 |
| 光效設定 | 無 | 8 色票＋原生選色器＋預覽＋還原白光，即時套用、跨分頁同步 |
| 字體 | 系統字 | 沿用參考檔 `-apple-system…"PingFang TC"…`，標題層級收斂 |

---

## 6. 風險登記

| # | 風險 | 級別 | 處置 |
|---|---|---|---|
| R1 | `#pack-dialog` 用 `showModal()`，`::backdrop` 會遮住全螢幕畫布；若改成「不擋畫布的側板」須動到 `pack-ui.js`，超出深度 A | **必須先解決** | 本版維持 modal，只改外觀；側板化列為下一版（深度 B） |
| R2 | 全螢幕後 `fitTree()`／`focusTree()` 的置中與 `ResizeObserver` 行為未實測 | **必須先解決** | R5 以 headless Chrome 逐比例實測 1440／1050／760／390 寬 |
| R3 | JS 模板改動可能誤傷邏輯 | **必須先解決** | diff 逐行核對；模板與邏輯分離標記；14/14 測試＋瀏覽器 E2E |
| R4 | `#lesson` 改 `fixed` 後，手機 `scrollIntoView` 可能失效 | 可延後（桌機優先） | 手機驗收時實測，失效則列為已知限制 |
| R5 | `map` 全域耦合：若 `#map` 被搬進抽屜或延後建立會壞 | 可延後 | 維持 `#map` 於 DOM 最前、載入順序不變 |
| R6 | `static.directory "."` 未在真實托管環境驗證 | 可延後 | R8 已知限制，本版不處理 |
| R7 | 答案仍在前端 `nodes/*.json`／`catalog.js` | 可延後 | 架構方針衝突，本版不處理 |
| R8 | 新光效設定若在 `app.js` 內加事件，會違反「不改邏輯」 | **必須先解決** | 獨立成 `js/glow-settings.js`，只讀寫 CSS 變數與自己的儲存鍵 |
| R9 | 淺色主題白光與鎖定節點對比不足 | 可延後 | 補中性對比環 `--ignite-ring` 與 `--locked-border`／`--node-locked`，已實測 |

### 6.1 風險閉環結果（R5 後）

| 風險 | 結果 |
|---|---|
| R1 | 維持 `showModal()`，未動 `pack-ui.js`；**列為下一版已知限制**（抽屜開啟時對話框仍會遮住畫布） |
| R2 | 已實測 1440／1050／760／390 四種寬度：`fitTree()`／`focusTree()`／`ResizeObserver` 正常，無水平捲動；**關閉** |
| R3 | `git diff -- app.js` 逐行核對，改動僅為模板標記與 `justLitId` 呈現旗標；14/14 測試＋瀏覽器 E2E 全通過；**關閉** |
| R4 | 手機 `#lesson` 為底部工作表，`scrollIntoView` 不影響開合；**關閉（桌機優先，手機可用）** |
| R5 | `#map` 仍在 DOM 前段，`map` 全域耦合未壞；**關閉** |
| R6／R7 | 未處理，**列為 R8 已知限制** |
| R8／R9 | 依上表處置，瀏覽器實測通過；**關閉** |

---

## 7. R5 驗證計畫（預先定義，進 R4 前不改）

1. **靜態**：`node --test tests/topic-packs.test.cjs` 14/14；CSS 括號平衡；`git diff -- app.js js/pack-ui.js` 確認邏輯零變動；34 個 ID 集合與基準一致。
2. **執行期**：headless Chrome + CDP 逐屏存證 — 深色首屏、淺色首屏、Start 點亮後全樹、課程側板、練習批改、學習包對話框、縮放／拖曳／Fit、四種視窗寬度。`BROWSER_ERRORS=0`。
3. **缺陷閉環**：現象 → 根因 → 修法 → 回歸，全部關閉或列為已知限制。
4. **通過標準**：主流程每屏有實測證據；既有進度與已匯入教材在改版後仍可讀（`localStorage` 鍵不變）。

**實際執行結果**：headless Chrome + CDP 共 30 項檢查、11 張以上逐屏存證、`BROWSER_ERRORS=0`、`node --test` 14/14、CSS 括號深度 0、11/11 靜態資源可達。明細見第 10 節。

---

## 8. 開放項（老闆 2026-11-09 23:32 已全部確認）

| # | 項目 | 老闆答覆 | 落地 |
|---|---|---|---|
| O1 | `.path-notes` 三欄文案是否保留 | **收進抽屜「功能介紹」** | `<details>` 群組，三欄改縱向卡片，不佔畫布 |
| O2 | 主色是否完全回到中性灰 | **完全回到中性灰，自定義光效** | `--accent:#8a8a92`；紫色掃描結果 0；光效另由 S3 處理 |
| O3 | 課程側板預設展開或收合 | **桌機展開、手機收合** | 桌機 `transform:none`；手機底部工作表露出 46px；兩者皆可手動切換 |
| O4 | 左側抽屜預設收合或展開 | **收合，避免遮畫布** | 純 CSS checkbox，未綁任何既有 JS |
| O5 | 是否要轉場動畫 | **只做主題淡入與抽屜滑入，`prefers-reduced-motion` 時關閉** | 另加 S2 的點亮白光（老闆另行指定）；其餘動畫收斂，`reduce` 時 `animation:none` |

---

## 9. 決策紀錄

| 決策 | 理由 | 被否決的選項 |
|---|---|---|
| 深度 A，不換框架 | 老闆指定；且純靜態、零 npm 可直接開 `index.html` 是既有價值 | B 改資訊架構（會動幾何）、C 換框架（終結零依賴） |
| 桌機優先，手機可用 | 老闆指定；全螢幕工作台在桌機最能發揮 | 手機優先、雙版獨立版面 |
| 維持 `dialog.showModal()` | 改非 modal 會動到 `pack-ui.js`，超出深度 A | 玻璃側板不擋畫布（列下一版） |
| 只搬 DOM 位置、不改 ID | 保證既有進度、教材與所有事件綁定不受影響 | 重整 DOM 命名（風險高、無收益） |
| JS 模板可改標記、不可改邏輯 | 否則改不到節點／課程／測驗的外觀 | 只改 CSS（改不到 JS 生成的 HTML） |
| 光效設定獨立成新檔 | 老闆追加「可在介面換色」，但既有邏輯不得動 | 把事件寫進 `app.js`（會污染狀態機）；只給開發者改 CSS 變數（不符老闆澄清） |
| 預設白光＋深淺各自 alpha | 深色要亮、淺色要看得見，顏色卻必須跟隨使用者選擇 | 在 `html.dark` 寫死白色（換色失效）；兩主題共用一組亮度（淺色看不見） |
| 淺色主題補中性對比環 | 白光在淺底上幾乎不可見 | 把光暈改成深色（會蓋掉使用者選的顏色） |

---

## 10. R4 實作與 R5 驗收結果（2026-11-09）

### 10.1 變動檔案

| 檔案 | 性質 | 內容 |
|---|---|---|
| `index.html` | 重排 | 全螢幕工作台骨架、浮動玻璃層、兩個開合 checkbox、光效設定區、載入 `js/glow-settings.js` |
| `styles.css` | 重寫 | 中性灰 token、深淺主題、直實線、點亮白光、抽屜／側板開合、三種動畫、`prefers-reduced-motion` |
| `app.js` | 最小改動 | 連線 `C`→`L`、模板加 `just-lit` 標記、純呈現旗標 `justLitId`、歡迎頁插圖改 `currentColor` |
| `js/glow-settings.js` | **新增** | 光效換色、預覽、還原、持久化、跨分頁同步、`animationend` 清類別 |
| `DESIGN-v2.md` | 本文 | 補決策與驗收紀錄 |

**未動**：`js/pack-ui.js`、`js/topic-packs.js`、`js/vendor/fflate.js`、`learning-packs/*`、`nodes/*`、`scripts/*`、`tests/*`、`js/hosting.json`、所有 DOM ID（原 35 個全數保留，另加 `nav-toggle`／`lesson-toggle`）、`localStorage` 進度鍵 `calculus-tree-progress-v1` 與教材鍵 `calculus-tree-packs-v1`、主題鍵 `skill-tree-theme`。

### 10.2 驗收數值

| 項目 | 結果 |
|---|---|
| `node --test tests/topic-packs.test.cjs` | 14/14 通過 |
| CSS 括號平衡 | `depth=0`，259 條規則可解析 |
| DOM ID | 原 35 個 `MISSING=0`；現 44 個含 ID 元素 |
| 靜態資源 | 11/11 可達且非空 |
| 瀏覽器錯誤 | **0**（headless Chrome + CDP） |
| 起始狀態 | 深色、1 個 Start 節點、27 份教材載入、`TopicPacks` 存在 |
| 主題切換 | `localStorage=light`、`theme-color=#f3f3f5`、淺色 `dialog::backdrop` 與抽屜遮罩 |
| 連線 | 43 條、貝茲 0 條、直線 43 條、`stroke-dasharray=none` |
| 點亮 Start | 28 節點、1 個已點亮、1 個 `just-lit` 節點＋1 條掃光連線、動畫後類別清除為 0 |
| 完成一課 | 批改結果出現、進度 +1、該節點 `just-lit=1` |
| 光效換色 | 選珊瑚後 `--glow-rgb=224,101,95`；淺色 core `.55`、深色 core `.95`；`::after` 閃光同色；重載後保留 |
| 學習包對話框 | `open=true`、圖書館 1 包、維持 `showModal()` |
| 縮放／Fit | 100%→120%，Fit `scale=0.596` |
| 側板收合 | 桌機 `translateX(474px)` 且完全移出視窗 |
| 視窗寬度 | 1440／1050／760／390 皆無水平捲動；760 以下側板收為底部工作表 |
| 減少動態 | `animation=none`、`transition=0s` |
| 重載保存 | 光效色、進度、主題、28 節點皆保留 |

### 10.3 缺陷閉環

| 現象 | 根因 | 修法 | 回歸 |
|---|---|---|---|
| 抽屜標題被左上膠囊蓋住 | `.site-card` z-index 33 高於抽屜 31 | 抽屜開啟時把膠囊降到 20 | 標題 top=26 完整可見，截圖確認 |
| 淺色抽屜遮罩過深、整頁發灰 | 遮罩固定深色 `rgba(8,8,12,.42)` | 淺色改用 `rgba(228,228,234,.66)` | 與對話框一致，截圖確認 |
| `just-lit` 類別動畫後不消失 | `renderTree()` 只清旗標，未清 DOM 類別 | `animationend` 只認本體 `ignite-node` 後移除 | 1.2 秒後 `just-lit=0` |
| 淺色鎖定節點幾乎看不見 | `--node-locked` 過透、文字用 `--faint` | 補 `--locked-border`、提高不透明度、文字改 `--muted` | 截圖確認可讀 |
| 歡迎頁小樹插圖仍是綠色 | SVG 色碼寫死在 `app.js` 模板 | 改 `currentColor`＋`*-opacity` | 深淺兩版皆為中性灰 |

### 10.4 已知限制（R8）

- **沒有發布上網**；本輪只在本機臨時 HTTP 服務與本機 Git 提交。
- `js/hosting.json` 的 `static.directory: "."` 仍未在真實托管平台驗證。
- `#pack-dialog` 仍是 `showModal()`，開啟時會遮住全螢幕畫布；側板化屬深度 B，列下一版。
- 答案仍在前端 `learning-packs/*`／`catalog.js`，與最初「答案留後端」的方針衝突，本版未處理。
- 授權／`README`／`.gitignore` 未動（老闆先前指定「按照一二」時的第 3 項）。
- 光效顏色為單一設定，深淺主題共用；只各自保留亮度參數。

---

---

## 11. 連線改為「一個一個直線向下連」（2026-11-10）

### 11.1 需求與解讀

老闆 00:09 附上全樹截圖，指出 `b92f25c` 的直實線仍是斜向交叉網，要求「一个一个直线向下連」。唯讀查證 43 條邊：29 條有水平位移、13 條跨越 2–6 層（最長落差 690px），確實形成大量交叉斜線。

**本輪解讀**：連線不得有斜線；每條邊逐層往下接，每一層只走一段垂直線，轉折放在層間空隙，最後垂直接入子節點。此解讀保留分支、不改節點座標、不動資料層，符合深度 A。

> **待老闆確認**：若原意其實是「把 27 個節點排成單一縱向長鏈、每條邊都是一條垂直直線」，本節作法不同，需另行指示；該解讀會改到 `buildLessons()` 的幾何與教材版面。

### 11.2 三種走線比較（唯讀模擬＋CDP 截圖）

| 方案 | 作法 | 最長垂直段 | 穿過卡片段 | 結果 |
|---|---|---|---|---|
| A | 父節點下方一次轉折，長垂直段落在子節點 x | 596px | 17 | 否決 |
| B | 子節點上方一次轉折，長垂直段落在父節點 x | 596px | 15 | 否決 |
| C | **逐層向下，每層選空白通道** | **115px（剛好一層）** | **0** | **採用** |

三者最長水平段同為 630px（見 11.6），差異全在垂直段與穿卡數。

### 11.3 實作

| 檔案 | 變動 |
|---|---|
| `app.js` | 新增 `LAYER_STEP=115`、`NODE_HALF_HEIGHT=36`、`buildLaneMap()`、`nearestLane()`、`connectionPath()`；`renderTree()` 只換連線路徑的產生方式 |
| `styles.css` | `.connection` 補 `stroke-linejoin:round`，讓直角轉折不產生尖角 |
| `js/glow-settings.js` | `endGlow` 兼認 `ignite-line` 並加掛 `#connections`，補上連線 `just-lit` 動畫後未清除的缺陷 |

走線規則：`M px y1` → 對第 s 層輸出 `V (py + s*115 + 57.5) H lane` → 最後 `V y2`；最後一層的 `lane` 直接取子節點 x。空白通道取該層相鄰節點 x 的中點（單節點層取該 x ±140），以線性插值位置為目標挑最近者，因此垂直段不會落在任何卡片上。

**未動**：`index.html`、`js/pack-ui.js`、`js/topic-packs.js`、`learning-packs/*`、所有 DOM ID、狀態機、教材格式、三個 `localStorage` 鍵。

### 11.4 R5 驗收數值（2026-11-10）

| 項目 | 結果 |
|---|---|
| `node --check app.js`／`js/glow-settings.js` | 通過 |
| `node --test tests/topic-packs.test.cjs` | 14/14 |
| 連線 | 43 條、斜線 0、正交 43/43、`stroke-dasharray=none` |
| 幾何 | 234 段、最長垂直 115px、最長水平 630px、**穿卡 0** |
| 點亮 Start | 28 節點、1 個 `just-lit` 節點＋1 條掃光連線；1.3 秒後殘留 **0** |
| 完成一課 | 進度 +1、4 條 `done` 連線、批改結果出現 |
| 深淺主題／學習包對話框／縮放 Fit | 皆正常，`fitScale=0.596` |
| 靜態資源 | 11/11 可達且非空 |
| 瀏覽器錯誤 | **0**（headless Chrome + CDP，14 項檢查） |
| 逐屏存證 | 深色全樹、批改後、淺色共 3 張，另存放大裁切 |

### 11.5 缺陷閉環

| 現象 | 根因 | 修法 | 回歸 |
|---|---|---|---|
| 長垂直線貫穿 6 層、17 段穿過卡片 | 一次轉折把整段落差塞進單一垂直段 | 逐層走線＋層間空白通道 | 最長垂直 115px、穿卡 0 |
| 連線 `just-lit` 動畫後類別不消失 | `endGlow` 只認 `ignite-node`、只掛 `#nodes` | 兼認 `ignite-line`、加掛 `#connections` | 1.3 秒後殘留 0 |
| 驗證腳本誤報 `allOrthogonal=false` | 樣板字串中 `\d` 被當成不明逸脫吃掉 | 改寫為 `\\d` | 43/43 true（驗證工具缺陷，非產品缺陷） |

### 11.6 已知限制

- 最長水平段 630px，來自既有佈局本身：`chain@380,985 → linearization@1010,1100` 相鄰層但水平相距 630px。屬資料層幾何，本輪不改。
- 多條長距離邊的轉折落在同一層間空隙，會連成較長的水平線；若要完全消除需重排節點座標，列下一版。
- 其餘限制同 10.4；**仍未發布、未部署、未對外分享。**

---

## 12. 置中調整（2026-11-10）

### 12.1 需求與唯讀量測

老闆於連線改版後指示「置中。」。唯讀量測置中前的幾何（桌機 1440 寬、課程側板展開）：

| 量測項 | 數值 |
|---|---|
| 起始頁 Start | `x=340`、`scale=1`、螢幕中心 `720`、視窗中心 `720`（起始頁已置中） |
| Fit 後整棵樹 | `scale=0.596`、`transformX=368.1`、左 `418`、右 `1022`、中心 `720` |
| Start 卡片 | 中心 `595`、左 `547`、右 `642` |
| 課程側板 | 左緣 `984`、右緣 `1358` |
| 落在側板下的卡片 | **1** 張（最右卡右緣 `1022` > `984`） |
| 資料層 X | `startX=380`、`minX=170`、`maxX=1010`、教材層中軸 `590` |

**結論**：原 `fitTree()` 以 `map.clientWidth/2 = 720` 為中心，整棵樹的確對齊視窗中心，但右側被側板遮住；且 `Start` 的資料座標 `380` 不在教材中軸 `590` 上，起始頁與全樹的中軸不一致，點亮後樹會橫向跳動。垂直方向固定 `viewport.y = 20`，長樹上下不對稱。

### 12.2 解讀與三處決策

| # | 決策 | 理由 |
|---|---|---|
| 1 | **Start 對齊教材中軸**：`startNode.x` 由 `380` 改為 `590` | `buildLessons()` 產生的教材層中軸為 `590`（`minX=170`、`maxX=1010` 之中點），Start 與之對齊後，起始頁與全樹共用同一條中軸，點亮時不橫移 |
| 2 | **以扣除右側側板後的可視畫布中心為置中基準**：新增 `usableCenterX()` | 桌機側板展開時可視畫布只到側板左緣 `984`，中心應為 `492`；收合或手機底部工作表時回到全視窗中心 `720`／`195` |
| 3 | **Fit 時上下也置中**：`viewport.y = max(0,(map.clientHeight - maxY*scale)/2)` | 取代固定 `20`，讓長樹在可視高度內上下留白對稱；`max(0,…)` 避免內容高於畫布時出現負位移 |

`focusTree()` 與右下角縮放按鈕一併改用同一中心，避免聚焦、縮放後又偏回視窗中心。滑鼠滾輪縮放仍以游標位置為錨點，屬操作直覺，不改。

### 12.3 實作

| 檔案 | 變動 |
|---|---|
| `app.js` | `startNode.x: 380 → 590`；新增 `usableCenterX(mapElement)`；`fitTree()`／`focusTree()`／`#zoom-in`／`#zoom-out` 改以該中心計算；Fit 垂直置中 |
| `DESIGN-v2.md` | 本節 |

`usableCenterX()` 以 `#lesson` 的 `getBoundingClientRect()` 判斷側板是否佔據右側（`width >= 300` 且左緣落在畫布右半），符合才扣除；收合後側板會被平移出畫布，自動回到全視窗中心，不需要額外狀態機。

**未動**：`index.html`、`styles.css`、`js/glow-settings.js`、`js/pack-ui.js`、`js/topic-packs.js`、`learning-packs/*`、所有 DOM ID、狀態機、教材格式、三個 `localStorage` 鍵；連線走線邏輯（第 11 節）完全保留。

### 12.4 R5 驗收數值（2026-11-10）

| 項目 | 結果 |
|---|---|
| `node --check app.js`／`node --test tests/topic-packs.test.cjs` | 通過／14/14、fail 0 |
| 起始頁（桌機，側板展開） | `treeCenter=492`、`startCenter=492`、`usableCenter=492`、側板下卡片 **0** |
| Fit 後全樹 | `scale=0.596`、中心 `492`、左 `190` 右 `794`、上 `58` 下 `855`（上留白 58、下留白 45） |
| 連線未受影響 | 43 條、正交 43/43、斜線 0、最長垂直 115px、最長水平 630px、穿卡 0；首邊 `M 590 101 V 122.5 H 590 V 144` |
| 點亮與批改 | 即時 `just-lit` 2 個、1.3 秒後殘留 0；完成一課 `completed=1`、批改結果出現 |
| 側板收合 | 中心回到 `720`、Start `720`、側板下卡片 0 |
| 淺色主題 | `theme=light`、中心 `492`、Start `492`、側板下卡片 0 |
| 手機 390 | `scale=0.341`、中心 `195`、Start `195`、側板下卡片 0、上下留白 198／190、無水平捲動 |
| 學習包對話框／縮放 | `open=true`；`60% → 72%`，Fit 回落 `0.596` |
| 靜態資源／瀏覽器錯誤 | 11/11 可達／**0**（headless Chrome + CDP，20 項檢查） |

### 12.5 逐屏存證

驗證腳本與截圖置於系統暫存目錄，不進 repo：

- `%TEMP%\skill-tree-align-measure.cjs`（置中前量測）、`%TEMP%\skill-tree-center-verify.cjs`（20 項回歸）
- `%TEMP%\skill-tree-center-shots\`：`01-before-start.png`、`02-after-fit-dark.png`、`03-panel-collapsed.png`、`04-light-fit.png`、`05-mobile-390.png`

### 12.6 已知限制

- 置中基準是「可視畫布中心」，不是「整棵樹外接框的幾何中心」；因外接框以 `minX-100`／`maxX+100` 對稱擴張，兩者在桌機數值相同，但拖曳後不會自動回正，需按 Fit。
- 最長水平段 630px 與第 11.6 節相同，屬資料層幾何，本輪不改。
- 其餘限制同 10.4；**仍未發布、未部署、未對外分享。**

---

## 13. 逐層接續、可調式答題框與手寫草稿區（2026-11-10）

### 13.1 兩項需求

老闆接連指示：

1. 「第一層接著第二層，第二層接著第三層，不要有越層的行為。」
2. 「右邊的答題框我想要可以自己調節大小還有移動……最好是把手寫區域也做出來，那我可以在上面寫草稿。」

### 13.2 唯讀查證：跨層邊從哪裡來

`buildLessons()` 以 `depth.set(node.id, 1 + Math.max(...node.parents.map(id => depth.get(id))))` 決定層級，再令 `node.y = 65 + level*115`。多父節點的層級由**最深**的父決定，其餘較淺的父到該節點的邊必然跨層。

| 量測項 | 數值 |
|---|---|
| 節點／邊 | 27／43（另加 `start`） |
| 邊的層差分布 | 1 層 30 條、2 層 6 條、3 層 1 條、4 層 2 條、5 層 3 條、6 層 1 條 |
| 跨層邊 | **13 條**，最長落差 6 層 |
| 約束「每條邊層差恰為 1」 | **無解**：以等式傳播求解得 14 處衝突 |
| 13 條跨層邊中具替代路徑者 | 5 條（傳遞冗餘邊），其餘 8 條為必要先修 |

**結論**：不可能只靠重排真實節點的層級就讓所有邊相鄰；要嘛刪改教材的 `parents`（會改先修語意與解鎖條件），要嘛在跨層處補中繼接點。

### 13.3 解讀與決策

| # | 決策 | 理由 |
|---|---|---|
| 1 | **保留 43 條先修邊與教材內容**，把每條邊切成「每層一段」的線段，段與段在層間接點相接 | 符合深度 A：不改 `parents`、題目、答案、狀態機、三個既有 `localStorage` 鍵；只改呈現幾何 |
| 2 | 跨層邊在每個中間層補**可見接點**（外環＋實心點） | 讓「第一層接第二層、第二層接第三層」在畫面上讀得出來，而不是只有懸空折線 |
| 3 | 中繼接點取「最接近直線插值、且不壓到卡片」的 x | 取代舊的「固定取相鄰節點中點」，讓階梯貼著父子連線下行、水平段盡量短 |
| 4 | 答題框與草稿紙做成純呈現功能，另立 `js/workspace.js` | 與 `js/glow-settings.js` 相同的獨立模組慣例；新增鍵皆帶 `schemaVersion` |

> **待老闆確認**：本節解讀為「線段不越層」。若原意其實是「27 個真實節點本身只能與相鄰層相連」，則須改教材 `parents` 或重排 `buildLessons()` 幾何；由 13.2 可知，不改先修關係時該要求數學上無解。

### 13.4 實作

| 檔案 | 變動 |
|---|---|
| `app.js` | `connectionPath()` 改為 `connectionSegments()`，回傳 `{segments, relays}`；`renderTree()` 逐段輸出 `<path>` 並輸出接點圓圈，兩者加 `data-edge` 便於逐邊驗證；`buildLaneMap()` 改記錄每層卡片佔用區間 `[x-99, x+99]`，`nearestLane()` 改找最近安全 x；`usableCenterX()` 支援側板被拖到左側或中央 |
| `styles.css` | `.relay-halo`／`.relay` 雙圈接點；`.lesson-card` 加 `resize:both` 與尺寸上下限、標題列 `cursor:grab`、拖曳中關轉場；`.lesson-tabs` 可換行；新增 `.scratch-*` 手寫區樣式；手機關掉 resize 並縮小畫布 |
| `index.html` | 於 `app.js` 前載入 `js/workspace.js` |
| `js/workspace.js`（新增） | 答題框拖曳／原生縮放／位置尺寸保存／雙擊還原／收合方向；草稿紙 canvas 繪製與筆跡保存 |
| `js/topic-packs.js`、`learning-packs/*`、`js/pack-ui.js` | **未動** |

逐層走線規則：一條邊切成 `steps+1` 段，每段只有 `M … V …`（或 `M … V … H …`），垂直段最長 115px（恰好一層），首末段各 21.5px 進出卡片；`relays = gaps.slice(0,-1)`，即只有跨層邊才有中繼接點。

答題框規格：桌機以標題列拖曳（事件委派到 `#lesson`，不受 `renderLesson()` 重繪影響）、右下角瀏覽器原生 `resize:both` 把手、位置與尺寸存 `calculus-tree-lesson-frame-v1`（`schemaVersion:1`）、雙擊標題列還原、拖到左半邊時收合方向自動改為往左；手機維持底部工作表且 `resize:none`。

草稿紙規格：課程分頁新增第三個「草稿紙」；canvas 用 1000×700 虛擬座標，縮放後按比例重繪；工具列有筆、橡皮擦（`destination-out`）、細／中／粗、還原、清除（清除後可用還原救回）；筆色讀 `--text`，深淺主題切換時以 `MutationObserver` 重繪；筆跡存 `calculus-tree-scratch-v1`（`schemaVersion:1`），上限 300 筆／30,000 點，超出丟最舊；支援滑鼠與觸控（`touch-action:none`）。

### 13.5 R5 驗收數值（2026-11-10）

| 項目 | 結果 |
|---|---|
| `node --check`（`app.js`、`js/workspace.js`）／單元測試 | 通過／14/14、fail 0 |
| CSS 括號 | depth 0、bad 0 |
| 逐層連線 | **117 段／43 條邊／31 個接點**；最長垂直 **115px**、越層段 **0**、斜線 0、格式錯誤 0、段間斷點 0、端點錯位 0、穿卡 **0** |
| 水平段 | 最長 630px、總長 7,213px（採最近安全 x 後階梯貼近父子連線） |
| 點亮與批改 | 即時 `just-lit` 3 個（1 節點＋2 段）、1.2 秒後殘留 0；完成一課 `completed=1`、批改結果出現 |
| 置中 | 起始／Fit 中心 492；側板拖到左側後自動改 924；手機 390 回 195；側板下卡片皆 0 |
| 答題框 | 初始 `resize=both`、inline `left=984px`／`width=374px`；拖曳後 `left=33` 且儲存 `schemaVersion=1`；原生把手實測 374→300（受 `min-width` 限制）；尺寸同步 460×620 並保存；雙擊還原回 984／374、儲存清除 |
| 手寫區 | 3 個分頁、canvas 320×342；真實指標畫線後非透明像素 1,973、儲存 1 筆／6 點；切換分頁重繪仍 1,973；還原→0；清除→0、再還原→690；橡皮擦 `aria-pressed=true` |
| 深淺主題／學習包對話框／縮放 | 皆正常；100%→120%，Fit 回落 0.596 |
| 手機 390 | `resize=none`、無水平捲動、底部工作表、樹置中 195 |
| 靜態資源／瀏覽器錯誤 | **12/12** 可達／**0**（headless Chrome + CDP，37 項檢查） |

### 13.6 缺陷閉環

| 現象 | 根因 | 修法 | 回歸 |
|---|---|---|---|
| 手機寬度下 `usableCenter=0`、整棵樹偏左（`treeLeft=-173`） | 改寫 `usableCenterX()` 支援拖曳時，漏掉「側板橫跨整個畫布」的判斷，兩側可用空間皆 0 | 兩側可用空間皆 <140px 時回全視窗中心 | 手機中心回到 195、無水平捲動 |
| 60% 縮放下接點看不見，畫面仍像跨層 | 原接點半徑 3.2，縮放後直徑約 4px | 改外環 r=9＋實心 r=5、加粗描邊 | 截圖可見每層接點，階梯清楚 |
| 驗證腳本誤報「清除後還原無效」 | 前一步「還原」已刪掉唯一一筆，清除時備份本來就是空 | 清除測試前補畫第二筆 | `afterClear=0`、`afterUndo=690` |
| 中繼通道固定取相鄰節點中點，形成無謂長橫線 | 只在中點集合挑最近者 | 改記錄卡片佔用區間，目標安全時直接用目標 | 穿卡仍 0、總水平段 7,213px |

### 13.7 已知限制

- 最長水平段 630px 仍來自既有資料層幾何 `chain@380,985 → linearization@1010,1100`（相鄰層但水平相距 630px），本輪不改；其餘長橫線已明顯收斂。
- 語意上仍有 13 條「跨層先修」，中繼接點是**呈現層**的過路接點，不是可點選、可答題的節點；解鎖條件完全不變。
- 草稿紙在切換分頁後，舊的 `MutationObserver` 會留到下次掛載才斷開，只對已移除的 canvas 重繪，不影響功能；列下一版清理。
- 原生 resize 把手在 headless 合成事件下實測受 `min-width:300px` 限制，真機拖曳範圍以瀏覽器為準。
- 其餘限制同 10.4；**仍未發布、未部署、未對外分享。**

### 13.8 逐屏存證

驗證腳本與截圖置於系統暫存目錄，不進 repo：

- `%TEMP%\skill-tree-levels-audit.cjs`（唯讀層級查證）、`%TEMP%\skill-tree-layer-workspace-verify.cjs`（37 項回歸）
- `%TEMP%\skill-tree-layer-shots\`：`01-start.png`、`02-dark-tree.png`、`03-scratch.png`、`04-moved-panel.png`、`05-resized.png`、`06-light.png`、`07-mobile.png`

---

## 14. A+ 資料保存補強（2026-11-10）

### 14.1 需求與範圍

老闆先問「能否發布上網、能否多人使用」，選定「先出架構評估」後於 09:54 決定「**先做 A**（多人同時上線、各自獨立、零程式改動）」，並追問「重開網站會有上次的記錄嗎」。實測後老闆選擇 **A+ 補強**，範圍限定兩件事：

1. 重開後記住選課、分頁與作答卷。
2. 匯出／匯入進度備份檔，讓記錄能搬到新網址或另一部裝置。

**明確不做**：帳號、後端、資料庫、雲端服務、發布上網、答案位置調整、教材格式變動。

### 14.2 唯讀查證：補強前的缺口

以兩個不同 port 模擬不同網址，headless Chrome + CDP 實測（詳 `MULTIUSER-ARCH.md` 第 9 節）：

| 情況 | 結果 |
|---|---|
| 同瀏覽器同網址重開 | 進度、分數、28 節點、主題、光效、側板、草稿**會回來** |
| 同上 | `selectedId`、`activeTab`、`attempts`（記憶體 Map）、未送出勾選、批改解析**不會回來** |
| 換網址／網域 | 七個鍵全空，全部重來；本機 `127.0.0.1` 進度不會帶到上線新網域 |

### 14.3 實作

| 檔案 | 變動 |
|---|---|
| `app.js` | 新增 `SESSION_KEY='calculus-tree-session-v1'`（`schemaVersion:1`）、`BACKUP_KEYS` 並暴露給備份模組；`saveSession()`／`restoreSession()`；`renderLesson()` 開頭、`#quiz-form.onchange` 各掛一次保存；重設進度時清除並回到 learn。還原時校驗節點存在且可解鎖、分頁值合法、答案索引在該課題數與選項數範圍內 |
| `index.html` | 抽屜工具列下方新增「資料備份」區（匯出鈕、檔案選擇、狀態列）；於 `app.js` 後載入 `js/backup-ui.js` |
| `styles.css` | `.backup-actions` 與 `::file-selector-button` 樣式、錯誤訊息色 |
| `js/backup-ui.js`（新增） | 匯出 `{app, schemaVersion, exportedAt, keys}`；匯入前驗證 app／版本／結構／進度可解析／檔案 ≤5 MB、`window.confirm` 確認覆蓋、寫入失敗回滾、成功後重載 |
| 既有六個鍵、教材、`js/topic-packs.js`、`js/pack-ui.js`、35 個 DOM ID、狀態機核心 | **未動** |

備份檔以**原始字串**保存各鍵，匯入時逐鍵寫回；既有鍵各自已有容錯，這裡只做結構與進度的基本校驗，不重寫資料層。七個鍵：進度、學習包、工作階段、主題、光效、側板框、草稿。

### 14.4 R5 驗收數值（2026-11-10）

| 項目 | 結果 |
|---|---|
| `node --check`（`app.js`、`js/backup-ui.js`、`js/workspace.js`）／單元測試 | 通過／14/14、fail 0 |
| CSS 括號 | depth 0、bad 0 |
| 重開恢復 | `selectedId=graphs`、`activeTab=quiz`、`attempts=2`、未送出勾選 3 題全回來；已完成課的批改解析 `result=true`、10 則回饋 |
| 匯出 | `app=calculus-skill-tree`、`schemaVersion=1`、7 鍵（6 項有值）；實際下載 Blob 驗證檔名 `skill-tree-backup-2026-11-10.json`、1,097 bytes、內容可解析 |
| 匯入錯誤路徑 | 錯誤 app／版本 99／損壞進度／取消匯入，四種皆回明確訊息且**不改動既有資料** |
| 跨網址搬移 | 另一 origin 原本全空 → 匯入 7 鍵 → 重載後進度 1/1、28 節點、2 點亮、淺色、琥珀光效、側板 `300px`、草稿重繪 961 像素、作答卷 10 題與解析全回來 |
| 重設進度 | `started=false`、`selectedId=start`、`activeTab=learn`、`attempts=0`，session 回到乾淨空狀態 |
| 既有功能回歸 | 連線 117 段／31 接點／斜線 0、Fit `0.596`、縮放、13/13 資源可達；另跑既有 37 項回歸全綠 |
| 備份區可見性 | 抽屜展開後按鈕 `top=398`、`bottom=429`、`inView=true` |
| 瀏覽器錯誤 | **0**（A+ 28 項＋既有 37 項，兩套 CDP 腳本） |

### 14.5 缺陷閉環

| 現象 | 根因 | 修法 | 回歸 |
|---|---|---|---|
| 備份區落在抽屜最底，須捲動才看得到 | 新區塊排在「光效設定」之後 | 移到工具列下方、「功能介紹」之前 | `inView=true`，截圖可見標題、按鈕、檔名與狀態 |
| 驗證腳本在重設後才量連線，誤得 0 條 | 檢查順序錯，重設後只剩 Start 節點 | 先點 Start 再量 | 117 段／31 接點／斜線 0 |
| headless 下載不落地，誤判匯出失敗 | `Browser.setDownloadBehavior` 於 page session 無效 | 改攔截下載連結、以 `fetch` 讀回 Blob 內容驗證 | 檔名／1,097 bytes／app／版本／7 鍵全對（驗證工具調整，非產品缺陷） |

### 14.6 已知限制

- 匯入是**覆蓋式**，不與現有進度合併；已有確認對話與寫入失敗回滾，但選錯檔案仍會取代現有記錄。
- 備份檔不加密，內含草稿筆跡與個人設定，由使用者自行保管。
- 全新頁面載入時 `renderLesson()` 即寫入空的 session 鍵，故匯出時該鍵算 1 項有值。
- 介面匯入走 `window.confirm`；自動化實測走同一模組的內部函式並傳入已確認，邏輯相同。
- 跨越不同網域仍需使用者手動匯出／匯入；不會自動同步（屬 B 範圍）。
- 其餘限制同 10.4、13.7；答案仍在前端。**未發布、未部署、未對外分享。**

### 14.7 逐屏存證

- `%TEMP%\skill-tree-aplus-verify.cjs`（28 項）、`%TEMP%\skill-tree-layer-workspace-verify.cjs`（既有 37 項回歸）
- `%TEMP%\skill-tree-aplus-shots\`：`01-before-reload.png`、`02-after-reload.png`、`03-backup-ui.png`、`04-imported-other-origin.png`

---

## 15. 光效範圍、交卷門檻與答題回饋配色（2026-11-10）

### 15.1 需求

老闆一次給三項：

1. 「改變光效說的是改變 Start 以及以下所有點亮時的光效。」
2. 「答題那裡遞交的按鈕一定要做完才可以交，做完 10 題，從灰色變為有光效。」
3. 「提示題目錯誤要用紅色，正確用綠色。」

### 15.2 唯讀查證

| 項目 | 改前實況 |
|---|---|
| 光效範圍 | `--glow-rgb` 已是 `:root` 全域變數；`ignite-node`（所有 `.node`，含 `.node.start`）、`ignite-flash`（`::after`）、`ignite-line`（連線）皆讀它 → **技術上已套用到 Start 與全部節點**，缺的是文案沒講清楚，也沒有 Start 專屬的實測證據 |
| 交卷按鈕 | 只有 radio 的 `required` 與固定中性灰的 `.primary`；無 `disabled`、無作答進度、無狀態變化；`form.requestSubmit()` 可在未按按鈕時觸發 |
| 對錯配色 | `.option.correct` 用 `--lit`（青綠，不夠「綠」）、`.option.incorrect` 用 `--danger`（紅）；`.feedback` 完全無分色；`.result` 用 `--lit-soft` |

### 15.3 實作

| 檔案 | 變動 |
|---|---|
| `index.html` | 光效設定文案改為明說「Start 與其下所有技能節點點亮時的光芒顏色，連線掃光也一併跟著變」；提示列補上完整套用範圍 |
| `styles.css` | 新增 `--correct`／`--correct-soft`（淺色 `#2e9e63`、深色 `#4fc98a`）；`.primary.quiz-pending`（灰、停用）與 `.primary.quiz-ready`（綠底＋`--glow-rgb` 光暈）；`.quiz-progress`；選項框、`.feedback.correct`／`.incorrect`、`.feedback-detail`、`.result` 分色 |
| `app.js` | `answeredCount()`；`updateQuizSubmit()` 依作答數切換停用／啟用與 class、更新進度文字；`onchange` 即時更新；`onsubmit` 加第二道防線；feedback 依對錯加 `correct`／`incorrect` class，解析另包 `.feedback-detail` 保持一般文字色 |

按鈕用綠底而非整顆變成光效色：白光時白底白字不可讀，故以 `--correct` 作底、`rgba(var(--glow-rgb),…)` 作光暈，自訂光效仍然看得出來。題數以該課 `lesson.quiz.length` 為準（目前每課 10 題），不寫死。

**未動**：教材、答案、35 個既有 DOM ID、狀態機核心、七個 `localStorage` 鍵、連線走線、光效設定模組邏輯。

### 15.4 R5 驗收數值（2026-11-10）

| 項目 | 結果 |
|---|---|
| `node --check`／單元測試／CSS 括號 | 通過／14/14、fail 0／depth 0、bad 0 |
| 光效文案 | 明列 Start、所有技能節點、連線掃光 |
| 自訂光效 | 選琥珀後 `--glow-rgb=232,178,100`、`--ignite-core=rgba(232,178,100,.95)`、儲存 `#e8b264` |
| **Start 點亮** | `just-lit=true`、`::after` 背景 `rgb(232,178,100)`、`ignite-flash`＋`ignite-node`、2 條連線跑 `ignite-line` |
| **Start 以下節點** | 完成一課後該節點 `::after` 背景同為 `rgb(232,178,100)`、`ignite-flash` |
| 按鈕 0/10 | `disabled=true`、灰 `rgb(138,138,146)`、`opacity .5`、`box-shadow:none`、進度「全部作答後才能交卷」 |
| 按鈕 9/10 | 仍停用且灰；強送 `requestSubmit()` 後 `submitted=false`（防線有效） |
| 按鈕 10/10 | `disabled=false`、綠 `rgb(79,201,138)`、光暈 `rgba(232,178,100,.55)` 與 `.40`、`opacity 1`、進度「可以交卷了」 |
| 全對一課 | 10 個綠 feedback `rgb(79,201,138)`、正確選項綠框、總成績綠；解析 `rgb(230,230,232)` 維持一般文字色 |
| 全錯一課 | 10 個紅 feedback `rgb(224,101,95)`、錯誤選項紅框、正確答案綠框、`.result.retry` 紅 |
| 淺色主題 | 綠 `rgb(46,158,99)`、紅 `rgb(210,85,85)`、解析 `rgb(36,36,42)` |
| 既有回歸 | 連線 117 段／31 接點／斜線 0、`just-lit` 殘留 0、手機 390 無水平捲動、13/13 資源；另有 37 項舊腳本全綠 |
| 瀏覽器錯誤 | **0**（本輪 23 項＋既有 37 項） |

### 15.5 缺陷閉環

| 現象 | 根因 | 修法 | 回歸 |
|---|---|---|---|
| 按鈕 class 已切 `quiz-ready`，computed 仍讀到灰 | 切換瞬間讀到 0.25s 過渡的起始幀 | 驗證改於 450ms 後讀 | 綠底＋琥珀光暈、`opacity 1` |
| 按鈕截圖看不到按鈕 | 側板內容長，截圖時未按鈕捲入可視區 | 截圖前把 `#lesson` 捲到底 | 0/10 灰與 10/10 綠兩張對照明確 |
| 正確選項的綠會被勾選態灰底蓋過 | `.option:has(input:checked)` 特異性高於 `.option.correct` | 補 `.option.correct:has(input:checked)` 明確覆蓋 | 全錯課的正確答案仍為綠框 |

### 15.6 已知限制

- 「有光效」是綠底＋自訂光效色光暈，不是整顆按鈕變成光效色；理由如 15.3。
- 只有「提示行」染紅綠，解析文字保持一般色，避免整段染色影響閱讀。
- 交卷門檻取該課題數；若日後教材改成非 10 題，進度文字與門檻會自動跟著變。
- 其餘限制同 10.4、13.7、14.6；答案仍在前端。**未發布、未部署、未對外分享。**

### 15.7 逐屏存證

`%TEMP%\skill-tree-quiz-glow-verify.cjs`（23 項）；`%TEMP%\skill-tree-quiz-glow-shots\`：`01-start-glow.png`、`02-button-pending.png`、`03-button-ready.png`、`04-all-correct.png`、`05-all-wrong.png`、`06-light-colors.png`。

---

## 16. 全站教材改寫與方框換行（2026-11-15）

老闆指示「把其餘節點的教學更新，然後優化所有方框裡面的換行」，並附截圖顯示 05 節點公式被自動折行拆成 `平均變化率=[f(b)` 與 `−f(a)]/(b−a)`。

**範圍**：依 `BOOK-REFERENCE.md` 第 4 節對照表改寫 02–27 共 26 節點的 `intro` 與 `content`（含書本章節知識點、兩則標註來源的逐步例題）；保留 27 骨架、工作樹中另一批新增的「先用白話理解」區塊，以及既有 260 題題庫。`topic.json` 版本 4 → 5，`catalog.js`／ZIP 重建，英文目錄補 559 個 key（總 1,830）。

**方框換行**：27 個 `formula` 全改為明確 `\n` 分行（116 個 `<br>`），`example`／`tip` 同步整理；`.formula` 加 `white-space:nowrap` 保留 `<br>` 但禁止自動折行，字級 23 → 18px（手機 15px），`.example`／`.tip`／`.option` 補換行與斷字規則。中英過長行經兩輪共 25 處拆行／精簡。

**R5**：`node --check`、14/14 測試、CSS 括號 0、CDP 23 項、`BROWSER_ERRORS=0`、靜態資源 12/12；27／27 中英公式方框溢位 0、全部置中且不自動折行；英文模式 27 節點概念分頁漢字殘留 0；交卷門檻、批改、單擊開合、手機 390 無水平捲動皆正常。逐屏存證與完整驗收表見 `BOOK-REFERENCE.md` 9.1–9.3。

**限制**：題庫本輪保留（「教學更新」解讀為 `intro`＋`content`）；`styles.css` 與 `js/i18n-messages.js` 屬另一批未提交改動，依約只改內容不提交；工作樹中連線已被該批重構為母線式 43 條 path、0 中繼接點，第 10–13 節的 117 段／31 接點紀錄已過時，本輪未動連線。其餘限制同 10.4。**未發布、未部署、未對外分享。**

---

> 本文件前 9 節為設計階段產出，第 10 節為老闆放行 R4 後的實作與驗收紀錄，第 11 節為連線改版，第 12 節為置中調整，第 13 節為逐層接續與學習工作區，第 14 節為 A+ 資料保存補強，第 15 節為光效範圍與答題回饋，第 16 節為教材改寫與方框換行。**未發布、未部署、未對外分享。**
