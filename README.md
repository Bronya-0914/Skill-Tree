<a id="readme-top"></a>

<div align="center">

<h1 align="center">技能樹 · Skill Tree</h1>

<p align="center"><strong>上傳一份資料，長出一棵技能樹。把書、講義或筆記交給 AI，生成可逐步點亮的課題 —— 讓進度看得見，讓每次完成都有成就感。</strong></p>

<p align="center">繁體中文 · <a href="README.en.md">English</a></p>

<p align="center">
  <a href="https://bronya-0914.github.io/Skill-Tree/">線上展示 Live Demo</a> ·
  <a href="https://github.com/Bronya-0914/Skill-Tree">GitHub Repo</a> ·
  <a href="#how-to-use">如何使用 How to Use</a> ·
  <a href="AGENTS.md">給 AI 的指引 AGENTS.md</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/runtime-pure%20static-2ea44f" alt="純靜態">
  <img src="https://img.shields.io/badge/content-upload%20your%20own-1f6feb" alt="上傳自有資料">
  <img src="https://img.shields.io/badge/progress-visible-2ea44f" alt="進度可見">
  <img src="https://img.shields.io/badge/backend-none-8250df" alt="無後端">
  <img src="https://img.shields.io/badge/AI-ready-AGENTS.md-6f42c1" alt="AI 可讀指引">
  <img src="https://img.shields.io/badge/docs-bilingual-6f42c1" alt="雙語文件">
  <img src="https://img.shields.io/badge/license-not%20specified-lightgrey" alt="授權未指定">
</p>

<p align="center"><sub>純靜態 · 自備資料 · 進度可見 · 無後端 · AI 可讀 · 雙語 · 授權未指定<br>Static · bring your own material · visible progress · no backend · AI-ready · bilingual · license not specified</sub></p>

</div>

---

<a id="how-to-use"></a>

# 如何使用 · How to Use

> **這一段是全站最重要的入口。** 不論你是使用者或接手 AI，先讀這裡。

