<a id="top"></a>

# 介面設計原則與驗證方法 · Interface Design & Verification

> **一句話**：上傳一份資料，長出一棵技能樹 —— 讓進度看得見，讓每次完成都有成就感。
> **如何使用**：[網站使用指南](README.md#how-to-use) · [AI 必問流程](AGENTS.md) · [技術架構](docs/ARCHITECTURE.md) · [線上展示](https://bronya-0914.github.io/Skill-Tree/)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/> · **儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **本檔為單檔雙語**：[繁體中文](#繁體中文) ｜ [English](#english)

---

## 繁體中文

### 1. 設計目標

這個介面只為一件事服務：**把學習進度變成看得見的東西**。所有視覺決策都從「使用者能不能一眼知道自己走到哪裡、下一步是什麼、剛剛完成了什麼」出發。

| 目標 | 對應設計 |
|---|---|
| 進度可見 | 技能樹、節點三態、連線、已完成標記 |
| 完成有回饋 | 達門檻才解鎖，解鎖當下節點與路徑發光 |
| 下一步清楚 | 先修關係直接畫在圖上，可學節點與未解鎖節點一眼可辨 |
| 不干擾學習 | 中性配色、深淺主題、可收合側板 |
| 換裝置不中斷 | 桌機與手機各有合適的開合與版面 |

### 2. 版面原則

- **工作台而非文件頁**：全螢幕工作區、左上狀態膠囊、工具抽屜、底部狀態列、右下縮放組。
- **中性為底**：黑白灰玻璃質感，主色為中性灰；光效色由使用者自訂，作為「完成」的專屬訊號。
- **深淺雙主題**：預設深色，選擇存於瀏覽器；淺色遮罩另外處理，避免對話框背景過暗。
- **連線要讀得懂**：連線表示先修，不可斜向亂穿卡片；轉折放在層間空隙，避免遮住節點。
- **動畫克制**：只做主題淡入、抽屜滑入與點亮；尊重 `prefers-reduced-motion`。

### 3. 學習區設計

| 元件 | 設計理由 |
|---|---|
| 三分頁（概念／練習／草稿紙） | 把「讀、答、推導」分開，減少切換成本 |
| 答題框可拖曳、縮放、雙擊還原 | 讓每個人自己決定教材與題目的相對位置 |
| 手寫草稿紙 | 需要推導的題目可先動筆，再回來作答 |
| 交卷鈕灰→可點 | 作答未滿不給交，門檻本身就是進度提示；三種題型共用此規則 |
| 三種題型 | 選擇題、數值輸入題、分步長題，長題逐小問批改 |
| 逐題紅綠回饋＋解析 | 錯在哪裡要立刻看得見，而不是只給分數 |
| 手機底部抽屜 | 窄螢幕不與樹爭空間；點背景關閉、點節點開啟 |

### 4. 點亮與成就感

點亮不是裝飾，是**完成訊號**：完成一個節點 → 節點發光 → 連線掃光 → 後續節點變為可學。光效顏色可自訂，讓使用者把「我的進度」調成自己認得的顏色。

因此驗證時不能只檢查「有沒有動畫」，還要檢查「完成之後狀態是否真的改變、下次開回來是否還記得」。

### 5. 驗證方法

| 層 | 做法 |
|---|---|
| 靜態 | JS 語法檢查、CSS 括號配平、資源可達、本地連結檢查 |
| 執行期 | 逐屏實測並存證：起始頁、展開後、深／淺主題、側板展開／收合、答題、批改、手機寬度 |
| 缺陷閉環 | 現象 → 根因 → 修法 → 回歸，只記錄真實可重現的問題 |
| 指令 | `node --test tests/*.test.cjs`、`node --check app.js` |

逐屏檢查重點：無水平捲動、公式不溢位、卡片不被側板壓住、點擊開合不誤觸、答題門檻與解鎖正確、進度重開後保留、瀏覽器錯誤為零。

### 6. 變更控制

改介面前先評估影響範圍：是否動到 DOM ID、狀態機、資料層或儲存鍵。視覺改動不應改變解鎖規則；資料格式改動要有版本與遷移路徑。詳見 [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) 與 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)。

---

## English

### 1. Design goal

The interface serves one purpose: **making learning progress visible**. Every visual decision starts from "can the user see at a glance where they are, what comes next, and what they just finished?"

| Goal | Design response |
|---|---|
| Visible progress | Skill tree, three node states, edges, completion markers |
| Feedback on completion | Unlock only on pass; node and path light up at that moment |
| Clear next step | Prerequisites drawn on the map; available and locked nodes look different |
| No interference | Neutral palette, dark/light themes, collapsible side panel |
| Continuity across devices | Distinct open/close behaviour and layout for desktop and mobile |

### 2. Layout principles

- **A workbench, not a document**: full-screen canvas, status capsule top-left, tool drawer, bottom status bar, zoom cluster bottom-right.
- **Neutral base**: black / white / grey glass surfaces with a neutral accent; the glow colour is user-defined and reserved as the completion signal.
- **Two themes**: dark by default, choice persisted in the browser; light backdrops handled separately so dialogs do not go dim.
- **Readable edges**: edges encode prerequisites; no diagonal crossings through cards, bends placed in the gaps between layers.
- **Restrained motion**: theme fade, drawer slide and lighting only; respect `prefers-reduced-motion`.

### 3. Lesson panel

| Element | Rationale |
|---|---|
| Three tabs (Concept / Practice / Scratchpad) | Separates reading, answering and working-out |
| Draggable, resizable panel with double-click reset | Lets each user place material and questions where they want |
| Handwritten scratchpad | Derivations can be worked out first, then answered |
| Submit grey → active | Unanswered items block submission; the threshold itself signals progress |
| Per-item red/green feedback and explanations | Show where the mistake is, not just the score |
| Mobile bottom sheet | Does not compete with the tree on narrow screens; tap background to close, tap node to open |

### 4. Lighting and achievement

Lighting is not decoration, it is a **completion signal**: finish a node → node glows → edge sweeps → successors become available. A custom glow colour lets the user make "my progress" recognisably their own.

Verification therefore cannot stop at "an animation played". Check that state actually changed and still persists after a reload.

### 5. Verification method

| Layer | Approach |
|---|---|
| Static | JS syntax check, CSS brace balance, reachable assets, local link check |
| Runtime | Screen-by-screen evidence: start, expanded tree, dark/light, panel expanded/collapsed, quiz, grading, mobile widths |
| Defect closure | Symptom → root cause → fix → regression; record only reproducible issues |
| Commands | `node --test tests/*.test.cjs`, `node --check app.js` |

Per-screen focus: no horizontal scroll, formulas not overflowing, cards not hidden behind the side panel, click-to-open without accidental closes, threshold and unlock correct, progress retained after reload, zero browser errors.

### 6. Change control

Before changing the interface, assess the blast radius: DOM IDs, state machine, data layer, storage keys. Visual changes must not alter unlock rules; format changes need a version and a migration path. See [`docs/CONTRIBUTING.en.md`](docs/CONTRIBUTING.en.md) and [`docs/ARCHITECTURE.en.md`](docs/ARCHITECTURE.en.md).

---

**相關文件 / Related**: [AGENTS.md](AGENTS.md) ｜ [使用指南 / User guide](README.md) ｜ [架構 / Architecture](docs/ARCHITECTURE.md) ｜ [文件總覽 / Docs index](docs/README.md)

[↑ 回到頂部 · Back to top](#top)
