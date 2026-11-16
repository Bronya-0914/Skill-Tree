# 書籍長期參考資料：3000 Solved Problems in Calculus

<a id="top"></a>

---

## 文件狀態與現況對照 · Document Status & Current-State Comparison

> **狀態**：`historical` / `local-only` — 本文件為**歷史紀錄，非現況規格**；原始標題與所有原始段落皆保留，僅於標題之後附加本對照區塊。
> **語言切換／雙語摘要**：[繁體中文摘要](#zh-summary) ｜ [English Summary](#en-summary) ｜ [文件導覽（繁中＋English）](docs/README.md)。本區塊並列繁中 4 行與 English 4 行摘要；正文為繁體中文，無獨立 `.en.md`。
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **文件性質**：書籍來源、版權宣告、章節對應與教材改寫進度之**歷史紀錄**；含版權 OCR 書籍索引，屬 `local-only`，不得隨靜態站公開。
> **對應本機 HEAD**：`8d7b4cb`（2026-11-16，分支 `main`）；本機無 remote、未 push、無 release tag；線上 GitHub Pages 為較舊版本。
> **現況來源**：[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與根目錄 [`README.md`](README.md)；逐次提交見 [`docs/CHANGELOG.md`](docs/CHANGELOG.md)；安全邊界見 [`docs/SECURITY.md`](docs/SECURITY.md)。

<a id="zh-summary"></a>

### 繁體中文摘要

本文件為《3000 Solved Problems in Calculus》（Schaum's Outline Series／Elliot Mendelson／McGraw-Hill 1988）之書籍長期參考索引，建立於 2026-11-12，並記錄 2026-11-15 全站教材改寫。
內容含書目與版權宣告、46 章清單、27 個學習節點與書中章節對應、OCR 文字層失真說明，以及改寫進度與 R5 驗收紀錄。
文中 `14/14` 測試、1,830 個 i18n key、35 個 DOM ID、七個 `localStorage` 鍵、117 段連線、「`styles.css`／`js/i18n-messages.js` 未提交」、「未發布、未部署」等，皆為量測當日值，現已過時。
現況請以本區塊「現況對照表」、`docs/ARCHITECTURE.md` 與 `README.md` 為準；本文件保留 46 章清單與版權宣告，僅供追溯，不作現況規格。

<a id="en-summary"></a>

### English Summary

This document is the long-term reference index for *3000 Solved Problems in Calculus* (Schaum's Outline Series / Elliot Mendelson / McGraw-Hill 1988), created 2026-11-12, with the full courseware rewrite logged on 2026-11-15.
It holds the bibliography and copyright notice, a 46-chapter list, the mapping of 27 learning nodes to book chapters, OCR text-layer artefacts, and the rewrite log with R5 acceptance results.
Figures such as `14/14` tests, 1,830 i18n keys, 35 DOM IDs, seven `localStorage` keys, 117 connection segments, "`styles.css` / `js/i18n-messages.js` uncommitted", and "not published / not deployed" are measurement-day values and are now stale.
For the current state refer to the comparison table below, `docs/ARCHITECTURE.md` and `README.md`; the 46-chapter list and copyright notice are preserved for traceability only, not as a current specification.

<details><summary>目錄</summary>

**本文件既有章節（原樣保留，未改動）**

- 第 0 節　已凍結的編寫決策（老闆 2026-11-12）
- 第 1 節　書目與讀取實況
- 第 2 節　檔案結構與查閱方式
- 第 3 節　46 章清單（頁碼為 PDF 頁序）
- 第 4 節　知識點與現有 27 節點對應（改寫時的主要依據）
- 第 5 節　題目格式與取用規則
- 第 6 節　文字層品質與風險（改寫前必讀）
- 第 7 節　後續動工流程（已於 2026-11-15 完成）
- 第 8 節　已知限制
- 第 9 節　改寫進度（9.1 全站改寫／9.2 所有方框的換行優化／9.3 R5 驗收／9.4 本輪已知限制）

</details>

### 現況對照表（舊記載 → 現況）

> 「舊記載」為本文件與其他歷史文件於量測當日所載數值；「現況」為本機 HEAD `8d7b4cb` 之實測值。歷史數值**不得引用為現況**。

| 項目 | 舊記載（量測當日） | 現況（HEAD `8d7b4cb`） |
|---|---|---|
| 單元測試 | `14/14` | **20/20**（`node --test tests/*.test.cjs`） |
| 靜態資源 | `11/11`、`12/12`、`13/13` | **13 個靜態資源**（1 CSS ＋ 12 JS） |
| DOM ID | 34／35／44 | **53** |
| `localStorage` 鍵 | 3／6／7 鍵 | **8 鍵**（其中 5 個帶 `schemaVersion:1`） |
| 連線 | 117 段／31 個中繼接點 | **43 條 `.connection` path、0 relay** |
| 答題框互動 | `resize:both`／雙擊還原／第三個「草稿紙」分頁 | **8 方向自訂把手**／練習分頁內草稿側欄／**單擊開合** |
| `topic.version` | 1 → 2 → 3 | **1 → 2 → 3 → 5** |
| i18n 目錄 | 1,830 keys | **1,831 keys** |
| Fit 比例 | `Fit scale=0.596` | 現行 `bounds = 3069 × 1998`（`minX:40`、`maxX:3045`、`maxY:1974`） |
| 部署狀態 | 「未發布、未部署、未對外分享」 | **GitHub Pages 已 200，但版本較舊**（線上教材 v1／雙擊開合；本機 v5／單擊開合） |
| 未提交改動 | 「`styles.css`／`js/i18n-messages.js` 未提交」 | **HEAD `8d7b4cb` 已提交、工作樹乾淨** |
| 第三方 `fflate` | `0.8.3`（`PACK_FORMAT.md`） | **`js/vendor/fflate.js` 內查無版本字串**，無法核對 |
| 本文件 §7 流程 | 「尚未執行」、`version` 由 1 升 2 | **已於 2026-11-15 完成**；`topic.version` 最終為 **5** |
| 本文件 §9 記載 | 1,830 keys／14/14／35 個 DOM ID／七個鍵／「未提交」 | **1,831 keys／20/20／53 IDs／8 鍵／已於 HEAD `8d7b4cb` 提交、工作樹乾淨** |
| `references/` 書籍全文 | 「不得隨靜態站發布」 | 已被 Git 追蹤（48 個 txt）、無 `.gitignore`；線上目前 `404`，惟本機設定未保證排除 |

### 如何使用本歷史文件

- 本文件所有數值（測試數、資源數、DOM ID、連線段數、`localStorage` 鍵數、bounds、i18n key 數、版本號等）**僅代表量測當日與對應 commit**，反映該輪驗收情境，不代表本機現況。
- **現況以 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與根目錄 [`README.md`](README.md) 為準**；逐次提交與驗證數值見 [`docs/CHANGELOG.md`](docs/CHANGELOG.md)。
- 本文件保留原始段落以供追溯決策與驗收歷程；本文出現之「尚未執行／未提交／未發布／未部署」等字樣，請一律以上表「現況」欄判讀。
- 本專案不是安全邊界、270 個答案在前端、`references/` 版權書籍不得公開，詳 [`docs/SECURITY.md`](docs/SECURITY.md)；46 章清單與版權宣告保留不動。

[↑ 回到頂部 · Back to top](#top)

---

> **狀態：2026-11-12 建立；2026-11-15 全數 27 節點教學內文改寫完成、所有方框換行優化完成。未發布上網。**
> 原件：Schaum's *3000 Solved Problems in Calculus* PDF（本機參考用，不隨專案發布）
> 用途：作為本專案的長期知識來源，供後續依 `PACK_FORMAT.md` 改寫 27 個學習節點的內文與題庫。
> 版權：Schaum's Outline Series，Elliot Mendelson，McGraw-Hill 1988。全文僅存本機專案供學習與教材編寫，**不隨網站發布、不上傳、不對外分享**。

---

## 0. 已凍結的編寫決策（老闆 2026-11-12）

| # | 決策 |
|---|---|
| 1 | 交付「內文＋題庫」：每節點 `intro`／`content` ＋ 10 題四選一 ＋ 逐題解析 ＋ `passCount` |
| 2 | **改寫現有 27 個節點**，不另開主題、不新增節點 |
| 3 | 繁體中文，並同步 `js/i18n-messages.js` 英文目錄 |
| 4 | 按知識點切，不受書的章節限制，保留分支先修 |
| 5 | **保留 27 骨架**：ID、標題、數量、先修、10 題、`passCount=7` 全留，只換內文與題目 |

2026-11-15 已完成 02–27 的教學內文改寫；**既有 260 題題庫本輪保留**（詳第 9 節「範圍解讀」），保留骨架的五項決策其餘皆遵守。

---

## 1. 書目與讀取實況

| 項目 | 數值 |
|---|---|
| 檔名／大小 | `3000-solved-problems-in-calculus.pdf`／7.6 MB |
| 頁數 | **465**（PDF 檔案頁序，1-based） |
| 結構 | Contents、46 章、Index；共 79 個書籤 |
| 作者／出版 | Elliot Mendelson, Ph.D.／Schaum's Outline Series, McGraw-Hill, 1988 |
| 文字層 | **868,739 字元**；全文檔 913,123 bytes |
| 無文字頁 | 2 頁（第 1 頁封面為純圖片、第 7 頁刻意留白） |
| 分章檔 | 46 個，合計約 1.9 MB（含全文與 `chapters.json`） |

**讀取方式**：官方 PDF 讀取工具因偵測到掃描封面而要求 PaddleOCR／Tesseract，本機未安裝，回傳 `exit 4 / --ocr needs PaddleOCR or Tesseract on PATH`。改以本機既有的 PyMuPDF 讀取 PDF **內建文字層**（非 OCR）：465 頁中 463 頁有文字，故可完整取用。

**頁碼約定**：本文件與分章檔一律用 **PDF 檔案頁序**；書本印刷頁碼不同（印刷第 1 頁約在 PDF 第 8 頁）。分章檔內每段前有 `=== PDF PAGE n ===` 標記，可據此回原件核對。

---

## 2. 檔案結構與查閱方式

```text
BOOK-REFERENCE.md                      本索引
references/3000-solved-problems/
├── book-full.txt                      全文，含 PDF 頁標記
├── chapters.json                      46 章的編號／標題／頁範圍／檔名／字數
└── chapters/
    ├── ch01-inequalities.txt
    ├── ch02-absolute-value.txt
    └── … ch46-differential-equations.txt
```

查閱順序：查第 3 節章表 → 讀對應 `chapters/chNN-*.txt` → 依 `=== PDF PAGE n ===` 回原 PDF 核對公式與圖形。

---

## 3. 46 章清單（頁碼為 PDF 頁序）

| 章 | 標題 | 頁 | 字數 | 章 | 標題 | 頁 | 字數 |
|---|---|---|---|---|---|---|---|
| 1 | Inequalities | 8–11 | 9,435 | 24 | Exponential Functions | 202–214 | 16,475 |
| 2 | Absolute Value | 12–15 | 7,483 | 25 | L'hôpital's Rule | 215–221 | 4,270 |
| 3 | Lines | 16–25 | 27,961 | 26 | Exponential Growth and Decay | 222–226 | 16,635 |
| 4 | Circles | 26–29 | 11,869 | 27 | Inverse Trigonometric Functions | 227–238 | 13,670 |
| 5 | Functions and Their Graphs | 30–41 | 20,491 | 28 | Integration by Parts | 239–244 | 10,154 |
| 6 | Limits | 42–49 | 12,772 | 29 | Trigonometric Integrands and Substitutions | 245–251 | 7,803 |
| 7 | Continuity | 50–55 | 10,492 | 30 | Integration of Rational Functions: Partial Fractions | 252–259 | 9,708 |
| 8 | The Derivative | 56–62 | 13,389 | 31 | Integrals for Surface Area, Work, Centroids | 260–266 | 9,338 |
| 9 | The Chain Rule | 63–68 | 8,216 | 32 | Improper Integrals | 267–274 | 6,934 |
| 10 | Trigonometric Functions and Their Derivatives | 69–75 | 11,098 | 33 | Planar Vectors | 275–280 | 11,101 |
| 11 | Rolle's Theorem, MVT, Sign of the Derivative | 76–81 | 14,620 | 34 | Parametric Equations, Vector Functions, Curvilinear Motion | 281–295 | 30,037 |
| 12 | Higher-Order Derivatives and Implicit Differentiation | 82–87 | 12,865 | 35 | Polar Coordinates | 296–311 | 26,815 |
| 13 | Maxima and Minima | 88–94 | 18,664 | 36 | Infinite Sequences | 312–318 | 5,354 |
| 14 | Related Rates | 95–106 | 31,597 | 37 | Infinite Series | 319–332 | 22,511 |
| 15 | Curve Sketching (Graphs) | 107–124 | 30,743 | 38 | Power Series | 333–346 | 22,303 |
| 16 | Applied Maximum and Minimum Problems | 125–139 | 44,168 | 39 | Taylor and Maclaurin Series | 347–353 | 10,739 |
| 17 | Rectilinear Motion | 140–144 | 16,228 | 40 | Vectors in Space. Lines and Planes | 354–367 | 36,133 |
| 18 | Approximation by Differentials | 145–148 | 9,467 | 41 | Functions of Several Variables | 368–382 | 26,825 |
| 19 | Antiderivatives (Indefinite Integrals) | 149–158 | 20,779 | 42 | Partial Derivatives | 383–398 | 31,993 |
| 20 | The Definite Integral and the FTC | 159–169 | 15,961 | 43 | Directional Derivatives and the Gradient. Extreme Values | 399–411 | 39,902 |
| 21 | Area and Arc Length | 170–179 | 15,325 | 44 | Multiple Integrals and Their Applications | 412–431 | 22,426 |
| 22 | Volume | 180–191 | 19,993 | 45 | Vector Functions in Space. Divergence and Curl. Line Integrals | 432–437 | 12,192 |
| 23 | The Natural Logarithm | 192–201 | 10,262 | 46 | Differential Equations | 438–449 | 24,652 |

Contents 在 PDF 4–5 頁、To the Student 第 6 頁、Index 450–462 頁。

---

## 4. 知識點與現有 27 節點對應（改寫時的主要依據）

依老闆「按知識點切、保留 27 骨架」的決策，書中章節對應到既有節點如下；括號為可補充的次要章。

| 節點 | 現有標題 | 主要書中章節 | 補充章 |
|---|---|---|---|
| 01 | 函數、定義域與值域 | 5 | 1、2 |
| 02 | 直線與二次函數 | 3、5 | 4 |
| 03 | 三角函數與弧度 | 10 | 27、29 |
| 04 | 指數與對數 | 23、24 | 26 |
| 05 | 平均與瞬間變化率 | 8、14 | 17 |
| 06 | 極限與連續 | 6、7 | 25 |
| 07 | 基本求導與高階導數 | 8、12 | — |
| 08 | 乘積與商法則 | 8、9 | 10 |
| 09 | 三角、指數與對數求導 | 10、23、24 | 27 |
| 10 | 複合函數與鏈式法則 | 9 | 12 |
| 11 | 隱函數微分 | 12 | 42 |
| 12 | 臨界點與極值判別 | 13 | 11 |
| 13 | 最佳化建模與應用 | 16 | 13、43 |
| 14 | 多變量函數與曲面 | 41 | 40 |
| 15 | 一階偏導數 | 42 | — |
| 16 | 高階與隱式偏導數 | 42 | 12 |
| 17 | 多變量鏈式法則 | 42、43 | 9 |
| 18 | 不定積分與冪次法則 | 19 | — |
| 19 | 指數、對數與三角積分 | 19、23、24 | 29 |
| 20 | 定積分與微積分基本定理 | 20 | — |
| 21 | 積分性質與奇偶對稱 | 20、21 | 32 |
| 22 | 換元積分與反向鏈式法則 | 9、19 | 28、29 |
| 23 | 積分應用與初始條件 | 21、22、31 | 46 |
| 24 | 微分與線性近似 | 18 | 8 |
| 25 | Taylor 多項式與二階近似 | 39 | 38、11 |
| 26 | Newton 求根法 | 18、8（書無專章，需自編） | — |
| 27 | Newton 最佳化與結果判別 | 13、43（書無專章，需自編） | — |

**書有而樹無的知識點**（因骨架固定 27，僅作為例題與解析的補充題源，不新增節點）：不等式與絕對值（1、2）、圓（4）、Rolle／均值定理（11）、相關變化率（14、17）、曲線描繪（15）、直線運動（17）、分部積分（28）、部分分式（30）、廣義積分（32）、平面與空間向量（33、40）、參數方程與極座標（34、35）、序列與級數（36–38）、多重積分（44）、向量場與線積分（45）、微分方程（46）。

---

## 5. 題目格式與取用規則

- 書中題號為 `章號.題號`，例如 `5.1`–`5.19`；每章開頭常有一句 `In Problems 5.1-5.19, …` 的總說明，其後逐題給題幹與完整解答。
- 多數題目直接附解法（`Answer` 或敘述式推導），並引用 `Fig. 5-1` 之類圖號。
- 全文以 `\b\d{1,2}\.\d{1,3}\b` 可匹配約 **9,010** 處，但混有頁眉、圖號、交叉引用與小數，**不代表 3,000 題**，不可用來計數。
- 改寫成四選一時：從章節挑「觀念判斷／計算／應用」三類自行編題與選項；`answer` 依新選項順序重排，`explanation` 用繁體中文重寫，不得直接搬文字層。

---

## 6. 文字層品質與風險（改寫前必讀）

這份 PDF 是掃描後附 OCR 文字層，**不是原生排版文字**，已確認的失真：

| 現象 | 實例 |
|---|---|
| `*` 代替 `x` | `3 + 2*<7`、`*2s4` |
| 不等號錯認 | `SL`／`s` 代表 `≤`，`^` 代表 `≥` |
| 根號錯認 | `V4-x2`、`\/4 — y` 代表 `√` |
| 減號與長破折號混用 | `4 — x2` |
| 章標題首字被切 | `HAPTER 5`、`nequalities` |
| 題幹遺失或與解答錯位 | 第 5 章的 5.2–5.5 題幹在文字層中被吃掉 |
| 圖形只剩圖號 | `Fig. 5-1`，圖內容需看原頁 |

**因此：不得直接複製文字層作為教材內容。** 凡涉及公式、數值、單位、題幹，必須回原 PDF 頁面核對（可用 PDF 工具的 `-f png --dpi 150` 渲染該頁後目視確認）；引用時以 `=== PDF PAGE n ===` 標記定位。

---

## 7. 後續動工流程（已於 2026-11-15 完成）

1. 依第 4 節對照表，為每個既有節點挑 1–3 個書中章節。
2. 讀 `chapters/chNN-*.txt`，挑概念與例題；關鍵公式回原頁核對。
3. 依 `PACK_FORMAT.md` 寫 `intro`／`content`／10 題四選一／逐題解析，保留 `id`、`title`、`parents`、`passCount=7`。
4. 同步 `js/i18n-messages.js` 英文 key 與譯文；`topic.json` 的 `version` 由 1 升 2；執行 `node scripts/build-learning-packs.cjs` 重建 `catalog.js` 與 ZIP。
5. R5：`node --test tests/topic-packs.test.cjs`（硬斷言 27 節點／270 題）、CDP 逐屏（概念、練習、中英切換、點亮）、`BROWSER_ERRORS=0`。
6. 本機 Git 提交；**不發布上網**。

> **補記（2026-11-16 對照）**：本節六個步驟已於 2026-11-15 全數完成；`topic.json` 版本最終為 `5`（非本節步驟 4 所寫之 2），英文目錄現為 1,831 個 key、測試為 20/20，且 `styles.css` 與 `js/i18n-messages.js` 已於 HEAD `8d7b4cb` 提交、工作樹乾淨。實際進度與數值見第 9 節、檔首「現況對照表」與 `docs/CHANGELOG.md`；本節步驟保留為原規劃紀錄，未刪除。

---

## 8. 已知限制

- 本輪僅建立書籍長期資料，**未改寫任何教材節點**，未動 `learning-packs/`、未動工作樹中其他未提交改動（i18n、tree-layout 等）。
- 全文檔覆蓋 463/465 頁；第 1 頁封面與第 7 頁空白無文字層，圖形內容不在文字檔內。
- 書籍受版權保護，資料僅存本機；若日後網站要上線，`references/` 與本索引**不得隨靜態站發布**（目前 `static.directory="."`，發布前必須排除）。
- 其餘專案限制見 `DESIGN-v2.md`。**未發布、未部署、未對外分享。**

---

## 9. 改寫進度

| 節點 | 狀態 | 採用來源 | 備註 |
|---|---|---|---|
| 01 · 函數、定義域與值域 | **已完成樣板**（2026-11-12，2026-11-13 公式排版調整） | 第 5 章 5.1–5.5、5.20–5.26、5.28、5.53、5.57–5.64、5.70 | 9 個 content 區塊、10 題四選一、答案分布 2／2／3／3；公式已回原 PDF 第 30、34 頁核對，並改為 5 行明確換行、逐行置中 |
| 02–27 | **已完成**（2026-11-15） | 見第 4 節對照表 | 26 節點改寫 `intro` ＋ `content`，保留 ID／標題／先修／10 題／`passCount`；每節點兩則標註書本章節的逐步例題，公式明確分行 |

**樣板連帶異動**：`topic.json` 版本 1 → 3（2026-11-12 樣板 +1、2026-11-13 公式分行 +1）；`catalog.js` 與 ZIP 由 `build-learning-packs.cjs` 重建；`tests/topic-packs.test.cjs` 把所有硬編碼版本常數改為 `sample.topic.version + 1`，避免教材升版後測試失效（當日 14/14 通過；現況 20/20，見檔首「現況對照表」）。

**公式排版（2026-11-13）**：原本 4 個對應擠在單一字串、以 `　｜　` 分隔，瀏覽器自動折行造成錯位。改為明確 `\n` 分成 5 行（一行「定義域 → 值域」標題，之後每行一個對應），每行由既有 `.formula{text-align:center}` 置中；實測 4 個 `<br>`、`text-align:center`、5 行皆單行不折，英文目錄同步重產。

**英文目錄（2026-11-12 補正）**：`js/i18n.js` 以**整段中文原文當 key** 查 `window.SkillTreeEnglish`，查不到就保留中文；更換教材文字後舊 key 全部失效。另外 `content` 的 `\n` 會被轉成 `<br>`，每一行變成獨立文字節點，所以整段 key 也無法覆蓋例題的逐行文字。已在 `js/i18n-messages.js` 以附加 `Object.assign` 區塊補上 **50 個 key**（39 個整段＋11 個逐行，2026-11-13 公式分行後重新產生），既有 1,139 個 key 未動；實測 `lang=en` 時概念分頁、題目、選項、批改解析皆無漢字殘留，`BROWSER_ERRORS=0`。

### 9.1 全站改寫（2026-11-15）

**觸發**：老闆看過 01 樣板後指示「把其餘節點的教學更新，然後優化所有方框裡面的換行」，並附截圖顯示 05 節點的公式被瀏覽器自動折行拆成 `平均變化率=[f(b)` 與 `−f(a)]/(b−a)`，語意斷裂。

**改寫範圍（26 節點）**：依第 4 節對照表，每個節點重寫 `intro`（全部標明《3000 Solved Problems in Calculus》與採用章節）與 `content`：保留工作樹中另一批新增的「先用白話理解」兩區塊，其後為「進一步理解」知識點段、明確分行的公式、補充段落、「逐步例題」兩則（標「原書第 N 章」，少數標精確題號如 8.1）、以及提示。第 26、27 節點書中無專章，依第 18／8 章切線近似與第 13／43 章極值判別延伸整理，並在內文誠實標註「延伸整理」。書籍文字層為 OCR 產物（`*` 代 `x`、`V` 代 `√`、題幹缺字），因此**所有公式與數值以標準數學為準重寫，不直接抄錄文字層**；01 樣板的 5.3／5.25／5.64 則已回原 PDF 第 30、34 頁核對。

**範圍解讀（與第 0 節決策 1 的差異）**：老闆本輪用語是「教學更新」，而專案中「學習部分」指 `intro` ＋ `content[]`（概念與例題分頁），`questions[]` 屬「練習挑戰」。既有 260 題已有完整英文目錄、答案分布與驗證紀錄，故本輪**保留題庫未換**。若老闆意指連 260 題也要改成書本導向，須另開一輪並同步重寫英文題庫。

**連帶異動**：`topic.json` 版本 4 → 5；`catalog.js` 與 ZIP 由 `build-learning-packs.cjs` 重建；`js/i18n-messages.js` 以附加 `Object.assign` 區塊補 **559 個 key**（含整段＋逐行＋白話段落整段），既有 1,272 個 key 未動，目錄總計 1,830 個 key（當日紀錄；現況 1,831 個）。教材骨架、35 個 DOM ID（現況 53 個）、狀態機、七個 `localStorage` 鍵（現況 8 鍵）全未動；括號內現況值見檔首「現況對照表」。

### 9.2 所有方框的換行優化

原況是 26 個 `formula` 把多條公式擠在單一字串、以「；」分隔，靠瀏覽器自動折行，才會切斷式子。改法：

- 27 個 `formula` 全部改成明確 `\n` 分行，一行一式，共 **116 個 `<br>`**；`example` 與 `tip` 同步整理為明確分行（例題共 169 個 `<br>`）。
- `styles.css`：`.formula` 加 `white-space:nowrap`（保留 `<br>` 分行但禁止自動折行）、`overflow-x:auto`，字級 23px → 18px，手機 15px；`.example`／`.tip` 加 `line-height` 與 `word-break`；`.option` 加 `min-width:0` 與 `overflow-wrap`，避免長選項擠出方框。
- 中英逐行寬度以 CDP 實測，先後兩輪共精簡 25 行過長文字（中文拆行、英文改寫），最終**中英 27 個公式方框溢位皆為 0**。

### 9.3 R5 驗收（2026-11-15）

| 項目 | 結果 |
|---|---|
| 靜態 | `node --check` 通過；單元測試 14/14（當日紀錄；現況 20/20）；CSS 括號 depth 0／bad 0；英文目錄靜態掃描 **0 個未翻譯字串** |
| 教材 | catalog 27 節點／270 題／版本 5；27 個 `intro` 皆含書名；27 個 `body` 皆含 `<br>` |
| 公式（中文） | 27／27 方框明確分行、全部 `text-align:center`、`white-space:nowrap`、**最大溢位 0px** |
| 公式（英文） | 27／27 方框**溢位 0**、概念分頁**漢字殘留 0**；練習分頁與批改解析亦無漢字 |
| 流程 | 交卷鈕 10/10 由灰轉綠、批改 10 則解析；單擊背景關閉／單擊節點開啟；`lang` 切回中文正常 |
| 手機 390 | 公式 15px、無溢位、`docWidth = innerWidth = 390`、無水平捲動 |
| 瀏覽器 | 靜態資源 12 個腳本、失敗 0；`BROWSER_ERRORS=0`；CDP **23 項** |
| 存證 | `%TEMP%\skill-tree-book\lessons-v2\shots\`：`01-rates-zh.png`、`02-taylor-zh.png`、`03-rates-en.png`、`04-english-graded.png`、`05-mobile-rates.png` |

### 9.4 本輪已知限制

- **題庫未換**（見 9.1 範圍解讀）；第 0 節決策 1 的「內文＋題庫」在 01 樣板已完整實現，02–27 只做內文。
- `styles.css` 與 `js/i18n-messages.js` 已於 HEAD `8d7b4cb` 提交、`git status` 乾淨、`git ls-files` 含兩檔（本段原記「另一批未提交改動」「換電腦會消失」為當日記載，現已過時）。方框排版與 559 個英文 key 現已納入版本控制；現況見檔首「現況對照表」與 `docs/CHANGELOG.md`。
- **連線紀錄已過時**：`app.js` 的連線已重寫成「母線＋分支」正交走線（第 132–154 行），已無 `connectionSegments()`／`buildLaneMap()`／`.relay`。實測現況是 **43 條 `.connection` path、0 個中繼接點、斜線 0**；`DESIGN-v2.md` 第 10–13 節所載「117 段／31 接點」為歷史值，已過時（本段原寫「本文第 10–13 節」係指該檔，「另一批未提交改動」現已於 HEAD `8d7b4cb` 提交）。本輪未動連線，僅如實記錄。
- 純數學式（不含漢字）不會被 i18n 查表翻譯，仍保留原符號與全形標點；不影響閱讀。
- 其餘限制同第 8 節。部署狀態見檔首「現況對照表」（GitHub Pages 已 200，惟版本較舊）；本段原寫「未發布、未部署、未對外分享」為當日記載，現已過時。