| 你是 | 直接做這件事 | 詳細 |
|---|---|---|
| **想馬上開始學習** | 開線上展示（知識星系總覽）→ 點進技能樹 → 點 **Start** → 選節點 → 讀概念 → 依題型作答 → 達門檻解鎖下一節點。 | [§3 完整操作流程](#sec3) |
| **想換成自己的課題** | 準備一份資料（書／講義／筆記／PDF／主題清單）→ 交給 AI → 取得學習包 ZIP → 在網站「匯入學習包」上傳。 | [§4 建立新課題](#sec4) |
| **你是被交派生成課題的 AI** | **直接讀 [`AGENTS.md`](AGENTS.md)**，照「先問資料 → 再問答題方式 → 才生成」執行，未問完不得生成。 | [§4.2 三步流程](#sec42) |

**給 AI 的一句話**：本網站不預設任何學科內容；課題由使用者提供的資料生成。你的第一個動作是提問，不是輸出教材。完整機讀規格在 [`AGENTS.md`](AGENTS.md) 的 YAML 區塊。

> **兩個頁面**：`index.html` 是「知識星系」總覽，用來看全部課題與已點亮的主題；`tree.html` 是「技能樹」學習頁，讀概念、作答、解鎖都在這裡。兩頁互相連結。

---

<details>
<summary><strong>目錄 Table of Contents（按一下展開）</strong></summary>

<ol>
  <li><a href="#how-to-use">如何使用 How to Use</a></li>
  <li><a href="#sec1">一、這網站是什麼 · 為什麼要這樣學</a></li>
  <li><a href="#sec2">二、你會看到什麼 · 可見的進度</a></li>
  <li><a href="#sec3">三、完整操作流程</a></li>
  <li><a href="#sec4">四、用 AI 建立新課題</a></li>
  <li><a href="#sec5">五、上傳資料會變成什麼</a></li>
  <li><a href="#sec6">六、功能一覽</a></li>
  <li><a href="#sec7">七、資料與私隱</a></li>
  <li><a href="#sec8">八、技術組成</a></li>
  <li><a href="#sec9">九、開發與測試</a></li>
  <li><a href="#sec10">十、文件索引</a></li>
  <li><a href="#sec11">十一、已知限制</a></li>
  <li><a href="#sec12">十二、常見問題</a></li>
  <li><a href="#sec13">十三、參與與授權</a></li>
</ol>

</details>

---

<a id="sec1"></a>

## 1. 這網站是什麼 · 為什麼要這樣學

這不是一份固定課表，而是一個**把任意資料變成可解鎖技能樹**的學習介面。你提供資料，AI 把它切成有先修關係的節點；你逐個完成、逐個點亮。

**動機只有兩個字：看得見。** 大多數自學之所以中斷，不是內容太難，而是「我到底走到哪裡」沒有答案。技能樹把抽象的學習轉成一張地圖：

| 痛點 | 這裡怎麼解 |
|---|---|
| 不知道自己有沒有進步 | 每個完成的節點當場點亮，連線跟著發光，進度是視覺事實，不是自我感覺 |
| 學完一章沒有完成感 | 節點就是明確的完成單位；達門檻才解鎖，每次解鎖都是一次可確認的成就 |
| 不知道下一步該做什麼 | 先修關係畫在圖上，永遠看得到「現在能開哪一課」 |
| 想學的東西不在課表裡 | 換一份資料就能長出另一棵樹，學科、深度、節點數都由資料決定 |
| 換裝置就怕進度消失 | 進度存在瀏覽器，可匯出成備份檔，換地方再匯入 |

因此本專案**不內建、也不假設任何既定教材**。任何課題都是「使用者給資料 → AI 生成 → 網站呈現」的結果。

---

<a id="sec2"></a>

## 2. 你會看到什麼 · 可見的進度

- **一棵樹**：起始點往下展開，節點之間以連線表示先修關係。
- **點亮**：完成一個節點，該節點與路徑發光；光效顏色可自訂。
- **三種狀態**：未解鎖（暗）、可學習（亮邊）、已完成（點亮）。
- **答題門檻**：作答未滿不能交卷；選擇題、數值輸入題、分步長題皆可批改
- **可調式答題框**：可拖曳、縮放、雙擊還原；另有手寫草稿紙，可在上面推導再作答。
- **進度保存**：主題、光效、側板位置、草稿、作答狀態、選課分頁都留在瀏覽器。
- **深淺主題與中英切換**、手機可用、點背景關閉學習區、點節點開啟學習區。

---

<a id="sec3"></a>

## 3. 完整操作流程

### 3.1 一般使用者（最短路徑）

1. 開 <https://bronya-0914.github.io/Skill-Tree/>，或用本機靜態伺服器開啟 `index.html`。
2. 點 **Start** 點亮起點，樹展開。
3. 單擊任一可學習節點 → 右側／底部開啟學習區。
4. 讀「概念」分頁；需要的話在「草稿紙」分頁手寫推導。
5. 到「練習」分頁作答：選擇題選選項、數值輸入題鍵入答案、分步長題逐小問填寫；全部填完交卷鈕才由灰轉為可點。
6. 看逐題對錯與解析；達通過門檻即解鎖後續節點。
7. 關掉網頁也沒關係，下次開回來進度還在；想換裝置就用抽屜的「資料備份」匯出、在新裝置匯入。

### 3.2 想換課題的使用者

1. 準備一份資料：書的章節、講義、筆記、PDF、題庫、簡報，或一份主題清單。
2. 把資料交給 AI，並說清楚想用什麼方式回答問題（見 §4.2）。
3. AI 產出學習包 ZIP 後，從網站的「匯入學習包」上傳。
4. 若想保留舊進度，先匯出備份；匯入新教材後再決定是否重設。

### 3.3 桌機與手機

| | 桌機 | 手機 |
|---|---|---|
| 開啟學習區 | 單擊節點 | 單擊節點 |
| 關閉學習區 | 單擊背景 | 單擊背景 |
| 答題框 | 可拖曳＋縮放 | 底部抽屜，隨寬度自適應 |
| 側板 | 預設展開，可收合 | 預設收合 |

---

<a id="sec4"></a>

## 4. 用 AI 建立新課題

### 4.1 核心觀念

課題不是寫死在網站裡的，而是**由資料生成**。你不必改程式，只要給 AI 一份資料與你的偏好；AI 依 [`PACK_FORMAT.md`](PACK_FORMAT.md) 產出結構化教材，網站讀進去就長出新的樹。

<a id="sec42"></a>

### 4.2 三步流程（不可調換順序）

| 步驟 | AI 必須先問 | 為什麼 |
|---|---|---|
| **1** | 「請給我一本書、講義、筆記、PDF、題庫，或一份主題清單，作為生成依據。」 | 沒有依據就不能生成；不得以模型記憶冒充教材來源 |
| **2** | 「你想用什麼方式回答問題？選擇題／數值輸入題／分步長題／混合／自訂？」 | 答題方式決定題目型別與解析寫法 |
| **3** | 確認課題名稱、節點數、先修關係、每節點題數、通過門檻、時間、語言，才開始生成 | 輪廓未定就生成會產生反覆重做 |

> **AI 請注意**：第 1、2 步是**阻塞式必問**，未得到答案不得輸出任何教材。完整逐字提問、答題方式對照表與機讀 YAML 規格，全部寫在 [`AGENTS.md`](AGENTS.md)。八階段生成方法見 [`AI_TEACHING_GUIDE.md`](AI_TEACHING_GUIDE.md)。

### 4.3 誠實邊界

網站目前支援三種題型：**選擇題**（2–6 個選項）、**數值輸入題**（可輸入整數、小數、分數或 `sqrt(2)`、`pi` 等數值式，可設容差）、**分步長題**（一題含 2–8 個小問，全部小問正確才算通過該題），並提供手寫草稿紙。

AI 應依使用者偏好選用對應題型；若想要的是這三種之外的方式（例如口述回答、上傳手寫照片批改），先說明落差，再把偏好落實在題目措辭與解析寫法。不得宣稱網站已具備該功能，也不得虛構不存在的欄位。

---

<a id="sec5"></a>

## 5. 上傳資料會變成什麼

一份資料會被整理成：

| 產物 | 內容 |
|---|---|
| 課題描述 | 名稱、ID、版本、語言、attach 起點 |
| 節點清單 | 每個知識點一個節點：導言、分段概念、公式／例題／提示、練習題、通過門檻、建議時間 |
| 先修關係 | 有向無環圖，決定解鎖順序與樹上連線 |
| 練習題 | 選擇題、數值輸入題、分步長題三種題型；含題幹、答案、逐題解析，依 §4.2 偏好設計 |
| 學習包 ZIP | 可從網站匯入的封裝檔 |

格式細節、欄位上限、驗證規則與版本合併都在 [`PACK_FORMAT.md`](PACK_FORMAT.md)；生成產物請交給 builder 重建，不要手改生成檔。

---

<a id="sec6"></a>

## 6. 功能一覽

| 面向 | 功能 |
|---|---|
| 可視進度 | 技能樹、逐節點點亮、連線掃光、自訂光效色 |
| 學習流程 | 概念／練習／草稿紙三分頁、三種題型、答題門檻、逐題紅綠回饋與解析、達標解鎖 |
| 課題來源 | 上傳學習包 ZIP、版本合併、錯誤拒絕、拓撲排序 |
| 個人化 | 深淺主題、中英切換、可拖曳縮放答題框、手寫草稿 |
| 資料 | 瀏覽器端持久化、匯出／匯入備份、重設進度 |
| 裝置 | 桌機與手機版面、點擊開合、鍵盤與觸控 |
| 邊界 | 純靜態、無後端、無帳號、無追蹤、無外部 API |

---

<a id="sec7"></a>

## 7. 資料與私隱

- 所有進度、草稿、作答狀態都存在**你自己瀏覽器的 localStorage**，不會上傳到伺服器。
- 匯出備份是純 JSON，採**覆蓋式匯入**，不加密；匯入前會再確認一次。
- 換瀏覽器、換網域或清除網站資料都會讓進度消失，請先匯出備份。
- 題目與答案在前端，因此**不適用於需要保密答案的正式考試**。
- 完整的發布前檢查見 [`docs/SECURITY.md`](docs/SECURITY.md)。

---

<a id="sec8"></a>

## 8. 技術組成

| 層 | 說明 |
|---|---|
| 呈現 | 單一 `index.html` ＋ CSS，SVG 連線，原生 DOM，無框架 |
| 邏輯 | 狀態機、解鎖規則、置中與縮放、答題門檻、主題／語言切換 |
| 資料 | 學習包讀取與驗證、ZIP 解析、`localStorage` 持久化 |
| 建置 | 產生器把來源教材轉成目錄檔與 ZIP；測試以 Node 內建 test runner 執行 |
| 不包含 | 後端、帳號、資料庫、雲端 SDK、追蹤、外部 API |

模組職責、狀態機與資料流見 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)。

---

<a id="sec9"></a>

## 9. 開發與測試

```bash
# 執行全部測試
node --test tests/*.test.cjs

# JS 語法檢查
node --check app.js

# 重建學習包產物（改過教材來源後才需要）
node scripts/build-learning-packs.cjs
```

生成檔由 builder 產出，請改來源再重建，不要直接手改。修改教材、格式或翻譯的 SOP 見 [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)。

---

<a id="sec10"></a>

## 10. 文件索引

| 檔案 | 用途 |
|---|---|
| [`AGENTS.md`](AGENTS.md) | **給 AI 的機讀指引**：問資料 → 問答題方式 → 生成 |
| [`README.md`](README.md) / [`README.en.md`](README.en.md) | 本頁與英文對照 |
| [`AI_TEACHING_GUIDE.md`](AI_TEACHING_GUIDE.md) / [`.en.md`](AI_TEACHING_GUIDE.en.md) | 八階段課題生成方法 |
| [`PACK_FORMAT.md`](PACK_FORMAT.md) / [`.en.md`](PACK_FORMAT.en.md) | 學習包格式與驗證規則 |
| [`I18N.md`](I18N.md) | 單檔雙語：語言切換維護 |
| [`BOOK-REFERENCE.md`](BOOK-REFERENCE.md) | 準備資料與版權指引 |
| [`DESIGN-v2.md`](DESIGN-v2.md) | 介面設計原則與驗證方法 |
| [`MULTIUSER-ARCH.md`](MULTIUSER-ARCH.md) | 資料保存與多人使用邊界 |
| [`docs/README.md`](docs/README.md) | 文件總覽（雙語導覽表） |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) / [`.en.md`](docs/ARCHITECTURE.en.md) | 技術架構 |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) / [`.en.md`](docs/CHANGELOG.en.md) | 版本與變更紀錄 |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) / [`.en.md`](docs/CONTRIBUTING.en.md) | 修改 SOP |
| [`docs/SECURITY.md`](docs/SECURITY.md) / [`.en.md`](docs/SECURITY.en.md) | 安全邊界 |
| [`docs/MD-AUDIT.md`](docs/MD-AUDIT.md) | 文件集與決策紀錄 |
| `learning-packs/<topic-id>/README.md` | 課題資料夾說明（通用範本） |

