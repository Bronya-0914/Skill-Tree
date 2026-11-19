<a id="top"></a>

# 資料保存與多人使用邊界 · Persistence & Multi-user Boundaries

> **一句話**：上傳一份資料，長出一棵技能樹 —— 讓進度看得見，讓每次完成都有成就感。
> **如何使用**：[網站使用指南](README.md#how-to-use) · [AI 必問流程](AGENTS.md) · [安全邊界](docs/SECURITY.md) · [線上展示](https://bronya-0914.github.io/Skill-Tree/)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/> · **儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **本檔為單檔雙語**：[繁體中文](#繁體中文) ｜ [English](#english)

---

## 繁體中文

### 1. 目前模式

網站是純靜態、無後端、無帳號。**每個人用自己的瀏覽器，資料互不干擾，也不會自動同步。**

| 特性 | 現況 |
|---|---|
| 多人同時使用 | 可以；每人各自一份瀏覽器資料 |
| 進度存放 | `localStorage`，綁瀏覽器同源 |
| 需要註冊嗎 | 不需要 |
| 換裝置 | 不會自動帶過去，要手動匯出／匯入備份 |
| 伺服端批改 | 沒有；題目與答案都在前端 |

### 2. 會保存什麼

| 類別 | 說明 |
|---|---|
| 學習進度 | 已完成節點、點亮狀態、分數 |
| 介面偏好 | 深淺主題、光效色、語言、側板位置與尺寸 |
| 作答狀態 | 選課、分頁、已作答但未交卷的內容 |
| 草稿 | 手寫草稿紙的筆跡 |

各項以帶版本號的結構存放，讀回時會校驗；節點已不存在或答案索引超出範圍時會忽略，避免舊資料讓新版教材出錯。

### 3. 邊界與風險

| 邊界 | 影響 |
|---|---|
| 同源限制 | 換網域、換瀏覽器、清除網站資料，進度都會消失 |
| 覆蓋式匯入 | 匯入備份會取代現有資料，不合併 |
| 備份不加密 | 純 JSON，任何人拿到檔案就能讀 |
| 答案在前端 | **不能用於需要保密答案的正式考試** |
| 無伺服端運算 | 若真的要保密批改，必須有伺服端，這已超出純靜態範圍 |

### 4. 換裝置的正確做法

1. 在原裝置從抽屜「資料備份」匯出 JSON。
2. 把檔案帶到新裝置。
3. 在新裝置匯入；系統會先確認覆蓋。
4. 檢查進度、主題、光效、草稿與未送出作答是否都回來。

### 5. 如果要做真正的多使用者

| 需求 | 純靜態能否滿足 | 需要什麼 |
|---|---|---|
| 每人各自使用、互不干擾 | 可以 | 現況即可 |
| 跨裝置自動同步 | 不可以 | 帳號與雲端儲存 |
| 老師查看全班進度 | 不可以 | 伺服端彙整 |
| 答案保密的正式評量 | 不可以 | 伺服端出題與批改 |

任何一項超出純靜態範圍的升級，都應先做需求與風險確認，再動程式；不要用「加個資料庫」帶過「前端必須讀得到答案」這個根本矛盾。詳見 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 與 [`docs/SECURITY.md`](docs/SECURITY.md)。

### 6. 給 AI 的提醒

**若答題方式涉及保密批改或多使用者評分，要先說明純靜態做不到**

---

## English

### 1. Current model

The site is pure static: no backend, no accounts. **Each person uses their own browser; data neither collides nor syncs automatically.**

| Property | Today |
|---|---|
| Multiple simultaneous users | Yes, each with their own browser-side data |
| Where progress lives | `localStorage`, tied to the browser origin |
| Registration | None |
| Switching devices | No automatic transfer; export/import a backup manually |
| Server-side grading | None; questions and answers are on the client |

### 2. What is persisted

| Category | Detail |
|---|---|
| Learning progress | Completed nodes, lit state, scores |
| Interface preferences | Theme, glow colour, language, side-panel position and size |
| Answer state | Selected node, active tab, answered-but-not-submitted items |
| Scratchpad | Handwritten strokes |

Entries are versioned and validated on read. Missing nodes or out-of-range answer indexes are ignored so stale data cannot break newer material.

### 3. Boundaries and risks

| Boundary | Effect |
|---|---|
| Same-origin | Changing origin, browser, or clearing site data loses progress |
| Overwrite import | Importing a backup replaces existing data rather than merging |
| Unencrypted backup | Plain JSON; anyone with the file can read it |
| Answers on the client | **Not suitable for examinations where answers must stay secret** |
| No server compute | Truly secure grading requires a server, outside the pure-static scope |

### 4. Moving to another device

1. Export a JSON backup from the drawer on the old device.
2. Carry the file to the new device.
3. Import it there; the system asks for overwrite confirmation.
4. Check that progress, theme, glow, scratchpad and unsubmitted answers all came back.

### 5. If real multi-user support is needed

| Requirement | Pure static? | What it needs |
|---|---|---|
| Each user independent | Yes | Current design |
| Automatic cross-device sync | No | Accounts and cloud storage |
| Instructor dashboard | No | Server-side aggregation |
| Secure formal assessment | No | Server-side delivery and grading |

Any upgrade beyond the static boundary needs requirements and risk review before code changes. Do not wave away the fundamental conflict — "the client must be able to read the answers to grade them" — with "just add a database". See [`docs/ARCHITECTURE.en.md`](docs/ARCHITECTURE.en.md) and [`docs/SECURITY.en.md`](docs/SECURITY.en.md).

### 6. Note for agents

[`AGENTS.md`](AGENTS.md) requires asking for material first and the answer mode second. **If the chosen answer mode implies confidential grading or multi-user scoring, explain upfront that a pure static site cannot do it.** Never imply support in course material or handoff notes.

---

**相關文件 / Related**: [AGENTS.md](AGENTS.md) ｜ [使用指南 / User guide](README.md) ｜ [安全邊界 / Security](docs/SECURITY.md) ｜ [文件總覽 / Docs index](docs/README.md)

[↑ 回到頂部 · Back to top](#top)
