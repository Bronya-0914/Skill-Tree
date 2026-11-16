<a id="top"></a>

# MD 檔盤點與分類稽核 · Markdown Inventory & Audit

> **狀態**：`current` — 記錄本次（2026-11-16／17）對本機 Markdown 檔的唯讀盤點、分類與保留決策，對應本機 HEAD `8d7b4cb`。
> **語言切換**：[繁體中文（本頁）](#top) ｜ [English Summary](#english-summary) — 本頁為單檔雙語：正文繁中，末尾附 English Summary，不另設 `.en.md`。
> **線上展示**：<https://bronya-0914.github.io/Skill-Tree/>
> **原始碼儲存庫**：<https://github.com/Bronya-0914/Skill-Tree>
> **稽核性質**：唯讀盤點；**未刪除、未搬移、未讀改任何專案外 MD**；未執行建置指令、未 push、未設 remote。
> **交付狀態（2026-11-17）**：本批 22 份 MD 已依專案相對路徑**移動**至指定交付包 `Skill-Tree-MD-Delivery/repository-files/`；該包內 9 份舊短版已移除並封存備份；專案工作區不再保留 MD 檔。為符合交付包「不含本機絕對路徑」規則，本頁與其餘 7 份文件內共 50 處本機路徑已去識別化為 `<repo-root>`／`<user-home>`／`<workbuddy-data>`／`user-<id>-personal`。
> **結論摘要**：專案內 8 個 MD **全部有用、全部保留**；專案外 35 個 MD **全部保留原處、不刪不搬**；「只留有用的 MD 在專案資料夾內」之要求，透過「專案資料夾內只保留有用 MD」＋「以複製方式整合 GitHub 上的中英文件」達成。

---

## 目錄

- [1. 盤點範圍與方法](#1-盤點範圍與方法)
- [2. 專案內 8 個 MD（全部有用、全部保留）](#2-專案內-8-個-md全部有用全部保留)
- [3. 專案外 35 個 MD 分類](#3-專案外-35-個-md-分類)
- [4. 老闆決策：全部保留原處、不刪不搬](#4-老闆決策全部保留原處不刪不搬)
- [5. 「外面的那些」之解讀與整合方式](#5-外面的那些之解讀與整合方式)
- [6. 完整 35 個外部路徑](#6-完整-35-個外部路徑)
  - [6.1 A 類：其他專案／第三方專案文件（23）](#61-a-類其他專案第三方專案文件23)
  - [6.2 B 類：WorkBuddy 系統記憶（7）](#62-b-類workbuddy-系統記憶7)
  - [6.3 C 類：使用者身份檔（5）](#63-c-類使用者身份檔5)
- [7. 新增與編修文件清單](#7-新增與編修文件清單)
- [8. 風險登錄](#8-風險登錄)
- [9. 未執行刪除／搬移的原因](#9-未執行刪除搬移的原因)
- [10. English Summary](#english-summary)

---

## 1. 盤點範圍與方法

| 項目 | 說明 |
|---|---|
| 盤點對象 | 本機 Markdown（`.md`）檔，分「Skill Tree 專案資料夾內」與「專案資料夾外」兩類。 |
| 專案根目錄 | `<repo-root>` |
| 方法 | 唯讀檔案列舉（`find`／`ls`）、路徑分類、對話記錄中既有盤點結果交叉核對；未開啟、未修改、未搬移任何外部檔案。 |
| 專案內 MD 數 | **8**（與唯讀勘查報告一致：專案共 8 個 `.md`）。 |
| 專案外 MD 數 | **35**（分屬其他專案、WorkBuddy 系統記憶、使用者身份檔）。 |
| 其他檔案 | 桌面與下載資料夾**沒有 MD 檔**；專案內另有 `js/vendor/fflate-LICENSE.txt`（純文字授權檔，非 MD）。 |
| 最終動作 | 對專案內 MD：保留並改寫 8 個既有檔、新建 14 個檔（共 22 個）；對專案外 35 個 MD：**零動作**。 |

> 路徑清單為唯讀盤點當下所記錄的 35 個外部 MD；盤點後部分目錄可能已新增檔案（例如 `moodle-course-watch` 目錄另有 `site-profile.md`），本次未重新計數、亦未變更任何外部檔案。

---

## 2. 專案內 8 個 MD（全部有用、全部保留）

盤點結論：**8 個 MD 無一需刪**，各有明確用途，全數保留於原路徑。

| # | 檔案（相對專案根） | 主題 | 分類 | 處置 | 狀態 |
|---|---|---|---|---|---|
| 1 | `README.md` | 使用入門、五步驟、備份、文件入口、維護指令 | 入門 | 保留並大幅擴充 | `current` |
| 2 | `AI_TEACHING_GUIDE.md` | 給接手 AI 的教材製作指南、八階段、雙語交付 | 格式與教材 | 保留並大幅擴充 | `current` |
| 3 | `PACK_FORMAT.md` | 學習包格式 v1、`topic.json`／node 欄位、ZIP 限制 | 格式與教材 | 保留並大幅擴充 | `current` |
| 4 | `I18N.md` | 語言切換、`skill-tree-language`、訊息目錄 | 格式與教材 | 保留並改為雙語版 | `current` |
| 5 | `learning-packs/cis221-calculus/README.md` | 27 課清單、前置節點、檔案結構 | 格式與教材 | 保留並大幅擴充 | `current` |
| 6 | `BOOK-REFERENCE.md` | 書目與版權、46 章清單、27 節點對應、改寫進度 | 歷史與評估 | **保留＋編修**（檔首插入對照區塊、訂正 §7／§9 過時字串） | `historical` / `local-only` |
| 7 | `DESIGN-v2.md` | 前端重新設計與 R4／R5 逐輪驗收歷史（721 行） | 歷史與評估 | **保留＋編修**（檔首插入對照區塊） | `historical` / `local-only` |
| 8 | `MULTIUSER-ARCH.md` | A／B／C 評估、R0–R2 設計、A 模式持久性實測 | 歷史與評估 | **保留＋編修**（檔首插入對照區塊、訂正六／七鍵、117 段） | `historical` |

> 第 6–8 份為歷史文件，已於檔首插入「文件狀態與現況對照」區塊（雙語摘要、兩個網址、性質、HEAD `8d7b4cb`、`<details>` 目錄、現況對照表、使用說明），**原標題與所有原段落皆保留、未刪除**。

---

## 3. 專案外 35 個 MD 分類

| 類 | 分類 | 數量 | 說明 | 是否 Skill Tree 專案文件 |
|---|---|---|---|---|
| A | 其他專案／第三方專案文件 | 23 | Moodle-MCP 多語 README、`moodle-course-watch` skill 檔、ESP32 文件、設計稿輸出、推薦信、CV、其他 `P\` 專案與 venv 內 `NOTICE.md` | **否** |
| B | WorkBuddy 系統記憶 | 7 | 各工作階段 `.workbuddy-ai\memory\` 下的 `MEMORY.md` 與日期記憶檔 | **否** |
| C | 使用者身份檔 | 5 | `user-…-personal\` 下的 `IDENTITY`／`USER`／`BOOTSTRAP`／`SOUL`／`MEMORY` | **否** |
| | **合計** | **35** | | **全部否** |

結論：35 個外部 MD **沒有一個**屬於 Skill Tree 專案文件；若刪除或搬移，將影響其他專案、WorkBuddy 長期記憶或使用者身份設定。

---

## 4. 老闆決策：全部保留原處、不刪不搬

盤點後提出三種處理選項，老闆選擇 **「外部全保留（建議）」**：

| 選項 | 內容 | 是否採用 |
|---|---|---|
| A | 外部檔案全部保留原處、不刪不搬；只整理與完善專案內 8 個 MD，並寫入線上網址 | **採用** |
| B | 只把與 Skill Tree 相關的外部 MD 搬入專案（查無此類檔案，等於不搬） | 否 |
| C | 仍要刪除外部 MD（需二次確認、先備份、逐批移至回收桶） | 否 |

因此本次邊界明定：**不得刪除、不得搬移、不得讀改本機專案外的 35 個 MD**；`docs/` 下的新建文件僅記錄其路徑與分類，不触碰原檔。

---

## 5. 「外面的那些」之解讀與整合方式

老闆另指示「把外面的那些移動到裡面」。經釐清，「外面的那些」**並非**指本機專案外的 35 個 MD（該批已裁定全數保留原處），而是指**目前不在本機、但存在於 GitHub 儲存庫上的中英 MD 檔**。

因「移動」與「外部全保留、不刪不搬」之決策衝突，實作上改採**複製（copy）整合**：自儲存庫 <https://github.com/Bronya-0914/Skill-Tree> 取得英文／雙語文件，於本機建立對應檔案，**不動任何外部來源檔**。

| 整合進本機的檔案 | 性質 | 負責 |
|---|---|---|
| `README.en.md` | `README.md` 的 English 對照 | 本次文件整併 |
| `AI_TEACHING_GUIDE.en.md` | 教材指南 English 對照 | 本次文件整併 |
| `PACK_FORMAT.en.md` | 格式文件 English 對照 | 本次文件整併 |
| `learning-packs/cis221-calculus/README.en.md` | 27 課清單 English 對照 | 本次文件整併 |
| `I18N.md`（雙語版） | 「## 繁體中文」／「## English」兩節對照 | 本次文件整併 |

> 此解讀同時滿足「中英對照」「專業 GitHub 文件寫法」「只留有用的 MD 在專案資料夾內」三項要求：整合進來的皆為**有用且與本專案直接相關**的文件，且以成對／雙語方式存在。

---

## 6. 完整 35 個外部路徑

> 以下逐條列出盤點記錄的全部 35 個外部 MD 路徑（分組但每條皆寫出），均為**唯讀記錄、未刪除、未搬移、未讀改**。為避免公開本機目錄結構，根目錄已去識別化為 `<user-home>`／`<workbuddy-data>`，分隔符統一為 `/`；相對層次與檔名保持原樣。

### 6.1 A 類：其他專案／第三方專案文件（23）

1. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.de.md`
2. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.es.md`
3. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.fr.md`
4. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.ja.md`
5. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.ko.md`
6. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.md`
7. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.pt-BR.md`
8. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.ru.md`
9. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.zh-CN.md`
10. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/README.zh-TW.md`
11. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/skill/moodle-course-watch/README.md`
12. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/skill/moodle-course-watch/README.zh-CN.md`
13. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/skill/moodle-course-watch/README.zh-TW.md`
14. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/skill/moodle-course-watch/SKILL.md`
15. `<user-home>/WorkBuddy AI/Claw/Moodle-MCP/skill/moodle-course-watch/site-profile.template.md`
16. `<user-home>/WorkBuddy AI/Claw/assets/cv_rebuilt.md`
17. `<user-home>/WorkBuddy AI/2026-11-05-01-16-51/ESP32-DEVKITV1-docs/00_文件索引.md`
18. `<user-home>/WorkBuddy AI/2026-11-05-00-01-53/Brian-Ho-Recommendation-Request.md`
19. `<user-home>/WorkBuddy AI/2026-11-08-01-03-30/output/designkit-restyle/ROOM.md`
20. `<user-home>/WorkBuddy AI/2026-11-08-01-03-30/output/Topic5-Direct-Victims-PPT/DESIGN.md`
21. `<workbuddy-data>/.workbuddy/projects/P/ESP32Drone/DESIGN.md`
22. `<workbuddy-data>/.workbuddy/projects/P/hard_hat_asset/README.md`
23. `<workbuddy-data>/.workbuddy/projects/P/pet/.venv/Lib/site-packages/win32comext/mapi/NOTICE.md`

### 6.2 B 類：WorkBuddy 系統記憶（7）

24. `<user-home>/WorkBuddy AI/2026-11-01-06-12-00/.workbuddy-ai/memory/MEMORY.md`
25. `<user-home>/WorkBuddy AI/2026-11-01-06-12-00/.workbuddy-ai/memory/2026-11-01.md`
26. `<user-home>/WorkBuddy AI/2026-11-01-06-12-00/.workbuddy-ai/memory/2026-11-02.md`
27. `<user-home>/WorkBuddy AI/Claw/.workbuddy-ai/memory/2026-11-02.md`
28. `<user-home>/WorkBuddy AI/2026-11-04-20-03-20/.workbuddy-ai/memory/2026-11-04.md`
29. `<user-home>/WorkBuddy AI/2026-11-05-00-01-53/.workbuddy-ai/memory/2026-11-05.md`
30. `<user-home>/WorkBuddy AI/2026-11-05-00-01-53/.workbuddy-ai/memory/MEMORY.md`

### 6.3 C 類：使用者身份檔（5）

31. `<user-home>/.workbuddy-ai/user-<id>-personal/IDENTITY.md`
32. `<user-home>/.workbuddy-ai/user-<id>-personal/USER.md`
33. `<user-home>/.workbuddy-ai/user-<id>-personal/BOOTSTRAP.md`
34. `<user-home>/.workbuddy-ai/user-<id>-personal/SOUL.md`
35. `<user-home>/.workbuddy-ai/user-<id>-personal/MEMORY.md`

> 分組小計：A 類 23 ＋ B 類 7 ＋ C 類 5 ＝ **35**。桌面與下載資料夾無 MD 檔。

---

## 7. 最終文件清單（22 檔）

本次文件整併後，專案內共 **22 份 Markdown**：既有 **8 份全數保留**，新建 **14 份**；專案外 35 份零動作。

### 7.1 既有 8 份（保留＋改寫／補狀態）

| # | 檔案 | 動作 |
|---|---|---|
| 1 | `README.md` | 重寫為 1,000+ 行專業雙語主 README |
| 2 | `AI_TEACHING_GUIDE.md` | 大幅擴充八階段、驗證上限、統計與檢查清單 |
| 3 | `PACK_FORMAT.md` | 大幅擴充 schema、ZIP、CRC32、版本合併與疑難排解 |
| 4 | `I18N.md` | 改為單檔雙語，補 46 templates、WeakMap、1,831 keys |
| 5 | `learning-packs/cis221-calculus/README.md` | 擴充 27 課統計、來源、版本與英文對照 |
| 6 | `BOOK-REFERENCE.md` | 檔首插入現況對照；§7／§9 訂正過時值 |
| 7 | `DESIGN-v2.md` | 檔首插入現況對照；721 行原文保留 |
| 8 | `MULTIUSER-ARCH.md` | 檔首插入現況對照；訂正六／七鍵、117 段 |

### 7.2 新建 14 份

| 位置 | 檔案 | 語言／用途 |
|---|---|---|
| 根目錄 | `README.en.md` | 主 README 的 English 對照 |
| 根目錄 | `AI_TEACHING_GUIDE.en.md` | 教材指南 English 對照 |
| 根目錄 | `PACK_FORMAT.en.md` | 格式文件 English 對照 |
| `learning-packs/cis221-calculus/` | `README.en.md` | 27 課清單 English 對照 |
| `docs/` | `README.md` | 文件導覽（繁中＋English 對照表） |
| `docs/` | `ARCHITECTURE.md` / `ARCHITECTURE.en.md` | 現況技術架構（中英各一） |
| `docs/` | `CHANGELOG.md` / `CHANGELOG.en.md` | 截至 `8d7b4cb` 共 17 個 commit |
| `docs/` | `CONTRIBUTING.md` / `CONTRIBUTING.en.md` | 貢獻 SOP |
| `docs/` | `SECURITY.md` / `SECURITY.en.md` | 安全邊界與發布前檢查 |
| `docs/` | `MD-AUDIT.md` | 本盤點與分類稽核（本頁，含 English Summary） |

### 7.3 整合方式

GitHub 儲存庫上原先不在本機的英文 MD 檔，以**複製**方式建立本機對應檔並大幅擴充；`I18N.md` 採單檔雙語；`docs/` 下另建架構、變更、貢獻、安全、稽核與導覽文件。所有連結皆指向本機現存檔案，未刪除、未搬移任何本機外部 MD，未推送、未設 remote。

> **交付落地**：以上 22 份已按原相對路徑全數移入 `Skill-Tree-MD-Delivery/repository-files/`（`repository-files/` 的內容即儲存庫根目錄的目標結構）。交付包另含 `START_HERE.md` 與 `AI_UPLOAD_GUIDE.md` 兩份交接指引，兩者不隨文件上傳。

---
## 8. 風險登錄

| # | 風險 | 說明 | 因應 |
|---|---|---|---|
| 1 | 誤刪／誤搬外部 MD | 35 個外部 MD 含其他專案設計、WorkBuddy 長期記憶與使用者身份檔；刪除或搬移可能造成**不可逆資料丟失**並影響其他專案 | 老闆裁定全數保留原處；本次零動作、逐條記錄路徑 |
| 2 | 版權資料外洩 | `references/` 的 Schaum's／McGraw-Hill 1988 OCR 書籍全文已被 Git 追蹤且無 `.gitignore`；`static.directory="."` 會以整個專案根為靜態根 | 見 [`SECURITY.md`](SECURITY.md)；發布前必須排除；線上目前 404 但非本機保證 |
| 3 | 歷史文件過時數值被誤引為現況 | `DESIGN-v2.md`／`BOOK-REFERENCE.md`／`MULTIUSER-ARCH.md` 保留 14/14、117 段、六／七鍵、35 DOM ID、`Fit scale=0.596` 等量測當日值 | 三份檔首插入「現況對照表」；現況以 `docs/ARCHITECTURE.md` 與 `README.md` 為準 |
| 4 | 部署版本不一致 | 線上 Pages 已 200 但為較舊版本（教材 v1、雙擊開合），本機 `8d7b4cb` 為 v5、單擊開合 | [`CHANGELOG.md`](CHANGELOG.md) 與 [`SECURITY.md`](SECURITY.md) 明載；未授權不 push |
| 5 | 無授權／無 remote | 專案無 `LICENSE`、本機無 remote、未 push、無 release tag | [`SECURITY.md`](SECURITY.md) 第 7 節；發布需明確授權 |
| 6 | 文件整併後工作樹有未提交變更 | 22 份 MD 已寫入但尚未提交；文件中「工作樹乾淨」指 HEAD `8d7b4cb` 當時快照 | 未經老闆指示不自動提交、不推送；需要時另行寫入 Git |

---

## 9. 未執行刪除／搬移的原因

1. **老闆明確選擇「全部保留原處、不刪不搬」**（見[第 4 節](#4-老闆決策全部保留原處不刪不搬)）；刪除或搬移與此決策直接衝突。
2. **35 個外部 MD 無一屬 Skill Tree 專案文件**：全屬其他專案、WorkBuddy 系統記憶或使用者身份檔；動到任何一個都會波及不相干的工作。
3. **本機檔案刪除／搬移屬高風險、不可逆操作**：依既有規矩，刪除本機檔案前必須逐項確認；本次無任何一項獲得刪除授權。
4. **「只留有用的 MD 在專案資料夾內」的正確解讀**：指「專案資料夾內只保留有用 MD」，專案外檔案本就不在整理範圍；且專案內 8 個 MD 經盤點**全部有用**，故亦無一需刪。
5. **「把外面的那些移動到裡面」改以複製整合**：對象是 GitHub 儲存庫上的中英 MD 檔，以建立本機對應檔方式達成，無需移動或刪除本機外部檔。
6. **邊界限制**：本次僅寫／編修專案內 Markdown 檔；不得刪除任何檔案、不得搬移專案外 35 個 MD、不得改動程式／JSON／ZIP、不得執行 build script、不得 push／設 remote。

> **後續交付（2026-11-17）**：老闆另行指示將整理完成的 22 份**專案內** MD 以「移動（專案不留）」方式放入指定交付包 `Skill-Tree-MD-Delivery/repository-files/`，並移除該包內 9 份舊短版（先備份、封存，未永久刪除）。此動作僅涉及專案內文件，與上述 35 份專案外 MD 無關；外部檔至今仍全數保留原處、零動作。

---

<a id="english-summary"></a>

## 10. English Summary

> **Status**: `current`. **Live demo**: <https://bronya-0914.github.io/Skill-Tree/> · **Repository**: <https://github.com/Bronya-0914/Skill-Tree>. **Local HEAD**: `8d7b4cb`. This is a single-file bilingual document (Traditional-Chinese body, English summary here).

**Scope and method.** A read-only inventory of local Markdown files was taken for the Skill Tree project (`<repo-root>`). At inventory time it found **8 MD files inside the project** and **35 MD files outside it**; the final in-project count is **22**. No external file was opened, modified, moved or deleted; no build script was run; nothing was pushed; no remote was configured.

**In-project (8/8 useful, 8/8 retained).** All eight project MD files have a clear purpose: `README.md`, `AI_TEACHING_GUIDE.md`, `PACK_FORMAT.md`, `I18N.md`, `learning-packs/cis221-calculus/README.md`, `BOOK-REFERENCE.md`, `DESIGN-v2.md`, `MULTIUSER-ARCH.md`. None required deletion. Five existing documents were rewritten and three historical documents received a "Document Status & Current-State Comparison" block plus targeted corrections; their original titles and all original sections were preserved. Fourteen new documents were added: 4 English mirrors at the root/course level and 10 under `docs/`.

**Out-of-project (35/35 retained in place).** The 35 external MD files fall into three groups: (A) 23 other-project / third-party files (Moodle-MCP multilingual READMEs, the `moodle-course-watch` skill files, ESP32 docs, design output, a recommendation letter, a CV, other `P\` projects, and a venv `NOTICE.md`); (B) 7 WorkBuddy system-memory files (`.workbuddy-ai\memory\MEMORY.md` and dated memory files); (C) 5 user identity files (`IDENTITY`, `USER`, `BOOTSTRAP`, `SOUL`, `MEMORY`). **None** belongs to the Skill Tree project. The owner chose "keep all in place, do not delete or move"; options to move related files or to delete were rejected. Section 6 lists all 35 full paths individually.

**"The ones outside" reinterpreted.** That phrase does **not** refer to the 35 local external MD files (already frozen in place), but to the Chinese/English MD files that exist on the GitHub repository and are not yet local. Because moving would conflict with the retention decision, integration was done by **copy**: `README.en.md`, `AI_TEACHING_GUIDE.en.md`, `PACK_FORMAT.en.md`, `learning-packs/cis221-calculus/README.en.md`, and a bilingual `I18N.md` were created locally without touching any external source file. This satisfies bilingual coverage, professional GitHub documentation, and "keep only useful MD files inside the project folder".

**Risks.** Deleting/moving external MD would cause irreversible data loss in other projects; `references/` holds copyrighted Schaum's / McGraw-Hill 1988 OCR full text that is Git-tracked with no `.gitignore` and exposed by `static.directory="."`; historical documents contain stale measurement-day figures (14/14 tests, 117 segments, six/seven keys, 35 DOM IDs, `Fit scale=0.596`) that must not be quoted as current; the live Pages build is older than local HEAD; there is no `LICENSE`, no remote, no push, no release tag; the documentation pass itself is not yet committed.

**Why no deletion/move was performed.** It contradicts the owner's explicit decision; none of the 35 files is a Skill Tree file; local deletion/move is high-risk and irreversible with no authorisation; the "only useful MD inside the folder" requirement concerns the project folder (where all 8 are useful), not external files; and the task boundary forbids deleting any file or moving the 35 external MD files.

---

[↑ 回到頂部 · Back to top](#top)