---

<a id="sec11"></a>

## 11. 已知限制

- 三種題型之外的方式（例如口述回答、上傳手寫照片批改）沒有專屬介面，須先說明落差。
- 無伺服端批改，答案在前端，不能用於保密考試。
- 進度綁瀏覽器同源，不會自動跨裝置同步。
- 匯入備份會覆蓋現有資料，不合併。
- 尚未指定授權條款；發布前須先處理授權與機密資料排除。

---

<a id="sec12"></a>

## 12. 常見問題

**Q：我沒有程式基礎，可以用嗎？** 可以。開網頁、點節點、答題即可；要換課題才需要請 AI 產生學習包。

**Q：可以學哪些科目？** 取決於你提供的資料。任何能被切成「有先修關係的知識點」的主題都適合。

**Q：AI 會不會自己編內容？** 依 [`AGENTS.md`](AGENTS.md)，AI 必須先向你要資料；若你明確同意「無指定資料、依通用知識整理」，它必須在教材裡標明。

**Q：我可以指定題目怎麼問嗎？** 可以，這正是必問的第二題；見 §4.2。

**Q：換電腦進度還在嗎？** 不在。請用抽屜的「資料備份」匯出 JSON，在新裝置匯入。

**Q：網站有帳號嗎？** 沒有。每人用自己的瀏覽器，資料互不干擾，也不會同步。

---

<a id="sec13"></a>

## 13. 參與與授權

貢獻流程見 [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)；安全與發布前檢查見 [`docs/SECURITY.md`](docs/SECURITY.md)。目前**尚未指定授權條款**，使用或散布前請先向專案擁有者確認。問題回報：<https://github.com/Bronya-0914/Skill-Tree/issues>。

---

<div align="center">

**線上展示** · <https://bronya-0914.github.io/Skill-Tree/> ｜ **儲存庫** · <https://github.com/Bronya-0914/Skill-Tree>

**下一步**：[如何使用](#how-to-use) ｜ [給 AI 的指引](AGENTS.md) ｜ [文件總覽](docs/README.md)

[↑ 回到頂部 · Back to top](#readme-top)

</div>
