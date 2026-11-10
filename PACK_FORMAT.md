# 主題學習包格式 v1

所有課程均使用 Learning Pack：一個主題一個資料夾，每個節點一個 JSON；分享或上傳時壓縮成 ZIP。檔案編碼為 UTF-8。網站可直接由本機 index.html 開啟使用。

```text
learning-packs/
├── cis221-calculus/
│   ├── topic.json
│   ├── README.md
│   └── nodes/
│       ├── cis221-calculus.functions.json
│       └── …（一個節點一個 JSON）
├── cis221-calculus.zip
└── catalog.js（自動產生，供網站載入）
```

ZIP 內包含 topic.json 與 nodes/，也可以多包一層主題資料夾。檔名可自訂，節點關係依據 JSON 裡的 id。

## 更新網站的預設學習包

只需編輯 `learning-packs/<主題>/topic.json` 與 `nodes/*.json`，再於專案根目錄執行：

```text
node scripts/build-learning-packs.cjs
```

指令會驗證所有主題及前置關係，產生各主題 ZIP，並把相同資料打包成 `learning-packs/catalog.js`。請勿手動編輯 catalog.js；它只是讓瀏覽器直接開啟 HTML 時也能載入 JSON 教材的產物。新增主題時，在 learning-packs 下加入包含 topic.json 和 nodes/ 的資料夾後再執行指令。

網站預設載入 CIS221 的 27 個節點、270 題，不需要手動上傳。舊的 10 個入門節點已移除；Start 是共用導覽起點，不是課程節點。

## 主題設定

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

- `schemaVersion` 是檔案格式版本，目前為 1。
- `version` 是主題內容版本，從 1 開始。修改內容後需增加整數版本。
- `id` 使用小寫英文字母開頭，可包含數字、連字號及句點，最長 100 字元。
- `attachTo` 是此主題入口接入的節點 ID，省略時使用 `start`。

## 每個節點

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

- 節點 ID 必須以主題 ID 加句點開頭，例如 `calculus-extra.tangent`。
- `parents` 為先修節點 ID 陣列。空陣列會接到主題的 `attachTo`。多個先修節點需要全部完成。
- `kind` 可選 `base`、`derivative` 或 `integral`，用來設定節點樣式。
- `content` 支援 `heading`、`paragraph`、`formula`、`example`、`tip`。文字中的 `\n` 會換行。公式可以用 Unicode，例如 x²、∫、√。HTML 會當作文字顯示。
- 每個節點可有 1–20 題，每題 2–6 個不同選項。
- `answer` 從 0 開始計數。例如 1 代表第二個選項。
- `passCount` 是需要答對的題數，介乎 1 與題目總數之間。

## 接到現有學習包

共同起點為 `start`。課程 ID 皆來自學習包，例如 `cis221-calculus.functions`、`cis221-calculus.chain`；完整清單可查閱每個主題的 nodes/。

例如要接在鏈式法則之後，可設定主題 `attachTo` 為 `cis221-calculus.chain`，並讓入口節點 `parents` 為空陣列。也可在節點 `parents` 指定其他已載入節點的完整 ID。先載入依賴的主題，網站會檢查缺失先修與循環關係。

## 匯入與更新

1. 在網站按「主題學習包」，選擇或拖放 ZIP。
2. 檢閱主題名稱、版本、各節點的新增／更新狀態及先修關係。
3. 按「確認加入技能樹」。可用「前往主題」找到節點。

同一主題 ID 會合併更新。相同節點 ID 以新內容更新，未在新包列出的舊節點會保留。完全相同的包再次匯入會顯示已匯入。較舊版本會拒絕，內容修改卻未增加版本也會拒絕。

教材與進度分開存放。更新後保留已完成紀錄，尚未通過的節點依新的先修條件解鎖。更新題目後可重新練習。

預設學習包隨網站提供；自行上傳的教材及個人進度存在目前瀏覽器及網站來源的儲存空間，不會同步到其他電腦。可從主題清單匯出 ZIP 備份或分享教材。此 ZIP 不包含個人學習進度。本機檔案與線上網址各自保存資料。

預設包與已上傳包使用相同的主題 ID 時，只顯示一份。瀏覽器中相同或較新版本優先；網站提供較新版本時，更新同 ID 的節點並保留額外節點。已完成的 CIS221 節點紀錄會保留；被移除的舊入門課程不會計入新課程的進度。

## 檔案限制

- ZIP 最多 5 MB，使用未加密的 Store 或 Deflate 壓縮。
- 每包 1–100 個節點，最多 128 個 ZIP 項目。
- 單檔解壓最多 512 KB，總解壓最多 4 MB。
- 最多保存 30 個主題、合計 300 個匯入節點，實際容量亦受瀏覽器儲存配額影響。
- JSON 必須放在 `topic.json` 或 `nodes/*.json`。可附帶 `.txt`、`.md` 說明檔。

現有教材來源位於 `learning-packs/cis221-calculus/`。解壓工具採用 fflate 0.8.3，MIT 授權保存在 `js/vendor/fflate-LICENSE.txt`。
