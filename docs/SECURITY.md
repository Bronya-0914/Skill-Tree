<a id="top"></a>

# 安全政策 · SECURITY

> **狀態**：`current` — 本頁說明本專案的安全邊界、資料可見性與發布前義務，對應本機 HEAD `8d7b4cb`（2026-11-16）。
> **語言切換**：[繁體中文（本頁）](#top) ｜ [English](SECURITY.en.md)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **一句話結論**：**本專案不是安全邊界。** 它是一個純前端、零後端的學習示範站；任何送到瀏覽器的資料都可被使用者完整檢視。
> **文件性質**：現行安全宣告；本機無 remote、未 push、無 release tag，線上 Pages 為較舊版本。

---

## 目錄

- [1. 安全邊界宣告](#1-安全邊界宣告)
- [2. 答案在前端（不可用於保密考試）](#2-答案在前端不可用於保密考試)
- [3. 無後端、無帳號、無伺服端批改](#3-無後端無帳號無伺服端批改)
- [4. localStorage 8 個鍵與同源限制](#4-localstorage-8-個鍵與同源限制)
- [5. 資料備份：不加密、含筆跡、覆蓋式匯入](#5-資料備份不加密含筆跡覆蓋式匯入)
- [6. static.directory 與 references/ 版權書籍](#6-staticdirectory-與-references-版權書籍)
- [7. 授權狀態（無 LICENSE）](#7-授權狀態無-license)
- [8. 回報問題方式](#8-回報問題方式)
- [9. 發布前檢查清單](#9-發布前檢查清單)
- [10. 風險登錄摘要](#10-風險登錄摘要)

---

## 1. 安全邊界宣告

本專案的設計目標是「單機、純前端、自學技能樹」，**從未以保護機密資料為目標**：

- 沒有身份驗證、沒有角色、沒有伺服端運算、沒有資料隔離。
- 沒有任何可信任的「伺服端」可存放秘密；瀏覽器取得的一切，使用者皆可從開發者工具、原始檔或網路回應讀取。
- 因此**不得**把本專案用於需要保密答案的正式考試、計分評量、或存放個人敏感資料。
- 此判斷並非缺陷，而是既有架構決定；`MULTIUSER-ARCH.md` §0 已明言「純前端＋雲端資料庫做不到答案保密」。若日後需要保密批改，必須另建可信任的伺服端邏輯（屬 B／C 方案，未實作）。

---

## 2. 答案在前端（不可用於保密考試）

| 項目 | 事實 |
|---|---|
| 答案數量 | `learning-packs/catalog.js` 有 **270 個** `"answer"` 欄位（27 課 × 10 題）。 |
| 同源檔案 | `learning-packs/cis221-calculus/nodes/*.json`（27 個來源 JSON）與 `learning-packs/cis221-calculus.zip`（29 個項目）與 `catalog.js` 內容一致。 |
| 批改位置 | `app.js` 的 `renderQuiz()` 直接以 `question[2]`（答案索引）比對並計分；`js/topic-packs.js` 的 `validate()` 僅校驗答案格式。 |
| 可見性 | 上述檔案皆為靜態資源，隨網站送到瀏覽器；任何人可開 DevTools 或直接下載 `catalog.js`／ZIP 取得全部正確答案與解析。 |
| 結論 | **答案完全公開**。「平台開源、答案在後端」是另一工作串原始計劃的構想，**並未在本專案實作**；本專案是「答案在前端」的示範站。 |

> 風險編號 `F1`（`MULTIUSER-ARCH.md` §3.2）：270 個答案隨前端檔公開，多人場景放大影響。現行處置為「明確接受公開並書面記錄」，而非技術隱藏。

---

## 3. 無後端、無帳號、無伺服端批改

唯讀勘查結果：全專案搜尋 `fetch(`、`XMLHttpRequest`、`/api/`、`firebase`、`supabase`、`cloudservice` **零命中**。

| 項目 | 狀態 |
|---|---|
| 後端服務 | 無。無 Express／Node 服務、無 API 路由、無 `server/`。 |
| 帳號系統 | 無。無 `users`、無 session、無角色、無 `owner_user_id`、無資料隔離。 |
| 伺服端批改 | 無。批改在瀏覽器 `app.js` 內完成。 |
| 雲端服務 | 無。未啟用資料庫、認證、檔案儲存或模型呼叫；無 `config.json`、無 token／API key 進 repo。 |
| 機密掃描 | 全專案無 `token`／`password`／`secret`／`api key`／`Bearer`／`moodle` 命中（`MULTIUSER-ARCH.md` §3.1）。 |

> `MULTIUSER-ARCH.md` 的 A／B／C 評估、R0–R2 設計與 `server/`、`cloud.js` 等目錄皆為**未實作的設計**，不代表現有功能。

---

## 4. localStorage 8 個鍵與同源限制

所有狀態存於瀏覽器 `localStorage`，`app.js` 的 `BACKUP_KEYS`（與 `js/backup-ui.js` 的 `FALLBACK_KEYS` 相同）共 **8 個鍵**，其中 **5 個**帶 `schemaVersion:1`：

| 鍵 | 值格式 | `schemaVersion` | 用途 |
|---|---|---|---|
| `calculus-tree-progress-v1` | `{started, completed[], scores{}}` | 無 | 進度與分數 |
| `calculus-tree-packs-v1` | `{schemaVersion:1, packs:[...]}` | 1 | 使用者匯入的學習包 |
| `calculus-tree-session-v1` | `{schemaVersion:1, selectedId, activeTab, attempts}` | 1 | 選課／分頁／未送出作答 |
| `skill-tree-theme` | `'dark' \| 'light'` | 無 | 深淺主題 |
| `calculus-tree-glow-v1` | `{schemaVersion:1, color}` | 1 | 點亮光效顏色 |
| `calculus-tree-lesson-frame-v1` | `{schemaVersion:1, left, top, width, height, ...}` | 1 | 答題框位置與尺寸 |
| `calculus-tree-scratch-v1` | `{schemaVersion:1, strokes:[...]}` | 1 | 手寫草稿筆跡 |
| `skill-tree-language` | `'zh-Hant' \| 'en'` | 無 | 介面語言 |

**同源限制（same-origin policy）**：`localStorage` 以 origin（協定＋網域＋埠）為界。

- 換網址、換網域、換埠、換瀏覽器、換裝置、無痕模式、清除網站資料 → **全部狀態重來**，不會自動同步。
- `MULTIUSER-ARCH.md` §9.4 實測：不同 port（等同不同網域）的 B 站，八個鍵全部為 `null`、`started=false`、`0 / 27`、深色、白光。
- 唯一搬移方式是「資料備份」手動匯出／匯入 JSON（見[第 5 節](#5-資料備份不加密含筆跡覆蓋式匯入)）。
- 此為瀏覽器規格，不是程式缺陷。

---

## 5. 資料備份：不加密、含筆跡、覆蓋式匯入

`js/backup-ui.js` 提供純前端備份（`window.SkillTreeBackup`）：

| 項目 | 說明 |
|---|---|
| Payload | `{app:'calculus-skill-tree', schemaVersion:1, exportedAt, keys:{key: 原始字串 \| null}}`；8 個鍵以**原始字串**保存，`null` 表示該鍵不存在。 |
| 檔名 | `skill-tree-backup-YYYY-MM-DD.json`。 |
| 加密 | **無**。檔內為明文 JSON，含進度、分數、作答卷、答題框位置、光效與**手寫草稿筆跡座標**。 |
| 匯入行為 | **覆蓋式**：逐鍵寫回，遇 `null`／`undefined` 則 `removeItem`；寫入失敗以 `before` 回滾；成功後 500ms `location.reload()`。匯入前以 `window.confirm` 提示。 |
| 驗證 | `validate()` 僅檢查 `app`、`schemaVersion===1`、`keys` 為物件、值為 `null` 或字串，並額外解析進度鍵；**不驗證內容真偽、不防竄改**。 |
| 不含 | 不含 `learning-packs/cis221-calculus.zip` 檔本身；但使用者匯入過的教材內容會落在 `PACKS_KEY` 內而被備份。內建預設教材（`catalog.js`）不進 `localStorage`。 |
| 另有一種匯出 | `js/pack-ui.js` 的「主題學習包匯出 ZIP」只含教材、不含個人進度，檔名 `${topic.id}-v${topic.version}.zip`。 |

**使用建議**：備份檔等同個人資料明文，請自行保管、勿上傳公開空間；收到他人備份檔時，匯入前先另存一份現況，因匯入會直接覆蓋。

---

## 6. static.directory 與 references/ 版權書籍

| 項目 | 事實 |
|---|---|
| 托管設定 | `js/hosting.json`：`{"project_id":"appgprj_6af1852c8bc88191999e930daeb549ac","static":{"directory":"."}}`。`static.directory="."` 代表**以整個專案根目錄為靜態根**。 |
| 版權物 | `references/3000-solved-problems/` 含 `book-full.txt`（892 KB 全文）、`chapters.json`、46 個 `chNN-*.txt` 分章檔，為 **Schaum's Outline Series／Elliot Mendelson／McGraw-Hill 1988**《3000 Solved Problems in Calculus》之 OCR 文字層；`BOOK-REFERENCE.md` 開頭載明版權與「全文僅存本機、不隨網站發布、不上傳、不對外分享」。 |
| 本機風險 | `references/` 48 個 txt **已被 Git 追蹤**（`git ls-files | wc -l` = 105），且專案**沒有 `.gitignore`**、沒有 `LICENSE`、沒有乾淨發布目錄。推送、打包或 `static.directory="."` 發布時極易一併外洩設計稿、測試、來源教材與書籍全文。 |
| 線上現況 | 唯讀查證：`https://bronya-0914.github.io/Skill-Tree/` 回應 `200`；但 `DESIGN-v2.md`、`BOOK-REFERENCE.md`、`references/3000-solved-problems/*` 回應 **`404`**（書籍全文未公開）。 |
| 重要提醒 | 「線上目前 404」屬**已排除的現況**，**不是本機設定提供的保證**。只要無 `.gitignore`、且 `references/` 仍在 Git 追蹤內，任何後續 push／打包都可能改變這個結果。 |
| 因應 | 發布前必須建立排除清單或乾淨發布目錄（改 `static.directory` 需老闆另行同意）；見[第 9 節](#9-發布前檢查清單)。 |

---

## 7. 授權狀態（無 LICENSE）

- 專案根目錄與任何子目錄皆**查無 `LICENSE` 檔**；專案本身無授權條款。
- 僅第三方 `js/vendor/fflate-LICENSE.txt`（MIT，Copyright (c) 2026 Arjun Barrett）隨附。
- `PACK_FORMAT.md` 記 `fflate 0.8.3`，惟 `js/vendor/fflate.js` 內**查無版本字串**，無法從檔案核對。
- 在新增 `LICENSE` 前，勿假定可任意重散布；`references/` 書籍全文更受原出版者版權限制，與專案授權無關、一律不得公開。

---

## 8. 回報問題方式

| 情況 | 建議處置 |
|---|---|
| 一般使用問題、教材錯字、前端缺陷 | 於儲存庫 <https://github.com/Bronya-0914/Skill-Tree> 之 Issue 功能回報（若該儲存庫已啟用），或於本機以 Git commit 訊息與文件註記留下紀錄。 |
| 疑似機密外洩（`references/` 書籍全文、token、個人身份資料、備份檔內容） | **勿公開張貼**。先透過儲存庫維護者的私訊／非公開管道通知，並在確認前避免轉傳檔案；必要時先從待發布產物中移除。 |
| 本機 Git 異常 | 本機無 remote、未 push；先以 `git status --short`、`git log --oneline` 唯讀確認，勿以 `git reset --hard` 或刪除 `.git/` 作為捷徑。 |
| 線上與本機版本不一致 | 屬既有狀態（線上較舊）；記錄差異，勿在未授權下嘗試 push 覆蓋。 |

> 本專案無專責安全團隊、無 SLA、無 CVE 編碼流程；本節僅提供務實的回報路徑，不構成漏洞懸賞或保密處理承諾。

---

## 9. 發布前檢查清單

> 本專案**目前未獲授權發布**；以下為日後取得明確授權時才執行的檢查。

- [ ] 已取得老闆**明確**發布授權，並確認發布範圍（純靜態站／是否含文件）。
- [ ] `references/` 全數排除：`static.directory` 改為乾淨目錄或建立排除清單（需另行同意）；確認書籍全文、`BOOK-REFERENCE.md`、`DESIGN-v2.md`、測試與來源教材不隨站公開。
- [ ] 補上 `.gitignore`（至少排除 `references/`、本機暫存、備份檔）；確認 `git ls-files` 不再含書籍 txt。
- [ ] 決定並加入 `LICENSE`；確認第三方 `fflate-LICENSE.txt` 隨附。
- [ ] 無 `config.json`、token、密碼、API key、個人身份資料、Moodle 帳號或帶 token 的下載網址進 repo。
- [ ] `git status --short` 乾淨；`node --test tests/*.test.cjs` **20/20**；`node --check` 全數通過。
- [ ] 確認本機與線上版本一致（教材 `version: 5`、單擊開合、`app.js`／`styles.css`／`catalog.js` 雜湊）。
- [ ] 於文件（[`CHANGELOG.md`](CHANGELOG.md)、[`README.md`](README.md)、本頁）記錄發布組態、日期與對應 commit。
- [ ] 於 [`CONTRIBUTING.md`](CONTRIBUTING.md)「發布前檢查清單」同步勾選狀態。

---

## 10. 風險登錄摘要

| 編號 | 風險 | 分級 | 現行處置 |
|---|---|---|---|
| F1 | 270 個答案隨前端檔公開 | 必須先解決 | 明確接受公開並書面記錄；不用於保密考試（第 2 節） |
| F2 | 使用者資料互相讀寫 | 必須先解決 | 現況無多人資料表，故無串資料；純本機各自獨立 |
| F3 | 答案保密需要伺服端運算 | 必須先解決 | 不假裝純前端可保密；伺服端批改未實作（`MULTIUSER-ARCH.md`） |
| F4 | `static.directory="."` 一併公開設計稿／測試／`references/` | 必須先解決 | 線上目前 404；本機無 `.gitignore`，發布前必須排除（第 6 節） |
| F5 | 草稿筆跡、自行上傳教材屬使用者資料 | 必須先解決 | 明文存 `localStorage`、備份不加密；由使用者自行保管（第 4、5 節） |
| F6 | 配額與計費 | 必須知情 | 未啟用任何雲端服務，不估算、不承諾 |
| F7 | 舊資料遷移衝突 | 可延後 | 各鍵 `schemaVersion:1`；備份覆蓋式匯入 |
| F8 | 並發寫入進度 | 可延後 | 單機單分頁為主，`window.storage` 事件做跨分頁同步 |
| F9 | 學習包上傳校驗與大小 | 可延後 | 沿用 `validate()` 上限（30 主題／300 節點／單檔 512 KB／總 4 MB／ZIP 5 MB） |
| F10 | 真機觸控、真托管、`localStorage` 跨裝置 | R8 | 未驗證；`static.directory="."` 未於真實托管平台驗證 |

---

[↑ 回到頂部 · Back to top](#top)
