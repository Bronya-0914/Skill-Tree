<a id="top"></a>

# 學習包格式 · Learning Pack Format

> **一句話**：上傳一份資料，長出一棵技能樹 —— 讓進度看得見，讓每次完成都有成就感。
> **如何使用**：[網站使用指南](README.md#how-to-use) · [AI 必問流程](AGENTS.md) · [生成方法](AI_TEACHING_GUIDE.md) · [線上展示](https://bronya-0914.github.io/Skill-Tree/)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/> · **儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **English**: [PACK_FORMAT.en.md](PACK_FORMAT.en.md)

---

## 0. 使用時機

本檔定義「使用者給資料 → AI 生成 → 網站匯入」中間那一包的結構。寫 JSON 前請先確認 [`AGENTS.md`](AGENTS.md) 的兩個必問已經完成：**取得資料**、**確認答題方式**。格式只是載體，來源與偏好才是決定內容的東西。

所有路徑以 `<topic-id>` 表示課題 ID，不代表任何特定學科或既有課題。

---

## 1. 目錄結構

```text
learning-packs/
  <topic-id>/
    topic.json
    nodes/
      <topic-id>.<node-key>.json
      ...
    README.md            （可選，課題說明）
  <topic-id>.zip         （由 builder 產生，供網站匯入）
  catalog.js             （由 builder 產生，網站讀取的目錄檔）
```

| 檔案 | 誰產生 | 可否手改 |
|---|---|---|
| `topic.json` | AI／人工 | 可 |
| `nodes/*.json` | AI／人工 | 可 |
| `README.md` | AI／人工 | 可 |
| `catalog.js` | builder | **不可** |
| `<topic-id>.zip` | builder | **不可** |

改過來源後執行：

```bash
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

---

## 2. `topic.json`

| 欄位 | 型別 | 說明 |
|---|---|---|
| `schemaVersion` | number | 格式版本，固定 `1` |
| `id` | string | 課題 ID，英文小寫、數字、連字號 |
| `title` | string | 顯示名稱 |
| `version` | number | 內容版本；任何內容改動都必須遞增 |
| `language` | string | 教材主要語言 |
| `attachTo` | string | 掛載起點，通常為 `start` |
| `description` | string | 一句話說明課題涵蓋什麼 |
| `nodes` | string[] | 節點 ID 清單，順序僅供參考，解鎖以 `parents` 為準 |
| `sourceNote` | string | 資料來源說明；若無指定資料，必須在此標明 |

`version` 是合併依據：網站比較版本號決定是否取代既有內容，**不會自動合併**兩份教材。

---

## 3. 節點檔 `nodes/*.json`

| 欄位 | 型別 | 說明 |
|---|---|---|
| `id` | string | 穩定不變；改動會讓既有進度對不上 |
| `title` | string | 節點標題 |
| `kind` | string | 分類標籤，供配色或統計用 |
| `minutes` | number | 建議時間 |
| `parents` | string[] | 先修節點 ID，必須存在於本課題且不可形成循環 |
| `intro` | string | 導言：這個知識點解決什麼問題 |
| `content` | object[] | 分段概念，見下表 |
| `questions` | object[] | 練習題，1–20 題，可為選擇題／數值輸入題／分步長題 |
| `passCount` | number | 通過所需答對題數，須小於或等於題數 |

### 3.1 `content[]` 區塊

| `type` | 用途 | 必要欄位 |
|---|---|---|
| `heading` | 小標題 | `text` |
| `paragraph` | 說明段落 | `text` |
| `formula` | 公式（明確分行） | `text`，用 `\n` 分行，避免自動折行錯位 |
| `example` | 逐步例題 | `text` |
| `tip` | 常見誤解／提示 | `text` |

公式與長文字請**自行明確分行**；網站的公式方框不會自動幫你拆行，過長的單行會在窄螢幕溢位。

### 3.2 `questions[]` 題目（三種題型）

每節點 1–20 題。`passCount` 為通過所需答對題數，須介於 1 與題數之間。

**① 選擇題**

| 欄位 | 型別 | 說明 |
|---|---|---|
| `prompt` | string | 題幹 |
| `options` | string[] | 2–6 個選項 |
| `answer` | number | 正確選項索引（0 起） |
| `explanation` | string | 逐題解析 |

**② 數值輸入題**

| 欄位 | 型別 | 說明 |
|---|---|---|
| `type` | string | 固定 `'input'` |
| `prompt` | string | 題幹 |
| `answers` | string[] | 1–8 個可接受答案；可為整數、小數、分數或 `sqrt(2)`、`pi` 等數值式 |
| `tolerance` | number | 可選，容差上限 0.01 |
| `explanation` | string | 逐題解析 |

批改使用獨立的數值式解析器，**不會執行 JavaScript**；比較時支援 `+ - * / ^` 與 `sqrt`／`sin`／`cos`／`tan`／`ln`／`exp`／`abs`。

**③ 分步長題**

| 欄位 | 型別 | 說明 |
|---|---|---|
| `type` | string | 固定 `'multipart'` |
| `prompt` | string | 長題題幹 |
| `parts` | object[] | 2–8 個小問，每個都是一個數值輸入題 |
| `explanation` | string | 逐題解析 |

長題要**全部小問都正確**才算通過該題，適合需要逐步推導的題目。

正確選項位置應打散；干擾項與可接受答案應來自真實誤解。題型由 [`AGENTS.md`](AGENTS.md) 階段 2 的偏好決定，解析寫法也隨之調整。

---

## 4. 驗證規則

匯入時會被拒絕的情況：

| 類別 | 拒絕條件 |
|---|---|
| 結構 | 缺必要欄位、型別錯誤、`schemaVersion` 不符 |
| 課題 | ID 格式不合法、`version` 非正整數、`nodes` 為空 |
| 節點 | ID 重複、`parents` 指向不存在節點、先修成環、題數超過 20、`passCount` 大於題數 |
| 題目 | 選擇題選項為空／`answer` 越界；輸入題 `answers` 為空或容差無效；長題 `parts` 不足 2 個；缺解析 |
| 內容 | 文字過長、區塊型別不明 |
| 封裝 | ZIP 結構異常、CRC 不符、檔案過大 |

被拒絕時**回頭改來源**，不要嘗試繞過驗證；驗證是為了保證「點亮的節點」真的對應完整的學習單位。

---

## 5. ZIP 與建置產物

- ZIP 由 builder 產出，封裝課題描述、節點檔與可選說明檔。
- `catalog.js` 是網站讀取的目錄，**不可手改**；改來源後重建即可。
- 版本號遞增後重建，網站才會認定為較新內容。
- 生成檔不進人手編輯流程，避免下次重建被覆蓋。

---

## 6. 版本合併與進度

| 動作 | 對進度的影響 |
|---|---|
| 改內文但不改節點 ID | 既有進度保留 |
| 改節點 ID 或刪除節點 | 對應進度可能對不上，需先提醒使用者 |
| 提高 `version` | 網站視為較新內容並取代 |
| 匯入不同課題 | 互不覆蓋，依 ID 區分 |

---

## 7. 與答題方式的關係

[`AGENTS.md`](AGENTS.md) 規定 AI 必須先問「想用什麼方式回答問題」。偏好直接對應到題目型別：

| 偏好 | 落在格式哪裡 |
|---|---|
| 選擇題 | `questions[]` 的 `prompt`／`options`／`answer` |
| 數值輸入題 | `type: 'input'`＋`answers`＋可選 `tolerance` |
| 分步長題 | `type: 'multipart'`＋`parts` |
| 混合／自訂 | 依節點分配三種題型，並在交付說明記錄；自訂做法先確認可行性 |

AI 應依使用者偏好選用對應題型；若想要的是這三種之外的方式（例如口述回答、上傳手寫照片批改），先說明落差，再把偏好落實在題目措辭與解析寫法。不得宣稱網站已具備該功能，也不得虛構不存在的欄位。


---

## 8. 檢查清單

- [ ] `AGENTS.md` 的資料提問與答題方式提問都已完成
- [ ] `topic.json` 有 `schemaVersion`、遞增後的 `version`、清楚 `sourceNote`
- [ ] 每個 `parents` 都存在、無循環
- [ ] 節點 ID 穩定，長公式已明確分行
- [ ] 題目型別符合偏好，`prompt`／`answers`／`parts` 欄位正確，解析齊全
- [ ] `passCount` 不大於題數
- [ ] 已執行 builder 與測試，未手改生成檔
- [ ] 已在網站實測匯入、解鎖與進度保存

---

**相關文件**：[AGENTS.md](AGENTS.md) ｜ [使用指南](README.md) ｜ [生成方法](AI_TEACHING_GUIDE.md) ｜ [技術架構](docs/ARCHITECTURE.md) ｜ [文件總覽](docs/README.md)

[↑ 回到頂部 · Back to top](#top)
