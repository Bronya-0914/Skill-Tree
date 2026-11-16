<a id="top"></a>

<div align="center">

# 微積分完整學習包

**微積分漫遊 · Calculus Skill Tree — CIS221 微積分完整學習路線**

Complete Calculus Learning Pack · `id = cis221-calculus`

27 個節點 · 270 題 · 每課 10 題四選一 · 逐題解析

[繁體中文](README.md) · [English](README.en.md)

</div>

**狀態列：** 文件版本 `rev. 2.0（2026-11-17 重寫）`　｜　對應本機 HEAD `8d7b4cb`　｜　教材 `topic.version=5`

> **文件資訊**
>
> | 項目 | 值 |
> |---|---|
> | 文件版本 | `rev. 2.0`，2026-11-17 重寫，整合 GitHub 既有中英文件 |
> | 對應本機 HEAD | `8d7b4cb Checkpoint current site: i18n, tree layout, unlock effects, workspace and docs` |
> | 教材 `topic.version` | `5`（`schemaVersion=1`、`attachTo=start`） |
> | 線上站台 | <https://bronya-0914.github.io/Skill-Tree/> |
> | 原始碼儲存庫 | <https://github.com/Bronya-0914/Skill-Tree> |
> | 教材來源目錄 | `learning-packs/cis221-calculus/`（本檔所在資料夾） |
> | 建置產物 | `learning-packs/catalog.js`、`learning-packs/cis221-calculus.zip` |

<details>
<summary><strong>目錄 · Table of Contents（按此展開）</strong></summary>

