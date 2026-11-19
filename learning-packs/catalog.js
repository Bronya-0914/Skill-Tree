// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。
const LEARNING_PACKS = [
  {
    "topic": {
      "schemaVersion": 1,
      "id": "mendelson-calculus",
      "title": "3000 Solved Problems in Calculus · 全書技能路線",
      "version": 3,
      "description": "依原書 46 章重整為 52 個知識點。每節以原理、公式、操作步驟與常見誤解構成，不設例題；每節 10 題，混合選擇題、數值輸入題與分步長題，涵蓋概念判斷、直接計算與多步推導。",
      "attachTo": "start"
    },
    "nodes": [
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-01",
        "title": "01 · 不等式與區間",
        "intro": "學完這一節，你能把任何一個一元一次不等式化成「x 比某數大／小」的形式，並用區間正確寫出解集。這是後面所有定義域、值域、單調區間的共同語言。",
        "kind": "base",
        "minutes": 20,
        "parents": [],
        "content": [
          {
            "type": "heading",
            "text": "原理一：不等式保持方向的條件"
          },
          {
            "type": "paragraph",
            "text": "不等式描述兩個量的大小關係。對兩邊同時加或減同一個數，大小關係不變；對兩邊同時乘或除同一個正數，方向也不變。這叫保序性，是不等式變形的全部基礎。"
          },
          {
            "type": "formula",
            "text": "a < b  ⇒  a + c < b + c\nc > 0 且 a < b  ⇒  ac < bc"
          },
          {
            "type": "heading",
            "text": "原理二：乘除負數為什麼要反向"
          },
          {
            "type": "paragraph",
            "text": "把數線以 0 為中心左右對調，就是「乘 -1」。對調之後原本在右邊的數跑到左邊，大小關係整個翻轉。所以乘或除負數時，不等號必須反向，這不是規則口訣，而是鏡射的必然結果。"
          },
          {
            "type": "formula",
            "text": "c < 0 且 a < b  ⇒  ac > bc\n例：2 < 5，同乘 -1 得 -2 > -5"
          },
          {
            "type": "heading",
            "text": "原理三：解集與區間記法"
          },
          {
            "type": "paragraph",
            "text": "解集是數線上的一段或幾段。圓括號表示端點不含，方括號表示端點含；無窮大那一端一律用圓括號，因為無窮大不是數，取不到。"
          },
          {
            "type": "formula",
            "text": "x < 4        →  (-∞, 4)\nx ≤ 4        →  (-∞, 4]\n2 < x ≤ 7    →  (2, 7]\n-1 ≤ x ≤ 3   →  [-1, 3]"
          },
          {
            "type": "heading",
            "text": "原理四：區間就是距離的語言"
          },
          {
            "type": "paragraph",
            "text": "數線上兩點 a 與 b 的距離是 |a - b|，與先寫哪一點無關，因為取絕對值後正負抵消。反過來，以 a 為中心、r 為半徑的所有點，就是區間 (a - r, a + r)。所以「落在某個區間內」與「與某點的距離小於某個數」是同一件事的兩種說法。"
          },
          {
            "type": "formula",
            "text": "|a - b| = a 與 b 的距離\n|x - a| < r  ⇔  a - r < x < a + r  ⇔  x ∈ (a - r, a + r)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，去分母：若分母是已知正數可直接乘；若分母含未知數，不可直接乘，必須先分情況討論正負。"
          },
          {
            "type": "paragraph",
            "text": "第二步，移項：把含 x 的項集中一邊、常數集中另一邊，只用加減，方向不變。"
          },
          {
            "type": "paragraph",
            "text": "第三步，係數化為 1：兩邊同除 x 的係數。係數為負時，不等號反向。"
          },
          {
            "type": "paragraph",
            "text": "第四步，寫成區間：確認端點是否可取，無窮端用圓括號。"
          },
          {
            "type": "paragraph",
            "text": "距離與區間互換：看到「與 a 的距離小於 r」，先寫成 a - r < x < a + r，再照上面的步驟解；看到區間 (m, n)，就知道它的中心是 (m + n)/2、半徑是 (n - m)/2。"
          },
          {
            "type": "paragraph",
            "text": "第五步，回代驗證：從解集內取一個數代入原式，再取解集外一個數，兩者應一真一假。這一步能抓出九成的方向錯誤。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是最後一步除以負數時忘記反向，例如 -2x ≥ 6 應得 x ≤ -3，卻寫成 x ≥ -3。只要养成回代驗證的習慣，這類錯誤會立刻暴露。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把「x > 5」寫成 (5, -∞)。區間必須由小寫到大，正確是 (5, ∞)。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是複合不等式只解一邊。像 -3 < 2x+1 ≤ 7 必須三邊同時運算，不能拆開後只顧一側。"
          }
        ],
        "questions": [
          {
            "prompt": "解 -3x > 12，下列何者正確？",
            "options": [
              "x < -4",
              "x > -4",
              "x < 4",
              "x > 4"
            ],
            "answer": 0,
            "explanation": "兩邊同除 -3。因為除數是負數，不等號必須反向：-3x > 12 得 x < -4。若忘記反向就會誤選 x > -4，這是本章最高頻的失分點。"
          },
          {
            "type": "input",
            "prompt": "解 5x - 7 ≤ 18，輸入 x 的上界。",
            "answers": [
              "5"
            ],
            "explanation": "先移項：5x ≤ 25；再除以正數 5，方向不變：x ≤ 5。上界是 5，且 5 本身可取，對應區間 (-∞, 5]。"
          },
          {
            "type": "input",
            "prompt": "解 4 - 2x ≥ 10，輸入 x 的上界。",
            "answers": [
              "-3"
            ],
            "explanation": "移項得 -2x ≥ 6；除以 -2 時反向，得 x ≤ -3。檢驗：取 x = -4 代入，4-2(-4)=12 ≥ 10 成立；取 x = 0 得 4 ≥ 10 不成立，方向正確。"
          },
          {
            "prompt": "不等式 x ≥ -2 的區間表示是？",
            "options": [
              "[-2, ∞)",
              "(-2, ∞)",
              "(-∞, -2]",
              "[-2, -∞)"
            ],
            "answer": 0,
            "explanation": "x ≥ -2 表示從 -2 往右所有數，且 -2 可取，所以左端用方括號、右端無窮用圓括號：[-2, ∞)。選 (-2, ∞) 是漏掉端點；選 (-∞, -2] 是把方向寫反。"
          },
          {
            "type": "input",
            "prompt": "複合不等式 -3 < 2x + 1 ≤ 7 有幾個整數解？",
            "answers": [
              "5"
            ],
            "explanation": "三邊同時減 1：-4 < 2x ≤ 6；三邊同除 2（正數，方向不變）：-2 < x ≤ 3。整數解為 -1, 0, 1, 2, 3，共 5 個。注意 -2 不含、3 含，邊界判斷錯就會多算或少算一個。"
          },
          {
            "type": "multipart",
            "prompt": "解不等式 3(x - 2) < 5x + 4。",
            "parts": [
              {
                "type": "input",
                "prompt": "化簡移項後，x 的係數是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "展開左邊：3x - 6 < 5x + 4；兩邊減 3x 再減 4，得 -10 < 2x，所以 x 的係數是 2。"
              },
              {
                "type": "input",
                "prompt": "解集的下界是多少？",
                "answers": [
                  "-5"
                ],
                "explanation": "由 -10 < 2x 兩邊除以 2（正數），得 -5 < x，下界為 -5。"
              },
              {
                "type": "input",
                "prompt": "滿足條件的最小整數是多少？",
                "answers": [
                  "-4"
                ],
                "explanation": "解集是 x > -5，整數從 -4 開始，故最小整數解為 -4。"
              }
            ],
            "explanation": "本題關鍵是先把括號展開再合併同類項，最後除以正數 2 不反向。若把 -10 < 2x 誤寫成 x < -5，後兩問會連帶全錯。"
          },
          {
            "type": "input",
            "prompt": "數線上 -3 與 5 的距離是多少？",
            "answers": [
              "8"
            ],
            "explanation": "距離為 |5 - (-3)| = 8。兩點距離是座標差的絕對值，先減後取絕對值，順序不影響結果；直接寫 5 - 3 = 2 是把負號漏掉。"
          },
          {
            "prompt": "若 a < b，下列何者必然成立？",
            "options": [
              "a - 3 < b - 3",
              "a² < b²",
              "1/a < 1/b",
              "-a < -b"
            ],
            "answer": 0,
            "explanation": "同減一個數保序，故 a - 3 < b - 3 恆成立。a² < b² 在跨越 0 時失效，例如 a=-3、b=1。1/a < 1/b 在異號時失效。同乘 -1 會反向，所以 -a < -b 是錯的，正確為 -a > -b。"
          },
          {
            "type": "input",
            "prompt": "不等式 x² - 5x + 6 < 0 的解區間長度是多少？",
            "answers": [
              "1"
            ],
            "explanation": "因式分解得 (x-2)(x-3) < 0。兩根為 2 與 3，開口向上的拋物線在兩根之間為負，故解集為 2 < x < 3，長度 3-2 = 1。"
          },
          {
            "type": "multipart",
            "prompt": "解複合不等式 -1 ≤ (2x - 3)/5 < 3。",
            "parts": [
              {
                "type": "input",
                "prompt": "解集的下界是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "三邊同乘 5（正數，方向不變）：-5 ≤ 2x - 3 < 15；三邊加 3：-2 ≤ 2x < 18；三邊除以 2：-1 ≤ x < 9。下界為 -1。"
              },
              {
                "type": "input",
                "prompt": "解集的上界是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "由上一步得 x < 9，上界為 9，且 9 不可取。"
              },
              {
                "type": "input",
                "prompt": "解集內有幾個整數？",
                "answers": [
                  "10"
                ],
                "explanation": "x 的範圍是 -1 ≤ x < 9，整數為 -1, 0, 1, ..., 8，共 8-(-1)+1 = 10 個。"
              }
            ],
            "explanation": "複合不等式的原則是三邊同步運算。本題乘 5、加 3、除 2 都是正數運算，方向全程不變；若中間出現負數乘除，三邊的不等號要一起反向。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-02",
        "title": "02 · 絕對值與分段",
        "intro": "上一節已把 |x - a| 看成數線上的距離，並指出它與區間是同一件事。本節把這個觀點變成可操作的工具：把絕對值不等式拆成一次不等式、處理等於常數的兩種情況，並寫出分段函數。學完你能獨立解 |ax + b| 型的不等式。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-01"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：絕對值是距離"
          },
          {
            "type": "paragraph",
            "text": "|x| 的定義不是「把負號去掉」，而是 x 在數線上到原點的距離。推廣一步，|x - a| 是 x 到 a 的距離。這個觀點讓所有絕對值不等式都變成幾何問題：離某點多遠。"
          },
          {
            "type": "formula",
            "text": "|x - a| = x 到 a 的距離\n|x - 3| < 5  ⇔  x 與 3 的距離小於 5"
          },
          {
            "type": "heading",
            "text": "原理二：小於取中間，大於取兩端"
          },
          {
            "type": "paragraph",
            "text": "「距離小於 r」表示 x 落在 a 的左右各 r 之內，是一段連續區間，所以取交集形式。「距離大於 r」表示 x 跑到這段之外，分成左右兩塊，所以取聯集形式。前提是 r > 0；r = 0 時只剩一個點，r < 0 時無解。"
          },
          {
            "type": "formula",
            "text": "|x - a| < r  ⇔  a - r < x < a + r\n|x - a| > r  ⇔  x < a - r  或  x > a + r\n|X| ≤ r 與 |X| ≥ r 只是把嚴格不等號換成含等號"
          },
          {
            "type": "heading",
            "text": "原理三：分段函數的意義"
          },
          {
            "type": "paragraph",
            "text": "分段函數是在不同區間用不同規則計算的同一個函數。絕對值本身就是最簡單的分段函數：x ≥ 0 時等於 x，x < 0 時等於 -x。分段點必須明確定義屬於哪一段，不能重複也不能遺漏。"
          },
          {
            "type": "formula",
            "text": "|x| = x   （x ≥ 0）\n|x| = -x  （x < 0）"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，把絕對值整理成 |X| 的形式，其中 X 是一次式。"
          },
          {
            "type": "paragraph",
            "text": "第二步，判斷是不等號「小於」還是「大於」，分別對應中間區間或兩端聯集。"
          },
          {
            "type": "paragraph",
            "text": "第三步，解出各段的一次不等式。"
          },
          {
            "type": "paragraph",
            "text": "第四步，小於取交集、大於取聯集，寫成區間。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用端點與一個內點回代，確認邊界開閉正確。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 |x - 3| < 5 直接寫成 x - 3 < 5，只得到 x < 8，漏掉另一半。正確是 -5 < x - 3 < 5，即 -2 < x < 8。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是大於時取交集。|x| > 2 的解是 x < -2 或 x > 2，兩段之間是空的，取交集會得到空集合。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略 r > 0 的前提。|x - 1| < -3 無解，不是 x < -2。"
          }
        ],
        "questions": [
          {
            "prompt": "|x - 3| < 5 等價於下列哪一個？",
            "options": [
              "-2 < x < 8",
              "x < 8",
              "x > -2",
              "x < -2 或 x > 8"
            ],
            "answer": 0,
            "explanation": "距離觀點：x 與 3 的距離小於 5，所以 x 落在 3 左右各 5 之內，即 -2 < x < 8。只寫 x < 8 是漏掉左半；x < -2 或 x > 8 是「大於」的形式，方向弄反。"
          },
          {
            "type": "input",
            "prompt": "解 |2x - 1| ≤ 7，輸入 x 的上界。",
            "answers": [
              "4"
            ],
            "explanation": "拆成 -7 ≤ 2x - 1 ≤ 7；三邊加 1 得 -6 ≤ 2x ≤ 8；除以 2 得 -3 ≤ x ≤ 4。上界為 4，且 4 可取。"
          },
          {
            "type": "input",
            "prompt": "解 |x + 4| > 2，在解集中最大的負整數是多少？",
            "answers": [
              "-7"
            ],
            "explanation": "拆成 x + 4 > 2 或 x + 4 < -2，得 x > -2 或 x < -6。解集是 (-∞, -6) ∪ (-2, ∞)。負整數中，小於 -6 的最大者是 -7；另一段 -2 以右沒有負整數。故答案為 -7。"
          },
          {
            "prompt": "關於 |x| ≥ 0，下列敘述何者正確？",
            "options": [
              "對所有實數恆成立，等號僅在 x = 0 時成立",
              "只在 x ≥ 0 時成立",
              "等號在 x = 0 與 x = 1 時成立",
              "x 為負數時不成立"
            ],
            "answer": 0,
            "explanation": "距離不可能為負，所以 |x| ≥ 0 對所有實數成立。距離為 0 表示該點就是原點，只有 x = 0。這是最基本的性質，常用來判斷絕對值函數的最小值。"
          },
          {
            "type": "input",
            "prompt": "方程式 |3x - 6| = 0 的解是什麼？",
            "answers": [
              "2"
            ],
            "explanation": "絕對值等於 0 表示距離為 0，即 3x - 6 = 0，解得 x = 2。等號情況只有唯一解，不會有正負兩支。"
          },
          {
            "type": "multipart",
            "prompt": "解不等式 |x - 1| ≥ 3。",
            "parts": [
              {
                "type": "input",
                "prompt": "解集的右段左端點是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "由 x - 1 ≥ 3 得 x ≥ 4，右段為 [4, ∞)，左端點是 4。"
              },
              {
                "type": "input",
                "prompt": "解集的左段右端點是多少？",
                "answers": [
                  "-2"
                ],
                "explanation": "由 x - 1 ≤ -3 得 x ≤ -2，左段為 (-∞, -2]，右端點是 -2。"
              },
              {
                "type": "input",
                "prompt": "在 [-5, 5] 之內，解集共包含幾個整數？",
                "answers": [
                  "6"
                ],
                "explanation": "左段在 [-5,5] 內為 -5, -4, -3, -2 共 4 個；右段為 4, 5 共 2 個；合計 6 個。"
              }
            ],
            "explanation": "本題是大於型，解集為兩段聯集，不可取交集。邊界 4 與 -2 都含在解集內，計數時要算進去。"
          },
          {
            "type": "input",
            "prompt": "|x| ≤ 2 有幾個整數解？",
            "answers": [
              "5"
            ],
            "explanation": "解集為 -2 ≤ x ≤ 2，整數是 -2, -1, 0, 1, 2，共 5 個。這類計數可用「上界減下界加一」快速核對：2-(-2)+1 = 5。"
          },
          {
            "prompt": "設 f(x) = |x| / x（x ≠ 0），當 x < 0 時 f(x) 等於？",
            "options": [
              "-1",
              "1",
              "x",
              "-x"
            ],
            "answer": 0,
            "explanation": "x < 0 時 |x| = -x，所以 f(x) = (-x)/x = -1。這是絕對值改寫成分段的典型用法：先判斷正負，再決定 |x| 是哪一支。選 1 是誤以為 |x| 恆等於 x。"
          },
          {
            "type": "input",
            "prompt": "不等式 |2x + 3| < 1 的解區間長度是多少？",
            "answers": [
              "1"
            ],
            "explanation": "拆成 -1 < 2x + 3 < 1；三邊減 3 得 -4 < 2x < -2；除以 2 得 -2 < x < -1。長度為 -1-(-2) = 1。絕對值小於 r 的解區間長度恆為 2r 除以 x 的係數絕對值。"
          },
          {
            "type": "multipart",
            "prompt": "設分段函數 f(x) = x + 1（x < 0），f(x) = x²（x ≥ 0）。求 f(-2) + f(3)。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(-2) 的值是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "-2 < 0，使用第一支：f(-2) = -2 + 1 = -1。"
              },
              {
                "type": "input",
                "prompt": "f(3) 的值是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "3 ≥ 0，使用第二支：f(3) = 3² = 9。"
              },
              {
                "type": "input",
                "prompt": "兩者相加等於多少？",
                "answers": [
                  "8"
                ],
                "explanation": "-1 + 9 = 8。分段函數的關鍵是先看自變量落在哪一段，再選對應規則。"
              }
            ],
            "explanation": "分段函數的錯誤幾乎都來自選錯分支。判斷順序是：先比較自變量與分段點，再代入對應式子；分段點本身的歸屬由定義中的等號決定。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-03",
        "title": "03 · 直線與斜率",
        "intro": "學完這一節，你能從任意兩點算出直線、判斷兩線平行或垂直、求交點與距離。這是後面切線、線性近似與導數幾何意義的預備。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-01"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：斜率是變化率"
          },
          {
            "type": "paragraph",
            "text": "斜率衡量「x 每增加一個單位，y 改變多少」。它不是角度，而是比值；比值為正表示向右上升，為負表示向右下降，為零表示水平。"
          },
          {
            "type": "formula",
            "text": "m = (y₂ - y₁) / (x₂ - x₁)\n分子是 y 的改變量，分母是 x 的改變量，順序必須一致"
          },
          {
            "type": "heading",
            "text": "原理二：三種直線方程式"
          },
          {
            "type": "paragraph",
            "text": "點斜式由一點與斜率直接寫出；斜截式方便讀出斜率與 y 截距；一般式適合處理垂直線與距離公式。三者可以互相改寫，選用取決於手上已知什麼。"
          },
          {
            "type": "formula",
            "text": "點斜式：y - y₁ = m(x - x₁)\n斜截式：y = mx + b\n一般式：Ax + By + C = 0"
          },
          {
            "type": "heading",
            "text": "原理三：平行與垂直"
          },
          {
            "type": "paragraph",
            "text": "平行線上升速度相同，所以斜率相等。垂直線的方向相差 90 度，在座標平面上表現為斜率相乘等於 -1：一個上升多快，另一個就下降相對的比例。"
          },
          {
            "type": "formula",
            "text": "平行：m₁ = m₂\n垂直：m₁ · m₂ = -1，即 m₂ = -1 / m₁"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認手上的資訊是兩點、一點加斜率，還是方程式。"
          },
          {
            "type": "paragraph",
            "text": "第二步，兩點就先算斜率；注意分子分母的對應順序不可顛倒。"
          },
          {
            "type": "paragraph",
            "text": "第三步，套點斜式，再整理成所需形式。"
          },
          {
            "type": "paragraph",
            "text": "第四步，需要交點就聯立兩式；需要距離就用點到直線距離公式。"
          },
          {
            "type": "paragraph",
            "text": "第五步，回代檢查：把求出的點代回兩條方程式都應成立。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "斜率算反是最常見的錯誤：把 (y₂-y₁)/(x₂-x₁) 寫成 (x₂-x₁)/(y₂-y₁)。記住「y 在上、x 在下」，因為斜率是 y 對 x 的變化率。"
          },
          {
            "type": "tip",
            "text": "垂直斜率不是取負號，而是取負倒數。斜率 2/3 的垂直線是 -3/2，不是 -2/3。"
          },
          {
            "type": "tip",
            "text": "水平線斜率為 0，垂直線斜率不存在。兩者常被混淆：垂直線的 x 不變，分母為 0，所以無定義。"
          }
        ],
        "questions": [
          {
            "prompt": "通過 (1, 2) 與 (4, 11) 的直線斜率是多少？",
            "options": [
              "3",
              "1/3",
              "-3",
              "9"
            ],
            "answer": 0,
            "explanation": "斜率為 (11-2)/(4-1) = 9/3 = 3。若誤算成 (4-1)/(11-2) = 1/3，就是把分子分母顛倒，這是最高頻的錯誤。"
          },
          {
            "type": "input",
            "prompt": "直線通過 (2, 5) 且斜率為 -3，當 x = 0 時 y 等於多少？",
            "answers": [
              "11"
            ],
            "explanation": "用點斜式：y - 5 = -3(x - 2)，整理得 y = -3x + 11。令 x = 0 得 y = 11，這就是 y 截距。"
          },
          {
            "type": "input",
            "prompt": "直線 y = 2x + 1 與 y = -x + 4 的交點，x 座標是多少？",
            "answers": [
              "1"
            ],
            "explanation": "聯立：2x + 1 = -x + 4，移項得 3x = 3，所以 x = 1。回代得 y = 3，交點為 (1, 3)，兩式都成立。"
          },
          {
            "prompt": "與斜率 2/3 的直線垂直的直線，斜率是多少？",
            "options": [
              "-3/2",
              "-2/3",
              "3/2",
              "2/3"
            ],
            "answer": 0,
            "explanation": "垂直條件是斜率相乘為 -1，所以所求為 -1 ÷ (2/3) = -3/2。選 -2/3 只是取負號而沒有取倒數，是典型誤解。"
          },
          {
            "type": "input",
            "prompt": "直線 3x + 2y = 6 的斜率是多少？",
            "answers": [
              "-3/2"
            ],
            "explanation": "解出 y：2y = -3x + 6，y = -3x/2 + 3，斜率為 -3/2。一般式 Ax + By + C = 0 的斜率是 -A/B，可直接核對。"
          },
          {
            "type": "multipart",
            "prompt": "直線通過 (1, 2) 與 (3, 8)。",
            "parts": [
              {
                "type": "input",
                "prompt": "斜率是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "m = (8-2)/(3-1) = 6/2 = 3。"
              },
              {
                "type": "input",
                "prompt": "y 截距是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "點斜式 y - 2 = 3(x - 1)，整理得 y = 3x - 1，y 截距為 -1。"
              },
              {
                "type": "input",
                "prompt": "x 截距是多少？",
                "answers": [
                  "1/3"
                ],
                "explanation": "令 y = 0：0 = 3x - 1，得 x = 1/3。x 截距是與 x 軸交點的橫座標。"
              }
            ],
            "explanation": "三個小問串成完整流程：先算斜率，再寫方程式，最後分別讀出兩個截距。任何一步算錯都會連帶影響後面。"
          },
          {
            "type": "input",
            "prompt": "直線 y = 3x - 1 與 x 軸的交點橫座標是多少？",
            "answers": [
              "1/3"
            ],
            "explanation": "與 x 軸相交表示 y = 0，解 0 = 3x - 1 得 x = 1/3。這就是 x 截距，注意它是點 (1/3, 0) 的橫座標，不是 1/3 這個「距離」。"
          },
          {
            "prompt": "下列哪一條直線與 y = 4x - 2 平行？",
            "options": [
              "y = 4x + 7",
              "y = -4x + 7",
              "y = x/4 + 7",
              "y = -x/4 + 7"
            ],
            "answer": 0,
            "explanation": "平行要求斜率相同，y = 4x - 2 的斜率是 4，只有 y = 4x + 7 的斜率也是 4。其餘分別是 -4、1/4、-1/4，代表不同方向。"
          },
          {
            "type": "input",
            "prompt": "點 (5, 2) 到直線 3x + 4y - 6 = 0 的距離是多少？",
            "answers": [
              "3.4"
            ],
            "explanation": "距離公式為 |Ax₀ + By₀ + C| / √(A² + B²)。代入得 |15 + 8 - 6| / √(9+16) = 17/5 = 3.4。分子取絕對值，因為距離不為負。"
          },
          {
            "type": "multipart",
            "prompt": "直線通過 (0, 3) 與 (4, 0)。",
            "parts": [
              {
                "type": "input",
                "prompt": "斜率是多少？",
                "answers": [
                  "-3/4"
                ],
                "explanation": "m = (0-3)/(4-0) = -3/4。斜率為負，符合圖形由左上到右下。"
              },
              {
                "type": "input",
                "prompt": "方程式的常數項是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "斜率 -3/4、y 截距 3，故 y = -3x/4 + 3，常數項為 3。"
              },
              {
                "type": "input",
                "prompt": "與直線 y = 1 的交點橫座標是多少？",
                "answers": [
                  "8/3"
                ],
                "explanation": "令 y = 1：1 = -3x/4 + 3，移項得 -2 = -3x/4，解得 x = 8/3。"
              }
            ],
            "explanation": "本題練習由截距直接寫出方程式，再用它求特定水平線的交點。常數項就是 y 截距，因為 x = 0 時 y = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-04",
        "title": "04 · 圓與配方",
        "intro": "學完這一節，你能把圓的一般式透過配方還原成標準式，讀出圓心與半徑，並判斷方程式是否真的代表一個圓。這是後面隱函數微分與極座標的基礎。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-03"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：圓的定義與標準式"
          },
          {
            "type": "paragraph",
            "text": "圓是「到某定點距離相等」的所有點。把距離公式平方，就得到標準式。右邊是半徑的平方，不是半徑本身，這是最容易出錯的地方。"
          },
          {
            "type": "formula",
            "text": "(x - h)² + (y - k)² = r²\n圓心 (h, k)，半徑 r（r > 0）"
          },
          {
            "type": "heading",
            "text": "原理二：一般式與配方"
          },
          {
            "type": "paragraph",
            "text": "一般式 x² + y² + Dx + Ey + F = 0 看不出圓心，需要對 x 與 y 分別配方。配方的本質是把 x² + Dx 補成完全平方，補上的數必須同時加在等號另一邊，否則等式被破壞。"
          },
          {
            "type": "formula",
            "text": "x² + Dx = (x + D/2)² - D²/4\n所以配方時兩邊同加 D²/4 與 E²/4"
          },
          {
            "type": "heading",
            "text": "原理三：判別式與圖形"
          },
          {
            "type": "paragraph",
            "text": "配方後右邊的值決定了圖形：大於 0 是真正的圓；等於 0 退化成一個點；小於 0 沒有任何實點，圖形不存在。這個判別和二次方程式的判別式思路一致。"
          },
          {
            "type": "formula",
            "text": "r² > 0：圓\nr² = 0：一點（點圓）\nr² < 0：無圖形"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認 x² 與 y² 的係數都是 1；若不是，先整體除以係數。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把 x 項、y 項分別歸組，常數移到右邊。"
          },
          {
            "type": "paragraph",
            "text": "第三步，兩邊同時補上 (D/2)² 與 (E/2)²。"
          },
          {
            "type": "paragraph",
            "text": "第四步，左邊寫成兩個完全平方，右邊合併成 r²。"
          },
          {
            "type": "paragraph",
            "text": "第五步，開根號取正值得到半徑，並用 r² 的正負判斷圖形是否存在。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是配方時只在左邊加、忘了右邊也加，導致半徑錯誤。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把 r² 直接當半徑。r² = 16 時半徑是 4，不是 16。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略 r² 為負的情況，硬開根號得到虛數半徑，然後畫出一個不存在的圓。"
          }
        ],
        "questions": [
          {
            "prompt": "圓 x² + y² - 4x + 6y - 3 = 0 的圓心是？",
            "options": [
              "(2, -3)",
              "(-2, 3)",
              "(4, -6)",
              "(-4, 6)"
            ],
            "answer": 0,
            "explanation": "配方：x² - 4x = (x-2)² - 4，y² + 6y = (y+3)² - 9。代回得 (x-2)² + (y+3)² = 16，圓心 (2, -3)。注意 y 的部分是 (y+3)，所以圓心的 y 是 -3，符號常被寫反。"
          },
          {
            "type": "input",
            "prompt": "承上題，圓的半徑是多少？",
            "answers": [
              "4"
            ],
            "explanation": "配方後右邊為 -3 + 4 + 9 = 16，即 r² = 16，半徑 r = 4。務必開根號，直接把 16 當半徑是常見錯誤。"
          },
          {
            "type": "input",
            "prompt": "圓心 (1, 2)、半徑 3 的圓，方程式的常數項是多少？",
            "answers": [
              "-4"
            ],
            "explanation": "標準式 (x-1)² + (y-2)² = 9，展開得 x² + y² - 2x - 4y + 5 = 9，移項得 x² + y² - 2x - 4y - 4 = 0，常數項為 -4。"
          },
          {
            "prompt": "方程式 x² + y² + 2x + 2y + 5 = 0 的圖形是？",
            "options": [
              "不存在（沒有實點）",
              "一個點",
              "半徑 1 的圓",
              "半徑 √5 的圓"
            ],
            "answer": 0,
            "explanation": "配方得 (x+1)² + (y+1)² = -3。右邊為負，兩個平方和非負，不可能等於 -3，所以沒有實點。這正是 r² < 0 的情形。"
          },
          {
            "type": "input",
            "prompt": "圓 x² + y² = 25 與直線 y = 3 的交點，橫座標的正值是多少？",
            "answers": [
              "4"
            ],
            "explanation": "代入 y = 3：x² + 9 = 25，x² = 16，x = ±4。取正值為 4，交點是 (4, 3) 與 (-4, 3)。"
          },
          {
            "type": "multipart",
            "prompt": "圓 x² + y² - 6x + 4y - 12 = 0。",
            "parts": [
              {
                "type": "input",
                "prompt": "圓心的 x 座標是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "x² - 6x = (x-3)² - 9，故圓心 x 座標為 3。"
              },
              {
                "type": "input",
                "prompt": "圓心的 y 座標是多少？",
                "answers": [
                  "-2"
                ],
                "explanation": "y² + 4y = (y+2)² - 4，故圓心 y 座標為 -2。"
              },
              {
                "type": "input",
                "prompt": "半徑是多少？",
                "answers": [
                  "5"
                ],
                "explanation": "右邊為 12 + 9 + 4 = 25，r² = 25，半徑 5。"
              }
            ],
            "explanation": "標準做法是分組、配方、合併右邊。圓心座標的符號與括號內符號相反：看到 (y+2) 就是 y = -2。"
          },
          {
            "type": "input",
            "prompt": "圓心在原點且通過 (3, 4) 的圓，半徑是多少？",
            "answers": [
              "5"
            ],
            "explanation": "半徑等於原點到 (3, 4) 的距離：√(3² + 4²) = √25 = 5。這是 3-4-5 直角三角形，可直接辨認。"
          },
          {
            "prompt": "圓 x² + y² = 9 在點 (3, 0) 處的切線方程式是？",
            "options": [
              "x = 3",
              "y = 3",
              "x + y = 3",
              "y = 0"
            ],
            "answer": 0,
            "explanation": "點 (3,0) 在半徑方向上沿 x 軸，切線與半徑垂直，故為垂直線 x = 3。也可用隱函數微分驗證：2x + 2y y' = 0，在 (3,0) 分母為 0，斜率不存在。"
          },
          {
            "type": "input",
            "prompt": "圓 x² + y² = 25 與圓 x² + y² - 8x + 12 = 0 有幾個交點？",
            "answers": [
              "2"
            ],
            "explanation": "第二圓配方得 (x-4)² + y² = 4，圓心 (4,0)、半徑 2。兩圓心距 4，半徑和 7、半徑差 3。因為 3 < 4 < 7，兩圓相交於兩點。"
          },
          {
            "type": "multipart",
            "prompt": "圓 x² + y² + 4x - 2y - 4 = 0。",
            "parts": [
              {
                "type": "input",
                "prompt": "圓心的 x 座標是多少？",
                "answers": [
                  "-2"
                ],
                "explanation": "x² + 4x = (x+2)² - 4，圓心 x = -2。"
              },
              {
                "type": "input",
                "prompt": "圓心的 y 座標是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "y² - 2y = (y-1)² - 1，圓心 y = 1。"
              },
              {
                "type": "input",
                "prompt": "半徑是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "右邊為 4 + 4 + 1 = 9，r² = 9，半徑 3。"
              }
            ],
            "explanation": "與前幾題同型，但圓心出現負座標，用來檢查符號是否處理正確。配方後務必把常數一併移到右邊相加。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-05",
        "title": "05 · 函數、定義域與值域",
        "intro": "學完這一節，你能判斷一個函數在哪些 x 上才有意義，並求出它在給定區間上的最大值與最小值。定義域是所有後續運算的前提，沒有定義域就沒有極限與導數。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-02",
          "mendelson-calculus.skill-04"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：定義域是三條限制的交集"
          },
          {
            "type": "paragraph",
            "text": "函數的定義域是「讓式子算得出來」的所有 x。常見限制只有三類：分母不能為 0、偶次根號內不能為負、對數的引數必須為正。同時出現多個限制時，取所有條件的交集。"
          },
          {
            "type": "formula",
            "text": "分母 ≠ 0\n偶次根號：被開方數 ≥ 0\n對數：引數 > 0"
          },
          {
            "type": "heading",
            "text": "原理二：值域要看函數形狀"
          },
          {
            "type": "paragraph",
            "text": "值域是所有可能輸出的集合。二次函數先找頂點再比較端點；一次函數在閉區間上單調，最大值與最小值必在端點；有根號的函數輸出非負。求值域沒有單一公式，靠辨認函數類型。"
          },
          {
            "type": "formula",
            "text": "f(x) = a(x - h)² + k 的頂點為 (h, k)\na > 0 時最小值為 k；a < 0 時最大值為 k"
          },
          {
            "type": "heading",
            "text": "原理三：閉區間上的最大最小值"
          },
          {
            "type": "paragraph",
            "text": "在閉區間 [a, b] 上求二次函數的極值，必須同時檢查頂點與兩個端點。頂點可能落在區間外，此時極值只出現在端點；頂點落在區間內時，它與端點都可能是答案。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，逐項列出限制條件，不要只看最外層。"
          },
          {
            "type": "paragraph",
            "text": "第二步，解每個條件的不等式。"
          },
          {
            "type": "paragraph",
            "text": "第三步，取交集並寫成區間；注意端點是否可取。"
          },
          {
            "type": "paragraph",
            "text": "第四步，求值域時先辨認函數類型，再決定用頂點、端點或單調性。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用一個具體的 x 代入，確認算出的值確實落在聲稱的值域內。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是只看分子或只看根號，漏掉分母的限制。像 √(x+3)/(x-1) 同時要求 x ≥ -3 與 x ≠ 1。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把定義域的端點一律寫成閉區間。分母的限制永遠是開的，因為該點根本不在定義域內。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是求二次函數在閉區間上的極值時只算頂點，忘記比較端點。"
          }
        ],
        "questions": [
          {
            "prompt": "函數 f(x) = 1/(x - 3) 的定義域是？",
            "options": [
              "所有實數 except x = 3",
              "所有實數",
              "x > 3",
              "x ≥ 3"
            ],
            "answer": 0,
            "explanation": "分母不能為 0，所以 x - 3 ≠ 0，即 x ≠ 3。定義域為 (-∞, 3) ∪ (3, ∞)。這是開區間，因為 3 本身使函數無定義。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = √(x - 2) 的定義域，下界是多少？",
            "answers": [
              "2"
            ],
            "explanation": "偶次根號內必須非負：x - 2 ≥ 0，得 x ≥ 2，下界為 2，且 2 可取（根號 0 有意義）。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = √(5 - x) 的定義域，上界是多少？",
            "answers": [
              "5"
            ],
            "explanation": "要求 5 - x ≥ 0，即 x ≤ 5，上界為 5。注意根號內是 5 減 x，方向與前題相反。"
          },
          {
            "prompt": "函數 f(x) = ln(x + 1) 的定義域是？",
            "options": [
              "x > -1",
              "x ≥ -1",
              "x > 1",
              "所有實數"
            ],
            "answer": 0,
            "explanation": "對數的引數必須嚴格為正：x + 1 > 0，即 x > -1。這裡是嚴格不等號，因為 ln(0) 無定義，端點不可取。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = 1/√(4 - x²) 的定義域區間長度是多少？",
            "answers": [
              "4"
            ],
            "explanation": "根號內需 4 - x² > 0（因為在分母，不能等於 0），得 -2 < x < 2，長度 4。若忽略分母限制而寫成 ≤，端點就會錯。"
          },
          {
            "type": "multipart",
            "prompt": "函數 f(x) = √(x + 3)/(x - 1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "根號限制給出的下界是多少？",
                "answers": [
                  "-3"
                ],
                "explanation": "x + 3 ≥ 0 得 x ≥ -3，下界 -3，且 -3 可取。"
              },
              {
                "type": "input",
                "prompt": "分母排除哪一個值？",
                "answers": [
                  "1"
                ],
                "explanation": "x - 1 ≠ 0，所以 x ≠ 1。此點必須從定義域中挖掉。"
              },
              {
                "type": "input",
                "prompt": "定義域中最小的整數是多少？",
                "answers": [
                  "-3"
                ],
                "explanation": "定義域為 [-3, 1) ∪ (1, ∞)，最小整數是 -3。"
              }
            ],
            "explanation": "本題同時含根號與分母，是定義域題型的完整樣貌：先各自列條件，再取交集，最後注意被挖掉的點不影響最小值。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = x² - 4x + 7 的最小值是多少？",
            "answers": [
              "3"
            ],
            "explanation": "配方：x² - 4x + 7 = (x-2)² + 3，平方項最小為 0，故最小值 3，在 x = 2 時取得。"
          },
          {
            "prompt": "f(x) = x² 在區間 [-1, 2] 上的值域是？",
            "options": [
              "[0, 4]",
              "[1, 4]",
              "[0, 2]",
              "[-1, 4]"
            ],
            "answer": 0,
            "explanation": "x² 的最小值在 x = 0 取得為 0；端點 f(-1) = 1、f(2) = 4，最大值為 4。故值域 [0, 4]。選 [1,4] 是漏掉頂點；選 [-1,4] 是把 x 的範圍誤當值域。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 2x + 1 在區間 [0, 3] 上的最大值是多少？",
            "answers": [
              "7"
            ],
            "explanation": "一次函數斜率為正，在閉區間上單調遞增，最大值在右端點：f(3) = 7。"
          },
          {
            "type": "multipart",
            "prompt": "f(x) = x² - 2x 在區間 [0, 3] 上。",
            "parts": [
              {
                "type": "input",
                "prompt": "頂點的 x 座標是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "配方得 (x-1)² - 1，頂點 x = 1。"
              },
              {
                "type": "input",
                "prompt": "最小值是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "頂點在區間內，最小值為 -1。"
              },
              {
                "type": "input",
                "prompt": "最大值是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "比較端點：f(0) = 0，f(3) = 9 - 6 = 3，最大值 3。"
              }
            ],
            "explanation": "閉區間求極值的標準流程：先確認頂點是否落在區間內，再比較端點。本題頂點在內，最小值在頂點、最大值在右端點。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-06",
        "title": "06 · 圖形、合成與反函數",
        "intro": "學完這一節，你能把兩個函數串接成合成函數、判斷一個函數有沒有反函數，並實際求出反函數的值。這是鏈式法則與反三角函數的語言準備。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-05"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：合成是依序作用"
          },
          {
            "type": "paragraph",
            "text": "合成函數 f(g(x)) 表示先做 g、再把結果交給 f。順序不可交換：先後不同，結果通常不同。合成後的定義域要求 x 在 g 的定義域內，且 g(x) 落在 f 的定義域內。"
          },
          {
            "type": "formula",
            "text": "(f ∘ g)(x) = f(g(x))\n先算內層 g(x)，再把結果代入外層 f"
          },
          {
            "type": "heading",
            "text": "原理二：反函數是還原動作"
          },
          {
            "type": "paragraph",
            "text": "反函數把輸出還原成輸入。存在的前提是原函數一對一：不同的 x 必須給出不同的 y，否則無法判斷該還原成哪一個。水平線測試就是在檢查這件事。"
          },
          {
            "type": "formula",
            "text": "y = f(x)  ⇒  x = f⁻¹(y)\n求法：交換 x 與 y，再解出 y\nf⁻¹(f(x)) = x"
          },
          {
            "type": "heading",
            "text": "原理三：單調性保證可逆"
          },
          {
            "type": "paragraph",
            "text": "嚴格遞增或嚴格遞減的函數一定一對一，因此一定有反函數。x² 在整個實數上不是一對一（f(2) = f(-2)），但限制在 x ≥ 0 之後就可逆。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，求合成值時由內而外，先算內層。"
          },
          {
            "type": "paragraph",
            "text": "第二步，求合成式時把內層整個代入外層的每一個 x。"
          },
          {
            "type": "paragraph",
            "text": "第三步，求反函數時先寫 y = f(x)，交換 x 與 y，再解出 y。"
          },
          {
            "type": "paragraph",
            "text": "第四步，求反函數在某一點的值，可直接令 f(x) 等於該值求解，通常比先求整條反函數快。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用 f⁻¹(f(a)) = a 回代驗證。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 f(g(x)) 寫成 f(x)·g(x)。合成是代入，不是相乘。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為所有函數都有反函數。x²、sin x 在整個定義域上都不可逆，必須先限制區間。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是求 f⁻¹(2) 時先把 2 代入 f。正確做法是解 f(x) = 2，找出哪個 x 會輸出 2。"
          }
        ],
        "questions": [
          {
            "prompt": "設 f(x) = x + 1、g(x) = 2x，則 f(g(3)) 等於？",
            "options": [
              "7",
              "6",
              "8",
              "9"
            ],
            "answer": 0,
            "explanation": "由內而外：先算 g(3) = 6，再算 f(6) = 7。若誤算成 f(3)·g(3) = 4·6 = 24，就是把合成當成相乘。"
          },
          {
            "type": "input",
            "prompt": "設 f(x) = x²、g(x) = x + 1，則 (g ∘ f)(2) 等於多少？",
            "answers": [
              "5"
            ],
            "explanation": "(g ∘ f)(2) 表示先 f 後 g：f(2) = 4，再 g(4) = 5。注意 (g ∘ f) 與 (f ∘ g) 順序相反，本題是 g 在外層。"
          },
          {
            "type": "input",
            "prompt": "設 f(x) = 3x - 6，則 f⁻¹(0) 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "令 f(x) = 0：3x - 6 = 0，得 x = 2，所以 f⁻¹(0) = 2。也可先求反函數 f⁻¹(x) = (x+6)/3，再代入 0 得 2。"
          },
          {
            "prompt": "函數 f(x) = x² 在整個實數上沒有反函數，主要原因是？",
            "options": [
              "它不是一對一",
              "它不是遞增",
              "它的值域不是實數",
              "它在 0 不可微"
            ],
            "answer": 0,
            "explanation": "f(2) = f(-2) = 4，同一個輸出對應兩個輸入，無法決定該還原成哪一個，所以不滿足一對一。限制在 x ≥ 0 或 x ≤ 0 之後即可逆。"
          },
          {
            "type": "input",
            "prompt": "設 f(x) = x³，則 f⁻¹(8) 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "解 x³ = 8，得 x = 2。三次方在實數上嚴格遞增且一對一，所以反函數存在，就是立方根。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = 2x + 1、g(x) = x²。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(g(2)) 等於多少？",
                "answers": [
                  "9"
                ],
                "explanation": "先算 g(2) = 4，再算 f(4) = 9。"
              },
              {
                "type": "input",
                "prompt": "g(f(2)) 等於多少？",
                "answers": [
                  "25"
                ],
                "explanation": "先算 f(2) = 5，再算 g(5) = 25。"
              },
              {
                "type": "input",
                "prompt": "兩者相差多少？",
                "answers": [
                  "16"
                ],
                "explanation": "25 - 9 = 16。這個差值說明合成不可交換。"
              }
            ],
            "explanation": "同一組函數、不同順序，結果完全不同。這是合成運算非交換性的最直接示範，也是鏈式法則必須注意內外層的原因。"
          },
          {
            "type": "input",
            "prompt": "設 f(x) = 1/x（x ≠ 0），則 f(f(3)) 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "f(3) = 1/3，再算 f(1/3) = 3。倒數函數是自己的反函數，兩次作用回到原值。"
          },
          {
            "prompt": "下列哪個函數在整個實數上有反函數？",
            "options": [
              "f(x) = x³",
              "f(x) = x²",
              "f(x) = |x|",
              "f(x) = x⁴"
            ],
            "answer": 0,
            "explanation": "x³ 嚴格遞增，一對一，故可逆。x² 與 x⁴ 都是偶函數，f(a) = f(-a)；|x| 同樣不滿足一對一。判斷關鍵是單調性或水平線測試。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = √(x - 1) 的定義域下界是多少？",
            "answers": [
              "1"
            ],
            "explanation": "根號內需 x - 1 ≥ 0，得 x ≥ 1，下界為 1 且可取。這也說明此函數的值域是 y ≥ 0。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x/(x + 1)（x ≠ -1）。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(1) 等於多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "f(1) = 1/(1+1) = 1/2。"
              },
              {
                "type": "input",
                "prompt": "f⁻¹(2) 等於多少？",
                "answers": [
                  "-2"
                ],
                "explanation": "解 f(x) = 2：x/(x+1) = 2，得 x = 2x + 2，所以 x = -2。"
              },
              {
                "type": "input",
                "prompt": "f(f(1)) 等於多少？",
                "answers": [
                  "1/3"
                ],
                "explanation": "f(1) = 1/2，再算 f(1/2) = (1/2)/(3/2) = 1/3。"
              }
            ],
            "explanation": "求反函數值不必先求出整條反函數，直接解 f(x) = 目標值更快，也更不容易出錯。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-07",
        "title": "07 · 極限",
        "intro": "學完這一節，你能判斷一個函數在某一點附近趨近什麼值，即使該點本身沒有定義；也能分辨左右極限是否一致。極限是導數與積分的定義基礎，沒有它就無法描述「瞬間」。",
        "kind": "base",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-06"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：極限描述趨近，不描述到達"
          },
          {
            "type": "paragraph",
            "text": "lim(x→a) f(x) = L 的意思是：當 x 靠近 a（但不等於 a）時，f(x) 可以任意接近 L。關鍵在「不等於 a」——函數在 a 點的值可以存在、可以不存在、也可以與 L 不同，都不影響極限。"
          },
          {
            "type": "formula",
            "text": "lim(x→a) f(x) = L\n只看 x 靠近 a 時的趨勢，不看 x = a 那一點"
          },
          {
            "type": "heading",
            "text": "原理二：雙側極限要求兩側一致"
          },
          {
            "type": "paragraph",
            "text": "從左邊靠近得到左極限，從右邊靠近得到右極限。雙側極限存在，若且唯若兩個單側極限都存在而且相等。分段函數的分段點是唯一需要分兩側計算的地方。"
          },
          {
            "type": "formula",
            "text": "lim(x→a) f(x) 存在  ⇔  lim(x→a⁻) f(x) = lim(x→a⁺) f(x)"
          },
          {
            "type": "heading",
            "text": "原理三：直接代入與不定型"
          },
          {
            "type": "paragraph",
            "text": "多項式與分母不為零的有理函數，直接把 x = a 代入即可，這叫極限的代入性質。若代入得到 0/0，那是「不定型」，表示分子分母有共同因式，必須先約去再代入；得到非零除以零則是無窮，不是不定型。"
          },
          {
            "type": "formula",
            "text": "0/0  →  先因式分解或有理化，約去共同因式\nk/0（k ≠ 0）  →  無窮"
          },
          {
            "type": "heading",
            "text": "原理四：無窮遠處看最高次項"
          },
          {
            "type": "paragraph",
            "text": "x 趨向無窮時，多項式由最高次項主導，低次項與常數相對可忽略。所以分子分母同除最高次冪，或直接比較最高次項的係數。"
          },
          {
            "type": "formula",
            "text": "lim(x→∞) (aₙxⁿ + …) / (bₘxᵐ + …)\nn = m 時為 aₙ/bₘ；n < m 時為 0；n > m 時為無窮"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，先嘗試直接代入，能算出有限值就結束。"
          },
          {
            "type": "paragraph",
            "text": "第二步，若得 0/0，對分子分母因式分解，約去造成零的因式；含根號則乘共軛有理化。"
          },
          {
            "type": "paragraph",
            "text": "第三步，遇到分段點，分別算左極限與右極限，再比較是否相等。"
          },
          {
            "type": "paragraph",
            "text": "第四步，遇到無窮，分子分母同除最高次冪，或比較最高次項。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用數值表核對：取 a 左右各幾個靠近的數，看 f 的值是否朝同一方向收斂。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 f(a) 當成極限。極限只關心趨近過程，f(a) 甚至可以不存在。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是看到 0/0 就寫 0 或「不存在」。0/0 是不定型，必須化簡；化簡後通常有有限極限。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是分段點只算一側就下結論。左右極限不相等時，雙側極限不存在，這一點必須明說。"
          }
        ],
        "questions": [
          {
            "prompt": "lim(x→2) (x² + 1) 等於？",
            "options": [
              "5",
              "4",
              "3",
              "不存在"
            ],
            "answer": 0,
            "explanation": "多項式可直接代入：2² + 1 = 5。這是代入性質，因為多項式處處連續。若算出 4 是把 x² 看成 2x。"
          },
          {
            "type": "input",
            "prompt": "lim(x→3) (x² - 9)/(x - 3) 等於多少？",
            "answers": [
              "6"
            ],
            "explanation": "代入得 0/0，屬不定型。因式分解 x² - 9 = (x-3)(x+3)，約去 (x-3) 後得 x + 3，代入 3 得 6。這是可去不連續的典型。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (√(x + 4) - 2)/x 等於多少？",
            "answers": [
              "1/4"
            ],
            "explanation": "代入得 0/0。分子分母同乘共軛 (√(x+4) + 2)，分子變成 (x+4) - 4 = x，與分母的 x 約去，剩下 1/(√(x+4)+2)，代入 0 得 1/4。"
          },
          {
            "prompt": "lim(x→0) 1/x² 等於？",
            "options": [
              "+∞",
              "0",
              "1",
              "不存在但非無窮"
            ],
            "answer": 0,
            "explanation": "分母趨近 0 而分子固定為 1，且 x² 恆正，所以函數值無界增大，記為 +∞。這不是「不存在但非無窮」：無窮是明確的發散方式，左右兩側都朝 +∞。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) (3x² + 2x)/(x² - 1) 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "分子分母同除 x²，得 (3 + 2/x)/(1 - 1/x²)。x 趨向無窮時，2/x 與 1/x² 都趨近 0，極限為 3/1 = 3。也可直接比較最高次項係數。"
          },
          {
            "type": "multipart",
            "prompt": "已知兩個極限。",
            "parts": [
              {
                "type": "input",
                "prompt": "lim(x→2) (x² - 4)/(x - 2) 等於多少？",
                "answers": [
                  "4"
                ],
                "explanation": "因式分解得 (x-2)(x+2)，約去後為 x + 2，代入 2 得 4。"
              },
              {
                "type": "input",
                "prompt": "lim(x→2) (x - 2)/(x² - 4) 等於多少？",
                "answers": [
                  "1/4"
                ],
                "explanation": "約去後為 1/(x+2)，代入 2 得 1/4。這是上一個極限的倒數。"
              },
              {
                "type": "input",
                "prompt": "兩者的乘積等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "4 × 1/4 = 1。互為倒數的兩個極限相乘必為 1，可用來檢查是否算反。"
              }
            ],
            "explanation": "本題用同一組因式從兩個方向出題，檢驗你是否真正掌握約分的方向，而不是背答案。乘積為 1 是天然的驗算。"
          },
          {
            "type": "input",
            "prompt": "lim(x→-1) (x² + 3x + 2)/(x + 1) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "分子因式分解為 (x+1)(x+2)，約去 (x+1) 後為 x + 2，代入 -1 得 1。若直接代入會得到 0/0。"
          },
          {
            "prompt": "若 lim f(x) = 3 且 lim g(x) = 2（同一個趨近點），則 lim [f(x)·g(x)] 等於？",
            "options": [
              "6",
              "5",
              "3/2",
              "無法確定"
            ],
            "answer": 0,
            "explanation": "極限的乘積法則：兩個極限都存在時，乘積的極限等於極限的乘積，3 × 2 = 6。這需要兩個極限都有限，否則法則不適用。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) (5x + 1)/(2x - 3) 等於多少？",
            "answers": [
              "5/2"
            ],
            "explanation": "分子分母同除 x，得 (5 + 1/x)/(2 - 3/x)，兩項小分數趨近 0，極限為 5/2。分子分母次數相同，答案就是係數比。"
          },
          {
            "type": "multipart",
            "prompt": "設分段函數 f(x) = x + 1（x < 2），f(x) = 3x - 3（x ≥ 2）。考察 x = 2 處的極限。",
            "parts": [
              {
                "type": "input",
                "prompt": "左極限是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "x < 2 用第一支：x + 1，代入 2 得 3。左極限看的是趨近過程，與 f(2) 的定義無關。"
              },
              {
                "type": "input",
                "prompt": "右極限是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "x ≥ 2 用第二支：3x - 3，代入 2 得 3。"
              },
              {
                "type": "input",
                "prompt": "雙側極限存在嗎？存在填 1，不存在填 0。",
                "answers": [
                  "1"
                ],
                "explanation": "左右極限都是 3，相等，所以雙側極限存在且等於 3。此例中極限值也等於 f(2) = 3，故函數在此連續。"
              }
            ],
            "explanation": "分段點是唯一需要分兩側的地方。判斷順序永遠是：先算左、再算右、最後比較。本題兩側相等，極限存在。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-08",
        "title": "08 · 連續性",
        "intro": "學完這一節，你能用三個條件判斷函數在一點是否連續、分辨三種不連續型態，並用介值定理說明方程式必有解。連續是可導的前提，也是積分能成立的前提。",
        "kind": "base",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-07"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：連續的三個條件"
          },
          {
            "type": "paragraph",
            "text": "函數在 x = a 連續，必須同時滿足三件事：f(a) 有定義、lim(x→a) f(x) 存在、兩者相等。缺任何一項就不連續。圖形上表現為「一筆畫得過去、不必抬筆」。"
          },
          {
            "type": "formula",
            "text": "① f(a) 有定義\n② lim(x→a) f(x) 存在\n③ lim(x→a) f(x) = f(a)"
          },
          {
            "type": "heading",
            "text": "原理二：三種不連續型態"
          },
          {
            "type": "paragraph",
            "text": "可去不連續是「一個洞」：極限存在但 f(a) 沒定義或定義錯，補上或改掉該點即可修復。跳躍不連續是左右極限都存在但不相等，圖形斷開一段。無窮不連續是極限為無窮，出現垂直漸近線。"
          },
          {
            "type": "formula",
            "text": "可去：極限存在 ≠ f(a)\n跳躍：左極限 ≠ 右極限，兩者皆有限\n無窮：極限為 ±∞"
          },
          {
            "type": "heading",
            "text": "原理三：介值定理"
          },
          {
            "type": "paragraph",
            "text": "連續函數在閉區間 [a, b] 上，會取遍 f(a) 與 f(b) 之間的所有值。實際用途是證明「方程式有解」：只要 f(a) 與 f(b) 異號，中間必有一點使 f = 0。注意定理只保證存在，不告訴你在哪裡。"
          },
          {
            "type": "formula",
            "text": "f 在 [a, b] 連續且 f(a)·f(b) < 0  ⇒  存在 c ∈ (a, b) 使 f(c) = 0"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，算出 f(a)；若無定義，直接判定不連續。"
          },
          {
            "type": "paragraph",
            "text": "第二步，算 lim(x→a) f(x)；分段點要分別算左右。"
          },
          {
            "type": "paragraph",
            "text": "第三步，比較兩者是否相等，相等才連續。"
          },
          {
            "type": "paragraph",
            "text": "第四步，判定型態：極限存在但不等於 f(a) 是可去；左右極限不等是跳躍；趨向無窮是無窮。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用介值定理時，先確認函數在閉區間連續，再檢查兩端點函數值是否異號。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是只看圖形「沒有斷」就說連續，忽略 f(a) 可能根本沒定義。可去不連續在圖上只是一個小洞，很容易漏看。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把「極限存在」等同「連續」。極限存在只滿足第二個條件，還要與 f(a) 相等才算連續。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是介值定理用在非閉區間或不連續函數上。定理的兩個前提缺一不可。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x) = (x² - 1)/(x - 1) 在 x = 1 處屬於哪種不連續？",
            "options": [
              "可去不連續",
              "跳躍不連續",
              "無窮不連續",
              "連續"
            ],
            "answer": 0,
            "explanation": "化簡得 x + 1（x ≠ 1），極限為 2，但 f(1) 無定義。極限存在而函數值缺失，是可去不連續。只要定義 f(1) = 2 就能修復。"
          },
          {
            "type": "input",
            "prompt": "要使 f(x) = (x² - 4)/(x - 2) 在 x = 2 連續，f(2) 應定義為多少？",
            "answers": [
              "4"
            ],
            "explanation": "化簡得 x + 2（x ≠ 2），極限為 4。令 f(2) = 4 使函數值等於極限，即可補上這個洞。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = 1/(x - 2) 的不連續點在哪裡？",
            "answers": [
              "2"
            ],
            "explanation": "分母為 0 時無定義，即 x = 2。此處函數值趨向無窮，屬無窮不連續，圖形在 x = 2 有垂直漸近線。"
          },
          {
            "prompt": "連續函數在閉區間 [a, b] 上，下列何者必然成立？",
            "options": [
              "必取得最大值與最小值",
              "必為嚴格遞增",
              "必可導",
              "必過原點"
            ],
            "answer": 0,
            "explanation": "這是極值定理：閉區間上的連續函數必有最大值與最小值。連續不保證可導（如 |x| 在 0），也不保證單調或過原點。"
          },
          {
            "type": "input",
            "prompt": "設 f(x) = x³ - x - 1。已知 f(1) = -1、f(2) = 5，則 f(1) 的值是多少？",
            "answers": [
              "-1"
            ],
            "explanation": "直接代入：1 - 1 - 1 = -1。這個值與 f(2) = 5 異號，依介值定理，在 (1, 2) 內必有一根使 f = 0。"
          },
          {
            "type": "multipart",
            "prompt": "設分段函數 f(x) = x²（x < 1），f(x) = ax + 1（x ≥ 1）。若 f 在 x = 1 連續，求 a。",
            "parts": [
              {
                "type": "input",
                "prompt": "左極限是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "x < 1 用 x²，代入 1 得 1。"
              },
              {
                "type": "input",
                "prompt": "右極限是 a + 1。若要讓左右極限相等，a + 1 應該等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "左極限為 1，連續要求右極限也等於 1，所以 a + 1 = 1。下一步再解出 a。"
              },
              {
                "type": "input",
                "prompt": "a 的值是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "連續要求左右極限相等：1 = a + 1，解得 a = 0。"
              }
            ],
            "explanation": "分段點連續的標準做法是令左右極限相等。左極限 1，右極限 a+1，令 a+1 = 1 解得 a = 0。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = |x| 在 x = 0 是否連續？連續填 1，不連續填 0。",
            "answers": [
              "1"
            ],
            "explanation": "|x| 在 0 的左極限與右極限都是 0，且 f(0) = 0，三個條件全部滿足，所以連續。但它在 0 不可導，說明連續不蘊含可導。"
          },
          {
            "prompt": "下列哪個函數在 x = 0 處連續？",
            "options": [
              "f(x) = x²",
              "f(x) = 1/x",
              "f(x) = |x|/x",
              "f(x) = 1/x²"
            ],
            "answer": 0,
            "explanation": "x² 在 0 有定義、極限為 0、且等於函數值，故連續。1/x 與 1/x² 在 0 無定義；|x|/x 在 0 的左右極限分別為 -1 與 1，是跳躍不連續。"
          },
          {
            "type": "input",
            "prompt": "函數 f(x) = √(x - 3) 的連續區間，下界是多少？",
            "answers": [
              "3"
            ],
            "explanation": "根號內需 x - 3 ≥ 0，定義域為 [3, ∞)。根號函數在其定義域上連續，故連續區間從 3 開始。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = (x² - 9)/(x - 3)（x ≠ 3）。",
            "parts": [
              {
                "type": "input",
                "prompt": "lim(x→3) f(x) 等於多少？",
                "answers": [
                  "6"
                ],
                "explanation": "因式分解得 (x-3)(x+3)，約去後為 x + 3，代入 3 得 6。"
              },
              {
                "type": "input",
                "prompt": "若定義 f(3) = 6，函數在 x = 3 是否連續？連續填 1。",
                "answers": [
                  "1"
                ],
                "explanation": "極限為 6 且函數值定為 6，兩者相等，三個條件滿足，故連續。這正是補洞的做法。"
              },
              {
                "type": "input",
                "prompt": "f(0) 等於多少？",
                "answers": [
                  "3"
                ],
                "explanation": "代入原式：(0 - 9)/(0 - 3) = -9/-3 = 3。"
              }
            ],
            "explanation": "本題把「可去不連續 → 補定義 → 變成連續」的完整流程走一遍。第三小問提醒你化簡只對 x ≠ 3 有效，其他點仍用原式。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-09",
        "title": "09 · 差商、導數與切線",
        "intro": "學完這一節，你能用差商算平均變化率，用極限把它變成瞬時變化率，並寫出切線方程式。導數的定義只有這一個，後面所有求導公式都從它推出來。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-08"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：差商是割線斜率"
          },
          {
            "type": "paragraph",
            "text": "從 x 到 x + h，函數值改變 f(x+h) - f(x)，自變量改變 h。兩者相除就是平均變化率，幾何上是通過兩點的割線斜率。h 就是兩點的橫向距離。"
          },
          {
            "type": "formula",
            "text": "差商 = [f(x + h) - f(x)] / h\n這是 x 到 x+h 之間的平均變化率，也是割線斜率"
          },
          {
            "type": "heading",
            "text": "原理二：導數是差商的極限"
          },
          {
            "type": "paragraph",
            "text": "讓 h 趨近 0，割線的兩端不斷靠近，割線趨向切線。這個極限就是導數，代表該點的瞬時變化率與切線斜率。導數是一個數，不是一個函數；把每個點的導數收集起來才得到導函數。"
          },
          {
            "type": "formula",
            "text": "f'(x) = lim(h→0) [f(x + h) - f(x)] / h\n幾何意義：曲線在 (x, f(x)) 處的切線斜率"
          },
          {
            "type": "heading",
            "text": "原理三：可導必連續"
          },
          {
            "type": "paragraph",
            "text": "差商有極限，意味著 h 趨近 0 時函數值的改變也趨近 0，也就是連續。反過來不成立：|x| 在 0 連續，但左右差商的極限分別是 -1 與 1，不相等，所以不可導。尖角與垂直切線都是不可導的典型。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，寫出 f(x + h) 與 f(x)，代入差商式。"
          },
          {
            "type": "paragraph",
            "text": "第二步，展開分子並化簡，務必把 h 提出來約去；約不掉就表示算錯。"
          },
          {
            "type": "paragraph",
            "text": "第三步，令 h → 0，得到導數。"
          },
          {
            "type": "paragraph",
            "text": "第四步，要切線就先算該點斜率 f'(a) 與點 (a, f(a))，再用點斜式。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用數值核對：取很小的 h 算差商，應接近算出的導數。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是分子沒化簡就直接令 h = 0，得到 0/0。必須先把 h 約掉。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把導數當成「函數在某點的值」。導數是變化率，f'(3) = 6 表示在 x = 3 附近每增加 1，函數值約增加 6。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是以為連續就可導。|x| 在 0 是標準反例：連續但左右斜率不一致。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x) = x² 的導函數是？",
            "options": [
              "2x",
              "x",
              "x²",
              "2"
            ],
            "answer": 0,
            "explanation": "差商為 [(x+h)² - x²]/h = (2xh + h²)/h = 2x + h，令 h → 0 得 2x。這是冪法則的最基本例子，建議親手推一次。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² 在 x = 3 的導數是多少？",
            "answers": [
              "6"
            ],
            "explanation": "f'(x) = 2x，代入 3 得 6。意義是：在 x = 3 附近，x 每增加 1，函數值約增加 6；切線斜率也是 6。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 3x + 2 的導數是多少？",
            "answers": [
              "3"
            ],
            "explanation": "一次函數的差商恆為 3，與 h 無關，所以導數處處為 3。幾何上直線的斜率處處相同。"
          },
          {
            "prompt": "導數 f'(a) 的幾何意義是？",
            "options": [
              "曲線在 x = a 處切線的斜率",
              "曲線在 x = a 處的函數值",
              "割線的斜率",
              "曲線下面積"
            ],
            "answer": 0,
            "explanation": "導數是割線斜率在 h → 0 時的極限，也就是切線斜率。函數值是 f(a)，不是 f'(a)；割線斜率是差商，取極限後才成為導數。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x³ 在 x = 1 的導數是多少？",
            "answers": [
              "3"
            ],
            "explanation": "f'(x) = 3x²，代入 1 得 3。用定義驗證：[(1+h)³ - 1]/h = 3 + 3h + h²，令 h → 0 得 3。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x²，考慮 x = 2 處。",
            "parts": [
              {
                "type": "input",
                "prompt": "差商 [f(2+h) - f(2)]/h 化簡後，常數項是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "f(2+h) = 4 + 4h + h²，減去 4 得 4h + h²，除以 h 得 4 + h，常數項為 4。"
              },
              {
                "type": "input",
                "prompt": "導數 f'(2) 是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "令 h → 0，4 + h → 4，所以 f'(2) = 4。這與 2x 在 x = 2 的值一致。"
              },
              {
                "type": "input",
                "prompt": "切線在 x = 2 處的函數值是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "切點在曲線上，故 y = f(2) = 4。切線通過 (2, 4)，斜率 4。"
              }
            ],
            "explanation": "三個小問對應導數定義的三個環節：化簡差商、取極限、回到切點。順序顛倒就會得到 0/0。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 1/x 在 x = 1 的導數是多少？",
            "answers": [
              "-1"
            ],
            "explanation": "差商為 [1/(1+h) - 1]/h = [(1 - (1+h))/(1+h)]/h = -1/(1+h)，令 h → 0 得 -1。一般式 f'(x) = -1/x²，代入 1 也是 -1。"
          },
          {
            "prompt": "關於可導與連續，下列敘述何者正確？",
            "options": [
              "可導必連續，連續不一定可導",
              "連續必可導",
              "兩者等價",
              "可導與連續無關"
            ],
            "answer": 0,
            "explanation": "可導蘊含連續，因為差商有極限迫使函數值的改變趨近 0。反向不成立：|x| 在 0 連續但不可導。這是單向蘊含的標準例子。"
          },
          {
            "type": "input",
            "prompt": "f(x) = √x 在 x = 4 的導數是多少？",
            "answers": [
              "1/4"
            ],
            "explanation": "f'(x) = 1/(2√x)，代入 4 得 1/(2·2) = 1/4。用定義也可得：差商有理化後為 1/(√(4+h)+2)，令 h → 0 得 1/4。"
          },
          {
            "type": "multipart",
            "prompt": "曲線 y = x² 在 x = 3 處的切線。",
            "parts": [
              {
                "type": "input",
                "prompt": "切線斜率是多少？",
                "answers": [
                  "6"
                ],
                "explanation": "y' = 2x，代入 3 得 6。"
              },
              {
                "type": "input",
                "prompt": "切點的 y 座標是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "切點在曲線上，y = 3² = 9。"
              },
              {
                "type": "input",
                "prompt": "切線的 y 截距是多少？",
                "answers": [
                  "-9"
                ],
                "explanation": "點斜式 y - 9 = 6(x - 3)，整理得 y = 6x - 9，y 截距為 -9。"
              }
            ],
            "explanation": "求切線的固定流程：先算斜率，再算切點，最後套點斜式。三個數字任一算錯，切線就整條錯。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-10",
        "title": "10 · 基本求導與乘商法則",
        "intro": "學完這一節，你能對冪函數、多項式、乘積與商直接求導，不必每次回到極限定義。這是把導數從「定義」變成「工具」的關鍵一步。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-09"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：冪法則是所有多項式的基礎"
          },
          {
            "type": "paragraph",
            "text": "對 x 的 n 次方求導，指數搬到前面當係數，指數本身減 1。這個規則對正整數、負整數、分數都成立。常數的導數為 0，因為常數不隨 x 改變。"
          },
          {
            "type": "formula",
            "text": "(xⁿ)' = n·xⁿ⁻¹\n(c)' = 0"
          },
          {
            "type": "heading",
            "text": "原理二：線性能逐項處理"
          },
          {
            "type": "paragraph",
            "text": "求導是線性運算：常數可以提出來，和與差可以逐項求導。所以多項式不必用定義，逐項套冪法則即可。"
          },
          {
            "type": "formula",
            "text": "(c·f)' = c·f'\n(f ± g)' = f' ± g'"
          },
          {
            "type": "heading",
            "text": "原理三：乘積法則不是分別求導再相乘"
          },
          {
            "type": "paragraph",
            "text": "兩個函數相乘時，導數不是兩個導數的乘積。正確形式是「第一個的導數乘第二個，加上第一個乘第二個的導數」。原因是一個在變、另一個也在變，兩者的變化都要算進去。"
          },
          {
            "type": "formula",
            "text": "(u·v)' = u'·v + u·v'"
          },
          {
            "type": "heading",
            "text": "原理四：商法則的分子順序不可顛倒"
          },
          {
            "type": "paragraph",
            "text": "商的導數是「分子導乘分母，減分子乘分母導，再除以分母平方」。減法順序若顛倒，整個答案會差一個負號。記憶法是「上導下不導，減，上不導下導」。"
          },
          {
            "type": "formula",
            "text": "(u/v)' = (u'·v - u·v') / v²"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，辨認結構：是單項、和差、乘積、商，還是複合（下一節處理）。"
          },
          {
            "type": "paragraph",
            "text": "第二步，選對應法則；多項式逐項套冪法則。"
          },
          {
            "type": "paragraph",
            "text": "第三步，乘積用 u'v + uv'，商用 (u'v - uv')/v²，先寫出 u、v、u'、v' 再代入。"
          },
          {
            "type": "paragraph",
            "text": "第四步，化簡：合併同類項、約去公因式，能因式分解就分解。"
          },
          {
            "type": "paragraph",
            "text": "第五步，需要某一點的導數值時，先化簡再代入，可減少計算錯誤。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是 (uv)' = u'v'。這是把乘積當成線性運算，但求導不是線性的。用 x·x 檢驗：u=v=x，u'v'=1，而 (x²)'=2x，明顯不對。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是商法則分子順序顛倒，寫成 (uv' - u'v)/v²。這會讓答案正負相反。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是負指數或分數指數忘了套同一條冪法則。1/x = x⁻¹，導數是 -x⁻²；√x = x^(1/2)，導數是 (1/2)x^(-1/2)。"
          }
        ],
        "questions": [
          {
            "prompt": "(x⁵)' 等於？",
            "options": [
              "5x⁴",
              "x⁴",
              "5x⁵",
              "4x⁵"
            ],
            "answer": 0,
            "explanation": "冪法則：指數 5 搬到前面，指數減 1 得 4，所以是 5x⁴。寫成 x⁴ 是漏掉係數，寫成 5x⁵ 是忘記指數減 1。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 3x² + 2x，則 f'(1) 等於多少？",
            "answers": [
              "8"
            ],
            "explanation": "逐項求導：f'(x) = 6x + 2。代入 1 得 8。常數項若存在，導數為 0，不影響結果。"
          },
          {
            "type": "input",
            "prompt": "(x² · x³) 的導數在 x = 1 等於多少？",
            "answers": [
              "5"
            ],
            "explanation": "先化簡成 x⁵，導數為 5x⁴，在 x = 1 得 5。若直接套乘積法則也得到同樣結果：2x·x³ + x²·3x² = 5x⁴。化簡通常更快。"
          },
          {
            "prompt": "乘積法則的正確形式是？",
            "options": [
              "(uv)' = u'v + uv'",
              "(uv)' = u'v'",
              "(uv)' = u'v - uv'",
              "(uv)' = (u'v')/2"
            ],
            "answer": 0,
            "explanation": "乘積法則是 u'v + uv'，兩項都要有。u'v' 完全錯誤；減號形式是商法則的分子，不是乘積法則。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x/(x + 1)，則 f'(1) 等於多少？",
            "answers": [
              "1/4"
            ],
            "explanation": "商法則：u = x、u' = 1、v = x+1、v' = 1，分子為 1·(x+1) - x·1 = 1，分母為 (x+1)²。所以 f'(x) = 1/(x+1)²，代入 1 得 1/4。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x²(x + 1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "展開後 x³ 的係數是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "x²(x+1) = x³ + x²，x³ 的係數是 1。"
              },
              {
                "type": "input",
                "prompt": "f'(x) 中 x² 的係數是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "逐項求導：3x² + 2x，x² 的係數是 3。"
              },
              {
                "type": "input",
                "prompt": "f'(1) 等於多少？",
                "answers": [
                  "5"
                ],
                "explanation": "f'(x) = 3x² + 2x，代入 1 得 5。也可用乘積法則驗證：2x(x+1) + x² = 3x² + 2x。"
              }
            ],
            "explanation": "本題比較「先展開再求導」與「直接用乘積法則」兩條路。兩者結果必須相同，這是檢查乘積法則是否用對的好方法。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 2/x，則 f'(2) 等於多少？",
            "answers": [
              "-1/2"
            ],
            "explanation": "2/x = 2x⁻¹，導數為 -2x⁻² = -2/x²，代入 2 得 -2/4 = -1/2。負指數要套同一條冪法則。"
          },
          {
            "prompt": "(√x)' 等於？",
            "options": [
              "1/(2√x)",
              "2√x",
              "1/√x",
              "√x/2"
            ],
            "answer": 0,
            "explanation": "√x = x^(1/2)，導數為 (1/2)x^(-1/2) = 1/(2√x)。這題常被誤寫成 2√x，那是把積分公式與求導公式混淆。"
          },
          {
            "type": "input",
            "prompt": "f(x) = (x² + 1)(x - 1)，則 f'(0) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "乘積法則：u = x²+1、u' = 2x、v = x-1、v' = 1，f' = 2x(x-1) + (x²+1)。代入 0 得 0 + 1 = 1。展開驗證：x³ - x² + x - 1 的導數在 0 也是 1。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = (2x + 1)/(x - 1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "商法則分子 u'v - uv' 在 x = 2 的值是多少？",
                "answers": [
                  "-3"
                ],
                "explanation": "u = 2x+1、u' = 2、v = x-1、v' = 1。u'v - uv' = 2(x-1) - (2x+1) = -3，與 x 無關，所以在 x = 2 仍為 -3。"
              },
              {
                "type": "input",
                "prompt": "分母 v² 在 x = 2 的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "v = x-1，在 x = 2 時 v = 1，平方為 1。"
              },
              {
                "type": "input",
                "prompt": "f'(2) 等於多少？",
                "answers": [
                  "-3"
                ],
                "explanation": "f'(2) = -3/1 = -3。分子恆為 -3、分母為 (x-1)²，故 f'(x) = -3/(x-1)²。"
              }
            ],
            "explanation": "商法則的三個環節：算分子、算分母、相除。分子化簡後往往與 x 無關，這時整條導數只由分母決定大小。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-11",
        "title": "11 · 鏈式法則",
        "intro": "學完這一節，你能對任何複合函數求導，例如 (3x-1)⁴、√(x²+1)、sin(2x)。鏈式法則是微積分中使用頻率最高的法則，沒有它幾乎無法處理真實函數。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-10"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：複合是兩層變化相乘"
          },
          {
            "type": "paragraph",
            "text": "複合函數 f(g(x)) 有兩層：內層 g 先把 x 變成 u，外層 f 再把 u 變成輸出。x 改變一點，先被 g 放大或縮小，再被 f 放大或縮小，兩層的變化率相乘就是整體的變化率。"
          },
          {
            "type": "formula",
            "text": "y = f(u)，u = g(x)\ndy/dx = f'(u) · g'(x) = f'(g(x)) · g'(x)"
          },
          {
            "type": "heading",
            "text": "原理二：外層導數要代回內層"
          },
          {
            "type": "paragraph",
            "text": "算出外層導數後，必須把 u = g(x) 代回去，不能留著 u。常見錯誤是只寫 f'(u) 就結束，答案裡還帶著一個沒有定義的 u。"
          },
          {
            "type": "formula",
            "text": "d/dx [g(x)]ⁿ = n[g(x)]ⁿ⁻¹ · g'(x)"
          },
          {
            "type": "heading",
            "text": "原理三：由外而內，一層一層乘"
          },
          {
            "type": "paragraph",
            "text": "多層複合就連續乘下去。每一層都問兩個問題：這一層的外函數是什麼、它的導數是什麼；內層的導數是什麼。把所有層的導數相乘。"
          },
          {
            "type": "formula",
            "text": "d/dx f(g(h(x))) = f'(g(h(x))) · g'(h(x)) · h'(x)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，指定內層 u = g(x)，把函數寫成 y = f(u)。"
          },
          {
            "type": "paragraph",
            "text": "第二步，算外層導數 f'(u)。"
          },
          {
            "type": "paragraph",
            "text": "第三步，算內層導數 g'(x)。"
          },
          {
            "type": "paragraph",
            "text": "第四步，兩者相乘，並把 u 換回 g(x)。"
          },
          {
            "type": "paragraph",
            "text": "第五步，化簡；需要數值時最後才代入，避免中間四捨五入。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記乘內層導數。d/dx (3x)² 不是 2(3x)，而是 2(3x)·3 = 18x。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把外層導數留在 u 的形式，沒有代回 x。答案必須只含 x。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是內外層顛倒。sin(x²) 的內層是 x²，導數 2x；sin²x 的內層是 sin x，導數 cos x。兩者完全不同。"
          }
        ],
        "questions": [
          {
            "prompt": "d/dx (2x + 1)³ 等於？",
            "options": [
              "3(2x + 1)² · 2",
              "3(2x + 1)²",
              "2(2x + 1)³",
              "6(2x + 1)³"
            ],
            "answer": 0,
            "explanation": "外層是三次方，導數 3(2x+1)²；內層 2x+1 的導數是 2。兩者相乘得 6(2x+1)²。選 3(2x+1)² 是漏乘內層導數。"
          },
          {
            "type": "input",
            "prompt": "d/dx (x² + 1)³ 在 x = 1 等於多少？",
            "answers": [
              "24"
            ],
            "explanation": "外層 3(x²+1)²，內層 2x，相乘得 6x(x²+1)²。代入 1：6·1·4 = 24。"
          },
          {
            "type": "input",
            "prompt": "d/dx √(x² + 1) 在 x = 0 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "√(x²+1) = (x²+1)^(1/2)，導數為 (1/2)(x²+1)^(-1/2)·2x = x/√(x²+1)。代入 0 得 0。這也符合圖形在 x=0 處有水平切線。"
          },
          {
            "prompt": "鏈式法則的正確形式是？",
            "options": [
              "f'(g(x)) · g'(x)",
              "f'(x) · g'(x)",
              "f(g'(x))",
              "f'(g'(x))"
            ],
            "answer": 0,
            "explanation": "外層導數要在內層的值處取值，再乘內層導數：f'(g(x))·g'(x)。寫成 f'(x)·g'(x) 是把兩層的變量混在一起。"
          },
          {
            "type": "input",
            "prompt": "d/dx (3x - 1)⁴ 在 x = 1 等於多少？",
            "answers": [
              "96"
            ],
            "explanation": "外層 4(3x-1)³，內層 3，相乘得 12(3x-1)³。代入 1：12·2³ = 12·8 = 96。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = (x² + 3x)⁵。",
            "parts": [
              {
                "type": "input",
                "prompt": "內層 u = x² + 3x 在 x = 1 的值是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "1 + 3 = 4。"
              },
              {
                "type": "input",
                "prompt": "內層導數 u' 在 x = 1 的值是多少？",
                "answers": [
                  "5"
                ],
                "explanation": "u' = 2x + 3，代入 1 得 5。"
              },
              {
                "type": "input",
                "prompt": "f'(1) 等於多少？",
                "answers": [
                  "6400"
                ],
                "explanation": "f' = 5u⁴·u' = 5·4⁴·5 = 5·256·5 = 6400。"
              }
            ],
            "explanation": "鏈式法則的計算順序：先算內層的值、再算內層的導數、最後套外層導數相乘。三項任一算錯，結果就錯。"
          },
          {
            "type": "input",
            "prompt": "d/dx [1/(x + 1)] 在 x = 1 等於多少？",
            "answers": [
              "-1/4"
            ],
            "explanation": "1/(x+1) = (x+1)⁻¹，導數為 -(x+1)⁻²，代入 1 得 -1/4。也可視為商法則：u=1、v=x+1，得 -1/(x+1)²。"
          },
          {
            "prompt": "d/dx sin(x²) 等於？",
            "options": [
              "2x·cos(x²)",
              "cos(x²)",
              "2x·sin(x²)",
              "cos(2x)"
            ],
            "answer": 0,
            "explanation": "外層 sin 的導數是 cos，代回內層得 cos(x²)；內層 x² 的導數是 2x。相乘為 2x cos(x²)。漏掉 2x 是忘記內層導數。"
          },
          {
            "type": "input",
            "prompt": "f(x) = (2x + 3)³，則 f'(0) 等於多少？",
            "answers": [
              "54"
            ],
            "explanation": "f' = 3(2x+3)²·2 = 6(2x+3)²。代入 0 得 6·9 = 54。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = √(4x + 1)，考慮 x = 2。",
            "parts": [
              {
                "type": "input",
                "prompt": "內層 4x + 1 在 x = 2 的值是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "4·2 + 1 = 9。"
              },
              {
                "type": "input",
                "prompt": "內層導數是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "4x + 1 的導數是 4，為常數。"
              },
              {
                "type": "input",
                "prompt": "f'(2) 等於多少？",
                "answers": [
                  "2/3"
                ],
                "explanation": "f' = (1/(2√(4x+1)))·4 = 2/√(4x+1)。代入 2 得 2/3。"
              }
            ],
            "explanation": "根號型的鏈式法則：外層導數 1/(2√u)，乘內層導數。化簡後通常只剩一個簡單分數，不要急著把小數算出來。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-12",
        "title": "12 · 三角函數與求導",
        "intro": "學完這一節，你能對 sin、cos、tan 及其複合形式求導，並用 lim(sin x/x)=1 處理相關極限。三角函數的導數是往後處理振動、週期與極座標問題的基礎。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-11"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：sin 與 cos 的導數互為循環"
          },
          {
            "type": "paragraph",
            "text": "sin 的導數是 cos，cos 的導數是 -sin。負號出現在 cos 這一支，因為 cos 在 0 附近是遞減的。連續求導四次會回到原函數，形成 sin → cos → -sin → -cos → sin 的循環。"
          },
          {
            "type": "formula",
            "text": "(sin x)' = cos x\n(cos x)' = -sin x"
          },
          {
            "type": "heading",
            "text": "原理二：tan 的導數是 sec²"
          },
          {
            "type": "paragraph",
            "text": "tan = sin/cos，用商法則可得 (cos² + sin²)/cos² = 1/cos² = sec²。因為 cos² + sin² = 1，結果恆為正，符合 tan 在其定義域上嚴格遞增。"
          },
          {
            "type": "formula",
            "text": "(tan x)' = sec²x = 1/cos²x"
          },
          {
            "type": "heading",
            "text": "原理三：重要極限 lim(sin x/x)=1"
          },
          {
            "type": "paragraph",
            "text": "這個極限是 sin 導數為 cos 的關鍵。x 用弧度時成立；用角度則會多一個換算常數。所有三角函數的求導公式都建立在弧度制上。"
          },
          {
            "type": "formula",
            "text": "lim(x→0) sin x / x = 1\nlim(x→0) (1 - cos x)/x = 0"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，辨認是基本三角函數還是複合形式。"
          },
          {
            "type": "paragraph",
            "text": "第二步，基本形式直接套公式；複合形式用鏈式法則，內層導數乘上去。"
          },
          {
            "type": "paragraph",
            "text": "第三步，tan、cot、sec、cosec 建議先化成 sin、cos，再用商法則，比背公式可靠。"
          },
          {
            "type": "paragraph",
            "text": "第四步，需要特定點的值時，先化簡再代入；記得 π/4、π/6、π/3 的三角值。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用恆等式（如 sin²+cos²=1）檢查結果是否可進一步化簡。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是 (cos x)' = sin x，漏掉負號。可以用 x=π/2 檢查：cos 的導數應為 -1，而 sin(π/2)=1 為正，符號明顯相反。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是複合時忘記內層導數。(sin 2x)' 是 2cos 2x，不是 cos 2x。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是 sin²x 與 sin(x²) 混淆。前者是 (sin x)²，導數 2 sin x cos x；後者是 sin(x²)，導數 2x cos(x²)。"
          }
        ],
        "questions": [
          {
            "prompt": "(sin x)' 等於？",
            "options": [
              "cos x",
              "-cos x",
              "sin x",
              "-sin x"
            ],
            "answer": 0,
            "explanation": "sin 的導數是 cos。其餘三個選項分別對應 -cos（積分結果）、sin（原函數）、-sin（cos 的導數），都是常見混淆。"
          },
          {
            "type": "input",
            "prompt": "f(x) = sin x + cos x，則 f'(0) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "f'(x) = cos x - sin x。代入 0 得 1 - 0 = 1。注意 cos 的導數帶負號，這是最容易漏的地方。"
          },
          {
            "type": "input",
            "prompt": "(tan x)' 在 x = 0 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "tan 的導數是 sec²x = 1/cos²x，在 0 時 cos 0 = 1，故為 1。也可用商法則驗證：(cos²+sin²)/cos² 在 0 得 1。"
          },
          {
            "prompt": "(cos x)' 等於？",
            "options": [
              "-sin x",
              "sin x",
              "cos x",
              "-cos x"
            ],
            "answer": 0,
            "explanation": "cos 的導數是 -sin。負號來自 cos 在 0 附近遞減。若寫成 sin x，會讓所有含 cos 的求導結果正負相反。"
          },
          {
            "type": "input",
            "prompt": "d/dx sin(2x) 在 x = 0 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "鏈式法則：外層 cos(2x)，內層導數 2，得 2cos(2x)。代入 0 得 2·1 = 2。漏掉 2 是忘記內層導數的典型錯誤。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = sin x · cos x。",
            "parts": [
              {
                "type": "input",
                "prompt": "f'(0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "乘積法則：cos x·cos x + sin x·(-sin x) = cos²x - sin²x。代入 0 得 1。"
              },
              {
                "type": "input",
                "prompt": "f(π/4) 等於多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "sin(π/4)·cos(π/4) = (√2/2)(√2/2) = 1/2。"
              },
              {
                "type": "input",
                "prompt": "f'(π/4) 等於多少？",
                "answers": [
                  "0"
                ],
                "explanation": "f' = cos²x - sin²x = cos(2x)。在 π/4 時 cos(π/2) = 0。這也說明 f 在此處有水平切線。"
              }
            ],
            "explanation": "本題用乘積法則與倍角恆等式兩條路互相驗證：sin x cos x = (1/2)sin 2x，導數為 cos 2x，與 cos²x - sin²x 一致。"
          },
          {
            "type": "input",
            "prompt": "d/dx (x·sin x) 在 x = 0 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "乘積法則：1·sin x + x·cos x = sin x + x cos x。代入 0 得 0 + 0 = 0。這說明 y = x sin x 在原點有水平切線。"
          },
          {
            "prompt": "lim(x→0) sin x / x 等於？",
            "options": [
              "1",
              "0",
              "∞",
              "不存在"
            ],
            "answer": 0,
            "explanation": "這是三角求導的基礎極限，值為 1（x 以弧度計）。若用角度制，會多出 π/180 的換算因子，這也是所有三角公式都要求弧度的原因。"
          },
          {
            "type": "input",
            "prompt": "d/dx tan(3x) 在 x = 0 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "鏈式法則：外層 sec²(3x)，內層導數 3，得 3sec²(3x)。代入 0 得 3·1 = 3。"
          },
          {
            "type": "multipart",
            "prompt": "設 g(x) = tan x。",
            "parts": [
              {
                "type": "input",
                "prompt": "g'(0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "g' = sec²x，在 0 時 cos 0 = 1，故 sec²0 = 1。"
              },
              {
                "type": "input",
                "prompt": "g(π/4) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "tan(π/4) = sin(π/4)/cos(π/4) = 1。"
              },
              {
                "type": "input",
                "prompt": "g'(π/4) 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "sec²(π/4) = 1/cos²(π/4) = 1/(1/2) = 2。"
              }
            ],
            "explanation": "tan 的三個典型值一次考完：原點斜率 1、π/4 的函數值 1、π/4 的斜率 2。這些值在後面的圖形分析與極值題會反覆用到。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-13",
        "title": "13 · 中值定理與條件",
        "intro": "學完這一節，你能說明 Rolle 定理與中值定理的條件、找出定理保證的那個點，並判斷一個函數為何不滿足條件。這兩個定理是「導數符號推出函數行為」的橋樑。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-10"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：Rolle 定理說「有水平切線」"
          },
          {
            "type": "paragraph",
            "text": "如果函數在閉區間連續、在開區間可導，且兩端點高度相同，那麼中間至少有一點的切線是水平的。直觀上：從同一高度出發又回到同一高度，途中必然有某處正在轉向。"
          },
          {
            "type": "formula",
            "text": "f 在 [a, b] 連續，在 (a, b) 可導，且 f(a) = f(b)\n⇒ 存在 c ∈ (a, b) 使 f'(c) = 0"
          },
          {
            "type": "heading",
            "text": "原理二：中值定理說「瞬時等於平均」"
          },
          {
            "type": "paragraph",
            "text": "把兩端點連成一條割線，割線斜率是平均變化率。中值定理保證中間至少有一點的切線與這條割線平行，也就是瞬時變化率等於平均變化率。Rolle 定理是中值定理在 f(a)=f(b) 時的特例。"
          },
          {
            "type": "formula",
            "text": "f'(c) = [f(b) - f(a)] / (b - a)"
          },
          {
            "type": "heading",
            "text": "原理三：三個條件缺一不可"
          },
          {
            "type": "paragraph",
            "text": "連續、可導、端點條件，任一不滿足結論就可能失效。|x| 在 [-1,1] 上連續且端點相等，但在 0 不可導，於是不存在 f'(c)=0 的內點。1/x 在 [-1,1] 上不連續，也不能用。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認函數在閉區間連續、在開區間可導；分段或含絕對值時要特別檢查分段點。"
          },
          {
            "type": "paragraph",
            "text": "第二步，算出平均變化率 [f(b) - f(a)]/(b - a)。"
          },
          {
            "type": "paragraph",
            "text": "第三步，求 f'(x)，令它等於平均變化率，解出 c。"
          },
          {
            "type": "paragraph",
            "text": "第四步，檢查解出的 c 是否真的落在 (a, b) 內；落在外面要捨去。"
          },
          {
            "type": "paragraph",
            "text": "第五步，Rolle 定理是平均變化率為 0 的特例，可直接令 f'(c) = 0。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是解出 c 後不檢查它是否在區間內。二次方程式常有兩個解，只有落在開區間的那個才有效。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為中值定理能指出 c 的位置。它只保證存在，通常無法寫出精確值。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略可導性。|x|、立方根在 0 都不可導，直接套定理會得到錯誤結論。"
          }
        ],
        "questions": [
          {
            "prompt": "Rolle 定理需要下列哪一組條件？",
            "options": [
              "閉區間連續、開區間可導、兩端點函數值相等",
              "只需連續",
              "只需可導",
              "只需兩端點函數值相等"
            ],
            "answer": 0,
            "explanation": "三個條件缺一不可：閉區間連續保證有極值，開區間可導保證極值點導數為 0，端點等值保證極值不在端點。少任何一個結論都可能不成立。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² 在 [0, 2] 上滿足中值定理的 c 是多少？",
            "answers": [
              "1"
            ],
            "explanation": "平均變化率為 (4-0)/(2-0) = 2。f'(x) = 2x，令 2c = 2 得 c = 1，落在 (0,2) 內，有效。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² - 1 在 [-1, 1] 上滿足 Rolle 定理的 c 是多少？",
            "answers": [
              "0"
            ],
            "explanation": "f(-1) = 0 且 f(1) = 0，端點值相等；多項式處處可導，三個條件齊備。f'(x) = 2x，令 2c = 0 得 c = 0，落在 (-1, 1) 內，確實是定理保證的那一點。"
          },
          {
            "prompt": "f(x) = |x| 在 [-1, 1] 上不滿足中值定理的原因是什麼？",
            "options": [
              "在 x = 0 不可導",
              "在端點不連續",
              "兩端點函數值不相等",
              "函數不是遞增"
            ],
            "answer": 0,
            "explanation": "|x| 在 [-1,1] 連續，端點值都是 1，但它在 0 有尖角、不可導，所以不滿足「開區間可導」。這說明可導性不是多餘的條件。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² - 4x 在 [1, 5] 上滿足中值定理的 c 是多少？",
            "answers": [
              "3"
            ],
            "explanation": "平均變化率為 (5-(-3))/(5-1) = 8/4 = 2。f'(x) = 2x - 4，令 2c - 4 = 2 得 c = 3，落在 (1,5) 內。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x²，考慮區間 [0, 4]。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(4) 等於多少？",
                "answers": [
                  "16"
                ],
                "explanation": "4² = 16。"
              },
              {
                "type": "input",
                "prompt": "平均變化率是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "(16 - 0)/(4 - 0) = 4。"
              },
              {
                "type": "input",
                "prompt": "滿足中值定理的 c 是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "f'(x) = 2x，令 2c = 4 得 c = 2，落在 (0,4) 內。"
              }
            ],
            "explanation": "中值定理的三步：算端點值、算平均變化率、令導數等於它。本題的 c 恰好在區間中點，因為拋物線的對稱性。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 1/x 在 [1, 2] 上滿足中值定理的 c 是多少？",
            "answers": [
              "sqrt(2)"
            ],
            "explanation": "平均變化率為 (1/2 - 1)/(2 - 1) = -1/2。f'(x) = -1/x²，令 -1/c² = -1/2 得 c² = 2，c = √2 ≈ 1.414，落在 (1,2) 內。"
          },
          {
            "prompt": "若 f'(x) = 0 在整個區間上恆成立，則 f 在該區間上必然是？",
            "options": [
              "常數函數",
              "嚴格遞增",
              "嚴格遞減",
              "二次函數"
            ],
            "answer": 0,
            "explanation": "導數恆為 0 表示瞬時變化率處處為 0，函數不增不減，只能是常數。這是中值定理的直接推論：任兩點間的平均變化率必為 0。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² 在 [1, 3] 上的平均變化率是多少？",
            "answers": [
              "4"
            ],
            "explanation": "(9 - 1)/(3 - 1) = 8/2 = 4。平均變化率就是割線斜率，與中值定理中的 f'(c) 相等。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x³，考慮區間 [0, 3]。",
            "parts": [
              {
                "type": "input",
                "prompt": "平均變化率是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "(27 - 0)/(3 - 0) = 9。"
              },
              {
                "type": "input",
                "prompt": "滿足 f'(c) = 9 時，c² 等於多少？",
                "answers": [
                  "3"
                ],
                "explanation": "f'(x) = 3x²，令 3c² = 9 得 c² = 3。"
              },
              {
                "type": "input",
                "prompt": "c 的值是多少？",
                "answers": [
                  "sqrt(3)"
                ],
                "explanation": "c² = 3 且 c 在 (0,3) 內，故 c = √3 ≈ 1.732。"
              }
            ],
            "explanation": "本題的 c 不是整數，這是常態：中值定理保證存在，不保證好算。答案可用根號表示，不必化成小數。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-14",
        "title": "14 · 高階與隱函數微分",
        "intro": "學完這一節，你能求二階與更高階導數、判斷凹凸性，並在方程式沒有解出 y 的情況下算出 dy/dx。隱函數微分讓圓、橢圓這類圖形也能求切線。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-11"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：高階導數是導數的導數"
          },
          {
            "type": "paragraph",
            "text": "對 f' 再求導得到 f''，依此類推。二階導數描述斜率本身的變化：f'' > 0 表示斜率遞增，圖形凹向上；f'' < 0 表示斜率遞減，圖形凹向下。"
          },
          {
            "type": "formula",
            "text": "f''(x) = d/dx [f'(x)]\nf'' > 0：凹向上；f'' < 0：凹向下"
          },
          {
            "type": "heading",
            "text": "原理二：隱函數微分把 y 看成 y(x)"
          },
          {
            "type": "paragraph",
            "text": "方程式 F(x, y) = 0 沒有把 y 解出來，但 y 仍然隨 x 改變。兩邊同時對 x 求導，遇到 y 就用鏈式法則乘上 dy/dx。求導後得到一個含 dy/dx 的方程式，再解出它。"
          },
          {
            "type": "formula",
            "text": "d/dx [y] = dy/dx\nd/dx [y²] = 2y · dy/dx"
          },
          {
            "type": "heading",
            "text": "原理三：結果通常同時含 x 與 y"
          },
          {
            "type": "paragraph",
            "text": "隱函數微分的答案往往不是只含 x，而是 x 與 y 都在。要算某一點的斜率，必須把該點的兩個座標一起代入，不能只代 x。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，兩邊對 x 求導，y 的每一項都乘上 dy/dx。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把所有含 dy/dx 的項移到同一邊，其餘移到另一邊。"
          },
          {
            "type": "paragraph",
            "text": "第三步，提出 dy/dx 並相除，得到公式。"
          },
          {
            "type": "paragraph",
            "text": "第四步，要算特定點的斜率時，把該點的 x 與 y 一起代入。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用圖形檢查符號：圓在第一象限的切線斜率應為負，若算出正值就是符號錯了。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記對 y 乘 dy/dx。d/dx(y²) 是 2y·y'，不是 2y。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是算斜率時只代 x。隱函數的導數含 y，必須用該點的完整座標。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把二階導數當成「導數的平方」。f'' 是再求一次導，不是 (f')²。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x) = x³ 的二階導數是？",
            "options": [
              "6x",
              "3x²",
              "6",
              "x"
            ],
            "answer": 0,
            "explanation": "f'(x) = 3x²，再求導得 f''(x) = 6x。選 3x² 是只求了一次；選 6 是把它當成 x³ 的三階導數。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x⁴，則 f''(1) 等於多少？",
            "answers": [
              "12"
            ],
            "explanation": "f' = 4x³，f'' = 12x²，代入 1 得 12。二階導數仍是一個函數，要代入才有數值。"
          },
          {
            "type": "input",
            "prompt": "圓 x² + y² = 25 在點 (3, 4) 處的 dy/dx 是多少？",
            "answers": [
              "-3/4"
            ],
            "explanation": "兩邊對 x 求導：2x + 2y·y' = 0，得 y' = -x/y。代入 (3,4) 得 -3/4。斜率為負，符合圓在第一象限的切線方向。"
          },
          {
            "prompt": "隱函數微分時，對 y 的項應該如何處理？",
            "options": [
              "視 y 為 x 的函數，用鏈式法則乘上 dy/dx",
              "當成常數，導數為 0",
              "直接對 y 求導",
              "先解出 y 再求導"
            ],
            "answer": 0,
            "explanation": "y 隨 x 改變，所以對 x 求導時要用鏈式法則：d/dx(y²) = 2y·y'。當成常數會得到完全錯誤的結果。"
          },
          {
            "type": "input",
            "prompt": "xy = 6 在點 (2, 3) 處的 dy/dx 是多少？",
            "answers": [
              "-3/2"
            ],
            "explanation": "用乘積法則：1·y + x·y' = 0，得 y' = -y/x。代入 (2,3) 得 -3/2。也可先寫 y = 6/x，導數 -6/x² 在 2 得 -3/2，兩法一致。"
          },
          {
            "type": "multipart",
            "prompt": "圓 x² + y² = 25，考慮點 (4, 3)。",
            "parts": [
              {
                "type": "input",
                "prompt": "dy/dx = -x/y 中，分母 y 在點 (4, 3) 的值是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "該點的 y 座標就是 3，直接作為分母代入。"
              },
              {
                "type": "input",
                "prompt": "在點 (4, 3) 處的 dy/dx 是多少？",
                "answers": [
                  "-4/3"
                ],
                "explanation": "代入 -x/y 得 -4/3。"
              },
              {
                "type": "input",
                "prompt": "該點法線的斜率是多少？",
                "answers": [
                  "3/4"
                ],
                "explanation": "法線與切線垂直，斜率為切線斜率的負倒數：-1 ÷ (-4/3) = 3/4。"
              }
            ],
            "explanation": "隱函數微分後公式為 -x/y，代入 (4,3) 得分母 3、切線斜率 -4/3。法線與切線垂直，斜率為 3/4。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x³，則 f''(0) 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "f' = 3x²，f'' = 6x，代入 0 得 0。二階導數為 0 表示該點可能是反曲點，需要進一步判斷符號變化。"
          },
          {
            "prompt": "若 f''(x) > 0 在區間上恆成立，圖形在該區間上是？",
            "options": [
              "凹向上",
              "凹向下",
              "水平線",
              "遞減"
            ],
            "answer": 0,
            "explanation": "f'' > 0 表示斜率遞增，曲線向上彎，即凹向上。凹向下對應 f'' < 0；水平線對應 f' = 0；遞減對應 f' < 0，與二階導數無直接對應。"
          },
          {
            "type": "input",
            "prompt": "x³ + y³ = 9 在點 (1, 2) 處的 dy/dx 是多少？",
            "answers": [
              "-1/4"
            ],
            "explanation": "求導：3x² + 3y²·y' = 0，得 y' = -x²/y²。代入 (1,2) 得 -1/4。注意分子分母都要平方，不是 -x/y。"
          },
          {
            "type": "multipart",
            "prompt": "曲線 y² = x，考慮點 (4, 2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 x = 4 時，y 的正值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "y² = 4 且取正值，故 y = 2。"
              },
              {
                "type": "input",
                "prompt": "該點處的 dy/dx 是多少？",
                "answers": [
                  "1/4"
                ],
                "explanation": "求導：2y·y' = 1，得 y' = 1/(2y)。代入 y = 2 得 1/4。"
              }
            ],
            "explanation": "本題用隱函數微分處理一個可以解出 y 的方程式，結果與直接對 y = √x 求導一致。重點是養成「對 y 乘 y'」的習慣。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-15",
        "title": "15 · 極值判別",
        "intro": "學完這一節，你能找出函數的臨界點、判斷它是極大還是極小，並算出極值。這是所有最佳化問題的核心技術，也是圖形分析的基礎。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-13",
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：極值只可能出現在臨界點"
          },
          {
            "type": "paragraph",
            "text": "內部點要成為極值，導數必須為 0（或不存在）。這樣的點叫臨界點。但臨界點不一定是極值：x³ 在 0 的導數為 0，卻只是短暫的水平，兩側都繼續上升。"
          },
          {
            "type": "formula",
            "text": "臨界點：f'(c) = 0 或 f'(c) 不存在\n極值候選點 = 臨界點 ∪ 端點（閉區間時）"
          },
          {
            "type": "heading",
            "text": "原理二：一階判別看符號變化"
          },
          {
            "type": "paragraph",
            "text": "經過臨界點時，若 f' 由正變負，函數先升後降，該點是極大；若由負變正，先降後升，是極小；若符號不變，就不是極值。這個方法永遠可用，但要檢查左右兩側。"
          },
          {
            "type": "formula",
            "text": "f' 由 + 變 −  ⇒  極大\nf' 由 − 變 +  ⇒  極小\n符號不變  ⇒  非極值"
          },
          {
            "type": "heading",
            "text": "原理三：二階判別看彎曲方向"
          },
          {
            "type": "paragraph",
            "text": "在臨界點若 f'' < 0，曲線凹向下，是極大；f'' > 0 凹向上，是極小。f'' = 0 時無法判定，必須回到一階判別。二階判別較快，但適用範圍較窄。"
          },
          {
            "type": "formula",
            "text": "f'(c) = 0 且 f''(c) < 0  ⇒  極大\nf'(c) = 0 且 f''(c) > 0  ⇒  極小\nf''(c) = 0  ⇒  無法判定"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，求 f'(x) 並解 f'(x) = 0，同時找出 f' 不存在的點。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把臨界點依大小排序，切成若干區間。"
          },
          {
            "type": "paragraph",
            "text": "第三步，在每個區間取一個測試點，判斷 f' 的正負。"
          },
          {
            "type": "paragraph",
            "text": "第四步，看臨界點兩側符號是否變化，決定極大、極小或非極值。"
          },
          {
            "type": "paragraph",
            "text": "第五步，把極值點的 x 代回原函數 f，得到極值（不是代入 f'）。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 f'(c) = 0 直接當成極值。x³ 在 0 是反例，必須檢查符號變化。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把極值點代入 f' 而不是 f。極值是函數值，要代回原函數。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是閉區間求極值時只看臨界點，忘記比較端點。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x) = x² 的極小點在哪裡？",
            "options": [
              "x = 0",
              "x = 1",
              "x = 2",
              "沒有極小點"
            ],
            "answer": 0,
            "explanation": "f'(x) = 2x，令其為 0 得 x = 0。f'' = 2 > 0，凹向上，故為極小。極小值為 f(0) = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² - 6x + 5 的極小值是多少？",
            "answers": [
              "-4"
            ],
            "explanation": "f'(x) = 2x - 6 = 0 得 x = 3。f'' = 2 > 0，極小。代回 f：9 - 18 + 5 = -4。注意是代回 f 不是 f'。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x³ - 3x 的極大點 x 是多少？",
            "answers": [
              "-1"
            ],
            "explanation": "f' = 3x² - 3 = 0 得 x = ±1。f'' = 6x，在 x = -1 時 f'' = -6 < 0，故為極大；在 x = 1 時 f'' = 6 > 0，為極小。"
          },
          {
            "prompt": "在臨界點 c 上，若 f''(c) > 0，則 c 是？",
            "options": [
              "極小點",
              "極大點",
              "反曲點",
              "無法判定"
            ],
            "answer": 0,
            "explanation": "f'' > 0 表示凹向上，臨界點位於谷底，是極小。f'' < 0 才是極大；f'' = 0 無法判定，需回到一階判別。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x³ 在 x = 0 是否有極值？有填 1，沒有填 0。",
            "answers": [
              "0"
            ],
            "explanation": "f' = 3x²，在 0 為 0，但兩側 f' 都為正，符號不變，函數持續遞增。所以 0 是臨界點但不是極值，這是「臨界點不等於極值」的標準例子。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x² - 4x + 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "f'(x) = 0 的 x 是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "f' = 2x - 4，令其為 0 得 x = 2。"
              },
              {
                "type": "input",
                "prompt": "f''(x) 的值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "f' = 2x - 4，再求導得 f'' = 2，為常數。"
              },
              {
                "type": "input",
                "prompt": "該點是極大還是極小？極小填 1，極大填 2。",
                "answers": [
                  "1"
                ],
                "explanation": "f'' = 2 > 0，凹向上，故為極小。極小值為 f(2) = 4 - 8 + 1 = -3。"
              }
            ],
            "explanation": "二階判別的完整流程：找臨界點、算二階導、看正負。本題 f'' 是常數，整條曲線都凹向上，只有一個極小。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 2x³ - 3x² 的極小點 x 是多少？",
            "answers": [
              "1"
            ],
            "explanation": "f' = 6x² - 6x = 6x(x-1)，臨界點 x = 0 與 x = 1。f'' = 12x - 6，在 0 為 -6（極大），在 1 為 6（極小）。故極小點是 x = 1。"
          },
          {
            "prompt": "臨界點的定義是？",
            "options": [
              "f'(c) = 0 或 f'(c) 不存在的內點",
              "f(c) = 0 的點",
              "f''(c) = 0 的點",
              "區間端點"
            ],
            "answer": 0,
            "explanation": "臨界點是導數為 0 或不存在的地方，這是極值的必要條件。f(c)=0 是零點，f''(c)=0 可能是反曲點，端點另外考慮。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x⁴，則 f''(0) 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "f' = 4x³，f'' = 12x²，代入 0 得 0。此處二階判別失效，但一階判別顯示 f' 在 0 兩側由負變正，故仍是極小。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x³ - 12x。",
            "parts": [
              {
                "type": "input",
                "prompt": "臨界點共有幾個？",
                "answers": [
                  "2"
                ],
                "explanation": "f' = 3x² - 12 = 0 得 x = ±2，兩個臨界點。"
              },
              {
                "type": "input",
                "prompt": "極大點的 x 是多少？",
                "answers": [
                  "-2"
                ],
                "explanation": "f'' = 6x，在 -2 為 -12 < 0（極大），在 2 為 12 > 0（極小）。"
              },
              {
                "type": "input",
                "prompt": "極大值是多少？",
                "answers": [
                  "16"
                ],
                "explanation": "代回 f：(-8) + 24 = 16。"
              }
            ],
            "explanation": "三次函數的標準形：兩個臨界點，一極大一極小。順序永遠是先找臨界點、再用二階判別、最後代回原函數求值。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-16",
        "title": "16 · 相關變率",
        "intro": "學完這一節，你能處理兩個以上同時改變的量：先寫出它們的關係式，再對時間求導，把已知的變化率換成要求的變化率。這是導數在物理與工程中最直接的應用。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-12",
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：所有量都隨時間改變"
          },
          {
            "type": "paragraph",
            "text": "相關變率的問題裡，長度、面積、體積都是時間的函數。題目給的「每秒增加 2 公分」就是 dr/dt，要求的是 dA/dt 或 dV/dt。關鍵是先把各量之間的幾何或代數關係寫出來。"
          },
          {
            "type": "formula",
            "text": "A = πr²  ⇒  dA/dt = 2πr · dr/dt"
          },
          {
            "type": "heading",
            "text": "原理二：對時間求導要用鏈式法則"
          },
          {
            "type": "paragraph",
            "text": "關係式裡的每個變量都依賴 t，所以對 t 求導時，每個變量都要乘上自己的變化率。這就是鏈式法則：A 對 t 的變化率，等於 A 對 r 的變化率乘上 r 對 t 的變化率。"
          },
          {
            "type": "formula",
            "text": "dA/dt = (dA/dr) · (dr/dt)"
          },
          {
            "type": "heading",
            "text": "原理三：先代數後數值"
          },
          {
            "type": "paragraph",
            "text": "必須先把關係式微分完，再代入具體數值。若先把數字代入再求導，所有變化率都會變成 0，這是初學者最常見的致命錯誤。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，畫圖或寫下各量，標明哪些是變量、哪個是常數。"
          },
          {
            "type": "paragraph",
            "text": "第二步，寫出把各量連起來的關係式（面積、體積、勾股定理等）。"
          },
          {
            "type": "paragraph",
            "text": "第三步，兩邊對 t 求導，每個變量都乘上自己的 dy/dt。"
          },
          {
            "type": "paragraph",
            "text": "第四步，代入題目給的瞬間數值與已知變化率。"
          },
          {
            "type": "paragraph",
            "text": "第五步，解出要求的變化率，並檢查單位與正負號是否符合情境（增加為正、減少為負）。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是先代數字再求導。代入後半徑變成常數，dr/dt 就消失了，答案必定錯。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是漏掉某個變量的變化率。例如長方形面積 A = xy，dA/dt = y·dx/dt + x·dy/dt，兩項都要有。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忘記檢查符號。題目說「水位下降」時 dh/dt 應為負，若算出正值就要回頭檢查。"
          }
        ],
        "questions": [
          {
            "prompt": "圓面積 A = πr²，若 dr/dt = 2、r = 3，則 dA/dt 等於？",
            "options": [
              "12π",
              "6π",
              "9π",
              "18π"
            ],
            "answer": 0,
            "explanation": "dA/dt = 2πr·dr/dt = 2π·3·2 = 12π。選 6π 是漏掉 dr/dt；選 9π 是誤用面積公式本身。"
          },
          {
            "type": "input",
            "prompt": "正方形邊長 x，dx/dt = 3。當 x = 5 時，面積的變化率是多少？",
            "answers": [
              "30"
            ],
            "explanation": "面積 A = x²，dA/dt = 2x·dx/dt = 2·5·3 = 30。單位是平方單位每秒。"
          },
          {
            "type": "input",
            "prompt": "球體積 V = (4/3)πr³，dr/dt = 1。當 r = 2 時，dV/dt 等於多少？（π 請寫 pi）",
            "answers": [
              "16*pi"
            ],
            "explanation": "dV/dr = 4πr²，乘上 dr/dt 得 4πr²·1 = 4π·4 = 16π。代入 r = 2 後才乘變化率，順序不能顛倒。"
          },
          {
            "prompt": "解相關變率問題的第一步應該是？",
            "options": [
              "寫出各量之間的關係式",
              "先代入所有已知數值",
              "先對時間求導",
              "先求二階導數"
            ],
            "answer": 0,
            "explanation": "必須先有關係式才能求導。先代入數值會讓變量變成常數，變化率全部消失，這是此類題目最常見的失敗原因。"
          },
          {
            "type": "input",
            "prompt": "x² + y² = 25，dx/dt = 2。在點 (3, 4) 時，dy/dt 等於多少？",
            "answers": [
              "-3/2"
            ],
            "explanation": "對 t 求導：2x·dx/dt + 2y·dy/dt = 0，得 dy/dt = -(x/y)·dx/dt = -(3/4)·2 = -3/2。負號表示 y 正在減少。"
          },
          {
            "type": "multipart",
            "prompt": "圓面積 A = πr²，考慮 r = 2、dr/dt = 3 的瞬間。",
            "parts": [
              {
                "type": "input",
                "prompt": "dA/dr 在 r = 2 時等於多少？（π 請寫 pi）",
                "answers": [
                  "4*pi"
                ],
                "explanation": "dA/dr = 2πr，代入 2 得 4π。這是面積對半徑的變化率。"
              },
              {
                "type": "input",
                "prompt": "dA/dt 等於多少？（π 請寫 pi）",
                "answers": [
                  "12*pi"
                ],
                "explanation": "dA/dt = 4π·3 = 12π。把 dA/dr 乘上 dr/dt 即可。"
              }
            ],
            "explanation": "兩個小問區分「對半徑的變化率」與「對時間的變化率」。相關變率的本質就是把前者乘上 dr/dt 換成後者。"
          },
          {
            "type": "input",
            "prompt": "長方形長 x、寬 y，x = 4、y = 3、dx/dt = 1、dy/dt = 2。面積的變化率是多少？",
            "answers": [
              "11"
            ],
            "explanation": "A = xy，dA/dt = y·dx/dt + x·dy/dt = 3·1 + 4·2 = 11。兩個乘積項都要算，漏一項是常見錯誤。"
          },
          {
            "prompt": "相關變率問題中，鏈式法則的作用是？",
            "options": [
              "把一個量的變化率換成另一個量的變化率",
              "消除所有變量",
              "求二階導數",
              "把函數變成常數"
            ],
            "answer": 0,
            "explanation": "鏈式法則提供橋樑：dA/dt = (dA/dr)(dr/dt)。沒有它，就無法從已知的 dr/dt 得到要求的 dA/dt。"
          },
          {
            "type": "input",
            "prompt": "立方體邊長 x = 2，dx/dt = 0.5。體積的變化率是多少？",
            "answers": [
              "6"
            ],
            "explanation": "V = x³，dV/dt = 3x²·dx/dt = 3·4·0.5 = 6。先微分再代數值，順序不可顛倒。"
          },
          {
            "type": "multipart",
            "prompt": "x² + y² = 100，dx/dt = 1，考慮點 (6, 8)。",
            "parts": [
              {
                "type": "input",
                "prompt": "在該點，x·dx/dt 等於多少？",
                "answers": [
                  "6"
                ],
                "explanation": "x = 6、dx/dt = 1，乘積為 6。這是求導式中第一項的值。"
              },
              {
                "type": "input",
                "prompt": "dy/dt 等於多少？",
                "answers": [
                  "-3/4"
                ],
                "explanation": "2x·dx/dt + 2y·dy/dt = 0，代入得 12 + 16·dy/dt = 0，故 dy/dt = -3/4。"
              }
            ],
            "explanation": "對 x²+y²=100 求導得 2x·x' + 2y·y' = 0。兩項都含變化率，缺一不可；解出 y' 後要檢查符號是否符合圖形。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-17",
        "title": "17 · 函數圖形分析",
        "intro": "學完這一節，你能只看導數就畫出函數的形狀：哪裡上升、哪裡下降、哪裡轉彎、哪裡有漸近線。這是把所有求導技術整合起來的綜合應用。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-07",
          "mendelson-calculus.skill-15"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：一階導數決定增減"
          },
          {
            "type": "paragraph",
            "text": "f' > 0 的區間函數遞增，f' < 0 的區間函數遞減，f' = 0 是水平切線。把這些區間標在數線上，就得到函數的升降表。"
          },
          {
            "type": "formula",
            "text": "f' > 0  ⇒  遞增\nf' < 0  ⇒  遞減\nf' = 0  ⇒  水平切線"
          },
          {
            "type": "heading",
            "text": "原理二：二階導數決定凹凸"
          },
          {
            "type": "paragraph",
            "text": "f'' > 0 凹向上（像碗），f'' < 0 凹向下（像傘）。凹凸改變的地方叫反曲點，該點 f'' = 0 或不存在，而且兩側符號必須相反。"
          },
          {
            "type": "formula",
            "text": "f'' > 0  ⇒  凹向上\nf'' < 0  ⇒  凹向下\n反曲點：f'' 變號"
          },
          {
            "type": "heading",
            "text": "原理三：漸近線描述遠處行為"
          },
          {
            "type": "paragraph",
            "text": "垂直漸近線出現在函數趨向無窮的地方，通常是分母為 0 的點。水平漸近線看 x 趨向無窮時的極限。斜漸近線出現在分子次數比分母高一次時，用長除法可得。"
          },
          {
            "type": "formula",
            "text": "垂直：分母為 0 且分子不為 0\n水平：lim(x→±∞) f(x) = L\n斜：分子比分母高一次，做長除法"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，求定義域，標出所有垂直漸近線的候選點。"
          },
          {
            "type": "paragraph",
            "text": "第二步，求 f'(x)，解 f'=0 得臨界點，切分區間判斷增減。"
          },
          {
            "type": "paragraph",
            "text": "第三步，求 f''(x)，解 f''=0，切分區間判斷凹凸與反曲點。"
          },
          {
            "type": "paragraph",
            "text": "第四步，算 x 趨向無窮的極限，找水平或斜漸近線。"
          },
          {
            "type": "paragraph",
            "text": "第五步，把以上資訊整理成表，再畫圖；標出極值點、反曲點與漸近線。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 f''=0 直接當成反曲點。必須兩側符號相反才算，例如 x⁴ 在 0 的 f''=0 但兩側都凹向上，不是反曲點。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是混淆「遞增」與「凹向上」。前者看 f'，後者看 f''，兩者互相獨立。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略定義域就畫圖，於是把垂直漸近線畫成連續曲線。"
          }
        ],
        "questions": [
          {
            "prompt": "若 f'(x) > 0 在區間上恆成立，則函數在該區間上？",
            "options": [
              "遞增",
              "遞減",
              "凹向上",
              "凹向下"
            ],
            "answer": 0,
            "explanation": "f' > 0 表示瞬時變化率為正，函數遞增。凹向上是 f'' > 0 的結果，兩者由不同導數決定，不可混淆。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² - 2x 的遞增區間，下界是多少？",
            "answers": [
              "1"
            ],
            "explanation": "f' = 2x - 2，令 f' > 0 得 x > 1。故遞增區間為 (1, ∞)，下界是 1。頂點 x = 1 是極小點。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x³ 的反曲點 x 座標是多少？",
            "answers": [
              "0"
            ],
            "explanation": "f' = 3x²，f'' = 6x，令 f'' = 0 得 x = 0。兩側 f'' 由負變正，符號改變，確為反曲點。"
          },
          {
            "prompt": "反曲點的必要條件是？",
            "options": [
              "f'' 在該點變號",
              "f' = 0",
              "f = 0",
              "f'' > 0"
            ],
            "answer": 0,
            "explanation": "反曲點的定義是凹凸性改變，也就是 f'' 從正變負或從負變正。f'=0 是極值的條件；f''=0 只是必要條件，還要檢查變號。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 1/x 的垂直漸近線在哪裡？",
            "answers": [
              "0"
            ],
            "explanation": "分母為 0 時函數趨向無窮，即 x = 0。此處 f 無定義，圖形在 y 軸兩側分別趨向 ±∞。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x³ - 3x²。",
            "parts": [
              {
                "type": "input",
                "prompt": "臨界點共有幾個？",
                "answers": [
                  "2"
                ],
                "explanation": "f' = 3x² - 6x = 3x(x-2)，解 f'=0 得 x = 0 與 x = 2，共兩個。"
              },
              {
                "type": "input",
                "prompt": "遞增區間 x > 2 的左端點是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "f' 在 x > 2 時為正（兩因子同號），故從 2 開始遞增。"
              },
              {
                "type": "input",
                "prompt": "反曲點的 x 座標是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "f'' = 6x - 6，令其為 0 得 x = 1。兩側 f'' 由負變正，確為反曲點。"
              }
            ],
            "explanation": "本題把三個工具串起來：一階導找臨界點與增減，二階導找反曲點。三次函數的典型結構是一個極大、一個極小、一個反曲點。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x² 的圖形在整個實數上是凹向上還是凹向下？凹向上填 1，凹向下填 2。",
            "answers": [
              "1"
            ],
            "explanation": "f' = 2x，f'' = 2 > 0 恆成立，故整條拋物線都凹向上。這也解釋了為什麼它只有極小值。"
          },
          {
            "prompt": "如何找水平漸近線？",
            "options": [
              "計算 x 趨向無窮時函數的極限",
              "令分母為 0",
              "令 f' = 0",
              "找反曲點"
            ],
            "answer": 0,
            "explanation": "水平漸近線描述 x 很大或很負時函數趨近的值，所以要算 lim(x→±∞) f(x)。令分母為 0 找的是垂直漸近線。"
          },
          {
            "type": "input",
            "prompt": "f(x) = 2x + 3/x 的斜漸近線斜率是多少？",
            "answers": [
              "2"
            ],
            "explanation": "當 x 趨向無窮時，3/x 趨近 0，函數趨近 2x，故斜漸近線為 y = 2x，斜率 2。常數項 3/x 只影響近原點的行為。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = x⁴ - 2x²。",
            "parts": [
              {
                "type": "input",
                "prompt": "f'(x) = 0 的正根是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "f' = 4x³ - 4x = 4x(x²-1)，根為 0、1、-1，正根是 1。"
              },
              {
                "type": "input",
                "prompt": "極小點共有幾個？",
                "answers": [
                  "2"
                ],
                "explanation": "f'' = 12x² - 4，在 x = ±1 時為 8 > 0（極小），在 x = 0 時為 -4（極大）。故極小點兩個。"
              }
            ],
            "explanation": "偶函數的圖形左右對稱，極值與反曲點也成對出現。判斷時先看 f' 的根，再用 f'' 分類，不要憑圖形印象猜。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-18",
        "title": "18 · 最佳化建模",
        "intro": "學完這一節，你能把文字題翻譯成目標函數與約束條件，用導數找出最大值或最小值，並確認答案合理。這是微積分在工程、經濟與設計上最實用的出口。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-15"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：先建模，再求導"
          },
          {
            "type": "paragraph",
            "text": "最佳化問題有兩個要素：要最大化或最小化的目標函數，以及限制條件的約束方程式。必須先用約束把目標函數化成單一變量的函數，才能求導。"
          },
          {
            "type": "formula",
            "text": "目標：最大化或最小化 f(x)\n約束：g(x, y) = 0，用來消去多餘變量"
          },
          {
            "type": "heading",
            "text": "原理二：臨界點要驗證"
          },
          {
            "type": "paragraph",
            "text": "導數為 0 只給出候選點。要用二階判別或端點比較確認它是最大還是最小。若定義域是閉區間，端點必須一併比較；若端點使面積或長度為負，還要排除。"
          },
          {
            "type": "formula",
            "text": "f'(c) = 0 且 f''(c) < 0  ⇒  極大\nf'(c) = 0 且 f''(c) > 0  ⇒  極小"
          },
          {
            "type": "heading",
            "text": "原理三：答案要回到情境檢查"
          },
          {
            "type": "paragraph",
            "text": "算出數字後要問：單位對不對、數值合不合理、有沒有違反約束。例如長度不能為負、機率不能大於 1。數學上正確但情境上不合理的解必須捨去。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，找出要最大或最小的量，寫成目標函數。"
          },
          {
            "type": "paragraph",
            "text": "第二步，寫出約束條件，用它把目標函數化成一個變量。"
          },
          {
            "type": "paragraph",
            "text": "第三步，確定該變量的合理範圍（通常由長度、面積為正決定）。"
          },
          {
            "type": "paragraph",
            "text": "第四步，求導、解 f'=0，並比較端點。"
          },
          {
            "type": "paragraph",
            "text": "第五步，把答案代回情境，檢查單位與合理性。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是沒有用約束消去變量，直接對兩個變量求導，結果無法求解。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是找到臨界點就宣稱是答案，沒有驗證它是最大還是最小。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略定義域端點。有些最佳解就落在邊界上，例如「長度可以為 0」的極端情況。"
          }
        ],
        "questions": [
          {
            "prompt": "解最佳化問題的第一步是？",
            "options": [
              "寫出目標函數與約束條件",
              "直接求導",
              "先算二階導數",
              "先代入數字"
            ],
            "answer": 0,
            "explanation": "必須先有目標函數才能求導，也必須有約束才能消去多餘變量。跳過建模直接求導，通常會卡在兩個未知數上。"
          },
          {
            "type": "input",
            "prompt": "周長為 20 的長方形，最大面積是多少？",
            "answers": [
              "25"
            ],
            "explanation": "設長 x、寬 y，2x + 2y = 20 得 y = 10 - x。面積 A = x(10-x) = 10x - x²，A' = 10 - 2x = 0 得 x = 5。最大面積 5·5 = 25。"
          },
          {
            "type": "input",
            "prompt": "兩數之和為 10，乘積最大時較小的數是多少？",
            "answers": [
              "5"
            ],
            "explanation": "設兩數 x 與 10-x，乘積 P = x(10-x)，P' = 10 - 2x = 0 得 x = 5。兩數相等時乘積最大，最大值 25。"
          },
          {
            "prompt": "閉區間上求最佳解時，為何要檢查端點？",
            "options": [
              "極值可能出現在邊界上",
              "端點一定不是答案",
              "端點導數必為 0",
              "端點使函數無定義"
            ],
            "answer": 0,
            "explanation": "閉區間上的極值可能發生在臨界點，也可能在端點。若只檢查 f'=0，會漏掉邊界解，這在實際應用中很常見。"
          },
          {
            "type": "input",
            "prompt": "x + y = 12，xy 最大時的 x 是多少？",
            "answers": [
              "6"
            ],
            "explanation": "y = 12 - x，乘積 P = x(12-x) = 12x - x²，P' = 12 - 2x = 0 得 x = 6。此時 y = 6，兩數相等。"
          },
          {
            "type": "multipart",
            "prompt": "周長為 24 的長方形。",
            "parts": [
              {
                "type": "input",
                "prompt": "設一邊為 x，另一邊 12 - x 中 x 的係數是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "由 2x + 2y = 24 得 x + y = 12，故 y = 12 - x，x 的係數為 -1。"
              },
              {
                "type": "input",
                "prompt": "面積最大時的 x 是多少？",
                "answers": [
                  "6"
                ],
                "explanation": "A = x(12-x) = 12x - x²，A' = 12 - 2x = 0 得 x = 6。"
              },
              {
                "type": "input",
                "prompt": "最大面積是多少？",
                "answers": [
                  "36"
                ],
                "explanation": "代入 x = 6 得 A = 6·6 = 36。周長固定時，正方形面積最大。"
              }
            ],
            "explanation": "本題是固定周長求最大面積的標準範式。結論可推廣：周長固定時正方形面積最大；面積固定時正方形周長最小。"
          },
          {
            "type": "input",
            "prompt": "兩正數之和為 8，平方和最小時其中一數是多少？",
            "answers": [
              "4"
            ],
            "explanation": "設一數 x，另一數 8-x，平方和 S = x² + (8-x)² = 2x² - 16x + 64。S' = 4x - 16 = 0 得 x = 4，此時兩數相等。"
          },
          {
            "prompt": "二階判別在最佳化問題中的作用是？",
            "options": [
              "確認臨界點是最大還是最小",
              "找出臨界點",
              "消去變量",
              "計算面積"
            ],
            "answer": 0,
            "explanation": "一階導數找出候選點，二階導數判斷它是極大還是極小。少了這一步，可能把最小值誤報成最大值。"
          },
          {
            "type": "input",
            "prompt": "面積為 36 的長方形，周長最小是多少？",
            "answers": [
              "24"
            ],
            "explanation": "設長 x、寬 36/x，周長 P = 2x + 72/x，P' = 2 - 72/x² = 0 得 x² = 36，x = 6。周長為 2·6 + 2·6 = 24，即正方形。"
          },
          {
            "type": "multipart",
            "prompt": "兩正數之和為 10，求平方和的最小值。",
            "parts": [
              {
                "type": "input",
                "prompt": "設一數為 x，另一數 10 - x 中 x 的係數是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "由 x + y = 10 得 y = 10 - x，x 的係數為 -1。"
              },
              {
                "type": "input",
                "prompt": "平方和最小時的 x 是多少？",
                "answers": [
                  "5"
                ],
                "explanation": "S = x² + (10-x)² = 2x² - 20x + 100，S' = 4x - 20 = 0 得 x = 5。"
              },
              {
                "type": "input",
                "prompt": "最小平方和是多少？",
                "answers": [
                  "50"
                ],
                "explanation": "代入 x = 5：25 + 25 = 50。"
              }
            ],
            "explanation": "固定和求最小平方和，答案永遠是兩數相等。這與「固定周長求最大面積」是同一個對稱性原理。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-19",
        "title": "19 · 直線運動",
        "intro": "學完這一節，你能從位置函數算出速度與加速度、判斷何時靜止與往哪個方向移動，並分清位移與路程。這是導數最直觀的物理意義。",
        "kind": "derivative",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：位置、速度、加速度是連續求導"
          },
          {
            "type": "paragraph",
            "text": "位置 s(t) 對時間求導得速度 v(t)，速度再求導得加速度 a(t)。三者的關係固定：速度描述位置改變的快慢，加速度描述速度改變的快慢。"
          },
          {
            "type": "formula",
            "text": "v(t) = s'(t)\na(t) = v'(t) = s''(t)"
          },
          {
            "type": "heading",
            "text": "原理二：速度的符號表示方向"
          },
          {
            "type": "paragraph",
            "text": "速度為正表示往正方向移動，為負表示往負方向移動，為零表示瞬時靜止。速率是速度的絕對值，永遠非負；速度可正可負。"
          },
          {
            "type": "formula",
            "text": "v > 0：往正方向\nv < 0：往負方向\nv = 0：瞬時靜止"
          },
          {
            "type": "heading",
            "text": "原理三：位移與路程不同"
          },
          {
            "type": "paragraph",
            "text": "位移是「終點減起點」，只看兩端；路程是「實際走過的總長度」，要把折返的部分累加。若中途改變方向，兩者不相等。"
          },
          {
            "type": "formula",
            "text": "位移 = s(b) - s(a)\n路程 = ∫|v(t)| dt（需分段處理折返）"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，寫出 s(t)，求 s'(t) 得速度。"
          },
          {
            "type": "paragraph",
            "text": "第二步，再求導得加速度。"
          },
          {
            "type": "paragraph",
            "text": "第三步，令 v(t)=0 找出靜止時刻，這些時刻是運動方向可能改變的地方。"
          },
          {
            "type": "paragraph",
            "text": "第四步，在靜止點之間取測試時刻，判斷速度正負，得到運動方向。"
          },
          {
            "type": "paragraph",
            "text": "第五步，求位移直接代端點；求路程要先分段再取絕對值累加。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把速度當成速率。速度有方向，可以為負；速率是大小，永遠非負。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為 v=0 就是停止不動。它只是瞬時靜止，下一刻可能反向移動，例如拋體運動的最高點。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是求路程時直接算 s(b)-s(a)。若中途折返，這樣會少算走過的路。"
          }
        ],
        "questions": [
          {
            "prompt": "位置 s(t) = t² 的速度函數是？",
            "options": [
              "2t",
              "t",
              "t²",
              "2"
            ],
            "answer": 0,
            "explanation": "速度是位置的導數：s'(t) = 2t。這是本章最基本的關係，建議與加速度一起記：s → v → a 是連續求導。"
          },
          {
            "type": "input",
            "prompt": "s(t) = t² - 4t，在 t = 3 時的速度是多少？",
            "answers": [
              "2"
            ],
            "explanation": "v(t) = 2t - 4，代入 3 得 2。速度為正表示往正方向移動；若算出負值則表示反向。"
          },
          {
            "type": "input",
            "prompt": "s(t) = t³，在 t = 2 時的加速度是多少？",
            "answers": [
              "12"
            ],
            "explanation": "v = 3t²，a = 6t，代入 2 得 12。加速度是位置的二階導數，要連續求導兩次。"
          },
          {
            "prompt": "速度為負表示質點？",
            "options": [
              "往負方向移動",
              "靜止",
              "加速",
              "往正方向移動"
            ],
            "answer": 0,
            "explanation": "速度的符號就是運動方向。負速度表示往座標軸負方向移動，與加速或靜止無關；加速度為負才表示速度在減少。"
          },
          {
            "type": "input",
            "prompt": "s(t) = t² - 6t，質點在哪個正時刻靜止？",
            "answers": [
              "3"
            ],
            "explanation": "v = 2t - 6，令其為 0 得 t = 3。此處速度由負變正，是運動方向改變的時刻。"
          },
          {
            "type": "multipart",
            "prompt": "設 s(t) = t²，考慮 t = 3。",
            "parts": [
              {
                "type": "input",
                "prompt": "速度 v(3) 是多少？",
                "answers": [
                  "6"
                ],
                "explanation": "v = 2t，代入 3 得 6。"
              },
              {
                "type": "input",
                "prompt": "加速度 a(3) 是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "a = 2，為常數，與 t 無關。這表示速度每單位時間穩定增加 2。"
              }
            ],
            "explanation": "等加速運動的特徵是加速度為常數。本題 a 恆為 2，速度每秒增加 2，位置則是二次函數。"
          },
          {
            "type": "input",
            "prompt": "s(t) = 2t³，在 t = 1 時的速度是多少？",
            "answers": [
              "6"
            ],
            "explanation": "v = 6t²，代入 1 得 6。三次位置函數對應二次速度函數，這是最常見的多項式運動模型。"
          },
          {
            "prompt": "位移與路程的差別是？",
            "options": [
              "位移只看起終點，路程看實際走過的總長度",
              "兩者完全相同",
              "位移一定大於路程",
              "路程一定為負"
            ],
            "answer": 0,
            "explanation": "位移是 s(b)-s(a)，只看兩端；路程要累加實際走過的距離，折返部分不能抵消。只有單向運動時兩者才相等。"
          },
          {
            "type": "input",
            "prompt": "速度 v(t) = 3t²，從 t = 0 到 t = 2 的位移是多少？",
            "answers": [
              "8"
            ],
            "explanation": "位移等於速度的積分：∫0² 3t² dt = t³ |0² = 8。也可理解為 s(2)-s(0)，其中 s(t)=t³。"
          },
          {
            "type": "multipart",
            "prompt": "設 s(t) = t³ - 3t²。",
            "parts": [
              {
                "type": "input",
                "prompt": "速度為 0 的正時刻是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "v = 3t² - 6t = 3t(t-2)，速度為 0 於 t = 0 與 t = 2，正時刻是 2。"
              },
              {
                "type": "input",
                "prompt": "在 t = 2 時的加速度是多少？",
                "answers": [
                  "6"
                ],
                "explanation": "a = 6t - 6，代入 2 得 6。加速度為正，表示速度在此處由負轉正。"
              }
            ],
            "explanation": "靜止點是運動方向可能改變的地方。本題 t=0 與 t=2 兩次靜止，中間速度為負、之後為正，質點先往負方向再折返。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-20",
        "title": "20 · 微分與線性近似",
        "intro": "學完這一節，你能用切線代替曲線估算函數值、用微分估算微小變化，並判斷近似何時可靠。這是導數在測量、工程誤差與數值計算上的直接用途。",
        "kind": "derivative",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：切線是曲線的局部替身"
          },
          {
            "type": "paragraph",
            "text": "在 x = a 附近，曲線與其切線幾乎重合。所以用切線的函數值代替曲線的函數值，誤差在 h 很小時可以忽略。這就是線性近似的全部想法。"
          },
          {
            "type": "formula",
            "text": "f(a + h) ≈ f(a) + f'(a)·h"
          },
          {
            "type": "heading",
            "text": "原理二：微分是切線造成的改變量"
          },
          {
            "type": "paragraph",
            "text": "自變量改變 dx，函數沿切線改變的量叫微分 dy，等於導數乘 dx。它與真實改變量 Δy 的差，是曲線偏離切線的部分，h 越小差距越小。"
          },
          {
            "type": "formula",
            "text": "dy = f'(x) dx\nΔy = f(x + dx) - f(x) ≈ dy"
          },
          {
            "type": "heading",
            "text": "原理三：近似只在局部有效"
          },
          {
            "type": "paragraph",
            "text": "線性近似的誤差與 h² 同級，h 減半誤差約減為四分之一。h 太大時切線與曲線分離，近似失效。二階以上的彎曲（f''）決定誤差大小。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，選一個靠近目標值、而且容易計算的點 a。"
          },
          {
            "type": "paragraph",
            "text": "第二步，算 f(a) 與 f'(a)。"
          },
          {
            "type": "paragraph",
            "text": "第三步，算 h = 目標值 - a，代入 f(a) + f'(a)h。"
          },
          {
            "type": "paragraph",
            "text": "第四步，用微分估算時，先算 dy = f'(x)dx，再加到原值上。"
          },
          {
            "type": "paragraph",
            "text": "第五步，檢查 h 是否夠小；若 h 與 a 同量級，近似不可靠。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是 h 取錯符號。目標值小於 a 時 h 為負，代入時要保留負號。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把 f'(a) 當成近似值本身。近似值是 f(a) + f'(a)h，導數只是斜率。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是在遠離 a 的地方仍用線性近似。切線只在本點附近有效，距離越遠誤差越大。"
          }
        ],
        "questions": [
          {
            "prompt": "線性近似的公式是？",
            "options": [
              "f(a) + f'(a)(x - a)",
              "f(a) + f'(x)(x - a)",
              "f'(a)(x - a)",
              "f(a) · f'(a)"
            ],
            "answer": 0,
            "explanation": "在 a 點展開：函數值 f(a) 加上斜率 f'(a) 乘上位移 (x-a)。導數必須在 a 點取值，不能用變量 x。"
          },
          {
            "type": "input",
            "prompt": "用線性近似估算 √4.1（取 a = 4），結果是多少？",
            "answers": [
              "2.025"
            ],
            "explanation": "f(4) = 2，f'(x) = 1/(2√x)，f'(4) = 1/4。h = 0.1，近似值為 2 + (1/4)(0.1) = 2.025。實際值約 2.0248，誤差極小。"
          },
          {
            "type": "input",
            "prompt": "用線性近似估算 3.02²（取 a = 3），結果是多少？",
            "answers": [
              "9.12"
            ],
            "explanation": "f(3) = 9，f'(3) = 6，h = 0.02，近似值 9 + 6(0.02) = 9.12。實際值 9.1204，相差 0.0004。"
          },
          {
            "prompt": "微分 dy 的意義是？",
            "options": [
              "沿切線的函數改變量",
              "曲線的實際改變量",
              "導數本身",
              "自變量的改變量"
            ],
            "answer": 0,
            "explanation": "dy = f'(x)dx 是沿切線計算的改變量，是 Δy 的線性主部。實際改變量 Δy 還要加上高階小量，兩者在 dx 很小時幾乎相等。"
          },
          {
            "type": "input",
            "prompt": "y = x³，x = 2，dx = 0.01。dy 等於多少？",
            "answers": [
              "0.12"
            ],
            "explanation": "dy = 3x²dx = 3·4·0.01 = 0.12。實際改變量為 2.01³ - 8 = 0.120601，與 dy 相差約 0.0006。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = √x，取 a = 9。",
            "parts": [
              {
                "type": "input",
                "prompt": "f'(9) 等於多少？",
                "answers": [
                  "1/6"
                ],
                "explanation": "f'(x) = 1/(2√x)，代入 9 得 1/6。"
              },
              {
                "type": "input",
                "prompt": "用線性近似估算 √9.3 等於多少？",
                "answers": [
                  "3.05"
                ],
                "explanation": "f(9) = 3，h = 0.3，近似值 3 + (1/6)(0.3) = 3.05。實際值約 3.0496。"
              }
            ],
            "explanation": "根號的線性近似很常用：選最近的完全平方數當 a，h 就是小數部分。h 越小，近似越準。"
          },
          {
            "type": "input",
            "prompt": "用線性近似估算 ln(1.01)（取 a = 1），結果是多少？",
            "answers": [
              "0.01"
            ],
            "explanation": "f(1) = 0，f'(x) = 1/x，f'(1) = 1，h = 0.01，近似值 0 + 1·0.01 = 0.01。實際值約 0.00995。"
          },
          {
            "prompt": "線性近似何時最可靠？",
            "options": [
              "h 很小時",
              "h 很大時",
              "a = 0 時",
              "f'' 很大時"
            ],
            "answer": 0,
            "explanation": "誤差與 h² 同級，h 越小越準。f'' 越大表示曲線彎得越快，切線越快偏離，近似反而變差。"
          },
          {
            "type": "input",
            "prompt": "f(x) = x^(1/3)，則 f'(8) 等於多少？",
            "answers": [
              "1/12"
            ],
            "explanation": "f'(x) = (1/3)x^(-2/3)，代入 8 得 (1/3)(1/4) = 1/12。負分數指數要小心：8^(2/3) = 4。"
          },
          {
            "type": "multipart",
            "prompt": "球體積 V = (4/3)πr³，r = 3，dr = 0.02。",
            "parts": [
              {
                "type": "input",
                "prompt": "dV/dr 在 r = 3 時等於多少？（π 請寫 pi）",
                "answers": [
                  "36*pi"
                ],
                "explanation": "dV/dr = 4πr²，代入 3 得 36π。"
              },
              {
                "type": "input",
                "prompt": "dV 等於多少？（π 請寫 pi）",
                "answers": [
                  "0.72*pi"
                ],
                "explanation": "dV = 36π·0.02 = 0.72π。這是半徑增加 0.02 時體積的近似增加量。"
              }
            ],
            "explanation": "微分的典型應用：估算測量誤差造成的影響。半徑誤差 0.02 只讓體積改變約 0.72π，說明體積對半徑的敏感度是 4πr²。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-21",
        "title": "21 · 原函數與初值",
        "intro": "學完這一節，你能從導數反推原函數、理解為什麼要加常數 C，並用初值條件定出唯一的解。這是積分的起點，也是解微分方程的第一步。",
        "kind": "integral",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-12"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：原函數是求導的反向操作"
          },
          {
            "type": "paragraph",
            "text": "若 F'(x) = f(x)，則 F 是 f 的一個原函數。求導會消去常數，所以反推時常數無法確定；所有原函數只差一個常數。"
          },
          {
            "type": "formula",
            "text": "F'(x) = f(x)  ⇒  ∫f(x) dx = F(x) + C"
          },
          {
            "type": "heading",
            "text": "原理二：常數 C 不能省略"
          },
          {
            "type": "paragraph",
            "text": "C 代表所有可能的垂直平移。少了 C，只得到其中一條曲線，而不是全部解。不定積分的答案必須帶 C，這是與定積分最明顯的差別。"
          },
          {
            "type": "formula",
            "text": "∫x² dx = x³/3 + C\nC 取不同值，得到一整族平行曲線"
          },
          {
            "type": "heading",
            "text": "原理三：初值條件定出唯一的 C"
          },
          {
            "type": "paragraph",
            "text": "給定一點的函數值，就能解出 C。這個條件叫初值條件。實際問題中它通常來自初始位置、初始速度或初始溫度。"
          },
          {
            "type": "formula",
            "text": "已知 F(x₀) = y₀，代入 F(x) = G(x) + C 解出 C"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，逐項反推：冪次加 1，再除以新冪次。"
          },
          {
            "type": "paragraph",
            "text": "第二步，加上常數 C。"
          },
          {
            "type": "paragraph",
            "text": "第三步，若有初值條件，把該點代入，解出 C。"
          },
          {
            "type": "paragraph",
            "text": "第四步，把 C 寫回原函數，得到唯一解。"
          },
          {
            "type": "paragraph",
            "text": "第五步，求導驗證：把結果求導，應回到原本的 f(x)。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記加 C。不定積分的答案沒有 C 就不完整。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是冪次法則用反。∫x² dx 是 x³/3，不是 3x²；求導才是指數下降。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是初值代入後沒有解出 C 就停止，或把 C 當成已知數直接寫進答案。"
          }
        ],
        "questions": [
          {
            "prompt": "∫2x dx 等於？",
            "options": [
              "x² + C",
              "2 + C",
              "x²",
              "2x² + C"
            ],
            "answer": 0,
            "explanation": "反推冪次：2x 的原函數是 x²，再加常數 C。求導驗證：(x²+C)' = 2x，正確。"
          },
          {
            "type": "input",
            "prompt": "∫3x² dx 在 x = 1 時的值是多少？（取 C = 0）",
            "answers": [
              "1"
            ],
            "explanation": "∫3x² dx = x³ + C，取 C=0 得 x³，代入 1 得 1。這與求導相反：3x² 的指數加 1 再除以 3。"
          },
          {
            "type": "input",
            "prompt": "已知 f'(x) = 2x 且 f(0) = 3，則 f(1) 等於多少？",
            "answers": [
              "4"
            ],
            "explanation": "f(x) = x² + C，代入 f(0)=3 得 C=3，故 f(x)=x²+3。f(1)=1+3=4。初值條件的作用就是定出 C。"
          },
          {
            "prompt": "關於不定積分的常數 C，下列敘述何者正確？",
            "options": [
              "不可省略，代表所有垂直平移",
              "可以省略，不影響結果",
              "必須為 0",
              "由被積函數決定"
            ],
            "answer": 0,
            "explanation": "C 代表原函數的整族解，省略就只剩一條曲線。只有在定積分中，C 會因為相減而抵消，才可以不管。"
          },
          {
            "type": "input",
            "prompt": "∫x³ dx 在 x = 2 時的值是多少？（取 C = 0）",
            "answers": [
              "4"
            ],
            "explanation": "∫x³ dx = x⁴/4 + C，取 C=0 代入 2 得 16/4 = 4。冪次加 1 後要除以新冪次 4。"
          },
          {
            "type": "multipart",
            "prompt": "已知 f'(x) = 6x 且 f(1) = 2。",
            "parts": [
              {
                "type": "input",
                "prompt": "初值條件給出的函數值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "題目直接給 f(1) = 2，這就是用來定 C 的條件。"
              },
              {
                "type": "input",
                "prompt": "常數 C 等於多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "f(x) = 3x² + C，代入 f(1)=2 得 3 + C = 2，故 C = -1。"
              },
              {
                "type": "input",
                "prompt": "f(2) 等於多少？",
                "answers": [
                  "11"
                ],
                "explanation": "f(x) = 3x² - 1，代入 2 得 12 - 1 = 11。"
              }
            ],
            "explanation": "三步流程：反推原函數、代初值定 C、用完整函數求其他點。順序顛倒就無法得到唯一解。"
          },
          {
            "type": "input",
            "prompt": "∫(1/x²) dx 在 x = 2 時的值是多少？（取 C = 0）",
            "answers": [
              "-1/2"
            ],
            "explanation": "1/x² = x⁻²，原函數為 x⁻¹/(-1) = -1/x。取 C=0 代入 2 得 -1/2。負指數的冪次加 1 後仍是負數。"
          },
          {
            "prompt": "同一個函數的兩個不同原函數，它們相差？",
            "options": [
              "一個常數",
              "一個 x 的函數",
              "零",
              "無法比較"
            ],
            "answer": 0,
            "explanation": "若 F' = G' = f，則 (F-G)' = 0，由中值定理知 F-G 為常數。這正是為什麼不定積分要寫 +C。"
          },
          {
            "type": "input",
            "prompt": "已知 f''(x) = 6x、f'(0) = 1、f(0) = 0，則 f(1) 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "先反推一次：f'(x) = 3x² + 1（由 f'(0)=1 定 C）。再反推：f(x) = x³ + x + C，由 f(0)=0 得 C=0。故 f(1) = 2。"
          },
          {
            "type": "multipart",
            "prompt": "已知 f'(x) = 4x³ 且 f(0) = 5。",
            "parts": [
              {
                "type": "input",
                "prompt": "常數 C 等於多少？",
                "answers": [
                  "5"
                ],
                "explanation": "f(x) = x⁴ + C，代入 f(0)=5 得 C = 5。"
              },
              {
                "type": "input",
                "prompt": "f(1) 等於多少？",
                "answers": [
                  "6"
                ],
                "explanation": "f(x) = x⁴ + 5，代入 1 得 1 + 5 = 6。"
              }
            ],
            "explanation": "本題的原函數是單項，反推後直接得到 x⁴。初值 f(0)=5 恰好給出 C，因為 x=0 時 x⁴ 為 0。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-22",
        "title": "22 · 定積分與基本定理",
        "intro": "學完這一節，你能算出函數在區間上的定積分，並理解它與求導是互逆運算。這是微積分最核心的定理：把「累加無窮多項」變成「原函數相減」。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-08",
          "mendelson-calculus.skill-21"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：定積分是有號面積"
          },
          {
            "type": "paragraph",
            "text": "把區間切成許多小段，每段用長方形近似，再把面積相加，取極限就是定積分。在 x 軸上方的部分算正，下方算負，所以叫有號面積。"
          },
          {
            "type": "formula",
            "text": "∫a^b f(x) dx = 黎曼和的極限\nx 軸上方為正，下方為負"
          },
          {
            "type": "heading",
            "text": "原理二：微積分基本定理"
          },
          {
            "type": "paragraph",
            "text": "第一部分說：以 a 為起點、上限為變量 x 的積分，其導數就是 f(x) 本身。這說明積分與求導互為逆運算。第二部分給出計算方法：定積分等於原函數在上限的值減去在下限的值。"
          },
          {
            "type": "formula",
            "text": "d/dx ∫a^x f(t) dt = f(x)\n∫a^b f(x) dx = F(b) - F(a)，其中 F' = f"
          },
          {
            "type": "heading",
            "text": "原理三：上下限對調與同限"
          },
          {
            "type": "paragraph",
            "text": "上下限對調會變號，這是因為方向相反。上下限相同時積分為 0，因為區間長度為 0。這兩條性質常用來簡化計算。"
          },
          {
            "type": "formula",
            "text": "∫a^b f = -∫b^a f\n∫a^a f = 0"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，找一個原函數 F；不需要加 C，因為相減時會抵消。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把上限代入 F，再減去下限代入 F 的值。"
          },
          {
            "type": "paragraph",
            "text": "第三步，注意符號：下限較大時要小心，或先對調上下限再變號。"
          },
          {
            "type": "paragraph",
            "text": "第四步，遇到絕對值或分段函數，依零點把區間拆開。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用面積意義檢查：若函數全在 x 軸上方，結果必為正。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記代下限。定積分是 F(b) - F(a)，只算 F(b) 會多出一個常數。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為定積分一定為正。它是有號面積，函數在 x 軸下方時結果為負。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把定積分與不定積分混為一談。定積分是一個數，不定積分是一族函數。"
          }
        ],
        "questions": [
          {
            "prompt": "∫0² 2x dx 等於？",
            "options": [
              "4",
              "2",
              "8",
              "0"
            ],
            "answer": 0,
            "explanation": "原函數 x²，代入上限 2 得 4，代入下限 0 得 0，相減為 4。也可用面積理解：三角形底 2、高 4，面積 4。"
          },
          {
            "type": "input",
            "prompt": "∫0¹ 3x² dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "原函數 x³，上限 1 得 1，下限 0 得 0，結果 1。驗證：∫3x² = x³ + C，相減時 C 抵消。"
          },
          {
            "type": "input",
            "prompt": "∫1² 2x dx 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "原函數 x²，上限 2 得 4，下限 1 得 1，相減為 3。注意不是 4-0，下限要代 1。"
          },
          {
            "prompt": "微積分基本定理說明？",
            "options": [
              "積分與求導互為逆運算",
              "積分等於面積的絕對值",
              "導數一定存在",
              "積分只能用數值方法"
            ],
            "answer": 0,
            "explanation": "基本定理建立了微分與積分的橋樑：先積分再求導回到原函數。這使定積分不必每次回到黎曼和，只要找原函數相減。"
          },
          {
            "type": "input",
            "prompt": "∫0² (x + 1) dx 等於多少？",
            "answers": [
              "4"
            ],
            "explanation": "原函數 x²/2 + x，上限 2 得 2 + 2 = 4，下限 0 得 0，結果 4。這是梯形面積：底 2、兩高 1 與 3，平均高 2，面積 4。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫0³ x² dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "原函數在上限 3 的值是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "原函數 x³/3，代入 3 得 27/3 = 9。"
              },
              {
                "type": "input",
                "prompt": "原函數在下限 0 的值是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "代入 0 得 0。這是定積分計算中下限常被忽略的一步。"
              },
              {
                "type": "input",
                "prompt": "定積分的值是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "9 - 0 = 9。函數在 [0,3] 全為正，結果為正，符合面積意義。"
              }
            ],
            "explanation": "定積分的計算只有三步：找原函數、代上限、減下限。中間不需要寫 +C，因為相減必然抵消。"
          },
          {
            "type": "input",
            "prompt": "∫-1¹ x³ dx 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "原函數 x⁴/4，上限 1 得 1/4，下限 -1 也得 1/4，相減為 0。這是奇函數在對稱區間上的必然結果：左右面積相等而符號相反。"
          },
          {
            "prompt": "∫a^a f(x) dx 等於？",
            "options": [
              "0",
              "f(a)",
              "2f(a)",
              "無法確定"
            ],
            "answer": 0,
            "explanation": "上下限相同表示區間長度為 0，沒有任何面積，積分為 0。這是定積分最基本的性質之一。"
          },
          {
            "type": "input",
            "prompt": "∫1^e (1/x) dx 等於多少？（e 請寫 e）",
            "answers": [
              "1"
            ],
            "explanation": "1/x 的原函數是 ln x，上限 e 得 ln e = 1，下限 1 得 ln 1 = 0，結果 1。這是自然對數的重要性質之一。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫0² (3x² + 1) dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "原函數在上限 2 的值是多少？",
                "answers": [
                  "10"
                ],
                "explanation": "原函數 x³ + x，代入 2 得 8 + 2 = 10。"
              },
              {
                "type": "input",
                "prompt": "原函數在下限 0 的值是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "代入 0 得 0。"
              },
              {
                "type": "input",
                "prompt": "定積分的值是多少？",
                "answers": [
                  "10"
                ],
                "explanation": "10 - 0 = 10。被積函數在區間上恆正，結果為正。"
              }
            ],
            "explanation": "多項式的定積分逐項反推再代上下限。本題兩項都容易反推，適合用來熟悉流程。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-23",
        "title": "23 · 曲線間面積",
        "intro": "學完這一節，你能算出兩條曲線之間圍成的面積：先找交點定範圍，再積分「上減下」。這是定積分最常見的幾何應用。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-22"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：面積是上函數減下函數"
          },
          {
            "type": "paragraph",
            "text": "在區間內若 f(x) ≥ g(x)，兩曲線之間的面積就是 ∫(f - g) dx。減法保證結果非負，因為高的減低的。若順序顛倒，會得到負值，取絕對值即可。"
          },
          {
            "type": "formula",
            "text": "A = ∫a^b [f(x) - g(x)] dx，其中 f ≥ g"
          },
          {
            "type": "heading",
            "text": "原理二：上下限由交點決定"
          },
          {
            "type": "paragraph",
            "text": "兩曲線的交點是圍成區域的邊界。解 f(x) = g(x) 得到交點的 x 座標，最小與最大者就是積分的上下限。若只有一個交點，通常還要配合另一條邊界（如 x 軸或給定直線）。"
          },
          {
            "type": "formula",
            "text": "令 f(x) = g(x) 求交點\n上下限 = 交點的 x 座標（或題目給定的範圍）"
          },
          {
            "type": "heading",
            "text": "原理三：交叉時必須分段"
          },
          {
            "type": "paragraph",
            "text": "若兩曲線在區間內交叉，上下關係會改變。此時必須在每個交點切開，各段都用「上減下」，再把面積相加。直接積分整段會讓正負抵消。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，解 f(x) = g(x) 找交點，確定積分範圍。"
          },
          {
            "type": "paragraph",
            "text": "第二步，在範圍內取一個測試點，判斷哪條曲線在上。"
          },
          {
            "type": "paragraph",
            "text": "第三步，寫出 ∫(上 - 下) dx。"
          },
          {
            "type": "paragraph",
            "text": "第四步，找原函數，代上下限相減。"
          },
          {
            "type": "paragraph",
            "text": "第五步，檢查結果是否為正；為負表示上下寫反了。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是上下函數寫反，得到負面積。面積必須為正，出現負值就要對調。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是沒有先找交點，直接用題目给的區間，結果算到區域之外。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是兩曲線交叉時仍整段積分，正負抵消後得到遠小於真實面積的結果。"
          }
        ],
        "questions": [
          {
            "prompt": "兩曲線之間的面積公式是？",
            "options": [
              "∫(上函數 - 下函數) dx",
              "∫(下函數 - 上函數) dx",
              "∫(上函數 + 下函數) dx",
              "∫上函數 dx · ∫下函數 dx"
            ],
            "answer": 0,
            "explanation": "面積是「高的減低的」，所以用上減下。寫反會得到負值，雖然取絕對值後數值相同，但過程中容易混淆正負。"
          },
          {
            "type": "input",
            "prompt": "y = x 與 y = x² 在 [0, 1] 之間的面積是多少？",
            "answers": [
              "1/6"
            ],
            "explanation": "在 (0,1) 內 x > x²，故面積為 ∫0¹ (x - x²) dx = 1/2 - 1/3 = 1/6。先判斷誰在上是關鍵一步。"
          },
          {
            "type": "input",
            "prompt": "y = x² 與 x 軸在 [0, 2] 之間的面積是多少？",
            "answers": [
              "8/3"
            ],
            "explanation": "x² 在 [0,2] 恆非負，面積為 ∫0² x² dx = 8/3。這是最基本的情形：下函數是 x 軸。"
          },
          {
            "prompt": "求兩曲線間面積時，積分的上下限通常如何決定？",
            "options": [
              "由兩曲線的交點決定",
              "由原點決定",
              "固定為 0 到 1",
              "由導數為 0 的點決定"
            ],
            "answer": 0,
            "explanation": "交點是圍成區域的邊界，所以解 f=g 得到的 x 座標就是上下限。若題目另外給定範圍，則以題目為準。"
          },
          {
            "type": "input",
            "prompt": "y = 4 - x² 與 x 軸圍成的面積是多少？",
            "answers": [
              "32/3"
            ],
            "explanation": "拋物線與 x 軸交於 x = ±2，開口向下，故面積為 ∫-2² (4 - x²) dx。原函數 4x - x³/3，代入 2 得 8 - 8/3 = 16/3，代入 -2 得 -16/3，相減得 32/3。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 y = x 與 y = x²。",
            "parts": [
              {
                "type": "input",
                "prompt": "兩曲線除了 x = 0 之外的另一個交點 x 是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "解 x = x² 得 x = 0 或 x = 1，非零交點是 1。"
              },
              {
                "type": "input",
                "prompt": "在 [0, 1] 之間，哪條曲線在上？y = x 填 1，y = x² 填 2。",
                "answers": [
                  "1"
                ],
                "explanation": "取 x = 0.5 測試：0.5 > 0.25，故 y = x 在上。這決定積分時誰減誰。"
              },
              {
                "type": "input",
                "prompt": "兩曲線之間的面積是多少？",
                "answers": [
                  "1/6"
                ],
                "explanation": "∫0¹ (x - x²) dx = 1/2 - 1/3 = 1/6。"
              }
            ],
            "explanation": "本題把「找交點、判上下、算積分」三個步驟完整走一遍。上下判斷錯誤會直接導致負面積。"
          },
          {
            "type": "input",
            "prompt": "y = x² 與 y = x 在 [0, 1] 之間，哪條曲線在上？y = x 填 1，y = x² 填 2。",
            "answers": [
              "1"
            ],
            "explanation": "在 (0,1) 內任取 x = 0.5，x = 0.5 而 x² = 0.25，故 y = x 在上。這也是為什麼面積要寫成 ∫(x - x²)。"
          },
          {
            "prompt": "若兩曲線在區間內交叉，面積應該如何計算？",
            "options": [
              "在交點分段，各段都用上減下",
              "整段直接用上減下",
              "取兩次積分的平均",
              "只算其中一段"
            ],
            "answer": 0,
            "explanation": "交叉後上下關係反轉，整段積分會讓正負抵消。正確做法是在每個交點切開，逐段用上減下再相加。"
          },
          {
            "type": "input",
            "prompt": "y = 2x 與 y = x² 的非零交點 x 是多少？",
            "answers": [
              "2"
            ],
            "explanation": "解 2x = x² 得 x(x-2) = 0，非零交點是 x = 2。這將是計算面積時的積分上限。"
          },
          {
            "type": "multipart",
            "prompt": "求 y = 2x 與 y = x² 圍成的面積。",
            "parts": [
              {
                "type": "input",
                "prompt": "積分的上限是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "兩曲線交於 x = 0 與 x = 2，圍成區域在 [0,2]，上限為 2。"
              },
              {
                "type": "input",
                "prompt": "在 (0, 2) 內，哪條曲線在上？y = 2x 填 1，y = x² 填 2。",
                "answers": [
                  "1"
                ],
                "explanation": "取 x = 1 測試：2 > 1，故 y = 2x 在上。"
              },
              {
                "type": "input",
                "prompt": "面積是多少？",
                "answers": [
                  "4/3"
                ],
                "explanation": "∫0² (2x - x²) dx = 4 - 8/3 = 4/3。"
              }
            ],
            "explanation": "這是拋物線與直線圍成區域的標準題。交點 0 與 2 給出範圍，直線在上，故用 2x - x²。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-24",
        "title": "24 · 弧長積分",
        "intro": "學完這一節，你能用積分算出曲線的實際長度，而不只是直線距離。弧長公式把「無窮多小段直線」加起來，是勾股定理在曲線上的推廣。",
        "kind": "integral",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-22"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：小段弧長近似為斜邊"
          },
          {
            "type": "paragraph",
            "text": "曲線上一小段，水平改變 dx、垂直改變 dy，長度近似 √(dx² + dy²)。這是勾股定理。把 dy 寫成 y'·dx，提出 dx 就得到弧長元素。"
          },
          {
            "type": "formula",
            "text": "ds = √(1 + (y')²) dx"
          },
          {
            "type": "heading",
            "text": "原理二：整條弧長是積分"
          },
          {
            "type": "paragraph",
            "text": "把所有小段累加，就是從 a 到 b 的定積分。公式只依賴導數，因此先求導再代入，是固定流程。"
          },
          {
            "type": "formula",
            "text": "L = ∫a^b √(1 + (y')²) dx"
          },
          {
            "type": "heading",
            "text": "原理三：直線是最簡單的檢驗"
          },
          {
            "type": "paragraph",
            "text": "若 y = mx + c，則 y' = m 為常數，弧長為 √(1+m²)·(b-a)，正好是兩點距離公式。任何弧長計算都應該在直線上退化為距離公式，這是驗算的好方法。"
          },
          {
            "type": "formula",
            "text": "y = mx + c  ⇒  L = √(1 + m²)·(b - a)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，求 y'，平方後加 1。"
          },
          {
            "type": "paragraph",
            "text": "第二步，確認根號內是否可以化簡成完全平方；能化簡就先化簡。"
          },
          {
            "type": "paragraph",
            "text": "第三步，寫出定積分，找原函數。"
          },
          {
            "type": "paragraph",
            "text": "第四步，代上下限相減。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用直線特例或數值估算檢查結果是否合理（弧長必大於水平距離）。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記平方 y'。公式是 1 + (y')²，不是 1 + y'。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是算出弧長小於水平距離。弧長一定不小於兩端點的直線距離，出現更小的值表示算錯。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是根號內未化簡就直接積分，導致無法計算。先檢查是否為完全平方。"
          }
        ],
        "questions": [
          {
            "prompt": "弧長公式是？",
            "options": [
              "∫√(1 + (y')²) dx",
              "∫(1 + y') dx",
              "∫√(1 + y') dx",
              "∫(y')² dx"
            ],
            "answer": 0,
            "explanation": "弧長元素是 √(dx² + dy²)，提出 dx 後得 √(1 + (y')²)。導數必須平方，這是勾股定理的直接結果。"
          },
          {
            "type": "input",
            "prompt": "y = 3x 從 x = 0 到 x = 1 的弧長是多少？",
            "answers": [
              "sqrt(10)"
            ],
            "explanation": "y' = 3，√(1+9) = √10 為常數，積分得 √10·1 = √10。用距離公式驗證：從 (0,0) 到 (1,3) 的距離正是 √10。"
          },
          {
            "type": "input",
            "prompt": "y = x 從 x = 0 到 x = 1 的弧長是多少？",
            "answers": [
              "sqrt(2)"
            ],
            "explanation": "y' = 1，√(1+1) = √2，乘上區間長度 1 得 √2。這正是單位正方形的對角線長。"
          },
          {
            "prompt": "對直線而言，弧長積分的結果應該等於？",
            "options": [
              "兩端點的距離",
              "水平距離",
              "垂直距離",
              "斜率"
            ],
            "answer": 0,
            "explanation": "直線的弧長就是兩點間的直線距離，這是弧長公式的必然退化情形，也是最好的驗算方式。"
          },
          {
            "type": "input",
            "prompt": "y = 4x 從 x = 0 到 x = 1 的弧長是多少？",
            "answers": [
              "sqrt(17)"
            ],
            "explanation": "y' = 4，√(1+16) = √17，乘上長度 1 得 √17。對應點 (0,0) 到 (1,4) 的距離。"
          },
          {
            "type": "multipart",
            "prompt": "設 y = 3x，考慮 x 從 0 到 2。",
            "parts": [
              {
                "type": "input",
                "prompt": "y' 等於多少？",
                "answers": [
                  "3"
                ],
                "explanation": "y = 3x 的導數是常數 3。"
              },
              {
                "type": "input",
                "prompt": "1 + (y')² 等於多少？",
                "answers": [
                  "10"
                ],
                "explanation": "1 + 9 = 10。這是要開根號的量。"
              },
              {
                "type": "input",
                "prompt": "弧長是多少？",
                "answers": [
                  "2*sqrt(10)"
                ],
                "explanation": "√10 為常數，乘上區間長度 2 得 2√10。對應點 (0,0) 到 (2,6) 的距離 √(4+36) = √40 = 2√10。"
              }
            ],
            "explanation": "直線的弧長計算最簡單：導數為常數，積分變成乘法。用距離公式交叉驗證，可確認公式用對。"
          },
          {
            "type": "input",
            "prompt": "y = x 從 x = 1 到 x = 3 的弧長是多少？",
            "answers": [
              "2*sqrt(2)"
            ],
            "explanation": "y' = 1，√2 為常數，區間長度 2，故弧長 2√2。對應點 (1,1) 到 (3,3) 的距離 √(4+4) = 2√2。"
          },
          {
            "prompt": "弧長公式中 y' 的角色是？",
            "options": [
              "曲線的斜率，決定每段的傾斜程度",
              "曲線的函數值",
              "曲線的凹向",
              "曲線的面積"
            ],
            "answer": 0,
            "explanation": "y' 是斜率，斜率越大曲線越陡，同樣的水平距離對應更長的弧。這正是 √(1+(y')²) 中 y' 的作用。"
          },
          {
            "type": "input",
            "prompt": "y = 5（常數）從 x = 0 到 x = 5 的弧長是多少？",
            "answers": [
              "5"
            ],
            "explanation": "y' = 0，√(1+0) = 1，積分得 5。水平線的弧長就是水平距離，符合直覺。"
          },
          {
            "type": "multipart",
            "prompt": "設 y = 2x，考慮 x 從 0 到 3。",
            "parts": [
              {
                "type": "input",
                "prompt": "y' 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "y = 2x 的導數是 2。"
              },
              {
                "type": "input",
                "prompt": "√(1 + (y')²) 等於多少？",
                "answers": [
                  "sqrt(5)"
                ],
                "explanation": "1 + 4 = 5，開根號得 √5。"
              },
              {
                "type": "input",
                "prompt": "弧長是多少？",
                "answers": [
                  "3*sqrt(5)"
                ],
                "explanation": "√5 為常數，乘上區間長度 3 得 3√5。對應點 (0,0) 到 (3,6) 的距離 √(9+36) = √45 = 3√5。"
              }
            ],
            "explanation": "本題把弧長計算拆成三個環節：求導、算根號、乘長度。直線情形下不需要真正的積分技巧，但要理解每個環節的意義。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-25",
        "title": "25 · 旋轉體體積",
        "intro": "學完這一節，你能算出曲線繞軸旋轉所生成的立體體積。方法是把立體切成無窮多個薄圓盤，把體積加起來，這是定積分在幾何上的第二個主要應用。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-23"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：圓盤法"
          },
          {
            "type": "paragraph",
            "text": "把曲線繞 x 軸旋轉，每個截面是半徑 f(x) 的圓盤，面積 π[f(x)]²。乘上厚度 dx 就是一個薄圓盤的體積，積分起來就是整個立體。"
          },
          {
            "type": "formula",
            "text": "V = π ∫a^b [f(x)]² dx"
          },
          {
            "type": "heading",
            "text": "原理二：墊圈法處理空洞"
          },
          {
            "type": "paragraph",
            "text": "若旋轉區域不貼著旋轉軸，截面會是一個環，外半徑 R、內半徑 r，面積 π(R² - r²)。這是圓盤法的推廣，圓盤法只是內半徑為 0 的特例。"
          },
          {
            "type": "formula",
            "text": "V = π ∫a^b [R(x)² - r(x)²] dx"
          },
          {
            "type": "heading",
            "text": "原理三：繞 y 軸用殼層法"
          },
          {
            "type": "paragraph",
            "text": "繞 y 軸旋轉時，改用圓柱殼層：半徑 x、高度 f(x)、厚度 dx，展開後面積 2πx·f(x)。把殼層加起來得到體積。選圓盤還是殼層，取決於哪個方向的截面容易寫。"
          },
          {
            "type": "formula",
            "text": "V = 2π ∫a^b x·f(x) dx（繞 y 軸）"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認繞哪一條軸旋轉，決定用圓盤、墊圈還是殼層。"
          },
          {
            "type": "paragraph",
            "text": "第二步，寫出半徑函數；圓盤法的半徑就是函數值。"
          },
          {
            "type": "paragraph",
            "text": "第三步，平方後乘 π，寫成定積分。"
          },
          {
            "type": "paragraph",
            "text": "第四步，找原函數，代上下限相減。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用簡單情形檢查：圓柱的體積應為 πr²h。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記平方。體積用 f(x)²，不是 f(x)；忘記平方會讓量綱變成面積。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是墊圈法只算外圓。必須減去內圓，否則多算了空洞部分。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是繞 y 軸仍用圓盤法。除非把函數改寫成 x = g(y)，否則應改用殼層法。"
          }
        ],
        "questions": [
          {
            "prompt": "圓盤法的體積公式是？",
            "options": [
              "π∫[f(x)]² dx",
              "π∫f(x) dx",
              "2π∫f(x) dx",
              "∫[f(x)]² dx"
            ],
            "answer": 0,
            "explanation": "圓盤面積是 π 乘半徑平方，半徑就是 f(x)，所以是 π∫[f(x)]² dx。少了 π 或忘了平方都是常見錯誤。"
          },
          {
            "type": "input",
            "prompt": "y = x 繞 x 軸旋轉，在 [0, 1] 的體積是多少？（π 請寫 pi）",
            "answers": [
              "pi/3"
            ],
            "explanation": "V = π∫0¹ x² dx = π·(1/3) = π/3。這是圓錐的體積公式 πr²h/3 的特例，r=1、h=1。"
          },
          {
            "type": "input",
            "prompt": "y = x² 繞 x 軸旋轉，在 [0, 1] 的體積是多少？（π 請寫 pi）",
            "answers": [
              "pi/5"
            ],
            "explanation": "V = π∫0¹ (x²)² dx = π∫x⁴ dx = π/5。注意是 f(x) 平方後再平方，得到 x⁴。"
          },
          {
            "prompt": "墊圈法適用於什麼情況？",
            "options": [
              "旋轉區域與旋轉軸之間有空洞",
              "區域貼著旋轉軸",
              "繞 y 軸旋轉",
              "函數為常數"
            ],
            "answer": 0,
            "explanation": "墊圈法處理截面是環的情形，需要外半徑與內半徑。若區域貼著旋轉軸，內半徑為 0，退化為圓盤法。"
          },
          {
            "type": "input",
            "prompt": "y = 2 繞 x 軸旋轉，在 [0, 3] 的體積是多少？（π 請寫 pi）",
            "answers": [
              "12*pi"
            ],
            "explanation": "V = π∫0³ 2² dx = π·4·3 = 12π。這是半徑 2、高 3 的圓柱，πr²h = 4π·3 = 12π，兩法一致。"
          },
          {
            "type": "multipart",
            "prompt": "設 y = √x 繞 x 軸旋轉，x 從 0 到 4。",
            "parts": [
              {
                "type": "input",
                "prompt": "當 x = 4 時，[f(x)]² 等於多少？",
                "answers": [
                  "4"
                ],
                "explanation": "f(x) = √x，平方後為 x；代入 4 得 4。根號平方後消失，這是此類題目的化簡關鍵。"
              },
              {
                "type": "input",
                "prompt": "∫0⁴ x dx 等於多少？",
                "answers": [
                  "8"
                ],
                "explanation": "原函數 x²/2，代入 4 得 8，代入 0 得 0，結果 8。"
              },
              {
                "type": "input",
                "prompt": "體積是多少？（π 請寫 pi）",
                "answers": [
                  "8*pi"
                ],
                "explanation": "V = π·8 = 8π。"
              }
            ],
            "explanation": "根號函數的體積計算反而簡單，因為平方後根號消失。這提示我們：先算 f² 再積分，不要急著展開。"
          },
          {
            "type": "input",
            "prompt": "y = x³ 繞 x 軸旋轉，在 [0, 1] 的體積是多少？（π 請寫 pi）",
            "answers": [
              "pi/7"
            ],
            "explanation": "V = π∫0¹ (x³)² dx = π∫x⁶ dx = π/7。指數連續乘兩次：3 變 6，積分後分母是 7。"
          },
          {
            "prompt": "繞 y 軸旋轉時，通常使用哪一種方法？",
            "options": [
              "殼層法",
              "圓盤法",
              "墊圈法",
              "弧長公式"
            ],
            "answer": 0,
            "explanation": "繞 y 軸時，若函數以 y = f(x) 給出，用殼層法 2π∫x·f(x) dx 最直接。圓盤法需要先把函數改寫成 x = g(y)。"
          },
          {
            "type": "input",
            "prompt": "半徑 2、高 3 的圓柱體積是多少？（π 請寫 pi）",
            "answers": [
              "12*pi"
            ],
            "explanation": "V = πr²h = π·4·3 = 12π。這個基本公式可用來檢查旋轉體計算：常數函數旋轉的結果必須與圓柱公式一致。"
          },
          {
            "type": "multipart",
            "prompt": "設 y = x 繞 x 軸旋轉，x 從 0 到 2。",
            "parts": [
              {
                "type": "input",
                "prompt": "當 x = 2 時，[f(x)]² 等於多少？",
                "answers": [
                  "4"
                ],
                "explanation": "f(x) = x，平方後為 x²；代入 2 得 4。這是積分前先算 f² 的那一步。"
              },
              {
                "type": "input",
                "prompt": "∫0² x² dx 等於多少？",
                "answers": [
                  "8/3"
                ],
                "explanation": "原函數 x³/3，代入 2 得 8/3，代入 0 得 0。"
              },
              {
                "type": "input",
                "prompt": "體積是多少？（π 請寫 pi）",
                "answers": [
                  "8*pi/3"
                ],
                "explanation": "V = π·8/3 = 8π/3。對應圓錐 πr²h/3 = π·4·2/3 = 8π/3，一致。"
              }
            ],
            "explanation": "線性函數繞軸旋轉得到圓錐，體積應符合 πr²h/3。用已知公式交叉驗證，可確認積分設定正確。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-26",
        "title": "26 · 自然對數",
        "intro": "學完這一節，你能用積分定義自然對數、對 ln 求導與積分，並用對數性質化簡乘除與次方。自然對數是處理成長、衰減與積分 1/x 的關鍵工具。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-22"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：ln 由積分定義"
          },
          {
            "type": "paragraph",
            "text": "自然對數定義為從 1 到 x 的 1/t 積分。這個定義保證了 ln 1 = 0、ln e = 1，也讓它的導數自然就是 1/x，不需要額外證明。"
          },
          {
            "type": "formula",
            "text": "ln x = ∫1^x (1/t) dt，x > 0"
          },
          {
            "type": "heading",
            "text": "原理二：導數與積分互為搭檔"
          },
          {
            "type": "paragraph",
            "text": "ln x 的導數是 1/x；反過來，1/x 的原函數是 ln|x|。絕對值不可省略，因為 1/x 在負區間也有定義。"
          },
          {
            "type": "formula",
            "text": "(ln x)' = 1/x\n∫(1/x) dx = ln|x| + C"
          },
          {
            "type": "heading",
            "text": "原理三：對數把乘除變加減"
          },
          {
            "type": "paragraph",
            "text": "對數的核心價值是把乘法變成加法、除法變成減法、次方變成乘法。這使得複雜的乘除運算可以先取對數再處理，也是對數微分法的基礎。"
          },
          {
            "type": "formula",
            "text": "ln(ab) = ln a + ln b\nln(a/b) = ln a - ln b\nln(aⁿ) = n·ln a"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認真數為正；ln 的定義域是 x > 0。"
          },
          {
            "type": "paragraph",
            "text": "第二步，求導時用 1/x；複合函數用鏈式法則，內層導數乘上去。"
          },
          {
            "type": "paragraph",
            "text": "第三步，積分 1/x 時記得加絕對值與 C。"
          },
          {
            "type": "paragraph",
            "text": "第四步，化簡時優先使用對數性質，把乘除拆成加減。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用 ln e = 1、ln 1 = 0 檢查數值是否合理。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是 (ln x)' 寫成 1/ln x 或 ln x。導數是 1/x，這是 ln 最重要的性質。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是積分 1/x 得 ln x 而漏掉絕對值。在負區間 ln x 無定義，必須寫 ln|x|。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把 ln(a+b) 拆成 ln a + ln b。對數只對乘法成立，加法不能拆。"
          }
        ],
        "questions": [
          {
            "prompt": "(ln x)' 等於？",
            "options": [
              "1/x",
              "ln x",
              "1/ln x",
              "x"
            ],
            "answer": 0,
            "explanation": "自然對數的導數是 1/x，這是它最重要的性質，也是為什麼 1/x 的積分是 ln。其餘選項都是常見誤記。"
          },
          {
            "type": "input",
            "prompt": "ln e 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "e 是自然對數的底，定義上 ln e = 1。這與 log₁₀10 = 1 是同一個道理，只是底不同。"
          },
          {
            "type": "input",
            "prompt": "ln 1 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "任何底的對數，1 的對數都是 0，因為 a⁰ = 1。ln 1 = 0 是對數的基本性質。"
          },
          {
            "prompt": "ln(ab) 等於？",
            "options": [
              "ln a + ln b",
              "ln a · ln b",
              "ln a - ln b",
              "ln(a + b)"
            ],
            "answer": 0,
            "explanation": "對數把乘法變成加法：ln(ab) = ln a + ln b。這是對數最重要的運算性質，也是它能簡化計算的原因。"
          },
          {
            "type": "input",
            "prompt": "(ln(2x))' 在 x = 1 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "鏈式法則：1/(2x)·2 = 1/x，代入 1 得 1。也可先化簡為 ln2 + ln x，導數同樣是 1/x。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫1^e (1/x) dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "1/x 的原函數是 ln|x|，它在 x = e 時的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "ln e = 1。原函數在上限 e 的值是 1，在下限 1 的值是 ln 1 = 0。"
              },
              {
                "type": "input",
                "prompt": "定積分的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "ln e - ln 1 = 1 - 0 = 1。"
              }
            ],
            "explanation": "本題用積分定義驗證 ln e = 1：從 1 到 e 的 1/x 面積恰好是 1。這也是 e 這個數的由來。"
          },
          {
            "type": "input",
            "prompt": "ln(e³) 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "用對數性質：ln(e³) = 3·ln e = 3·1 = 3。指數可以提到對數前面，這是化簡的常用技巧。"
          },
          {
            "prompt": "ln x 的定義域是？",
            "options": [
              "x > 0",
              "x ≥ 0",
              "所有實數",
              "x ≠ 0"
            ],
            "answer": 0,
            "explanation": "對數的引數必須嚴格為正，因為沒有任何實數次方能得到負數或 0。定義域是 (0, ∞)，端點不包含。"
          },
          {
            "type": "input",
            "prompt": "(x·ln x)' 在 x = 1 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "乘積法則：1·ln x + x·(1/x) = ln x + 1，代入 1 得 0 + 1 = 1。這是對數出現在乘積中的典型求導。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 y = ln x 在 x = 1 處的切線。",
            "parts": [
              {
                "type": "input",
                "prompt": "切線斜率是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "y' = 1/x，代入 1 得 1。"
              },
              {
                "type": "input",
                "prompt": "切點的 y 座標是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "ln 1 = 0，故切點為 (1, 0)。"
              },
              {
                "type": "input",
                "prompt": "切線的 y 截距是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "點斜式 y - 0 = 1(x - 1)，得 y = x - 1，y 截距為 -1。"
              }
            ],
            "explanation": "ln x 在 x=1 的切線是 y = x - 1，這條線在後面的線性近似與不等式估計中反覆出現。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-27",
        "title": "27 · 指數函數",
        "intro": "學完這一節，你能對 e 的次方與一般指數函數求導、積分，並理解為什麼 e 是「自然」的底。指數函數描述成長與衰減，是微分方程最常見的解。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-26"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：e 的次方導數等於自身"
          },
          {
            "type": "paragraph",
            "text": "e 是唯一使 aˣ 的導數等於自身的底。這個性質讓 eˣ 在求導與積分下都不變形，因此成為微分方程與成長模型的首選底數。"
          },
          {
            "type": "formula",
            "text": "(eˣ)' = eˣ\n∫eˣ dx = eˣ + C"
          },
          {
            "type": "heading",
            "text": "原理二：一般指數需要乘 ln a"
          },
          {
            "type": "paragraph",
            "text": "對 aˣ 求導，會多出一個 ln a 的因子。這是因為 aˣ = e^(x·ln a)，用鏈式法則就得到 ln a。當 a = e 時 ln e = 1，因子消失，回到上一條。"
          },
          {
            "type": "formula",
            "text": "(aˣ)' = aˣ · ln a\naˣ = e^(x·ln a)"
          },
          {
            "type": "heading",
            "text": "原理三：指數與對數互為反函數"
          },
          {
            "type": "paragraph",
            "text": "eˣ 與 ln x 互為反函數：ln(eˣ) = x、e^(ln x) = x。這個關係讓指數與對數的題目可以互相轉換，也解釋了為什麼兩者的圖形關於 y = x 對稱。"
          },
          {
            "type": "formula",
            "text": "ln(eˣ) = x\ne^(ln x) = x，x > 0"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，辨認底是否為 e；是 e 就直接套，不是就補上 ln a。"
          },
          {
            "type": "paragraph",
            "text": "第二步，複合形式用鏈式法則，內層導數乘上去。"
          },
          {
            "type": "paragraph",
            "text": "第三步，積分 e^(kx) 時除以 k；這是求導乘 k 的反向。"
          },
          {
            "type": "paragraph",
            "text": "第四步，化簡時用指數律：e^a·e^b = e^(a+b)。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用 e⁰ = 1 檢查數值。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是 (e^(2x))' 寫成 e^(2x)。內層導數 2 必須乘上去，答案是 2e^(2x)。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把 (aˣ)' 寫成 aˣ。只有底為 e 時才成立，其他底要乘 ln a。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是積分 e^(2x) 時忘記除以 2。∫e^(2x)dx = e^(2x)/2 + C。"
          }
        ],
        "questions": [
          {
            "prompt": "(eˣ)' 等於？",
            "options": [
              "eˣ",
              "x·eˣ",
              "e^(x-1)",
              "1"
            ],
            "answer": 0,
            "explanation": "eˣ 的導數就是它自己，這是 e 這個底最特殊的性質。其他底數求導都會多出一個 ln a 的因子。"
          },
          {
            "type": "input",
            "prompt": "e⁰ 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "任何非零數的 0 次方都是 1。e⁰ = 1 是檢查指數計算最常用的錨點。"
          },
          {
            "type": "input",
            "prompt": "(e^(2x))' 在 x = 0 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "鏈式法則：2e^(2x)，代入 0 得 2·1 = 2。內層導數 2 不可漏，這是最常見的失分點。"
          },
          {
            "prompt": "(2ˣ)' 等於？",
            "options": [
              "2ˣ·ln 2",
              "2ˣ",
              "x·2^(x-1)",
              "2·ln 2"
            ],
            "answer": 0,
            "explanation": "一般指數求導要乘 ln a：2ˣ·ln 2。寫成 2ˣ 只在底為 e 時正確；x·2^(x-1) 是冪函數的規則，不適用於指數。"
          },
          {
            "type": "input",
            "prompt": "ln(e⁵) 等於多少？",
            "answers": [
              "5"
            ],
            "explanation": "指數與對數互為反函數，ln(e⁵) = 5。也可用性質 5·ln e = 5·1 = 5。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x) = eˣ + e^(-x)。",
            "parts": [
              {
                "type": "input",
                "prompt": "e⁰ 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "任何數的 0 次方為 1。"
              },
              {
                "type": "input",
                "prompt": "e^(-0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "e^0 = 1，負零仍是零。"
              },
              {
                "type": "input",
                "prompt": "f'(0) 等於多少？",
                "answers": [
                  "0"
                ],
                "explanation": "f'(x) = eˣ - e^(-x)，代入 0 得 1 - 1 = 0。這說明 f 在原點有水平切線。"
              }
            ],
            "explanation": "f(x) = eˣ + e^(-x) 是雙曲餘弦的兩倍，在原點取最小值。求導時注意 e^(-x) 的導數是 -e^(-x)。"
          },
          {
            "type": "input",
            "prompt": "(x·eˣ)' 在 x = 0 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "乘積法則：1·eˣ + x·eˣ = eˣ(1+x)，代入 0 得 1·1 = 1。"
          },
          {
            "prompt": "eˣ 最特殊的性質是？",
            "options": [
              "導數等於自身",
              "值域為正",
              "過點 (0,1)",
              "嚴格遞增"
            ],
            "answer": 0,
            "explanation": "導數等於自身是 eˣ 獨有的性質，使它在微分方程中成為基本解。值域為正、過 (0,1)、嚴格遞增其他指數函數也有。"
          },
          {
            "type": "input",
            "prompt": "(eˣ)'' 在 x = 0 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "eˣ 求導任意次仍是 eˣ，代入 0 恆為 1。這是它與多項式最大的差別：不會因為反覆求導而變成 0。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 y = eˣ 在 x = 0 處的切線。",
            "parts": [
              {
                "type": "input",
                "prompt": "切線斜率是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "y' = eˣ，代入 0 得 1。"
              },
              {
                "type": "input",
                "prompt": "切點的 y 座標是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "e⁰ = 1，故切點為 (0, 1)。"
              },
              {
                "type": "input",
                "prompt": "切線的 y 截距是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "點斜式 y - 1 = 1(x - 0)，整理得 y = x + 1，y 截距為 1。切線必過切點 (0,1)，代入 x=0 即可確認。"
              }
            ],
            "explanation": "eˣ 在原點的切線是 y = x + 1。斜率 1、切點 (0,1)、y 截距 1，三個數字互相印證。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-28",
        "title": "28 · L’Hôpital 法則",
        "intro": "學完這一節，你能處理 0/0 與 ∞/∞ 這兩種不定型的極限：分別對分子分母求導再取極限。這是把極限問題轉成求導問題的捷徑，但只對不定型有效。",
        "kind": "derivative",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-13",
          "mendelson-calculus.skill-27"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：只對不定型有效"
          },
          {
            "type": "paragraph",
            "text": "當分子分母同時趨向 0，或同時趨向無窮，直接代入無法判斷。L'Hôpital 法則說：在這種情況下，原極限等於分子導數除以分母導數的極限。前提是後者的極限存在。"
          },
          {
            "type": "formula",
            "text": "若 lim f = lim g = 0 或同時為 ±∞，且 g' ≠ 0\n則 lim f/g = lim f'/g'"
          },
          {
            "type": "heading",
            "text": "原理二：不是不定型就不能用"
          },
          {
            "type": "paragraph",
            "text": "若分子分母的極限不是同時為 0 或同時為無窮，直接代入即可，強行求導會得到錯誤答案。使用前必須先確認型態，這是本章最容易被忽略的一步。"
          },
          {
            "type": "formula",
            "text": "先代入確認：0/0 或 ∞/∞ 才可用\n3/0、0/5 等都不是不定型"
          },
          {
            "type": "heading",
            "text": "原理三：可以重複使用"
          },
          {
            "type": "paragraph",
            "text": "求導一次後若仍是不定型，可以再求導一次。但只要某一歩已不再是 0/0 或 ∞/∞，就必須停止，否則會愈算愈錯。"
          },
          {
            "type": "formula",
            "text": "lim f/g = lim f'/g' = lim f''/g''（每步都需確認型態）"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，直接代入，確認是否為 0/0 或 ∞/∞。"
          },
          {
            "type": "paragraph",
            "text": "第二步，對分子、分母分別求導，不要用商法則。"
          },
          {
            "type": "paragraph",
            "text": "第三步，再代入；若仍是不定型，重複一次。"
          },
          {
            "type": "paragraph",
            "text": "第四步，一旦不再是定型，就停止求導，直接代入得答案。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用數值表或已知極限核對結果是否合理。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是對非不定型使用法則。例如 lim(x→0) (x+1)/x 不是 0/0，強行求導得 1/1 = 1，完全錯誤。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是對整個商套商法則。L'Hôpital 是分別對分子分母求導，不是 (f/g)'。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是求導次數過多。已脫離不定型還繼續求導，答案會偏離。"
          }
        ],
        "questions": [
          {
            "prompt": "L'Hôpital 法則適用於哪些情況？",
            "options": [
              "0/0 或 ∞/∞ 型",
              "任何極限",
              "只有 0/0 型",
              "只有多項式"
            ],
            "answer": 0,
            "explanation": "法則是為了解決不定型：分子分母同時趨向 0 或同時趨向無窮。其他型態直接代入即可，強行使用會得到錯誤結果。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) sin x / x 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "代入得 0/0，可用 L'Hôpital：分子導數 cos x、分母導數 1，得 cos x/1，代入 0 得 1。這與之前的基礎極限一致。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (eˣ - 1)/x 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "0/0 型。分子導數 eˣ、分母導數 1，得 eˣ，代入 0 得 1。這個極限也是 e 的定義之一。"
          },
          {
            "prompt": "lim(x→0) (x + 1)/x 可以使用 L'Hôpital 嗎？",
            "options": [
              "不可以，因為不是不定型",
              "可以，結果為 1",
              "可以，結果為 0",
              "可以，結果為無窮"
            ],
            "answer": 0,
            "explanation": "分子趨向 1、分母趨向 0，是「非零除以零」，屬於無窮而非不定型。強行求導得 1/1 = 1，與正確答案（無窮）完全不符。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (1 - cos x)/x² 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "0/0 型。第一次求導得 sin x/(2x)，仍是 0/0；再求導得 cos x/2，代入 0 得 1/2。這是需要重複使用的典型例子。"
          },
          {
            "type": "multipart",
            "prompt": "計算 lim(x→0) sin(3x)/x。",
            "parts": [
              {
                "type": "input",
                "prompt": "分子求導後在 x = 0 的值是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "分子 sin(3x) 的導數是 3cos(3x)，代入 0 得 3·1 = 3。"
              },
              {
                "type": "input",
                "prompt": "分母求導後的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "分母 x 的導數是 1，為常數。"
              },
              {
                "type": "input",
                "prompt": "極限值是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "3/1 = 3。這與 lim sin(3x)/x = 3·lim sin(3x)/(3x) = 3 的結果一致。"
              }
            ],
            "explanation": "L'Hôpital 的計算只有兩步：分子分母分別求導，再代入。本題的關鍵是鏈式法則產生係數 3。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) x/eˣ 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "∞/∞ 型。求導得 1/eˣ，當 x 趨向無窮時趨近 0。這說明指數成長遠快於多項式，是判斷無窮極限的重要依據。"
          },
          {
            "prompt": "∞/∞ 型的極限應該如何處理？",
            "options": [
              "同樣使用 L'Hôpital 法則",
              "直接寫無窮",
              "取倒數",
              "無法計算"
            ],
            "answer": 0,
            "explanation": "∞/∞ 與 0/0 都是不定型，都適用 L'Hôpital。方法相同：分子分母分別求導再取極限，必要時重複。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (e^(2x) - 1)/x 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "0/0 型。分子導數 2e^(2x)、分母導數 1，代入 0 得 2·1 = 2。內層係數 2 會直接出現在答案中。"
          },
          {
            "type": "multipart",
            "prompt": "計算 lim(x→1) (x² - 1)/(x - 1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "分子求導後在 x = 1 的值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "分子 x²-1 的導數是 2x，代入 1 得 2。"
              },
              {
                "type": "input",
                "prompt": "分母求導後的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "分母 x-1 的導數是 1。"
              },
              {
                "type": "input",
                "prompt": "極限值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "2/1 = 2。與因式分解法 (x+1) 代入 1 的結果一致，兩法可互相驗證。"
              }
            ],
            "explanation": "本題可以用因式分解或 L'Hôpital，兩者結果相同。多項式題目通常因式分解更快，L'Hôpital 的優勢在於三角與指數。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-29",
        "title": "29 · 成長與衰減",
        "intro": "學完這一節，你能建立指數成長與衰減模型、由資料定出常數，並用半衰期描述衰減速度。這是微分方程最常見的應用，從細菌繁殖到放射性定年都靠它。",
        "kind": "integral",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-27"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：變化率與現量成正比"
          },
          {
            "type": "paragraph",
            "text": "成長或衰減的核心假設是：變化率正比於目前的量。写成微分方程就是 y' = ky。這個方程的解是指數函數，因為指數函數的導數正比於自身。"
          },
          {
            "type": "formula",
            "text": "y' = k·y  ⇒  y = C·e^(kt)"
          },
          {
            "type": "heading",
            "text": "原理二：k 的符號決定成長或衰減"
          },
          {
            "type": "paragraph",
            "text": "k > 0 時 y 隨時間增大，是指數成長；k < 0 時減小，是指數衰減。|k| 越大，變化越快。C 是初始量，因為 t = 0 時 e⁰ = 1。"
          },
          {
            "type": "formula",
            "text": "k > 0：成長\nk < 0：衰減\ny(0) = C"
          },
          {
            "type": "heading",
            "text": "原理三：半衰期只依賴 k"
          },
          {
            "type": "paragraph",
            "text": "衰減到一半所需的時間叫半衰期。由 C·e^(kt) = C/2 解得 t = ln2/|k|。半衰期與初始量無關，這是放射性定年的基礎。"
          },
          {
            "type": "formula",
            "text": "半衰期 t½ = ln2 / |k|"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認模型是 y = Ce^(kt)，並找出初始量 C。"
          },
          {
            "type": "paragraph",
            "text": "第二步，用一組已知數據代入，解出 k。"
          },
          {
            "type": "paragraph",
            "text": "第三步，把 k 與 C 寫回模型。"
          },
          {
            "type": "paragraph",
            "text": "第四步，代入要求的時間或量，求解。"
          },
          {
            "type": "paragraph",
            "text": "第五步，檢查合理性：成長模型的值應遞增，衰減應遞減且恆正。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 k 的符號弄反。衰減模型的 k 必須為負，否則算出的量會隨時間增大。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為 C 是成長率。C 是初始量，成長率是 k，兩者角色不同。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是半衰期公式用 ln10 或直接用 k。正確是 ln2/|k|，2 來自「一半」。"
          }
        ],
        "questions": [
          {
            "prompt": "指數成長模型的一般形式是？",
            "options": [
              "y = C·e^(kt)",
              "y = C + kt",
              "y = C·t^k",
              "y = k^t"
            ],
            "answer": 0,
            "explanation": "變化率正比於現量的微分方程，解為 y = Ce^(kt)。線性模型 y=C+kt 是等速變化，與「變化率正比於現量」不同。"
          },
          {
            "type": "input",
            "prompt": "y = 100·e^(0.5t)，當 t = 0 時 y 等於多少？",
            "answers": [
              "100"
            ],
            "explanation": "t = 0 時 e⁰ = 1，故 y = 100。這說明係數 100 就是初始量，與成長率無關。"
          },
          {
            "type": "input",
            "prompt": "某量滿足 y = C·e^(kt)，且 y(0) = 50、y(1) = 100。C 等於多少？",
            "answers": [
              "50"
            ],
            "explanation": "y(0) = C·e⁰ = C，已知 y(0) = 50，故 C = 50。初始條件直接給出 C，這是解成長模型的第一步。"
          },
          {
            "prompt": "若 k < 0，模型 y = C·e^(kt) 描述的是？",
            "options": [
              "衰減",
              "成長",
              "常數",
              "線性增加"
            ],
            "answer": 0,
            "explanation": "k 為負時指數為負，e^(kt) 隨 t 增大而減小，故為衰減。k 的符號是判斷成長或衰減的唯一依據。"
          },
          {
            "type": "input",
            "prompt": "y = 100·e^(-0.5t)，當 t = 0 時 y 等於多少？",
            "answers": [
              "100"
            ],
            "explanation": "e⁰ = 1，故 y = 100。即使 k 為負，t = 0 時的值仍是初始量 C。"
          },
          {
            "type": "multipart",
            "prompt": "細菌數量滿足 y = 200·e^(0.2t)。",
            "parts": [
              {
                "type": "input",
                "prompt": "初始數量是多少？",
                "answers": [
                  "200"
                ],
                "explanation": "t = 0 時 e⁰ = 1，y = 200。係數就是初始量。"
              },
              {
                "type": "input",
                "prompt": "t = 5 時，指數 0.2t 的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "0.2 × 5 = 1。這一步先算指數，再算 e 的次方。"
              },
              {
                "type": "input",
                "prompt": "成長率 k 是多少？",
                "answers": [
                  "0.2"
                ],
                "explanation": "模型中 e 的指數是 0.2t，故 k = 0.2。k 為正，表示數量在增加。"
              }
            ],
            "explanation": "指數模型的三個要素：初始量 C、成長率 k、時間 t。本題逐一取出，是理解模型結構的基本訓練。"
          },
          {
            "type": "input",
            "prompt": "微分方程 y' = 0.3y 的通解中，指數的係數是多少？",
            "answers": [
              "0.3"
            ],
            "explanation": "y' = ky 的解為 y = Ce^(kt)，故係數就是 0.3。這是把微分方程轉成指數模型最直接的方式。"
          },
          {
            "prompt": "半衰期與 k 的關係是？",
            "options": [
              "t½ = ln2 / |k|",
              "t½ = k / ln2",
              "t½ = ln2 · |k|",
              "t½ = 1/k"
            ],
            "answer": 0,
            "explanation": "由 e^(kt) = 1/2 解得 t = ln2/|k|。分子是 ln2 而非 ln10，因為我們要的是「剩一半」的時間。"
          },
          {
            "type": "input",
            "prompt": "y = 50·e^(0.2t)，成長率 k 等於多少？",
            "answers": [
              "0.2"
            ],
            "explanation": "指數部分為 0.2t，故 k = 0.2。k 為正表示成長，數值代表每單位時間的相對成長率。"
          },
          {
            "type": "multipart",
            "prompt": "某放射性物質滿足 y = 100·e^(-0.1t)，t 以年計。",
            "parts": [
              {
                "type": "input",
                "prompt": "初始量是多少？",
                "answers": [
                  "100"
                ],
                "explanation": "t = 0 時 y = 100·1 = 100。"
              },
              {
                "type": "input",
                "prompt": "t = 10 時，指數 -0.1t 的值是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "-0.1 × 10 = -1。指數為負，符合衰減。"
              },
              {
                "type": "input",
                "prompt": "此時的量是初始量的多少倍？（以 e 表示，輸入 1/e 的形式請填 1/e）",
                "answers": [
                  "1/e"
                ],
                "explanation": "y(10) = 100·e^(-1) = 100/e，故為初始量的 1/e 倍。"
              }
            ],
            "explanation": "衰減模型的指數必為負。本題用 1/e 這個乾淨的值說明：每 10 年剩下約 37%，與 e 的定義直接相關。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-30",
        "title": "30 · 反三角函數",
        "intro": "學完這一節，你能由三角函數值反推角度、記住 arcsin 與 arctan 的定義域與值域，並對它們求導。反三角函數是積分中處理根號與平方和形式的關鍵。",
        "kind": "integral",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-12",
          "mendelson-calculus.skill-26"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：反三角函數是限制後的反函數"
          },
          {
            "type": "paragraph",
            "text": "三角函數本身不是一對一，必須限制區間才能反推。arcsin 限制在 [-π/2, π/2]，arccos 限制在 [0, π]，arctan 限制在 (-π/2, π/2)。這些限制就是值域。"
          },
          {
            "type": "formula",
            "text": "arcsin：定義域 [-1, 1]，值域 [-π/2, π/2]\narccos：定義域 [-1, 1]，值域 [0, π]\narctan：定義域 ℝ，值域 (-π/2, π/2)"
          },
          {
            "type": "heading",
            "text": "原理二：arcsin 與 arctan 的導數"
          },
          {
            "type": "paragraph",
            "text": "arcsin 的導數是 1/√(1-x²)，在端點趨向無窮，因為那裡切線垂直。arctan 的導數是 1/(1+x²)，恆正且遞減，說明圖形處處上升但越來越平。"
          },
          {
            "type": "formula",
            "text": "(arcsin x)' = 1/√(1 - x²)\n(arctan x)' = 1/(1 + x²)"
          },
          {
            "type": "heading",
            "text": "原理三：這些導數是積分公式的來源"
          },
          {
            "type": "paragraph",
            "text": "反過來看，1/√(1-x²) 的積分是 arcsin x，1/(1+x²) 的積分是 arctan x。這兩個形式在積分中出現頻率極高，記住導數就等於記住積分。"
          },
          {
            "type": "formula",
            "text": "∫ dx/√(1-x²) = arcsin x + C\n∫ dx/(1+x²) = arctan x + C"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認輸入值在定義域內；arcsin 只接受 [-1,1]。"
          },
          {
            "type": "paragraph",
            "text": "第二步，回想對應的特殊角：arcsin(1/2) = π/6、arctan(1) = π/4。"
          },
          {
            "type": "paragraph",
            "text": "第三步，求導時套公式，複合形式用鏈式法則。"
          },
          {
            "type": "paragraph",
            "text": "第四步，需要切線時，先算該點導數與函數值。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用 sin 或 tan 回代驗證：sin(arcsin x) = x。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忽略值域限制。arcsin(1/2) 只取 π/6，不是 5π/6，因為值域限制在 [-π/2, π/2]。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是 arcsin 的導數漏掉根號。是 1/√(1-x²)，不是 1/(1-x²)。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把 arctan 的導數與 arcsin 混淆。arctan 是 1/(1+x²)，沒有根號。"
          }
        ],
        "questions": [
          {
            "prompt": "arcsin(1) 等於？",
            "options": [
              "π/2",
              "π",
              "0",
              "π/4"
            ],
            "answer": 0,
            "explanation": "sin(π/2) = 1，且 π/2 在 arcsin 的值域 [-π/2, π/2] 內，故 arcsin(1) = π/2。這是值域上限。"
          },
          {
            "type": "input",
            "prompt": "arctan(1) 等於多少？（π 請寫 pi）",
            "answers": [
              "pi/4"
            ],
            "explanation": "tan(π/4) = 1，且 π/4 在 arctan 的值域內，故答案為 π/4。這是反三角函數最常用的特殊值之一。"
          },
          {
            "type": "input",
            "prompt": "arcsin(0) 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "sin(0) = 0，且 0 在值域內，故 arcsin(0) = 0。原點是 arcsin 圖形的對稱中心。"
          },
          {
            "prompt": "(arctan x)' 等於？",
            "options": [
              "1/(1 + x²)",
              "1/√(1 - x²)",
              "1/(1 - x²)",
              "-1/(1 + x²)"
            ],
            "answer": 0,
            "explanation": "arctan 的導數是 1/(1+x²)，沒有根號且恆正。1/√(1-x²) 是 arcsin 的導數，兩者常被混淆。"
          },
          {
            "type": "input",
            "prompt": "(arcsin x)' 在 x = 0 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "導數為 1/√(1-x²)，代入 0 得 1/1 = 1。這說明 arcsin 在原點的切線斜率為 1，與 sin 在原點的行為對稱。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 y = arctan x 在 x = 0 處的切線。",
            "parts": [
              {
                "type": "input",
                "prompt": "切線斜率是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "y' = 1/(1+x²)，代入 0 得 1。"
              },
              {
                "type": "input",
                "prompt": "切點的 y 座標是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "arctan 0 = 0，故切點為原點。"
              },
              {
                "type": "input",
                "prompt": "切線的 y 截距是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "過原點且斜率 1 的直線是 y = x，y 截距為 0。"
              }
            ],
            "explanation": "arctan 在原點的切線是 y = x，與 sin、tan 在原點的行為一致。這也是小角度近似 tan θ ≈ θ 的來源。"
          },
          {
            "type": "input",
            "prompt": "arccos(0) 等於多少？（π 請寫 pi）",
            "answers": [
              "pi/2"
            ],
            "explanation": "cos(π/2) = 0，且 π/2 在 arccos 的值域 [0, π] 內，故答案為 π/2。"
          },
          {
            "prompt": "arcsin 的值域是？",
            "options": [
              "[-π/2, π/2]",
              "[0, π]",
              "(-π/2, π/2)",
              "所有實數"
            ],
            "answer": 0,
            "explanation": "為了讓 sin 一對一，arcsin 的值域限制在 [-π/2, π/2]，兩端都包含。(-π/2, π/2) 是 arctan 的值域，不包含端點。"
          },
          {
            "type": "input",
            "prompt": "(arctan x)' 在 x = 1 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "導數 1/(1+x²)，代入 1 得 1/2。這說明 arctan 在 x=1 處的斜率已降到原點的一半。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 arcsin(1/2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "它的值是多少？（π 請寫 pi）",
                "answers": [
                  "pi/6"
                ],
                "explanation": "sin(π/6) = 1/2，且 π/6 在值域內，故 arcsin(1/2) = π/6。"
              },
              {
                "type": "input",
                "prompt": "sin(π/6) 等於多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "這是特殊角：sin 30° = 1/2。回代驗證確認 arcsin 的答案正確。"
              }
            ],
            "explanation": "反三角函數的答案必須落在指定值域內。arcsin(1/2) 只取 π/6，不取 5π/6，因為後者不在 [-π/2, π/2] 內。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-31",
        "title": "31 · 分部積分",
        "intro": "學完這一節，你能對兩個函數相乘的積分使用分部積分，把難積的部分轉成容易積的部分。這是處理 x·eˣ、x·sin x、ln x 這類函數的標準方法。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-27"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：乘積法則反過來用"
          },
          {
            "type": "paragraph",
            "text": "乘積法則是 (uv)' = u'v + uv'。兩邊積分並移項，就得到分部積分公式。它把「u 乘 dv 的積分」換成「uv 減去 v 乘 du 的積分」，目的是讓新的積分比原本容易。"
          },
          {
            "type": "formula",
            "text": "∫u dv = uv - ∫v du"
          },
          {
            "type": "heading",
            "text": "原理二：選 u 的原則"
          },
          {
            "type": "paragraph",
            "text": "選 u 要讓它求導後變簡單，選 dv 要讓它容易積。常用順序是對數、反三角、代數、三角、指數：排在前面的優先當 u。多項式乘指數時，多項式當 u，因為求導會降次。"
          },
          {
            "type": "formula",
            "text": "優先當 u：ln、arcsin/arctan、xⁿ、sin/cos、eˣ"
          },
          {
            "type": "heading",
            "text": "原理三：可能要用兩次"
          },
          {
            "type": "paragraph",
            "text": "有些積分用一次分部積分後，新的積分仍需再分一次，甚至會回到原積分。後者稱為循環型，可把原積分移到同一邊解出。x·eˣ、x·sin x 都只需一次；eˣ·sin x 需要兩次。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，把被積函數拆成 u 與 dv 兩部分。"
          },
          {
            "type": "paragraph",
            "text": "第二步，對 u 求導得 du，對 dv 積分得 v。"
          },
          {
            "type": "paragraph",
            "text": "第三步，套公式 uv - ∫v du。"
          },
          {
            "type": "paragraph",
            "text": "第四步，處理新的積分；必要時再分一次。"
          },
          {
            "type": "paragraph",
            "text": "第五步，求導驗證：把結果求導，應回到原被積函數。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是 u 與 dv 選反。若選 u = eˣ、dv = x dx，新的積分會變成 ∫(x²/2)eˣ dx，比原來更難。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是忘記 v 的符號或漏掉負號。套公式時要完整寫出 uv - ∫v du。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是定積分時忘記對 uv 這一項也代上下限。uv 是整體，必須一起代。"
          }
        ],
        "questions": [
          {
            "prompt": "分部積分的公式是？",
            "options": [
              "∫u dv = uv - ∫v du",
              "∫u dv = uv + ∫v du",
              "∫u dv = u'v - uv'",
              "∫u dv = ∫u · ∫dv"
            ],
            "answer": 0,
            "explanation": "由乘積法則移項得到：∫u dv = uv - ∫v du。減號不可寫成加號，否則結果會多出一倍的 ∫v du。"
          },
          {
            "type": "input",
            "prompt": "∫0¹ x·eˣ dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "取 u = x、dv = eˣdx，得 du = dx、v = eˣ。分部積分為 xeˣ - ∫eˣdx = xeˣ - eˣ。代入 1 得 0，代入 0 得 -1，相減為 1。"
          },
          {
            "type": "input",
            "prompt": "∫1^e ln x dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "取 u = ln x、dv = dx，得 du = dx/x、v = x。結果為 x ln x - x。代入 e 得 0，代入 1 得 -1，相減為 1。這是 ln x 積分的標準做法。"
          },
          {
            "prompt": "分部積分中選擇 u 的常用原則是？",
            "options": [
              "讓 u 求導後變簡單，dv 容易積",
              "隨便選都可以",
              "u 一定選多項式",
              "u 一定選指數函數"
            ],
            "answer": 0,
            "explanation": "選 u 的目的是讓新積分更簡單。常用順序是對數、反三角、代數、三角、指數。多項式當 u 會因求導而降次，是最常見的選擇。"
          },
          {
            "type": "input",
            "prompt": "∫0^π x·sin x dx 等於多少？（π 請寫 pi）",
            "answers": [
              "pi"
            ],
            "explanation": "取 u = x、dv = sin x dx，得 v = -cos x。結果為 -x cos x + sin x。代入 π 得 π，代入 0 得 0，相減為 π。負號來自 cos 的積分。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫x·eˣ dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "取 u = x、dv = eˣdx，則 v = eˣ。在 x = 1 時 v 的值是多少？（e 請寫 e）",
                "answers": [
                  "e"
                ],
                "explanation": "v = eˣ，代入 1 得 e ≈ 2.718。指數函數積分不變形，所以 v 仍是 eˣ。"
              },
              {
                "type": "input",
                "prompt": "剩下的積分 ∫v du = ∫eˣdx，在 x = 0 時的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "∫eˣdx = eˣ，代入 0 得 1。這個值就是分部積分中第二項在該點的大小。"
              },
              {
                "type": "input",
                "prompt": "在 x = 1 時，xeˣ - eˣ 的值是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "代入 1 得 e - e = 0。這是定積分計算中上限那一項的值。"
              }
            ],
            "explanation": "x·eˣ 是分部積分的入門題：多項式當 u 降次，指數當 dv 不變形，一次就能解決。"
          },
          {
            "type": "input",
            "prompt": "∫0¹ eˣ dx 等於多少？（e 請寫 e）",
            "answers": [
              "e-1"
            ],
            "explanation": "eˣ 的原函數仍是 eˣ，代入 1 得 e，代入 0 得 1，相減為 e-1。這題不需要分部積分，用來對照。"
          },
          {
            "prompt": "分部積分最適合處理哪類積分？",
            "options": [
              "兩個不同類型函數的乘積",
              "單一多項式",
              "常數",
              "有理函數的分式"
            ],
            "answer": 0,
            "explanation": "分部積分處理的是「兩類函數相乘」且無法用代換解決的情形，如 x·eˣ、x·sin x、ln x。單一多項式用冪法則，有理分式用部分分式。"
          },
          {
            "type": "input",
            "prompt": "∫0^(π/2) x·cos x dx 等於多少？（π 請寫 pi）",
            "answers": [
              "pi/2-1"
            ],
            "explanation": "取 u = x、dv = cos x dx，得 v = sin x。結果為 x sin x + cos x。代入 π/2 得 π/2 + 0，代入 0 得 0 + 1，相減為 π/2 - 1。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫1^e ln x dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "取 u = ln x，則 du/dx = 1/x。在 x = e 時它的值是多少？（e 請寫 e）",
                "answers": [
                  "1/e"
                ],
                "explanation": "1/x 在 x = e 時為 1/e ≈ 0.368。這是 du 與 dx 的比值。"
              },
              {
                "type": "input",
                "prompt": "取 dv = dx，則 v = x。在 x = 2 時 v 的值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "v = x，代入 2 得 2。dv = dx 的積分就是 x 本身。"
              },
              {
                "type": "input",
                "prompt": "定積分的值是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "uv - ∫v du = x ln x - ∫1 dx = x ln x - x。代入 e 得 0，代入 1 得 -1，相減為 1。"
              }
            ],
            "explanation": "ln x 單獨出現時必須用分部積分，且要令 dv = dx。這是分部積分最經典的應用，結果 x ln x - x 值得記住。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-32",
        "title": "32 · 三角積分與代換",
        "intro": "學完這一節，你能處理含三角函數的積分：奇次用代換、偶次用半角公式、含根號用三角代換。這是積分技巧中最需要辨認模式的一類。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-30"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：奇次提出一個因子做代換"
          },
          {
            "type": "paragraph",
            "text": "遇到 sinᵐx·cosⁿx，若其中一個是奇次，就從奇次的那個提出一個因子，剩下的用 sin²+cos²=1 轉換，再令 u 為另一個函數。這樣 du 正好出現。"
          },
          {
            "type": "formula",
            "text": "∫sinᵐx·cosⁿx dx，m 為奇數時令 u = cos x"
          },
          {
            "type": "heading",
            "text": "原理二：偶次用半角公式降次"
          },
          {
            "type": "paragraph",
            "text": "若兩者都是偶次，代換無效，必須用半角公式把平方降為一次。這是因為平方的積分無法直接處理，降次後才能逐項積分。"
          },
          {
            "type": "formula",
            "text": "sin²x = (1 - cos 2x)/2\ncos²x = (1 + cos 2x)/2"
          },
          {
            "type": "heading",
            "text": "原理三：含根號用三角代換"
          },
          {
            "type": "paragraph",
            "text": "√(a²-x²) 令 x = a sin θ，√(a²+x²) 令 x = a tan θ，√(x²-a²) 令 x = a sec θ。目的是用恆等式把根號消掉，代價是要處理 θ 的範圍。"
          },
          {
            "type": "formula",
            "text": "√(a² - x²)：x = a sin θ\n√(a² + x²)：x = a tan θ"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，判斷是乘積、單一偶次，還是含根號。"
          },
          {
            "type": "paragraph",
            "text": "第二步，乘積且有奇次：提出一個因子，令另一個為 u。"
          },
          {
            "type": "paragraph",
            "text": "第三步，兩者皆偶次：用半角公式降次，逐項積分。"
          },
          {
            "type": "paragraph",
            "text": "第四步，含根號：選對應的三角代換，化簡後積分，最後換回 x。"
          },
          {
            "type": "paragraph",
            "text": "第五步，求導驗證，或用特殊值檢查數值。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是對偶次直接代換。∫sin²x dx 不能令 u = sin x，因為 du = cos x dx 在分子上找不到。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是三角代換後忘記換回 x。答案必須用原本的變量表示。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略 sin²+cos²=1 的用途。提出一個因子後，剩下的偶次冪要靠這個恆等式轉成另一函數。"
          }
        ],
        "questions": [
          {
            "prompt": "∫sin x·cos x dx 最適合用什麼方法？",
            "options": [
              "令 u = sin x 代換",
              "半角公式",
              "分部積分",
              "部分分式"
            ],
            "answer": 0,
            "explanation": "cos x dx 正好是 sin x 的微分，故令 u = sin x，積分得 u²/2 = sin²x/2 + C。這是奇次乘積的標準做法。"
          },
          {
            "type": "input",
            "prompt": "∫0^(π/2) sin x dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "原函數 -cos x，代入 π/2 得 0，代入 0 得 -1，相減為 1。這是正弦在四分之一週期的面積。"
          },
          {
            "type": "input",
            "prompt": "∫0^(π/2) cos x dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "原函數 sin x，代入 π/2 得 1，代入 0 得 0，結果 1。與上題對稱，因為 sin 與 cos 在此區間互為鏡像。"
          },
          {
            "prompt": "∫sin²x dx 應該用什麼方法？",
            "options": [
              "半角公式降次",
              "令 u = sin x",
              "分部積分",
              "直接套冪法則"
            ],
            "answer": 0,
            "explanation": "偶次無法用代換，必須用 sin²x = (1-cos2x)/2 降為一次。代換 u = sin x 會缺少 cos x 因子，行不通。"
          },
          {
            "type": "input",
            "prompt": "∫0^(π/2) 2·sin x·cos x dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "2 sin x cos x = sin 2x，積分得 -cos(2x)/2。代入 π/2 得 1/2，代入 0 得 -1/2，相減為 1。用倍角公式可大幅簡化。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫sin x·cos x dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "令 u = sin x，則 du/dx = cos x。在 x = 0 時 cos x 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "cos 0 = 1。所以在 x = 0 附近，du ≈ dx，代換幾乎是恆等的。"
              },
              {
                "type": "input",
                "prompt": "積分結果中 u 的次方是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "∫u du = u²/2，故次方為 2。結果為 sin²x/2 + C。"
              },
              {
                "type": "input",
                "prompt": "從 0 到 π/2 的定積分值是多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "sin²(π/2)/2 - sin²(0)/2 = 1/2 - 0 = 1/2。"
              }
            ],
            "explanation": "奇次乘積的核心是「湊出 du」。cos x dx 恰好是 sin x 的微分，所以代換幾乎自動成立。"
          },
          {
            "type": "input",
            "prompt": "∫0^(π/4) sec²x dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "sec²x 的原函數是 tan x，代入 π/4 得 1，代入 0 得 0，結果 1。這是 tan 導數公式的直接應用。"
          },
          {
            "prompt": "遇到 √(1 - x²) 時，應該用哪種代換？",
            "options": [
              "x = sin θ",
              "x = tan θ",
              "x = sec θ",
              "u = 1 - x²"
            ],
            "answer": 0,
            "explanation": "x = sin θ 使 1 - x² = cos²θ，根號消失。x = tan θ 用於 √(1+x²)，x = sec θ 用於 √(x²-1)。"
          },
          {
            "type": "input",
            "prompt": "∫0^(π/2) sin(2x) dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "原函數 -cos(2x)/2，代入 π/2 得 -cos π/2 = 1/2，代入 0 得 -1/2，相減為 1。內層係數 2 在積分時要除以 2。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∫0^(π/4) cos(2x) dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "cos(2x) 的原函數中，sin(2x) 的係數是多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "∫cos(2x)dx = sin(2x)/2，係數為 1/2，來自除以內層導數 2。"
              },
              {
                "type": "input",
                "prompt": "原函數在 π/4 的值是多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "sin(π/2)/2 = 1/2。"
              },
              {
                "type": "input",
                "prompt": "定積分的值是多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "1/2 - sin(0)/2 = 1/2 - 0 = 1/2。"
              }
            ],
            "explanation": "三角函數的積分要注意內層係數：∫cos(kx)dx = sin(kx)/k。漏掉除以 k 是最常見的錯誤。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-33",
        "title": "33 · 部分分式",
        "intro": "學完這一節，你能把有理函數拆成簡單分式之和，再逐項積分。這是處理分母可因式分解的分式積分的標準方法，也是積分技巧中最後一塊拼圖。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-26",
          "mendelson-calculus.skill-30"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：先分解分母"
          },
          {
            "type": "paragraph",
            "text": "有理函數是兩個多項式相除。若分子的次數不低於分母，先做長除法分出多項式部分；剩下的真分式再分解。分母能分解成一次或二次因式，才能拆成部分分式。"
          },
          {
            "type": "formula",
            "text": "P(x)/Q(x)：先確認 deg P < deg Q\n否則先做長除法"
          },
          {
            "type": "heading",
            "text": "原理二：每個因式對應一個待定係數"
          },
          {
            "type": "paragraph",
            "text": "分母有 (x-a) 就設 A/(x-a)；有重根 (x-a)² 就設 A/(x-a) + B/(x-a)²；有不可約二次式就設 (Cx+D)/(二次式)。係數用通分比較或代入特殊值求出。"
          },
          {
            "type": "formula",
            "text": "1/[(x-a)(x-b)] = A/(x-a) + B/(x-b)"
          },
          {
            "type": "heading",
            "text": "原理三：拆完就能逐項積分"
          },
          {
            "type": "paragraph",
            "text": "部分分式的價值在於每一項都能直接積分：A/(x-a) 積成 A·ln|x-a|；A/(x-a)² 積成 -A/(x-a)。這是一開始無法直接處理的分式，被化成了基本形式。"
          },
          {
            "type": "formula",
            "text": "∫A/(x-a) dx = A·ln|x-a| + C\n∫A/(x-a)² dx = -A/(x-a) + C"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認是真分式；不是就先長除法。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把分母因式分解，列出對應的部分分式形式。"
          },
          {
            "type": "paragraph",
            "text": "第三步，通分後比較係數，或用特殊值代入求係數。"
          },
          {
            "type": "paragraph",
            "text": "第四步，逐項積分。"
          },
          {
            "type": "paragraph",
            "text": "第五步，求導驗證，或通分檢查分解是否正確。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是重根只設一項。(x-a)² 需要 A/(x-a) 與 B/(x-a)² 兩項，少一項就解不出正確係數。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是分子次數不低於分母時直接分解。必須先做長除法，否則部分分式的形式不成立。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是求出係數後忘記加絕對值。ln|x-a| 的絕對值不可省，因為 x 可能在 a 的左側。"
          }
        ],
        "questions": [
          {
            "prompt": "部分分式法適用於哪類函數？",
            "options": [
              "有理函數（多項式相除）",
              "三角函數",
              "指數函數",
              "根號函數"
            ],
            "answer": 0,
            "explanation": "部分分式專門處理有理函數，也就是兩個多項式相除。三角、指數、根號需要其他方法。"
          },
          {
            "type": "input",
            "prompt": "1/[(x)(x+1)] = A/x + B/(x+1)，則 A 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "通分得 1 = A(x+1) + Bx。令 x = 0 得 1 = A，故 A = 1。代入特殊值是求係數最快的方法。"
          },
          {
            "type": "input",
            "prompt": "承上題，B 等於多少？",
            "answers": [
              "-1"
            ],
            "explanation": "令 x = -1 得 1 = -B，故 B = -1。也可比較 x 的係數：A + B = 0，配合 A = 1 得 B = -1。"
          },
          {
            "prompt": "分解部分分式的第一步是？",
            "options": [
              "把分母因式分解",
              "先對分子求導",
              "先積分",
              "先求極限"
            ],
            "answer": 0,
            "explanation": "分母的因式結構決定部分分式的形式：一次因式、重根、不可約二次式各有對應設法。不先分解就無法列出正確形式。"
          },
          {
            "type": "input",
            "prompt": "∫1² (1/x²) dx 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "1/x² 的原函數是 -1/x，代入 2 得 -1/2，代入 1 得 -1，相減為 1/2。這是最簡單的有理函數積分。"
          },
          {
            "type": "multipart",
            "prompt": "將 (x+3)/[(x+1)(x+2)] 分解為 A/(x+1) + B/(x+2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "A 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "通分得 x+3 = A(x+2) + B(x+1)。令 x = -1 得 2 = A，故 A = 2。"
              },
              {
                "type": "input",
                "prompt": "B 等於多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "令 x = -2 得 1 = -B，故 B = -1。"
              },
              {
                "type": "input",
                "prompt": "原式可寫成 2/(x+1) 減去多少除以 (x+2)？填被減的係數絕對值。",
                "answers": [
                  "1"
                ],
                "explanation": "B = -1，故為 2/(x+1) - 1/(x+2)，被減的係數絕對值為 1。"
              }
            ],
            "explanation": "部分分式的係數求法：代入使某一因式為 0 的 x 值，一次消去一個未知數。這比展開比較係數快得多。"
          },
          {
            "type": "input",
            "prompt": "1/(x² - 1) = A/(x-1) + B/(x+1)，則 A 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "通分得 1 = A(x+1) + B(x-1)。令 x = 1 得 1 = 2A，故 A = 1/2。這是平方差的標準分解。"
          },
          {
            "prompt": "分母有重根 (x-a)² 時，部分分式應該設幾項？",
            "options": [
              "兩項：A/(x-a) 與 B/(x-a)²",
              "一項：A/(x-a)²",
              "一項：A/(x-a)",
              "三項"
            ],
            "answer": 0,
            "explanation": "重根必須從一次到最高次各設一項，否則係數無法配平。這是部分分式最常見的遺漏。"
          },
          {
            "type": "input",
            "prompt": "∫1^e (1/x) dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "1/x 的原函數是 ln|x|，代入 e 得 1，代入 1 得 0，結果 1。部分分式拆完後，每一項都會回到這種基本形式。"
          },
          {
            "type": "multipart",
            "prompt": "將 1/[x(x+2)] 分解為 A/x + B/(x+2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "A 等於多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "通分得 1 = A(x+2) + Bx。令 x = 0 得 1 = 2A，故 A = 1/2。"
              },
              {
                "type": "input",
                "prompt": "B 等於多少？",
                "answers": [
                  "-1/2"
                ],
                "explanation": "令 x = -2 得 1 = -2B，故 B = -1/2。兩係數互為相反數，因為分母因式對稱。"
              }
            ],
            "explanation": "本題的兩個係數大小相等、符號相反，這是分母為 x(x+a) 形式的規律。可用通分快速驗證。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-34",
        "title": "34 · 旋轉曲面面積",
        "intro": "學完這一節，你能算出曲線繞軸旋轉所生成的曲面面積。與體積不同，曲面面積要同時考慮旋轉半徑與曲線本身的長度，因此公式裡出現弧長元素。",
        "kind": "integral",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-24",
          "mendelson-calculus.skill-32"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：把曲面切成細環"
          },
          {
            "type": "paragraph",
            "text": "曲線上一小段繞軸旋轉，形成一個細環，展開後近似長方形：長是這一小段的弧長 ds，寬是旋轉一週的周長 2πf(x)。把這些細環加起來就是曲面面積。"
          },
          {
            "type": "formula",
            "text": "dS = 2π·f(x)·ds = 2π·f(x)·√(1 + (y')²) dx"
          },
          {
            "type": "heading",
            "text": "原理二：公式裡有兩個因子"
          },
          {
            "type": "paragraph",
            "text": "2πf(x) 是旋轉半徑造成的周長，√(1+(y')²) 是弧長元素。少了前者變成弧長，少了後者變成圓柱側面積。兩者都必須有。"
          },
          {
            "type": "formula",
            "text": "S = 2π ∫a^b f(x)·√(1 + (y')²) dx"
          },
          {
            "type": "heading",
            "text": "原理三：常數函數退化為圓柱"
          },
          {
            "type": "paragraph",
            "text": "若 f(x) = r 為常數，則 y' = 0，公式變成 2πr(b-a)，正是圓柱側面積。這是驗算曲面面積最方便的特例。"
          },
          {
            "type": "formula",
            "text": "f(x) = r  ⇒  S = 2πr(b - a)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，寫出 f(x) 與 y'，算 √(1+(y')²)。"
          },
          {
            "type": "paragraph",
            "text": "第二步，乘上 2πf(x)，寫成定積分。"
          },
          {
            "type": "paragraph",
            "text": "第三步，能化簡就先化簡根號內。"
          },
          {
            "type": "paragraph",
            "text": "第四步，找原函數，代上下限。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用圓柱特例檢查量綱與數值。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是漏掉弧長因子，只算 2π∫f dx。那只得到「把曲線壓平後的側面」，不是真實曲面。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是漏掉 2π，得到的是「半圈」的面積。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把 f(x) 當成常數提出積分號。只有當 f 確實是常數時才可以。"
          }
        ],
        "questions": [
          {
            "prompt": "旋轉曲面面積的公式是？",
            "options": [
              "2π∫f(x)√(1 + (y')²) dx",
              "2π∫f(x) dx",
              "π∫[f(x)]² dx",
              "∫√(1 + (y')²) dx"
            ],
            "answer": 0,
            "explanation": "曲面面積同時需要旋轉周長 2πf(x) 與弧長元素 √(1+(y')²)。少了任一個都會退化成別的量。"
          },
          {
            "type": "input",
            "prompt": "y = x 繞 x 軸旋轉，在 [0, 1] 的表面積是多少？（π 請寫 pi）",
            "answers": [
              "pi*sqrt(2)"
            ],
            "explanation": "f(x) = x、y' = 1、√2 為常數。S = 2π∫0¹ x·√2 dx = 2π√2·(1/2) = π√2。這是圓錐側面積的特例。"
          },
          {
            "type": "input",
            "prompt": "y = 2 繞 x 軸旋轉，在 [0, 3] 的表面積是多少？（π 請寫 pi）",
            "answers": [
              "12*pi"
            ],
            "explanation": "f(x) = 2、y' = 0，S = 2π·2·3 = 12π。這是半徑 2、高 3 的圓柱側面積，與 2πrh 一致。"
          },
          {
            "prompt": "曲面面積與圓柱側面積的關係是？",
            "options": [
              "常數函數時退化為 2πrh",
              "兩者無關",
              "曲面面積較小",
              "曲面面積等於 πr²h"
            ],
            "answer": 0,
            "explanation": "當 f 為常數時，曲面就是圓柱側面，公式給出 2πr(b-a) = 2πrh。這是驗算曲面面積的最佳特例。"
          },
          {
            "type": "input",
            "prompt": "y = x 繞 x 軸旋轉，在 [0, 2] 的表面積是多少？（π 請寫 pi）",
            "answers": [
              "4*pi*sqrt(2)"
            ],
            "explanation": "S = 2π√2∫0² x dx = 2π√2·2 = 4π√2。與 [0,1] 的結果相比，區間加倍使面積也加倍，因為半徑與長度都按比例增加。"
          },
          {
            "type": "multipart",
            "prompt": "設 y = 3 繞 x 軸旋轉，x 從 0 到 2。",
            "parts": [
              {
                "type": "input",
                "prompt": "旋轉半徑是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "曲線是水平線 y = 3，到 x 軸的距離恆為 3。"
              },
              {
                "type": "input",
                "prompt": "弧長元素 √(1 + (y')²) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "y' = 0，故 √(1+0) = 1。水平線的弧長元素就是 dx。"
              },
              {
                "type": "input",
                "prompt": "表面積是多少？（π 請寫 pi）",
                "answers": [
                  "12*pi"
                ],
                "explanation": "S = 2π·3·2 = 12π，即 2πrh。"
              }
            ],
            "explanation": "常數函數是最容易檢查的情形：曲面就是圓柱，面積必為 2πrh。任何曲面面積計算都應在此退化正確。"
          },
          {
            "type": "input",
            "prompt": "半徑 2、高 3 的圓柱側面積是多少？（π 請寫 pi）",
            "answers": [
              "12*pi"
            ],
            "explanation": "側面積 = 2πrh = 2π·2·3 = 12π。不含上下底，因為曲面面積只算旋轉產生的側面。"
          },
          {
            "prompt": "曲面面積公式中 √(1 + (y')²) 的來源是？",
            "options": [
              "弧長元素",
              "圓周長",
              "斜率",
              "面積元素"
            ],
            "answer": 0,
            "explanation": "√(1+(y')²)dx 是曲線的弧長元素 ds，代表每一小段的實際長度。曲面面積等於周長乘上這段長度。"
          },
          {
            "type": "input",
            "prompt": "y = 1 繞 x 軸旋轉，在 [0, 5] 的表面積是多少？（π 請寫 pi）",
            "answers": [
              "10*pi"
            ],
            "explanation": "S = 2π·1·5 = 10π。半徑 1、高 5 的圓柱側面積。"
          },
          {
            "type": "multipart",
            "prompt": "設 y = x 繞 x 軸旋轉，x 從 0 到 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "弧長元素 √(1 + (y')²) 等於多少？",
                "answers": [
                  "sqrt(2)"
                ],
                "explanation": "y' = 1，√(1+1) = √2。"
              },
              {
                "type": "input",
                "prompt": "積分中 x 的平均值（即 ∫x dx 除以區間長度）是多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "∫0¹ x dx = 1/2，除以長度 1 得 1/2。這是旋轉半徑的平均值。"
              },
              {
                "type": "input",
                "prompt": "表面積是多少？（π 請寫 pi）",
                "answers": [
                  "pi*sqrt(2)"
                ],
                "explanation": "S = 2π·√2·(1/2) = π√2。也可理解為 2π 乘平均半徑乘弧長。"
              }
            ],
            "explanation": "曲面面積可讀成「2π × 平均半徑 × 弧長」。本題平均半徑 1/2、弧長 √2，乘積再乘 2π 就是答案。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-35",
        "title": "35 · 功與形心",
        "intro": "學完這一節，你能用積分算變力所做的功，並求出平面區域的形心位置。這是積分在物理與工程中的兩個典型應用：一個是累加力，一個是加權平均。",
        "kind": "integral",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-23",
          "mendelson-calculus.skill-31"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：功是力對位移的累加"
          },
          {
            "type": "paragraph",
            "text": "定力做功等於力乘位移。變力則要把位移切成小段，每段用力乘小位移，再積分。這是「累加」型應用，與面積、體積同一個思路。"
          },
          {
            "type": "formula",
            "text": "W = ∫a^b F(x) dx"
          },
          {
            "type": "heading",
            "text": "原理二：形心是加權平均位置"
          },
          {
            "type": "paragraph",
            "text": "形心是區域的幾何中心，等於「位置乘面積」的積分除以總面積。直觀上，它把每個小塊按其面積加權平均，面積大的地方權重高。"
          },
          {
            "type": "formula",
            "text": "x̄ = ∫a^b x·f(x) dx / ∫a^b f(x) dx"
          },
          {
            "type": "heading",
            "text": "原理三：兩者都是「乘上位置再平均」"
          },
          {
            "type": "paragraph",
            "text": "功與形心的共同結構是：把某個量乘上位置（或位移）再累加。認出這個結構，就能判斷該用哪個公式，而不必死記。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，判斷是求功還是求形心。"
          },
          {
            "type": "paragraph",
            "text": "第二步，求功：寫出 F(x)，直接積分。"
          },
          {
            "type": "paragraph",
            "text": "第三步，求形心：先算分母（總面積），再算分子（x 乘面積元素）。"
          },
          {
            "type": "paragraph",
            "text": "第四步，相除得到形心座標。"
          },
          {
            "type": "paragraph",
            "text": "第五步，檢查合理性：形心必落在區域內部，功必為正（若力與位移同向）。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是求形心時忘記除以總面積，只算出分子。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把定力公式 F·d 直接用在變力上。變力必須積分。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是形心與質心混為一談。均勻密度時兩者相同，密度不均時不同。"
          }
        ],
        "questions": [
          {
            "prompt": "變力做功的公式是？",
            "options": [
              "W = ∫F(x) dx",
              "W = F·d",
              "W = ∫F'(x) dx",
              "W = F/d"
            ],
            "answer": 0,
            "explanation": "變力要把位移切成小段累加，故為積分。F·d 只適用於定力，是積分在 F 為常數時的特例。"
          },
          {
            "type": "input",
            "prompt": "F(x) = 3x，從 x = 0 到 x = 2 所做的功是多少？",
            "answers": [
              "6"
            ],
            "explanation": "W = ∫0² 3x dx = 3·(4/2) = 6。也可用平均力 3（在 x=1 處）乘位移 2 得到 6，兩法一致。"
          },
          {
            "type": "input",
            "prompt": "F(x) = 2（定力），從 x = 0 到 x = 5 所做的功是多少？",
            "answers": [
              "10"
            ],
            "explanation": "W = 2·5 = 10。定力時積分退化為乘法，這是最基本的檢驗。"
          },
          {
            "prompt": "形心代表什麼？",
            "options": [
              "區域的幾何中心",
              "區域的面積",
              "區域的周長",
              "區域的最大值"
            ],
            "answer": 0,
            "explanation": "形心是區域的幾何中心，用面積加權平均位置得到。它與面積、周長是不同的量，但都可由積分求得。"
          },
          {
            "type": "input",
            "prompt": "區域 y = x（0 ≤ x ≤ 2）的形心 x 座標是多少？",
            "answers": [
              "4/3"
            ],
            "explanation": "分子 ∫0² x·x dx = 8/3，分母 ∫0² x dx = 2，相除得 4/3。三角形形心在底邊的 2/3 處，與 4/3 一致。"
          },
          {
            "type": "multipart",
            "prompt": "設 F(x) = x²，從 x = 0 到 x = 3。",
            "parts": [
              {
                "type": "input",
                "prompt": "F 的原函數是什麼？（填 x 的次方數）",
                "answers": [
                  "3"
                ],
                "explanation": "x² 的原函數是 x³/3，次方為 3。"
              },
              {
                "type": "input",
                "prompt": "所做的功是多少？",
                "answers": [
                  "9"
                ],
                "explanation": "W = x³/3 在 3 的值 = 27/3 = 9，在 0 的值為 0。"
              }
            ],
            "explanation": "變力做功只需一步積分。本題的力隨位置平方增加，所以功比定力情形大得多。"
          },
          {
            "type": "input",
            "prompt": "彈簧力 F = 2x，從 x = 0 拉伸到 x = 3，所做的功是多少？",
            "answers": [
              "9"
            ],
            "explanation": "W = ∫0³ 2x dx = x² 在 3 的值 = 9。彈簧的功與伸長量的平方成正比，這是虎克定律的結果。"
          },
          {
            "prompt": "為什麼變力做功需要用積分？",
            "options": [
              "因為力隨位置改變，必須逐段累加",
              "因為力是常數",
              "因為功是向量",
              "因為積分比較快"
            ],
            "answer": 0,
            "explanation": "力在不同位置大小不同，不能只用一個 F 乘總位移。積分把每一小段的 F·dx 累加起來，才是真實的功。"
          },
          {
            "type": "input",
            "prompt": "區域 y = 1（0 ≤ x ≤ 4）的形心 x 座標是多少？",
            "answers": [
              "2"
            ],
            "explanation": "均勻矩形的形心在正中，即 (0+4)/2 = 2。用公式：分子 ∫0⁴ x dx = 8，分母 4，相除得 2。"
          },
          {
            "type": "multipart",
            "prompt": "區域 y = x²（0 ≤ x ≤ 1）。",
            "parts": [
              {
                "type": "input",
                "prompt": "分子 ∫0¹ x·x² dx 等於多少？",
                "answers": [
                  "1/4"
                ],
                "explanation": "∫0¹ x³ dx = 1/4。這是「位置乘面積元素」的累加。"
              },
              {
                "type": "input",
                "prompt": "分母 ∫0¹ x² dx 等於多少？",
                "answers": [
                  "1/3"
                ],
                "explanation": "∫0¹ x² dx = 1/3，這是區域的總面積。"
              },
              {
                "type": "input",
                "prompt": "形心的 x 座標是多少？",
                "answers": [
                  "3/4"
                ],
                "explanation": "分子除以分母：(1/4)/(1/3) = 3/4。"
              }
            ],
            "explanation": "形心計算的兩步：先算分子（加權位置），再算分母（總面積），最後相除。分母忘了算是最常見的失誤。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-36",
        "title": "36 · 廣義積分",
        "intro": "學完這一節，你能處理積分區間無限、或被積函數在端點趨向無窮的情形，並判斷它收斂還是發散。這是積分與極限的結合，也是機率與物理問題的必備工具。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-28",
          "mendelson-calculus.skill-31",
          "mendelson-calculus.skill-33"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：無窮限用極限定義"
          },
          {
            "type": "paragraph",
            "text": "積分上限為無窮，不能直接代入。正確做法是先把上限寫成變量 b，算出定積分，再讓 b 趨向無窮取極限。若極限存在，稱積分收斂；否則發散。"
          },
          {
            "type": "formula",
            "text": "∫a^∞ f(x) dx = lim(b→∞) ∫a^b f(x) dx"
          },
          {
            "type": "heading",
            "text": "原理二：瑕積分同樣用極限"
          },
          {
            "type": "paragraph",
            "text": "若函數在端點趨向無窮（例如 1/√x 在 0），也不能直接代入。要把端點換成變量，取極限。這叫瑕積分，處理方式與無窮限完全相同。"
          },
          {
            "type": "formula",
            "text": "∫0^1 x^(-1/2) dx = lim(a→0⁺) ∫a^1 x^(-1/2) dx"
          },
          {
            "type": "heading",
            "text": "原理三：p 積分的收斂判別"
          },
          {
            "type": "paragraph",
            "text": "∫1^∞ 1/x^p dx 在 p > 1 時收斂，p ≤ 1 時發散。這是最常用的比較基準：其他積分可與它比較來判斷收斂性。注意 ∫1^∞ 1/x 雖然函數趨向 0，積分卻發散。"
          },
          {
            "type": "formula",
            "text": "∫1^∞ 1/x^p dx 收斂  ⇔  p > 1"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，判斷是哪一種廣義：無窮限，還是端點無窮。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把有問題的端點換成變量，寫成正常定積分。"
          },
          {
            "type": "paragraph",
            "text": "第三步，算出定積分的值（含變量）。"
          },
          {
            "type": "paragraph",
            "text": "第四步，取極限；極限存在則收斂，並給出值。"
          },
          {
            "type": "paragraph",
            "text": "第五步，若極限不存在或為無窮，判定發散，不要寫出數值。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是直接把無窮代入原函數，寫出「答案為 0」之類的結果。必須先取極限。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為函數趨向 0 就一定收斂。1/x 趨向 0 但積分發散，這是本章最重要的反例。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略端點無窮的情形，只檢查無窮限。1/√x 在 0 也發散。"
          }
        ],
        "questions": [
          {
            "prompt": "∫1^∞ (1/x²) dx 是否收斂？",
            "options": [
              "收斂",
              "發散",
              "無法判斷",
              "等於無窮"
            ],
            "answer": 0,
            "explanation": "p = 2 > 1，依 p 積分判別法收斂。原函數 -1/x，上限趨向 0、下限為 -1，故值為 1。"
          },
          {
            "type": "input",
            "prompt": "∫1^∞ (1/x²) dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "原函數 -1/x，從 1 到 b 的值為 1 - 1/b。令 b 趨向無窮，1/b 趨向 0，極限為 1。"
          },
          {
            "type": "input",
            "prompt": "∫1^∞ (1/x) dx 是否收斂？收斂填 1，發散填 0。",
            "answers": [
              "0"
            ],
            "explanation": "原函數 ln x，從 1 到 b 的值為 ln b。b 趨向無窮時 ln b 也趨向無窮，故發散。這是「函數趨向 0 但積分發散」的標準反例。"
          },
          {
            "prompt": "p 積分 ∫1^∞ 1/x^p dx 收斂的條件是？",
            "options": [
              "p > 1",
              "p ≥ 1",
              "p < 1",
              "p ≤ 1"
            ],
            "answer": 0,
            "explanation": "p > 1 時收斂，p ≤ 1 時發散。p = 1 恰好是分界，此時積分為 ln x，趨向無窮。"
          },
          {
            "type": "input",
            "prompt": "∫0¹ (1/√x) dx 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "1/√x = x^(-1/2)，原函數 2√x。代入 1 得 2，代入 0 得 0，故值為 2。這是端點無窮但積分收斂的例子。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 ∫1^b (1/x²) dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "1/x² 的原函數是什麼？（填 -1/x 的係數絕對值）",
                "answers": [
                  "1"
                ],
                "explanation": "∫x⁻²dx = -x⁻¹ = -1/x，係數絕對值為 1。"
              },
              {
                "type": "input",
                "prompt": "從 1 到 b 的定積分等於多少？（以 b 表示，填 1-1/b 中的常數項）",
                "answers": [
                  "1"
                ],
                "explanation": "代入 b 得 -1/b，代入 1 得 -1，相減為 1 - 1/b，常數項為 1。"
              },
              {
                "type": "input",
                "prompt": "當 b 趨向無窮時，極限是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "1/b 趨向 0，故極限為 1，積分收斂。"
              }
            ],
            "explanation": "廣義積分的三步：算定積分（含變量）、取極限、判定收斂。本題的極限存在且有限，故收斂於 1。"
          },
          {
            "type": "input",
            "prompt": "∫0^∞ e^(-x) dx 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "原函數 -e^(-x)，從 0 到 b 的值為 1 - e^(-b)。b 趨向無窮時 e^(-b) 趨向 0，極限為 1。這是機率密度函數的典型積分。"
          },
          {
            "prompt": "計算廣義積分的基本方法是？",
            "options": [
              "先算定積分，再取極限",
              "直接代入無窮",
              "忽略無窮端",
              "用微分"
            ],
            "answer": 0,
            "explanation": "廣義積分的定義就是極限：先得到含變量的定積分，再讓變量趨向問題端點。直接代入無窮在數學上沒有定義。"
          },
          {
            "type": "input",
            "prompt": "∫1^∞ (1/x³) dx 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "原函數 -1/(2x²)，從 1 到 b 的值為 1/2 - 1/(2b²)。b 趨向無窮時第二項趨向 0，極限為 1/2。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 ∫0¹ x^(-1/2) dx。",
            "parts": [
              {
                "type": "input",
                "prompt": "x^(-1/2) 的原函數是 2√x，在 x = 1 的值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "2√1 = 2。"
              },
              {
                "type": "input",
                "prompt": "在 x = 0 的值是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "2√0 = 0。雖然被積函數在 0 趨向無窮，原函數在該點有限。"
              },
              {
                "type": "input",
                "prompt": "廣義積分的值是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "2 - 0 = 2，積分收斂。這說明端點無窮不必然導致發散。"
              }
            ],
            "explanation": "瑕積分的關鍵是看原函數在問題端點是否有有限極限。本題原函數 2√x 在 0 為 0，故收斂。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-37",
        "title": "37 · 平面向量",
        "intro": "學完這一節，你能做向量的加法、純量乘法與點積，用點積算夾角並判斷垂直。向量是後面空間幾何、參數曲線與向量場的共同語言。",
        "kind": "base",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-03",
          "mendelson-calculus.skill-12"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：向量有方向與大小"
          },
          {
            "type": "paragraph",
            "text": "向量用一對分量表示，代表從起點到終點的位移。加法是分量相加，純量乘法是把每個分量乘上同一個數。這兩種運算讓向量可以像數一樣代數化處理。"
          },
          {
            "type": "formula",
            "text": "(a₁, a₂) + (b₁, b₂) = (a₁+b₁, a₂+b₂)\nk·(a₁, a₂) = (ka₁, ka₂)"
          },
          {
            "type": "heading",
            "text": "原理二：點積把兩個向量變成一個數"
          },
          {
            "type": "paragraph",
            "text": "點積是對應分量相乘再相加。它的幾何意義是「一個向量在另一個方向上的投影乘上長度」，因此能算出夾角。點積為正表示夾角小於 90 度，為負表示大於 90 度，為 0 表示垂直。"
          },
          {
            "type": "formula",
            "text": "a·b = a₁b₁ + a₂b₂ = |a||b|cos θ"
          },
          {
            "type": "heading",
            "text": "原理三：長度與單位向量"
          },
          {
            "type": "paragraph",
            "text": "向量的長度由勾股定理給出，等於各分量平方和開根號。把向量除以自己的長度，就得到同方向的單位向量，長度為 1。"
          },
          {
            "type": "formula",
            "text": "|a| = √(a₁² + a₂²)\n單位向量 = a / |a|"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，加法與純量乘法直接對分量操作。"
          },
          {
            "type": "paragraph",
            "text": "第二步，算點積：對應分量相乘再相加。"
          },
          {
            "type": "paragraph",
            "text": "第三步，算長度：平方和開根號。"
          },
          {
            "type": "paragraph",
            "text": "第四步，算夾角：cos θ = a·b / (|a||b|)。"
          },
          {
            "type": "paragraph",
            "text": "第五步，判斷垂直：點積為 0。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把點積算成向量。點積的結果是一個數，不是向量；分量相乘後要相加。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把垂直條件寫成「斜率相乘為 -1」。對向量而言，垂直就是點積為 0，這個判別對垂直線也適用。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是求單位向量時只除以分量個數，而不是除以長度。"
          }
        ],
        "questions": [
          {
            "prompt": "點積的定義是？",
            "options": [
              "a·b = |a||b|cos θ",
              "a·b = |a| + |b|",
              "a·b = |a||b|sin θ",
              "a·b 是向量"
            ],
            "answer": 0,
            "explanation": "點積等於兩向量長度乘積再乘夾角的餘弦，結果是一個純量。用 sin 的是叉積的大小，方向另計。"
          },
          {
            "type": "input",
            "prompt": "(1, 2)·(3, 4) 等於多少？",
            "answers": [
              "11"
            ],
            "explanation": "對應分量相乘再相加：1·3 + 2·4 = 3 + 8 = 11。點積結果是數，不是向量。"
          },
          {
            "type": "input",
            "prompt": "向量 (3, 4) 的長度是多少？",
            "answers": [
              "5"
            ],
            "explanation": "√(3² + 4²) = √25 = 5。這是 3-4-5 直角三角形，是最常用的向量長度例子。"
          },
          {
            "prompt": "兩個非零向量垂直的條件是？",
            "options": [
              "點積為 0",
              "點積為 1",
              "長度相等",
              "方向相同"
            ],
            "answer": 0,
            "explanation": "垂直表示夾角 90 度，cos 90° = 0，故點積為 0。這個判別比斜率法更通用，垂直線也能處理。"
          },
          {
            "type": "input",
            "prompt": "向量 (2, 1) 與 (k, 4) 垂直，k 等於多少？",
            "answers": [
              "-2"
            ],
            "explanation": "點積為 0：2k + 4 = 0，解得 k = -2。垂直條件直接給出一個方程式，這是點積最常用的用途。"
          },
          {
            "type": "multipart",
            "prompt": "考慮向量 a = (1, 2)、b = (3, -1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "a·b 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "1·3 + 2·(-1) = 3 - 2 = 1。點積為正，表示夾角小於 90 度。"
              },
              {
                "type": "input",
                "prompt": "|a|² 等於多少？",
                "answers": [
                  "5"
                ],
                "explanation": "1² + 2² = 5。長度平方就是分量平方和，常用來避免開根號。"
              },
              {
                "type": "input",
                "prompt": "|b|² 等於多少？",
                "answers": [
                  "10"
                ],
                "explanation": "3² + (-1)² = 9 + 1 = 10。"
              }
            ],
            "explanation": "點積與長度平方是向量計算的兩個基本量。cos θ = a·b/(|a||b|)，用平方可以避免中間開根號。"
          },
          {
            "type": "input",
            "prompt": "(1, 1) 與 (1, -1) 的點積是多少？",
            "answers": [
              "0"
            ],
            "explanation": "1·1 + 1·(-1) = 0，故兩向量垂直。這是平面上兩條對角線方向，夾角正好 90 度。"
          },
          {
            "prompt": "向量加法如何計算？",
            "options": [
              "對應分量相加",
              "分量相乘",
              "長度相加",
              "角度相加"
            ],
            "answer": 0,
            "explanation": "向量加法是分量相加：(a₁,a₂)+(b₁,b₂) = (a₁+b₁, a₂+b₂)。幾何上是首尾相接的平行四邊形對角線。"
          },
          {
            "type": "input",
            "prompt": "向量 (3, 4) 的單位向量，第一個分量是多少？",
            "answers": [
              "3/5"
            ],
            "explanation": "長度為 5，單位向量為 (3/5, 4/5)，第一個分量 3/5。單位向量的長度必為 1。"
          },
          {
            "type": "multipart",
            "prompt": "考慮向量 a = (2, 3)、b = (4, -1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "a + b 的第一個分量是多少？",
                "answers": [
                  "6"
                ],
                "explanation": "2 + 4 = 6。向量加法逐分量進行。"
              },
              {
                "type": "input",
                "prompt": "a·b 等於多少？",
                "answers": [
                  "5"
                ],
                "explanation": "2·4 + 3·(-1) = 8 - 3 = 5。點積為正，夾角小於 90 度。"
              },
              {
                "type": "input",
                "prompt": "|a|² 等於多少？",
                "answers": [
                  "13"
                ],
                "explanation": "4 + 9 = 13。"
              }
            ],
            "explanation": "本題同時練加法、點積與長度平方，是向量基本運算的完整組合。注意點積是數，加法是向量。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-38",
        "title": "38 · 參數曲線與運動",
        "intro": "學完這一節，你能用參數式描述曲線、算出它的斜率，並把參數 t 看成時間來描述運動。參數化讓圓、螺線與拋體運動都能用同一個框架處理。",
        "kind": "base",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-19",
          "mendelson-calculus.skill-24",
          "mendelson-calculus.skill-37"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：用參數同時描述 x 與 y"
          },
          {
            "type": "paragraph",
            "text": "參數曲線用第三個變量 t 同時給出 x 與 y。t 可以理解為時間：質點在每一刻有確定的位置。這比 y = f(x) 更靈活，因為允許同一 x 對應多個 y，也能描述垂直運動。"
          },
          {
            "type": "formula",
            "text": "x = f(t)，y = g(t)"
          },
          {
            "type": "heading",
            "text": "原理二：斜率是兩個變化率相除"
          },
          {
            "type": "paragraph",
            "text": "dy/dx 表示 y 對 x 的變化率。由鏈式法則，dy/dt = (dy/dx)(dx/dt)，所以 dy/dx = (dy/dt)/(dx/dt)。關鍵是分母不能為 0；為 0 時切線垂直，斜率不存在。"
          },
          {
            "type": "formula",
            "text": "dy/dx = (dy/dt) / (dx/dt)，dx/dt ≠ 0"
          },
          {
            "type": "heading",
            "text": "原理三：速度向量與速率"
          },
          {
            "type": "paragraph",
            "text": "速度向量是 (dx/dt, dy/dt)，同時給出水平與垂直的變化率。速率是速度向量的長度，等於 √((dx/dt)² + (dy/dt)²)，永遠非負。"
          },
          {
            "type": "formula",
            "text": "速度向量 = (dx/dt, dy/dt)\n速率 = √((dx/dt)² + (dy/dt)²)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，分別對 t 求導，得到 dx/dt 與 dy/dt。"
          },
          {
            "type": "paragraph",
            "text": "第二步，相除得 dy/dx。"
          },
          {
            "type": "paragraph",
            "text": "第三步，要某一點的斜率，把該點的 t 代入。"
          },
          {
            "type": "paragraph",
            "text": "第四步，求速率時取兩者平方和開根號。"
          },
          {
            "type": "paragraph",
            "text": "第五步，檢查 dx/dt 是否為 0；為 0 時斜率不存在，不要寫成有限值。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把 dy/dx 寫成 dy/dt 或 dx/dt。斜率是兩者相除，不是任一個。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是忘記檢查 dx/dt = 0。此時切線垂直，斜率不存在，強行相除會得到無意義的結果。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把速率與速度混淆。速度是向量，速率是純量。"
          }
        ],
        "questions": [
          {
            "prompt": "參數曲線的 dy/dx 等於？",
            "options": [
              "(dy/dt)/(dx/dt)",
              "dy/dt · dx/dt",
              "dx/dt ÷ dy/dt",
              "dy/dt"
            ],
            "answer": 0,
            "explanation": "由鏈式法則 dy/dt = (dy/dx)(dx/dt)，移項得 dy/dx = (dy/dt)/(dx/dt)。分母不可為 0。"
          },
          {
            "type": "input",
            "prompt": "x = t、y = t²，在 t = 2 時 dy/dx 等於多少？",
            "answers": [
              "4"
            ],
            "explanation": "dx/dt = 1、dy/dt = 2t。相除得 2t，代入 2 得 4。這與 y = x² 的導數 2x 在 x=2 的值一致。"
          },
          {
            "type": "input",
            "prompt": "x = t²、y = t³，在 t = 1 時 dy/dx 等於多少？",
            "answers": [
              "3/2"
            ],
            "explanation": "dx/dt = 2t、dy/dt = 3t²。相除得 3t/2，代入 1 得 3/2。注意要先相除再化簡。"
          },
          {
            "prompt": "參數曲線的速度向量是？",
            "options": [
              "(dx/dt, dy/dt)",
              "(dy/dt, dx/dt)",
              "(x, y)",
              "(dx/dy, dy/dx)"
            ],
            "answer": 0,
            "explanation": "速度是位置對時間的變化率，故為 (dx/dt, dy/dt)。它的長度是速率，方向是運動方向。"
          },
          {
            "type": "input",
            "prompt": "x = cos t、y = sin t，速率是多少？",
            "answers": [
              "1"
            ],
            "explanation": "dx/dt = -sin t、dy/dt = cos t，速率 = √(sin²t + cos²t) = 1。這是單位圓，等速率繞行。"
          },
          {
            "type": "multipart",
            "prompt": "設 x = t、y = t²。",
            "parts": [
              {
                "type": "input",
                "prompt": "dx/dt 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "x = t 對 t 求導得 1，為常數。"
              },
              {
                "type": "input",
                "prompt": "dy/dt 在 t = 2 時等於多少？",
                "answers": [
                  "4"
                ],
                "explanation": "y = t² 的導數是 2t，代入 2 得 4。"
              },
              {
                "type": "input",
                "prompt": "dy/dx 在 t = 2 時等於多少？",
                "answers": [
                  "4"
                ],
                "explanation": "4/1 = 4。這與把 y 寫成 x² 後求導的結果一致。"
              }
            ],
            "explanation": "參數式與顯式可以互相驗證：把 t = x 代回得 y = x²，導數 2x 在 x=2 為 4，與參數法相同。"
          },
          {
            "type": "input",
            "prompt": "x = 2t、y = 3t，dy/dx 等於多少？",
            "answers": [
              "3/2"
            ],
            "explanation": "dx/dt = 2、dy/dt = 3，相除得 3/2。這是一條直線，斜率恆為 3/2，與 t 無關。"
          },
          {
            "prompt": "參數曲線的斜率何時不存在？",
            "options": [
              "dx/dt = 0 時",
              "dy/dt = 0 時",
              "t = 0 時",
              "x = 0 時"
            ],
            "answer": 0,
            "explanation": "dy/dx 的分母是 dx/dt，為 0 時無定義，對應垂直切線。dy/dt = 0 只表示水平切線，斜率為 0。"
          },
          {
            "type": "input",
            "prompt": "x = t³、y = t²，在 t = 1 時 dy/dx 等於多少？",
            "answers": [
              "2/3"
            ],
            "explanation": "dx/dt = 3t²、dy/dt = 2t，相除得 2/(3t)，代入 1 得 2/3。"
          },
          {
            "type": "multipart",
            "prompt": "設 x = t²、y = 2t。",
            "parts": [
              {
                "type": "input",
                "prompt": "dx/dt 在 t = 1 時等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "dx/dt = 2t，代入 1 得 2。"
              },
              {
                "type": "input",
                "prompt": "dy/dt 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "y = 2t 的導數是常數 2。"
              },
              {
                "type": "input",
                "prompt": "dy/dx 在 t = 1 時等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "2/2 = 1。這說明曲線在該點的切線斜率為 1。"
              }
            ],
            "explanation": "參數曲線的斜率計算只有兩步：分別求導、相除。本題兩者恰好相等，斜率為 1，對應 45 度切線。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-39",
        "title": "39 · 極座標",
        "intro": "學完這一節，你能用極座標描述點與曲線、在直角與極座標之間轉換，並用積分算極座標圖形的面積。極座標讓圓、螺線與花瓣形狀的方程式變得極簡。",
        "kind": "base",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-23",
          "mendelson-calculus.skill-24",
          "mendelson-calculus.skill-37"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：用距離與角度定位"
          },
          {
            "type": "paragraph",
            "text": "極座標用 r（到原點的距離）與 θ（與正 x 軸的夾角）描述點。與直角座標的轉換由三角函數給出，這是所有極座標計算的基礎。"
          },
          {
            "type": "formula",
            "text": "x = r·cos θ\ny = r·sin θ\nr² = x² + y²"
          },
          {
            "type": "heading",
            "text": "原理二：面積元素是扇形"
          },
          {
            "type": "paragraph",
            "text": "極座標的面積不是長方形而是扇形。半徑 r、角度 dθ 的扇形面積是 (1/2)r²dθ。積分起來就得到整個圖形的面積，公式裡有 1/2 是扇形面積的係數。"
          },
          {
            "type": "formula",
            "text": "A = (1/2) ∫α^β r² dθ"
          },
          {
            "type": "heading",
            "text": "原理三：同一個圖形可以有極簡方程"
          },
          {
            "type": "paragraph",
            "text": "圓 x² + y² = 4 在極座標是 r = 2；螺線是 r = θ；心形線是 r = 1 + cos θ。極座標的價值在於把「到原點的距離」直接寫成角度的函數。"
          },
          {
            "type": "formula",
            "text": "r = 常數：以原點為心的圓\nr = a(1 + cos θ)：心形線"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認圖形是否以原點為中心；是的話優先考慮極座標。"
          },
          {
            "type": "paragraph",
            "text": "第二步，寫出 r(θ) 與角度範圍。"
          },
          {
            "type": "paragraph",
            "text": "第三步，面積用 (1/2)∫r² dθ。"
          },
          {
            "type": "paragraph",
            "text": "第四步，積分時把 r² 展開，逐項處理。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用已知面積檢查：r = R 從 0 到 2π 應得 πR²。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是面積公式漏掉 1/2。少了它，答案會大一倍。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把 r 直接平方後忘記乘 dθ。面積元素是 (1/2)r²dθ，三個部分都不能少。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是角度範圍取錯。完整一圈是 2π，半圈是 π，範圍決定積分結果。"
          }
        ],
        "questions": [
          {
            "prompt": "極座標與直角座標的轉換中，x 等於？",
            "options": [
              "r·cos θ",
              "r·sin θ",
              "r/θ",
              "r + cos θ"
            ],
            "answer": 0,
            "explanation": "由定義 x = r cos θ、y = r sin θ。這是把極座標投影到兩軸的結果，也是所有轉換的起點。"
          },
          {
            "type": "input",
            "prompt": "r = 2、θ = 0 的點，x 座標是多少？",
            "answers": [
              "2"
            ],
            "explanation": "x = r cos θ = 2·cos 0 = 2·1 = 2。θ = 0 表示在正 x 軸上，故 x 就是 r。"
          },
          {
            "type": "input",
            "prompt": "r = 1、θ = π/2 的點，y 座標是多少？",
            "answers": [
              "1"
            ],
            "explanation": "y = r sin θ = 1·sin(π/2) = 1。θ = π/2 表示在正 y 軸上，故 y 就是 r。"
          },
          {
            "prompt": "極座標的面積公式是？",
            "options": [
              "(1/2)∫r² dθ",
              "∫r dθ",
              "∫r² dθ",
              "(1/2)∫r dθ"
            ],
            "answer": 0,
            "explanation": "面積元素是半徑 r、角度 dθ 的扇形面積 (1/2)r²dθ。少了 1/2 會得到兩倍的面積。"
          },
          {
            "type": "input",
            "prompt": "r = 2 從 θ = 0 到 π 的圖形面積是多少？（π 請寫 pi）",
            "answers": [
              "2*pi"
            ],
            "explanation": "A = (1/2)∫0^π 4 dθ = (1/2)·4π = 2π。這是半徑 2 的半圓，面積 πr²/2 = 2π，一致。"
          },
          {
            "type": "multipart",
            "prompt": "設 r = 3，θ 從 0 到 π/2。",
            "parts": [
              {
                "type": "input",
                "prompt": "r² 等於多少？",
                "answers": [
                  "9"
                ],
                "explanation": "3² = 9，為常數。"
              },
              {
                "type": "input",
                "prompt": "面積是多少？（π 請寫 pi）",
                "answers": [
                  "9*pi/4"
                ],
                "explanation": "A = (1/2)·9·(π/2) = 9π/4。這是半徑 3 的四分之一圓，πr²/4 = 9π/4，一致。"
              }
            ],
            "explanation": "常數 r 對應圓，面積必為 πr² 的一部分。用這個特例檢查角度範圍與 1/2 係數是否正確。"
          },
          {
            "type": "input",
            "prompt": "直角座標點 (1, 1) 的極座標 r 等於多少？",
            "answers": [
              "sqrt(2)"
            ],
            "explanation": "r² = 1² + 1² = 2，故 r = √2。角度為 π/4，因為點在第一象限的對角線上。"
          },
          {
            "prompt": "極座標方程 r = 1 表示什麼圖形？",
            "options": [
              "半徑 1 的圓",
              "直線",
              "拋物線",
              "螺旋線"
            ],
            "answer": 0,
            "explanation": "r 恆為 1 表示到原點距離固定，即半徑 1 的圓。面積為 π，可用 (1/2)∫0^{2π} 1 dθ = π 驗證。"
          },
          {
            "type": "input",
            "prompt": "r = 2·cos θ 表示的圓，半徑是多少？",
            "answers": [
              "1"
            ],
            "explanation": "r = 2cos θ 兩邊乘 r 得 r² = 2r cos θ，即 x² + y² = 2x，配方得 (x-1)² + y² = 1，半徑 1。"
          },
          {
            "type": "multipart",
            "prompt": "設 r = 1，θ 從 0 到 2π。",
            "parts": [
              {
                "type": "input",
                "prompt": "r² 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "1² = 1，為常數。"
              },
              {
                "type": "input",
                "prompt": "面積是多少？（π 請寫 pi）",
                "answers": [
                  "pi"
                ],
                "explanation": "A = (1/2)·1·2π = π。這是單位圓，面積 πr² = π，一致。"
              }
            ],
            "explanation": "完整一圈的角度範圍是 2π。本題是最基本的檢驗：單位圓面積必為 π，若算出 2π 就是漏了 1/2。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-40",
        "title": "40 · 數列極限",
        "intro": "學完這一節，你能判斷一個數列是否收斂、算出它的極限，並用常見的極限形式快速判斷。數列是級數的基礎，也是理解「無窮多項相加」的前提。",
        "kind": "base",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-28"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：數列極限看 n 很大時的行為"
          },
          {
            "type": "paragraph",
            "text": "數列 aₙ 的極限是：n 趨向無窮時，aₙ 趨近的那個數。與函數極限一樣，只關心遠處的趨勢，不關心前幾項。若趨近有限值稱收斂，否則發散。"
          },
          {
            "type": "formula",
            "text": "lim(n→∞) aₙ = L  ⇔  當 n 足夠大，aₙ 可任意接近 L"
          },
          {
            "type": "heading",
            "text": "原理二：有理式比最高次項"
          },
          {
            "type": "paragraph",
            "text": "分子分母都是多項式時，同除以最高次冪，或直接比較最高次項。這與函數在無窮遠處的極限完全相同，因為數列只是函數在整數點上的取值。"
          },
          {
            "type": "formula",
            "text": "(aₙnᵖ + …)/(bₙnᵍ + …)：p = q 時為係數比；p < q 時為 0"
          },
          {
            "type": "heading",
            "text": "原理三：等比數列的收斂取決於公比"
          },
          {
            "type": "paragraph",
            "text": "aₙ = rⁿ 在 |r| < 1 時收斂到 0，r = 1 時恆為 1，r > 1 或 r ≤ -1 時發散。這個判別是後面幾何級數的基礎。"
          },
          {
            "type": "formula",
            "text": "|r| < 1  ⇒  rⁿ → 0\n|r| > 1  ⇒  發散"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，觀察數列的結構：有理式、等比、還是含根號。"
          },
          {
            "type": "paragraph",
            "text": "第二步，有理式同除最高次冪。"
          },
          {
            "type": "paragraph",
            "text": "第三步，等比看公比的絕對值。"
          },
          {
            "type": "paragraph",
            "text": "第四步，含根號時分子有理化或同除最高次。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用前幾項的數值粗略核對極限是否合理。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把「趨近 0」與「等於 0」混淆。數列的每一項都不為 0，但極限可以是 0。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是以為有界就一定收斂。1, -1, 1, -1, … 有界但不收斂。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忽略公比為負的情形。r = -1 時數列在兩值間跳動，發散。"
          }
        ],
        "questions": [
          {
            "prompt": "數列 aₙ = 1/n 的極限是？",
            "options": [
              "0",
              "1",
              "無窮",
              "不存在"
            ],
            "answer": 0,
            "explanation": "n 越大，1/n 越接近 0，故極限為 0。這是收斂數列最基本的例子，也是比較其他數列的基準。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) 1/n 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "分母趨向無窮而分子固定，分數趨向 0。注意每一項都不等於 0，但極限是 0。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) n/(n+1) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "分子分母同除 n，得 1/(1 + 1/n)。1/n 趨向 0，故極限為 1。這是同次多項式的係數比。"
          },
          {
            "prompt": "等比數列 rⁿ 在 |r| < 1 時收斂到？",
            "options": [
              "0",
              "1",
              "r",
              "無窮"
            ],
            "answer": 0,
            "explanation": "|r| < 1 時，r 的次方越大越小，趨近 0。r = 1 時恆為 1；|r| > 1 時發散。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) (1/2)ⁿ 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "公比 1/2 的絕對值小於 1，故數列趨向 0。每乘一次 1/2 就減半，最終趨近 0。"
          },
          {
            "type": "multipart",
            "prompt": "設 aₙ = (2n + 1)/n。",
            "parts": [
              {
                "type": "input",
                "prompt": "把 aₙ 改寫成 2 + k/n 的形式，k 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "(2n+1)/n = 2 + 1/n，故 k = 1。"
              },
              {
                "type": "input",
                "prompt": "n 趨向無窮時，aₙ 的極限是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "1/n 趨向 0，故極限為 2。這是分子分母同次的情形，答案為係數比。"
              }
            ],
            "explanation": "有理式的標準處理：先拆成常數加真分式，再讓分母趨向無窮。拆開後極限一目了然。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) 3n²/(n² + 1) 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "同除 n²，得 3/(1 + 1/n²)。1/n² 趨向 0，極限為 3。分子分母次數相同，答案就是係數比。"
          },
          {
            "prompt": "數列收斂的意思是？",
            "options": [
              "趨近某個有限值",
              "越來越大",
              "有界",
              "單調"
            ],
            "answer": 0,
            "explanation": "收斂指存在有限極限。有界或單調都不是收斂的充分條件：1,-1,1,-1,… 有界但不收斂。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) (1 + 1/n)ⁿ 等於多少？（e 請寫 e）",
            "answers": [
              "e"
            ],
            "explanation": "這是自然常數 e 的定義式，值約 2.718。它是連續複利與指數成長的來源，值得單獨記住。"
          },
          {
            "type": "multipart",
            "prompt": "設 aₙ = 1/n²。",
            "parts": [
              {
                "type": "input",
                "prompt": "n = 2 時，aₙ 等於多少？",
                "answers": [
                  "1/4"
                ],
                "explanation": "1/2² = 1/4。"
              },
              {
                "type": "input",
                "prompt": "n 趨向無窮時，aₙ 的極限是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "分母趨向無窮，分數趨向 0。平方使收斂更快，但極限相同。"
              }
            ],
            "explanation": "1/n 與 1/n² 都收斂到 0，但速度不同。這個差別在級數中變得關鍵：Σ1/n 發散，Σ1/n² 卻收斂。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-41",
        "title": "41 · 無窮級數",
        "intro": "學完這一節，你能把無窮多項相加的結果算出來，特別是幾何級數。級數是數列的部分和取極限，這是把「無窮」變成可計算的關鍵一步。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-36",
          "mendelson-calculus.skill-40"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：級數是部分和的極限"
          },
          {
            "type": "paragraph",
            "text": "把前 n 項加起來得到部分和 Sₙ。若 Sₙ 趨向有限值，稱級數收斂，該值就是級數的和；否則發散。級數的收斂不是看每一項，而是看部分和。"
          },
          {
            "type": "formula",
            "text": "Σ(n=1→∞) aₙ = lim(n→∞) Sₙ，Sₙ = a₁ + a₂ + … + aₙ"
          },
          {
            "type": "heading",
            "text": "原理二：幾何級數有封閉公式"
          },
          {
            "type": "paragraph",
            "text": "相鄰兩項比值固定的級數叫幾何級數。部分和有封閉形式，取極限後得到 a/(1-r)，前提是 |r| < 1。這是最重要也最常用的級數。"
          },
          {
            "type": "formula",
            "text": "Σ(n=0→∞) a·rⁿ = a/(1-r)，|r| < 1\nΣ(n=1→∞) a·rⁿ = a·r/(1-r)"
          },
          {
            "type": "heading",
            "text": "原理三：收斂的必要條件"
          },
          {
            "type": "paragraph",
            "text": "若級數收斂，則第 n 項必須趨向 0。反過來不成立：調和級數 1/n 的項趨向 0，級數卻發散。所以「項趨向 0」只能否定收斂，不能肯定。"
          },
          {
            "type": "formula",
            "text": "Σaₙ 收斂  ⇒  aₙ → 0\n但 aₙ → 0 不代表收斂"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，判斷是否為幾何級數：相鄰項比值是否固定。"
          },
          {
            "type": "paragraph",
            "text": "第二步，是幾何級數就讀出 a 與 r，檢查 |r| < 1。"
          },
          {
            "type": "paragraph",
            "text": "第三步，收斂則用 a/(1-r) 求和。"
          },
          {
            "type": "paragraph",
            "text": "第四步，不是幾何級數，先用項趨向 0 排除發散。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用部分和的前幾項數值核對結果。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是搞錯首項。從 n = 0 開始與從 n = 1 開始，首項不同，和也不同。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是忽略 |r| < 1 的條件。r = 2 時公式給出負數，完全錯誤。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是以為項趨向 0 就收斂。調和級數是最重要的反例。"
          }
        ],
        "questions": [
          {
            "prompt": "幾何級數 a + ar + ar² + … 在 |r| < 1 時的和是？",
            "options": [
              "a/(1-r)",
              "a/(1+r)",
              "a·r",
              "a·r/(1-r)"
            ],
            "answer": 0,
            "explanation": "首項 a、公比 r，和為 a/(1-r)。若從 n=1 開始（首項 ar），則為 ar/(1-r)，兩者差一個 r。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) (1/2)ⁿ 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "首項 1/2、公比 1/2，和為 (1/2)/(1 - 1/2) = 1。也可用圖形理解：不斷對折，總長趨近 1。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) (1/3)ⁿ 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "首項 1/3、公比 1/3，和為 (1/3)/(1 - 1/3) = (1/3)/(2/3) = 1/2。"
          },
          {
            "prompt": "級數收斂的必要條件是？",
            "options": [
              "第 n 項趨向 0",
              "第 n 項遞減",
              "部分和有界",
              "公比小於 1"
            ],
            "answer": 0,
            "explanation": "若級數收斂，項必須趨向 0。但這只是必要條件，調和級數的項趨向 0 卻發散，所以不能用來證明收斂。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) (1/2)ⁿ 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "首項為 n=0 時的 1，公比 1/2，和為 1/(1 - 1/2) = 2。注意與從 n=1 開始的結果差 1。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 Σ(n=1→∞) (1/4)ⁿ。",
            "parts": [
              {
                "type": "input",
                "prompt": "公比 r 等於多少？",
                "answers": [
                  "1/4"
                ],
                "explanation": "相鄰項比值為 1/4，故 r = 1/4。"
              },
              {
                "type": "input",
                "prompt": "級數的和是多少？",
                "answers": [
                  "1/3"
                ],
                "explanation": "首項 1/4，和為 (1/4)/(1 - 1/4) = (1/4)/(3/4) = 1/3。"
              }
            ],
            "explanation": "幾何級數只需兩個資訊：首項與公比。本題首項與公比恰好相同，是常見的陷阱，別把首項當成 1。"
          },
          {
            "type": "input",
            "prompt": "1 + 1/2 + 1/4 + 1/8 + … 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "首項 1、公比 1/2，和為 1/(1 - 1/2) = 2。這是從 n=0 開始的幾何級數。"
          },
          {
            "prompt": "調和級數 1 + 1/2 + 1/3 + … 的斂散性為何？",
            "options": [
              "發散",
              "收斂到 1",
              "收斂到 2",
              "收斂到 e"
            ],
            "answer": 0,
            "explanation": "雖然項趨向 0，但部分和以 ln n 的速度增長，趨向無窮，故發散。這是「項趨向 0 不代表收斂」的標準反例。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) (2/3)ⁿ 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "首項 2/3、公比 2/3，和為 (2/3)/(1 - 2/3) = (2/3)/(1/3) = 2。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 Σ(n=0→∞) (1/3)ⁿ。",
            "parts": [
              {
                "type": "input",
                "prompt": "首項 a 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "n = 0 時，(1/3)⁰ = 1，故首項為 1。"
              },
              {
                "type": "input",
                "prompt": "級數的和是多少？",
                "answers": [
                  "3/2"
                ],
                "explanation": "和為 1/(1 - 1/3) = 1/(2/3) = 3/2。"
              }
            ],
            "explanation": "從 n=0 開始時首項必為 1（任何非零數的 0 次方）。這個細節決定答案差多少。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-42",
        "title": "42 · 收斂判別與誤差",
        "intro": "學完這一節，你能判斷一個級數收斂還是發散，並估計截斷後的誤差。判別法讓你不必真的求和，就能知道無窮多項相加是否有限。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-41"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：比較與 p 級數"
          },
          {
            "type": "paragraph",
            "text": "p 級數 Σ1/nᵖ 在 p > 1 時收斂，p ≤ 1 時發散。其他級數可與它比較：若比收斂級數小則收斂，比發散級數大則發散。這是最直觀的判別法。"
          },
          {
            "type": "formula",
            "text": "Σ1/nᵖ 收斂  ⇔  p > 1\n0 ≤ aₙ ≤ bₙ 且 Σbₙ 收斂  ⇒  Σaₙ 收斂"
          },
          {
            "type": "heading",
            "text": "原理二：比值判別處理階乘與指數"
          },
          {
            "type": "paragraph",
            "text": "計算相鄰項比值的極限 ρ。ρ < 1 收斂，ρ > 1 發散，ρ = 1 無法判定。這個方法對含 n! 或 aⁿ 的級數特別有效。"
          },
          {
            "type": "formula",
            "text": "ρ = lim |aₙ₊₁/aₙ|\nρ < 1 收斂；ρ > 1 發散；ρ = 1 失效"
          },
          {
            "type": "heading",
            "text": "原理三：交錯級數的誤差有界"
          },
          {
            "type": "paragraph",
            "text": "交錯級數若項的絕對值遞減且趨向 0，則收斂。截斷誤差（用前 n 項代替整個和）不超過第一個被捨棄的項。這讓誤差可以被精確控制。"
          },
          {
            "type": "formula",
            "text": "誤差 ≤ |aₙ₊₁|"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，先看項是否趨向 0；不趨向 0 直接判定發散。"
          },
          {
            "type": "paragraph",
            "text": "第二步，判斷是否為 p 級數或幾何級數，可直接下結論。"
          },
          {
            "type": "paragraph",
            "text": "第三步，含階乘或指數用比值判別。"
          },
          {
            "type": "paragraph",
            "text": "第四步，交錯級數檢查遞減與趨向 0。"
          },
          {
            "type": "paragraph",
            "text": "第五步，需要誤差估計時，取第一個被捨棄項的絕對值作為上界。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是只用「項趨向 0」判定收斂。調和級數是反例，必須用其他判別法。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是比值判別得到 ρ = 1 就下結論。此時判別失效，必須改用其他方法。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是交錯級數誤差取錯項。誤差界是「第一個沒加進去的項」，不是最後加進去的那項。"
          }
        ],
        "questions": [
          {
            "prompt": "比值判別中，若 ρ < 1 則級數？",
            "options": [
              "收斂",
              "發散",
              "無法判定",
              "等於 0"
            ],
            "answer": 0,
            "explanation": "ρ < 1 時級數收斂，ρ > 1 時發散。ρ = 1 是失效情形，需要其他判別法。"
          },
          {
            "type": "input",
            "prompt": "Σ1/n² 是否收斂？收斂填 1，發散填 0。",
            "answers": [
              "1"
            ],
            "explanation": "這是 p = 2 的 p 級數，p > 1 故收斂。其和為 π²/6，但判別收斂不需要算出和。"
          },
          {
            "type": "input",
            "prompt": "Σ1/n 是否收斂？收斂填 1，發散填 0。",
            "answers": [
              "0"
            ],
            "explanation": "這是 p = 1 的 p 級數，p 不大於 1，故發散。雖然項趨向 0，部分和仍趨向無窮。"
          },
          {
            "prompt": "交錯級數截斷誤差的上界是？",
            "options": [
              "第一個被捨棄項的絕對值",
              "最後保留項的絕對值",
              "部分和",
              "項的總數"
            ],
            "answer": 0,
            "explanation": "交錯級數的誤差不超過第一個未加入的項。這讓誤差可以事先控制，是數值計算的重要工具。"
          },
          {
            "type": "input",
            "prompt": "Σ1/n! 是否收斂？收斂填 1，發散填 0。",
            "answers": [
              "1"
            ],
            "explanation": "比值判別：aₙ₊₁/aₙ = 1/(n+1) → 0 < 1，故收斂。其和為 e - 1 ≈ 1.718，收斂極快。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 Σ(n=1→∞) (1/2)ⁿ。",
            "parts": [
              {
                "type": "input",
                "prompt": "公比 r 等於多少？",
                "answers": [
                  "1/2"
                ],
                "explanation": "相鄰項比值固定為 1/2，故為幾何級數。"
              },
              {
                "type": "input",
                "prompt": "級數是否收斂？收斂填 1。",
                "answers": [
                  "1"
                ],
                "explanation": "|r| = 1/2 < 1，故收斂，和為 1。"
              }
            ],
            "explanation": "幾何級數是最容易判別的：只看公比。|r| < 1 收斂，否則發散，不需要其他檢驗。"
          },
          {
            "type": "input",
            "prompt": "Σ1/n³ 是否收斂？收斂填 1，發散填 0。",
            "answers": [
              "1"
            ],
            "explanation": "p = 3 > 1，故收斂。p 越大收斂越快，這是 p 級數的規律。"
          },
          {
            "prompt": "p 級數 Σ1/nᵖ 收斂的條件是？",
            "options": [
              "p > 1",
              "p ≥ 1",
              "p < 1",
              "所有 p"
            ],
            "answer": 0,
            "explanation": "p > 1 收斂，p ≤ 1 發散。p = 1 是調和級數，恰好發散，是分界點。"
          },
          {
            "type": "input",
            "prompt": "交錯級數 1 - 1/2 + 1/3 - 1/4 + … 是否收斂？收斂填 1。",
            "answers": [
              "1"
            ],
            "explanation": "項的絕對值 1/n 遞減且趨向 0，符合交錯級數判別，故收斂。其和為 ln 2 ≈ 0.693。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 Σ(-1)ⁿ/n。",
            "parts": [
              {
                "type": "input",
                "prompt": "這是不是交錯級數？是填 1。",
                "answers": [
                  "1"
                ],
                "explanation": "正負號交替出現，且項的絕對值 1/n 遞減趨向 0，故為交錯級數。"
              },
              {
                "type": "input",
                "prompt": "級數是否收斂？收斂填 1。",
                "answers": [
                  "1"
                ],
                "explanation": "符合交錯級數判別，故收斂。這說明「條件收斂」的存在：加上絕對值後反而發散。"
              }
            ],
            "explanation": "交錯級數的判別只需兩個條件：絕對值遞減、趨向 0。本題兩者都滿足，故收斂，和為 -ln 2。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-43",
        "title": "43 · 冪級數",
        "intro": "學完這一節，你能判斷冪級數在哪些 x 上收斂、算出收斂半徑，並理解端點需要另外檢查。冪級數是 Taylor 展開的載體，也是把函數寫成無窮多項和的工具。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-42"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：冪級數是帶變量的級數"
          },
          {
            "type": "paragraph",
            "text": "冪級數形如 Σcₙ(x-a)ⁿ，把 x 看成參數。對不同的 x，級數可能收斂也可能發散。所有收斂的 x 構成的集合叫收斂區間，它的半徑就是收斂半徑 R。"
          },
          {
            "type": "formula",
            "text": "Σ(n=0→∞) cₙ(x - a)ⁿ"
          },
          {
            "type": "heading",
            "text": "原理二：收斂半徑用比值法求"
          },
          {
            "type": "paragraph",
            "text": "把 x 當常數，對係數用比值判別，得到 |x-a| < R 時收斂。R 就是收斂半徑。若 ρ = 0 則 R 為無窮（處處收斂），若 ρ 為無窮則 R = 0（只在中心收斂）。"
          },
          {
            "type": "formula",
            "text": "R = 1/ρ，ρ = lim |cₙ₊₁/cₙ|\n|x - a| < R 收斂；|x - a| > R 發散"
          },
          {
            "type": "heading",
            "text": "原理三：端點必須單獨檢查"
          },
          {
            "type": "paragraph",
            "text": "收斂半徑只保證開區間內收斂，兩個端點 x = a ± R 恰好是邊界，比值法失效，必須把端點代入原級數，用其他判別法逐個檢查。這是本章最常被忽略的一步。"
          },
          {
            "type": "formula",
            "text": "x = a - R 與 x = a + R：代入後另行判別"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，寫出係數 cₙ，用比值法求 ρ。"
          },
          {
            "type": "paragraph",
            "text": "第二步，取 R = 1/ρ，得到開收斂區間。"
          },
          {
            "type": "paragraph",
            "text": "第三步，把兩個端點分別代入原級數。"
          },
          {
            "type": "paragraph",
            "text": "第四步，用 p 級數或交錯級數判別端點。"
          },
          {
            "type": "paragraph",
            "text": "第五步，寫出完整的收斂區間，注意端點是開還是閉。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把收斂半徑當成收斂區間。半徑只給出開區間，端點要另外判斷。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是忘記中心點 a。Σcₙ(x-2)ⁿ 的收斂區間以 2 為中心，不是以 0。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是比值法算的是 cₙ 的比，不是整個項的比。先把 (x-a)ⁿ 提出來，剩下的才是係數。"
          }
        ],
        "questions": [
          {
            "prompt": "收斂半徑 R 的意義是？",
            "options": [
              "|x - a| < R 時級數收斂",
              "級數在 x = R 收斂",
              "級數的和等於 R",
              "級數有 R 項"
            ],
            "answer": 0,
            "explanation": "收斂半徑描述以 a 為中心、半徑 R 的開區間，在其中級數絕對收斂。端點要另外檢查，不能直接斷定。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) xⁿ 的收斂半徑是多少？",
            "answers": [
              "1"
            ],
            "explanation": "係數皆為 1，比值 ρ = 1，故 R = 1。收斂區間為 (-1, 1)，端點 x = ±1 時級數發散。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) (x/2)ⁿ 的收斂半徑是多少？",
            "answers": [
              "2"
            ],
            "explanation": "這是公比 x/2 的幾何級數，收斂條件 |x/2| < 1，即 |x| < 2，故 R = 2。"
          },
          {
            "prompt": "收斂區間的端點應該如何處理？",
            "options": [
              "代入原級數另行判別",
              "一定收斂",
              "一定發散",
              "忽略不管"
            ],
            "answer": 0,
            "explanation": "比值法在端點失效，必須把端點代入原級數，用 p 級數或交錯級數判別。端點可能收斂也可能發散，因級數而異。"
          },
          {
            "type": "input",
            "prompt": "Σxⁿ 在 x = 0.5 是否收斂？收斂填 1。",
            "answers": [
              "1"
            ],
            "explanation": "|0.5| < 1，在收斂區間內，故收斂。其和為 1/(1-0.5) = 2。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 Σ(n=0→∞) xⁿ。",
            "parts": [
              {
                "type": "input",
                "prompt": "把它看成幾何級數，在 x = 0.5 時公比的值是多少？",
                "answers": [
                  "0.5"
                ],
                "explanation": "公比為 x，代入 0.5 得 0.5。公比隨 x 改變，這正是冪級數的特點。"
              },
              {
                "type": "input",
                "prompt": "收斂條件是 |x| 小於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "|x| < 1 時收斂，這是幾何級數的條件。"
              },
              {
                "type": "input",
                "prompt": "收斂半徑是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "由 |x| < 1 得 R = 1。"
              }
            ],
            "explanation": "幾何級數是最簡單的冪級數，收斂半徑直接由公比給出。這個例子說明 R 的幾何意義：以 0 為中心、半徑 1。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) n!·xⁿ 的收斂半徑是多少？",
            "answers": [
              "0"
            ],
            "explanation": "係數比為 (n+1)!/n! = n+1，趨向無窮，故 ρ 為無窮、R = 0。級數只在 x = 0 收斂，這是階乘增長太快的結果。"
          },
          {
            "prompt": "用比值法求收斂半徑時，R 等於？",
            "options": [
              "1/ρ",
              "ρ",
              "ρ²",
              "1/ρ²"
            ],
            "answer": 0,
            "explanation": "ρ = lim|cₙ₊₁/cₙ|，收斂條件 |x-a|·ρ < 1，故 R = 1/ρ。ρ = 0 時 R 無窮，ρ 無窮時 R = 0。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) xⁿ/3ⁿ 的收斂半徑是多少？",
            "answers": [
              "3"
            ],
            "explanation": "這是公比 x/3 的幾何級數，收斂條件 |x/3| < 1，即 |x| < 3，故 R = 3。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 Σ(n=0→∞) (x/3)ⁿ。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 x = 1 時，公比 x/3 的值是多少？",
                "answers": [
                  "1/3"
                ],
                "explanation": "x/3 在 x = 1 時為 1/3。收斂與否取決於這個公比的絕對值是否小於 1。"
              },
              {
                "type": "input",
                "prompt": "收斂條件是 |x| 小於多少？",
                "answers": [
                  "3"
                ],
                "explanation": "|x/3| < 1 即 |x| < 3。"
              },
              {
                "type": "input",
                "prompt": "收斂半徑是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "由 |x| < 3 得 R = 3。"
              }
            ],
            "explanation": "把係數與變量分開看：Σ(x/3)ⁿ = Σ(1/3)ⁿxⁿ，係數是 (1/3)ⁿ。收斂半徑由係數的增長率決定。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-44",
        "title": "44 · Taylor 與 Maclaurin 展開",
        "intro": "學完這一節，你能把函數展開成冪級數、寫出前幾項做近似，並理解為什麼 eˣ、sin、cos 的展開如此整齊。這是把函數變成多項式的橋樑。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-20",
          "mendelson-calculus.skill-43"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：用導數在一個點複製函數"
          },
          {
            "type": "paragraph",
            "text": "Taylor 展開的想法是：找一個多項式，使它在 x = a 處的函數值、一階導、二階導……都與原函數相同。係數由導數決定，除上 n! 是為了抵消化冪次時產生的因子。"
          },
          {
            "type": "formula",
            "text": "f(x) = Σ(n=0→∞) f⁽ⁿ⁾(a)·(x-a)ⁿ / n!"
          },
          {
            "type": "heading",
            "text": "原理二：Maclaurin 是 a = 0 的特例"
          },
          {
            "type": "paragraph",
            "text": "在 0 處展開叫 Maclaurin 級數。三個最重要的展開是 eˣ、sin x、cos x，它們的導數循環，所以係數有規律，收斂半徑都是無窮。"
          },
          {
            "type": "formula",
            "text": "eˣ = 1 + x + x²/2! + x³/3! + …\nsin x = x - x³/3! + x⁵/5! - …\ncos x = 1 - x²/2! + x⁴/4! - …"
          },
          {
            "type": "heading",
            "text": "原理三：取前幾項就是近似"
          },
          {
            "type": "paragraph",
            "text": "截斷到 n 次多項式，就得到 n 階 Taylor 近似。項數越多越準，但在展開點附近最準，遠離時誤差變大。這與線性近似是同一個思路的推廣。"
          },
          {
            "type": "formula",
            "text": "eˣ ≈ 1 + x（一階）\neˣ ≈ 1 + x + x²/2（二階）"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確定展開點 a 與需要的階數。"
          },
          {
            "type": "paragraph",
            "text": "第二步，逐階求導，算出 f⁽ⁿ⁾(a)。"
          },
          {
            "type": "paragraph",
            "text": "第三步，代入公式，除上 n!。"
          },
          {
            "type": "paragraph",
            "text": "第四步，要近似值就取前幾項代入具體 x。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用已知值檢查：e⁰ = 1、sin 0 = 0、cos 0 = 1 都應與展開式常數項一致。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記除以 n!。係數是 f⁽ⁿ⁾(a)/n!，少了階乘會讓高階項過大。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是 sin 與 cos 的展開混淆。sin 從 x 開始且只有奇次項，cos 從 1 開始且只有偶次項。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是以為展開式在任何地方都準。項數固定時，離展開點越遠誤差越大。"
          }
        ],
        "questions": [
          {
            "prompt": "Taylor 級數中 (x-a)ⁿ 的係數是？",
            "options": [
              "f⁽ⁿ⁾(a)/n!",
              "f⁽ⁿ⁾(a)·n!",
              "f(a)/n",
              "f⁽ⁿ⁾(a)"
            ],
            "answer": 0,
            "explanation": "係數是 n 階導數在 a 的值除以 n!。階乘來自對 (x-a)ⁿ 反覆求導產生的因子，少了它高階項會嚴重偏大。"
          },
          {
            "type": "input",
            "prompt": "eˣ 的 Maclaurin 展開取前兩項 1 + x，在 x = 0.1 時近似值是多少？",
            "answers": [
              "1.1"
            ],
            "explanation": "1 + 0.1 = 1.1。實際 e^0.1 ≈ 1.1052，誤差約 0.005，二階項 x²/2 = 0.005 正好補上。"
          },
          {
            "type": "input",
            "prompt": "sin x 的 Maclaurin 展開中，x 的係數是多少？",
            "answers": [
              "1"
            ],
            "explanation": "sin x = x - x³/6 + …，x 的係數為 1。這與 sin 在 0 的導數 cos 0 = 1 一致。"
          },
          {
            "prompt": "eˣ 的 Maclaurin 展開是？",
            "options": [
              "1 + x + x²/2! + x³/3! + …",
              "1 - x + x²/2! - …",
              "x + x³/3! + …",
              "1 + x² + x⁴ + …"
            ],
            "answer": 0,
            "explanation": "eˣ 的所有導數在 0 都是 1，故每項係數為 1/n!，全為正。第二個選項是 e^(-x)，第三個是 sinh，第四個是 1/(1-x²)。"
          },
          {
            "type": "input",
            "prompt": "cos x 的 Maclaurin 展開，常數項是多少？",
            "answers": [
              "1"
            ],
            "explanation": "cos 0 = 1，故常數項為 1。cos 的展開只有偶次項且正負交替：1 - x²/2 + x⁴/24 - …"
          },
          {
            "type": "multipart",
            "prompt": "考慮 eˣ 在 x = 0 的展開。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "e⁰ = 1，這是展開式的常數項。"
              },
              {
                "type": "input",
                "prompt": "f'(0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "eˣ 的導數仍是 eˣ，在 0 為 1，這是 x 的係數。"
              },
              {
                "type": "input",
                "prompt": "取前兩項 1 + x，在 x = 0.1 的近似值是多少？",
                "answers": [
                  "1.1"
                ],
                "explanation": "1 + 0.1 = 1.1。"
              }
            ],
            "explanation": "eˣ 的展開最簡單：所有導數在 0 都是 1，係數就是 1/n!。這也是為什麼 e 的近似計算如此方便。"
          },
          {
            "type": "input",
            "prompt": "sin x 的 Maclaurin 展開中，x³ 的係數是多少？",
            "answers": [
              "-1/6"
            ],
            "explanation": "sin x = x - x³/3! + …，3! = 6，故係數為 -1/6。負號來自 sin 的三階導數在 0 為 -1。"
          },
          {
            "prompt": "Taylor 展開的主要用途是？",
            "options": [
              "用多項式近似函數",
              "求函數的定義域",
              "判斷連續性",
              "計算面積"
            ],
            "answer": 0,
            "explanation": "Taylor 展開把複雜函數換成多項式，方便計算、積分與估計誤差。定義域與連續性由其他工具判斷。"
          },
          {
            "type": "input",
            "prompt": "e⁰ 的 Maclaurin 展開值是多少？",
            "answers": [
              "1"
            ],
            "explanation": "展開式在 x = 0 時只剩常數項 1，與 e⁰ = 1 一致。這是檢查展開是否正確的最快方法。"
          },
          {
            "type": "multipart",
            "prompt": "考慮 cos x 在 x = 0 的展開。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "cos 0 = 1。"
              },
              {
                "type": "input",
                "prompt": "f''(0) 等於多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "cos 的二階導數是 -cos，在 0 為 -1。這給出 x² 項的係數 -1/2。"
              },
              {
                "type": "input",
                "prompt": "取二次近似 1 - x²/2，在 x = 0.1 的值是多少？",
                "answers": [
                  "0.995"
                ],
                "explanation": "1 - 0.01/2 = 1 - 0.005 = 0.995。實際 cos 0.1 ≈ 0.995004。"
              }
            ],
            "explanation": "cos 的展開只有偶次項且正負交替。二次近似在 0.1 處已精確到小數第四位，說明展開在原點附近收斂極快。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-45",
        "title": "45 · 空間向量、直線與平面",
        "intro": "學完這一節，你能在三維空間中做向量運算、寫出平面與直線的方程式，並算點到平面的距離。三維幾何是多重積分與向量場的空間基礎。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-37"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：三維向量多一個分量"
          },
          {
            "type": "paragraph",
            "text": "三維向量有三個分量，加法、純量乘法、點積的規則與平面完全相同，只是多一項。長度也是三個分量平方和開根號。"
          },
          {
            "type": "formula",
            "text": "a·b = a₁b₁ + a₂b₂ + a₃b₃\n|a| = √(a₁² + a₂² + a₃²)"
          },
          {
            "type": "heading",
            "text": "原理二：平面由法向量決定"
          },
          {
            "type": "paragraph",
            "text": "平面方程 ax + by + cz = d 中，(a,b,c) 是法向量，垂直於平面。給定一點與法向量就能寫出平面；兩個平面平行若且唯若法向量平行。"
          },
          {
            "type": "formula",
            "text": "過點 P、法向量 n 的平面：n·(X - P) = 0"
          },
          {
            "type": "heading",
            "text": "原理三：點到平面的距離"
          },
          {
            "type": "paragraph",
            "text": "把點代入平面方程的左邊取絕對值，再除以法向量的長度，就是距離。這個公式是平面版本的点到直線距離，形式完全類比。"
          },
          {
            "type": "formula",
            "text": "d = |ax₀ + by₀ + cz₀ - d| / √(a² + b² + c²)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，向量運算逐分量進行。"
          },
          {
            "type": "paragraph",
            "text": "第二步，寫平面方程時先確認法向量。"
          },
          {
            "type": "paragraph",
            "text": "第三步，用點代入求常數項。"
          },
          {
            "type": "paragraph",
            "text": "第四步，算距離時分子取絕對值、分母是法向量長度。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用特殊點檢查：原點代入應得 -d，距離為 |d|/|n|。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把平面方程的係數當成平面上的向量。係數是法向量，垂直於平面，不是平面內的方向。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是距離公式忘記除以法向量長度。少了分母，得到的是「代入值」，不是距離。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是認為兩平面垂直的條件是法向量點積為 0。那是兩平面垂直的條件；平行是法向量成比例。"
          }
        ],
        "questions": [
          {
            "prompt": "平面方程 ax + by + cz = d 中，(a, b, c) 代表？",
            "options": [
              "平面的法向量",
              "平面上的一點",
              "平面的斜率",
              "平面的面積"
            ],
            "answer": 0,
            "explanation": "(a,b,c) 是法向量，垂直於平面。這是寫平面方程與判斷平行、垂直的關鍵，常被誤認為平面上的方向。"
          },
          {
            "type": "input",
            "prompt": "向量 (1, 2, 3) 的長度是多少？",
            "answers": [
              "sqrt(14)"
            ],
            "explanation": "√(1 + 4 + 9) = √14 ≈ 3.742。三維長度就是三個分量平方和開根號。"
          },
          {
            "type": "input",
            "prompt": "(1, 0, 0)·(0, 1, 0) 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "1·0 + 0·1 + 0·0 = 0，故兩向量垂直。這說明三個座標軸方向互相垂直。"
          },
          {
            "prompt": "平面的法向量與平面的關係是？",
            "options": [
              "垂直於平面",
              "平行於平面",
              "在平面內",
              "等於平面的斜率"
            ],
            "answer": 0,
            "explanation": "法向量垂直於平面，這是「法」的意思。它決定平面的方向，兩個平面平行若且唯若法向量平行。"
          },
          {
            "type": "input",
            "prompt": "過原點且法向量為 (1, 2, 3) 的平面，當 x = 1、y = 0 時 z 等於多少？",
            "answers": [
              "-1/3"
            ],
            "explanation": "平面方程為 x + 2y + 3z = 0。代入 x=1、y=0 得 1 + 3z = 0，故 z = -1/3。"
          },
          {
            "type": "multipart",
            "prompt": "考慮向量 a = (1, 1, 0)、b = (0, 1, 1)。",
            "parts": [
              {
                "type": "input",
                "prompt": "a·b 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "1·0 + 1·1 + 0·1 = 1。三維點積仍是對應分量相乘再相加。"
              },
              {
                "type": "input",
                "prompt": "|a|² 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "1 + 1 + 0 = 2。"
              },
              {
                "type": "input",
                "prompt": "|b|² 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "0 + 1 + 1 = 2。"
              }
            ],
            "explanation": "三維向量的一切運算都是平面情形的自然推廣，只是多一個分量。點積與長度平方仍是最基本的兩個量。"
          },
          {
            "type": "input",
            "prompt": "向量 (2, 0, 0) 的長度是多少？",
            "answers": [
              "2"
            ],
            "explanation": "√(4 + 0 + 0) = 2。沿座標軸的向量，長度就是該分量的絕對值。"
          },
          {
            "prompt": "兩個平面平行的條件是？",
            "options": [
              "法向量平行",
              "法向量垂直",
              "常數項相等",
              "都過原點"
            ],
            "answer": 0,
            "explanation": "平面方向由法向量決定，法向量平行則平面平行。法向量垂直對應的是兩平面垂直，不是平行。"
          },
          {
            "type": "input",
            "prompt": "點 (1, 1, 1) 到平面 x + y + z = 0 的距離是多少？",
            "answers": [
              "sqrt(3)"
            ],
            "explanation": "距離 = |1+1+1-0|/√(1+1+1) = 3/√3 = √3 ≈ 1.732。分子取絕對值，分母是法向量長度。"
          },
          {
            "type": "multipart",
            "prompt": "考慮平面 2x + 3y + z = 6。",
            "parts": [
              {
                "type": "input",
                "prompt": "法向量的 x 分量是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "平面方程中 x 的係數就是法向量的第一個分量。"
              },
              {
                "type": "input",
                "prompt": "平面與 x 軸的交點 x 座標是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "令 y = z = 0，得 2x = 6，故 x = 3。這是 x 截距。"
              }
            ],
            "explanation": "平面方程的係數直接給出法向量，令其他變量為 0 則得到各軸截距。這兩個資訊足以畫出平面的位置。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-46",
        "title": "46 · 多變量函數與座標",
        "intro": "學完這一節，你能讀懂 f(x, y) 的意義、算出函數值、判斷定義域，並用等高線想像三維圖形。多變量是所有偏導與多重積分的前提。",
        "kind": "base",
        "minutes": 22,
        "parents": [
          "mendelson-calculus.skill-06",
          "mendelson-calculus.skill-45"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：輸入是平面上的點"
          },
          {
            "type": "paragraph",
            "text": "多變量函數 f(x, y) 接受一對數，輸出一個數。可以想成地圖上的高度：每個位置對應一個海拔。這比單變量多了一個自由度，圖形從曲線變成曲面。"
          },
          {
            "type": "formula",
            "text": "z = f(x, y)：(x, y) 是平面上的點，z 是高度"
          },
          {
            "type": "heading",
            "text": "原理二：定義域是平面區域"
          },
          {
            "type": "paragraph",
            "text": "定義域是所有使式子有意義的 (x, y)。限制與單變量相同：分母不為 0、偶次根號內非負、對數引數為正，只是條件變成兩個變量的不等式。"
          },
          {
            "type": "formula",
            "text": "f = 1/(x - y)：x ≠ y\nf = √(x² + y²)：所有點"
          },
          {
            "type": "heading",
            "text": "原理三：等高線把三維壓成二維"
          },
          {
            "type": "paragraph",
            "text": "把 f(x, y) = k 的所有點連起來，就是高度為 k 的等高線。等高線密集表示高度變化快，稀疏表示平緩。這是用平面圖表達曲面的標準方法。"
          },
          {
            "type": "formula",
            "text": "f(x, y) = k：高度為 k 的等高線"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認函數的輸入個數與輸出。"
          },
          {
            "type": "paragraph",
            "text": "第二步，算函數值時把兩個座標一起代入。"
          },
          {
            "type": "paragraph",
            "text": "第三步，求定義域時逐項列限制，取交集。"
          },
          {
            "type": "paragraph",
            "text": "第四步，畫等高線時令 f = 常數，化簡成熟悉的圖形。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用一個具體點檢查：算出的高度是否與直覺相符。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是算 f(2,3) 時只代入一個數。必須同時代入 x 與 y，順序不可顛倒。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把定義域當成一個區間。多變量的定義域是平面上的區域，不是數線上的一段。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是認為等高線就是曲面本身。等高線是投影，只保留高度資訊，不含立體形狀。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x, y) = x² + y² 的等高線是什麼形狀？",
            "options": [
              "圓",
              "直線",
              "拋物線",
              "雙曲線"
            ],
            "answer": 0,
            "explanation": "令 x² + y² = k，k > 0 時是半徑 √k 的圓。等高線是一圈圈的同心圓，中心在原點，這正是碗形曲面的投影。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x² + y²，f(2, 3) 等於多少？",
            "answers": [
              "13"
            ],
            "explanation": "4 + 9 = 13。兩個座標都要代入，且各自平方後相加。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = xy，f(2, 3) 等於多少？",
            "answers": [
              "6"
            ],
            "explanation": "2 × 3 = 6。乘積型函數的等高線是雙曲線 xy = k。"
          },
          {
            "prompt": "多變量函數的定義域是？",
            "options": [
              "使式子有意義的點集",
              "一個區間",
              "一條曲線",
              "一個數"
            ],
            "answer": 0,
            "explanation": "定義域是平面上所有使函數有定義的 (x,y)，通常是一個區域。單變量的定義域才是數線上的一段。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = √(x² + y²)，f(3, 4) 等於多少？",
            "answers": [
              "5"
            ],
            "explanation": "√(9 + 16) = √25 = 5。這是點到原點的距離，故等高線是圓。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x, y) = x² + y²。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(1, 0) 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "1 + 0 = 1。"
              },
              {
                "type": "input",
                "prompt": "f(0, 2) 等於多少？",
                "answers": [
                  "4"
                ],
                "explanation": "0 + 4 = 4。"
              },
              {
                "type": "input",
                "prompt": "兩者相加等於多少？",
                "answers": [
                  "5"
                ],
                "explanation": "1 + 4 = 5。"
              }
            ],
            "explanation": "多變量函數的值仍是一個數。本題分別在兩個座標軸上取值，用來熟悉「同時代入兩個變量」的操作。"
          },
          {
            "prompt": "f(x, y) = 1/(x - y) 在哪些點無定義？",
            "options": [
              "x = y 的所有點",
              "x = 0 的點",
              "y = 0 的點",
              "原點"
            ],
            "answer": 0,
            "explanation": "分母為 0 時無定義，即 x - y = 0，也就是整條直線 y = x。多變量的「無定義」通常是一條線或一個區域，不是單獨的點。"
          },
          {
            "prompt": "等高線越密集，表示？",
            "options": [
              "高度變化越快",
              "高度變化越慢",
              "高度為 0",
              "曲面是平的"
            ],
            "answer": 0,
            "explanation": "密集表示在短距離內高度改變很多，即坡度陡。稀疏則表示平緩。這是讀地形圖的基本規則。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x + y，f(1, 2) 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "1 + 2 = 3。線性函數的等高線是平行直線 x + y = k。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x, y) = x² - y²。",
            "parts": [
              {
                "type": "input",
                "prompt": "f(2, 1) 等於多少？",
                "answers": [
                  "3"
                ],
                "explanation": "4 - 1 = 3。"
              },
              {
                "type": "input",
                "prompt": "f(1, 2) 等於多少？",
                "answers": [
                  "-3"
                ],
                "explanation": "1 - 4 = -3。這說明 f 不對稱：交換 x 與 y 會變號。"
              },
              {
                "type": "input",
                "prompt": "兩者相加等於多少？",
                "answers": [
                  "0"
                ],
                "explanation": "3 + (-3) = 0。這是因為 f(y,x) = -f(x,y)，屬於反對稱函數。"
              }
            ],
            "explanation": "x² - y² 的等高線是雙曲線，且在原點附近呈鞍形。交換座標會變號，是判斷鞍點的重要線索。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-47",
        "title": "47 · 偏導數與全微分",
        "intro": "學完這一節，你能對多變量函數求偏導數、算出全微分，並理解「固定其他變量」的意義。偏導數是梯度、極值與多重積分的基礎工具。",
        "kind": "base",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-14",
          "mendelson-calculus.skill-46"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：偏導數是固定其他變量後求導"
          },
          {
            "type": "paragraph",
            "text": "對 x 求偏導時，把 y 當成常數，只對 x 求導。這等於在 y 固定的那條線上，看函數隨 x 的變化率。對 y 求偏導同理。"
          },
          {
            "type": "formula",
            "text": "∂f/∂x：y 視為常數\n∂f/∂y：x 視為常數"
          },
          {
            "type": "heading",
            "text": "原理二：全微分是各方向改變的疊加"
          },
          {
            "type": "paragraph",
            "text": "x 與 y 同時小幅改變時，函數的總改變量近似等於兩個偏導數分別乘上各自的改變量再相加。這是單變量微分的推廣，也是誤差傳遞公式的來源。"
          },
          {
            "type": "formula",
            "text": "dz = (∂f/∂x) dx + (∂f/∂y) dy"
          },
          {
            "type": "heading",
            "text": "原理三：混合偏導通常相等"
          },
          {
            "type": "paragraph",
            "text": "先對 x 再對 y，與先對 y 再對 x，在多數常見函數上結果相同。這個性質叫二階混合偏導相等，讓計算順序可以自由選擇。"
          },
          {
            "type": "formula",
            "text": "∂²f/∂x∂y = ∂²f/∂y∂x"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，確認對哪個變量求導，另一個視為常數。"
          },
          {
            "type": "paragraph",
            "text": "第二步，套用單變量的求導法則。"
          },
          {
            "type": "paragraph",
            "text": "第三步，需要某一點的值時，把兩個座標一起代入。"
          },
          {
            "type": "paragraph",
            "text": "第四步，求全微分時分別算兩個偏導，再乘上 dx、dy。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用數值檢查：固定 y 時，函數應只隨 x 變化。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是對 x 求偏導時，把 y 也當成變量求導。y 在偏導過程中是常數，導數為 0。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把偏導數寫成 df/dx。偏導用 ∂ 而非 d，因為還有其他變量在。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是算 fx(2,3) 時只代入 x。偏導數仍是兩個變量的函數，必須同時代入。"
          }
        ],
        "questions": [
          {
            "prompt": "∂/∂x (x²y) 等於？",
            "options": [
              "2xy",
              "x²",
              "2x",
              "x²y"
            ],
            "answer": 0,
            "explanation": "對 x 求偏導時 y 是常數，故 x²y 對 x 求導得 2xy。若把 y 也求導，就會得到錯誤結果。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x²y，fx 在 (2, 3) 等於多少？",
            "answers": [
              "12"
            ],
            "explanation": "fx = 2xy，代入 x=2、y=3 得 12。注意 y 雖然是常數，但仍要代入它的值。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x²y，fy 在 (2, 3) 等於多少？",
            "answers": [
              "4"
            ],
            "explanation": "fy = x²，代入 2 得 4。對 y 求偏導時 x² 是常數，故結果不含 y。"
          },
          {
            "prompt": "偏導數的意義是？",
            "options": [
              "固定其他變量，對某一變量求變化率",
              "對所有變量同時求導",
              "對函數取絕對值",
              "求函數的最大值"
            ],
            "answer": 0,
            "explanation": "偏導數固定其他變量，只看一個方向的變化率。全微分才是所有方向改變的疊加，兩者不同。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x² + y²，fx 在 (1, 2) 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "fx = 2x，代入 1 得 2。y 在此過程中是常數，不影響結果。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x, y) = xy。",
            "parts": [
              {
                "type": "input",
                "prompt": "fx 在 (2, 3) 等於多少？",
                "answers": [
                  "3"
                ],
                "explanation": "fx = y，代入 3 得 3。對 x 求偏導時 y 是常數。"
              },
              {
                "type": "input",
                "prompt": "fy 在 (2, 3) 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "fy = x，代入 2 得 2。"
              }
            ],
            "explanation": "xy 是最簡單的混合項：對 x 求偏導得 y，對 y 求偏導得 x。這個對稱性是偏導計算的基本直覺。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = e^(xy)，fx 在 (0, 1) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "fx = y·e^(xy)，代入 x=0、y=1 得 1·e⁰ = 1。指數型要用鏈式法則，內層對 x 的導數是 y。"
          },
          {
            "prompt": "全微分的公式是？",
            "options": [
              "fx dx + fy dy",
              "fx + fy",
              "fx·fy·dx·dy",
              "f dx dy"
            ],
            "answer": 0,
            "explanation": "全微分是兩個偏導分別乘上各自的微小改變再相加。它給出函數的線性主部，用於誤差估計。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x²y²，fxy 在 (1, 1) 等於多少？",
            "answers": [
              "4"
            ],
            "explanation": "fx = 2xy²，再對 y 求導得 fxy = 4xy。代入 (1,1) 得 4。混合偏導可交換順序，結果相同。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x, y) = x² + y²。",
            "parts": [
              {
                "type": "input",
                "prompt": "fx 在 (3, 4) 等於多少？",
                "answers": [
                  "6"
                ],
                "explanation": "fx = 2x，代入 3 得 6。"
              },
              {
                "type": "input",
                "prompt": "fy 在 (3, 4) 等於多少？",
                "answers": [
                  "8"
                ],
                "explanation": "fy = 2y，代入 4 得 8。"
              },
              {
                "type": "input",
                "prompt": "兩個偏導數之和是多少？",
                "answers": [
                  "14"
                ],
                "explanation": "6 + 8 = 14。這不是梯度長度，只是分量和。"
              }
            ],
            "explanation": "兩個偏導分別代表沿 x 與 y 方向的坡度。它們組成的向量就是梯度，下一節會用它找最陡方向。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-48",
        "title": "48 · 梯度、方向導數與極值",
        "intro": "學完這一節，你能算出梯度、求任意方向的方向導數，並用梯度為零找極值點。梯度是多變量微積分最重要的向量，它同時給出最陡方向與極值條件。",
        "kind": "base",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-18",
          "mendelson-calculus.skill-47"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：梯度是偏導組成的向量"
          },
          {
            "type": "paragraph",
            "text": "把兩個偏導排成向量，就是梯度。它指向函數增長最快的方向，長度是那個方向的最大變化率。這解釋了為什麼爬山要沿梯度走。"
          },
          {
            "type": "formula",
            "text": "∇f = (∂f/∂x, ∂f/∂y)"
          },
          {
            "type": "heading",
            "text": "原理二：方向導數是梯度在該方向的投影"
          },
          {
            "type": "paragraph",
            "text": "沿單位向量 u 的變化率，等於梯度與 u 的點積。當 u 與梯度同向時最大，垂直時為 0，這說明梯度垂直於等高線。"
          },
          {
            "type": "formula",
            "text": "D_u f = ∇f · u，u 為單位向量"
          },
          {
            "type": "heading",
            "text": "原理三：極值的必要條件是梯度為零"
          },
          {
            "type": "paragraph",
            "text": "內部點要成為極值，兩個偏導必須同時為 0，即梯度為零向量。這樣的點叫臨界點。與單變量一樣，臨界點不一定是極值，可能是鞍點。"
          },
          {
            "type": "formula",
            "text": "∇f = 0：臨界點\n可能是極大、極小或鞍點"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，算兩個偏導。"
          },
          {
            "type": "paragraph",
            "text": "第二步，需要方向導數時，把方向化成單位向量再與梯度作點積。"
          },
          {
            "type": "paragraph",
            "text": "第三步，找極值先解方程組 fx = 0、fy = 0。"
          },
          {
            "type": "paragraph",
            "text": "第四步，用二階判別或代入鄰近點判斷類型。"
          },
          {
            "type": "paragraph",
            "text": "第五步，檢查結果：極小點的函數值應小於鄰近點。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是算方向導數時忘記把方向化成單位向量。用非單位向量會讓結果按比例放大。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是認為梯度為零就一定是極值。鞍點（如 f = x² - y² 在原點）也是梯度為零。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把梯度當成純量。梯度是向量，有方向與大小。"
          }
        ],
        "questions": [
          {
            "prompt": "梯度向量的方向代表？",
            "options": [
              "函數增長最快的方向",
              "函數下降最快的方向",
              "等高線方向",
              "原點方向"
            ],
            "answer": 0,
            "explanation": "梯度指向增長最快的方向，其長度是最大變化率。反方向是下降最快，垂直方向變化率為 0。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x² + y² 的梯度在 (1, 1) 的第一個分量是多少？",
            "answers": [
              "2"
            ],
            "explanation": "fx = 2x，代入 1 得 2。梯度為 (2, 2)，指向遠離原點的方向，符合函數在該方向增長最快。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x² + y² 在 (1, 1) 的梯度長度是多少？",
            "answers": [
              "2*sqrt(2)"
            ],
            "explanation": "梯度為 (2,2)，長度 √(4+4) = 2√2。這是該點的最大變化率。"
          },
          {
            "prompt": "多變量函數在內部點有極值的必要條件是？",
            "options": [
              "梯度為零向量",
              "梯度為 1",
              "偏導為 1",
              "函數值為 0"
            ],
            "answer": 0,
            "explanation": "極值要求所有方向的變化率都為 0，即兩個偏導同時為 0。這是必要條件，但鞍點也滿足，需進一步判別。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x² + y² 的極小點在原點，極小值是多少？",
            "answers": [
              "0"
            ],
            "explanation": "f(0,0) = 0。平方和非負，故 0 是最小值。梯度在原點為 (0,0)，符合極值必要條件。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x, y) = x² + y²。",
            "parts": [
              {
                "type": "input",
                "prompt": "解 fx = 0 得 x 等於多少？",
                "answers": [
                  "0"
                ],
                "explanation": "fx = 2x，令其為 0 得 x = 0。"
              },
              {
                "type": "input",
                "prompt": "解 fy = 0 得 y 等於多少？",
                "answers": [
                  "0"
                ],
                "explanation": "fy = 2y，令其為 0 得 y = 0。"
              },
              {
                "type": "input",
                "prompt": "極小值是多少？",
                "answers": [
                  "0"
                ],
                "explanation": "f(0,0) = 0。"
              }
            ],
            "explanation": "梯度為零給出方程組，解出臨界點。本題只有一個臨界點，且確為極小，因為函數是開口向上的碗形。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = x² + y² 在 (1, 1) 沿 x 方向的方向導數是多少？",
            "answers": [
              "2"
            ],
            "explanation": "方向 (1,0) 已是單位向量，梯度 (2,2) 與其點積為 2。這正是 fx 的值，沿座標軸的方向導數就是該偏導。"
          },
          {
            "prompt": "梯度與等高線的關係是？",
            "options": [
              "互相垂直",
              "互相平行",
              "方向相同",
              "無關"
            ],
            "answer": 0,
            "explanation": "沿等高線移動時函數值不變，變化率為 0，故梯度與等高線垂直。這也解釋了為什麼梯度指向最陡上升方向。"
          },
          {
            "type": "input",
            "prompt": "f(x, y) = xy 的臨界點，x 等於多少？",
            "answers": [
              "0"
            ],
            "explanation": "fx = y、fy = x，同時為 0 得 x = 0、y = 0。此點是鞍點，不是極值。"
          },
          {
            "type": "multipart",
            "prompt": "設 f(x, y) = x² + y² - 2x。",
            "parts": [
              {
                "type": "input",
                "prompt": "解 fx = 0 得 x 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "fx = 2x - 2，令其為 0 得 x = 1。"
              },
              {
                "type": "input",
                "prompt": "解 fy = 0 得 y 等於多少？",
                "answers": [
                  "0"
                ],
                "explanation": "fy = 2y，令其為 0 得 y = 0。"
              },
              {
                "type": "input",
                "prompt": "極小值是多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "f(1,0) = 1 + 0 - 2 = -1。配方也可得 (x-1)² + y² - 1，最小值 -1。"
              }
            ],
            "explanation": "本題的臨界點不在原點，配方後可看出是碗形平移。梯度法與配方法結果一致，可互相驗證。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-49",
        "title": "49 · 二重積分與區域",
        "intro": "學完這一節，你能在矩形與簡單區域上算二重積分，並理解它等於「把平面切成小塊後累加」。二重積分是面積、質量與平均值的統一工具。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-23",
          "mendelson-calculus.skill-47"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：二重積分是兩次單變量積分"
          },
          {
            "type": "paragraph",
            "text": "把平面區域切成小方塊，每塊用函數值乘面積，再加起來取極限，就是二重積分。實際計算時寫成累次積分：先對內層變量積分，再對外層積分。"
          },
          {
            "type": "formula",
            "text": "∬_R f(x, y) dA = ∫a^b ∫c^d f(x, y) dy dx"
          },
          {
            "type": "heading",
            "text": "原理二：區域決定上下限"
          },
          {
            "type": "paragraph",
            "text": "矩形區域的上下限是常數；非矩形區域的內層上下限會依外層變量而變。先畫出區域，再判斷哪個方向切比較容易，是設定積分的關鍵。"
          },
          {
            "type": "formula",
            "text": "矩形：∫a^b ∫c^d\n一般區域：∫a^b ∫g₁(x)^g₂(x)"
          },
          {
            "type": "heading",
            "text": "原理三：積分 1 得到面積"
          },
          {
            "type": "paragraph",
            "text": "被積函數是 1 時，二重積分就是區域的面積。這是檢查上下限是否正確最快的方法：算出的面積應與幾何直覺相符。"
          },
          {
            "type": "formula",
            "text": "∬_R 1 dA = 面積(R)"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，畫出區域，確認是矩形還是曲邊區域。"
          },
          {
            "type": "paragraph",
            "text": "第二步，決定積分順序，選內層較容易積的方向。"
          },
          {
            "type": "paragraph",
            "text": "第三步，寫出內外兩層的上下限。"
          },
          {
            "type": "paragraph",
            "text": "第四步，先算內層，把結果當成外層的被積函數。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用「積分 1 得面積」檢查設定是否正確。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是內外層上下限寫反。內層的上下限可以含外層變量，外層的必須是常數。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是把二重積分當成兩個獨立積分的乘積。只有被積函數可分離且區域是矩形時才成立。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是忘記 dA 在極座標下是 r dr dθ，不是 dr dθ。少了 r 會讓面積算錯。"
          }
        ],
        "questions": [
          {
            "prompt": "二重積分的實際計算方式是？",
            "options": [
              "內外兩次單變量積分",
              "一次積分",
              "兩個積分相乘",
              "求導"
            ],
            "answer": 0,
            "explanation": "二重積分化成累次積分：先對內層變量積分，結果再對外層積分。這是把二維問題拆成兩個一維問題。"
          },
          {
            "type": "input",
            "prompt": "∬ 1 dA 在區域 [0,1]×[0,2] 上等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "被積函數為 1，積分等於區域面積：1 × 2 = 2。這是檢查上下限最快的方法。"
          },
          {
            "type": "input",
            "prompt": "∬ xy dA 在 [0,1]×[0,1] 上等於多少？",
            "answers": [
              "1/4"
            ],
            "explanation": "分離變量：∫0¹x dx · ∫0¹y dy = (1/2)(1/2) = 1/4。矩形區域且被積函數可分離時，可以拆成兩個積分相乘。"
          },
          {
            "prompt": "∬ 1 dA 的幾何意義是？",
            "options": [
              "區域的面積",
              "區域的周長",
              "區域的體積",
              "區域的質心"
            ],
            "answer": 0,
            "explanation": "被積函數為 1 時，二重積分就是區域面積。若被積函數是密度，則得到質量；除以面積則得到平均值。"
          },
          {
            "type": "input",
            "prompt": "∬ x dA 在 [0,2]×[0,1] 上等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "∫0¹dy · ∫0²x dx = 1 · 2 = 2。被積函數只含 x，對 y 的積分只是乘上 y 的區間長度。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∬ 1 dA 在 [0,2]×[0,3] 上。",
            "parts": [
              {
                "type": "input",
                "prompt": "先對 y 積分（0 到 3），結果是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "∫0³ 1 dy = 3。這是內層積分，結果是常數。"
              },
              {
                "type": "input",
                "prompt": "再對 x 積分（0 到 2），結果是多少？",
                "answers": [
                  "6"
                ],
                "explanation": "∫0² 3 dx = 6。區域面積 2×3 = 6，一致。"
              }
            ],
            "explanation": "矩形區域的累次積分最簡單：內層積出一個常數，外層再乘上長度。結果必等於面積。"
          },
          {
            "type": "input",
            "prompt": "∬ x² dA 在 [0,1]×[0,1] 上等於多少？",
            "answers": [
              "1/3"
            ],
            "explanation": "∫0¹x²dx · ∫0¹1 dy = (1/3)·1 = 1/3。被積函數只含 x，對 y 積分得 1。"
          },
          {
            "prompt": "矩形區域上，二重積分的積分順序可以交換嗎？",
            "options": [
              "可以，結果相同",
              "不可以",
              "只有被積函數為 1 時可以",
              "只有區域為正方形時可以"
            ],
            "answer": 0,
            "explanation": "矩形區域且函數連續時，交換順序不改變結果（Fubini 定理）。非矩形區域也可交換，但上下限要重新設定。"
          },
          {
            "type": "input",
            "prompt": "∬ y dA 在 [0,1]×[0,2] 上等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "對 y 積分：∫0² y dy = 2；對 x 積分得區間長度 1。乘積為 2。也可用平均值檢查：y 在 [0,2] 的平均是 1，區域面積 2，乘積為 2。"
          },
          {
            "type": "multipart",
            "prompt": "計算 ∬ xy dA 在 [0,2]×[0,1] 上。",
            "parts": [
              {
                "type": "input",
                "prompt": "先對 x 積分（0 到 2），結果中 y 的係數是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "∫0² xy dx = y·(4/2) = 2y，係數為 2。"
              },
              {
                "type": "input",
                "prompt": "再對 y 積分（0 到 1），結果是多少？",
                "answers": [
                  "1"
                ],
                "explanation": "∫0¹ 2y dy = 1。區域面積 2，平均 xy 為 1/2，乘積為 1。"
              }
            ],
            "explanation": "可分離的被積函數在矩形上可以拆成兩個積分相乘：∫0²x dx · ∫0¹y dy = 2 · 1/2 = 1，與累次積分結果相同。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-50",
        "title": "50 · 多重積分與座標變換",
        "intro": "學完這一節，你能在極座標下算二重積分，並理解座標變換時面積元素為什麼要乘上縮放因子。這是處理圓形與環形區域的標準方法。",
        "kind": "integral",
        "minutes": 24,
        "parents": [
          "mendelson-calculus.skill-25",
          "mendelson-calculus.skill-49"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：極座標的面積元素是 r dr dθ"
          },
          {
            "type": "paragraph",
            "text": "在極座標中，小塊面積不是 dr dθ，而是 r dr dθ。多出的 r 來自扇形：角度 dθ 對應的弧長是 r dθ，乘上徑向寬度 dr 才是面積。這是本章最關鍵的細節。"
          },
          {
            "type": "formula",
            "text": "dA = r dr dθ\n∬_R f dA = ∫∫ f(r cos θ, r sin θ)·r dr dθ"
          },
          {
            "type": "heading",
            "text": "原理二：Jacobian 是面積縮放因子"
          },
          {
            "type": "paragraph",
            "text": "一般座標變換 (x,y) → (u,v) 時，面積元素要乘上 Jacobian 行列式的絕對值。極座標的 Jacobian 恰好是 r，這就是多出 r 的來源。"
          },
          {
            "type": "formula",
            "text": "dA = |∂(x,y)/∂(u,v)| du dv\n極座標：|J| = r"
          },
          {
            "type": "heading",
            "text": "原理三：圓形區域優先考慮極座標"
          },
          {
            "type": "paragraph",
            "text": "區域是圓、環、扇形，或被積函數含 x²+y² 時，極座標通常能大幅簡化。矩形區域則用直角座標更直接。"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，判斷區域是否為圓形；是則考慮極座標。"
          },
          {
            "type": "paragraph",
            "text": "第二步，把邊界改寫成 r 與 θ 的範圍。"
          },
          {
            "type": "paragraph",
            "text": "第三步，被積函數用 x = r cos θ、y = r sin θ 代入。"
          },
          {
            "type": "paragraph",
            "text": "第四步，別忘記面積元素乘上 r。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用「積分 1 得面積」檢查：單位圓應得 π。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是漏掉 r。只寫 dr dθ 會讓圓面積算成 2π 而非 π。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是角度範圍取錯。完整圓是 0 到 2π，半圓是 0 到 π。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是把 r 的範圍寫成常數區間卻不檢查邊界。圓 r = 1 的範圍是 0 到 1，環則是內外半徑之間。"
          }
        ],
        "questions": [
          {
            "prompt": "極座標下的面積元素是？",
            "options": [
              "r dr dθ",
              "dr dθ",
              "r² dr dθ",
              "dr dθ / r"
            ],
            "answer": 0,
            "explanation": "極座標的面積元素是 r dr dθ，多出的 r 來自扇形弧長。少了它，圓面積會算成 2π 而不是 π。"
          },
          {
            "type": "input",
            "prompt": "用極座標算單位圓面積 ∫0^2π∫0^1 r dr dθ 等於多少？（π 請寫 pi）",
            "answers": [
              "pi"
            ],
            "explanation": "內層 ∫0¹ r dr = 1/2，外層 ∫0^2π 1/2 dθ = π。與 πr² = π 一致，驗證了面積元素含 r 的必要性。"
          },
          {
            "type": "input",
            "prompt": "∬ 1 dA 在半徑 2 的圓上等於多少？（π 請寫 pi）",
            "answers": [
              "4*pi"
            ],
            "explanation": "面積為 πr² = 4π。用極座標：∫0^2π∫0² r dr dθ = 2π·2 = 4π，兩法一致。"
          },
          {
            "prompt": "座標變換中 Jacobian 的作用是？",
            "options": [
              "面積縮放因子",
              "函數值",
              "積分上下限",
              "區域周長"
            ],
            "answer": 0,
            "explanation": "Jacobian 的行列式絕對值描述小面積塊在變換後被放大或縮小幾倍。極座標的 Jacobian 是 r，這正是面積元素多出 r 的原因。"
          },
          {
            "type": "input",
            "prompt": "∫0^2π∫0^1 r dr dθ 中，內層積分 ∫0^1 r dr 等於多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "∫0¹ r dr = r²/2 在 1 的值 = 1/2。這是半徑 1 的「平均半徑乘半徑」，外層再乘 2π 得 π。"
          },
          {
            "type": "multipart",
            "prompt": "考慮半徑 R 的圓，用極座標算面積。",
            "parts": [
              {
                "type": "input",
                "prompt": "內層 ∫0^R r dr 等於多少？（以 R 表示，R=1 時的值）",
                "answers": [
                  "1/2"
                ],
                "explanation": "∫0^R r dr = R²/2，R=1 時為 1/2。"
              },
              {
                "type": "input",
                "prompt": "外層乘上 2π 後，R=1 的面積是多少？（π 請寫 pi）",
                "answers": [
                  "pi"
                ],
                "explanation": "2π · 1/2 = π。與 πR² 一致。"
              }
            ],
            "explanation": "極座標算圓面積的標準流程：內層積 r 得 R²/2，外層積角度得 2π，相乘為 πR²。這個推導比幾何公式更有說服力。"
          },
          {
            "type": "input",
            "prompt": "∬ r dA 在單位圓上等於多少？（π 請寫 pi）",
            "answers": [
              "2*pi/3"
            ],
            "explanation": "∬ r · r dr dθ = ∫0^2π∫0¹ r² dr dθ = 2π · (1/3) = 2π/3。注意被積函數已是 r，面積元素又乘一個 r，故為 r²。"
          },
          {
            "prompt": "什麼時候應該優先使用極座標？",
            "options": [
              "區域是圓形或含 x²+y² 時",
              "區域是矩形時",
              "函數是常數時",
              "積分上限為無窮時"
            ],
            "answer": 0,
            "explanation": "圓形、環形、扇形區域，或被積函數含 x²+y²，用極座標可大幅簡化。矩形區域用直角座標更直接。"
          },
          {
            "type": "input",
            "prompt": "∬ 1 dA 在 [0,1]×[0,1] 上等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "區域面積 1×1 = 1。這是直角座標最簡單的情形，不需要極座標。"
          },
          {
            "type": "multipart",
            "prompt": "用極座標算 ∬ r dA，區域為 0 ≤ r ≤ 1、0 ≤ θ ≤ 2π。",
            "parts": [
              {
                "type": "input",
                "prompt": "內層 ∫0¹ r² dr 等於多少？",
                "answers": [
                  "1/3"
                ],
                "explanation": "被積函數 r 乘面積元素的 r 得 r²，積分為 r³/3，在 1 的值為 1/3。"
              },
              {
                "type": "input",
                "prompt": "外層乘上 2π 後，結果是多少？（π 請寫 pi）",
                "answers": [
                  "2*pi/3"
                ],
                "explanation": "2π · 1/3 = 2π/3。"
              }
            ],
            "explanation": "極座標積分要同時注意被積函數與面積元素。本題被積函數是 r，面積元素也含 r，兩者相乘得 r²，這是最容易漏掉的地方。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-51",
        "title": "51 · 向量場與線積分",
        "intro": "學完這一節，你能算出向量場沿曲線的線積分，並判斷它是否為保守場。保守場的線積分只依端點，這讓計算大幅簡化，也是位能概念的數學基礎。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-38",
          "mendelson-calculus.skill-47",
          "mendelson-calculus.skill-49"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：向量場在每一點給一個向量"
          },
          {
            "type": "paragraph",
            "text": "向量場 F(x, y) 在平面每一點指定一個向量，可想像成風場或水流。線積分把沿路徑的「F 在路徑方向的分量」累加起來，代表做功或流量。"
          },
          {
            "type": "formula",
            "text": "F(x, y) = (P(x, y), Q(x, y))"
          },
          {
            "type": "heading",
            "text": "原理二：線積分是 F 與位移的點積"
          },
          {
            "type": "paragraph",
            "text": "沿曲線把每一小段的位移 dr 與該處的 F 作點積，再積分。只有與路徑同向的分量有貢獻，垂直分量不貢獻，這正是「做功」的幾何意義。"
          },
          {
            "type": "formula",
            "text": "∫_C F · dr = ∫a^b F(r(t)) · r'(t) dt"
          },
          {
            "type": "heading",
            "text": "原理三：保守場的線積分只依端點"
          },
          {
            "type": "paragraph",
            "text": "若 F 是某個純量函數 f 的梯度，稱 F 為保守場，f 為位勢。此時線積分等於位勢在終點減起點，與路徑無關。判斷條件是 ∂Q/∂x = ∂P/∂y。"
          },
          {
            "type": "formula",
            "text": "F = ∇f  ⇒  ∫_C F·dr = f(終點) - f(起點)\n保守條件：∂Q/∂x = ∂P/∂y"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，寫出 F 的兩個分量 P、Q。"
          },
          {
            "type": "paragraph",
            "text": "第二步，參數化路徑，求 r'(t)。"
          },
          {
            "type": "paragraph",
            "text": "第三步，作點積後對 t 積分。"
          },
          {
            "type": "paragraph",
            "text": "第四步，先檢查是否保守：若保守，直接找位勢用端點相減。"
          },
          {
            "type": "paragraph",
            "text": "第五步，用簡單路徑驗證：保守場沿閉曲線的積分必為 0。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是把線積分當成一般定積分。必須先與路徑的切向量作點積，不能只積分量。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是認為所有向量場都保守。只有滿足 ∂Q/∂x = ∂P/∂y 的場才保守。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是保守場仍沿路徑硬算。找到位勢後用端點相減，可省去大量計算。"
          }
        ],
        "questions": [
          {
            "prompt": "線積分的計算公式是？",
            "options": [
              "∫F·dr",
              "∫F dr",
              "∫|F| dr",
              "∫F × dr"
            ],
            "answer": 0,
            "explanation": "線積分是 F 與位移向量的點積再積分，只有沿路徑方向的分量有貢獻。用叉積的是另一種量，不是做功。"
          },
          {
            "type": "input",
            "prompt": "F = (1, 0) 沿 x 軸從 0 到 2 的線積分是多少？",
            "answers": [
              "2"
            ],
            "explanation": "路徑方向為 (1,0)，F·dr = 1·dx，積分得 2。這是常力沿直線做功的最簡單情形。"
          },
          {
            "type": "input",
            "prompt": "F = (x, 0) 沿 x 軸從 0 到 1 的線積分是多少？",
            "answers": [
              "1/2"
            ],
            "explanation": "F·dr = x dx，∫0¹ x dx = 1/2。力隨位置增加，故總功是平均力 1/2 乘位移 1。"
          },
          {
            "prompt": "向量場保守的條件是？",
            "options": [
              "∂Q/∂x = ∂P/∂y",
              "P = Q",
              "∂P/∂x = ∂Q/∂y",
              "F = 0"
            ],
            "answer": 0,
            "explanation": "這是二維的旋度為零條件。滿足時存在位勢函數 f 使 F = ∇f，線積分只依端點。"
          },
          {
            "type": "input",
            "prompt": "F = (2x, 2y) 從 (0,0) 到 (1,1) 的線積分是多少？",
            "answers": [
              "2"
            ],
            "explanation": "F 是 f = x² + y² 的梯度，故積分等於 f(1,1) - f(0,0) = 2 - 0 = 2。保守場不必沿路徑計算。"
          },
          {
            "type": "multipart",
            "prompt": "F = (1, 1)，沿直線從 (0,0) 到 (2,3)。",
            "parts": [
              {
                "type": "input",
                "prompt": "位移的 x 分量是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "終點 x 減起點 x：2 - 0 = 2。"
              },
              {
                "type": "input",
                "prompt": "線積分是多少？",
                "answers": [
                  "5"
                ],
                "explanation": "F·dr = 1·2 + 1·3 = 5。常向量場的線積分等於 F 與總位移的點積。"
              }
            ],
            "explanation": "常向量場是最簡單的情形：線積分等於 F 與位移向量的點積，與路徑形狀無關。這也說明常場必保守。"
          },
          {
            "type": "input",
            "prompt": "F = (y, x) 是否為保守場？是填 1。",
            "answers": [
              "1"
            ],
            "explanation": "P = y、Q = x，∂Q/∂x = 1、∂P/∂y = 1，兩者相等，故保守。位勢為 f = xy，因為 ∇(xy) = (y, x)。"
          },
          {
            "prompt": "保守場的線積分有何特性？",
            "options": [
              "只依起點與終點",
              "只依路徑長度",
              "恆為 0",
              "恆為正"
            ],
            "answer": 0,
            "explanation": "保守場的線積分等於位勢的端點差，與路徑無關。沿閉曲線積分為 0，因為起終點相同。"
          },
          {
            "type": "input",
            "prompt": "位勢 f = x² + y² 的梯度在 (1, 1) 的第一個分量是多少？",
            "answers": [
              "2"
            ],
            "explanation": "∇f = (2x, 2y)，在 (1,1) 為 (2,2)，第一個分量是 2。梯度場就是最典型的保守場。"
          },
          {
            "type": "multipart",
            "prompt": "F = (3, 0)，沿 x 軸從 0 到 4。",
            "parts": [
              {
                "type": "input",
                "prompt": "位移是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "從 0 到 4，位移為 4。"
              },
              {
                "type": "input",
                "prompt": "線積分是多少？",
                "answers": [
                  "12"
                ],
                "explanation": "F·dr = 3·4 = 12。常力沿直線做功等於力乘位移。"
              }
            ],
            "explanation": "本題是做功的最基本模型：定力 3、位移 4，功為 12。線積分在此退化為乘法。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-52",
        "title": "52 · 微分方程與初值",
        "intro": "學完這一節，你能解最常見的可分離微分方程，並用初值條件定出唯一解。這是微積分的最後一站：把「變化率的關係」還原成「函數本身」。",
        "kind": "integral",
        "minutes": 26,
        "parents": [
          "mendelson-calculus.skill-29",
          "mendelson-calculus.skill-31",
          "mendelson-calculus.skill-33"
        ],
        "content": [
          {
            "type": "heading",
            "text": "原理一：微分方程是含導數的方程"
          },
          {
            "type": "paragraph",
            "text": "微分方程給出函數與其導數的關係，例如 y' = ky。解不是一個數，而是一個函數。通解含任意常數，代表一整族曲線。"
          },
          {
            "type": "formula",
            "text": "y' = f(x, y)  ⇒  求 y(x)"
          },
          {
            "type": "heading",
            "text": "原理二：可分離方程分兩邊積分"
          },
          {
            "type": "paragraph",
            "text": "若方程能寫成 y 的函數乘 dx 等於 x 的函數乘 dy，就把兩邊分別積分。這是最好解的一類，也是最常見的一類。"
          },
          {
            "type": "formula",
            "text": "dy/dx = g(x)h(y)  ⇒  ∫dy/h(y) = ∫g(x) dx"
          },
          {
            "type": "heading",
            "text": "原理三：初值條件選出唯一解"
          },
          {
            "type": "paragraph",
            "text": "通解含常數 C。給定一點的函數值，就能解出 C，得到唯一解。沒有初值條件，答案只能寫成含 C 的族。"
          },
          {
            "type": "formula",
            "text": "y(x₀) = y₀ 代入通解求 C"
          },
          {
            "type": "heading",
            "text": "操作步驟"
          },
          {
            "type": "paragraph",
            "text": "第一步，判斷是否可分離：能否把 x 與 y 分到兩邊。"
          },
          {
            "type": "paragraph",
            "text": "第二步，兩邊分別積分，加上常數 C。"
          },
          {
            "type": "paragraph",
            "text": "第三步，若有初值條件，代入求 C。"
          },
          {
            "type": "paragraph",
            "text": "第四步，把 C 寫回，得到特解。"
          },
          {
            "type": "paragraph",
            "text": "第五步，求導驗證：把解代回原方程，兩邊應相等。"
          },
          {
            "type": "heading",
            "text": "常見誤解"
          },
          {
            "type": "tip",
            "text": "最常見的錯誤是忘記加 C。通解必須含常數，否則只得到一條曲線。"
          },
          {
            "type": "tip",
            "text": "第二個誤解是分離時把 dy 與 dx 當成普通代數式隨意移項。本質上是對兩邊積分，只是記法方便。"
          },
          {
            "type": "tip",
            "text": "第三個誤解是初值代入後沒有解出 C，或把 C 留在答案裡當成已知。"
          }
        ],
        "questions": [
          {
            "prompt": "可分離微分方程的解法是？",
            "options": [
              "分離變量後兩邊積分",
              "直接求導",
              "用二階判別",
              "用部分分式"
            ],
            "answer": 0,
            "explanation": "把含 y 的項與 dy 放一邊、含 x 的項與 dx 放另一邊，再分別積分。這是最基本也最常用的解法。"
          },
          {
            "type": "input",
            "prompt": "y' = y 且 y(0) = 1，則 y(1) 等於多少？（e 請寫 e）",
            "answers": [
              "e"
            ],
            "explanation": "分離得 dy/y = dx，積分得 ln y = x + C，即 y = Ae^x。由 y(0)=1 得 A=1，故 y(1) = e。"
          },
          {
            "type": "input",
            "prompt": "y' = 2x 且 y(0) = 0，則 y(1) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "直接積分得 y = x² + C，由 y(0)=0 得 C=0，故 y(1) = 1。這是最簡單的可分離方程。"
          },
          {
            "prompt": "y' = ky 的通解是？",
            "options": [
              "y = C·e^(kt)",
              "y = C + kt",
              "y = kt",
              "y = C·t^k"
            ],
            "answer": 0,
            "explanation": "分離積分得 ln y = kt + C，取指數得 y = Ae^(kt)。這是成長與衰減模型的基礎。"
          },
          {
            "type": "input",
            "prompt": "y' = 3y 且 y(0) = 2，通解中的常數 C 等於多少？",
            "answers": [
              "2"
            ],
            "explanation": "通解 y = C·e^(3t)，代入 t=0 得 y(0) = C = 2。初值直接給出常數。"
          },
          {
            "type": "multipart",
            "prompt": "解 y' = 2x，且 y(0) = 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "通解 y = x² + C 中，C 等於多少？",
                "answers": [
                  "1"
                ],
                "explanation": "代入 y(0)=1 得 0 + C = 1，故 C = 1。"
              },
              {
                "type": "input",
                "prompt": "y(1) 等於多少？",
                "answers": [
                  "2"
                ],
                "explanation": "y = x² + 1，代入 1 得 2。"
              }
            ],
            "explanation": "可分離方程的解題流程：積分得通解、代初值定 C、用特解求其他點。三步缺一不可。"
          },
          {
            "type": "input",
            "prompt": "y' = y 且 y(0) = 3，則 y(0) 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "題目直接給 y(0) = 3，這就是初值條件。通解 y = 3e^t 在 t=0 時也確實等於 3。"
          },
          {
            "prompt": "初值條件的作用是？",
            "options": [
              "定出通解中的常數",
              "決定微分方程的階數",
              "消除導數",
              "改變方程形式"
            ],
            "answer": 0,
            "explanation": "通解含任意常數，代表一整族解。初值條件把常數固定，選出通過該點的唯一解。"
          },
          {
            "type": "input",
            "prompt": "dy/dx = 1/x 且 y(1) = 0，則 y(e) 等於多少？",
            "answers": [
              "1"
            ],
            "explanation": "積分得 y = ln|x| + C，代入 y(1)=0 得 C=0，故 y(e) = ln e = 1。"
          },
          {
            "type": "multipart",
            "prompt": "解 y' = 6x，且 y(1) = 2。",
            "parts": [
              {
                "type": "input",
                "prompt": "通解 y = 3x² + C 中，C 等於多少？",
                "answers": [
                  "-1"
                ],
                "explanation": "代入 y(1)=2 得 3 + C = 2，故 C = -1。"
              },
              {
                "type": "input",
                "prompt": "y(2) 等於多少？",
                "answers": [
                  "11"
                ],
                "explanation": "y = 3x² - 1，代入 2 得 12 - 1 = 11。"
              }
            ],
            "explanation": "本題的初值不在原點，代入時要完整計算。這是實際問題的常態：初始條件往往在某個非零時刻。"
          }
        ],
        "passCount": 7
      }
    ]
  }
];
