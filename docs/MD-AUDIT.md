<a id="top"></a>

# 文件集與決策紀錄 · Documentation Set & Decision Record

> **一句話**：上傳一份資料，長出一棵技能樹 —— 讓進度看得見，讓每次完成都有成就感。
> **如何使用**：[主 README 如何使用](../README.md#how-to-use) · [AGENTS.md](../AGENTS.md) · [文件總覽](README.md) · [線上展示](https://bronya-0914.github.io/Skill-Tree/)
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/> · **儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **本檔為單檔雙語**：[繁體中文](#繁體中文) ｜ [English Summary](#english-summary)

---

## 繁體中文

### 1. 本檔角色

記錄這套文件的**範圍、定位、決策與驗證結果**，取代早期以檔案盤點為主的稽核版本。它不是使用說明；使用說明在 [`README.md`](../README.md) 的「如何使用」，AI 流程在 [`AGENTS.md`](../AGENTS.md)。

### 2. 現行文件集

| 位置 | 份數 | 說明 |
|---|---:|---|
| 根目錄 | 11 | 主 README 中英、`AGENTS.md`、生成指南中英、格式中英，以及四份單檔雙語主題文件 |
| `docs/` | 10 | 總覽、架構中英、變更中英、修改 SOP 中英、安全中英、本檔 |
| `learning-packs/<topic-id>/` | 2 | 課題資料夾說明中英（通用範本） |
| **待上傳合計** | **23** | 全部為 Markdown |
| 本機交接 | 2 | `START_HERE.md`、`AI_UPLOAD_GUIDE.md`，**不隨文件上傳** |

### 3. 定位決策（2026-11-19）

| # | 決策 | 理由 | 被否決的做法 |
|---|---|---|---|
| 1 | 不以任何既定教材為主軸 | 網站能力是「換資料就換課題」，以固定內容描述會自我設限 | 以既有課程清單當賣點 |
| 2 | 主軸改為「上傳檔案增加不同課題」 | 直接說清楚擴充方式 | 只列功能表 |
| 3 | 動機寫成「成就感、可見性的學習」 | 技能樹的價值是進度可視與完成回饋 | 只強調純靜態或技術規格 |
| 4 | 使用方式放在目錄之前，並另設 AI 可讀檔 | 人與 AI 都要能第一眼找到方法 | 把用法藏在後面章節 |
| 5 | 新增 `AGENTS.md`，含機讀 YAML | 讓接手 AI 可直接當指令執行 | 只寫成人類閱讀的散落說明 |
| 6 | 生成前必問「資料」與「答題方式」 | 來源可追溯、題目貼合偏好 | 直接依主題名稱生成 |
| 7 | 全部文件一併重寫 | 避免定位不一致 | 只改主 README |

### 4. AI 流程規格摘要

```text
Step 1  問資料（阻塞）      一本書／講義／筆記／PDF／題庫／主題清單
Step 2  問答題方式（阻塞）  選擇題／數值輸入題／分步長題／混合／自訂
Step 3  確認課題輪廓        名稱、節點、先修、題數、門檻、時間、語言
Step 4  生成                依 PACK_FORMAT.md 產出來原始檔與 ZIP
Step 5  驗證                builder、測試、網站實測
Step 6  交付                匯入方式、備份、重設；不宣稱未執行的部署
```

完整逐字提問與機讀合約見 [`AGENTS.md`](../AGENTS.md)；八階段方法見 [`AI_TEACHING_GUIDE.md`](../AI_TEACHING_GUIDE.md)。

### 5. 誠實邊界

網站目前支援三種題型：**選擇題**（2–6 個選項）、**數值輸入題**（可輸入整數、小數、分數或 `sqrt(2)`、`pi` 等數值式，可設容差）、**分步長題**（一題含 2–8 個小問，全部小問正確才算通過該題），並提供手寫草稿紙。

AI 應依使用者偏好選用對應題型；若想要的是這三種之外的方式（例如口述回答、上傳手寫照片批改），先說明落差，再把偏好落實在題目措辭與解析寫法。不得宣稱網站已具備該功能，也不得虛構不存在的欄位。

### 6. 驗證結果

| 檢查 | 結果 |
|---|---|
| 檔案數 | 23 份待上傳 ＋ 2 份本機交接 |
| 中英覆蓋 | 8 對成對檔案 ＋ 5 份單檔雙語 |
| 兩個網址 | 每份文件皆含線上展示與儲存庫網址 |
| 相對連結 | 全數檢查，0 斷裂 |
| 本機絕對路徑 | 0 |
| 固定課題內容描述 | 0 |
| 測試 | `node --test tests/*.test.cjs` **25/25 全綠** |
| 程式改動 | 0；本輪僅重寫 Markdown |

### 7. 已知限制

- 交付包位於專案資料夾內；若靜態站台以整個專案根目錄為根，發布時會一併公開，須先排除或加忽略規則，見 [`SECURITY.md`](SECURITY.md)。
- 線上展示可能落後於本文件集所描述的狀態；文件更新不等於部署。
- 尚未指定授權條款。
- 課題資料夾的實際目錄名稱屬網站既有結構，文件內容已改為通用範本，不描述任何特定課題。

### 8. 風險登錄

| 風險 | 因應 |
|---|---|
| 定位只在部分文件更新 | 全部文件共用同一段定位文字，改就要一起改 |
| AI 跳過提問直接生成 | `AGENTS.md` 標為阻塞式，並在 README 醒目處重申 |
| 用了三種題型之外的方式卻未說明 | 統一誠實規則，散見各檔互相呼應 |
| 連結因改檔名斷裂 | 交付前全量相對連結檢查 |
| 靜態根目錄過寬 | 發布前檢查清單明列 |

---

## English Summary

**Status**: current. **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>. This is a single-file bilingual document.

**Role.** This records the scope, positioning, decisions and verification results of the documentation set, replacing an earlier file-inventory audit. Usage lives in the "How to Use" block of [`README.en.md`](../README.en.md); the AI workflow lives in [`AGENTS.md`](../AGENTS.md).

**Set.** 23 uploadable Markdown files: 11 at the root (paired READMEs, `AGENTS.md`, paired authoring guides, paired format guides, four single-file bilingual topic documents), 10 under `docs/`, and 2 topic-folder guides. Two local handoff documents (`START_HERE.md`, `AI_UPLOAD_GUIDE.md`) are not uploaded.

**Decisions (2026-11-19).** Reframe the site around uploading material to add subjects rather than any fixed course; state visible progress and a sense of achievement as the motive; put "How to Use" before the table of contents; add `AGENTS.md` with a machine-readable YAML contract so AI agents can read the method directly; require two blocking questions before generation — ask for material, then ask how the user wants to answer; rewrite the entire set so positioning stays consistent. Rejected alternatives: leading with an existing course list, a feature list alone, a purely technical pitch, hiding usage in later sections, prose-only guidance for agents, generating straight from a subject name, and editing only the main README.

**Workflow.** Ask for material (blocking) → ask answer mode (blocking) → confirm course shape → generate per pack format → validate with builder, tests and on-site checks → hand off import, backup and reset instructions without claiming unperformed deployments.

**Honesty boundary.** The site currently supports three item types: **multiple choice** (2–6 options), **numeric input** (integers, decimals, fractions, or expressions such as `sqrt(2)` and `pi`, with optional tolerance), and **multipart questions** (2–8 sub-questions; all must be correct for the item to count). A handwritten scratchpad is also available. Choose the item type that matches the user's preference. Only for modes outside these three (for example spoken answers or grading uploaded handwriting) should the AI disclose the gap first, then apply the preference to wording and explanations. Never claim an unimplemented feature or invent fields that do not exist.

**Verification.** 23 uploadable + 2 local files; eight paired mirrors plus five bilingual single files; both URLs present everywhere; all relative links checked with zero breakage; no absolute local paths; no descriptions of any pre-existing course; tests green; **no code changed** — Markdown only.

**Limitations.** The bundle sits inside the project folder, so a static site serving the whole project root could expose it; exclude or ignore before publishing (see [`SECURITY.en.md`](SECURITY.en.md)). The live demo may lag behind the documented state. No license specified. The topic folder's directory name is part of the existing site structure; its documents are now generic templates describing no particular course.

---

**相關文件 / Related**: [主 README](../README.md) ｜ [AGENTS.md](../AGENTS.md) ｜ [使用總覽](README.md) ｜ [變更紀錄](CHANGELOG.md) ｜ [安全](SECURITY.md)

[↑ 回到頂部 · Back to top](#top)
