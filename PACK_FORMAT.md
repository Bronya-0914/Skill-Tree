<a id="top"></a>

<div align="center">

# 主題學習包格式 v1

**微積分漫遊 · Calculus Skill Tree**

Learning Pack Format Specification

單一主題、一個節點一份 JSON、可驗證、可版本化的 UTF-8 教材封裝規格。

[繁體中文](PACK_FORMAT.md) · [English](PACK_FORMAT.en.md)

</div>

**狀態列：** 文件版本 `rev. 2.0（2026-11-17 重寫）`　｜　對應本機 HEAD `8d7b4cb`　｜　教材 `topic.version=5`

> **文件資訊**
>
> | 項目 | 值 |
> |---|---|
> | 文件版本 | `rev. 2.0`，2026-11-17 重寫，整合 GitHub 儲存庫既有中英文件 |
> | 對應本機 HEAD | `8d7b4cb Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs` |
> | 教材 `topic.version` | `5`（`id=cis221-calculus`、`schemaVersion=1`、`attachTo=start`） |
> | 規格依據 | `js/topic-packs.js` 的 `validate()`／`prepare()`／`loadLibrary()`／`readZip()`／`writeZip()`；`scripts/build-learning-packs.cjs` |
> | 線上站台 | <https://bronya-0914.github.io/Skill-Tree/> |
> | 原始碼儲存庫 | <https://github.com/Bronya-0914/Skill-Tree> |
> | 授權 | 專案本身未設 `LICENSE`；第三方 `fflate` 為 MIT，見 `js/vendor/fflate-LICENSE.txt` |

<details>
<summary><strong>目錄 · Table of Contents（按此展開）</strong></summary>

