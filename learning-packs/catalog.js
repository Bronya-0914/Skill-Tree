// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。
const LEARNING_PACKS = [
  {
    "topic": {
      "schemaVersion": 1,
      "id": "mendelson-calculus",
      "title": "3000 Solved Problems in Calculus · 全書技能路線",
      "version": 1,
      "description": "依全書 46 章重新設計 52 個節點，包含數值輸入題與分步長題。",
      "attachTo": "start"
    },
    "nodes": [
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-01",
        "title": "01 · 不等式與區間",
        "intro": "參考原書第 1 章。學習不等式與區間，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "移項後若乘除負數，不等號必須反向。先找臨界點，再測試各區間；端點是否包含取決於等號。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "解 2x+5<13，輸入 x 的上界。"
          },
          {
            "type": "example",
            "text": "解 2x+5<13，輸入 x 的上界。\n計算：(13-5)/2 = 4。"
          },
          {
            "type": "paragraph",
            "text": "解 2x+6<14，輸入 x 的上界。"
          },
          {
            "type": "example",
            "text": "解 2x+6<14，輸入 x 的上界。\n計算：(14-6)/2 = 4。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "解 2x+2<10，輸入 x 的上界。",
            "answers": [
              "4"
            ],
            "explanation": "計算：(10-2)/2 = 4。"
          },
          {
            "type": "input",
            "prompt": "解 -2x≤6，輸入 x 的下界。",
            "answers": [
              "-3"
            ],
            "explanation": "計算：6/(-2) = -3。"
          },
          {
            "type": "input",
            "prompt": "|x|≤2 的區間長度是多少？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2-(-2) = 4。"
          },
          {
            "type": "input",
            "prompt": "(x-2)(x-5)<0，輸入解區間的左端點。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "x²<4，有幾個整數解？",
            "answers": [
              "3"
            ],
            "explanation": "計算：2*2-1 = 3。"
          },
          {
            "type": "input",
            "prompt": "解 2x+3<11，輸入 x 的上界。",
            "answers": [
              "4"
            ],
            "explanation": "計算：(11-3)/2 = 4。"
          },
          {
            "type": "input",
            "prompt": "解 -3x≤9，輸入 x 的下界。",
            "answers": [
              "-3"
            ],
            "explanation": "計算：9/(-3) = -3。"
          },
          {
            "type": "input",
            "prompt": "|x|≤3 的區間長度是多少？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3-(-3) = 6。"
          },
          {
            "type": "input",
            "prompt": "(x-3)(x-6)<0，輸入解區間的左端點。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "x²<9，有幾個整數解？",
            "answers": [
              "5"
            ],
            "explanation": "計算：2*3-1 = 5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-02",
        "title": "02 · 絕對值與分段",
        "intro": "參考原書第 2 章。學習絕對值與分段，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-01"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "|x-a| 是 x 與 a 的距離。去掉絕對值之前先看括號內的正負；距離方程可能有兩個解。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "計算 |-7|。"
          },
          {
            "type": "example",
            "text": "計算 |-7|。\n計算：7 = 7。"
          },
          {
            "type": "paragraph",
            "text": "計算 |-8|。"
          },
          {
            "type": "example",
            "text": "計算 |-8|。\n計算：8 = 8。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "計算 |-4|。",
            "answers": [
              "4"
            ],
            "explanation": "計算：4 = 4。"
          },
          {
            "type": "input",
            "prompt": "|x-2|=3，較大的根是多少？",
            "answers": [
              "5"
            ],
            "explanation": "計算：2+3 = 5。"
          },
          {
            "type": "input",
            "prompt": "|x-2|≤2，輸入左端點。",
            "answers": [
              "0"
            ],
            "explanation": "計算：2-2 = 0。"
          },
          {
            "type": "input",
            "prompt": "x=-2 時，|x-1| 等於多少？",
            "answers": [
              "3"
            ],
            "explanation": "計算：2+1 = 3。"
          },
          {
            "type": "input",
            "prompt": "|2x-4|=0，求 x。",
            "answers": [
              "2"
            ],
            "explanation": "計算：4/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "計算 |-5|。",
            "answers": [
              "5"
            ],
            "explanation": "計算：5 = 5。"
          },
          {
            "type": "input",
            "prompt": "|x-3|=3，較大的根是多少？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3+3 = 6。"
          },
          {
            "type": "input",
            "prompt": "|x-3|≤2，輸入左端點。",
            "answers": [
              "1"
            ],
            "explanation": "計算：3-2 = 1。"
          },
          {
            "type": "input",
            "prompt": "x=-3 時，|x-1| 等於多少？",
            "answers": [
              "4"
            ],
            "explanation": "計算：3+1 = 4。"
          },
          {
            "type": "input",
            "prompt": "|2x-6|=0，求 x。",
            "answers": [
              "3"
            ],
            "explanation": "計算：6/2 = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-03",
        "title": "03 · 直線與斜率",
        "intro": "參考原書第 3 章。學習直線與斜率，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-01"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "斜率是 y 的變化除以 x 的變化。用 y-y₁=m(x-x₁) 建立直線；垂直線沒有有限斜率。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "通過 (0,1)、(2,11) 的直線斜率？"
          },
          {
            "type": "example",
            "text": "通過 (0,1)、(2,11) 的直線斜率？\n計算：(11-1)/2 = 5。"
          },
          {
            "type": "paragraph",
            "text": "通過 (0,1)、(2,13) 的直線斜率？"
          },
          {
            "type": "example",
            "text": "通過 (0,1)、(2,13) 的直線斜率？\n計算：(13-1)/2 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "通過 (0,1)、(2,5) 的直線斜率？",
            "answers": [
              "2"
            ],
            "explanation": "計算：(5-1)/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "y=2x+3 的 y 截距？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "斜率 2、通過 (1,4)，求 y 軸截距。",
            "answers": [
              "2"
            ],
            "explanation": "計算：4-2 = 2。"
          },
          {
            "type": "input",
            "prompt": "垂直於 y=2x 的直線斜率？",
            "answers": [
              "-0.5"
            ],
            "explanation": "計算：-1/2 = -0.5。"
          },
          {
            "type": "input",
            "prompt": "y=2x 與 y=-x+6 的交點 x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：6/3 = 2。"
          },
          {
            "type": "input",
            "prompt": "通過 (0,1)、(2,7) 的直線斜率？",
            "answers": [
              "3"
            ],
            "explanation": "計算：(7-1)/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "y=3x+3 的 y 截距？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "斜率 3、通過 (1,4)，求 y 軸截距。",
            "answers": [
              "1"
            ],
            "explanation": "計算：4-3 = 1。"
          },
          {
            "type": "input",
            "prompt": "垂直於 y=3x 的直線斜率？",
            "answers": [
              "-0.3333333333333333"
            ],
            "explanation": "計算：-1/3 = -0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "y=2x 與 y=-x+9 的交點 x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：9/3 = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-04",
        "title": "04 · 圓與配方",
        "intro": "參考原書第 4 章。學習圓與配方，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-03"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "圓的標準式為 (x-a)²+(y-b)²=r²。配方時兩邊要補上相同常數；半徑是 r² 的非負平方根。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "(x-5)²+(y+1)²=25 的圓心 x？"
          },
          {
            "type": "example",
            "text": "(x-5)²+(y+1)²=25 的圓心 x？\n計算：5 = 5。"
          },
          {
            "type": "paragraph",
            "text": "(x-6)²+(y+1)²=25 的圓心 x？"
          },
          {
            "type": "example",
            "text": "(x-6)²+(y+1)²=25 的圓心 x？\n計算：6 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "(x-2)²+(y+1)²=25 的圓心 x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "x²+y²=4 的半徑？",
            "answers": [
              "2"
            ],
            "explanation": "計算：sqrt(4) = 2。"
          },
          {
            "type": "input",
            "prompt": "x²-4x+y²=0 的圓心 x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：4/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "圓心 (0,0)，通過 (6,8)，半徑？",
            "answers": [
              "10"
            ],
            "explanation": "計算：sqrt(36+64) = 10。"
          },
          {
            "type": "input",
            "prompt": "(x+2)²+(y-2)²=9 的圓心 y？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "(x-3)²+(y+1)²=25 的圓心 x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "x²+y²=9 的半徑？",
            "answers": [
              "3"
            ],
            "explanation": "計算：sqrt(9) = 3。"
          },
          {
            "type": "input",
            "prompt": "x²-6x+y²=0 的圓心 x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：6/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "圓心 (0,0)，通過 (9,12)，半徑？",
            "answers": [
              "15"
            ],
            "explanation": "計算：sqrt(81+144) = 15。"
          },
          {
            "type": "input",
            "prompt": "(x+2)²+(y-3)²=9 的圓心 y？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-05",
        "title": "05 · 函數、定義域與值域",
        "intro": "參考原書第 5 章。學習函數、定義域與值域，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-02",
          "mendelson-calculus.skill-04"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "• 函數：每個合法輸入只有一個輸出。\n• 定義域：可代入的 x；分母不為零、偶次根號內非負、對數真數為正。\n• 值域：合法輸入實際能產生的 y。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "√(x-5) 的定義域下界？"
          },
          {
            "type": "example",
            "text": "√(x-5) 的定義域下界？\n計算：5 = 5。"
          },
          {
            "type": "paragraph",
            "text": "√(x-6) 的定義域下界？"
          },
          {
            "type": "example",
            "text": "√(x-6) 的定義域下界？\n計算：6 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "√(x-2) 的定義域下界？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "1/(x-2) 的定義域排除哪個數？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "y=2-x² 的最大值？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2-0 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²+2，求 f(2)。",
            "answers": [
              "6"
            ],
            "explanation": "計算：4+2 = 6。"
          },
          {
            "type": "input",
            "prompt": "y=√(4-x²) 的最大值？",
            "answers": [
              "2"
            ],
            "explanation": "計算：sqrt(4) = 2。"
          },
          {
            "type": "input",
            "prompt": "√(x-3) 的定義域下界？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "1/(x-3) 的定義域排除哪個數？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "y=3-x² 的最大值？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3-0 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²+3，求 f(2)。",
            "answers": [
              "7"
            ],
            "explanation": "計算：4+3 = 7。"
          },
          {
            "type": "input",
            "prompt": "y=√(9-x²) 的最大值？",
            "answers": [
              "3"
            ],
            "explanation": "計算：sqrt(9) = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-06",
        "title": "06 · 圖形、合成與反函數",
        "intro": "參考原書第 5 章。學習圖形、合成與反函數，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-05"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "合成 f(g(x)) 先算內層。反函數需一對一；先交換 x、y 再解出 y。偶函數關於 y 軸對稱，奇函數關於原點對稱。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x²，g(x)=x+5。求 f(g(1))。"
          },
          {
            "type": "example",
            "text": "f(x)=x²，g(x)=x+5。求 f(g(1))。\n計算：(1+5)^2 = 36。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x²，g(x)=x+6。求 f(g(1))。"
          },
          {
            "type": "example",
            "text": "f(x)=x²，g(x)=x+6。求 f(g(1))。\n計算：(1+6)^2 = 49。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=x²，g(x)=x+2。求 f(g(1))。",
            "answers": [
              "9"
            ],
            "explanation": "計算：(1+2)^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2x+2，求 f⁻¹(8)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：(8-2)/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "y=(x-2)² 的頂點 x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "偶函數 f 已知 f(2)=5。求 f(-2)。",
            "answers": [
              "5"
            ],
            "explanation": "計算：5 = 5。"
          },
          {
            "type": "input",
            "prompt": "奇函數 f 已知 f(2)=5。求 f(-2)。",
            "answers": [
              "-5"
            ],
            "explanation": "計算：-5 = -5。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，g(x)=x+3。求 f(g(1))。",
            "answers": [
              "16"
            ],
            "explanation": "計算：(1+3)^2 = 16。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2x+3，求 f⁻¹(9)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：(9-3)/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "y=(x-3)² 的頂點 x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "偶函數 f 已知 f(3)=5。求 f(-3)。",
            "answers": [
              "5"
            ],
            "explanation": "計算：5 = 5。"
          },
          {
            "type": "input",
            "prompt": "奇函數 f 已知 f(3)=5。求 f(-3)。",
            "answers": [
              "-5"
            ],
            "explanation": "計算：-5 = -5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-07",
        "title": "07 · 極限",
        "intro": "參考原書第 6 章。學習極限，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-06"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先嘗試代入。0/0 不是答案，須化簡、約分或有理化後再求極限。左右極限相同才有雙側極限。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "lim(x→5) (x²-25)/(x-5)？"
          },
          {
            "type": "example",
            "text": "lim(x→5) (x²-25)/(x-5)？\n計算：5+5 = 10。"
          },
          {
            "type": "paragraph",
            "text": "lim(x→6) (x²-36)/(x-6)？"
          },
          {
            "type": "example",
            "text": "lim(x→6) (x²-36)/(x-6)？\n計算：6+6 = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "lim(x→2) (x²-4)/(x-2)？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2+2 = 4。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) sin(2x)/x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*1 = 2。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) (2x+1)/(2x+3)？",
            "answers": [
              "1"
            ],
            "explanation": "計算：2/2 = 1。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (√(4+x)-2)/x？",
            "answers": [
              "0.25"
            ],
            "explanation": "計算：1/(2*2) = 0.25。"
          },
          {
            "type": "input",
            "prompt": "lim(x→2) (3x-1)？",
            "answers": [
              "5"
            ],
            "explanation": "計算：3*2-1 = 5。"
          },
          {
            "type": "input",
            "prompt": "lim(x→3) (x²-9)/(x-3)？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3+3 = 6。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) sin(3x)/x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*1 = 3。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) (3x+1)/(2x+3)？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：3/2 = 1.5。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (√(9+x)-3)/x？",
            "answers": [
              "0.16666666666666666"
            ],
            "explanation": "計算：1/(2*3) = 0.16666666666666666。"
          },
          {
            "type": "input",
            "prompt": "lim(x→3) (3x-1)？",
            "answers": [
              "8"
            ],
            "explanation": "計算：3*3-1 = 8。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-08",
        "title": "08 · 連續性",
        "intro": "參考原書第 7 章。學習連續性，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-07"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "在 a 連續需要 f(a) 有定義，極限存在，且極限等於 f(a)。分段函數須核對兩側。介值定理要求在閉區間連續。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=(x²-25)/(x-5)，x≠5。要連續，f(5) 應設為多少？"
          },
          {
            "type": "example",
            "text": "f(x)=(x²-25)/(x-5)，x≠5。要連續，f(5) 應設為多少？\n計算：2*5 = 10。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=(x²-36)/(x-6)，x≠6。要連續，f(6) 應設為多少？"
          },
          {
            "type": "example",
            "text": "f(x)=(x²-36)/(x-6)，x≠6。要連續，f(6) 應設為多少？\n計算：2*6 = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=(x²-4)/(x-2)，x≠2。要連續，f(2) 應設為多少？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2 = 4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x+2（x<1），f(x)=a（x≥1）。連續需 a=?",
            "answers": [
              "3"
            ],
            "explanation": "計算：1+2 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x² 在 x=2 的極限？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "1/(x-2) 的不連續位置？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ax（x<2），f(x)=4（x≥2），連續需 a=?",
            "answers": [
              "2"
            ],
            "explanation": "計算：4/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x²-9)/(x-3)，x≠3。要連續，f(3) 應設為多少？",
            "answers": [
              "6"
            ],
            "explanation": "計算：2*3 = 6。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x+3（x<1），f(x)=a（x≥1）。連續需 a=?",
            "answers": [
              "4"
            ],
            "explanation": "計算：1+3 = 4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x² 在 x=3 的極限？",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "1/(x-3) 的不連續位置？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ax（x<2），f(x)=6（x≥2），連續需 a=?",
            "answers": [
              "3"
            ],
            "explanation": "計算：6/2 = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-09",
        "title": "09 · 差商、導數與切線",
        "intro": "參考原書第 8 章。學習差商、導數與切線，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-08"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "導數是差商的極限，代表局部變化率。先計算 f(a+h)-f(a)，再除 h、取極限；切線斜率為 f′(a)。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x²，求 f′(5)。"
          },
          {
            "type": "example",
            "text": "f(x)=x²，求 f′(5)。\n計算：2*5 = 10。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x²，求 f′(6)。"
          },
          {
            "type": "example",
            "text": "f(x)=x²，求 f′(6)。\n計算：2*6 = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=x²，求 f′(2)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2 = 4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2x+1，求 f′(0)。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，a=2, h=1，求差商。",
            "answers": [
              "5"
            ],
            "explanation": "計算：(2+1)^2-2^2 = 5。"
          },
          {
            "type": "input",
            "prompt": "y=x² 在 x=2 的切線 y 截距？",
            "answers": [
              "-4"
            ],
            "explanation": "計算：4-4*2 = -4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2，求導數。",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，求 f′(3)。",
            "answers": [
              "6"
            ],
            "explanation": "計算：2*3 = 6。"
          },
          {
            "type": "input",
            "prompt": "f(x)=3x+1，求 f′(0)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，a=3, h=1，求差商。",
            "answers": [
              "7"
            ],
            "explanation": "計算：(3+1)^2-3^2 = 7。"
          },
          {
            "type": "input",
            "prompt": "y=x² 在 x=3 的切線 y 截距？",
            "answers": [
              "-9"
            ],
            "explanation": "計算：9-6*3 = -9。"
          },
          {
            "type": "input",
            "prompt": "f(x)=3，求導數。",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 = 0。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-10",
        "title": "10 · 基本求導與乘商法則",
        "intro": "參考原書第 8 章。學習基本求導與乘商法則，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-09"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "冪次法則：xⁿ 的導數是 nxⁿ⁻¹。乘積要兩項相加；商法則分母平方，分子是上導下減上下導。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "d(x^5)/dx 在 x=2 的值？"
          },
          {
            "type": "example",
            "text": "d(x^5)/dx 在 x=2 的值？\n計算：5*2^4 = 80。"
          },
          {
            "type": "paragraph",
            "text": "d(x^6)/dx 在 x=2 的值？"
          },
          {
            "type": "example",
            "text": "d(x^6)/dx 在 x=2 的值？\n計算：6*2^5 = 192。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "d(x^2)/dx 在 x=2 的值？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2^1 = 4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x+2)x²，求 f′(1)。",
            "answers": [
              "7"
            ],
            "explanation": "計算：1+2*(1+2) = 7。"
          },
          {
            "type": "input",
            "prompt": "f(x)=1/x，求 f′(2)。",
            "answers": [
              "-0.25"
            ],
            "explanation": "計算：-1/2^2 = -0.25。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x/(x+2)，求 f′(0)。",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：2/2^2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2x³-2x，求 f′(1)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：3*2-2 = 4。"
          },
          {
            "type": "input",
            "prompt": "d(x^3)/dx 在 x=2 的值？",
            "answers": [
              "12"
            ],
            "explanation": "計算：3*2^2 = 12。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x+3)x²，求 f′(1)。",
            "answers": [
              "9"
            ],
            "explanation": "計算：1+2*(1+3) = 9。"
          },
          {
            "type": "input",
            "prompt": "f(x)=1/x，求 f′(3)。",
            "answers": [
              "-0.1111111111111111"
            ],
            "explanation": "計算：-1/3^2 = -0.1111111111111111。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x/(x+3)，求 f′(0)。",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：3/3^2 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "f(x)=3x³-2x，求 f′(1)。",
            "answers": [
              "7"
            ],
            "explanation": "計算：3*3-2 = 7。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-11",
        "title": "11 · 鏈式法則",
        "intro": "參考原書第 9 章。學習鏈式法則，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-10"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "外層先求導，保留內層，再乘內層導數。先圈出內層函數，避免遺漏倍率。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=(5x+1)²，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=(5x+1)²，求 f′(0)。\n計算：2*1*5 = 10。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=(6x+1)²，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=(6x+1)²，求 f′(0)。\n計算：2*1*6 = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=(2x+1)²，求 f′(0)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*1*2 = 4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=√(x+4)，求 f′(0)。",
            "answers": [
              "0.25"
            ],
            "explanation": "計算：1/(2*2) = 0.25。"
          },
          {
            "type": "input",
            "prompt": "f(x)=1/(2x+1)，求 f′(0)。",
            "answers": [
              "-2"
            ],
            "explanation": "計算：-2/1^2 = -2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x²+1)^2，求 f′(1)。",
            "answers": [
              "8"
            ],
            "explanation": "計算：2*2^1*2 = 8。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x³+2)²，求 f′(1)。",
            "answers": [
              "18"
            ],
            "explanation": "計算：2*(1+2)*3 = 18。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(3x+1)²，求 f′(0)。",
            "answers": [
              "6"
            ],
            "explanation": "計算：2*1*3 = 6。"
          },
          {
            "type": "input",
            "prompt": "f(x)=√(x+9)，求 f′(0)。",
            "answers": [
              "0.16666666666666666"
            ],
            "explanation": "計算：1/(2*3) = 0.16666666666666666。"
          },
          {
            "type": "input",
            "prompt": "f(x)=1/(3x+1)，求 f′(0)。",
            "answers": [
              "-3"
            ],
            "explanation": "計算：-3/1^2 = -3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x²+1)^3，求 f′(1)。",
            "answers": [
              "24"
            ],
            "explanation": "計算：3*2^2*2 = 24。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x³+3)²，求 f′(1)。",
            "answers": [
              "24"
            ],
            "explanation": "計算：2*(1+3)*3 = 24。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-12",
        "title": "12 · 三角函數與求導",
        "intro": "參考原書第 10 章。學習三角函數與求導，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-11"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "求導公式採弧度。sin 的導數是 cos，cos 的導數是 -sin，tan 的導數是 sec²；複合角仍須乘內層導數。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=sin(5x)，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=sin(5x)，求 f′(0)。\n計算：5*cos(0) = 5。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=sin(6x)，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=sin(6x)，求 f′(0)。\n計算：6*cos(0) = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=sin(2x)，求 f′(0)。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*cos(0) = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=cos(2x)，求 f′(0)。",
            "answers": [
              "0"
            ],
            "explanation": "計算：-2*sin(0) = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x)=tan(2x)，求 f′(0)。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2/cos(0)^2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2sin(x)，求 f′(pi)。",
            "answers": [
              "-2"
            ],
            "explanation": "計算：2*cos(pi) = -2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=sin(x)^2，求 f′(pi/2)。",
            "answers": [
              "0"
            ],
            "explanation": "計算：2*1*0 = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x)=sin(3x)，求 f′(0)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*cos(0) = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=cos(3x)，求 f′(0)。",
            "answers": [
              "0"
            ],
            "explanation": "計算：-3*sin(0) = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x)=tan(3x)，求 f′(0)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3/cos(0)^2 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=3sin(x)，求 f′(pi)。",
            "answers": [
              "-3"
            ],
            "explanation": "計算：3*cos(pi) = -3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=sin(x)^3，求 f′(pi/2)。",
            "answers": [
              "0"
            ],
            "explanation": "計算：3*1*0 = 0。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-13",
        "title": "13 · 中值定理與條件",
        "intro": "參考原書第 11 章。學習中值定理與條件，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-10"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先查閉區間連續、開區間可微。中值定理讓某點切線斜率等於割線斜率；端點等高時是 Rolle 定理。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x²，在 [0,10] 中值定理的 c？"
          },
          {
            "type": "example",
            "text": "f(x)=x²，在 [0,10] 中值定理的 c？\n計算：(10)/2 = 5。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x²，在 [0,12] 中值定理的 c？"
          },
          {
            "type": "example",
            "text": "f(x)=x²，在 [0,12] 中值定理的 c？\n計算：(12)/2 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=x²，在 [0,4] 中值定理的 c？",
            "answers": [
              "2"
            ],
            "explanation": "計算：(4)/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²-4x，在 [0,4] 的 Rolle 點？",
            "answers": [
              "2"
            ],
            "explanation": "計算：4/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，在 [2,4] 的平均變化率？",
            "answers": [
              "6"
            ],
            "explanation": "計算：((4)^2-2^2)/2 = 6。"
          },
          {
            "type": "input",
            "prompt": "f′(x)=2，區間長度 3，函數增加多少？",
            "answers": [
              "6"
            ],
            "explanation": "計算：2*3 = 6。"
          },
          {
            "type": "input",
            "prompt": "f(x)=|x-2| 在哪個點不可微？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，在 [0,6] 中值定理的 c？",
            "answers": [
              "3"
            ],
            "explanation": "計算：(6)/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²-6x，在 [0,6] 的 Rolle 點？",
            "answers": [
              "3"
            ],
            "explanation": "計算：6/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²，在 [3,5] 的平均變化率？",
            "answers": [
              "8"
            ],
            "explanation": "計算：((5)^2-3^2)/2 = 8。"
          },
          {
            "type": "input",
            "prompt": "f′(x)=3，區間長度 3，函數增加多少？",
            "answers": [
              "9"
            ],
            "explanation": "計算：3*3 = 9。"
          },
          {
            "type": "input",
            "prompt": "f(x)=|x-3| 在哪個點不可微？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-14",
        "title": "14 · 高階與隱函數微分",
        "intro": "參考原書第 12 章。學習高階與隱函數微分，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-11"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "隱函數中的 y 是 x 的函數，微分 y² 要寫 2yy′。求二階導數時 y′ 也會隨 x 改變。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x^7，求 f″(1)。"
          },
          {
            "type": "example",
            "text": "f(x)=x^7，求 f″(1)。\n計算：7*6 = 42。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=x^8，求 f″(1)。"
          },
          {
            "type": "example",
            "text": "f(x)=x^8，求 f″(1)。\n計算：8*7 = 56。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=x^4，求 f″(1)。",
            "answers": [
              "12"
            ],
            "explanation": "計算：4*3 = 12。"
          },
          {
            "type": "input",
            "prompt": "x²+y²=8，在 (2,2) 求 y′。",
            "answers": [
              "-1"
            ],
            "explanation": "計算：-2/2 = -1。"
          },
          {
            "type": "input",
            "prompt": "xy=2，在 (1,2) 求 y′。",
            "answers": [
              "-2"
            ],
            "explanation": "計算：-2/1 = -2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=2x³，求 f‴(x)。",
            "answers": [
              "12"
            ],
            "explanation": "計算：6*2 = 12。"
          },
          {
            "type": "input",
            "prompt": "y²=x，y=2 時求 y′。",
            "answers": [
              "0.25"
            ],
            "explanation": "計算：1/(2*2) = 0.25。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x^5，求 f″(1)。",
            "answers": [
              "20"
            ],
            "explanation": "計算：5*4 = 20。"
          },
          {
            "type": "input",
            "prompt": "x²+y²=18，在 (3,3) 求 y′。",
            "answers": [
              "-1"
            ],
            "explanation": "計算：-3/3 = -1。"
          },
          {
            "type": "input",
            "prompt": "xy=3，在 (1,3) 求 y′。",
            "answers": [
              "-3"
            ],
            "explanation": "計算：-3/1 = -3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=3x³，求 f‴(x)。",
            "answers": [
              "18"
            ],
            "explanation": "計算：6*3 = 18。"
          },
          {
            "type": "input",
            "prompt": "y²=x，y=3 時求 y′。",
            "answers": [
              "0.16666666666666666"
            ],
            "explanation": "計算：1/(2*3) = 0.16666666666666666。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-15",
        "title": "15 · 極值判別",
        "intro": "參考原書第 13 章。學習極值判別，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-13",
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "臨界點包括導數為零或不存在但函數有定義的點。閉區間最值要比較臨界點和端點；二階導數為零時不能直接下結論。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=(x-5)²+1 的最小值？"
          },
          {
            "type": "example",
            "text": "f(x)=(x-5)²+1 的最小值？\n計算：0+1 = 1。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=(x-6)²+1 的最小值？"
          },
          {
            "type": "example",
            "text": "f(x)=(x-6)²+1 的最小值？\n計算：0+1 = 1。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=(x-2)²+1 的最小值？",
            "answers": [
              "1"
            ],
            "explanation": "計算：0+1 = 1。"
          },
          {
            "type": "input",
            "prompt": "f(x)=-x²+4x 的極大值位置 x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：4/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x² 在 [-2,1] 的最大值？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x³-3x，極小點的函數值？",
            "answers": [
              "-2"
            ],
            "explanation": "計算：1-3 = -2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²+2x，求二階導數。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=(x-3)²+1 的最小值？",
            "answers": [
              "1"
            ],
            "explanation": "計算：0+1 = 1。"
          },
          {
            "type": "input",
            "prompt": "f(x)=-x²+6x 的極大值位置 x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：6/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x² 在 [-3,1] 的最大值？",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x³-3x，極小點的函數值？",
            "answers": [
              "-2"
            ],
            "explanation": "計算：1-3 = -2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x²+3x，求二階導數。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-16",
        "title": "16 · 相關變率",
        "intro": "參考原書第 14 章。學習相關變率，完成4 道分步輸入長題。",
        "kind": "derivative",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-12",
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先用幾何關係連結變量，再對時間微分，最後代入當下數值。速度有正負，不能先把變動量當常數。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "長 35 m 的梯子靠牆，底端以 2 m/s 離牆。底端距牆 21 m 時作答。"
          },
          {
            "type": "example",
            "text": "頂端高度 y（m）？\n計算：sqrt(1225-441) = 28。"
          },
          {
            "type": "example",
            "text": "頂端垂直速度 dy/dt（m/s，向上為正）？\n計算：-(21/28)*2 = -1.5。"
          },
          {
            "type": "example",
            "text": "牆、地面與梯子圍成的面積變化率（m²/s）？\n計算：(2*28+21*(-1.5))/2 = 12.25。"
          },
          {
            "type": "paragraph",
            "text": "長 40 m 的梯子靠牆，底端以 2 m/s 離牆。底端距牆 24 m 時作答。"
          },
          {
            "type": "example",
            "text": "頂端高度 y（m）？\n計算：sqrt(1600-576) = 32。"
          },
          {
            "type": "example",
            "text": "頂端垂直速度 dy/dt（m/s，向上為正）？\n計算：-(24/32)*2 = -1.5。"
          },
          {
            "type": "example",
            "text": "牆、地面與梯子圍成的面積變化率（m²/s）？\n計算：(2*32+24*(-1.5))/2 = 14。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "長 10 m 的梯子靠牆，底端以 2 m/s 離牆。底端距牆 6 m 時作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "頂端高度 y（m）？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：sqrt(100-36) = 8。"
              },
              {
                "type": "input",
                "prompt": "頂端垂直速度 dy/dt（m/s，向上為正）？",
                "answers": [
                  "-1.5"
                ],
                "explanation": "計算：-(6/8)*2 = -1.5。"
              },
              {
                "type": "input",
                "prompt": "牆、地面與梯子圍成的面積變化率（m²/s）？",
                "answers": [
                  "3.5"
                ],
                "explanation": "計算：(2*8+6*(-1.5))/2 = 3.5。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "長 15 m 的梯子靠牆，底端以 2 m/s 離牆。底端距牆 9 m 時作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "頂端高度 y（m）？",
                "answers": [
                  "12"
                ],
                "explanation": "計算：sqrt(225-81) = 12。"
              },
              {
                "type": "input",
                "prompt": "頂端垂直速度 dy/dt（m/s，向上為正）？",
                "answers": [
                  "-1.5"
                ],
                "explanation": "計算：-(9/12)*2 = -1.5。"
              },
              {
                "type": "input",
                "prompt": "牆、地面與梯子圍成的面積變化率（m²/s）？",
                "answers": [
                  "5.25"
                ],
                "explanation": "計算：(2*12+9*(-1.5))/2 = 5.25。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "長 20 m 的梯子靠牆，底端以 2 m/s 離牆。底端距牆 12 m 時作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "頂端高度 y（m）？",
                "answers": [
                  "16"
                ],
                "explanation": "計算：sqrt(400-144) = 16。"
              },
              {
                "type": "input",
                "prompt": "頂端垂直速度 dy/dt（m/s，向上為正）？",
                "answers": [
                  "-1.5"
                ],
                "explanation": "計算：-(12/16)*2 = -1.5。"
              },
              {
                "type": "input",
                "prompt": "牆、地面與梯子圍成的面積變化率（m²/s）？",
                "answers": [
                  "7"
                ],
                "explanation": "計算：(2*16+12*(-1.5))/2 = 7。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "長 25 m 的梯子靠牆，底端以 2 m/s 離牆。底端距牆 15 m 時作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "頂端高度 y（m）？",
                "answers": [
                  "20"
                ],
                "explanation": "計算：sqrt(625-225) = 20。"
              },
              {
                "type": "input",
                "prompt": "頂端垂直速度 dy/dt（m/s，向上為正）？",
                "answers": [
                  "-1.5"
                ],
                "explanation": "計算：-(15/20)*2 = -1.5。"
              },
              {
                "type": "input",
                "prompt": "牆、地面與梯子圍成的面積變化率（m²/s）？",
                "answers": [
                  "8.75"
                ],
                "explanation": "計算：(2*20+15*(-1.5))/2 = 8.75。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-17",
        "title": "17 · 函數圖形分析",
        "intro": "參考原書第 15 章。學習函數圖形分析，完成4 道分步輸入長題。",
        "kind": "derivative",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-07",
          "mendelson-calculus.skill-15"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先找定義域與截距，再用一階導數判增減、二階導數判凹凸。拐點必須真的改變凹凸，不是只看 f″=0。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "分析 f(x)=x³-147x 的圖形。"
          },
          {
            "type": "example",
            "text": "較大的臨界點 x？\n計算：sqrt(49) = 7。"
          },
          {
            "type": "example",
            "text": "此點的函數值？\n計算：7^3-147*7 = -686。"
          },
          {
            "type": "example",
            "text": "拐點的 x 座標？\n計算：6x=0 ⇒ x=0 = 0。"
          },
          {
            "type": "example",
            "text": "在 x=0 的切線斜率？\n計算：0-147 = -147。"
          },
          {
            "type": "paragraph",
            "text": "分析 f(x)=x³-192x 的圖形。"
          },
          {
            "type": "example",
            "text": "較大的臨界點 x？\n計算：sqrt(64) = 8。"
          },
          {
            "type": "example",
            "text": "此點的函數值？\n計算：8^3-192*8 = -1024。"
          },
          {
            "type": "example",
            "text": "拐點的 x 座標？\n計算：6x=0 ⇒ x=0 = 0。"
          },
          {
            "type": "example",
            "text": "在 x=0 的切線斜率？\n計算：0-192 = -192。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "分析 f(x)=x³-12x 的圖形。",
            "parts": [
              {
                "type": "input",
                "prompt": "較大的臨界點 x？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：sqrt(4) = 2。"
              },
              {
                "type": "input",
                "prompt": "此點的函數值？",
                "answers": [
                  "-16"
                ],
                "explanation": "計算：2^3-12*2 = -16。"
              },
              {
                "type": "input",
                "prompt": "拐點的 x 座標？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：6x=0 ⇒ x=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 x=0 的切線斜率？",
                "answers": [
                  "-12"
                ],
                "explanation": "計算：0-12 = -12。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "分析 f(x)=x³-27x 的圖形。",
            "parts": [
              {
                "type": "input",
                "prompt": "較大的臨界點 x？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：sqrt(9) = 3。"
              },
              {
                "type": "input",
                "prompt": "此點的函數值？",
                "answers": [
                  "-54"
                ],
                "explanation": "計算：3^3-27*3 = -54。"
              },
              {
                "type": "input",
                "prompt": "拐點的 x 座標？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：6x=0 ⇒ x=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 x=0 的切線斜率？",
                "answers": [
                  "-27"
                ],
                "explanation": "計算：0-27 = -27。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "分析 f(x)=x³-48x 的圖形。",
            "parts": [
              {
                "type": "input",
                "prompt": "較大的臨界點 x？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：sqrt(16) = 4。"
              },
              {
                "type": "input",
                "prompt": "此點的函數值？",
                "answers": [
                  "-128"
                ],
                "explanation": "計算：4^3-48*4 = -128。"
              },
              {
                "type": "input",
                "prompt": "拐點的 x 座標？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：6x=0 ⇒ x=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 x=0 的切線斜率？",
                "answers": [
                  "-48"
                ],
                "explanation": "計算：0-48 = -48。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "分析 f(x)=x³-75x 的圖形。",
            "parts": [
              {
                "type": "input",
                "prompt": "較大的臨界點 x？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：sqrt(25) = 5。"
              },
              {
                "type": "input",
                "prompt": "此點的函數值？",
                "answers": [
                  "-250"
                ],
                "explanation": "計算：5^3-75*5 = -250。"
              },
              {
                "type": "input",
                "prompt": "拐點的 x 座標？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：6x=0 ⇒ x=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 x=0 的切線斜率？",
                "answers": [
                  "-75"
                ],
                "explanation": "計算：0-75 = -75。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-18",
        "title": "18 · 最佳化建模",
        "intro": "參考原書第 16 章。學習最佳化建模，完成4 道分步輸入長題。",
        "kind": "derivative",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-15"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "把目標寫成單一變量，明確列出可行範圍，再求臨界點並比較邊界。答案須回到原情境檢查單位與可行性。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "用 84 m 圍欄圍出一個矩形。設一邊為 x，另一邊為 y，求最大面積。"
          },
          {
            "type": "example",
            "text": "由周長式得到 x+y 等於多少？\n計算：84/2 = 42。"
          },
          {
            "type": "example",
            "text": "面積最大時 x 等於多少？\n計算：42/2 = 21。"
          },
          {
            "type": "example",
            "text": "最大面積（m²）？\n計算：21*21 = 441。"
          },
          {
            "type": "example",
            "text": "面積 A(x) 的二階導數？\n計算：A=x(P/2-x) ⇒ A″=-2 = -2。"
          },
          {
            "type": "paragraph",
            "text": "用 96 m 圍欄圍出一個矩形。設一邊為 x，另一邊為 y，求最大面積。"
          },
          {
            "type": "example",
            "text": "由周長式得到 x+y 等於多少？\n計算：96/2 = 48。"
          },
          {
            "type": "example",
            "text": "面積最大時 x 等於多少？\n計算：48/2 = 24。"
          },
          {
            "type": "example",
            "text": "最大面積（m²）？\n計算：24*24 = 576。"
          },
          {
            "type": "example",
            "text": "面積 A(x) 的二階導數？\n計算：A=x(P/2-x) ⇒ A″=-2 = -2。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "用 24 m 圍欄圍出一個矩形。設一邊為 x，另一邊為 y，求最大面積。",
            "parts": [
              {
                "type": "input",
                "prompt": "由周長式得到 x+y 等於多少？",
                "answers": [
                  "12"
                ],
                "explanation": "計算：24/2 = 12。"
              },
              {
                "type": "input",
                "prompt": "面積最大時 x 等於多少？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：12/2 = 6。"
              },
              {
                "type": "input",
                "prompt": "最大面積（m²）？",
                "answers": [
                  "36"
                ],
                "explanation": "計算：6*6 = 36。"
              },
              {
                "type": "input",
                "prompt": "面積 A(x) 的二階導數？",
                "answers": [
                  "-2"
                ],
                "explanation": "計算：A=x(P/2-x) ⇒ A″=-2 = -2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "用 36 m 圍欄圍出一個矩形。設一邊為 x，另一邊為 y，求最大面積。",
            "parts": [
              {
                "type": "input",
                "prompt": "由周長式得到 x+y 等於多少？",
                "answers": [
                  "18"
                ],
                "explanation": "計算：36/2 = 18。"
              },
              {
                "type": "input",
                "prompt": "面積最大時 x 等於多少？",
                "answers": [
                  "9"
                ],
                "explanation": "計算：18/2 = 9。"
              },
              {
                "type": "input",
                "prompt": "最大面積（m²）？",
                "answers": [
                  "81"
                ],
                "explanation": "計算：9*9 = 81。"
              },
              {
                "type": "input",
                "prompt": "面積 A(x) 的二階導數？",
                "answers": [
                  "-2"
                ],
                "explanation": "計算：A=x(P/2-x) ⇒ A″=-2 = -2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "用 48 m 圍欄圍出一個矩形。設一邊為 x，另一邊為 y，求最大面積。",
            "parts": [
              {
                "type": "input",
                "prompt": "由周長式得到 x+y 等於多少？",
                "answers": [
                  "24"
                ],
                "explanation": "計算：48/2 = 24。"
              },
              {
                "type": "input",
                "prompt": "面積最大時 x 等於多少？",
                "answers": [
                  "12"
                ],
                "explanation": "計算：24/2 = 12。"
              },
              {
                "type": "input",
                "prompt": "最大面積（m²）？",
                "answers": [
                  "144"
                ],
                "explanation": "計算：12*12 = 144。"
              },
              {
                "type": "input",
                "prompt": "面積 A(x) 的二階導數？",
                "answers": [
                  "-2"
                ],
                "explanation": "計算：A=x(P/2-x) ⇒ A″=-2 = -2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "用 60 m 圍欄圍出一個矩形。設一邊為 x，另一邊為 y，求最大面積。",
            "parts": [
              {
                "type": "input",
                "prompt": "由周長式得到 x+y 等於多少？",
                "answers": [
                  "30"
                ],
                "explanation": "計算：60/2 = 30。"
              },
              {
                "type": "input",
                "prompt": "面積最大時 x 等於多少？",
                "answers": [
                  "15"
                ],
                "explanation": "計算：30/2 = 15。"
              },
              {
                "type": "input",
                "prompt": "最大面積（m²）？",
                "answers": [
                  "225"
                ],
                "explanation": "計算：15*15 = 225。"
              },
              {
                "type": "input",
                "prompt": "面積 A(x) 的二階導數？",
                "answers": [
                  "-2"
                ],
                "explanation": "計算：A=x(P/2-x) ⇒ A″=-2 = -2。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-19",
        "title": "19 · 直線運動",
        "intro": "參考原書第 17 章。學習直線運動，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "速度是位置導數，加速度是速度導數。位移為位置差，路程要按速度變號的時刻分段取絕對值。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "s(t)=5t²，求 v(3)。"
          },
          {
            "type": "example",
            "text": "s(t)=5t²，求 v(3)。\n計算：2*5*3 = 30。"
          },
          {
            "type": "paragraph",
            "text": "s(t)=6t²，求 v(3)。"
          },
          {
            "type": "example",
            "text": "s(t)=6t²，求 v(3)。\n計算：2*6*3 = 36。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "s(t)=2t²，求 v(3)。",
            "answers": [
              "12"
            ],
            "explanation": "計算：2*2*3 = 12。"
          },
          {
            "type": "input",
            "prompt": "s(t)=t³-2t，求 a(2)。",
            "answers": [
              "12"
            ],
            "explanation": "計算：6*2 = 12。"
          },
          {
            "type": "input",
            "prompt": "s(t)=2t²，在 0≤t≤2 的位移？",
            "answers": [
              "8"
            ],
            "explanation": "計算：2*(4-0) = 8。"
          },
          {
            "type": "input",
            "prompt": "v(t)=2t-4，何時靜止？",
            "answers": [
              "2"
            ],
            "explanation": "計算：4/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "v=-2 m/s，速率是多少？",
            "answers": [
              "2"
            ],
            "explanation": "計算：abs(-2) = 2。"
          },
          {
            "type": "input",
            "prompt": "s(t)=3t²，求 v(3)。",
            "answers": [
              "18"
            ],
            "explanation": "計算：2*3*3 = 18。"
          },
          {
            "type": "input",
            "prompt": "s(t)=t³-3t，求 a(2)。",
            "answers": [
              "12"
            ],
            "explanation": "計算：6*2 = 12。"
          },
          {
            "type": "input",
            "prompt": "s(t)=3t²，在 0≤t≤2 的位移？",
            "answers": [
              "12"
            ],
            "explanation": "計算：3*(4-0) = 12。"
          },
          {
            "type": "input",
            "prompt": "v(t)=2t-6，何時靜止？",
            "answers": [
              "3"
            ],
            "explanation": "計算：6/2 = 3。"
          },
          {
            "type": "input",
            "prompt": "v=-3 m/s，速率是多少？",
            "answers": [
              "3"
            ],
            "explanation": "計算：abs(-3) = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-20",
        "title": "20 · 微分與線性近似",
        "intro": "參考原書第 18 章。學習微分與線性近似，完成10 道輸入練習。",
        "kind": "derivative",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-14"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "在已知點 a 附近用 f(a)+f′(a)(x-a) 近似。dx 是輸入改變，dy=f′(a)dx 是一階估計，並非精確變化。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "用 a=25 的線性化近似 √(25+0.02)。"
          },
          {
            "type": "example",
            "text": "用 a=25 的線性化近似 √(25+0.02)。\n計算：5+0.02/(2*5) = 5.002。"
          },
          {
            "type": "paragraph",
            "text": "用 a=36 的線性化近似 √(36+0.02)。"
          },
          {
            "type": "example",
            "text": "用 a=36 的線性化近似 √(36+0.02)。\n計算：6+0.02/(2*6) = 6.001666666666667。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "用 a=4 的線性化近似 √(4+0.02)。",
            "answers": [
              "2.005"
            ],
            "explanation": "計算：2+0.02/(2*2) = 2.005。"
          },
          {
            "type": "input",
            "prompt": "y=x²，在 x=2, dx=0.01 時求 dy。",
            "answers": [
              "0.04"
            ],
            "explanation": "計算：2*2*0.01 = 0.04。"
          },
          {
            "type": "input",
            "prompt": "y=1/x，在 x=2, dx=0.1 時求 dy。",
            "answers": [
              "-0.025"
            ],
            "explanation": "計算：-0.1/2^2 = -0.025。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x³ 在 a=2 的線性近似斜率？",
            "answers": [
              "12"
            ],
            "explanation": "計算：3*2^2 = 12。"
          },
          {
            "type": "input",
            "prompt": "圓半徑 2，dr=0.01，求 dA/pi。",
            "answers": [
              "0.04"
            ],
            "explanation": "計算：2*2*0.01 = 0.04。"
          },
          {
            "type": "input",
            "prompt": "用 a=9 的線性化近似 √(9+0.02)。",
            "answers": [
              "3.0033333333333334"
            ],
            "explanation": "計算：3+0.02/(2*3) = 3.0033333333333334。"
          },
          {
            "type": "input",
            "prompt": "y=x²，在 x=3, dx=0.01 時求 dy。",
            "answers": [
              "0.06"
            ],
            "explanation": "計算：2*3*0.01 = 0.06。"
          },
          {
            "type": "input",
            "prompt": "y=1/x，在 x=3, dx=0.1 時求 dy。",
            "answers": [
              "-0.011111111111111112"
            ],
            "explanation": "計算：-0.1/3^2 = -0.011111111111111112。"
          },
          {
            "type": "input",
            "prompt": "f(x)=x³ 在 a=3 的線性近似斜率？",
            "answers": [
              "27"
            ],
            "explanation": "計算：3*3^2 = 27。"
          },
          {
            "type": "input",
            "prompt": "圓半徑 3，dr=0.01，求 dA/pi。",
            "answers": [
              "0.06"
            ],
            "explanation": "計算：2*3*0.01 = 0.06。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-21",
        "title": "21 · 原函數與初值",
        "intro": "參考原書第 19 章。學習原函數與初值，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-12"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "積分逆轉求導。冪次積分增加指數再除新指數，但 x⁻¹ 例外；不定積分保留 C，用初始條件求 C。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "F′(x)=5x，F(0)=1，求 F(2)。"
          },
          {
            "type": "example",
            "text": "F′(x)=5x，F(0)=1，求 F(2)。\n計算：5*4/2+1 = 11。"
          },
          {
            "type": "paragraph",
            "text": "F′(x)=6x，F(0)=1，求 F(2)。"
          },
          {
            "type": "example",
            "text": "F′(x)=6x，F(0)=1，求 F(2)。\n計算：6*4/2+1 = 13。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "F′(x)=2x，F(0)=1，求 F(2)。",
            "answers": [
              "5"
            ],
            "explanation": "計算：2*4/2+1 = 5。"
          },
          {
            "type": "input",
            "prompt": "∫x^2 dx 中 x^3 的係數？",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=2，F(1)=0，求 F(3)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*(3-1) = 4。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=cos x，F(0)=2，求 F(pi/2)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：1+2 = 3。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=2x+2，F(0)=0，求 F(1)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：1+2 = 3。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=3x，F(0)=1，求 F(2)。",
            "answers": [
              "7"
            ],
            "explanation": "計算：3*4/2+1 = 7。"
          },
          {
            "type": "input",
            "prompt": "∫x^3 dx 中 x^4 的係數？",
            "answers": [
              "0.25"
            ],
            "explanation": "計算：1/4 = 0.25。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=3，F(1)=0，求 F(3)。",
            "answers": [
              "6"
            ],
            "explanation": "計算：3*(3-1) = 6。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=cos x，F(0)=3，求 F(pi/2)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：1+3 = 4。"
          },
          {
            "type": "input",
            "prompt": "F′(x)=2x+3，F(0)=0，求 F(1)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：1+3 = 4。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-22",
        "title": "22 · 定積分與基本定理",
        "intro": "參考原書第 20 章。學習定積分與基本定理，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-08",
          "mendelson-calculus.skill-21"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "定積分累積帶正負的量。若 F′=f，則 ∫ₐᵇf=F(b)-F(a)。變上限積分求導要乘上限的導數。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "∫₀^5 2x dx？"
          },
          {
            "type": "example",
            "text": "∫₀^5 2x dx？\n計算：5^2 = 25。"
          },
          {
            "type": "paragraph",
            "text": "∫₀^6 2x dx？"
          },
          {
            "type": "example",
            "text": "∫₀^6 2x dx？\n計算：6^2 = 36。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "∫₀^2 2x dx？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 2 dx？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*(1-0) = 2。"
          },
          {
            "type": "input",
            "prompt": "F(x)=∫₀ˣ t² dt，求 F′(2)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "F(x)=∫₀^(x²) t dt，求 F′(2)。",
            "answers": [
              "16"
            ],
            "explanation": "計算：2^2*2*2 = 16。"
          },
          {
            "type": "input",
            "prompt": "∫_(-2)^2 x³ dx？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 (odd symmetry) = 0。"
          },
          {
            "type": "input",
            "prompt": "∫₀^3 2x dx？",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 3 dx？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*(1-0) = 3。"
          },
          {
            "type": "input",
            "prompt": "F(x)=∫₀ˣ t² dt，求 F′(3)。",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "F(x)=∫₀^(x²) t dt，求 F′(3)。",
            "answers": [
              "54"
            ],
            "explanation": "計算：3^2*2*3 = 54。"
          },
          {
            "type": "input",
            "prompt": "∫_(-3)^3 x³ dx？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 (odd symmetry) = 0。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-23",
        "title": "23 · 曲線間面積",
        "intro": "參考原書第 21 章。學習曲線間面積，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-22"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先找交點，把上方函數減下方函數。若上下關係改變，就分段；幾何面積不能以正負抵消。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "y=5x 與 y=0，0≤x≤2 的面積？"
          },
          {
            "type": "example",
            "text": "y=5x 與 y=0，0≤x≤2 的面積？\n計算：5*2^2/2 = 10。"
          },
          {
            "type": "paragraph",
            "text": "y=6x 與 y=0，0≤x≤2 的面積？"
          },
          {
            "type": "example",
            "text": "y=6x 與 y=0，0≤x≤2 的面積？\n計算：6*2^2/2 = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "y=2x 與 y=0，0≤x≤2 的面積？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2^2/2 = 4。"
          },
          {
            "type": "input",
            "prompt": "y=2 與 y=1，0≤x≤3 的面積？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*(2-1) = 3。"
          },
          {
            "type": "input",
            "prompt": "y=x 與 y=x² 在 [0,1] 的面積乘 12？",
            "answers": [
              "2"
            ],
            "explanation": "計算：12*(1/2-1/3) = 2。"
          },
          {
            "type": "input",
            "prompt": "y=|x| 在 [-2,2] 下方的面積？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2^2/2 = 4。"
          },
          {
            "type": "input",
            "prompt": "y=4-x² 與 x 軸在 [-2,2] 的面積？",
            "answers": [
              "10.666666666666666"
            ],
            "explanation": "計算：2*(2^3-2^3/3) = 10.666666666666666。"
          },
          {
            "type": "input",
            "prompt": "y=3x 與 y=0，0≤x≤2 的面積？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3*2^2/2 = 6。"
          },
          {
            "type": "input",
            "prompt": "y=3 與 y=1，0≤x≤3 的面積？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3*(3-1) = 6。"
          },
          {
            "type": "input",
            "prompt": "y=x 與 y=x² 在 [0,1] 的面積乘 18？",
            "answers": [
              "3"
            ],
            "explanation": "計算：18*(1/2-1/3) = 3。"
          },
          {
            "type": "input",
            "prompt": "y=|x| 在 [-3,3] 下方的面積？",
            "answers": [
              "9"
            ],
            "explanation": "計算：2*3^2/2 = 9。"
          },
          {
            "type": "input",
            "prompt": "y=9-x² 與 x 軸在 [-3,3] 的面積？",
            "answers": [
              "36"
            ],
            "explanation": "計算：2*(3^3-3^3/3) = 36。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-24",
        "title": "24 · 弧長積分",
        "intro": "參考原書第 21 章。學習弧長積分，完成4 道分步輸入長題。",
        "kind": "integral",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-22"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "把曲線切成短線段，得到 L=∫√(1+(y′)²) dx。先求導再代入，別把曲線下的面積當弧長。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "曲線 y=(2/3)x^(3/2)，考慮 0≤x≤7。"
          },
          {
            "type": "example",
            "text": "在右端點，(y′)² 是多少？\n計算：7 = 7。"
          },
          {
            "type": "example",
            "text": "弧長被積函數在 x=0 的值？\n計算：sqrt(1+0) = 1。"
          },
          {
            "type": "example",
            "text": "求弧長（可輸入含 sqrt 的數值式）。\n計算：2/3*((8)^(3/2)-1) = 14.418277998646348。"
          },
          {
            "type": "paragraph",
            "text": "曲線 y=(2/3)x^(3/2)，考慮 0≤x≤8。"
          },
          {
            "type": "example",
            "text": "在右端點，(y′)² 是多少？\n計算：8 = 8。"
          },
          {
            "type": "example",
            "text": "弧長被積函數在 x=0 的值？\n計算：sqrt(1+0) = 1。"
          },
          {
            "type": "example",
            "text": "求弧長（可輸入含 sqrt 的數值式）。\n計算：2/3*((9)^(3/2)-1) = 17.333333333333332。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "曲線 y=(2/3)x^(3/2)，考慮 0≤x≤2。",
            "parts": [
              {
                "type": "input",
                "prompt": "在右端點，(y′)² 是多少？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              },
              {
                "type": "input",
                "prompt": "弧長被積函數在 x=0 的值？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：sqrt(1+0) = 1。"
              },
              {
                "type": "input",
                "prompt": "求弧長（可輸入含 sqrt 的數值式）。",
                "answers": [
                  "2.797434948471088"
                ],
                "explanation": "計算：2/3*((3)^(3/2)-1) = 2.797434948471088。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "曲線 y=(2/3)x^(3/2)，考慮 0≤x≤3。",
            "parts": [
              {
                "type": "input",
                "prompt": "在右端點，(y′)² 是多少？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3 = 3。"
              },
              {
                "type": "input",
                "prompt": "弧長被積函數在 x=0 的值？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：sqrt(1+0) = 1。"
              },
              {
                "type": "input",
                "prompt": "求弧長（可輸入含 sqrt 的數值式）。",
                "answers": [
                  "4.666666666666666"
                ],
                "explanation": "計算：2/3*((4)^(3/2)-1) = 4.666666666666666。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "曲線 y=(2/3)x^(3/2)，考慮 0≤x≤4。",
            "parts": [
              {
                "type": "input",
                "prompt": "在右端點，(y′)² 是多少？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4 = 4。"
              },
              {
                "type": "input",
                "prompt": "弧長被積函數在 x=0 的值？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：sqrt(1+0) = 1。"
              },
              {
                "type": "input",
                "prompt": "求弧長（可輸入含 sqrt 的數值式）。",
                "answers": [
                  "6.786893258332633"
                ],
                "explanation": "計算：2/3*((5)^(3/2)-1) = 6.786893258332633。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "曲線 y=(2/3)x^(3/2)，考慮 0≤x≤5。",
            "parts": [
              {
                "type": "input",
                "prompt": "在右端點，(y′)² 是多少？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5 = 5。"
              },
              {
                "type": "input",
                "prompt": "弧長被積函數在 x=0 的值？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：sqrt(1+0) = 1。"
              },
              {
                "type": "input",
                "prompt": "求弧長（可輸入含 sqrt 的數值式）。",
                "answers": [
                  "9.131292304466045"
                ],
                "explanation": "計算：2/3*((6)^(3/2)-1) = 9.131292304466045。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-25",
        "title": "25 · 旋轉體體積",
        "intro": "參考原書第 22 章。學習旋轉體體積，完成4 道分步輸入長題。",
        "kind": "integral",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-23"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先畫旋轉軸與切片。圓盤法用 π(R²-r²)，柱殼法用 2π×半徑×高度；上下限依切片變量。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "將 y=x、y=0、x=7 圍成的三角形繞 x 軸旋轉。"
          },
          {
            "type": "example",
            "text": "在 x=7 的圓盤半徑？\n計算：7 = 7。"
          },
          {
            "type": "example",
            "text": "截面面積除以 pi，在右端點的值？\n計算：7^2 = 49。"
          },
          {
            "type": "example",
            "text": "體積除以 pi？\n計算：7^3/3 = 114.33333333333333。"
          },
          {
            "type": "paragraph",
            "text": "將 y=x、y=0、x=8 圍成的三角形繞 x 軸旋轉。"
          },
          {
            "type": "example",
            "text": "在 x=8 的圓盤半徑？\n計算：8 = 8。"
          },
          {
            "type": "example",
            "text": "截面面積除以 pi，在右端點的值？\n計算：8^2 = 64。"
          },
          {
            "type": "example",
            "text": "體積除以 pi？\n計算：8^3/3 = 170.66666666666666。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "將 y=x、y=0、x=2 圍成的三角形繞 x 軸旋轉。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 x=2 的圓盤半徑？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              },
              {
                "type": "input",
                "prompt": "截面面積除以 pi，在右端點的值？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：2^2 = 4。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "2.6666666666666665"
                ],
                "explanation": "計算：2^3/3 = 2.6666666666666665。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "將 y=x、y=0、x=3 圍成的三角形繞 x 軸旋轉。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 x=3 的圓盤半徑？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3 = 3。"
              },
              {
                "type": "input",
                "prompt": "截面面積除以 pi，在右端點的值？",
                "answers": [
                  "9"
                ],
                "explanation": "計算：3^2 = 9。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "9"
                ],
                "explanation": "計算：3^3/3 = 9。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "將 y=x、y=0、x=4 圍成的三角形繞 x 軸旋轉。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 x=4 的圓盤半徑？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4 = 4。"
              },
              {
                "type": "input",
                "prompt": "截面面積除以 pi，在右端點的值？",
                "answers": [
                  "16"
                ],
                "explanation": "計算：4^2 = 16。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "21.333333333333332"
                ],
                "explanation": "計算：4^3/3 = 21.333333333333332。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "將 y=x、y=0、x=5 圍成的三角形繞 x 軸旋轉。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 x=5 的圓盤半徑？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5 = 5。"
              },
              {
                "type": "input",
                "prompt": "截面面積除以 pi，在右端點的值？",
                "answers": [
                  "25"
                ],
                "explanation": "計算：5^2 = 25。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "41.666666666666664"
                ],
                "explanation": "計算：5^3/3 = 41.666666666666664。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-26",
        "title": "26 · 自然對數",
        "intro": "參考原書第 23 章。學習自然對數，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-22"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "ln x 的實數定義域是 x>0，導數為 1/x。∫1/x dx=ln|x|+C；對數可把乘法轉為加法。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "ln(e^5)？"
          },
          {
            "type": "example",
            "text": "ln(e^5)？\n計算：5 = 5。"
          },
          {
            "type": "paragraph",
            "text": "ln(e^6)？"
          },
          {
            "type": "example",
            "text": "ln(e^6)？\n計算：6 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "ln(e^2)？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ln x，求 f′(2)。",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ln(2x)，求 f′(1)。",
            "answers": [
              "1"
            ],
            "explanation": "計算：2/2 = 1。"
          },
          {
            "type": "input",
            "prompt": "∫₁^(e^2) 1/x dx？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2-0 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ln(x²+2)，求 f′(1)。",
            "answers": [
              "0.6666666666666666"
            ],
            "explanation": "計算：2/(1+2) = 0.6666666666666666。"
          },
          {
            "type": "input",
            "prompt": "ln(e^3)？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ln x，求 f′(3)。",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ln(3x)，求 f′(1)。",
            "answers": [
              "1"
            ],
            "explanation": "計算：3/3 = 1。"
          },
          {
            "type": "input",
            "prompt": "∫₁^(e^3) 1/x dx？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3-0 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=ln(x²+3)，求 f′(1)。",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：2/(1+3) = 0.5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-27",
        "title": "27 · 指數函數",
        "intro": "參考原書第 24 章。學習指數函數，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-26"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "eˣ 的導數仍是 eˣ；aˣ 的導數多一個 ln a。指數與自然對數互為反函數，複合函數要用鏈式法則。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=e^(5x)，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=e^(5x)，求 f′(0)。\n計算：5*1 = 5。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=e^(6x)，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=e^(6x)，求 f′(0)。\n計算：6*1 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=e^(2x)，求 f′(0)。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*1 = 2。"
          },
          {
            "type": "input",
            "prompt": "e^(ln 2)？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=e^(x²)，求 f′(0)。",
            "answers": [
              "0"
            ],
            "explanation": "計算：2*0*1 = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x)=e^(2x)，求 f″(0)。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "∫₀^(ln 2) 2eˣ dx？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*(2-1) = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=e^(3x)，求 f′(0)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*1 = 3。"
          },
          {
            "type": "input",
            "prompt": "e^(ln 3)？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=e^(x²)，求 f′(0)。",
            "answers": [
              "0"
            ],
            "explanation": "計算：2*0*1 = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x)=e^(3x)，求 f″(0)。",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "∫₀^(ln 2) 3eˣ dx？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*(2-1) = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-28",
        "title": "28 · L’Hôpital 法則",
        "intro": "參考原書第 25 章。學習L’Hôpital 法則，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-13",
          "mendelson-calculus.skill-27"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "只有 0/0 或 ∞/∞ 型且滿足條件時，才對分子分母分別求導。乘積、差與冪型須先轉換；不是商法則。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "lim(x→0) (e^(5x)-1)/x？"
          },
          {
            "type": "example",
            "text": "lim(x→0) (e^(5x)-1)/x？\n計算：5*1/1 = 5。"
          },
          {
            "type": "paragraph",
            "text": "lim(x→0) (e^(6x)-1)/x？"
          },
          {
            "type": "example",
            "text": "lim(x→0) (e^(6x)-1)/x？\n計算：6*1/1 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "lim(x→0) (e^(2x)-1)/x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*1/1 = 2。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) ln(1+2x)/x？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2/1 = 2。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (1-cos(2x))/x²？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2^2/2 = 2。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) x^2/eˣ？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 (exponential growth dominates) = 0。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) sin(2x)/sin(2x)？",
            "answers": [
              "1"
            ],
            "explanation": "計算：2/2 = 1。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (e^(3x)-1)/x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*1/1 = 3。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) ln(1+3x)/x？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3/1 = 3。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) (1-cos(3x))/x²？",
            "answers": [
              "4.5"
            ],
            "explanation": "計算：3^2/2 = 4.5。"
          },
          {
            "type": "input",
            "prompt": "lim(x→∞) x^3/eˣ？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 (exponential growth dominates) = 0。"
          },
          {
            "type": "input",
            "prompt": "lim(x→0) sin(3x)/sin(2x)？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：3/2 = 1.5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-29",
        "title": "29 · 成長與衰減",
        "intro": "參考原書第 26 章。學習成長與衰減，完成4 道分步輸入長題。",
        "kind": "integral",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-27"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "模型 P′=rP 的解為 P=P₀eʳᵗ。用已知資料求 r，再代入時間；倍增與半衰期用對數求解。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "族群初值 700，每 2 年倍增，模型 P=P₀eʳᵗ。"
          },
          {
            "type": "example",
            "text": "輸入 r（每年，可用 ln）。\n計算：ln(2)/2 = 0.34657359027997264。"
          },
          {
            "type": "example",
            "text": "4 年後的族群？\n計算：700*2^2 = 2800。"
          },
          {
            "type": "example",
            "text": "達到初值 8 倍需幾年？\n計算：2*3 = 6。"
          },
          {
            "type": "paragraph",
            "text": "族群初值 800，每 2 年倍增，模型 P=P₀eʳᵗ。"
          },
          {
            "type": "example",
            "text": "輸入 r（每年，可用 ln）。\n計算：ln(2)/2 = 0.34657359027997264。"
          },
          {
            "type": "example",
            "text": "4 年後的族群？\n計算：800*2^2 = 3200。"
          },
          {
            "type": "example",
            "text": "達到初值 8 倍需幾年？\n計算：2*3 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "族群初值 200，每 2 年倍增，模型 P=P₀eʳᵗ。",
            "parts": [
              {
                "type": "input",
                "prompt": "輸入 r（每年，可用 ln）。",
                "answers": [
                  "0.34657359027997264"
                ],
                "explanation": "計算：ln(2)/2 = 0.34657359027997264。"
              },
              {
                "type": "input",
                "prompt": "4 年後的族群？",
                "answers": [
                  "800"
                ],
                "explanation": "計算：200*2^2 = 800。"
              },
              {
                "type": "input",
                "prompt": "達到初值 8 倍需幾年？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*3 = 6。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "族群初值 300，每 2 年倍增，模型 P=P₀eʳᵗ。",
            "parts": [
              {
                "type": "input",
                "prompt": "輸入 r（每年，可用 ln）。",
                "answers": [
                  "0.34657359027997264"
                ],
                "explanation": "計算：ln(2)/2 = 0.34657359027997264。"
              },
              {
                "type": "input",
                "prompt": "4 年後的族群？",
                "answers": [
                  "1200"
                ],
                "explanation": "計算：300*2^2 = 1200。"
              },
              {
                "type": "input",
                "prompt": "達到初值 8 倍需幾年？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*3 = 6。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "族群初值 400，每 2 年倍增，模型 P=P₀eʳᵗ。",
            "parts": [
              {
                "type": "input",
                "prompt": "輸入 r（每年，可用 ln）。",
                "answers": [
                  "0.34657359027997264"
                ],
                "explanation": "計算：ln(2)/2 = 0.34657359027997264。"
              },
              {
                "type": "input",
                "prompt": "4 年後的族群？",
                "answers": [
                  "1600"
                ],
                "explanation": "計算：400*2^2 = 1600。"
              },
              {
                "type": "input",
                "prompt": "達到初值 8 倍需幾年？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*3 = 6。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "族群初值 500，每 2 年倍增，模型 P=P₀eʳᵗ。",
            "parts": [
              {
                "type": "input",
                "prompt": "輸入 r（每年，可用 ln）。",
                "answers": [
                  "0.34657359027997264"
                ],
                "explanation": "計算：ln(2)/2 = 0.34657359027997264。"
              },
              {
                "type": "input",
                "prompt": "4 年後的族群？",
                "answers": [
                  "2000"
                ],
                "explanation": "計算：500*2^2 = 2000。"
              },
              {
                "type": "input",
                "prompt": "達到初值 8 倍需幾年？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*3 = 6。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-30",
        "title": "30 · 反三角函數",
        "intro": "參考原書第 27 章。學習反三角函數，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-12",
          "mendelson-calculus.skill-26"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "反三角函數採主值範圍，不等於倒數。arcsin 的導數是 1/√(1-x²)，arctan 的導數是 1/(1+x²)。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x)=arctan(5x)，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=arctan(5x)，求 f′(0)。\n計算：5/(1+0) = 5。"
          },
          {
            "type": "paragraph",
            "text": "f(x)=arctan(6x)，求 f′(0)。"
          },
          {
            "type": "example",
            "text": "f(x)=arctan(6x)，求 f′(0)。\n計算：6/(1+0) = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x)=arctan(2x)，求 f′(0)。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2/(1+0) = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=arcsin(x/2)，求 f′(0)。",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 1/(1+x²) dx 除以 pi？",
            "answers": [
              "0.25"
            ],
            "explanation": "計算：1/4 = 0.25。"
          },
          {
            "type": "input",
            "prompt": "arctan(1) 除以 pi，再乘 8？",
            "answers": [
              "2"
            ],
            "explanation": "計算：8/4 = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x)=arccos(x/2)，求 f′(0)。",
            "answers": [
              "-0.5"
            ],
            "explanation": "計算：-1/2 = -0.5。"
          },
          {
            "type": "input",
            "prompt": "f(x)=arctan(3x)，求 f′(0)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3/(1+0) = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=arcsin(x/3)，求 f′(0)。",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 1/(1+x²) dx 除以 pi？",
            "answers": [
              "0.25"
            ],
            "explanation": "計算：1/4 = 0.25。"
          },
          {
            "type": "input",
            "prompt": "arctan(1) 除以 pi，再乘 12？",
            "answers": [
              "3"
            ],
            "explanation": "計算：12/4 = 3。"
          },
          {
            "type": "input",
            "prompt": "f(x)=arccos(x/3)，求 f′(0)。",
            "answers": [
              "-0.3333333333333333"
            ],
            "explanation": "計算：-1/3 = -0.3333333333333333。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-31",
        "title": "31 · 分部積分",
        "intro": "參考原書第 28 章。學習分部積分，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-27"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "由乘積法則得到 ∫u dv=uv-∫v du。選 u 讓微分後變簡單，選 dv 能積分；定積分保留端點項。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "∫₀¹ 5x eˣ dx？"
          },
          {
            "type": "example",
            "text": "∫₀¹ 5x eˣ dx？\n計算：5*[(x-1)*exp(x)]_0^1 = 5 = 5。"
          },
          {
            "type": "paragraph",
            "text": "∫₀¹ 6x eˣ dx？"
          },
          {
            "type": "example",
            "text": "∫₀¹ 6x eˣ dx？\n計算：6*[(x-1)*exp(x)]_0^1 = 6 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "∫₀¹ 2x eˣ dx？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*[(x-1)*exp(x)]_0^1 = 2 = 2。"
          },
          {
            "type": "input",
            "prompt": "∫₁ᵉ 2ln x dx？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*[x*ln(x)-x]_1^e = 2 = 2。"
          },
          {
            "type": "input",
            "prompt": "∫₀^pi 2x sin x dx 除以 pi？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "分部積分 u=x^2，du/dx 在 x=1？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*1 = 2。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ x ln x dx 乘 8？（用端點極限）",
            "answers": [
              "-2"
            ],
            "explanation": "計算：8*(-1/4) = -2。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 3x eˣ dx？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*[(x-1)*exp(x)]_0^1 = 3 = 3。"
          },
          {
            "type": "input",
            "prompt": "∫₁ᵉ 3ln x dx？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*[x*ln(x)-x]_1^e = 3 = 3。"
          },
          {
            "type": "input",
            "prompt": "∫₀^pi 3x sin x dx 除以 pi？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "分部積分 u=x^3，du/dx 在 x=1？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*1 = 3。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ x ln x dx 乘 12？（用端點極限）",
            "answers": [
              "-3"
            ],
            "explanation": "計算：12*(-1/4) = -3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-32",
        "title": "32 · 三角積分與代換",
        "intro": "參考原書第 29 章。學習三角積分與代換，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-30"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "奇次 sin 或 cos 可拆出一因子後代換；偶次可用半角公式。√(a²-x²) 常設 x=a sin θ，並確認角度範圍。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "∫₀^(pi/2) 5sin x cos x dx？"
          },
          {
            "type": "example",
            "text": "∫₀^(pi/2) 5sin x cos x dx？\n計算：5/2 = 2.5。"
          },
          {
            "type": "paragraph",
            "text": "∫₀^(pi/2) 6sin x cos x dx？"
          },
          {
            "type": "example",
            "text": "∫₀^(pi/2) 6sin x cos x dx？\n計算：6/2 = 3。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "∫₀^(pi/2) 2sin x cos x dx？",
            "answers": [
              "1"
            ],
            "explanation": "計算：2/2 = 1。"
          },
          {
            "type": "input",
            "prompt": "∫₀^pi 2sin²x dx 除以 pi？",
            "answers": [
              "1"
            ],
            "explanation": "計算：2/2 = 1。"
          },
          {
            "type": "input",
            "prompt": "∫₀^(pi/2) 2sin³x dx？",
            "answers": [
              "1.3333333333333333"
            ],
            "explanation": "計算：2*2/3 = 1.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "x=2sin θ，θ=0 時 dx/dθ？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*cos(0) = 2。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 2x/√(4-x²) dx？",
            "answers": [
              "0.5358983848622456"
            ],
            "explanation": "計算：2*(2-sqrt(3)) = 0.5358983848622456。"
          },
          {
            "type": "input",
            "prompt": "∫₀^(pi/2) 3sin x cos x dx？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：3/2 = 1.5。"
          },
          {
            "type": "input",
            "prompt": "∫₀^pi 3sin²x dx 除以 pi？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：3/2 = 1.5。"
          },
          {
            "type": "input",
            "prompt": "∫₀^(pi/2) 3sin³x dx？",
            "answers": [
              "2"
            ],
            "explanation": "計算：3*2/3 = 2。"
          },
          {
            "type": "input",
            "prompt": "x=3sin θ，θ=0 時 dx/dθ？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*cos(0) = 3。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 3x/√(4-x²) dx？",
            "answers": [
              "0.8038475772933684"
            ],
            "explanation": "計算：3*(2-sqrt(3)) = 0.8038475772933684。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-33",
        "title": "33 · 部分分式",
        "intro": "參考原書第 30 章。學習部分分式，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-26",
          "mendelson-calculus.skill-30"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先做多項式除法，讓分子次數小於分母。不同線性因子各配一常數；重根配每次冪，不可約二次因子配一次分子。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "5/(x(x+1))=A/x+B/(x+1)，求 A。"
          },
          {
            "type": "example",
            "text": "5/(x(x+1))=A/x+B/(x+1)，求 A。\n計算：5 = 5。"
          },
          {
            "type": "paragraph",
            "text": "6/(x(x+1))=A/x+B/(x+1)，求 A。"
          },
          {
            "type": "example",
            "text": "6/(x(x+1))=A/x+B/(x+1)，求 A。\n計算：6 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "2/(x(x+1))=A/x+B/(x+1)，求 A。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "2/(x(x+1))=A/x+B/(x+1)，求 B。",
            "answers": [
              "-2"
            ],
            "explanation": "計算：-2 = -2。"
          },
          {
            "type": "input",
            "prompt": "1/((x+1)(x+3)) 中 1/(x+1) 的係數？",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "(x+2)/x²=1/x+B/x²，求 B。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "∫₁² 2/x² dx？",
            "answers": [
              "1"
            ],
            "explanation": "計算：2*(1-1/2) = 1。"
          },
          {
            "type": "input",
            "prompt": "3/(x(x+1))=A/x+B/(x+1)，求 A。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "3/(x(x+1))=A/x+B/(x+1)，求 B。",
            "answers": [
              "-3"
            ],
            "explanation": "計算：-3 = -3。"
          },
          {
            "type": "input",
            "prompt": "1/((x+1)(x+4)) 中 1/(x+1) 的係數？",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "(x+3)/x²=1/x+B/x²，求 B。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "∫₁² 3/x² dx？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：3*(1-1/2) = 1.5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-34",
        "title": "34 · 旋轉曲面面積",
        "intro": "參考原書第 31 章。學習旋轉曲面面積，完成4 道分步輸入長題。",
        "kind": "integral",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-24",
          "mendelson-calculus.skill-32"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "繞 x 軸的曲面積為 ∫2π|y|√(1+(y′)²) dx。它是圓周長乘弧長元素，不是體積的圓盤面積。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "直線 y=7x 在 1≤x≤2 繞 x 軸旋轉，只計側面。"
          },
          {
            "type": "example",
            "text": "求 y′。\n計算：7 = 7。"
          },
          {
            "type": "example",
            "text": "弧長倍率 √(1+(y′)²)？\n計算：sqrt(1+7^2) = 7.0710678118654755。"
          },
          {
            "type": "example",
            "text": "曲面積除以 pi？\n計算：2*7*sqrt(1+7^2)*(4-1)/2 = 148.49242404917499。"
          },
          {
            "type": "paragraph",
            "text": "直線 y=8x 在 1≤x≤2 繞 x 軸旋轉，只計側面。"
          },
          {
            "type": "example",
            "text": "求 y′。\n計算：8 = 8。"
          },
          {
            "type": "example",
            "text": "弧長倍率 √(1+(y′)²)？\n計算：sqrt(1+8^2) = 8.06225774829855。"
          },
          {
            "type": "example",
            "text": "曲面積除以 pi？\n計算：2*8*sqrt(1+8^2)*(4-1)/2 = 193.49418595916518。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "直線 y=2x 在 1≤x≤2 繞 x 軸旋轉，只計側面。",
            "parts": [
              {
                "type": "input",
                "prompt": "求 y′。",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              },
              {
                "type": "input",
                "prompt": "弧長倍率 √(1+(y′)²)？",
                "answers": [
                  "2.23606797749979"
                ],
                "explanation": "計算：sqrt(1+2^2) = 2.23606797749979。"
              },
              {
                "type": "input",
                "prompt": "曲面積除以 pi？",
                "answers": [
                  "13.416407864998739"
                ],
                "explanation": "計算：2*2*sqrt(1+2^2)*(4-1)/2 = 13.416407864998739。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "直線 y=3x 在 1≤x≤2 繞 x 軸旋轉，只計側面。",
            "parts": [
              {
                "type": "input",
                "prompt": "求 y′。",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3 = 3。"
              },
              {
                "type": "input",
                "prompt": "弧長倍率 √(1+(y′)²)？",
                "answers": [
                  "3.1622776601683795"
                ],
                "explanation": "計算：sqrt(1+3^2) = 3.1622776601683795。"
              },
              {
                "type": "input",
                "prompt": "曲面積除以 pi？",
                "answers": [
                  "28.460498941515414"
                ],
                "explanation": "計算：2*3*sqrt(1+3^2)*(4-1)/2 = 28.460498941515414。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "直線 y=4x 在 1≤x≤2 繞 x 軸旋轉，只計側面。",
            "parts": [
              {
                "type": "input",
                "prompt": "求 y′。",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4 = 4。"
              },
              {
                "type": "input",
                "prompt": "弧長倍率 √(1+(y′)²)？",
                "answers": [
                  "4.123105625617661"
                ],
                "explanation": "計算：sqrt(1+4^2) = 4.123105625617661。"
              },
              {
                "type": "input",
                "prompt": "曲面積除以 pi？",
                "answers": [
                  "49.47726750741192"
                ],
                "explanation": "計算：2*4*sqrt(1+4^2)*(4-1)/2 = 49.47726750741192。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "直線 y=5x 在 1≤x≤2 繞 x 軸旋轉，只計側面。",
            "parts": [
              {
                "type": "input",
                "prompt": "求 y′。",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5 = 5。"
              },
              {
                "type": "input",
                "prompt": "弧長倍率 √(1+(y′)²)？",
                "answers": [
                  "5.0990195135927845"
                ],
                "explanation": "計算：sqrt(1+5^2) = 5.0990195135927845。"
              },
              {
                "type": "input",
                "prompt": "曲面積除以 pi？",
                "answers": [
                  "76.48529270389177"
                ],
                "explanation": "計算：2*5*sqrt(1+5^2)*(4-1)/2 = 76.48529270389177。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-35",
        "title": "35 · 功與形心",
        "intro": "參考原書第 31 章。學習功與形心，完成4 道分步輸入長題。",
        "kind": "integral",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-23",
          "mendelson-calculus.skill-31"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "功是 ∫F dx。平面均勻薄片的形心是一次矩除以面積；先描述區域與密度，再建立積分。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "均勻三角薄片由 y=x、y=0、x=7 圍成，密度為 1。"
          },
          {
            "type": "example",
            "text": "面積？\n計算：7^2/2 = 24.5。"
          },
          {
            "type": "example",
            "text": "形心 x 座標？\n計算：(7^3/3)/(7^2/2) = 4.666666666666667。"
          },
          {
            "type": "example",
            "text": "形心 y 座標？\n計算：(7^3/6)/(7^2/2) = 2.3333333333333335。"
          },
          {
            "type": "example",
            "text": "另有彈簧 F(x)=7x，從 0 拉到 2 所做的功？\n計算：7*2^2/2 = 14。"
          },
          {
            "type": "paragraph",
            "text": "均勻三角薄片由 y=x、y=0、x=8 圍成，密度為 1。"
          },
          {
            "type": "example",
            "text": "面積？\n計算：8^2/2 = 32。"
          },
          {
            "type": "example",
            "text": "形心 x 座標？\n計算：(8^3/3)/(8^2/2) = 5.333333333333333。"
          },
          {
            "type": "example",
            "text": "形心 y 座標？\n計算：(8^3/6)/(8^2/2) = 2.6666666666666665。"
          },
          {
            "type": "example",
            "text": "另有彈簧 F(x)=8x，從 0 拉到 2 所做的功？\n計算：8*2^2/2 = 16。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "均勻三角薄片由 y=x、y=0、x=2 圍成，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2^2/2 = 2。"
              },
              {
                "type": "input",
                "prompt": "形心 x 座標？",
                "answers": [
                  "1.3333333333333333"
                ],
                "explanation": "計算：(2^3/3)/(2^2/2) = 1.3333333333333333。"
              },
              {
                "type": "input",
                "prompt": "形心 y 座標？",
                "answers": [
                  "0.6666666666666666"
                ],
                "explanation": "計算：(2^3/6)/(2^2/2) = 0.6666666666666666。"
              },
              {
                "type": "input",
                "prompt": "另有彈簧 F(x)=2x，從 0 拉到 2 所做的功？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：2*2^2/2 = 4。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "均勻三角薄片由 y=x、y=0、x=3 圍成，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積？",
                "answers": [
                  "4.5"
                ],
                "explanation": "計算：3^2/2 = 4.5。"
              },
              {
                "type": "input",
                "prompt": "形心 x 座標？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：(3^3/3)/(3^2/2) = 2。"
              },
              {
                "type": "input",
                "prompt": "形心 y 座標？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：(3^3/6)/(3^2/2) = 1。"
              },
              {
                "type": "input",
                "prompt": "另有彈簧 F(x)=3x，從 0 拉到 2 所做的功？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：3*2^2/2 = 6。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "均勻三角薄片由 y=x、y=0、x=4 圍成，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：4^2/2 = 8。"
              },
              {
                "type": "input",
                "prompt": "形心 x 座標？",
                "answers": [
                  "2.6666666666666665"
                ],
                "explanation": "計算：(4^3/3)/(4^2/2) = 2.6666666666666665。"
              },
              {
                "type": "input",
                "prompt": "形心 y 座標？",
                "answers": [
                  "1.3333333333333333"
                ],
                "explanation": "計算：(4^3/6)/(4^2/2) = 1.3333333333333333。"
              },
              {
                "type": "input",
                "prompt": "另有彈簧 F(x)=4x，從 0 拉到 2 所做的功？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：4*2^2/2 = 8。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "均勻三角薄片由 y=x、y=0、x=5 圍成，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積？",
                "answers": [
                  "12.5"
                ],
                "explanation": "計算：5^2/2 = 12.5。"
              },
              {
                "type": "input",
                "prompt": "形心 x 座標？",
                "answers": [
                  "3.3333333333333335"
                ],
                "explanation": "計算：(5^3/3)/(5^2/2) = 3.3333333333333335。"
              },
              {
                "type": "input",
                "prompt": "形心 y 座標？",
                "answers": [
                  "1.6666666666666667"
                ],
                "explanation": "計算：(5^3/6)/(5^2/2) = 1.6666666666666667。"
              },
              {
                "type": "input",
                "prompt": "另有彈簧 F(x)=5x，從 0 拉到 2 所做的功？",
                "answers": [
                  "10"
                ],
                "explanation": "計算：5*2^2/2 = 10。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-36",
        "title": "36 · 廣義積分",
        "intro": "參考原書第 32 章。學習廣義積分，完成10 道輸入練習。",
        "kind": "integral",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-28",
          "mendelson-calculus.skill-31",
          "mendelson-calculus.skill-33"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "無窮區間與無界被積函數都用極限定義。內部奇點必須分開兩側，兩者都收斂才算收斂；主值不能代替積分。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "∫₁^∞ x^(-6) dx？"
          },
          {
            "type": "example",
            "text": "∫₁^∞ x^(-6) dx？\n計算：1/5 = 0.2。"
          },
          {
            "type": "paragraph",
            "text": "∫₁^∞ x^(-7) dx？"
          },
          {
            "type": "example",
            "text": "∫₁^∞ x^(-7) dx？\n計算：1/6 = 0.16666666666666666。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "∫₁^∞ x^(-3) dx？",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "∫₀^∞ e^(-2x) dx？",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 2/√x dx？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2 = 4。"
          },
          {
            "type": "input",
            "prompt": "∫_2^∞ 1/x² dx？",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 2ln x dx？",
            "answers": [
              "-2"
            ],
            "explanation": "計算：-2 = -2。"
          },
          {
            "type": "input",
            "prompt": "∫₁^∞ x^(-4) dx？",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "∫₀^∞ e^(-3x) dx？",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 3/√x dx？",
            "answers": [
              "6"
            ],
            "explanation": "計算：2*3 = 6。"
          },
          {
            "type": "input",
            "prompt": "∫_3^∞ 1/x² dx？",
            "answers": [
              "0.3333333333333333"
            ],
            "explanation": "計算：1/3 = 0.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "∫₀¹ 3ln x dx？",
            "answers": [
              "-3"
            ],
            "explanation": "計算：-3 = -3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-37",
        "title": "37 · 平面向量",
        "intro": "參考原書第 33 章。學習平面向量，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-03",
          "mendelson-calculus.skill-12"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "向量相加逐分量處理；長度由平方和開根號。內積 a·b=|a||b|cos θ，用來判垂直與投影。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "向量 (15,20) 的長度？"
          },
          {
            "type": "example",
            "text": "向量 (15,20) 的長度？\n計算：sqrt(225+400) = 25。"
          },
          {
            "type": "paragraph",
            "text": "向量 (18,24) 的長度？"
          },
          {
            "type": "example",
            "text": "向量 (18,24) 的長度？\n計算：sqrt(324+576) = 30。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "向量 (6,8) 的長度？",
            "answers": [
              "10"
            ],
            "explanation": "計算：sqrt(36+64) = 10。"
          },
          {
            "type": "input",
            "prompt": "(2,1)·(2,3)？",
            "answers": [
              "7"
            ],
            "explanation": "計算：2*2+3 = 7。"
          },
          {
            "type": "input",
            "prompt": "(2,2)+(1,3) 的 x 分量？",
            "answers": [
              "3"
            ],
            "explanation": "計算：2+1 = 3。"
          },
          {
            "type": "input",
            "prompt": "(1,2)·(-2,1)？",
            "answers": [
              "0"
            ],
            "explanation": "計算：-2+2 = 0。"
          },
          {
            "type": "input",
            "prompt": "(2,3) 在 x 軸單位向量上的純量投影？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "向量 (9,12) 的長度？",
            "answers": [
              "15"
            ],
            "explanation": "計算：sqrt(81+144) = 15。"
          },
          {
            "type": "input",
            "prompt": "(3,1)·(2,3)？",
            "answers": [
              "9"
            ],
            "explanation": "計算：2*3+3 = 9。"
          },
          {
            "type": "input",
            "prompt": "(3,2)+(1,3) 的 x 分量？",
            "answers": [
              "4"
            ],
            "explanation": "計算：3+1 = 4。"
          },
          {
            "type": "input",
            "prompt": "(1,3)·(-3,1)？",
            "answers": [
              "0"
            ],
            "explanation": "計算：-3+3 = 0。"
          },
          {
            "type": "input",
            "prompt": "(3,3) 在 x 軸單位向量上的純量投影？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-38",
        "title": "38 · 參數曲線與運動",
        "intro": "參考原書第 34 章。學習參數曲線與運動，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-19",
          "mendelson-calculus.skill-24",
          "mendelson-calculus.skill-37"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先分別求 x′、y′。dy/dx=y′/x′（x′≠0）；速率是速度向量長度，不能把某一分量當速率。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "粒子位置 r(t)=(t,t²)，在 t=7 作答。"
          },
          {
            "type": "example",
            "text": "速度的 y 分量？\n計算：2*7 = 14。"
          },
          {
            "type": "example",
            "text": "速率？\n計算：sqrt(1+4*7^2) = 14.035668847618199。"
          },
          {
            "type": "example",
            "text": "軌跡切線斜率 dy/dx？\n計算：(2*7)/1 = 14。"
          },
          {
            "type": "example",
            "text": "加速度的 y 分量？\n計算：2 = 2。"
          },
          {
            "type": "paragraph",
            "text": "粒子位置 r(t)=(t,t²)，在 t=8 作答。"
          },
          {
            "type": "example",
            "text": "速度的 y 分量？\n計算：2*8 = 16。"
          },
          {
            "type": "example",
            "text": "速率？\n計算：sqrt(1+4*8^2) = 16.0312195418814。"
          },
          {
            "type": "example",
            "text": "軌跡切線斜率 dy/dx？\n計算：(2*8)/1 = 16。"
          },
          {
            "type": "example",
            "text": "加速度的 y 分量？\n計算：2 = 2。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "粒子位置 r(t)=(t,t²)，在 t=2 作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "速度的 y 分量？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：2*2 = 4。"
              },
              {
                "type": "input",
                "prompt": "速率？",
                "answers": [
                  "4.123105625617661"
                ],
                "explanation": "計算：sqrt(1+4*2^2) = 4.123105625617661。"
              },
              {
                "type": "input",
                "prompt": "軌跡切線斜率 dy/dx？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：(2*2)/1 = 4。"
              },
              {
                "type": "input",
                "prompt": "加速度的 y 分量？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "粒子位置 r(t)=(t,t²)，在 t=3 作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "速度的 y 分量？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*3 = 6。"
              },
              {
                "type": "input",
                "prompt": "速率？",
                "answers": [
                  "6.082762530298219"
                ],
                "explanation": "計算：sqrt(1+4*3^2) = 6.082762530298219。"
              },
              {
                "type": "input",
                "prompt": "軌跡切線斜率 dy/dx？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：(2*3)/1 = 6。"
              },
              {
                "type": "input",
                "prompt": "加速度的 y 分量？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "粒子位置 r(t)=(t,t²)，在 t=4 作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "速度的 y 分量？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*4 = 8。"
              },
              {
                "type": "input",
                "prompt": "速率？",
                "answers": [
                  "8.06225774829855"
                ],
                "explanation": "計算：sqrt(1+4*4^2) = 8.06225774829855。"
              },
              {
                "type": "input",
                "prompt": "軌跡切線斜率 dy/dx？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：(2*4)/1 = 8。"
              },
              {
                "type": "input",
                "prompt": "加速度的 y 分量？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "粒子位置 r(t)=(t,t²)，在 t=5 作答。",
            "parts": [
              {
                "type": "input",
                "prompt": "速度的 y 分量？",
                "answers": [
                  "10"
                ],
                "explanation": "計算：2*5 = 10。"
              },
              {
                "type": "input",
                "prompt": "速率？",
                "answers": [
                  "10.04987562112089"
                ],
                "explanation": "計算：sqrt(1+4*5^2) = 10.04987562112089。"
              },
              {
                "type": "input",
                "prompt": "軌跡切線斜率 dy/dx？",
                "answers": [
                  "10"
                ],
                "explanation": "計算：(2*5)/1 = 10。"
              },
              {
                "type": "input",
                "prompt": "加速度的 y 分量？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-39",
        "title": "39 · 極座標",
        "intro": "參考原書第 35 章。學習極座標，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-23",
          "mendelson-calculus.skill-24",
          "mendelson-calculus.skill-37"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "x=r cos θ，y=r sin θ。極座標面積為 ½∫r²dθ；弧長為 ∫√(r²+(dr/dθ)²)dθ，先確認曲線追蹤次數。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "極座標曲線 r=7，0≤θ≤pi/2。"
          },
          {
            "type": "example",
            "text": "θ=0 時 x 座標？\n計算：7*cos(0) = 7。"
          },
          {
            "type": "example",
            "text": "扇形面積除以 pi？\n計算：7^2/4 = 12.25。"
          },
          {
            "type": "example",
            "text": "弧長除以 pi？\n計算：7/2 = 3.5。"
          },
          {
            "type": "paragraph",
            "text": "極座標曲線 r=8，0≤θ≤pi/2。"
          },
          {
            "type": "example",
            "text": "θ=0 時 x 座標？\n計算：8*cos(0) = 8。"
          },
          {
            "type": "example",
            "text": "扇形面積除以 pi？\n計算：8^2/4 = 16。"
          },
          {
            "type": "example",
            "text": "弧長除以 pi？\n計算：8/2 = 4。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "極座標曲線 r=2，0≤θ≤pi/2。",
            "parts": [
              {
                "type": "input",
                "prompt": "θ=0 時 x 座標？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2*cos(0) = 2。"
              },
              {
                "type": "input",
                "prompt": "扇形面積除以 pi？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：2^2/4 = 1。"
              },
              {
                "type": "input",
                "prompt": "弧長除以 pi？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：2/2 = 1。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "極座標曲線 r=3，0≤θ≤pi/2。",
            "parts": [
              {
                "type": "input",
                "prompt": "θ=0 時 x 座標？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3*cos(0) = 3。"
              },
              {
                "type": "input",
                "prompt": "扇形面積除以 pi？",
                "answers": [
                  "2.25"
                ],
                "explanation": "計算：3^2/4 = 2.25。"
              },
              {
                "type": "input",
                "prompt": "弧長除以 pi？",
                "answers": [
                  "1.5"
                ],
                "explanation": "計算：3/2 = 1.5。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "極座標曲線 r=4，0≤θ≤pi/2。",
            "parts": [
              {
                "type": "input",
                "prompt": "θ=0 時 x 座標？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4*cos(0) = 4。"
              },
              {
                "type": "input",
                "prompt": "扇形面積除以 pi？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4^2/4 = 4。"
              },
              {
                "type": "input",
                "prompt": "弧長除以 pi？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：4/2 = 2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "極座標曲線 r=5，0≤θ≤pi/2。",
            "parts": [
              {
                "type": "input",
                "prompt": "θ=0 時 x 座標？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5*cos(0) = 5。"
              },
              {
                "type": "input",
                "prompt": "扇形面積除以 pi？",
                "answers": [
                  "6.25"
                ],
                "explanation": "計算：5^2/4 = 6.25。"
              },
              {
                "type": "input",
                "prompt": "弧長除以 pi？",
                "answers": [
                  "2.5"
                ],
                "explanation": "計算：5/2 = 2.5。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-40",
        "title": "40 · 數列極限",
        "intro": "參考原書第 36 章。學習數列極限，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-28"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "數列是以整數編號的函數。先比較最高次項；單調且有界可保證收斂。數列項趨零不代表其級數收斂。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "lim(n→∞) (5n+1)/(n+2)？"
          },
          {
            "type": "example",
            "text": "lim(n→∞) (5n+1)/(n+2)？\n計算：5/1 = 5。"
          },
          {
            "type": "paragraph",
            "text": "lim(n→∞) (6n+1)/(n+2)？"
          },
          {
            "type": "example",
            "text": "lim(n→∞) (6n+1)/(n+2)？\n計算：6/1 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "lim(n→∞) (2n+1)/(n+2)？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2/1 = 2。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) 2/n？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 = 0。"
          },
          {
            "type": "input",
            "prompt": "a_n=1-1/n，第 2 項？",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1-1/2 = 0.5。"
          },
          {
            "type": "input",
            "prompt": "a_n=(2/3)^n 的極限？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 (ratio magnitude below 1) = 0。"
          },
          {
            "type": "input",
            "prompt": "a_n=n²/(n²+2) 的極限？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1/1 = 1。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) (3n+1)/(n+2)？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3/1 = 3。"
          },
          {
            "type": "input",
            "prompt": "lim(n→∞) 3/n？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 = 0。"
          },
          {
            "type": "input",
            "prompt": "a_n=1-1/n，第 3 項？",
            "answers": [
              "0.6666666666666667"
            ],
            "explanation": "計算：1-1/3 = 0.6666666666666667。"
          },
          {
            "type": "input",
            "prompt": "a_n=(3/4)^n 的極限？",
            "answers": [
              "0"
            ],
            "explanation": "計算：0 (ratio magnitude below 1) = 0。"
          },
          {
            "type": "input",
            "prompt": "a_n=n²/(n²+3) 的極限？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1/1 = 1。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-41",
        "title": "41 · 無窮級數",
        "intro": "參考原書第 37 章。學習無窮級數，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-36",
          "mendelson-calculus.skill-40"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "級數的和是部分和數列的極限。幾何級數 |r|<1 時和為 a/(1-r)；若通項不趨零，級數必發散。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "Σ(n=0→∞) 5(1/2)^n？"
          },
          {
            "type": "example",
            "text": "Σ(n=0→∞) 5(1/2)^n？\n計算：5/(1-1/2) = 10。"
          },
          {
            "type": "paragraph",
            "text": "Σ(n=0→∞) 6(1/2)^n？"
          },
          {
            "type": "example",
            "text": "Σ(n=0→∞) 6(1/2)^n？\n計算：6/(1-1/2) = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) 2(1/2)^n？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2/(1-1/2) = 4。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) 2/(n(n+1))？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*(1-0) = 2。"
          },
          {
            "type": "input",
            "prompt": "1+1/2+...+(1/2)^1？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：(1-(1/2)^2)/(1-1/2) = 1.5。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) 2(-1/2)^n？",
            "answers": [
              "1.3333333333333333"
            ],
            "explanation": "計算：2/(1+1/2) = 1.3333333333333333。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) (1/2)^n？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1/(2-1) = 1。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) 3(1/2)^n？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3/(1-1/2) = 6。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) 3/(n(n+1))？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*(1-0) = 3。"
          },
          {
            "type": "input",
            "prompt": "1+1/2+...+(1/2)^2？",
            "answers": [
              "1.75"
            ],
            "explanation": "計算：(1-(1/2)^3)/(1-1/2) = 1.75。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=0→∞) 3(-1/2)^n？",
            "answers": [
              "2"
            ],
            "explanation": "計算：3/(1+1/2) = 2。"
          },
          {
            "type": "input",
            "prompt": "Σ(n=1→∞) (1/3)^n？",
            "answers": [
              "0.5"
            ],
            "explanation": "計算：1/(3-1) = 0.5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-42",
        "title": "42 · 收斂判別與誤差",
        "intro": "參考原書第 37 章。學習收斂判別與誤差，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-41"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "按題型選比較、積分、比值或根值判別；比值極限等於 1 時無結論。交錯級數遞減趨零時，餘項不超過首個省略項。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "用前 9 項近似交錯級數 Σ(n=1→∞)(-1)^(n+1)/n。判別題輸入 1 表示是、0 表示否。"
          },
          {
            "type": "example",
            "text": "此級數是否收斂？\n1/n 遞減趨零，所以交錯級數收斂。"
          },
          {
            "type": "example",
            "text": "是否絕對收斂？\n絕對值級數為調和級數，發散。"
          },
          {
            "type": "example",
            "text": "此近似的交錯餘項上界？\n計算：1/10 = 0.1。"
          },
          {
            "type": "paragraph",
            "text": "用前 10 項近似交錯級數 Σ(n=1→∞)(-1)^(n+1)/n。判別題輸入 1 表示是、0 表示否。"
          },
          {
            "type": "example",
            "text": "此級數是否收斂？\n1/n 遞減趨零，所以交錯級數收斂。"
          },
          {
            "type": "example",
            "text": "是否絕對收斂？\n絕對值級數為調和級數，發散。"
          },
          {
            "type": "example",
            "text": "此近似的交錯餘項上界？\n計算：1/11 = 0.09090909090909091。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "用前 4 項近似交錯級數 Σ(n=1→∞)(-1)^(n+1)/n。判別題輸入 1 表示是、0 表示否。",
            "parts": [
              {
                "type": "input",
                "prompt": "此級數是否收斂？",
                "answers": [
                  "1"
                ],
                "explanation": "1/n 遞減趨零，所以交錯級數收斂。"
              },
              {
                "type": "input",
                "prompt": "是否絕對收斂？",
                "answers": [
                  "0"
                ],
                "explanation": "絕對值級數為調和級數，發散。"
              },
              {
                "type": "input",
                "prompt": "此近似的交錯餘項上界？",
                "answers": [
                  "0.2"
                ],
                "explanation": "計算：1/5 = 0.2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "用前 5 項近似交錯級數 Σ(n=1→∞)(-1)^(n+1)/n。判別題輸入 1 表示是、0 表示否。",
            "parts": [
              {
                "type": "input",
                "prompt": "此級數是否收斂？",
                "answers": [
                  "1"
                ],
                "explanation": "1/n 遞減趨零，所以交錯級數收斂。"
              },
              {
                "type": "input",
                "prompt": "是否絕對收斂？",
                "answers": [
                  "0"
                ],
                "explanation": "絕對值級數為調和級數，發散。"
              },
              {
                "type": "input",
                "prompt": "此近似的交錯餘項上界？",
                "answers": [
                  "0.16666666666666666"
                ],
                "explanation": "計算：1/6 = 0.16666666666666666。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "用前 6 項近似交錯級數 Σ(n=1→∞)(-1)^(n+1)/n。判別題輸入 1 表示是、0 表示否。",
            "parts": [
              {
                "type": "input",
                "prompt": "此級數是否收斂？",
                "answers": [
                  "1"
                ],
                "explanation": "1/n 遞減趨零，所以交錯級數收斂。"
              },
              {
                "type": "input",
                "prompt": "是否絕對收斂？",
                "answers": [
                  "0"
                ],
                "explanation": "絕對值級數為調和級數，發散。"
              },
              {
                "type": "input",
                "prompt": "此近似的交錯餘項上界？",
                "answers": [
                  "0.14285714285714285"
                ],
                "explanation": "計算：1/7 = 0.14285714285714285。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "用前 7 項近似交錯級數 Σ(n=1→∞)(-1)^(n+1)/n。判別題輸入 1 表示是、0 表示否。",
            "parts": [
              {
                "type": "input",
                "prompt": "此級數是否收斂？",
                "answers": [
                  "1"
                ],
                "explanation": "1/n 遞減趨零，所以交錯級數收斂。"
              },
              {
                "type": "input",
                "prompt": "是否絕對收斂？",
                "answers": [
                  "0"
                ],
                "explanation": "絕對值級數為調和級數，發散。"
              },
              {
                "type": "input",
                "prompt": "此近似的交錯餘項上界？",
                "answers": [
                  "0.125"
                ],
                "explanation": "計算：1/8 = 0.125。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-43",
        "title": "43 · 冪級數",
        "intro": "參考原書第 38 章。學習冪級數，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-42"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先求收斂半徑，再分別檢查兩端點。半徑內可以逐項微積分，但操作後端點行為可能改變。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "Σ(x/5)^n（n 從 0 起）的收斂半徑？"
          },
          {
            "type": "example",
            "text": "Σ(x/5)^n（n 從 0 起）的收斂半徑？\n計算：5 = 5。"
          },
          {
            "type": "paragraph",
            "text": "Σ(x/6)^n（n 從 0 起）的收斂半徑？"
          },
          {
            "type": "example",
            "text": "Σ(x/6)^n（n 從 0 起）的收斂半徑？\n計算：6 = 6。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "Σ(x/2)^n（n 從 0 起）的收斂半徑？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "Σ((x-1)/2)^n 的中心？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1 = 1。"
          },
          {
            "type": "input",
            "prompt": "Σ(x/2)^n 在 x=1 的和？",
            "answers": [
              "2"
            ],
            "explanation": "計算：1/(1-1/2) = 2。"
          },
          {
            "type": "input",
            "prompt": "1/(1-x) 的冪級數中 x^2 的係數？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1 = 1。"
          },
          {
            "type": "input",
            "prompt": "1/(1-2x) 的冪級數中 x² 的係數？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "Σ(x/3)^n（n 從 0 起）的收斂半徑？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "Σ((x-1)/3)^n 的中心？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1 = 1。"
          },
          {
            "type": "input",
            "prompt": "Σ(x/3)^n 在 x=1 的和？",
            "answers": [
              "1.5"
            ],
            "explanation": "計算：1/(1-1/3) = 1.5。"
          },
          {
            "type": "input",
            "prompt": "1/(1-x) 的冪級數中 x^3 的係數？",
            "answers": [
              "1"
            ],
            "explanation": "計算：1 = 1。"
          },
          {
            "type": "input",
            "prompt": "1/(1-3x) 的冪級數中 x² 的係數？",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-44",
        "title": "44 · Taylor 與 Maclaurin 展開",
        "intro": "參考原書第 39 章。學習Taylor 與 Maclaurin 展開，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-20",
          "mendelson-calculus.skill-43"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "係數是 f⁽ⁿ⁾(a)/n!，不是只有導數值。先選展開中心與階數，再評估誤差；Taylor 多項式與無窮級數需區分。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "對 f(x)=e^(7x) 在 0 作二階 Maclaurin 近似。"
          },
          {
            "type": "example",
            "text": "常數項？\n計算：exp(0) = 1。"
          },
          {
            "type": "example",
            "text": "x 的係數？\n計算：7/1 = 7。"
          },
          {
            "type": "example",
            "text": "x² 的係數？\n計算：7^2/2 = 24.5。"
          },
          {
            "type": "example",
            "text": "用此多項式近似 f(0.1)。\n計算：1+7*0.1+49/2*0.01 = 1.9450000000000003。"
          },
          {
            "type": "paragraph",
            "text": "對 f(x)=e^(8x) 在 0 作二階 Maclaurin 近似。"
          },
          {
            "type": "example",
            "text": "常數項？\n計算：exp(0) = 1。"
          },
          {
            "type": "example",
            "text": "x 的係數？\n計算：8/1 = 8。"
          },
          {
            "type": "example",
            "text": "x² 的係數？\n計算：8^2/2 = 32。"
          },
          {
            "type": "example",
            "text": "用此多項式近似 f(0.1)。\n計算：1+8*0.1+64/2*0.01 = 2.12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "對 f(x)=e^(2x) 在 0 作二階 Maclaurin 近似。",
            "parts": [
              {
                "type": "input",
                "prompt": "常數項？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：exp(0) = 1。"
              },
              {
                "type": "input",
                "prompt": "x 的係數？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2/1 = 2。"
              },
              {
                "type": "input",
                "prompt": "x² 的係數？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2^2/2 = 2。"
              },
              {
                "type": "input",
                "prompt": "用此多項式近似 f(0.1)。",
                "answers": [
                  "1.22"
                ],
                "explanation": "計算：1+2*0.1+4/2*0.01 = 1.22。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "對 f(x)=e^(3x) 在 0 作二階 Maclaurin 近似。",
            "parts": [
              {
                "type": "input",
                "prompt": "常數項？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：exp(0) = 1。"
              },
              {
                "type": "input",
                "prompt": "x 的係數？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3/1 = 3。"
              },
              {
                "type": "input",
                "prompt": "x² 的係數？",
                "answers": [
                  "4.5"
                ],
                "explanation": "計算：3^2/2 = 4.5。"
              },
              {
                "type": "input",
                "prompt": "用此多項式近似 f(0.1)。",
                "answers": [
                  "1.345"
                ],
                "explanation": "計算：1+3*0.1+9/2*0.01 = 1.345。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "對 f(x)=e^(4x) 在 0 作二階 Maclaurin 近似。",
            "parts": [
              {
                "type": "input",
                "prompt": "常數項？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：exp(0) = 1。"
              },
              {
                "type": "input",
                "prompt": "x 的係數？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4/1 = 4。"
              },
              {
                "type": "input",
                "prompt": "x² 的係數？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：4^2/2 = 8。"
              },
              {
                "type": "input",
                "prompt": "用此多項式近似 f(0.1)。",
                "answers": [
                  "1.48"
                ],
                "explanation": "計算：1+4*0.1+16/2*0.01 = 1.48。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "對 f(x)=e^(5x) 在 0 作二階 Maclaurin 近似。",
            "parts": [
              {
                "type": "input",
                "prompt": "常數項？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：exp(0) = 1。"
              },
              {
                "type": "input",
                "prompt": "x 的係數？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5/1 = 5。"
              },
              {
                "type": "input",
                "prompt": "x² 的係數？",
                "answers": [
                  "12.5"
                ],
                "explanation": "計算：5^2/2 = 12.5。"
              },
              {
                "type": "input",
                "prompt": "用此多項式近似 f(0.1)。",
                "answers": [
                  "1.625"
                ],
                "explanation": "計算：1+5*0.1+25/2*0.01 = 1.625。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-45",
        "title": "45 · 空間向量、直線與平面",
        "intro": "參考原書第 40 章。學習空間向量、直線與平面，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-37"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "平面的法向量來自方程係數；直線用點加方向向量表示。叉積垂直於兩向量，長度等於平行四邊形面積。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "(5,0,0)×(0,2,0) 的 z 分量？"
          },
          {
            "type": "example",
            "text": "(5,0,0)×(0,2,0) 的 z 分量？\n計算：5*2 = 10。"
          },
          {
            "type": "paragraph",
            "text": "(6,0,0)×(0,2,0) 的 z 分量？"
          },
          {
            "type": "example",
            "text": "(6,0,0)×(0,2,0) 的 z 分量？\n計算：6*2 = 12。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "(2,0,0)×(0,2,0) 的 z 分量？",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2 = 4。"
          },
          {
            "type": "input",
            "prompt": "向量 (1,2,2) 的長度？",
            "answers": [
              "3"
            ],
            "explanation": "計算：sqrt(5+2^2) = 3。"
          },
          {
            "type": "input",
            "prompt": "平面 2x+2y+z=1 的法向量 x 分量？",
            "answers": [
              "2"
            ],
            "explanation": "計算：2 = 2。"
          },
          {
            "type": "input",
            "prompt": "直線 r=(1,0,0)+t(2,1,2)，t=2 時的 x？",
            "answers": [
              "5"
            ],
            "explanation": "計算：1+2*2 = 5。"
          },
          {
            "type": "input",
            "prompt": "點 (0,0,2) 到平面 z=0 的距離？",
            "answers": [
              "2"
            ],
            "explanation": "計算：abs(2) = 2。"
          },
          {
            "type": "input",
            "prompt": "(3,0,0)×(0,2,0) 的 z 分量？",
            "answers": [
              "6"
            ],
            "explanation": "計算：3*2 = 6。"
          },
          {
            "type": "input",
            "prompt": "向量 (1,2,3) 的長度？",
            "answers": [
              "3.7416573867739413"
            ],
            "explanation": "計算：sqrt(5+3^2) = 3.7416573867739413。"
          },
          {
            "type": "input",
            "prompt": "平面 3x+2y+z=1 的法向量 x 分量？",
            "answers": [
              "3"
            ],
            "explanation": "計算：3 = 3。"
          },
          {
            "type": "input",
            "prompt": "直線 r=(1,0,0)+t(3,1,2)，t=2 時的 x？",
            "answers": [
              "7"
            ],
            "explanation": "計算：1+2*3 = 7。"
          },
          {
            "type": "input",
            "prompt": "點 (0,0,3) 到平面 z=0 的距離？",
            "answers": [
              "3"
            ],
            "explanation": "計算：abs(3) = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-46",
        "title": "46 · 多變量函數與座標",
        "intro": "參考原書第 41 章。學習多變量函數與座標，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-06",
          "mendelson-calculus.skill-45"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "定義域可能是平面區域或空間集合。等高線固定函數值；柱座標 x=r cos θ、y=r sin θ，球座標須說明角度慣例。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x,y)=x²+y²，求 f(5,1)。"
          },
          {
            "type": "example",
            "text": "f(x,y)=x²+y²，求 f(5,1)。\n計算：5^2+1 = 26。"
          },
          {
            "type": "paragraph",
            "text": "f(x,y)=x²+y²，求 f(6,1)。"
          },
          {
            "type": "example",
            "text": "f(x,y)=x²+y²，求 f(6,1)。\n計算：6^2+1 = 37。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f(x,y)=x²+y²，求 f(2,1)。",
            "answers": [
              "5"
            ],
            "explanation": "計算：2^2+1 = 5。"
          },
          {
            "type": "input",
            "prompt": "x²+y²=4 的等高線半徑？",
            "answers": [
              "2"
            ],
            "explanation": "計算：sqrt(4) = 2。"
          },
          {
            "type": "input",
            "prompt": "柱座標 r=2, θ=0，求 x。",
            "answers": [
              "2"
            ],
            "explanation": "計算：2*cos(0) = 2。"
          },
          {
            "type": "input",
            "prompt": "球座標 ρ=2, φ=pi/2（φ 從正 z 軸量），求 z。",
            "answers": [
              "0"
            ],
            "explanation": "計算：2*cos(pi/2) = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x,y)=√(4-x²-y²)，求 f(0,0)。",
            "answers": [
              "2"
            ],
            "explanation": "計算：sqrt(4) = 2。"
          },
          {
            "type": "input",
            "prompt": "f(x,y)=x²+y²，求 f(3,1)。",
            "answers": [
              "10"
            ],
            "explanation": "計算：3^2+1 = 10。"
          },
          {
            "type": "input",
            "prompt": "x²+y²=9 的等高線半徑？",
            "answers": [
              "3"
            ],
            "explanation": "計算：sqrt(9) = 3。"
          },
          {
            "type": "input",
            "prompt": "柱座標 r=3, θ=0，求 x。",
            "answers": [
              "3"
            ],
            "explanation": "計算：3*cos(0) = 3。"
          },
          {
            "type": "input",
            "prompt": "球座標 ρ=3, φ=pi/2（φ 從正 z 軸量），求 z。",
            "answers": [
              "0"
            ],
            "explanation": "計算：3*cos(pi/2) = 0。"
          },
          {
            "type": "input",
            "prompt": "f(x,y)=√(9-x²-y²)，求 f(0,0)。",
            "answers": [
              "3"
            ],
            "explanation": "計算：sqrt(9) = 3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-47",
        "title": "47 · 偏導數與全微分",
        "intro": "參考原書第 42 章。學習偏導數與全微分，完成10 道輸入練習。",
        "kind": "base",
        "minutes": 20,
        "parents": [
          "mendelson-calculus.skill-14",
          "mendelson-calculus.skill-46"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "對一變量求偏導時，其餘獨立變量暫作常數。全微分 df=fₓdx+fᵧdy；沿路徑變動時用多變量鏈式法則。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f=x²y，在 (5,2) 求 fₓ。"
          },
          {
            "type": "example",
            "text": "f=x²y，在 (5,2) 求 fₓ。\n計算：2*5*2 = 20。"
          },
          {
            "type": "paragraph",
            "text": "f=x²y，在 (6,2) 求 fₓ。"
          },
          {
            "type": "example",
            "text": "f=x²y，在 (6,2) 求 fₓ。\n計算：2*6*2 = 24。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "input",
            "prompt": "f=x²y，在 (2,2) 求 fₓ。",
            "answers": [
              "8"
            ],
            "explanation": "計算：2*2*2 = 8。"
          },
          {
            "type": "input",
            "prompt": "f=x²y，在 (2,2) 求 fᵧ。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2^2 = 4。"
          },
          {
            "type": "input",
            "prompt": "f=x²y，在 x=2 求 fₓᵧ。",
            "answers": [
              "4"
            ],
            "explanation": "計算：2*2 = 4。"
          },
          {
            "type": "input",
            "prompt": "f=x²+y²，x=t,y=2t，t=1 時 df/dt？",
            "answers": [
              "10"
            ],
            "explanation": "計算：2+2*2^2 = 10。"
          },
          {
            "type": "input",
            "prompt": "f=x+y，在 dx=0.1,dy=0.2 時 df？",
            "answers": [
              "0.30000000000000004"
            ],
            "explanation": "計算：0.1+0.2 = 0.30000000000000004。"
          },
          {
            "type": "input",
            "prompt": "f=x²y，在 (3,2) 求 fₓ。",
            "answers": [
              "12"
            ],
            "explanation": "計算：2*3*2 = 12。"
          },
          {
            "type": "input",
            "prompt": "f=x²y，在 (3,2) 求 fᵧ。",
            "answers": [
              "9"
            ],
            "explanation": "計算：3^2 = 9。"
          },
          {
            "type": "input",
            "prompt": "f=x²y，在 x=3 求 fₓᵧ。",
            "answers": [
              "6"
            ],
            "explanation": "計算：2*3 = 6。"
          },
          {
            "type": "input",
            "prompt": "f=x²+y²，x=t,y=3t，t=1 時 df/dt？",
            "answers": [
              "20"
            ],
            "explanation": "計算：2+2*3^2 = 20。"
          },
          {
            "type": "input",
            "prompt": "f=x+y，在 dx=0.1,dy=0.3 時 df？",
            "answers": [
              "0.4"
            ],
            "explanation": "計算：0.1+0.3 = 0.4。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-48",
        "title": "48 · 梯度、方向導數與極值",
        "intro": "參考原書第 43 章。學習梯度、方向導數與極值，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-18",
          "mendelson-calculus.skill-47"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "方向導數用梯度內積單位方向。極值先解梯度為零，再用 Hessian 或其他方法分類；若二階判別退化，須另作分析。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "f(x,y)=(x-7)²+2(y-1)²。"
          },
          {
            "type": "example",
            "text": "唯一駐點的 x 座標？\n計算：7 = 7。"
          },
          {
            "type": "example",
            "text": "Hessian 行列式？\n計算：2*4-0 = 8。"
          },
          {
            "type": "example",
            "text": "全域最小值？\n計算：0+0 = 0。"
          },
          {
            "type": "example",
            "text": "在 (0,1) 沿正 x 軸的方向導數？\n計算：2*(0-7) = -14。"
          },
          {
            "type": "paragraph",
            "text": "f(x,y)=(x-8)²+2(y-1)²。"
          },
          {
            "type": "example",
            "text": "唯一駐點的 x 座標？\n計算：8 = 8。"
          },
          {
            "type": "example",
            "text": "Hessian 行列式？\n計算：2*4-0 = 8。"
          },
          {
            "type": "example",
            "text": "全域最小值？\n計算：0+0 = 0。"
          },
          {
            "type": "example",
            "text": "在 (0,1) 沿正 x 軸的方向導數？\n計算：2*(0-8) = -16。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "f(x,y)=(x-2)²+2(y-1)²。",
            "parts": [
              {
                "type": "input",
                "prompt": "唯一駐點的 x 座標？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              },
              {
                "type": "input",
                "prompt": "Hessian 行列式？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*4-0 = 8。"
              },
              {
                "type": "input",
                "prompt": "全域最小值？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：0+0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 (0,1) 沿正 x 軸的方向導數？",
                "answers": [
                  "-4"
                ],
                "explanation": "計算：2*(0-2) = -4。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "f(x,y)=(x-3)²+2(y-1)²。",
            "parts": [
              {
                "type": "input",
                "prompt": "唯一駐點的 x 座標？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3 = 3。"
              },
              {
                "type": "input",
                "prompt": "Hessian 行列式？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*4-0 = 8。"
              },
              {
                "type": "input",
                "prompt": "全域最小值？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：0+0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 (0,1) 沿正 x 軸的方向導數？",
                "answers": [
                  "-6"
                ],
                "explanation": "計算：2*(0-3) = -6。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "f(x,y)=(x-4)²+2(y-1)²。",
            "parts": [
              {
                "type": "input",
                "prompt": "唯一駐點的 x 座標？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4 = 4。"
              },
              {
                "type": "input",
                "prompt": "Hessian 行列式？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*4-0 = 8。"
              },
              {
                "type": "input",
                "prompt": "全域最小值？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：0+0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 (0,1) 沿正 x 軸的方向導數？",
                "answers": [
                  "-8"
                ],
                "explanation": "計算：2*(0-4) = -8。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "f(x,y)=(x-5)²+2(y-1)²。",
            "parts": [
              {
                "type": "input",
                "prompt": "唯一駐點的 x 座標？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5 = 5。"
              },
              {
                "type": "input",
                "prompt": "Hessian 行列式？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*4-0 = 8。"
              },
              {
                "type": "input",
                "prompt": "全域最小值？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：0+0 = 0。"
              },
              {
                "type": "input",
                "prompt": "在 (0,1) 沿正 x 軸的方向導數？",
                "answers": [
                  "-10"
                ],
                "explanation": "計算：2*(0-5) = -10。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-49",
        "title": "49 · 二重積分與區域",
        "intro": "參考原書第 44 章。學習二重積分與區域，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-23",
          "mendelson-calculus.skill-47"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先畫區域再寫內外上下限。內層積分時外層變量固定；交換次序須重寫區域，不能只交換 dx、dy。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "三角區域 D：0≤x≤7, 0≤y≤x，計算質量與矩，密度為 1。"
          },
          {
            "type": "example",
            "text": "面積 ∬D 1 dA？\n計算：7^2/2 = 24.5。"
          },
          {
            "type": "example",
            "text": "➍D x dA（此處符號表示二重積分）？\n計算：7^3/3 = 114.33333333333333。"
          },
          {
            "type": "example",
            "text": "➍D y dA（此處符號表示二重積分）？\n計算：7^3/6 = 57.166666666666664。"
          },
          {
            "type": "example",
            "text": "交換積分順序後，外層 y 上限？\n計算：7 = 7。"
          },
          {
            "type": "paragraph",
            "text": "三角區域 D：0≤x≤8, 0≤y≤x，計算質量與矩，密度為 1。"
          },
          {
            "type": "example",
            "text": "面積 ∬D 1 dA？\n計算：8^2/2 = 32。"
          },
          {
            "type": "example",
            "text": "➍D x dA（此處符號表示二重積分）？\n計算：8^3/3 = 170.66666666666666。"
          },
          {
            "type": "example",
            "text": "➍D y dA（此處符號表示二重積分）？\n計算：8^3/6 = 85.33333333333333。"
          },
          {
            "type": "example",
            "text": "交換積分順序後，外層 y 上限？\n計算：8 = 8。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "三角區域 D：0≤x≤2, 0≤y≤x，計算質量與矩，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積 ∬D 1 dA？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2^2/2 = 2。"
              },
              {
                "type": "input",
                "prompt": "➍D x dA（此處符號表示二重積分）？",
                "answers": [
                  "2.6666666666666665"
                ],
                "explanation": "計算：2^3/3 = 2.6666666666666665。"
              },
              {
                "type": "input",
                "prompt": "➍D y dA（此處符號表示二重積分）？",
                "answers": [
                  "1.3333333333333333"
                ],
                "explanation": "計算：2^3/6 = 1.3333333333333333。"
              },
              {
                "type": "input",
                "prompt": "交換積分順序後，外層 y 上限？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "三角區域 D：0≤x≤3, 0≤y≤x，計算質量與矩，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積 ∬D 1 dA？",
                "answers": [
                  "4.5"
                ],
                "explanation": "計算：3^2/2 = 4.5。"
              },
              {
                "type": "input",
                "prompt": "➍D x dA（此處符號表示二重積分）？",
                "answers": [
                  "9"
                ],
                "explanation": "計算：3^3/3 = 9。"
              },
              {
                "type": "input",
                "prompt": "➍D y dA（此處符號表示二重積分）？",
                "answers": [
                  "4.5"
                ],
                "explanation": "計算：3^3/6 = 4.5。"
              },
              {
                "type": "input",
                "prompt": "交換積分順序後，外層 y 上限？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3 = 3。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "三角區域 D：0≤x≤4, 0≤y≤x，計算質量與矩，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積 ∬D 1 dA？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：4^2/2 = 8。"
              },
              {
                "type": "input",
                "prompt": "➍D x dA（此處符號表示二重積分）？",
                "answers": [
                  "21.333333333333332"
                ],
                "explanation": "計算：4^3/3 = 21.333333333333332。"
              },
              {
                "type": "input",
                "prompt": "➍D y dA（此處符號表示二重積分）？",
                "answers": [
                  "10.666666666666666"
                ],
                "explanation": "計算：4^3/6 = 10.666666666666666。"
              },
              {
                "type": "input",
                "prompt": "交換積分順序後，外層 y 上限？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4 = 4。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "三角區域 D：0≤x≤5, 0≤y≤x，計算質量與矩，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "面積 ∬D 1 dA？",
                "answers": [
                  "12.5"
                ],
                "explanation": "計算：5^2/2 = 12.5。"
              },
              {
                "type": "input",
                "prompt": "➍D x dA（此處符號表示二重積分）？",
                "answers": [
                  "41.666666666666664"
                ],
                "explanation": "計算：5^3/3 = 41.666666666666664。"
              },
              {
                "type": "input",
                "prompt": "➍D y dA（此處符號表示二重積分）？",
                "answers": [
                  "20.833333333333332"
                ],
                "explanation": "計算：5^3/6 = 20.833333333333332。"
              },
              {
                "type": "input",
                "prompt": "交換積分順序後，外層 y 上限？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5 = 5。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-50",
        "title": "50 · 多重積分與座標變換",
        "intro": "參考原書第 44 章。學習多重積分與座標變換，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-25",
          "mendelson-calculus.skill-49"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "柱座標體積元素是 r dr dθ dz，球座標是 ρ² sin φ dρ dφ dθ。Jacobian 不能漏掉，積分上下限須描述同一區域。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "實心圓柱：0≤r≤7, 0≤θ≤2pi, 0≤z≤2，密度為 1。"
          },
          {
            "type": "example",
            "text": "在 r=7 的柱座標 Jacobian？\n計算：7 = 7。"
          },
          {
            "type": "example",
            "text": "體積除以 pi？\n計算：2*7^2 = 98。"
          },
          {
            "type": "example",
            "text": "∭z dV 除以 pi？\n計算：7^2*2^2/2 = 98。"
          },
          {
            "type": "example",
            "text": "質心 z 座標？\n計算：2/2 = 1。"
          },
          {
            "type": "paragraph",
            "text": "實心圓柱：0≤r≤8, 0≤θ≤2pi, 0≤z≤2，密度為 1。"
          },
          {
            "type": "example",
            "text": "在 r=8 的柱座標 Jacobian？\n計算：8 = 8。"
          },
          {
            "type": "example",
            "text": "體積除以 pi？\n計算：2*8^2 = 128。"
          },
          {
            "type": "example",
            "text": "∭z dV 除以 pi？\n計算：8^2*2^2/2 = 128。"
          },
          {
            "type": "example",
            "text": "質心 z 座標？\n計算：2/2 = 1。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "實心圓柱：0≤r≤2, 0≤θ≤2pi, 0≤z≤2，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 r=2 的柱座標 Jacobian？",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2 = 2。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*2^2 = 8。"
              },
              {
                "type": "input",
                "prompt": "∭z dV 除以 pi？",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2^2*2^2/2 = 8。"
              },
              {
                "type": "input",
                "prompt": "質心 z 座標？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：2/2 = 1。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "實心圓柱：0≤r≤3, 0≤θ≤2pi, 0≤z≤2，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 r=3 的柱座標 Jacobian？",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3 = 3。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "18"
                ],
                "explanation": "計算：2*3^2 = 18。"
              },
              {
                "type": "input",
                "prompt": "∭z dV 除以 pi？",
                "answers": [
                  "18"
                ],
                "explanation": "計算：3^2*2^2/2 = 18。"
              },
              {
                "type": "input",
                "prompt": "質心 z 座標？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：2/2 = 1。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "實心圓柱：0≤r≤4, 0≤θ≤2pi, 0≤z≤2，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 r=4 的柱座標 Jacobian？",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4 = 4。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "32"
                ],
                "explanation": "計算：2*4^2 = 32。"
              },
              {
                "type": "input",
                "prompt": "∭z dV 除以 pi？",
                "answers": [
                  "32"
                ],
                "explanation": "計算：4^2*2^2/2 = 32。"
              },
              {
                "type": "input",
                "prompt": "質心 z 座標？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：2/2 = 1。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "實心圓柱：0≤r≤5, 0≤θ≤2pi, 0≤z≤2，密度為 1。",
            "parts": [
              {
                "type": "input",
                "prompt": "在 r=5 的柱座標 Jacobian？",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5 = 5。"
              },
              {
                "type": "input",
                "prompt": "體積除以 pi？",
                "answers": [
                  "50"
                ],
                "explanation": "計算：2*5^2 = 50。"
              },
              {
                "type": "input",
                "prompt": "∭z dV 除以 pi？",
                "answers": [
                  "50"
                ],
                "explanation": "計算：5^2*2^2/2 = 50。"
              },
              {
                "type": "input",
                "prompt": "質心 z 座標？",
                "answers": [
                  "1"
                ],
                "explanation": "計算：2/2 = 1。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-51",
        "title": "51 · 向量場與線積分",
        "intro": "參考原書第 45 章。學習向量場與線積分，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-38",
          "mendelson-calculus.skill-47",
          "mendelson-calculus.skill-49"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "散度是各分量對相應座標的偏導數和。旋度衡量局部旋轉。線積分 ∫F·dr 用路徑代入；若有勢函數可用端點差。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "F=(2x,2y,2z)，沿任意光滑路徑由 (0,0,0) 到 (7,1,2)。"
          },
          {
            "type": "example",
            "text": "散度 div F？\n計算：2+2+2 = 6。"
          },
          {
            "type": "example",
            "text": "旋度的 z 分量？\n計算：∂(2y)/∂x-∂(2x)/∂y=0 = 0。"
          },
          {
            "type": "example",
            "text": "線積分 ∫F·dr？\n計算：7^2+1+4 = 54。"
          },
          {
            "type": "paragraph",
            "text": "F=(2x,2y,2z)，沿任意光滑路徑由 (0,0,0) 到 (8,1,2)。"
          },
          {
            "type": "example",
            "text": "散度 div F？\n計算：2+2+2 = 6。"
          },
          {
            "type": "example",
            "text": "旋度的 z 分量？\n計算：∂(2y)/∂x-∂(2x)/∂y=0 = 0。"
          },
          {
            "type": "example",
            "text": "線積分 ∫F·dr？\n計算：8^2+1+4 = 69。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "F=(2x,2y,2z)，沿任意光滑路徑由 (0,0,0) 到 (2,1,2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "散度 div F？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2+2+2 = 6。"
              },
              {
                "type": "input",
                "prompt": "旋度的 z 分量？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：∂(2y)/∂x-∂(2x)/∂y=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "線積分 ∫F·dr？",
                "answers": [
                  "9"
                ],
                "explanation": "計算：2^2+1+4 = 9。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "F=(2x,2y,2z)，沿任意光滑路徑由 (0,0,0) 到 (3,1,2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "散度 div F？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2+2+2 = 6。"
              },
              {
                "type": "input",
                "prompt": "旋度的 z 分量？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：∂(2y)/∂x-∂(2x)/∂y=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "線積分 ∫F·dr？",
                "answers": [
                  "14"
                ],
                "explanation": "計算：3^2+1+4 = 14。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "F=(2x,2y,2z)，沿任意光滑路徑由 (0,0,0) 到 (4,1,2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "散度 div F？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2+2+2 = 6。"
              },
              {
                "type": "input",
                "prompt": "旋度的 z 分量？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：∂(2y)/∂x-∂(2x)/∂y=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "線積分 ∫F·dr？",
                "answers": [
                  "21"
                ],
                "explanation": "計算：4^2+1+4 = 21。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "F=(2x,2y,2z)，沿任意光滑路徑由 (0,0,0) 到 (5,1,2)。",
            "parts": [
              {
                "type": "input",
                "prompt": "散度 div F？",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2+2+2 = 6。"
              },
              {
                "type": "input",
                "prompt": "旋度的 z 分量？",
                "answers": [
                  "0"
                ],
                "explanation": "計算：∂(2y)/∂x-∂(2x)/∂y=0 = 0。"
              },
              {
                "type": "input",
                "prompt": "線積分 ∫F·dr？",
                "answers": [
                  "30"
                ],
                "explanation": "計算：5^2+1+4 = 30。"
              }
            ]
          }
        ],
        "passCount": 3
      },
      {
        "schemaVersion": 1,
        "id": "mendelson-calculus.skill-52",
        "title": "52 · 微分方程與初值",
        "intro": "參考原書第 46 章。學習微分方程與初值，完成4 道分步輸入長題。",
        "kind": "base",
        "minutes": 40,
        "parents": [
          "mendelson-calculus.skill-29",
          "mendelson-calculus.skill-31",
          "mendelson-calculus.skill-33"
        ],
        "content": [
          {
            "type": "heading",
            "text": "先用白話理解"
          },
          {
            "type": "paragraph",
            "text": "先辨認可分離、一階線性或常係數等形式。求通解後代入初值，再把答案微分代回方程檢查；除以未知函數前留意零解。"
          },
          {
            "type": "tip",
            "text": "先辨認已知量與所求量；檢查公式適用條件，再列式、計算並核對結果。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "paragraph",
            "text": "求解 y′=2xy，y(0)=7，並驗證數值。"
          },
          {
            "type": "example",
            "text": "ln|y|=x²+C 中的 C？\n計算：ln(7) = 1.9459101490553132。"
          },
          {
            "type": "example",
            "text": "求 y(1)/e。\n計算：7*exp(1)/exp(1) = 7。"
          },
          {
            "type": "example",
            "text": "求 y′(1)/e。\n計算：2*1*7 = 14。"
          },
          {
            "type": "example",
            "text": "求 y″(0)。\n計算：2*7+0 = 14。"
          },
          {
            "type": "paragraph",
            "text": "求解 y′=2xy，y(0)=8，並驗證數值。"
          },
          {
            "type": "example",
            "text": "ln|y|=x²+C 中的 C？\n計算：ln(8) = 2.0794415416798357。"
          },
          {
            "type": "example",
            "text": "求 y(1)/e。\n計算：8*exp(1)/exp(1) = 8。"
          },
          {
            "type": "example",
            "text": "求 y′(1)/e。\n計算：2*1*8 = 16。"
          },
          {
            "type": "example",
            "text": "求 y″(0)。\n計算：2*8+0 = 16。"
          },
          {
            "type": "tip",
            "text": "作答只填數值，不填單位。分數用 /，乘法用 *，次方用 ^；需要近似時可保留至少 10 位小數。"
          }
        ],
        "questions": [
          {
            "type": "multipart",
            "prompt": "求解 y′=2xy，y(0)=2，並驗證數值。",
            "parts": [
              {
                "type": "input",
                "prompt": "ln|y|=x²+C 中的 C？",
                "answers": [
                  "0.6931471805599453"
                ],
                "explanation": "計算：ln(2) = 0.6931471805599453。"
              },
              {
                "type": "input",
                "prompt": "求 y(1)/e。",
                "answers": [
                  "2"
                ],
                "explanation": "計算：2*exp(1)/exp(1) = 2。"
              },
              {
                "type": "input",
                "prompt": "求 y′(1)/e。",
                "answers": [
                  "4"
                ],
                "explanation": "計算：2*1*2 = 4。"
              },
              {
                "type": "input",
                "prompt": "求 y″(0)。",
                "answers": [
                  "4"
                ],
                "explanation": "計算：2*2+0 = 4。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "求解 y′=2xy，y(0)=3，並驗證數值。",
            "parts": [
              {
                "type": "input",
                "prompt": "ln|y|=x²+C 中的 C？",
                "answers": [
                  "1.0986122886681096"
                ],
                "explanation": "計算：ln(3) = 1.0986122886681096。"
              },
              {
                "type": "input",
                "prompt": "求 y(1)/e。",
                "answers": [
                  "3"
                ],
                "explanation": "計算：3*exp(1)/exp(1) = 3。"
              },
              {
                "type": "input",
                "prompt": "求 y′(1)/e。",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*1*3 = 6。"
              },
              {
                "type": "input",
                "prompt": "求 y″(0)。",
                "answers": [
                  "6"
                ],
                "explanation": "計算：2*3+0 = 6。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "求解 y′=2xy，y(0)=4，並驗證數值。",
            "parts": [
              {
                "type": "input",
                "prompt": "ln|y|=x²+C 中的 C？",
                "answers": [
                  "1.3862943611198906"
                ],
                "explanation": "計算：ln(4) = 1.3862943611198906。"
              },
              {
                "type": "input",
                "prompt": "求 y(1)/e。",
                "answers": [
                  "4"
                ],
                "explanation": "計算：4*exp(1)/exp(1) = 4。"
              },
              {
                "type": "input",
                "prompt": "求 y′(1)/e。",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*1*4 = 8。"
              },
              {
                "type": "input",
                "prompt": "求 y″(0)。",
                "answers": [
                  "8"
                ],
                "explanation": "計算：2*4+0 = 8。"
              }
            ]
          },
          {
            "type": "multipart",
            "prompt": "求解 y′=2xy，y(0)=5，並驗證數值。",
            "parts": [
              {
                "type": "input",
                "prompt": "ln|y|=x²+C 中的 C？",
                "answers": [
                  "1.6094379124341003"
                ],
                "explanation": "計算：ln(5) = 1.6094379124341003。"
              },
              {
                "type": "input",
                "prompt": "求 y(1)/e。",
                "answers": [
                  "5"
                ],
                "explanation": "計算：5*exp(1)/exp(1) = 5。"
              },
              {
                "type": "input",
                "prompt": "求 y′(1)/e。",
                "answers": [
                  "10"
                ],
                "explanation": "計算：2*1*5 = 10。"
              },
              {
                "type": "input",
                "prompt": "求 y″(0)。",
                "answers": [
                  "10"
                ],
                "explanation": "計算：2*5+0 = 10。"
              }
            ]
          }
        ],
        "passCount": 3
      }
    ]
  }
];
