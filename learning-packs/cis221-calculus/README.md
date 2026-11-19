<a id="top"></a>

# 課題資料夾說明（通用範本） · Topic Folder Guide

> **一句話**：上傳一份資料，長出一棵技能樹 —— 讓進度看得見，讓每次完成都有成就感。
> **如何使用**：[主 README 如何使用](../../README.md#how-to-use) · [AI 必問流程](../../AGENTS.md) · [學習包格式](../../PACK_FORMAT.md) · [線上展示](https://bronya-0914.github.io/Skill-Tree/)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/> · **儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **English**: [README.en.md](README.en.md)

---

## 0. 這份檔案不是課程清單

本檔是**通用範本**，說明一個課題資料夾該長什麼樣子、要怎麼準備，不描述任何特定學科或既有課題。網站不附帶既定教材；每個課題都由使用者提供資料後生成。

若你要的是「網站怎麼用」，請到 [`README.md`](../../README.md#how-to-use)；若你是被交派生成課題的 AI，請直接讀 [`AGENTS.md`](../../AGENTS.md)。

---

## 1. 資料夾結構

```text
learning-packs/<topic-id>/
  topic.json        課題描述（名稱、ID、版本、語言、來源說明）
  nodes/            一個知識點一個 JSON
    <node-id>.json
  README.md         本檔案：課題資料夾說明（可選）
```

| 檔案 | 誰產生 | 可否手改 |
|---|---|---|
| `topic.json` | AI／人工 | 可 |
| `nodes/*.json` | AI／人工 | 可 |
| `README.md` | AI／人工 | 可 |
| 上層 `catalog.js`、`<topic-id>.zip` | builder | **不可** |

欄位定義、驗證規則與版本比較見 [`PACK_FORMAT.md`](../../PACK_FORMAT.md)。

---

## 2. 準備一個新課題

1. **先有資料**：一本書、講義、筆記、PDF、題庫或主題清單。沒有資料就不要生成，這是 [`AGENTS.md`](../../AGENTS.md) 的第一道必問。
2. **再定答題方式**：選擇題／數值輸入題／分步長題／混合／自訂。
3. **確認輪廓**：課題名稱與 ID、節點數、先修關係、每節點題數、通過門檻、時間、語言。
4. **按知識點切節點**，不是按資料的章節編號；一個節點要能獨立完成、獨立點亮。
5. **寫內容與題目**：導言、分段概念、例題、提示、練習題與逐題解析。
6. **記錄來源**：`sourceNote` 寫明依據；若使用者同意「無指定資料」，也要標明。

八階段方法詳 [`AI_TEACHING_GUIDE.md`](../../AI_TEACHING_GUIDE.md)。

---

## 3. 讓進度看得見

這個資料夾的結構會直接變成使用者看到的樹：

| 設計選擇 | 使用者看到的結果 |
|---|---|
| 先修關係清楚 | 連線不亂、下一步一目了然 |
| 節點大小適中 | 每隔一段時間就有一個可點亮的完成單位 |
| 通過門檻合理 | 不會卡住，也不會白送 |
| 節點 ID 穩定 | 改稿後舊進度仍對得上 |

成就感來自「完成 → 點亮 → 解鎖」這個可視循環；設計節點時請同時想著這件使用者體驗。

---

## 4. 建置與驗證

```bash
node scripts/build-learning-packs.cjs
node --test tests/*.test.cjs
```

之後在網站匯入 ZIP 實測：節點可見、概念可讀、題目可答、達門檻解鎖、點亮正常、重開後進度仍在。

---

## 5. 常見問題

**Q：這個資料夾可以直接放教材嗎？** 可以，但要依格式放 `topic.json` 與 `nodes/`，並讓 builder 重建上層產物。

**Q：可以改目錄名稱嗎？** 目錄名稱屬網站既有結構，改動前先確認所有參照與匯入路徑。

**Q：換課題要改程式嗎？** 不用。準備資料、交給 AI、匯入 ZIP 即可，見 [`AGENTS.md`](../../AGENTS.md)。

**Q：雙語怎麼處理？** 教材不會自動翻譯，見 [`I18N.md`](../../I18N.md)。

---

## 6. 檢查清單

- [ ] 兩道必問已完成（資料、答題方式）
- [ ] `topic.json` 有 `schemaVersion`、遞增的 `version`、清楚 `sourceNote`
- [ ] 先修無循環、節點 ID 穩定
- [ ] 題目型別符合偏好，`prompt`／`answers`／`parts` 欄位正確；解析、門檻一致
- [ ] 長公式已明確分行
- [ ] 已重建、測試、網站實測
- [ ] 未抄錄版權全文、未手改生成檔

---

**相關文件**：[AGENTS.md](../../AGENTS.md) ｜ [使用指南](../../README.md) ｜ [生成方法](../../AI_TEACHING_GUIDE.md) ｜ [格式](../../PACK_FORMAT.md) ｜ [文件總覽](../../docs/README.md)

[↑ 回到頂部 · Back to top](#top)