- [1. 概覽](#s1)
- [2. 現況實例：內建微積分學習包](#s2)
- [3. 目錄結構與檔案職責](#s3)
- [4. `topic.json` 主題設定](#s4)
- [5. 節點 JSON 欄位](#s5)
- [6. `validate()` 完整驗證規則表](#s6)
- [7. ZIP 格式與 `readZip()` 技術驗證](#s7)
- [8. `loadLibrary()` 與 `prepare()`：版本比較與合併](#s8)
- [9. `buildLessons()`：拓樸排序與幾何](#s9)
- [10. 建置流程與 `catalog.js` 產生格式](#s10)
- [11. `fflate` 與授權](#s11)
- [12. 完整 JSON 範例](#s12)
- [13. 錯誤範例與疑難排解](#s13)
- [14. 匯入與更新（操作面）](#s14)
- [15. 常見問題 FAQ](#s15)
- [16. 變更紀錄](#s16)
- [17. 附錄：相關文件與連結](#s17)

</details>

---

<a id="s1"></a>

## 1. 概覽

所有課程均以 **Learning Pack（主題學習包）** 為單位：一個主題一個資料夾、每個節點一個 JSON 檔；分享或上傳時封裝成單一 ZIP。檔案編碼一律為 UTF-8。網站為純前端應用，可直接由本機 `index.html` 開啟，無需後端、帳號或伺服端批改教材。

設計原則：

- **單一來源**：`topic.json` 與 `nodes/*.json` 是唯一需要人工編輯的教材；`learning-packs/catalog.js` 與 `learning-packs/<id>.zip` 是建置產物，不手動修改。
- **可驗證**：所有教材在匯入或建置時都必須通過 `js/topic-packs.js` 的 `validate()`；ZIP 另須通過 `readZip()` 的二進位檢查。
- **可版本化**：`topic.version` 為整數內容版本；內容有變動即須升版，否則 `prepare()` 會拒絕。
- **關係以 ID 為準**：節點先修關係取決於 JSON 內的 `id`、`parents` 與 `attachTo`，與檔名順序無關。
- **教材與進度分離**：學習包只含教學內容；個人進度、設定、草稿筆跡存於瀏覽器 `localStorage`，不會寫入學習包 ZIP。

實際格式以目前驗證器 `js/topic-packs.js` 為準；本文件為該程式行為的書面整理。

[回到頂部](#top)

---

<a id="s2"></a>

## 2. 現況實例：內建微積分學習包

以下數值以唯讀方式對本機 HEAD `8d7b4cb` 實算，並與 `learning-packs/catalog.js`、`learning-packs/cis221-calculus.zip` 逐檔比對一致。

| 項目 | 現值 | 說明 |
|---|---|---|
| `id` | `cis221-calculus` | 主題 ID，同時為所有節點 ID 的前綴 |
| `schemaVersion` | `1` | 目前唯一支援的格式版本 |
| `version` | `5` | 內容版本（由 1 逐次升至 5） |
| `title` | `CIS221 微積分完整學習路線` | 1–60 字 |
| `description` | 27 個循序漸進的學習節點，涵蓋代數、微分、多變量、積分及數值方法。每節點 10 題，附教學、例題與解析。 | ≤2,000 字 |
| `attachTo` | `start` | 入口接入點；`start` 為共用導覽起點，不是課程節點 |
| 節點數 | 27 | `nodes/*.json` 共 27 檔 |
| 題目數 | 270 | 每節點 10 題，每題 4 個選項 |
| `passCount` | 7 | 27 個節點全為 7；需答對至少 7 題才點亮 |
| `minutes` | 15 | 27 個節點全為 15 分鐘 |
| `kind` 分布 | `base` 6、`derivative` 15、`integral` 6 | 樣式分類，不影響解鎖邏輯 |
| `parents` 分布 | 0 個先修：1；1 個：12；2 個：12；3 個：2 | 最多 3 個，上限為 10 |
| `content` 區塊 | 271 | `heading` 81、`paragraph` 81、`formula` 27、`example` 55、`tip` 27 |
| `\n` 換行數 | 365 | `formula` 116、`example` 169、`paragraph` 54、`tip` 26、`heading` 0 |
| `catalog.js` | 169,996 B／4,515 行 | 含 270 個 `"answer"` 欄位 |
| `cis221-calculus.zip` | 29 個項目／58,184 B（壓縮）／145,337 B（未壓縮總和） | `topic.json` + `README.md` + 27 個 `nodes/*.json` |
| 測試 | `20 / 20` 通過 | `topic-packs` 14、`tree-layout` 3、`i18n` 3 |

`topic.json` 現值（完整內容）：

```json
{
  "schemaVersion": 1,
  "id": "cis221-calculus",
  "title": "CIS221 微積分完整學習路線",
  "version": 5,
  "description": "27 個循序漸進的學習節點，涵蓋代數、微分、多變量、積分及數值方法。每節點 10 題，附教學、例題與解析。",
  "attachTo": "start"
}
```

> 補充：線上 GitHub Pages 站台目前可正常存取，但內容為較早版本（線上 `topic.json` 為 `version: 1`，互動方式也不同），與本文件所述的本機 HEAD `8d7b4cb` 並不一致。本文件所有數值均以本機為準。

[回到頂部](#top)

---

<a id="s3"></a>

## 3. 目錄結構與檔案職責

```text
learning-packs/
├── cis221-calculus/                 主題來源資料夾（唯一需人工編輯的部分）
│   ├── topic.json                   主題設定：名稱、版本、接入點
│   ├── README.md                    課程清單與使用說明（會一併打包進 ZIP）
│   └── nodes/                       一個節點一個 JSON
│       ├── cis221-calculus.functions.json
│       └── …（其餘 26 個節點）
├── cis221-calculus.zip              建置產物：可上傳／分享的學習包
└── catalog.js                       建置產物：供網站直接載入的 JS 常數
```

| 檔案 | 角色 | 是否可手動編輯 |
|---|---|---|
| `topic.json` | 主題層級設定 | 可，且為主要編輯對象 |
| `nodes/<完整節點 ID>.json` | 單一節點的教學內容、題庫、先修 | 可 |
| `README.md` | 主題說明；建置時會放入 ZIP，但 `readZip()` 會略過 `.md` | 可 |
| `<topic-id>.zip` | 由 `build-learning-packs.cjs` 以 `zipSync(files, {level:6})` 產生 | 不可，會被覆寫 |
| `catalog.js` | `const LEARNING_PACKS = …;` 供 `index.html` 以 `<script defer>` 載入 | 不可，會被覆寫 |

ZIP 內包含 `topic.json` 與 `nodes/`，也可再多包一層主題資料夾（例如 `course/topic.json`、`course/nodes/…`）。檔名可自訂，但 `topic.json` 與 `nodes/` 的相對關係必須維持；節點關係依據 JSON 裡的 `id` 判定。

[回到頂部](#top)

---

<a id="s4"></a>

## 4. `topic.json` 主題設定

```json
{
  "schemaVersion": 1,
  "id": "calculus-extra",
  "title": "微積分加練",
  "version": 1,
  "description": "用切線與隱函數練習延伸微分技巧。",
  "attachTo": "start"
}
```

| 欄位 | 型別 | 規則 | 預設 |
|---|---|---|---|
| `schemaVersion` | 整數 | 必須嚴格等於 `1` | 無（必填） |
| `id` | 字串 | ≤100 字，符合 `/^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/` | 無（必填） |
| `title` | 字串 | 1–60 字（去除首尾空白後不可為空） | 無（必填） |
| `version` | 整數 | 1–1,000,000；修改內容後須增加 | 無（必填） |
| `description` | 字串 | 1–2,000 字 | 無（必填） |
| `attachTo` | 字串 | ID 規則同 `id`；入口節點 `parents` 為空時接入此節點 | `start` |

`id` 必須以小寫英文字母開頭，其後可為小寫字母、數字、連字號，或以句點分隔的額外段落（例如 `biology-basics.cells` 形式的命名空間概念，實際用於節點 ID）。`attachTo` 可指向其他已載入主題的完整節點 ID，以便把新主題接在既有課程之後。

[回到頂部](#top)

---

<a id="s5"></a>

## 5. 節點 JSON 欄位

節點鍵固定為：`schemaVersion, id, title, intro, kind, minutes, parents, content, questions, passCount`。

| 欄位 | 型別 | 規則 |
|---|---|---|
| `schemaVersion` | 整數 | 必須為 `1` |
| `id` | 字串 | 合法 ID，且必須以 `<topic.id>.` 開頭；同一包內不可重複 |
| `title` | 字串 | 1–60 字 |
| `intro` | 字串 | 1–2,000 字 |
| `kind` | 字串 | `base`／`derivative`／`integral`；省略時為 `base` |
| `minutes` | 整數 | 1–120；省略時為 `8` |
| `parents` | 字串陣列 | ≤10 個、不可重複、每個皆須為合法 ID；空陣列會接到主題的 `attachTo` |
| `content` | 物件陣列 | 1–60 段；每段 `{type, text}`，`type` ∈ `heading`／`paragraph`／`formula`／`example`／`tip`，`text` 1–6,000 字 |
| `questions` | 物件陣列 | 1–20 題；每題 `{prompt, options, answer, explanation}` |
| `passCount` | 整數 | 1 … `questions.length` |

`content[].text` 內的 `\n` 會由 `lessonFromNode()` 轉為 `<br>`，並先經過 `escape()` 作 HTML 轉義，因此 HTML 標籤一律以純文字顯示，不會被執行。`paragraph.text` 內的清單以 `•` 與換行表示；格式沒有獨立的 `list` 區塊，也不要預期 Markdown 表格或自訂欄位會被渲染。公式可直接用 Unicode（例如 `x²`、`∫`、`√`）。

`questions[]` 細項：

| 欄位 | 規則 |
|---|---|
| `prompt` | 1–1,000 字 |
| `options` | 2–6 個；每個 1–500 字；同一題內不可重複 |
| `answer` | 整數，`0` … `options.length - 1`，**0 起始索引**（`1` 代表第二個選項） |
| `explanation` | 1–2,000 字 |

`lessonFromNode()` 會把節點轉成執行期 `lesson`：`{id, title, intro, kind, topicId, topicTitle, icon, minutes, parents, body, passCount, quiz}`，其中 `quiz` 為 `[prompt, options, answer, explanation]` 四元陣列，`icon` 為 `∫`（`integral`）或 `◇`，`parents` 為空陣列時補成 `[topic.attachTo]`。

[回到頂部](#top)

---

<a id="s6"></a>

## 6. `validate()` 完整驗證規則表

以下為 `js/topic-packs.js` 中 `validate()`、`ordered()`、`buildLessons()` 的完整規則。文字欄位皆先檢查 `typeof === 'string'`、去除首尾空白後非空，且長度不超過上限；整數欄位以 `Number.isInteger` 檢查。

### 6.1 主題與節點共同規則

| 對象 | 規則 |
|---|---|
| `topic.schemaVersion` / `node.schemaVersion` | 必須 `=== 1`，其餘值拒絕 |
| 所有 ID | ≤100 字且符合 `/^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/` |

### 6.2 主題層級

| 欄位 | 規則 |
|---|---|
| `topic.id` | 合法 ID、≤100 字 |
| `topic.title` | 1–60 字 |
| `topic.version` | 整數 1–1,000,000 |
| `topic.description` | ≤2,000 字（且去空白後非空） |
| `topic.attachTo` | 合法 ID；省略時 `start` |
| `pack.nodes.length` | 1–100 個節點 |

### 6.3 節點層級

| 欄位 | 規則 |
|---|---|
| `node.id` | 合法 ID，必須以 `<topic.id>.` 開頭，同包內不可重複 |
| `node.title` | ≤60 字 |
| `node.intro` | ≤2,000 字 |
| `node.kind` | `base`／`derivative`／`integral` 三值，省略為 `base` |
| `node.minutes` | 整數 1–120，省略為 `8` |
| `node.parents` | 陣列，≤10 個；不可重複；每個為合法 ID |
| `node.content` | 陣列，1–60 段；每段 `type` 限五種、`text` ≤6,000 字 |
| `node.questions` | 陣列，1–20 題 |
| `node.passCount` | 整數 1 … `questions.length` |

### 6.4 題目層級

| 欄位 | 規則 |
|---|---|
| `question.options` | 陣列，2–6 個；各選項 ≤500 字；同一題內不可重複 |
| `question.prompt` | ≤1,000 字 |
| `question.answer` | 整數，`0` 起始，範圍 `0 … options.length - 1` |
| `question.explanation` | ≤2,000 字 |

### 6.5 圖與圖書館層級（`ordered()`／`buildLessons()`）

| 對象 | 規則 |
|---|---|
| 節點 ID 全域唯一 | `ordered()` 以 `Set(['start', ...ids])` 檢查，重複即拒絕 |
| 先修存在 | 每個 `parents` 項目必須存在於目前載入的節點集合或為 `start` |
| 無循環 | `ordered()` 以拓樸排序檢查，若無任何可就緒節點即判定循環 |
| 主題數 | `buildLessons()` 最多 30 個主題；主題 ID 不可重複 |
| 匯入節點總數 | 合計最多 300 個 |

> 注意：`validate()` 只檢查單一包內的結構；跨主題先修、整體 30／300 上限、循環與缺失先修，是在 `buildLessons()`／`ordered()` 及 `prepare()` 合併後才完整檢查。

[回到頂部](#top)

---

<a id="s7"></a>

## 7. ZIP 格式與 `readZip()` 技術驗證

`readZip(bytes, zip)` 自行解析 ZIP 二進位結構，不依賴瀏覽器解壓 API 的信任邊界。完整規則如下。

| 檢查 | 值／規則 |
|---|---|
| 檔案大小 | `22` bytes ≤ `bytes.length` ≤ `5 MB`（`5 × 1024 × 1024`）；22 bytes 為空 EOCD 的最小長度 |
| EOCD 簽章 | `0x06054b50`；由檔尾向前搜尋，並驗證 `i + 22 + commentLength === bytes.length` |
| 中央目錄簽章 | `0x02014b50`（每一項目） |
| Local file header 簽章 | `0x04034b50`（每一項目） |
| 項目數 | `1 … 128`；不支援分卷 ZIP（disk number、central directory disk、該磁碟項目數皆須一致且為 0） |
| 目錄位移 | `offset + centralDirectorySize === end`，否則視為目錄無效 |
| 壓縮方法 | `0`（Store）或 `8`（Deflate）；`flags & 1`（加密）必須為 0 |
| CRC32 | 反射多項式 `0xedb88320`，初值 `0xffffffff`、終值 XOR `0xffffffff`；每個檔案解壓後重新計算並與目錄中的 CRC 比對 |
| 單檔解壓上限 | ≤ `512 KB`（`MAX_FILE = 512 × 1024`） |
| 總解壓上限 | ≤ `4 MB`（`MAX_TOTAL = 4 × 1024 × 1024`）；Inflate 過程亦即時累計檢查 |
| 檔名解碼 | 以 `TextDecoder('utf-8', {fatal:true})` 嚴格解碼 |
| 檔名合法性 | 不可為空；不得以 `/` 開頭（絕對路徑）；不得含 `\`、`:`、NUL；任一路徑段不得為 `..` 或 `.`（路徑穿越） |
| 檔名唯一性 | 不可有重複檔案名稱 |
| 檔名一致性 | Local header 的檔名必須與中央目錄完全相同 |
| 解壓長度 | 實際解壓長度須等於目錄宣告的 `original` 大小 |
| 目錄結尾 | 逐項位移後 `offset === end` |
| 忽略檔 | `.md`／`.txt`（不分大小寫）一律略過，不參與教材解析 |
| manifest | 恰好一份 `topic.json`（`name === 'topic.json'` 或以 `/topic.json` 結尾） |
| 檔案位置 | 其餘檔案只能是 `<prefix>topic.json` 或 `<prefix>nodes/<單層檔名>.json`；`prefix` 由 `topic.json` 位置推導，容許**恰好一層外層資料夾** |
| JSON 內容 | 其餘檔案必須是有效 UTF-8 JSON，否則拒絕 |
| 最終驗證 | 解析出的 `{topic, nodes}` 再交給 `validate()` 完整驗證 |

`writeZip(pack, zip)` 產生 `topic.json` 與 `nodes/<node.id>.json`（`JSON.stringify(..., null, 2)`），以 `zipSync(files, {level:6})` 壓縮；建置腳本會額外放入 `README.md`。`tests/topic-packs.test.cjs` 已驗證 `readZip(writeZip(sample)) === sample`、單一外層資料夾（`course/` 前綴）、Store（`level:0`）、截斷檔、壞 JSON、路徑穿越、缺 `topic.json`、CRC 損壞與超大解壓等情境。

[回到頂部](#top)

---

<a id="s8"></a>

## 8. `loadLibrary()` 與 `prepare()`：版本比較與合併

### 8.1 `loadLibrary(bundled, saved = [])`

啟動時合併「網站內建包」與「瀏覽器已儲存的包」，同一 `topic.id` 只保留一份。

- 兩個參數皆須為陣列；每個包先經 `validate()`。
- `saved` 內的主題 ID 不可重複。
- 逐一處理 `saved`：
  - 主題 ID 不存在於 `library`：直接加入。
  - **使用者版本 `>=` 內建版本**（`stored.topic.version >= library[index].topic.version`）：以使用者包**整份取代**（相同或較新版本優先）。
  - **內建版本較新**：保留內建的 `topic`，但以 `Map` 合併節點——先放入使用者所有節點，再以內建同 ID 節點覆寫，因此「更新同 ID 節點，並保留使用者額外節點」。
- 最後呼叫 `buildLessons(library)`，驗證整體圖（30 主題／300 節點、先修存在、無循環）。

### 8.2 `prepare(raw, packs)`

匯入預覽與確認時使用，回傳 `{packs, lessons, changes, changed, topic, retained}`。

1. `incoming = validate(raw)`；找出同 ID 的 `previous`（若有）並 `validate()`。
2. **舊版拒絕**：若 `previous` 存在且 `incoming.topic.version < previous.topic.version`，丟出「這個包的版本較舊，請使用相同或較新的版本。」
3. 建立 `changes`：對每個傳入節點輸出 `{id, title, action, parents}`，`action` 為：
   - `新增`：舊包沒有此 ID；
   - `相同`：`JSON.stringify(node) === JSON.stringify(oldNodes.get(node.id))`；
   - `更新`：其餘情況。
   `parents` 為 `node.parents.length ? node.parents : [incoming.topic.attachTo]`。
4. `changed = changes.some(c => c.action !== '相同') || JSON.stringify(incoming.topic) !== JSON.stringify(previous?.topic)`。
5. **內容改動未升版拒絕**：若 `previous` 存在且 `changed === true`，要求 `incoming.topic.version > previous.topic.version`，否則丟出「內容有修改，請把 topic.json 的 version 增加後再上傳。」此檢查在合併前發生，失敗時不改動原集合。
6. 合併：`mergedNodes = new Map(oldNodes)`，再以傳入節點逐個 `set` 覆寫。**未列於本次學習包的舊節點會保留**；`retained = mergedNodes.size - incoming.nodes.length` 即為保留下來的舊節點數。
7. 以 `buildLessons(next)` 驗證合併後的整體圖，回傳結果。

### 8.3 冪等與語意對照

| 情境 | 結果 |
|---|---|
| 完全相同的包再次匯入 | 所有 `action` 為 `相同`、topic 相同 → `changed === false`，不要求升版；介面顯示「已匯入」 |
| 較舊版本 | `prepare()` 拒絕；`loadLibrary()` 則以較新者優先 |
| 內容改動但版本號不變 | `prepare()` 拒絕，且原本的 `packs` 保持不變 |
| 只改部分節點並升版 | 該節點 `更新`，其餘未列出的舊節點以 `retained` 保留 |
| 新增節點並升版 | 該節點 `新增`；既有節點不變 |

`tests/topic-packs.test.cjs` 對此有明確斷言：`prepare(sample, first.packs).changed === false`、`retained === 26`、`assert.throws(..., /較舊/)`、`assert.throws(..., /version/)`，以及失敗後 `JSON.stringify(library) === before`。

教材與進度分開存放：更新後保留已完成紀錄，尚未通過的節點依新的先修條件解鎖，更新題目後可重新練習。

[回到頂部](#top)

---

<a id="s9"></a>

## 9. `buildLessons()`：拓樸排序與幾何

- `ordered()` 以 `start` 為起點做拓樸排序，`parents` 全部就緒才可加入結果；順序不依賴檔名。
- `buildLessons()` 最多 30 個主題、合計 300 個匯入節點。
- 幾何常數：`left = 65`、層距 `115`、欄距 `210`、每段主題後 `+60`；`depth` 由先修深度推算，`node.x = left + width/2 + (index - (n-1)/2) * 210`、`node.y = 65 + level * 115`。
- 呈現層另由 `js/tree-layout.js` 的 `SkillTreeLayout.build()` 決定最終連線與座標：內含 **28 列固定 `preview`**（`start` 加 27 個節點）。當 `nodes.length === 28` 且每列 `parents` 完全匹配時，直接把 preview 的 `x, y` 寫回節點；否則（新主題、匯入或改動過的包）使用 fallback 幾何（`columnStep = 350`、`layerStep = 168`，`nodeWidth = 282`、`nodeHeight = 74`），子樹中點或欄位遞增配置。
- `SkillTreeLayout.build()` 會**就地改寫**傳入節點的 `x/y`，這是既有行為；`parents` 保持不變，仍為解鎖邏輯的唯一依據。

此段僅供理解資料流；教材作者不需在 JSON 內填寫任何座標。

[回到頂部](#top)

---

<a id="s10"></a>

## 10. 建置流程與 `catalog.js` 產生格式

`scripts/build-learning-packs.cjs`（37 行）於專案根目錄執行：

```text
node scripts/build-learning-packs.cjs
```

流程：

1. 掃描 `learning-packs/` 下**含 `topic.json` 的子目錄**，以 `a.name.localeCompare(b.name)` 排序。
2. 逐一讀入 `topic.json` 與 `nodes/*.json`（檔名排序後讀取），呼叫 `api.validate({topic, nodes})`。
3. 節點以 `pack.nodes.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hant', {numeric: true}))` 排序；`numeric: true` 讓 `01 · …` 至 `27 · …` 依數字而非字典序排列。
4. 若無任何主題，丟出 `learning-packs 至少需要一個主題。`
5. `api.loadLibrary(packs.map(p => p.pack))` 合併為 `library`。
6. 對每一包以 `zip.zipSync(files, {level: 6})` 產生 ZIP，內容為 `topic.json`、`nodes/<id>.json`，以及（若存在）`README.md`；**緊接著呼叫 `api.readZip(bytes, zip)` 自我驗證**，通過後才寫入 `learning-packs/<id>.zip`。
7. 寫入 `learning-packs/catalog.js`：

```js
// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。
const LEARNING_PACKS = [ /* JSON.stringify(library, null, 2) */ ];
```

8. 輸出 `已建立 N 個 Learning Pack、M 個節點。`

`catalog.js` 讓瀏覽器直接以 `file://` 開啟 `index.html` 時也能取得教材（不經 `fetch`）。**請勿手動編輯 `catalog.js` 或 ZIP**；兩者皆為建置產物，任何修改都應回到 `topic.json` 與 `nodes/*.json` 後重新建置。新增主題時，在 `learning-packs/` 下加入含 `topic.json` 與 `nodes/` 的資料夾，再執行同一指令即可。

網站預設載入 CIS221 的 27 個節點、270 題，不需手動上傳。舊的 10 個入門節點已移除；`start` 是共用導覽起點，不是課程節點。

[回到頂部](#top)

---

<a id="s11"></a>

## 11. `fflate` 與授權

| 項目 | 內容 |
|---|---|
| 檔案 | `js/vendor/fflate.js`，UMD 壓縮版，33,044 B，單行 minified |
| 用途 | 提供 `zipSync`／`unzipSync`／`strToU8`／`strFromU8`／`Inflate` 等；瀏覽器下為 `window.fflate`，Node 下可 `require()` |
| 版本 | **舊版 `PACK_FORMAT.md` 記載為 `fflate 0.8.3`；此為文件記載，未能在 `js/vendor/fflate.js` 內驗證**——該檔為單行壓縮，查無任何版本字串可供核對 |
| 授權 | MIT，見 `js/vendor/fflate-LICENSE.txt`（Copyright (c) 2026 Arjun Barrett） |
| 專案授權 | 專案根目錄與子目錄皆查無 `LICENSE` 檔；僅第三方 `fflate` 附有授權條款 |

因版本字串不可驗證，本文件不把 `0.8.3` 當作已查證事實；若需精確版本，應以 `fflate` 官方發行紀錄或重新取得的原始套件為準，並在升級時同步更新 `js/vendor/fflate-LICENSE.txt`。

[回到頂部](#top)

---

<a id="s12"></a>

## 12. 完整 JSON 範例

以下為一個可通過 `validate()` 的最小完整範例（主題一份 `topic.json`、節點一份 JSON）。此範例沿用 GitHub 既有文件的 `calculus-extra` 範例，內容正確，予以保留。

`topic.json`：

```json
{
  "schemaVersion": 1,
  "id": "calculus-extra",
  "title": "微積分加練",
  "version": 1,
  "description": "用切線與隱函數練習延伸微分技巧。",
  "attachTo": "start"
}
```

`nodes/calculus-extra.tangent.json`：

```json
{
  "schemaVersion": 1,
  "id": "calculus-extra.tangent",
  "title": "切線方程加練",
  "intro": "用導數找出切線斜率。",
  "kind": "derivative",
  "minutes": 6,
  "parents": [],
  "content": [
    {"type": "heading", "text": "切線方程"},
    {"type": "formula", "text": "y − f(a) = f′(a)(x − a)"},
    {"type": "example", "text": "f(x) = x²，a = 2。\n斜率 = 4，切線為 y = 4x − 4。"}
  ],
  "questions": [
    {
      "prompt": "x² 在 x = 3 的導數是多少？",
      "options": ["3", "6", "9"],
      "answer": 1,
      "explanation": "導數是 2x，代入 3 得到 6。"
    }
  ],
  "passCount": 1
}
```

重點提醒：

- 節點 ID 必須以主題 ID 加句點開頭（`calculus-extra.tangent`）。
- `parents` 為空陣列時，入口會接到主題的 `attachTo`（此例為 `start`）。
- `answer` 從 0 開始；此例 `1` 代表第二個選項 `6`。
- `passCount` 介乎 1 與題目總數之間；此例僅 1 題，故為 `1`。
- `content` 的 `\n` 會轉為 `<br>`；HTML 一律當作純文字顯示。

[回到頂部](#top)

---

<a id="s13"></a>

## 13. 錯誤範例與疑難排解

以下訊息取自 `js/topic-packs.js` 的 `requireValue()`，括號內為常見成因與處理方式。

| 錯誤訊息（節錄） | 成因 | 處理 |
|---|---|---|
| `目前只支援 schemaVersion 1。` | `topic.schemaVersion` 不是 `1` | 改為 `1` |
| `每個節點必須使用 schemaVersion 1。` | 節點 `schemaVersion` 不是 `1` | 改為 `1` |
| `主題 ID 請使用小寫英文字母、數字、連字號或句點。` | ID 含大寫、底線、空白或超長 | 符合 `/^[a-z][a-z0-9-]*(?:\.[a-z0-9-]+)*$/`，≤100 字 |
| `主題名稱 必須是 1–60 字的文字。` | 標題過長或空 | 縮至 60 字內 |
| `主題版本 必須是 1–1000000 的整數。` | `version` 非整數或超出範圍 | 使用 1–1,000,000 的整數 |
| `節點 〈id〉 的 ID 必須以 〈topic.id〉. 開頭。` | 命名空間不符 | 節點 ID 加上主題前綴與句點 |
| `節點 ID 重複：〈id〉` | 同包內 ID 重複 | 改為唯一 ID |
| `〈id〉 的 parents 必須是先修 ID 陣列，最多 10 個。` | `parents` 非陣列或超過 10 | 改為合法陣列 |
| `〈id〉 的先修節點重複。` | `parents` 內有重複 ID | 移除重複 |
| `〈id〉 需要 1–60 段教學內容。` | `content` 為空或超過 60 段 | 調整段數 |
| `〈id〉 的內容類型無效。` | `type` 不在五種之內 | 只使用 `heading`／`paragraph`／`formula`／`example`／`tip` |
| `〈id〉 需要 1–20 題練習。` | `questions` 數量不符 | 調整為 1–20 題 |
| `〈id〉 每題需要 2–6 個選項。` | 選項數量不符 | 調整為 2–6 個 |
| `〈id〉 的題目包含重複選項。` | 同題有重複選項 | 改寫選項 |
| `答案索引 必須是 0–〈n〉 的整數。` | `answer` 越界或非整數 | 改為 `0 … options.length - 1` |
| `〈id〉 的 kind 無效。` | 自訂 `kind` | 只使用三種既有值 |
| `通過題數 必須是 1–〈n〉 的整數。` | `passCount` 超出題數 | 調整為 1 … 題數 |
| `〈node.id〉 的先修節點不存在：〈parent〉` | 先修 ID 未載入或打錯 | 補上依賴主題或修正 ID |
| `先修關係形成循環，請修正節點的 parents。` | 圖有環 | 移除循環邊 |
| `這個包的版本較舊，請使用相同或較新的版本。` | `prepare()` 收到較舊版本 | 提高 `topic.version` |
| `內容有修改，請把 topic.json 的 version 增加後再上傳。` | 內容變動但版本號未升 | 提高 `topic.version` 後重建 |
| `請選擇有效的 ZIP，檔案上限為 5 MB。` | ZIP 過小／過大 | 使用 22 bytes–5 MB 的有效 ZIP |
| `不支援分卷 ZIP。` | 分卷或目錄計數不一致 | 重新打包為單一卷 |
| `ZIP 目錄無效，或超過 128 個項目。` | 項目數 >128 或位移錯誤 | 減少項目並重新打包 |
| `請使用未加密的普通 ZIP（Store 或 Deflate）。` | 加密或用了其他壓縮法 | 以 Store／Deflate、不加密重新打包 |
| `ZIP 含有不支援的檔案路徑。` | 絕對路徑、`..`、`.`、反斜線、冒號或 NUL | 使用相對、單純的路徑 |
| `ZIP 包含重複檔案：〈name〉` | 同名項目 | 移除重複 |
| `解壓內容過大：單檔最多 512 KB，總量最多 4 MB。` | 超過容量上限 | 縮減教材或拆分主題 |
| `ZIP 檔案校驗失敗：〈name〉` | CRC32 不符、檔案損壞 | 重新產生 ZIP |
| `每個 ZIP 必須包含一份 topic.json。` | 缺少或多於一份 `topic.json` | 恰好放一份 |
| `不支援的檔案位置：〈name〉` | JSON 不在 `topic.json` 或 `nodes/*.json` | 調整路徑（可多一層外層資料夾） |
| `〈name〉 不是有效的 UTF-8 JSON。` | JSON 語法錯誤或編碼非 UTF-8 | 修正 JSON 並以 UTF-8 存檔 |

[回到頂部](#top)

---

<a id="s14"></a>

## 14. 匯入與更新（操作面）

1. 在網站按「主題學習包」，選擇或拖放 ZIP。
2. 檢閱主題名稱、版本、各節點的新增／更新／相同狀態及先修關係。
3. 按「確認加入技能樹」。可用「前往主題」找到節點。

同一主題 ID 會合併更新。相同節點 ID 以新內容更新，未在新包列出的舊節點會保留（`retained`）。完全相同的包再次匯入會顯示已匯入（`changed === false`）。較舊版本會拒絕，內容修改卻未增加版本也會拒絕。

教材與進度分開存放。更新後保留已完成紀錄，尚未通過的節點依新的先修條件解鎖。更新題目後可重新練習。

預設學習包隨網站提供；自行上傳的教材及個人進度存在目前瀏覽器及網站來源的 `localStorage`，不會同步到其他裝置。可從主題清單匯出 ZIP 備份或分享教材；此 ZIP 不包含個人學習進度。本機檔案與線上網址各自保存資料，互不連通。

預設包與已上傳包使用相同的主題 ID 時，只顯示一份。瀏覽器中相同或較新版本優先；網站提供較新版本時，更新同 ID 的節點並保留額外節點。已完成的 CIS221 節點紀錄會保留；被移除的舊入門課程不會計入新課程的進度。

**跨主題先修**：共同起點為 `start`。課程 ID 皆來自學習包，例如 `cis221-calculus.functions`、`cis221-calculus.chain`；完整清單可查閱每個主題的 `nodes/`。例如要接在鏈式法則之後，可設定主題 `attachTo` 為 `cis221-calculus.chain`，並讓入口節點 `parents` 為空陣列；也可在節點 `parents` 直接指定其他已載入節點的完整 ID。先載入依賴的主題，網站會檢查缺失先修與循環關係。

[回到頂部](#top)

---

<a id="s15"></a>

## 15. 常見問題 FAQ

**問：可以在 `content` 裡放 Markdown 表格或自訂 HTML 嗎？**
答：不行。`content` 只有五種 `type`，`text` 會先 HTML 轉義再顯示，標籤會變成純文字；清單請用 `•` 與 `\n`。

**問：可以新增 `kind` 值嗎？**
答：不行。`validate()` 只接受 `base`／`derivative`／`integral`；新科目請用 `base`。

**問：改了題目但忘記升版會怎樣？**
答：`prepare()` 會以「內容有修改，請把 topic.json 的 version 增加後再上傳。」拒絕，且不會改動既有資料。提高 `topic.version` 後重新建置即可。

**問：ZIP 內可以有 `README.md` 嗎？**
答：可以。`readZip()` 會略過 `.md`／`.txt`；`build-learning-packs.cjs` 會在主題資料夾存在 `README.md` 時自動放入 ZIP。

**問：ZIP 可以包一層資料夾嗎？可以包兩層嗎？**
答：容許恰好一層外層資料夾（例如 `course/topic.json` 與 `course/nodes/…`），`prefix` 由 `topic.json` 位置推導；其餘檔案都必須落在同一 `prefix` 下。`tests/topic-packs.test.cjs` 已驗證單一外層資料夾情境。

**問：節點 ID 可以改嗎？**
答：技術上可以，但不建議。進度紀錄以 ID 對應；改 ID 會被視為「新增」，舊節點仍會以 `retained` 保留，學習紀錄無法延續。

**問：版本號可以跳號嗎？**
答：可以。只要為 1–1,000,000 的整數，且內容有變動時嚴格大於既有版本即可。

**問：可以用 7z、RAR 或加密 ZIP 嗎？**
答：不行。只接受未加密、Store 或 Deflate 的標準 ZIP。

**問：線上站台的教材為何與本文件不同？**
答：GitHub Pages 目前為較早部署版本（線上 `topic.json` 為 `version: 1`），與本機 HEAD `8d7b4cb`（`version: 5`）不一致。本文件以本機為準。

**問：答案會不會被伺服端保密？**
答：不會。`catalog.js`、`nodes/*.json` 與 ZIP 同源，皆含 270 個 `answer`；專案為純前端，無後端、無帳號、無伺服端批改。

[回到頂部](#top)

---

<a id="s16"></a>

## 16. 變更紀錄

| 版本 | 日期 | 說明 |
|---|---|---|
| v1 | 2026-11-09 | 初版格式說明：目錄樹、`topic.json`／node 欄位、接入點、匯入更新、檔案限制 |
| 線上英文版 | 2026-11（GitHub） | 新增 `PACK_FORMAT.en.md`，確立雙語文件與語言切換連結 |
| `rev. 2.0` | 2026-11-17 | 整合 GitHub 既有中英文件並大幅擴充：補上現況實例（27／270／7／15）、`validate()` 完整規則表、`readZip()` 技術驗證（EOCD／CRC32／簽章／路徑）、`loadLibrary()` 與 `prepare()` 語意、`catalog.js` 產生格式與 `localeCompare('zh-Hant',{numeric:true})` 排序、fflate 版本查證備註、完整範例、錯誤與疑難排解、FAQ、變更紀錄、狀態列、`<details>` 目錄、回到頂部、雙語切換與相關連結 |

同時修正的過時記載：舊文件寫「fflate 0.8.3」，本次標為「文件記載，未能於檔案內驗證」；舊文件寫「14/14」測試，現行實測為 **20/20**（`topic-packs` 14、`tree-layout` 3、`i18n` 3）。

[回到頂部](#top)

---

<a id="s17"></a>

## 17. 附錄：相關文件與連結

### 17.1 專案文件

| 文件 | 用途 |
|---|---|
| [README.md](README.md)／[README.en.md](README.en.md) | 使用入門與文件入口 |
| [AI_TEACHING_GUIDE.md](AI_TEACHING_GUIDE.md)／[AI_TEACHING_GUIDE.en.md](AI_TEACHING_GUIDE.en.md) | 給 AI 的教材製作 8 階段與檢查清單 |
| [PACK_FORMAT.md](PACK_FORMAT.md)／[PACK_FORMAT.en.md](PACK_FORMAT.en.md) | 本文與英文對照 |
| [I18N.md](I18N.md) | 中英翻譯維護（單檔雙語） |
| [BOOK-REFERENCE.md](BOOK-REFERENCE.md) | 書籍來源、46 章與 27 節點對應、OCR 風險 |
| [DESIGN-v2.md](DESIGN-v2.md) | 設計與驗收歷史（部分數值已過時） |
| [MULTIUSER-ARCH.md](MULTIUSER-ARCH.md) | 多使用者架構評估 |
| [微積分課程 README](learning-packs/cis221-calculus/README.md)／[README.en.md](learning-packs/cis221-calculus/README.en.md) | 27 課清單與先修關係 |

### 17.2 原始碼與驗證

| 檔案 | 職責 |
|---|---|
| `js/topic-packs.js` | `validate`／`prepare`／`buildLessons`／`loadLibrary`／`ordered`／`readZip`／`writeZip`／`escape` |
| `scripts/build-learning-packs.cjs` | 產生 `catalog.js` 與各主題 ZIP |
| `tests/topic-packs.test.cjs` | 14 個測試：格式、版本合併、ZIP 往返與安全性 |
| `tests/tree-layout.test.cjs` | 3 個測試：呈現層圖與 300 節點壓力測試 |
| `tests/i18n.test.cjs` | 3 個測試：翻譯覆蓋、動態標籤、未知文字 |
| `js/vendor/fflate-LICENSE.txt` | `fflate` 之 MIT 授權 |

### 17.3 線上連結

- 站台：<https://bronya-0914.github.io/Skill-Tree/>
- 原始碼：<https://github.com/Bronya-0914/Skill-Tree>

### 17.4 發布提醒

`references/` 內的書籍 OCR 全文受版權保護，僅供本機參考，**發布前必須排除**；`js/hosting.json` 的 `static.directory: "."` 目前會把整個專案根目錄作為靜態根，且專案無 `.gitignore`，推送或打包發布時須特別留意，不要將 `references/`、設計稿或測試隨公開站台發布。

[回到頂部](#top)
