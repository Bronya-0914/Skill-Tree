# 多使用者架構評估（R0–R2 設計產出，未實作）

<a id="top"></a>

---

## 文件狀態與現況對照 · Document Status & Current-State Comparison

> **狀態**：`historical` — 本文件為**架構評估與決策歷史紀錄，非現況規格**；原始標題與所有原始段落（含 A／B／C 評估與決策）皆保留，僅於標題之後附加本對照區塊並訂正少數過時字串。
> **語言切換／雙語摘要**：[繁體中文摘要](#zh-summary) ｜ [English Summary](#en-summary) ｜ [文件導覽（繁中＋English）](docs/README.md)。本區塊並列繁中 4 行與 English 4 行摘要；正文為繁體中文，無獨立 `.en.md`。
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **文件性質**：R0–R2 設計產出，**方案 B／C 從未實作**；含 A 模式持久性實測與 A+ 補強摘要，屬 `historical`。
> **對應本機 HEAD**：`8d7b4cb`（2026-11-16，分支 `main`）；本文件之基準提交為 `bdd4a10`（2026-11-10），兩者不同，請勿混淆。本機無 remote、未 push、無 release tag；線上 GitHub Pages 為較舊版本。
> **現況來源**：[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與根目錄 [`README.md`](README.md)；逐次提交見 [`docs/CHANGELOG.md`](docs/CHANGELOG.md)；安全邊界見 [`docs/SECURITY.md`](docs/SECURITY.md)。

<a id="zh-summary"></a>

### 繁體中文摘要

本文件為「多使用者架構評估（R0–R2 設計產出，未實作）」，建立於 2026-11-10，記錄 A／B／C 三方案評估、R0–R2 設計、風險登記、A 模式持久性實測與 A+ 補強摘要。
核心結論「純前端＋雲端資料庫做不到答案保密」仍然成立；惟 B／C 的 `server/`、API 合約與帳號同步**從未實作**，不得視為現有功能。
文中「六個 `localStorage` 鍵」「三個 `schemaVersion` 鍵」「七個鍵」「117 段連線」「35 個既有 DOM ID」等量測當日值已過時；現況為 8 鍵（5 個帶 `schemaVersion:1`）、43 條 `.connection` path、53 IDs。
A／B／C 評估與決策、第 9 節實測數據全數保留供追溯；現況以 `docs/ARCHITECTURE.md` 與 `README.md` 為準，歷史數值一律以本區塊「現況對照表」判讀。

<a id="en-summary"></a>

### English Summary

This document, "Multi-User Architecture Assessment (R0–R2 design output, not implemented)", was created 2026-11-10 and records the A/B/C evaluation, R0–R2 design, risk register, A-mode persistence measurements and the A+ hardening summary.
Its core conclusion — "pure front-end + cloud database cannot keep answers secret" — still holds; however the B/C `server/`, API contracts and account sync were **never implemented** and must not be read as existing features.
Measurement-day figures such as "six `localStorage` keys", "three `schemaVersion` keys", "seven keys", "117 connection segments" and "35 existing DOM IDs" are stale; the current state is 8 keys (5 with `schemaVersion:1`), 43 `.connection` paths and 53 IDs.
The A/B/C evaluation and decisions and all §9 measurements are preserved for traceability; for the current state refer to `docs/ARCHITECTURE.md` and `README.md`, reading every historical figure through the comparison table below.

<details><summary>目錄</summary>

**本文件既有章節（原樣保留，未改動）**

- 第 0 節　結論與建議（0.1 老闆決策 2026-11-10 09:54）
- 第 1 節　現況（唯讀查證，2026-11-10）
- 第 2 節　R0 需求與範圍凍結
- 第 3 節　R1 技術可行性與風險核實（3.1 已查證的平台限制／3.2 風險登記）
- 第 4 節　R2 架構設計（4.1 三方案比較／4.2 建議分層目錄／4.3 資料模型／4.4 狀態機／4.5 儲存格式與遷移／4.6 API 合約／4.7 決策紀錄）
- 第 5 節　變更控制：影響範圍（尚未動工）
- 第 6 節　工項拆解與關卡
- 第 7 節　待老闆裁示
- 第 8 節　本文件邊界與已知限制
- 第 9 節　A 模式資料持久性實測（9.1 方法／9.2 重開後會回來的／9.3 重開後不會回來的／9.4 換網址／換網域／9.5 對 A 的影響與可選補強／9.6 A+ 實作摘要）

</details>

### 現況對照表（舊記載 → 現況）

> 「舊記載」為本文件（基準 `bdd4a10` 起之各輪）於量測當日所載數值；「現況」為本機 HEAD `8d7b4cb` 之實測值。歷史數值**不得引用為現況**。

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
| 本文件 §1／§4.3／§9.4 | 「35 個既有 DOM ID」「六個 `localStorage` 鍵」「三個 `schemaVersion` 鍵」「六個鍵全部 `null`」 | **53 IDs／8 鍵／5 個帶 `schemaVersion:1`／八個鍵全部 `null`** |
| 本文件 §9.6 | 「匯出七個鍵」「117 段連線全數還原」 | **匯出 8 鍵／43 條 `.connection` path（0 relay）全數還原** |
| 本文件方案 B／C | `server/`、`cloud.js`、API 合約、帳號同步、`owner_user_id` | **從未實作**；現況仍純前端、無後端、無帳號、無伺服端批改、無資料隔離 |
| 本文件 §8／§9.5 | 「未發布、未部署」「是否授權上線仍待指示」 | **GitHub Pages 已 200，惟版本較舊**；本機仍未 push／未設 remote，發布仍需明確授權 |

### 如何使用本歷史文件

- 本文件所有數值（`localStorage` 鍵數、`schemaVersion` 鍵數、DOM ID、連線段數、CDP 項數、961 像素草稿重繪、11 項檢查等）**僅代表量測當日與對應 commit**，反映該輪實測情境，不代表本機現況。
- A／B／C 評估、R0–R2 設計、`server/`／API 合約／`cloud.js` 等目錄為**未實作之設計**；本專案現況仍是純前端、零後端、答案在前端，詳 [`docs/SECURITY.md`](docs/SECURITY.md)。
- **現況以 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與根目錄 [`README.md`](README.md) 為準**；逐次提交與驗證數值見 [`docs/CHANGELOG.md`](docs/CHANGELOG.md)。
- 本文件保留原始段落以供追溯決策與評估歷程；本文出現之「六／七個鍵」「117 段」「未發布」等字樣，請一律以上表「現況」欄判讀。

[↑ 回到頂部 · Back to top](#top)

---

> **狀態：架構評估文件。老闆 2026-11-10 09:54 決定「先做 A」，隨後另選 A+ 補強並已實作（見 `DESIGN-v2.md` 第 14 節）。本文件本身仍為評估；全程未開通任何雲端服務、未發布上網、未產生分享連結。**
> 日期：2026-11-10　基準提交：`bdd4a10`　工作空間：`<repo-root>`
> 本文件為內部文件；若日後維持 `js/hosting.json` 的 `static.directory="."`，發布前必須排除本檔。

---

## 0. 結論與建議

「多於一人使用」有三種截然不同的意思，代價差一個數量級：

| 模式 | 說明 | 需要後端 | 需要帳號 | 對現有程式 |
|---|---|---|---|---|
| **A 各自獨立** | 多人同時上線，每人自己的進度與草稿，互不干擾 | 否 | 否 | **零改動** |
| **B 帳號同步** | 登入後進度跨裝置同步、可辨識使用者 | 是 | 是 | 大幅改動 |
| **C 角色與保密** | 出題者／答題者、答案留後端批改 | 是（且需伺服端運算） | 視 B 而定 | 大幅改動 |

**關鍵技術判斷（本輪最重要的結論）**：若要求「答案不公開」，**純前端＋雲端資料庫做不到**。前端要批改就必須讀到答案，而能讀就能被抓取；內建雲端服務提供的是資料庫、認證、檔案儲存與模型呼叫，**不含伺服端運算環境**，因此無法把批改藏起來。要保密答案，必須有一段可信任的伺服端邏輯（自建單埠 HTTP 服務）。這點直接決定方案選擇，不能邊做邊猜。

**建議路徑**：若目標只是「上線給多位同學各自練習」，先走 **A**，並把「答案曝光」列為必須先處理的風險（可另做最小版的伺服端批改，不必先上帳號）；若目標是要記錄「誰點亮了什麼」或讓出題者投稿，才進 **B／C**。

### 0.1 老闆決策（2026-11-10 09:54）

老闆指示「先做 A，但重開網站會有上次的記錄嗎？」→ **採用 A（多人同時上線、各自獨立、零程式改動）**，並追加追問重開後的資料保留行為。本輪因此補做第 9 節的瀏覽器實測。

**對該問題的結論**：同一瀏覽器、同一網址重開，**進度與個人化設定都會回來**；但「目前選到哪一課、作答到一半的答題卷、批改解析」不會回來；**換網址／換網域／換裝置／無痕模式則全部重來**。詳細數據見第 9 節。

須注意：上一輪老闆選的是「暫不發布」，本句解讀為「決定採用 A 模式」，**不是授權上線**；發布仍需另給明確指示。

---

## 1. 現況（唯讀查證，2026-11-10）

| 項目 | 查證結果 |
|---|---|
| 站體 | 純靜態、約 1.2 MB、`index.html` 在根目錄、無 `package.json`、無建置步驟 |
| 網路請求 | 全專案搜尋 `fetch(`、`XMLHttpRequest`、`/api/` → **零命中** |
| 雲端整合 | 搜尋 `workbuddy-cloud`、`publicConfig`、`publishableKey` → **零命中** |
| 本機儲存 | `calculus-tree-progress-v1`、`-packs-v1`、`-glow-v1`、`-lesson-frame-v1`、`-scratch-v1`，加深淺主題鍵（2026-11-10 量測共 6 鍵；現況共 8 鍵，另含 `calculus-tree-session-v1` 與 `skill-tree-language`，詳檔首對照表）；全部在瀏覽器 `localStorage` |
| 教材與答案 | `learning-packs/catalog.js` 有 **270 個** `answer` 欄位（27 課 × 10 題）；`learning-packs/cis221-calculus/nodes/*.json` 與 `cis221-calculus.zip` 同源 |
| 批改位置 | `app.js` 的 `renderQuiz()` 直接以 `question[2]` 比對並計分；`js/topic-packs.js` 的 `validate()` 校驗答案格式 |
| 狀態機 | `progress.started`／`completed[]`／`scores{}`；`attempts` 為記憶體 Map；`isAvailable()` 依 `parents` 判斷解鎖 |
| 呈現層 | 53 個靜態 DOM ID、8 個 `localStorage` 鍵、5 個帶 `schemaVersion:1` 的鍵（packs／session／光效／側板／草稿）〔2026-11-16 現況，詳檔首對照表〕 |
| 登入／權限 | **完全沒有**使用者、session、角色或資料隔離概念 |

---

## 2. R0 需求與範圍凍結（待老闆逐項確認，不接受「大概」）

| # | 決策項 | 明確選項 | 影響 |
|---|---|---|---|
| R0-1 | 使用者身份 | 匿名／帳號密碼／電郵驗證碼／微信／WorkBuddy 帳號 | 決定要不要認證模組 |
| R0-2 | 進度歸屬 | 本機各自／雲端每使用者／公開唯讀 | 決定要不要資料庫與帳號 |
| R0-3 | 跨裝置同步 | 要／不要 | 要不要改 `saveProgress()` 與衝突規則 |
| R0-4 | 出題者角色 | 無／可上傳／需審核後發布 | 決定角色與審核流程 |
| R0-5 | 答案位置 | 前端（現況）／**後端批改** | 與最初凍結範圍「答案必須留在後端」相關 |
| R0-6 | 教材共享 | 每人各自上傳／管理員發布給所有人 | 決定 `packs` 的擁有者與可見性 |
| R0-7 | 儲存位置 | 本機資料夾／雲端資料庫 | 選雲端即推翻「不用雲端或資料庫」 |
| R0-8 | 上線 | 維持不上線／先內部測試／對外發布 | 發布需另取得明確授權 |
| R0-9 | 語系與裝置 | 維持繁中、桌機優先手機可用 | 沿用，不重開 |

> **範圍外（明確留待下一版）**：個人履歷、成績統計與排行榜、多人即時協作、留言、付款、AI 出題。

---

## 3. R1 技術可行性與風險核實

### 3.1 已查證的平台限制

| 事實 | 來源 |
|---|---|
| 發布沙箱只給**一個公開 HTTP 埠**，支援靜態站與 Node／Python／Go 單埠服務 | 發布能力說明 |
| 可用儲存：SQLite、JSON 檔、瀏覽器端儲存；**不支援** MySQL／PostgreSQL／Redis／MongoDB 等外部服務並排 | 發布能力說明 |
| 雲端服務四模組：資料庫、使用者認證、檔案儲存、免金鑰模型呼叫；**一個應用綁一個環境**、資料不跨應用 | 雲端服務說明 |
| 本專案無 npm／bundler，若用雲端 SDK 應採 CDN `<script>` 形式，不應為此引入套件管理員 | 雲端服務 Form B |
| 啟用雲端服務會配置真實資源、可能涉及配額或計費，須由系統介面向使用者確認 | 雲端服務確認流程 |
| 機密掃描：全專案無 token／password／secret／api key／Bearer／moodle 命中 | 本輪 Grep |

### 3.2 風險登記

| # | 風險 | 分級 | 解法 |
|---|---|---|---|
| F1 | 270 個答案隨前端檔公開；多人場景放大影響 | **必須先解決** | 把答案移出前端，改由伺服端批改；或明確接受公開並書面記錄 |
| F2 | 使用者資料互相讀寫（串資料） | **必須先解決** | 每筆資料帶 `owner_user_id`；所有查詢必帶身份條件；答案表不授予前端讀權 |
| F3 | 答案保密需要伺服端運算，雲端資料庫本身不提供 | **必須先解決** | 自建單埠 HTTP 服務處理批改；勿假裝纯前端可保密 |
| F4 | `static.directory="."` 會把設計稿、測試、源教材一併公開 | **必須先解決** | 建立乾淨發布目錄或排除清單（改回 `dist` 需老闆另行同意） |
| F5 | 草稿紙筆跡、自行上傳教材屬使用者資料 | 必須先解決 | 明訂保存位置、容量上限、刪除權與可見性 |
| F6 | 配額與計費未知 | 必須知情 | 啟用時由系統介面顯示；未確認前不估算、不承諾 |
| F7 | `localStorage` 舊資料遷移到雲端的衝突 | 可延後（但要先設計） | 見 4.4 合併規則與 4.5 `schemaVersion` |
| F8 | 並發寫入進度 | 可延後 | 以 `(user_id,node_id)` 主鍵冪等 upsert |
| F9 | 學習包上傳的校驗與大小 | 可延後 | 沿用既有 `validate()` 上限（30 主題／300 節點／單檔 512 KB／總 4 MB） |
| F10 | 真機觸控、真托管、`localStorage` 跨裝置行為 | R8 | 交真機與真實托管驗證 |

---

## 4. R2 架構設計

### 4.1 三方案比較

| 維度 | A 各自獨立 | B 帳號同步 | C 角色與保密 |
|---|---|---|---|
| 後端 | 無 | 雲端資料庫＋認證 | **自建單埠 HTTP 服務**（可再加認證） |
| 帳號 | 無 | 有 | 有（出題者至少要有） |
| 答案 | 仍公開 | 仍公開 | 僅伺服端可讀 |
| 進度 | 各瀏覽器 | 跨裝置同步 | 跨裝置同步 |
| 上線形式 | 純靜態發布 | 靜態前端＋雲端服務 | 單埠 HTTP 服務發布 |
| 改動檔案 | 0 | 約 6–8 個 | 約 10–14 個＋新伺服端 |
| 推翻原凍結範圍 | 否 | 是（R0-7） | 是（R0-7），但**符合**「答案留後端」 |
| 主要風險 | 答案曝光 | 答案曝光、權限隔離 | 維運、批改服務可用性 |

### 4.2 建議分層目錄（若選 B／C，僅設計，未建立）

```
/                         靜態前端（既有）
  index.html  app.js  styles.css
  js/
    topic-packs.js        資料層：題目顯示用，將移除答案欄位
    pack-ui.js            學習包管理 UI
    workspace.js          答題框與草稿紙
    glow-settings.js      光效設定
    cloud.js              NEW：SDK 初始化，僅用 publicConfig
    progress-store.js     NEW：本機／雲端雙寫、快取與遷移
    quiz-client.js        NEW：送出作答、接收批改結果
  server/                 NEW（僅 C）：單埠 HTTP，監聽 $PORT 並綁 0.0.0.0
    index.cjs             路由與身份檢查
    grading.cjs           答案比對（答案只存在這裡）
    store.cjs             SQLite 或 JSON 檔
    packs/                出題者上傳的答案包，不進前端、不進 repo
  docs/  tests/  MULTIUSER-ARCH.md
```

**安全邊界**：`server/packs/` 與答案表永遠不進靜態根目錄；前端只取得「題目＋選項＋解析（批改後）」，不取得正確答案索引。

### 4.3 資料模型（B／C 通用，全部帶 `schemaVersion`）

| 表 | 主要欄位 | 隔離規則 |
|---|---|---|
| `users` | `id`, `handle`, `role(learner/author/admin)`, `created_at` | 本人可讀本人；角色由伺服端簽發 |
| `packs` | `id`, `topic_id`, `version`, `title`, `author_id`, `published_at`, `schema_version` | 已發布者全體可讀；草稿僅作者 |
| `pack_nodes` | `id`, `pack_id`, `node_id`, `title`, `body`, `minutes`, `pass_count`, `x`, `y`, `parents_json` | 隨所屬 pack |
| `questions` | `id`, `node_id`, `ordinal`, `prompt`, `options_json`, `explanation` | **不含答案**，全體可讀 |
| `answers` | `question_id`, `correct_index` | **僅伺服端可讀**，前端零權限 |
| `progress` | `user_id`, `node_id`, `score`, `completed_at`；PK(`user_id`,`node_id`) | 查詢必帶 `user_id` |
| `attempts` | `user_id`, `node_id`, `answers_json`, `score`, `submitted_at` | 本人；稽核用，可選 |
| `preferences` | `user_id`, `theme`, `glow_rgb`, `frame_json`, `schema_version` | 本人 |
| `scratch` | `user_id`, `strokes_json`, `updated_at`, `schema_version` | 本人；須設容量上限 |

既有 `localStorage` 八個鍵**不刪除**，改為離線快取與回退，避免遷移失敗時資料全失（原寫「六個鍵」為 2026-11-10 量測值，現況詳檔首對照表）。

### 4.4 狀態機（沿用既有，只加身份與同步）

```
身份：anonymous ──login──> authenticated ──expire/logout──> anonymous
進度來源：local ──首次登入──> merging ──成功──> synced ──離線──> queued ──重連──> synced
技能狀態（既有不動）：locked ──先修完成──> available ──作答──> attempted ──達門檻──> completed / lit
```

合併規則（衝突時不丟進度）：`completed` 取**聯集**；`scores` 取較高者；偏好與草稿以 `updated_at` 較新者為準，並保留一份衝突紀錄供使用者檢視。

### 4.5 儲存格式與遷移路徑

- 所有新表／新鍵皆帶 `schemaVersion:1`，並備 `migrateV1toV2()` 之類的單向函式與舊格式唯讀回退。
- 既有鍵（`-progress-v1` 等）格式不改，只增加讀取來源；雲端為主、本機為快取。
- 教材格式升級時 `PACK_FORMAT.md` 必須同步提高 `schemaVersion`，舊 ZIP 仍可讀但不再寫入答案欄位。

### 4.6 API 合約（僅 C，自建單埠）

| 方法與路徑 | 用途 | 身份 |
|---|---|---|
| `GET /api/tree` | 節點＋題目（**不含答案**） | 可匿名 |
| `GET /api/packs` | 已發布教材清單 | 可匿名 |
| `GET /api/progress` | 本人進度 | 必須 |
| `POST /api/progress` | 本人進度 upsert | 必須 |
| `POST /api/quiz/:node/grade` | 送 `{answers:[]}`，回 `{score,passed,explanations}` | 必須 |
| `POST /api/packs` | 出題者上傳／更新教材 | `author`／`admin` |

錯誤必須明確回 `401` 未登入、`403` 越權、`409` 版本衝突、`413` 過大、`429` 配額；不得靜默失敗。

### 4.7 決策紀錄（被否決的選項與理由）

| 被否決做法 | 理由 |
|---|---|
| 纯前端＋雲端資料庫做答案保密 | 前端必須讀答案才能批改，任何使用者都能抓取；且雲端服務不含伺服端運算 |
| 直接刪掉前端答案、不做批改 | 點亮與通關功能失效，等於改成纯展示站 |
| 把 `localStorage` 整包同步到公開資料表 | 無 `owner_user_id` 與身份條件，會串資料 |
| 為引入雲端 SDK 而替本專案加 npm／bundler | 現況是無建置纯靜態站，應採 CDN 形式，避免破壞既有工具鏈 |
| 從暫存目錄發布以避開整理 | 發布工具的應用歸屬綁目錄，日後更新連結不穩 |

---

## 5. 變更控制：影響範圍（尚未動工）

| 檔案 | 是否要改 | 影響 |
|---|---|---|
| `app.js` | 大改 | `saveProgress()`、`renderQuiz()`、`renderTree()` 的資料來源與批改流程 |
| `js/topic-packs.js` | 中改 | `validate()` 移除答案欄位、格式版本升級；`buildLessons()` 幾何不動 |
| `learning-packs/catalog.js` | 產生方式改 | 由建置腳本輸出「無答案」版本 |
| `scripts/build-learning-packs.cjs` | 中改 | 拆出前端包與伺服端答案包 |
| `tests/topic-packs.test.cjs` | 部分重寫 | 答案相關測試改為伺服端批改測試 |
| `PACK_FORMAT.md` | 改 | 格式版本與答案存放位置 |
| `index.html` | 小改 | 載入 SDK 或 API 客戶端 |
| `js/workspace.js` | 視 R0-2 | 草稿紙是否改存雲端 |
| `DESIGN-v2.md` | **不動** | 保留為前端設計與驗收歷史紀錄 |

---

## 6. 工項拆解與關卡

| 階段 | 工項 | 產出 | 通過標準 |
|---|---|---|---|
| R0 | 逐項回答第 2 節九題 | 書面決策表 | 每項皆為明確選項；範圍外明列 |
| R1 | 核实 SDK 版本、配額、單埠服務限制 | 風險登記更新 | 每個「必須先解決」都有解法 |
| R2 | 本文件審查通過 | 資料模型、狀態機、API 合約定稿 | 每個技術決策有理由；格式有 `schemaVersion` 與遷移路徑 |
| R3 | 固定版本、路徑、環境；金鑰不進 repo | 建置文件 | 他人可從零建置 |
| R4 | 資料層 → 批改層 → 身份層 → 呈現層，分層可驗證 | 程式 | 每層靜態分析零問題 |
| R5 | 靜態分析、執行期實測、缺陷閉環 | 逐屏存證 | **至少兩位模擬使用者同時操作**；越權讀取嘗試必失敗；答案不在任何前端回應中 |
| R6 | 版本號、發布 | 分享連結 | 發布前另取得老闆明確授權 |
| R7 | 產物歸檔、決策進長期記憶 | 提交與紀錄 | 換電腦仍可重建 |
| R8 | 真機與真托管驗證 | 回饋紀錄 | 結果回寫後才決定下一版 |

---

## 7. 待老闆裁示

1. R0-1～R0-9 九項決策（第 2 節）。
2. 是否接受「答案保密必須自建伺服端運算」此一事實，或選擇維持答案公開。
3. 若選雲端資料庫，是否同意推翻「不用雲端或資料庫」的原凍結範圍；啟用時由系統介面向您確認。
4. `static.directory` 是否同意改回 `dist`（您於 2026-11-09 指定改為 `.`）。
5. 是否維持「暫不發布」；若要上線，需另給明確授權。

---

## 8. 本文件邊界與已知限制

- 本文件產出時僅為設計評估；其後 A+ 補強屬獨立工項，見 `DESIGN-v2.md` 第 14 節。全程**未開通服務、未發布、未產生任何對外連結**。
- 雲端服務的實際規格以啟用後回傳的公開設定為準；本文件不寫死任何端點、金鑰或識別碼，也不估算配額與費用。
- 方案 C 的伺服端技術選型（Node／Python／Go）尚未定，屬 R0 後續決策。
- 本輪未驗證真實托管行為、真機觸控與跨裝置同步；皆列 R8。
- 其餘既有限制見 `DESIGN-v2.md` 10.4 與 13.7。**未發布、未部署、未對外分享。**

---

## 9. A 模式資料持久性實測（2026-11-10）

### 9.1 方法

本機起兩個靜態服務（不同 port＝不同 origin，用以模擬「換網址／上線到新網域」），headless Chrome + CDP、乾淨瀏覽器設定檔。於 A 站建立完整使用痕跡（點亮 Start、完成一課、切淺色、改光效、移動側板、畫草稿、在另一課勾選三題但**不送出**），接著 `Page.reload`，再前往 B 站。共 11 項檢查、`BROWSER_ERRORS=0`。

存證：`%TEMP%\skill-tree-persistence-verify.cjs`；截圖 `%TEMP%\skill-tree-persistence-shots\01-before-reload.png`、`02-after-reload.png`、`03-other-origin.png`。

### 9.2 重開後**會**回來的

| 項目 | 重開前 | 重開後 |
|---|---|---|
| 是否已開始 `progress.started` | `true` | `true` |
| 已完成課程／分數 | 1／1 | 1／1 |
| 樹上節點／已點亮 | 28／2 | 28／2 |
| 進度列文字 | `1 / 27` | `1 / 27` |
| 深淺主題 | 淺色 | 淺色 |
| 光效顏色 | `232,178,100`（琥珀） | 同 |
| 答題框位置 | `left=300px` | 同 |
| 草稿紙筆跡 | 1 筆 | 1 筆，重繪後 961 個非透明像素 |

對應鍵：`calculus-tree-progress-v1`、`skill-tree-theme`、`calculus-tree-glow-v1`、`calculus-tree-lesson-frame-v1`、`calculus-tree-scratch-v1`；自行上傳的學習包 `-packs-v1` 同一機制（本輪未上傳，故為 null）。

### 9.3 重開後**不會**回來的

| 項目 | 重開前 | 重開後 | 原因 |
|---|---|---|---|
| 目前選到的節點 | `graphs` | `start` | `selectedId` 初始值，從未寫入儲存 |
| 目前分頁 | `quiz` | `learn` | `activeTab` 同上 |
| 作答暫存 `attempts` | 2 份 | 0 份 | `const attempts = new Map()` 為記憶體物件 |
| 未送出的勾選 | 3 題 | 0 題 | 同上 |
| 已送出那課的批改解析 | 當次可見 | 無，需重做 | 同上 |

**白話**：點亮過的技能、分數、主題、光效、側板位置、草稿都會在；但「剛剛讀到哪一課、作答到一半的答案、上次批改的詳解」要重新來。

### 9.4 換網址／換網域：全部重來

B 站（不同 port，等同不同網域）實測：`started=false`、`0 / 27`、深色、白光、側板回 `984px`，八個鍵全部 `null`（原寫「六個鍵」為當日值，現況詳檔首對照表）。

**這點對上線最要緊**：您現在於本機 `127.0.0.1` 累積的進度，日後發布到新網域後**不會帶過去**；換瀏覽器、換裝置、無痕模式、清除網站資料也一樣。這是瀏覽器 `localStorage` 的同源規則，不是程式缺陷。

### 9.5 對 A 的影響與可選補強（①② 已於本輪實作，③ 未動）

A 本身**零程式改動**即可讓多人同時上線、各自保留自己的記錄。若老闆希望補足上述缺口，仍可不引進後端：

| 補強 | 代價 | 效果 |
|---|---|---|
| ① 匯出／匯入進度 JSON 檔 | 小，純前端 | 使用者自行備份、搬到新網域或新裝置；仍無帳號、無後端 |
| ② 把 `selectedId`／`activeTab`／未送出作答也存進 `localStorage` | 極小 | 重開後回到同一課、同一分頁、作答不流失 |
| ③ 走 B（帳號＋雲端同步） | 大 | 自動跨裝置，但推翻「不用雲端或資料庫」的原凍結範圍 |

**後續（2026-11-10）**：老闆選擇「做 A+ 補強」，① 與 ② 已實作並通過 R5（28 項 CDP＋既有 37 項回歸、`BROWSER_ERRORS=0`），詳 `DESIGN-v2.md` 第 14 節。③（帳號＋雲端同步）未動，仍屬待裁示。**是否授權上線，仍待老闆明確指示。**

### 9.6 A+ 實作摘要

- 新增 `calculus-tree-session-v1`（`schemaVersion:1`）保存 `selectedId`／`activeTab`／`attempts`；還原時校驗節點存在且可解鎖、答案索引合法。
- 新增 `js/backup-ui.js`：抽屜「資料備份」可匯出八個鍵成 JSON 檔（`window.SkillTreeBackupKeys`），匯入時驗證 app／版本／結構、確認覆蓋、失敗回滾（原寫「七個鍵」為當日值，現況詳檔首對照表）。
- 實測：重開後選課、分頁、未送出作答與批改解析全回來；換到另一個 origin 後匯入備份檔並重載，進度、主題、光效、側板、草稿（961 像素）、作答卷與 43 條 `.connection` path（0 個中繼接點）全數還原（原寫「117 段連線」為當日值，現況詳檔首對照表）。
- 仍是純前端、無帳號、無後端；跨越不同網域需使用者手動匯出／匯入，不會自動同步。