- [1. 概覽](#s1)
- [2. `topic.json` 現值](#s2)
- [3. 學習目標](#s3)
- [4. 通過條件與測驗機制](#s4)
- [5. 27 個學習節點](#s5)
- [6. 統計與分布](#s6)
- [7. 每課教材結構：10 題四選一與逐題解析](#s7)
- [8. 書本章節對應與「延伸整理」註記](#s8)
- [9. 檔案結構](#s9)
- [10. 英文對照與語言切換](#s10)
- [11. ZIP 與建置產物](#s11)
- [12. 改題流程](#s12)
- [13. 版本升級](#s13)
- [14. 已知限制](#s14)
- [15. 附錄：相關文件與連結](#s15)

</details>

---

<a id="s1"></a>

## 1. 概覽

本學習包是「微積分漫遊 · Calculus Skill Tree」網站的內建主題，亦是可單獨匯入的 ZIP。內容為 **27 個循序漸進的學習節點、共 270 題**，涵蓋代數與函數、微分、多變量、積分及數值方法。每個節點包含教學內文、明確分行的公式、逐步例題、10 道四選一練習，以及逐題解析。

教材以**書面繁體中文**撰寫；網站另由 `js/i18n-messages.js` 提供英文對照。三角函數的角度一律使用**弧度**。27 個節點的 `passCount` 全為 `7`、`minutes` 全為 `15`。

> 重要：**英文切換需網站翻譯目錄，單靠 ZIP 不保證切換**。學習包 ZIP 只含教材，不含翻譯目錄；匯入到其他相容網站時，未收錄於該站 `js/i18n-messages.js` 的文字會保留原語言（繁體中文）。詳見第 10 節。

[回到頂部](#top)

---

<a id="s2"></a>

## 2. `topic.json` 現值

以下為本機 HEAD `8d7b4cb` 的實際內容，未經改寫：

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

| 欄位 | 現值 | 說明 |
|---|---|---|
| `schemaVersion` | `1` | 目前唯一支援的格式版本 |
| `id` | `cis221-calculus` | 主題 ID；所有節點 ID 皆以 `cis221-calculus.` 開頭 |
| `title` | `CIS221 微積分完整學習路線` | 主題名稱 |
| `version` | `5` | 內容版本；曾有 1 → 2 → 3 → 4 → 5 的升版歷程 |
| `description` | 27 個循序漸進的學習節點…… | 主題簡介 |
| `attachTo` | `start` | 入口接入點；`start` 是共用導覽起點，不是課程節點 |

[回到頂部](#top)

---

<a id="s3"></a>

## 3. 學習目標

完成本學習包後，學習者應能：

- 判斷函數的定義域與值域，處理直線、二次函數、三角函數、指數與對數。
- 以極限與連續為基礎，理解平均與瞬間變化率，並求出基本、高階、乘積、商、複合與隱函數的導數。
- 以導數處理臨界點、極值判別、最佳化建模、微分與線性近似、Taylor 多項式。
- 處理多變量函數、曲面、一階與高階偏導數、隱式偏導數及多變量鏈式法則。
- 計算不定積分、指數／對數／三角積分、定積分與微積分基本定理、積分性質與奇偶對稱、換元積分，以及積分應用與初始條件。
- 以 Newton 法求根、進行 Newton 最佳化，並判別結果是否合理。

每個節點以一個主要技能為中心；分支先修反映知識依賴，須完成全部先修才會解鎖。

[回到頂部](#top)

---

<a id="s4"></a>

## 4. 通過條件與測驗機制

| 項目 | 現值 |
|---|---|
| 每課題數 | 10 題，四選一 |
| 通過門檻 | `passCount = 7`，即答對至少 7 題 |
| 通過後 | 點亮該技能節點，並可前進至下一課 |
| 先修 | 節點列出的所有先修須全部完成；`parents` 為空者接到 `start` |
| 預估時間 | `minutes = 15`（27 課皆同） |

網站的批改流程（`app.js` 的 `renderQuiz()`）：

- 10 題全部作答前，交卷鈕為停用狀態（灰、`quiz-pending`）；答滿後轉為可交卷（綠、`quiz-ready`）。
- 交卷時以 `score = quiz.filter((q, i) => attempt.answers[i] === q[2]).length` 計分，`passed = score >= lesson.passCount`。
- 通過後寫入 `progress.completed`，保留最高分；未通過可「再練習一次」清除該次作答重新練習。
- 每題批改後顯示正確／錯誤選項與逐題解析（`.feedback-detail`）；解析解釋推理，不只重複答案。
- 任何需要的數值近似都會在題目中明確說明。

[回到頂部](#top)

---

<a id="s5"></a>

## 5. 27 個學習節點

下表保留原有 27 列、先修與題數，並補上 `kind` 與節點 ID 後綴（完整 ID 為 `cis221-calculus.<後綴>`）。先修欄的「網站起點」即 `start`。

| 節點 | 前置節點 | 題數 | `kind` | ID 後綴 |
|---|---|---|---|---|
| 01 · 函數、定義域與值域 | 網站起點 | 10 | `base` | `functions` |
| 02 · 直線與二次函數 | 01 | 10 | `base` | `graphs` |
| 03 · 三角函數與弧度 | 02 | 10 | `base` | `trigonometry` |
| 04 · 指數與對數 | 01 | 10 | `base` | `exp-log` |
| 05 · 平均與瞬間變化率 | 02 | 10 | `derivative` | `rates` |
| 06 · 極限與連續 | 05 | 10 | `base` | `limits` |
| 07 · 基本求導與高階導數 | 06 | 10 | `derivative` | `power` |
| 08 · 乘積與商法則 | 07 | 10 | `derivative` | `product-quotient` |
| 09 · 三角、指數與對數求導 | 08、03、04 | 10 | `derivative` | `elementary` |
| 10 · 複合函數與鏈式法則 | 09、08 | 10 | `derivative` | `chain` |
| 11 · 隱函數微分 | 10 | 10 | `derivative` | `implicit` |
| 12 · 臨界點與極值判別 | 07 | 10 | `derivative` | `extrema` |
| 13 · 最佳化建模與應用 | 12、02 | 10 | `derivative` | `optimization` |
| 14 · 多變量函數與曲面 | 01、02 | 10 | `base` | `surfaces` |
| 15 · 一階偏導數 | 14、10 | 10 | `derivative` | `partials` |
| 16 · 高階與隱式偏導數 | 15、11 | 10 | `derivative` | `higher-implicit` |
| 17 · 多變量鏈式法則 | 15、10 | 10 | `derivative` | `multi-chain` |
| 18 · 不定積分與冪次法則 | 07 | 10 | `integral` | `antiderivatives` |
| 19 · 指數、對數與三角積分 | 18、09 | 10 | `integral` | `elementary-integrals` |
| 20 · 定積分與微積分基本定理 | 18 | 10 | `integral` | `definite` |
| 21 · 積分性質與奇偶對稱 | 20、03 | 10 | `integral` | `integral-properties` |
| 22 · 換元積分與反向鏈式法則 | 19、10 | 10 | `integral` | `substitution` |
| 23 · 積分應用與初始條件 | 20、19 | 10 | `integral` | `integral-applications` |
| 24 · 微分與線性近似 | 10 | 10 | `derivative` | `linearization` |
| 25 · Taylor 多項式與二階近似 | 24、09 | 10 | `derivative` | `taylor` |
| 26 · Newton 求根法 | 24、10 | 10 | `derivative` | `newton-roots` |
| 27 · Newton 最佳化與結果判別 | 26、13、25 | 10 | `derivative` | `newton-optimization` |

所有題目均有四個選項與一個標準答案。題目混合觀念判斷、計算和應用；作答後可查看解釋。數值近似會在題目中明確說明。

[回到頂部](#top)

---

<a id="s6"></a>

## 6. 統計與分布

以下為對本機 HEAD `8d7b4cb` 以唯讀方式實算，並與 `catalog.js`、27 個來源 JSON、ZIP 內容逐檔比對一致的結果。

| 項目 | 現值 |
|---|---|
| 節點／題目 | 27 節點／270 題（每節點 10 題、每題 4 選項） |
| `passCount` | 全部 `7` |
| `minutes` | 全部 `15` |
| `kind` 分布 | `base` **6**、`derivative` **15**、`integral` **6** |
| `parents` 分布 | 0 個先修：1；1 個：12；2 個：12；3 個：2（最多 3，上限 10） |
| `content` 區塊 | **271**：`heading` 81、`paragraph` 81、`formula` 27、`example` 55、`tip` 27 |
| `\n` 換行數 | **365**：`formula` 116、`example` 169、`paragraph` 54、`tip` 26、`heading` 0 |
| `catalog.js` | 169,996 B／4,515 行，含 270 個 `"answer"` 欄位 |
| ZIP | 29 個項目，58,184 B 壓縮／145,337 B 未壓縮總和 |
| 英文目錄 | `js/i18n-messages.js`：1,831 個 key／1,848 行／270,208 B |
| 測試 | **20 / 20**（`topic-packs` 14、`tree-layout` 3、`i18n` 3） |

`kind` 只影響節點卡左側色條與樣式（`base`／`derivative`／`integral`），不影響解鎖邏輯；解鎖一律以 `parents` 為準。27 個 `formula` 全部以明確 `\n` 分行、一行一式，由 `styles.css` 的 `.formula{text-align:center;white-space:nowrap}` 逐行置中並禁止自動折行。

[回到頂部](#top)

---

<a id="s7"></a>

## 7. 每課教材結構：10 題四選一與逐題解析

每個 `nodes/*.json` 的固定鍵為：`schemaVersion, id, title, intro, kind, minutes, parents, content, questions, passCount`。

- `intro`：該課的學習目標與來源說明（27 個 `intro` 皆標明《3000 Solved Problems in Calculus》與採用章節）。
- `content[]`：`{type, text}`，`type` 限 `heading`／`paragraph`／`formula`／`example`／`tip`；`text` 內 `\n` 由 `lessonFromNode()` 轉為 `<br>` 並先作 HTML 轉義。每課含「先用白話理解」「進一步理解」、明確分行的公式、兩則標註書本章節的逐步例題，以及提示。
- `questions[]`：10 題，每題 `{prompt, options[4], answer, explanation}`；`answer` 為 **0 起始索引**，`explanation` 為逐題解析。
- `passCount`：7。

`lessonFromNode()` 會把節點轉成執行期 `lesson`，其中 `quiz` 為 `[prompt, options, answer, explanation]` 四元陣列；`icon` 為 `∫`（`integral`）或 `◇`；`parents` 為空陣列時補成 `[topic.attachTo]`。

[回到頂部](#top)

---

<a id="s8"></a>

## 8. 書本章節對應與「延伸整理」註記

本節依 `BOOK-REFERENCE.md` **第 4 節**「知識點與現有 27 節點對應」整理。括號為可補充的次要章；章號為書中 46 章的編號，頁碼為 PDF 檔案頁序。

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

**「延伸整理」註記**：第 26、27 節點在書中無專章，是依第 18／8 章切線近似與第 13／43 章極值判別所作的延伸整理，內文已如實標明「延伸整理」，並非直接取自單一章節。其餘 25 個節點依知識點切片，不受書的章節限制。

**書有而樹無的知識點**（因骨架固定 27，僅作為例題與解析的補充題源，不新增節點）：不等式與絕對值（1、2）、圓（4）、Rolle／均值定理（11）、相關變化率（14、17）、曲線描繪（15）、直線運動（17）、分部積分（28）、部分分式（30）、廣義積分（32）、平面與空間向量（33、40）、參數方程與極座標（34、35）、序列與級數（36–38）、多重積分（44）、向量場與線積分（45）、微分方程（46）。

**書籍 OCR 不可直接抄**：該 PDF 為掃描後附 OCR 文字層，已確認失真（`*` 代 `x`、`SL`／`s` 代 `≤`、`^` 代 `≥`、`V4-x2` 代 `√`、減號與長破折號混用、題幹與解答錯位、圖形只剩圖號）。所有公式與數值均以標準數學重寫並回原 PDF 頁面核對，未直接搬錄文字層。原始書籍與全文索引僅存本機 `references/`，不隨網站發布。

[回到頂部](#top)

---

<a id="s9"></a>

## 9. 檔案結構

```text
learning-packs/cis221-calculus/
├── topic.json                        主題設定（本檔第 2 節）
├── README.md                         本檔（繁中）
├── README.en.md                      English 對照
└── nodes/                            27 個節點，一節點一檔
    ├── cis221-calculus.functions.json
    └── …（其餘 26 個）
```

- `topic.json`：整個主題的名稱、版本和接入位置。
- `nodes/*.json`：一個檔案對應一個節點，含教學、`questions`、解答及前置關係。
- `README.md`／`README.en.md`：課程清單與使用說明；`README.md` 會被建置腳本一併放入 ZIP。

網站使用方式是直接以 `index.html` 載入 `learning-packs/catalog.js`；如需在其他相容網站使用本包，於「主題學習包」上傳 `cis221-calculus.zip`，預覽後確認匯入。

[回到頂部](#top)

---

<a id="s10"></a>

## 10. 英文對照與語言切換

教材 JSON 本身只有繁體中文。英文對照由網站的 **`js/i18n-messages.js`** 提供：以完整、精確的繁體中文字串作為 key，共 **1,831 個 key**（270,208 B／1,848 行），涵蓋 27 課的 `intro`、`content`、題目、選項與解析；`js/i18n.js` 另有 **46 個**參數化 templates 處理動態介面訊息。切換時只更新文字與顯示屬性，不重建測驗、不改進度；`html[lang="en"]` 時節點卡標題可顯示兩行而不改變樹的幾何。

**明確限制：英文切換需網站翻譯目錄，單靠 ZIP 不保證切換。**

- 學習包 ZIP 只含 `topic.json`、`nodes/*.json` 與 `README.md`；`readZip()` 會略過 `.md`／`.txt`，**ZIP 不含任何翻譯目錄**。
- 把本包匯入另一個相容網站時，若該站的 `js/i18n-messages.js` 未收錄對應的精確中文字串，這些文字會**保留原語言**（繁體中文），不會自動變成英文。
- 純數學式與全形標點不含漢字，`english()` 不會查表翻譯，屬正常行為。
- 若要讓匯入包也能雙語，須在目標網站補上精確 key 與英文值（整段 key 與逐行 key 皆要補），並執行 `node --test tests/i18n.test.cjs` 確認無漢字殘留。維護 SOP 詳見 `I18N.md`。

[回到頂部](#top)

---

<a id="s11"></a>

## 11. ZIP 與建置產物

| 檔案 | 角色 | 可手動編輯 |
|---|---|---|
| `topic.json`／`nodes/*.json`／`README*.md` | 教材來源 | 可 |
| `learning-packs/cis221-calculus.zip` | 建置產物，可上傳／分享 | 不可 |
| `learning-packs/catalog.js` | 建置產物，供網站直接載入 | 不可 |

`scripts/build-learning-packs.cjs` 會：

1. 讀入 `topic.json` 與 `nodes/*.json`，呼叫 `validate()`；
2. 以 `a.title.localeCompare(b.title, 'zh-Hant', {numeric: true})` 排序節點（讓 `01` 至 `27` 依數字排序）；
3. 以 `zipSync(files, {level: 6})` 產生 ZIP，內容為 `topic.json`、27 個 `nodes/<id>.json`，以及 **`README.md`**（因此 ZIP 共 29 個項目）；
4. 緊接著以 `readZip(bytes, zip)` **自我驗證**，通過才寫入 `learning-packs/cis221-calculus.zip`；
5. 寫入 `learning-packs/catalog.js`：`// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。` 加上 `const LEARNING_PACKS = …;`。

`catalog.js` 與 ZIP 讓瀏覽器以 `file://` 開啟 `index.html` 時也能取得教材。**兩者皆為建置產物，請勿手動修改或刪除**；任何教材變動都應回到來源 JSON 後重新建置。

[回到頂部](#top)

---

<a id="s12"></a>

## 12. 改題流程

1. 編輯相應的 `nodes/*.json`：可改 `intro`、`content[].text`、`questions[].prompt`／`options`／`explanation`。**保留 `id`、`title`、`parents`、`passCount=7` 與選項順序**；`answer` 為 0 起始索引，調整選項後須同步修正。
2. 檔案一律使用 **UTF-8** 編碼，JSON 語法須正確（`readZip()` 以 `TextDecoder('utf-8', {fatal:true})` 嚴格解碼）。
3. 逐題重新求解，確認只有一個正確答案、無兩個等價選項，解析解釋原因而非只重複答案。
4. 若變更中文字串，同步更新根目錄 `js/i18n-messages.js` 的精確 key 與英文值；**整段 key 與逐行 key 都要補**（`\n` 會轉成 `<br>`，每行是獨立文字節點）。
5. 提高 `topic.json` 的 `version`（見第 13 節）。
6. 於專案根目錄執行：

```text
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

確認 20/20 通過；`tests/topic-packs.test.cjs` 會逐檔比對 `catalog.js`、ZIP 與 27 個來源 JSON 完全一致。

7. 開啟網站檢查可讀性、公式換行、交卷批改、解鎖與中英切換；測試 ZIP 匯入時使用獨立瀏覽器資料，避免覆蓋個人進度。

也可把 `topic.json` 和 `nodes/` 資料夾一起壓縮成 ZIP 上傳（可多包一層資料夾），但透過建置腳本產生最不易出錯，且會附上 `README.md`。

[回到頂部](#top)

---

<a id="s13"></a>

## 13. 版本升級

`topic.version` 為整數內容版本，目前 `5`。`prepare()` 的合併規則：

- **內容有變動即須升版**：若 `changes` 出現新增／更新，或 topic 不同，卻未提高 `version`，會被拒絕（「內容有修改，請把 topic.json 的 version 增加後再上傳。」）。
- **舊版拒絕**：版本低於既有主題的包會被拒絕。
- **冪等**：完全相同的包再次匯入，`changed === false`，不需升版。
- **保留舊節點**：未列於更新包的舊節點會以 `retained` 保留；保留既有 `id` 才能延續學習紀錄。

歷程摘要（詳見 `BOOK-REFERENCE.md` 第 7、9 節）：版本 1 為初始教材；2026-11-12 建立 01 樣板升至 2，2026-11-13 公式分行升至 3，其後升至 4，2026-11-15 完成 02–27 教學內文改寫後升至 **5**；`catalog.js` 與 ZIP 每次皆由 `build-learning-packs.cjs` 重建，`tests/topic-packs.test.cjs` 把硬編碼版本常數改為 `sample.topic.version + 1`，避免教材升版後測試失效。

版本範圍為 1–1,000,000；可跳號，只要內容有變動時嚴格大於既有版本即可。

[回到頂部](#top)

---

<a id="s14"></a>

## 14. 已知限制

- **答案在前端**：`catalog.js`、27 個 `nodes/*.json` 與 ZIP 同源，皆含 270 個 `answer`；專案為純前端，無後端、無帳號、無伺服端批改，答案無法保密。
- **資料受同源限制**：進度、設定與匯入教材存於瀏覽器 `localStorage`，不會自動跨裝置同步；更換瀏覽器、網址或清除資料即全部重來，只能靠「資料備份」手動匯出匯入（覆蓋式、不加密）。
- **英文切換需網站翻譯目錄**：單靠 ZIP 不保證切換，詳見第 10 節。
- **題庫保留**：2026-11-15 的改寫只換 `intro` 與 `content`，既有 260 題題庫保留；題目並非全部改寫為書本導向。
- **書籍 OCR 失真**：公式與數值以標準數學重寫，不直接抄錄文字層；`references/` 不得隨公開站台發布。
- **線上版本不一致**：GitHub Pages 目前為較早部署版本（線上 `topic.json` 為 `version: 1`，互動方式亦不同），與本機 HEAD `8d7b4cb`（`version: 5`）不同。
- **無 LICENSE**：專案本身未設授權條款，僅 `js/vendor/fflate-LICENSE.txt` 為 MIT。
- **呈現層**：`js/tree-layout.js` 內含 28 列固定 `preview`；新增或修改主題時會改用 fallback 幾何，畫面配置可能與內建 27 課不同。

[回到頂部](#top)

---

<a id="s15"></a>

## 15. 附錄：相關文件與連結

### 15.1 專案文件（路徑相對於本檔，以 `../../` 回到儲存庫根目錄）

| 文件 | 用途 |
|---|---|
| [README.md](../../README.md)／[README.en.md](../../README.en.md) | 使用入門與文件入口 |
| [PACK_FORMAT.md](../../PACK_FORMAT.md)／[PACK_FORMAT.en.md](../../PACK_FORMAT.en.md) | JSON、ZIP、版本與容量限制 |
| [AI_TEACHING_GUIDE.md](../../AI_TEACHING_GUIDE.md)／[AI_TEACHING_GUIDE.en.md](../../AI_TEACHING_GUIDE.en.md) | 給 AI 的 8 個製作階段與檢查清單 |
| [I18N.md](../../I18N.md) | 中英翻譯維護（單檔雙語） |
| [BOOK-REFERENCE.md](../../BOOK-REFERENCE.md) | 書目、46 章、27 節點對應、OCR 風險與改寫進度（本檔第 8 節依其第 4 節） |
| [DESIGN-v2.md](../../DESIGN-v2.md) | 設計與驗收歷史（部分數值已過時） |
| [MULTIUSER-ARCH.md](../../MULTIUSER-ARCH.md) | 多使用者架構評估 |
| [微積分課程 README](README.md)／[README.en.md](README.en.md) | 本檔與英文對照 |

### 15.2 原始碼與驗證

| 檔案 | 職責 |
|---|---|
| `js/topic-packs.js` | `validate()`／`prepare()`／`readZip()`／`writeZip()` |
| `js/i18n.js`／`js/i18n-messages.js` | 就地翻譯引擎與 1,831 個英文 key |
| `js/tree-layout.js` | 28 列 preview 與 fallback 幾何 |
| `scripts/build-learning-packs.cjs` | 產生 `catalog.js` 與 `cis221-calculus.zip` |
| `tests/topic-packs.test.cjs`／`tree-layout.test.cjs`／`i18n.test.cjs` | 14／3／3 個測試，合計 20/20 |

### 15.3 線上連結

- 站台：<https://bronya-0914.github.io/Skill-Tree/>
- 原始碼：<https://github.com/Bronya-0914/Skill-Tree>

[回到頂部](#top)
