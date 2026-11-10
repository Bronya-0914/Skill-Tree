// 此檔由 scripts/build-learning-packs.cjs 產生，請編輯各主題的 JSON。
const LEARNING_PACKS = [
  {
    "topic": {
      "schemaVersion": 1,
      "id": "cis221-calculus",
      "title": "CIS221 微積分完整學習路線",
      "version": 1,
      "description": "27 個循序漸進的學習節點，涵蓋代數、微分、多變量、積分及數值方法。每節點 10 題，附教學、例題與解析。",
      "attachTo": "start"
    },
    "nodes": [
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.functions",
        "title": "01 · 函數、定義域與值域",
        "intro": "掌握函數代入、輸入限制和可能輸出，為微積分建立代數基礎。",
        "kind": "base",
        "minutes": 15,
        "parents": [],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "定義域是允許代入的輸入集合，值域是實際能得到的輸出集合。實數範圍內，分母不能為零，偶次方根內部必須非負，對數的真數必須為正。垂直線測試可判斷圖形是否代表 y 是 x 的函數。"
          },
          {
            "type": "formula",
            "text": "函數 f：每個合法輸入 x，對應唯一的輸出 f(x)。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 f(x)=√(x−2) 的定義域和值域。\n① 要求 x−2≥0，得到 x≥2。\n② 平方根輸出總是非負，且隨 x 增大沒有上界。\n③ 定義域為 [2,∞)，值域為 [0,∞)。"
          },
          {
            "type": "tip",
            "text": "先檢查輸入是否合法，再進行代入。定義域和值域描述的是不同集合。"
          }
        ],
        "questions": [
          {
            "prompt": "若 f(x)=2x²−3，f(−2) 是多少？",
            "options": [
              "5",
              "−11",
              "1",
              "11"
            ],
            "answer": 0,
            "explanation": "先平方得到 4，再算 2×4−3=5。"
          },
          {
            "prompt": "f(x)=1/(x−4) 的實數定義域是？",
            "options": [
              "x>4",
              "x≥4",
              "所有實數",
              "所有實數，但 x≠4"
            ],
            "answer": 3,
            "explanation": "分母 x−4 不能為零，所以排除 4。"
          },
          {
            "prompt": "f(x)=√(5−x) 的定義域是？",
            "options": [
              "x<5",
              "所有實數",
              "x≤5",
              "x≥5"
            ],
            "answer": 2,
            "explanation": "根號內要求 5−x≥0，所以 x≤5，端點可以取。"
          },
          {
            "prompt": "f(x)=(x−1)²+2 的值域是？",
            "options": [
              "(2,∞)",
              "[2,∞)",
              "[1,∞)",
              "所有實數"
            ],
            "answer": 1,
            "explanation": "平方項最小是 0，在 x=1 取得，因此最小輸出為 2。"
          },
          {
            "prompt": "若同一條垂直線與圖形相交兩點，該圖形能否表示 y 是 x 的函數？",
            "options": [
              "不能，該 x 對應兩個 y",
              "可以，只要圖形連續",
              "可以，只要兩個 y 都為正",
              "不能，因為斜率必定為零"
            ],
            "answer": 0,
            "explanation": "函數要求每個合法輸入只對應一個輸出。"
          },
          {
            "prompt": "g(x)=x²+1，g(t+1) 是？",
            "options": [
              "t²+1",
              "t²+2",
              "t²+2t+1",
              "t²+2t+2"
            ],
            "answer": 3,
            "explanation": "將整個 t+1 代入，(t+1)²+1=t²+2t+2。"
          },
          {
            "prompt": "f(x)=ln(x+3) 的定義域是？",
            "options": [
              "x<−3",
              "x≠−3",
              "x>−3",
              "x≥−3"
            ],
            "answer": 2,
            "explanation": "對數真數要大於零，x+3>0，所以 x>−3。"
          },
          {
            "prompt": "f(x)=√(x+1)/(x−2) 的定義域是？",
            "options": [
              "所有實數但 x≠2",
              "[−1,2) ∪ (2,∞)",
              "[−1,∞)",
              "(−1,2) ∪ (2,∞)"
            ],
            "answer": 1,
            "explanation": "同時要求 x≥−1 及 x≠2。"
          },
          {
            "prompt": "f(x)=|x| 的值域是？",
            "options": [
              "[0,∞)",
              "所有實數",
              "(0,∞)",
              "[−1,1]"
            ],
            "answer": 0,
            "explanation": "絕對值非負，且 x=0 時可取 0。"
          },
          {
            "prompt": "f(x)=3x+1、g(x)=x²，f(g(2)) 是多少？",
            "options": [
              "49",
              "7",
              "10",
              "13"
            ],
            "answer": 3,
            "explanation": "先算 g(2)=4，再算 f(4)=13。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.graphs",
        "title": "02 · 直線與二次函數",
        "intro": "由斜率、截距、頂點和開口方向讀懂基本圖形。",
        "kind": "base",
        "minutes": 15,
        "parents": [
          "cis221-calculus.functions"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "直線斜率量度每單位 x 的 y 變化。平行且非垂直的直線斜率相同，兩條互相垂直且斜率存在的直線滿足 m₁m₂=−1。二次函數 ax²+bx+c 的 a 決定開口方向。"
          },
          {
            "type": "formula",
            "text": "y=mx+b；m=(y₂−y₁)/(x₂−x₁)。二次函數頂點的 x 座標為 −b/(2a)。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 y=x²−6x+5 的頂點。\n① x=−(−6)/(2×1)=3。\n② y=9−18+5=−4。\n③ a>0，開口向上，頂點 (3,−4) 是最低點。"
          },
          {
            "type": "tip",
            "text": "垂直線的斜率不存在。只有非零斜率的直線，才可直接用 −1/m 求垂線斜率。"
          }
        ],
        "questions": [
          {
            "prompt": "通過 (1,2) 和 (4,8) 的直線斜率是？",
            "options": [
              "3",
              "6",
              "1/2",
              "2"
            ],
            "answer": 3,
            "explanation": "斜率=(8−2)/(4−1)=6/3=2。"
          },
          {
            "prompt": "y=−3x+7 的 y 軸截距是？",
            "options": [
              "3",
              "−7",
              "7",
              "−3"
            ],
            "answer": 2,
            "explanation": "令 x=0，可得 y=7。"
          },
          {
            "prompt": "斜率為 2 且經過 (1,5) 的直線是？",
            "options": [
              "y=2x−3",
              "y=2x+3",
              "y=2x+5",
              "y=3x+2"
            ],
            "answer": 1,
            "explanation": "代入 5=2×1+b，得到 b=3。"
          },
          {
            "prompt": "與 y=4x−1 垂直的非垂直直線，其斜率是？",
            "options": [
              "−1/4",
              "1/4",
              "−4",
              "4"
            ],
            "answer": 0,
            "explanation": "兩斜率乘積為 −1，所以所求為 −1/4。"
          },
          {
            "prompt": "y=x²−6x+5 的頂點是？",
            "options": [
              "(−3,−4)",
              "(3,4)",
              "(6,5)",
              "(3,−4)"
            ],
            "answer": 3,
            "explanation": "x=3，代回得 y=−4。"
          },
          {
            "prompt": "y=−2x²+8x−1 的開口方向是？",
            "options": [
              "向左",
              "向右",
              "向下",
              "向上"
            ],
            "answer": 2,
            "explanation": "x² 的係數 −2<0，所以拋物線向下開口。"
          },
          {
            "prompt": "y=(x+2)²−3 的對稱軸是？",
            "options": [
              "y=2",
              "x=−2",
              "x=2",
              "y=−3"
            ],
            "answer": 1,
            "explanation": "頂點式中的平方項在 x=−2 為零，對稱軸通過該 x。"
          },
          {
            "prompt": "固定費用 20 元，另每公里 3 元，走 5 公里費用為？",
            "options": [
              "35 元",
              "15 元",
              "100 元",
              "23 元"
            ],
            "answer": 0,
            "explanation": "費用模型 C(x)=20+3x，C(5)=35。"
          },
          {
            "prompt": "直線 x=2 的斜率是？",
            "options": [
              "0",
              "2",
              "1/2",
              "不存在"
            ],
            "answer": 3,
            "explanation": "垂直線的 Δx=0，不能用 Δy/Δx 得到有限斜率。"
          },
          {
            "prompt": "方程 x²−5x+6=0 的兩個根是？",
            "options": [
              "1 和 6",
              "−1 和 −6",
              "2 和 3",
              "−2 和 −3"
            ],
            "answer": 2,
            "explanation": "因式分解為 (x−2)(x−3)=0。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.trigonometry",
        "title": "03 · 三角函數與弧度",
        "intro": "熟習常用三角函數值、週期與弧度制，為求導和積分作準備。",
        "kind": "base",
        "minutes": 15,
        "parents": [
          "cis221-calculus.graphs"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "在直角三角形，sin 是對邊除以斜邊，cos 是鄰邊除以斜邊。sin、cos 的週期為 2π，tan 的週期為 π。微積分中的三角求導公式使用弧度。"
          },
          {
            "type": "formula",
            "text": "sin²x+cos²x=1；tan x=sin x/cos x（cos x≠0）；180°=π 弧度。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 sin(π/6) 與 cos(π/3)。\n① π/6=30°，π/3=60°。\n② 由特殊直角三角形得 sin30°=1/2。\n③ cos60° 亦為 1/2。"
          },
          {
            "type": "tip",
            "text": "注意函數的輸入單位，並檢查 tan 的分母 cos 是否為零。"
          }
        ],
        "questions": [
          {
            "prompt": "90° 等於多少弧度？",
            "options": [
              "2π",
              "π/4",
              "π/2",
              "π"
            ],
            "answer": 2,
            "explanation": "90×π/180=π/2。"
          },
          {
            "prompt": "sin(π/6) 等於？",
            "options": [
              "1",
              "1/2",
              "√3/2",
              "0"
            ],
            "answer": 1,
            "explanation": "π/6 是 30°，正弦為 1/2。"
          },
          {
            "prompt": "cos(π) 等於？",
            "options": [
              "−1",
              "1",
              "0",
              "1/2"
            ],
            "answer": 0,
            "explanation": "單位圓上角度 π 的點是 (−1,0)，cos 是 x 座標。"
          },
          {
            "prompt": "tan(π/4) 等於？",
            "options": [
              "0",
              "−1",
              "√3",
              "1"
            ],
            "answer": 3,
            "explanation": "sin(π/4) 和 cos(π/4) 相等，商為 1。"
          },
          {
            "prompt": "sin x 的基本週期是？",
            "options": [
              "π/2",
              "4π",
              "2π",
              "π"
            ],
            "answer": 2,
            "explanation": "x 增加 2π 時，sin 完成一個基本循環。"
          },
          {
            "prompt": "y=sin(2x) 的基本週期是？",
            "options": [
              "π/2",
              "π",
              "2π",
              "4π"
            ],
            "answer": 1,
            "explanation": "週期為 2π/2=π。"
          },
          {
            "prompt": "sin²x+cos²x 的值是？",
            "options": [
              "1",
              "0",
              "2",
              "sin(2x)"
            ],
            "answer": 0,
            "explanation": "這是三角函數的基本恆等式。"
          },
          {
            "prompt": "哪個輸入令 tan x 沒有定義？",
            "options": [
              "0",
              "π/4",
              "π",
              "π/2"
            ],
            "answer": 3,
            "explanation": "cos(π/2)=0，所以 tan 的分母為零。"
          },
          {
            "prompt": "對所有實數 x，sin(−x) 等於？",
            "options": [
              "cos x",
              "−cos x",
              "−sin x",
              "sin x"
            ],
            "answer": 2,
            "explanation": "sin 是奇函數，輸入變號時輸出也變號。"
          },
          {
            "prompt": "y=3cos x−2 的最大值是？",
            "options": [
              "−2",
              "1",
              "3",
              "5"
            ],
            "answer": 1,
            "explanation": "cos x 最大為 1，因此最大輸出為 3×1−2=1。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.exp-log",
        "title": "04 · 指數與對數",
        "intro": "理解指數和對數的互逆關係、定義域與基本運算。",
        "kind": "base",
        "minutes": 15,
        "parents": [
          "cis221-calculus.functions"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "指數底數要求 b>0 且 b≠1。對數真數必須大於零。b>1 時 bˣ 隨 x 增大而增大；0<b<1 時則遞減。自然對數 ln 的底數是 e。"
          },
          {
            "type": "formula",
            "text": "log_b a=c ⇔ b^c=a；ln(eˣ)=x；log_b(uv)=log_b u+log_b v。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "計算 log₂32。\n① 設結果為 c，則 2^c=32。\n② 32=2⁵。\n③ 所以 log₂32=5。"
          },
          {
            "type": "tip",
            "text": "對數乘法法則要求真數為正。ln(u+v) 一般不能拆成 ln u+ln v。"
          }
        ],
        "questions": [
          {
            "prompt": "log₂32 等於？",
            "options": [
              "4",
              "5",
              "16",
              "6"
            ],
            "answer": 1,
            "explanation": "因為 2⁵=32，所以答案是 5。"
          },
          {
            "prompt": "2^(−3) 等於？",
            "options": [
              "1/8",
              "−8",
              "8",
              "−1/8"
            ],
            "answer": 0,
            "explanation": "負次方代表倒數，2^(−3)=1/2³=1/8。"
          },
          {
            "prompt": "e^(ln 5) 等於？",
            "options": [
              "ln 5",
              "e⁵",
              "1",
              "5"
            ],
            "answer": 3,
            "explanation": "eˣ 與 ln x 在正數範圍互為反函數。"
          },
          {
            "prompt": "ln 1 等於？",
            "options": [
              "e",
              "不存在",
              "0",
              "1"
            ],
            "answer": 2,
            "explanation": "因為 e⁰=1，所以 ln1=0。"
          },
          {
            "prompt": "ln(x−2) 的定義域是？",
            "options": [
              "所有實數",
              "x>2",
              "x≥2",
              "x≠2"
            ],
            "answer": 1,
            "explanation": "真數 x−2 必須大於零。"
          },
          {
            "prompt": "當 x 增加時，(1/3)^x 如何變化？",
            "options": [
              "嚴格遞減",
              "嚴格遞增",
              "恆定",
              "先增後減"
            ],
            "answer": 0,
            "explanation": "底數位於 0 與 1 之間，指數函數嚴格遞減。"
          },
          {
            "prompt": "u>0、v>0 時，ln(uv) 等於？",
            "options": [
              "ln u×ln v",
              "ln(u+v)",
              "ln u−ln v",
              "ln u+ln v"
            ],
            "answer": 3,
            "explanation": "對數把乘法轉成加法。"
          },
          {
            "prompt": "x>0 時，ln(x³) 等於？",
            "options": [
              "ln x+3",
              "x ln 3",
              "3ln x",
              "(ln x)³"
            ],
            "answer": 2,
            "explanation": "正真數的冪次可以移到對數前。"
          },
          {
            "prompt": "解方程 e^x=7，x 等於？",
            "options": [
              "1/7",
              "ln 7",
              "7e",
              "e⁷"
            ],
            "answer": 1,
            "explanation": "兩邊取自然對數，得到 x=ln7。"
          },
          {
            "prompt": "函數 y=2^x 的值域是？",
            "options": [
              "(0,∞)",
              "[0,∞)",
              "所有實數",
              "(1,∞)"
            ],
            "answer": 0,
            "explanation": "指數函數總為正，可任意接近 0，但不會等於 0。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.rates",
        "title": "05 · 平均與瞬間變化率",
        "intro": "區分改變量、平均速度和瞬間速度，建立導數的幾何意義。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.graphs"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "改變量 Δf 只比較輸出差；變化率還要除以輸入差。割線連接兩點，切線描述一點附近的方向。位置對時間的導數是速度，速度對時間的導數是加速度。"
          },
          {
            "type": "formula",
            "text": "平均變化率=[f(b)−f(a)]/(b−a)；f′(x)=lim(h→0)[f(x+h)−f(x)]/h。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "s(t)=t²，求 t=1 到 t=3 的平均速度與 t=3 的瞬間速度。\n① 平均速度=(9−1)/(3−1)=4。\n② s′(t)=2t。\n③ t=3 的瞬間速度為 6。"
          },
          {
            "type": "tip",
            "text": "變化率有單位，例如位置為公尺、時間為秒，速度就是 m/s。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x)=x²，從 x=1 到 x=4 的平均變化率是？",
            "options": [
              "5",
              "15",
              "3",
              "8"
            ],
            "answer": 0,
            "explanation": "(16−1)/(4−1)=15/3=5。"
          },
          {
            "prompt": "f(x)=3x+2，x 從 1 變成 4，Δf 是多少？",
            "options": [
              "3",
              "12",
              "11",
              "9"
            ],
            "answer": 3,
            "explanation": "Δx=3，Δf=3×3=9。"
          },
          {
            "prompt": "同一函數 f(x)=3x+2，在任何非零長度區間的平均變化率是？",
            "options": [
              "5",
              "隨區間改變",
              "3",
              "2"
            ],
            "answer": 2,
            "explanation": "直線斜率固定為 3。"
          },
          {
            "prompt": "導數 f′(a) 的幾何意義是？",
            "options": [
              "x 軸截距",
              "圖形在 x=a 的切線斜率",
              "點的 y 座標",
              "整段曲線的面積"
            ],
            "answer": 1,
            "explanation": "導數描述局部瞬間變化率，也就是切線斜率。"
          },
          {
            "prompt": "s(t)=t³，已知 v(t)=3t²，t=2 的瞬間速度是？",
            "options": [
              "12",
              "8",
              "6",
              "4"
            ],
            "answer": 0,
            "explanation": "s′(t)=3t²，代入 2 得 12。"
          },
          {
            "prompt": "位置單位為 m、時間為 s，位置對時間導數的單位是？",
            "options": [
              "m·s",
              "m/s²",
              "s/m",
              "m/s"
            ],
            "answer": 3,
            "explanation": "導數單位是輸出單位除以輸入單位。"
          },
          {
            "prompt": "f(x)=x² 的差商 [f(x+h)−f(x)]/h（h≠0）是？",
            "options": [
              "x+h",
              "h²",
              "2x+h",
              "2x"
            ],
            "answer": 2,
            "explanation": "展開 (x+h)²−x²=2xh+h²，再除以 h。"
          },
          {
            "prompt": "常數函數 f(x)=9 的瞬間變化率是？",
            "options": [
              "不存在",
              "0",
              "9",
              "1"
            ],
            "answer": 1,
            "explanation": "輸出固定不變，任何差商都為 0。"
          },
          {
            "prompt": "若 f′(a)<0，代表圖形在該點的切線？",
            "options": [
              "向右下傾斜",
              "向右上傾斜",
              "水平",
              "必定垂直"
            ],
            "answer": 0,
            "explanation": "負斜率表示 x 增加時切線上的 y 減少。"
          },
          {
            "prompt": "v(t)=5t−2 的加速度是？",
            "options": [
              "5t",
              "−2",
              "5t²/2",
              "5"
            ],
            "answer": 3,
            "explanation": "加速度是速度的導數，v′(t)=5。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.limits",
        "title": "06 · 極限與連續",
        "intro": "學會直接代入、先化簡再取極限，以及連續的三項條件。",
        "kind": "base",
        "minutes": 15,
        "parents": [
          "cis221-calculus.rates"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "極限關注靠近某點時的行為，與該點是否有定義是兩回事。多項式可直接代入。有理式遇到 0/0 時，先因式分解或有理化。左右極限不相等時，雙側極限不存在。"
          },
          {
            "type": "formula",
            "text": "在 x=a 連續 ⇔ f(a) 有定義、lim(x→a)f(x) 存在，且兩者相等。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 lim(x→2)(x²−4)/(x−2)。\n① 代入形式為 0/0。\n② x≠2 時，原式=(x−2)(x+2)/(x−2)=x+2。\n③ 極限為 4，原式在 x=2 仍沒有定義。"
          },
          {
            "type": "tip",
            "text": "「二者趨近零」不是答案。0/0 是需要進一步處理的不定形式。"
          }
        ],
        "questions": [
          {
            "prompt": "lim(x→3)(x²+2) 是？",
            "options": [
              "9",
              "5",
              "不存在",
              "11"
            ],
            "answer": 3,
            "explanation": "多項式連續，直接代入 3 得 11。"
          },
          {
            "prompt": "lim(x→2)(x²−4)/(x−2) 是？",
            "options": [
              "2",
              "不存在",
              "4",
              "0"
            ],
            "answer": 2,
            "explanation": "約去 x−2 後，對 x+2 取極限得 4。"
          },
          {
            "prompt": "lim(x→0)sin x 是？",
            "options": [
              "不存在",
              "0",
              "1",
              "−1"
            ],
            "answer": 1,
            "explanation": "sin 在 0 連續，sin0=0。"
          },
          {
            "prompt": "lim(x→0)|x|/x 的雙側極限是？",
            "options": [
              "不存在",
              "0",
              "1",
              "−1"
            ],
            "answer": 0,
            "explanation": "右極限為 1，左極限為 −1，兩者不相等。"
          },
          {
            "prompt": "若 f(x)=x+1（x≠2），且 f(2)=9，lim(x→2)f(x) 是？",
            "options": [
              "9",
              "2",
              "不存在",
              "3"
            ],
            "answer": 3,
            "explanation": "靠近 2 時使用 x+1，極限為 3；單點值 9 不影響極限。"
          },
          {
            "prompt": "f(x)=x+1（x≠2）、f(2)=9，在 x=2 是否連續？",
            "options": [
              "連續，因為極限存在",
              "不連續，因為函數沒有值",
              "不連續，因為極限不等於函數值",
              "連續，因為 f(2) 有定義"
            ],
            "answer": 2,
            "explanation": "極限為 3，函數值為 9，不滿足相等條件。"
          },
          {
            "prompt": "將 (x²−4)/(x−2) 在 x=2 補上哪個值，可使函數連續？",
            "options": [
              "任何值都可以",
              "4",
              "2",
              "0"
            ],
            "answer": 1,
            "explanation": "要補成與極限相同的值，即 4。"
          },
          {
            "prompt": "lim(x→0)(√(1+x)−1)/x 是？",
            "options": [
              "1/2",
              "1",
              "0",
              "2"
            ],
            "answer": 0,
            "explanation": "乘共軛後變成 1/(√(1+x)+1)，極限為 1/2。"
          },
          {
            "prompt": "雙側極限存在且有限時，左右極限必須？",
            "options": [
              "符號相反",
              "都等於零",
              "等於該點函數值才可存在",
              "存在且相等"
            ],
            "answer": 3,
            "explanation": "左右極限存在且相等，才有相同的雙側極限；函數在該點可未定義。"
          },
          {
            "prompt": "lim(x→−1)(2x³−x) 是？",
            "options": [
              "−3",
              "3",
              "−1",
              "1"
            ],
            "answer": 2,
            "explanation": "代入得到 2(−1)³−(−1)=−2+1=−1。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.power",
        "title": "07 · 基本求導與高階導數",
        "intro": "運用常數、冪次、加減與常數倍規則，並求二階及三階導數。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.limits"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "先把根式與倒數寫成冪次，再使用冪次法則。高階導數是重複求導，二階導數描述一階變化率如何改變。公式只在相應函數有定義且可微的範圍使用。"
          },
          {
            "type": "formula",
            "text": "d(xⁿ)/dx=nx^(n−1)；(af+bg)′=af′+bg′；常數的導數為 0。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 f(x)=2x³−5x²+4 的 f′ 和 f″。\n① f′(x)=6x²−10x。\n② 對 f′ 再求導，f″(x)=12x−10。\n③ f″(1)=2。"
          },
          {
            "type": "tip",
            "text": "求導會令冪次減一；常數項會消失。√x 的導數公式 1/(2√x) 適用於 x>0。"
          }
        ],
        "questions": [
          {
            "prompt": "d(x⁵)/dx 是？",
            "options": [
              "5x⁵",
              "4x⁵",
              "5x⁴",
              "x⁴"
            ],
            "answer": 2,
            "explanation": "次方 5 乘到前面，次方減 1。"
          },
          {
            "prompt": "d(4x³−2x+7)/dx 是？",
            "options": [
              "12x³−2",
              "12x²−2",
              "12x²+7",
              "4x²−2"
            ],
            "answer": 1,
            "explanation": "分別求導得到 12x²、−2 和 0。"
          },
          {
            "prompt": "x≠0 時，d(1/x²)/dx 是？",
            "options": [
              "−2/x³",
              "2/x³",
              "−1/x³",
              "1/(2x³)"
            ],
            "answer": 0,
            "explanation": "1/x²=x^(−2)，導數是 −2x^(−3)。"
          },
          {
            "prompt": "x>0 時，d(√x)/dx 是？",
            "options": [
              "2√x",
              "1/√x",
              "√x/2",
              "1/(2√x)"
            ],
            "answer": 3,
            "explanation": "√x=x^(1/2)，導數為 (1/2)x^(−1/2)。"
          },
          {
            "prompt": "f(x)=x⁴ 的二階導數是？",
            "options": [
              "24x",
              "12x³",
              "12x²",
              "4x³"
            ],
            "answer": 2,
            "explanation": "先得 f′=4x³，再求導得 f″=12x²。"
          },
          {
            "prompt": "f(x)=x³ 的三階導數是？",
            "options": [
              "0",
              "6",
              "3",
              "6x"
            ],
            "answer": 1,
            "explanation": "依序是 3x²、6x、6。"
          },
          {
            "prompt": "f(x)=3x²−4x，f′(2) 是？",
            "options": [
              "8",
              "4",
              "12",
              "2"
            ],
            "answer": 0,
            "explanation": "f′=6x−4，代入 2 得 8。"
          },
          {
            "prompt": "常數函數 f(x)=π 的導數是？",
            "options": [
              "1",
              "π",
              "x",
              "0"
            ],
            "answer": 3,
            "explanation": "π 是常數，對 x 求導為 0。"
          },
          {
            "prompt": "d(7x)/dx 是？",
            "options": [
              "7x",
              "0",
              "7",
              "x"
            ],
            "answer": 2,
            "explanation": "x 的導數為 1，常數倍 7 保留。"
          },
          {
            "prompt": "s(t)=2t³，t=1 的加速度是多少？",
            "options": [
              "0",
              "12",
              "6",
              "2"
            ],
            "answer": 1,
            "explanation": "加速度為 s″(t)=12t，代入 1 得 12。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.product-quotient",
        "title": "08 · 乘積與商法則",
        "intro": "處理兩個函數相乘、相除，並檢查分母限制。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.power"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "乘積求導需把兩個因子各求導一次並相加。商法則的分子有固定的相減順序，分母須平方。遇到能先展開或約簡的式子，也可以先化簡再求導。"
          },
          {
            "type": "formula",
            "text": "(uv)′=u′v+uv′；(u/v)′=(u′v−uv′)/v²，v≠0。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 y=(x²+1)/x 的導數（x≠0）。\n① u=x²+1，u′=2x；v=x，v′=1。\n② y′=[2x·x−(x²+1)]/x²。\n③ 化簡得 1−1/x²。"
          },
          {
            "type": "tip",
            "text": "一般來說 (uv)′ 不等於 u′v′，(u/v)′ 也不等於 u′/v′。"
          }
        ],
        "questions": [
          {
            "prompt": "(uv)′ 的正確公式是？",
            "options": [
              "uv′−u′v",
              "u′v+uv′",
              "u′v′",
              "u′+v′"
            ],
            "answer": 1,
            "explanation": "乘積法則為兩項相加。"
          },
          {
            "prompt": "d[x(x+2)]/dx 是？",
            "options": [
              "2x+2",
              "x+2",
              "2x",
              "2"
            ],
            "answer": 0,
            "explanation": "展開 x²+2x 後求導得 2x+2。"
          },
          {
            "prompt": "d[x²(x−1)]/dx 是？",
            "options": [
              "2x(x−1)",
              "3x²−1",
              "x²−2x",
              "3x²−2x"
            ],
            "answer": 3,
            "explanation": "展開為 x³−x²，導數為 3x²−2x。"
          },
          {
            "prompt": "x≠−1 時，d[x/(x+1)]/dx 是？",
            "options": [
              "1/(x+1)",
              "1",
              "1/(x+1)²",
              "−1/(x+1)²"
            ],
            "answer": 2,
            "explanation": "分子為 (x+1)−x=1，分母為 (x+1)²。"
          },
          {
            "prompt": "x≠1 時，d[(x+1)/(x−1)]/dx 是？",
            "options": [
              "0",
              "−2/(x−1)²",
              "2/(x−1)²",
              "1"
            ],
            "answer": 1,
            "explanation": "分子為 (x−1)−(x+1)=−2。"
          },
          {
            "prompt": "x≠0 時，d[(x²+1)/x]/dx 是？",
            "options": [
              "1−1/x²",
              "1+1/x²",
              "2x",
              "2−1/x²"
            ],
            "answer": 0,
            "explanation": "先寫成 x+1/x，導數為 1−1/x²。"
          },
          {
            "prompt": "f(x)=x²(x+1)，f′(1) 是？",
            "options": [
              "3",
              "4",
              "2",
              "5"
            ],
            "answer": 3,
            "explanation": "f′=3x²+2x，在 1 得 5。"
          },
          {
            "prompt": "若 u(2)=3、u′(2)=4、v(2)=5、v′(2)=−1，(uv)′(2) 是？",
            "options": [
              "−4",
              "15",
              "17",
              "23"
            ],
            "answer": 2,
            "explanation": "4×5+3×(−1)=17。"
          },
          {
            "prompt": "若 u(a)=2、u′(a)=3、v(a)=4、v′(a)=1，(u/v)′(a) 是？",
            "options": [
              "7/8",
              "5/8",
              "3",
              "1/2"
            ],
            "answer": 1,
            "explanation": "(3×4−2×1)/4²=10/16=5/8。"
          },
          {
            "prompt": "商法則計算時，分母 v 必須滿足？",
            "options": [
              "v≠0",
              "v>0",
              "v<0",
              "v′≠0"
            ],
            "answer": 0,
            "explanation": "原商必須有定義，因此 v 不能為零，但可以為負。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.elementary",
        "title": "09 · 三角、指數與對數求導",
        "intro": "熟習基本函數的導數，並把它們與乘積法則結合。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.product-quotient",
          "cis221-calculus.trigonometry",
          "cis221-calculus.exp-log"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "三角求導使用弧度。sec x=1/cos x，所以 tan 的導數也可寫成 1/cos²x。ln x 的實數定義域是 x>0。aˣ 的導數為 aˣ ln a，其中 a>0。"
          },
          {
            "type": "formula",
            "text": "(sin x)′=cos x；(cos x)′=−sin x；(tan x)′=sec²x；(eˣ)′=eˣ；(ln x)′=1/x。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 y=x eˣ 的導數。\n① 設 u=x、v=eˣ，則 u′=1、v′=eˣ。\n② 用乘積法則 y′=eˣ+x eˣ。\n③ 提取公因子，得到 eˣ(1+x)。"
          },
          {
            "type": "tip",
            "text": "cos 的導數有負號；對 ln x 求導後仍須遵守原函數的定義域。"
          }
        ],
        "questions": [
          {
            "prompt": "d(sin x)/dx 是？",
            "options": [
              "cos x",
              "−cos x",
              "sin x",
              "−sin x"
            ],
            "answer": 0,
            "explanation": "sin 的導數為 cos，角度以弧度表示。"
          },
          {
            "prompt": "d(cos x)/dx 是？",
            "options": [
              "sin x",
              "cos x",
              "−cos x",
              "−sin x"
            ],
            "answer": 3,
            "explanation": "cos 的導數是負的 sin。"
          },
          {
            "prompt": "d(eˣ)/dx 是？",
            "options": [
              "e^(x−1)",
              "1",
              "eˣ",
              "x eˣ"
            ],
            "answer": 2,
            "explanation": "自然指數函數求導後保持不變。"
          },
          {
            "prompt": "x>0 時，d(ln x)/dx 是？",
            "options": [
              "−1/x²",
              "1/x",
              "ln x",
              "x"
            ],
            "answer": 1,
            "explanation": "自然對數的導數為 1/x。"
          },
          {
            "prompt": "d(2ˣ)/dx 是？",
            "options": [
              "2ˣ ln 2",
              "x·2^(x−1)",
              "2ˣ",
              "ln 2"
            ],
            "answer": 0,
            "explanation": "套用 (aˣ)′=aˣ ln a。"
          },
          {
            "prompt": "cos x≠0 時，d(tan x)/dx 是？",
            "options": [
              "1/sin²x",
              "−1/cos²x",
              "cos x",
              "1/cos²x"
            ],
            "answer": 3,
            "explanation": "tan 的導數為 sec²x，而 sec x=1/cos x。"
          },
          {
            "prompt": "d(3sin x−2cos x)/dx 是？",
            "options": [
              "−3cos x+2sin x",
              "3sin x+2cos x",
              "3cos x+2sin x",
              "3cos x−2sin x"
            ],
            "answer": 2,
            "explanation": "分別求導，第二項 −2cos x 變成 +2sin x。"
          },
          {
            "prompt": "d(x eˣ)/dx 是？",
            "options": [
              "2x eˣ",
              "eˣ(1+x)",
              "eˣ",
              "x eˣ"
            ],
            "answer": 1,
            "explanation": "乘積法則得到 1·eˣ+x·eˣ。"
          },
          {
            "prompt": "x>0 時，d(x ln x)/dx 是？",
            "options": [
              "ln x+1",
              "1/x",
              "ln x",
              "x+1"
            ],
            "answer": 0,
            "explanation": "乘積法則得到 ln x+x(1/x)=ln x+1。"
          },
          {
            "prompt": "f(x)=sin x+eˣ，f′(0) 是？",
            "options": [
              "1",
              "0",
              "−1",
              "2"
            ],
            "answer": 3,
            "explanation": "f′=cos x+eˣ，在 0 為 1+1=2。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.chain",
        "title": "10 · 複合函數與鏈式法則",
        "intro": "辨認內外層函數，把複合函數的求導拆成清楚步驟。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.elementary",
          "cis221-calculus.product-quotient"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "先對外層求導，保留內層原樣，再乘內層導數。外層可以是冪次、三角、指數或對數函數。若同時包含乘積或商，需要結合對應法則。"
          },
          {
            "type": "formula",
            "text": "[f(g(x))]′=f′(g(x))·g′(x)。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 y=(2x²+1)³ 的導數。\n① 外層是 u³，內層 u=2x²+1。\n② 外層導數為 3u²，內層導數為 4x。\n③ y′=12x(2x²+1)²。"
          },
          {
            "type": "tip",
            "text": "檢查最後是否乘了內層導數。對數複合函數還要檢查真數為正。"
          }
        ],
        "questions": [
          {
            "prompt": "d[(3x+1)⁴]/dx 是？",
            "options": [
              "4(3x+1)³",
              "12(3x+1)⁴",
              "3(3x+1)³",
              "12(3x+1)³"
            ],
            "answer": 3,
            "explanation": "外層 4(3x+1)³ 再乘內層導數 3。"
          },
          {
            "prompt": "d[sin(2x)]/dx 是？",
            "options": [
              "−2cos(2x)",
              "2sin(2x)",
              "2cos(2x)",
              "cos(2x)"
            ],
            "answer": 2,
            "explanation": "sin 變 cos，再乘 2。"
          },
          {
            "prompt": "d[cos(x²)]/dx 是？",
            "options": [
              "2x sin(x²)",
              "−2x sin(x²)",
              "−sin(x²)",
              "2x cos(x²)"
            ],
            "answer": 1,
            "explanation": "外層導數 −sin(x²)，乘內層 2x。"
          },
          {
            "prompt": "d[e^(5x)]/dx 是？",
            "options": [
              "5e^(5x)",
              "e^(5x)",
              "5x e^(5x)",
              "e^(5x−1)"
            ],
            "answer": 0,
            "explanation": "外層 e^u 的導數仍為 e^u，再乘 5。"
          },
          {
            "prompt": "d[ln(x²+1)]/dx 是？",
            "options": [
              "1/(x²+1)",
              "2/(x²+1)",
              "ln(2x)",
              "2x/(x²+1)"
            ],
            "answer": 3,
            "explanation": "套用 g′/g，得到 2x/(x²+1)。"
          },
          {
            "prompt": "x>−1 時，d[√(x+1)]/dx 是？",
            "options": [
              "1/√(x+1)",
              "2√(x+1)",
              "1/(2√(x+1))",
              "√(x+1)/2"
            ],
            "answer": 2,
            "explanation": "外層平方根導數為 1/(2√u)，內層導數為 1。"
          },
          {
            "prompt": "d[(x²−1)²]/dx 是？",
            "options": [
              "2x(x²−1)",
              "4x(x²−1)",
              "2(x²−1)",
              "4x²(x²−1)"
            ],
            "answer": 1,
            "explanation": "2(x²−1) 乘 2x，得到 4x(x²−1)。"
          },
          {
            "prompt": "若 y=f(u)、u=g(x)，dy/dx 等於？",
            "options": [
              "(dy/du)(du/dx)",
              "(dy/du)+(du/dx)",
              "(dy/du)/(du/dx)",
              "du/dy"
            ],
            "answer": 0,
            "explanation": "鏈式法則把沿途變化率相乘。"
          },
          {
            "prompt": "f(x)=(x²+2)³，f′(1) 是？",
            "options": [
              "27",
              "18",
              "6",
              "54"
            ],
            "answer": 3,
            "explanation": "f′=6x(x²+2)²，代入 1 得 6×9=54。"
          },
          {
            "prompt": "d[x sin(x²)]/dx 是？",
            "options": [
              "sin(x²)+2x cos(x²)",
              "x cos(x²)",
              "sin(x²)+2x²cos(x²)",
              "2x cos(x²)"
            ],
            "answer": 2,
            "explanation": "乘積法則給 sin(x²)+x·[2x cos(x²)]。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.implicit",
        "title": "11 · 隱函數微分",
        "intro": "對混合 x、y 的方程求導，解出 dy/dx 並計算切線斜率。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.chain"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "把 y 視為 x 的函數。對 x 求導時，y² 要變成 2y y′，xy 要使用乘積法則。將含 y′ 的項移到一邊，提取公因子，再解出 y′。"
          },
          {
            "type": "formula",
            "text": "對 F(x,y)=0 且 F_y≠0，局部可微解滿足 y′=−F_x/F_y。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 x²+y²=13 在 (2,3) 的斜率。\n① 兩邊求導得 2x+2y y′=0。\n② y≠0 時，y′=−x/y。\n③ 代入 (2,3)，得到 −2/3。"
          },
          {
            "type": "tip",
            "text": "代入的點必須在曲線上。解出的分母為零時，需另外判斷，不能直接相除。"
          }
        ],
        "questions": [
          {
            "prompt": "把 y 視為 x 的函數，d(y³)/dx 是？",
            "options": [
              "y′³",
              "3xy²",
              "3y²y′",
              "3y²"
            ],
            "answer": 2,
            "explanation": "對 y³ 用鏈式法則，需再乘 y′。"
          },
          {
            "prompt": "d(xy)/dx 是？",
            "options": [
              "1",
              "y+xy′",
              "xy′",
              "y′"
            ],
            "answer": 1,
            "explanation": "乘積法則給 1·y+x·y′。"
          },
          {
            "prompt": "由 x²+y²=25，y≠0 時 y′ 是？",
            "options": [
              "−x/y",
              "x/y",
              "−y/x",
              "2x+2y"
            ],
            "answer": 0,
            "explanation": "兩邊求導，2x+2y y′=0，再解出 y′。"
          },
          {
            "prompt": "曲線 x²+y²=25 在 (3,4) 的切線斜率是？",
            "options": [
              "3/4",
              "−4/3",
              "4/3",
              "−3/4"
            ],
            "answer": 3,
            "explanation": "使用 y′=−x/y，代入得到 −3/4。"
          },
          {
            "prompt": "由 xy=6 且 x≠0，y′ 是？",
            "options": [
              "−x/y",
              "6",
              "−y/x",
              "y/x"
            ],
            "answer": 2,
            "explanation": "y+xy′=0，所以 y′=−y/x。"
          },
          {
            "prompt": "由 y²=x+1 且 y≠0，y′ 是？",
            "options": [
              "−1/(2y)",
              "1/(2y)",
              "2y",
              "1/y"
            ],
            "answer": 1,
            "explanation": "兩邊求導為 2y y′=1。"
          },
          {
            "prompt": "由 x+y=5，y′ 是？",
            "options": [
              "−1",
              "1",
              "0",
              "5"
            ],
            "answer": 0,
            "explanation": "1+y′=0，所以 y′=−1。"
          },
          {
            "prompt": "由 x²+xy+y²=7，且 x+2y≠0，y′ 是？",
            "options": [
              "−2x/(2y)",
              "(2x+y)/(x+2y)",
              "−(x+2y)/(2x+y)",
              "−(2x+y)/(x+2y)"
            ],
            "answer": 3,
            "explanation": "求導得 2x+y+xy′+2yy′=0，收集 y′ 後求解。"
          },
          {
            "prompt": "由 sin y=x 且 cos y≠0，y′ 是？",
            "options": [
              "−sin y",
              "1/sin y",
              "1/cos y",
              "cos y"
            ],
            "answer": 2,
            "explanation": "cos y·y′=1，所以 y′=1/cos y。"
          },
          {
            "prompt": "圓 x²+y²=9 在 (3,0) 的切線是？",
            "options": [
              "x=0",
              "x=3",
              "y=0",
              "y=3x"
            ],
            "answer": 1,
            "explanation": "圓在最右端的切線為垂直線，不能把 y=0 代入 −x/y 當有限斜率。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.extrema",
        "title": "12 · 臨界點與極值判別",
        "intro": "辨認臨界點，使用導數符號和二階導數判別局部及全域極值。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.power"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "定義域內的一點若導數為零或不存在，可能是臨界點。二階導數等於零時，二階判別法沒有結論。對閉區間上的連續函數，應比較所有內部臨界點和兩端點的函數值。"
          },
          {
            "type": "formula",
            "text": "f′：正→負為局部極大；負→正為局部極小。若 f′(a)=0，f″(a)>0 為極小，f″(a)<0 為極大。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 f(x)=x² 在 [−1,3] 的全域極值。\n① f′=2x，內部臨界點 x=0。\n② f(−1)=1，f(0)=0，f(3)=9。\n③ 全域最小值 0 在 x=0；最大值 9 在 x=3。"
          },
          {
            "type": "tip",
            "text": "f′(a)=0 並不保證 a 是極值點；全域最大值可以由多個不同位置取得。"
          }
        ],
        "questions": [
          {
            "prompt": "f 在 a 連續，f′ 在 a 左邊為正、右邊為負，a 是？",
            "options": [
              "必定沒有極值",
              "局部極大點",
              "局部極小點",
              "必定全域最小點"
            ],
            "answer": 1,
            "explanation": "函數先上升後下降，在 a 形成局部極大。"
          },
          {
            "prompt": "f 在 a 連續，f′ 在 a 左邊為負、右邊為正，a 是？",
            "options": [
              "局部極小點",
              "局部極大點",
              "必定拐點",
              "必定端點"
            ],
            "answer": 0,
            "explanation": "函數先下降後上升，在 a 形成局部極小。"
          },
          {
            "prompt": "已知 f′(a)=0、f″(a)>0，二階判別法的結論是？",
            "options": [
              "a 是局部極大點",
              "a 必定是全域最大點",
              "沒有任何結論",
              "a 是局部極小點"
            ],
            "answer": 3,
            "explanation": "正二階導數表示附近向上凹，駐點為局部極小。"
          },
          {
            "prompt": "已知 f′(a)=0、f″(a)=0，能否單憑此判斷極值？",
            "options": [
              "必定是極小",
              "必定是極大",
              "不能，需要其他判別",
              "必定沒有極值"
            ],
            "answer": 2,
            "explanation": "二階導數為零時判別法失效，可再檢查一階導數符號。"
          },
          {
            "prompt": "f(x)=x³ 在 x=0 的情況是？",
            "options": [
              "不是臨界點",
              "是臨界點，但不是局部極值點",
              "局部極大點",
              "局部極小點"
            ],
            "answer": 1,
            "explanation": "f′=3x²，在 0 為零，但兩側皆非負，函數持續遞增。"
          },
          {
            "prompt": "f(x)=x⁴ 在 x=0 的情況是？",
            "options": [
              "局部極小點",
              "局部極大點",
              "沒有極值",
              "不是臨界點"
            ],
            "answer": 0,
            "explanation": "x⁴≥0，且在 0 取得最小值，即使 f″(0)=0 仍可有極小。"
          },
          {
            "prompt": "f(x)=x² 在 [−1,3] 的全域最大值是？",
            "options": [
              "3",
              "1",
              "0",
              "9"
            ],
            "answer": 3,
            "explanation": "比較兩端與臨界點，最大值為 f(3)=9。"
          },
          {
            "prompt": "f(x)=x² 在 [−2,2] 的全域最大值在哪裡取得？",
            "options": [
              "只有 x=−2",
              "x=0",
              "x=−2 及 x=2",
              "只有 x=2"
            ],
            "answer": 2,
            "explanation": "兩端都取得相同最大值 4，最大值的取得位置可有多個。"
          },
          {
            "prompt": "f(x)=|x| 在 x=0 是否為臨界點？",
            "options": [
              "是，因為 f′(0)=1",
              "是，函數有定義但導數不存在",
              "不是，只有導數為零才算",
              "不是，因為函數連續"
            ],
            "answer": 1,
            "explanation": "導數不存在且點位於定義域內，也可形成臨界點。"
          },
          {
            "prompt": "f(x)=x³−3x 的臨界點是？",
            "options": [
              "x=−1、1",
              "x=0",
              "x=−3、3",
              "x=−√3、√3"
            ],
            "answer": 0,
            "explanation": "f′=3x²−3=0，解得 x=±1。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.optimization",
        "title": "13 · 最佳化建模與應用",
        "intro": "把文字題轉成目標函數與限制條件，再找最佳尺寸、成本或高度。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.extrema",
          "cis221-calculus.graphs"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "最佳化要求最小或最大目標值。利用限制消去多餘變數，並寫出有實際意義的定義域。解 f′=0 得到候選值後，還要判別並檢查端點。"
          },
          {
            "type": "formula",
            "text": "定義變數 → 寫出目標與限制 → 化成單變量 → 找候選點 → 比較可行值。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "長方形周長 24，求最大面積。\n① 兩邊為 x、y，2x+2y=24，所以 y=12−x。\n② A(x)=x(12−x)，0<x<12。\n③ A′=12−2x=0 得 x=6，y=6。\n④ A″=−2<0，最大面積為 36。"
          },
          {
            "type": "tip",
            "text": "求的是最佳變數值還是最佳目標值，要讀清題目。尺寸必須符合正數和材料限制。"
          }
        ],
        "questions": [
          {
            "prompt": "長方形周長 24，若一邊為 x，另一邊是？",
            "options": [
              "12−x",
              "24−x",
              "24−2x",
              "6−x"
            ],
            "answer": 0,
            "explanation": "由 2x+2y=24 得 y=12−x。"
          },
          {
            "prompt": "周長 24 的長方形，最大面積為？",
            "options": [
              "24",
              "48",
              "144",
              "36"
            ],
            "answer": 3,
            "explanation": "正方形邊長 6，面積為 6²=36。"
          },
          {
            "prompt": "用 20 m 圍欄圍靠河的三邊，兩條垂直河岸邊長為 x，面積是？",
            "options": [
              "2x(20−2x)",
              "20x",
              "x(20−2x)",
              "x(20−x)"
            ],
            "answer": 2,
            "explanation": "三邊限制是 2x+y=20，因此 A=x(20−2x)。"
          },
          {
            "prompt": "20 m 圍欄圍靠河的三邊，面積 A=x(20−2x)，最大面積時 x 是多少？",
            "options": [
              "2.5 m",
              "5 m",
              "10 m",
              "20 m"
            ],
            "answer": 1,
            "explanation": "A′=20−4x=0，所以 x=5，另一邊為 10。"
          },
          {
            "prompt": "從 10×16 的紙板四角各剪邊長 x 的正方形，無蓋盒體積是？",
            "options": [
              "x(10−2x)(16−2x)",
              "x(10−x)(16−x)",
              "2x(10−2x)(16−2x)",
              "160x"
            ],
            "answer": 0,
            "explanation": "折起後高度為 x，底面兩邊各縮短 2x。"
          },
          {
            "prompt": "10×16 紙板四角各剪邊長 x 的正方形，要形成正體積盒子，x 的可行範圍是？",
            "options": [
              "0<x<8",
              "0<x<10",
              "x>0 即可",
              "0<x<5"
            ],
            "answer": 3,
            "explanation": "要求高度和兩邊皆正，最緊限制為 10−2x>0。"
          },
          {
            "prompt": "h(t)=2+12t−3t²，t≥0，最高點在何時？",
            "options": [
              "t=3",
              "t=1",
              "t=2",
              "t=4"
            ],
            "answer": 2,
            "explanation": "h′=12−6t=0 得 2；h″=−6<0。"
          },
          {
            "prompt": "h(t)=2+12t−3t²（t≥0），最高高度是？",
            "options": [
              "10",
              "14",
              "12",
              "16"
            ],
            "answer": 1,
            "explanation": "h(2)=2+24−12=14。"
          },
          {
            "prompt": "C(x)=x+9/x，x>0，成本最小時 x 是？",
            "options": [
              "3",
              "9",
              "1",
              "−3"
            ],
            "answer": 0,
            "explanation": "C′=1−9/x²=0 得 x=3；導數由負轉正。"
          },
          {
            "prompt": "為何求閉區間的全域最佳值時還要檢查端點？",
            "options": [
              "所有端點導數都為零",
              "端點一定比內部好",
              "因為函數只在端點連續",
              "最佳值可能出現在端點"
            ],
            "answer": 3,
            "explanation": "導數為零只找出部分候選位置，端點也可能達到全域極值。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.surfaces",
        "title": "14 · 多變量函數與曲面",
        "intro": "認識三維座標、二變量函數、截面和等高線。",
        "kind": "base",
        "minutes": 15,
        "parents": [
          "cis221-calculus.functions",
          "cis221-calculus.graphs"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "二變量函數的每個合法輸入對 (x,y) 對應唯一高度 z。固定 x 或 y 可得到截面曲線，固定 z=c 可得到等高線。球面本身通常不能整體寫成單值 z=f(x,y)，上半球則可以。"
          },
          {
            "type": "formula",
            "text": "z=f(x,y)；等高線 f(x,y)=c；距離=√[(Δx)²+(Δy)²+(Δz)²]。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "考慮 z=x²+y²。\n① 在 (1,2) 的高度為 1+4=5。\n② 固定 y=0，截面為 z=x²。\n③ 固定 z=4，等高線為 x²+y²=4，是半徑 2 的圓。"
          },
          {
            "type": "tip",
            "text": "輸入對 (x,y) 是平面位置，圖上的對應點要寫成 (x,y,f(x,y))。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x,y)=x²+2y，f(2,3) 是？",
            "options": [
              "7",
              "14",
              "12",
              "10"
            ],
            "answer": 3,
            "explanation": "代入 2²+2×3=4+6=10。"
          },
          {
            "prompt": "z=x²+y² 的等高線 z=9 是？",
            "options": [
              "直線 x+y=9",
              "拋物線 y=x²",
              "半徑 3 的圓",
              "半徑 9 的圓"
            ],
            "answer": 2,
            "explanation": "x²+y²=9 是以原點為圓心、半徑 3 的圓。"
          },
          {
            "prompt": "z=x²+y² 固定 y=2，截面方程是？",
            "options": [
              "z=2x",
              "z=x²+4",
              "z=x²+2",
              "z=4x²"
            ],
            "answer": 1,
            "explanation": "將 y=2 代入 y² 得 4。"
          },
          {
            "prompt": "f(x,y)=√(4−x²−y²) 的定義域是？",
            "options": [
              "x²+y²≤4",
              "x²+y²≥4",
              "x²+y²<4",
              "所有實數對"
            ],
            "answer": 0,
            "explanation": "平方根內須非負，得到閉圓盤 x²+y²≤4。"
          },
          {
            "prompt": "f(x,y)=1/(x²+y²) 排除哪個輸入？",
            "options": [
              "所有 x=0 的點",
              "所有 y=0 的點",
              "整個單位圓",
              "只有 (0,0)"
            ],
            "answer": 3,
            "explanation": "x²+y²=0 只在 x=y=0 發生。"
          },
          {
            "prompt": "點 (0,0,0) 與 (1,2,2) 的距離是？",
            "options": [
              "9",
              "√5",
              "3",
              "5"
            ],
            "answer": 2,
            "explanation": "距離為 √(1+4+4)=3。"
          },
          {
            "prompt": "(0,2,4) 和 (2,4,6) 的中點是？",
            "options": [
              "(0,3,6)",
              "(1,3,5)",
              "(2,6,10)",
              "(1,2,3)"
            ],
            "answer": 1,
            "explanation": "分別平均三個座標，得到 (1,3,5)。"
          },
          {
            "prompt": "完整球面 x²+y²+z²=1 能否整體表示成單值 z=f(x,y)？",
            "options": [
              "不能，部分 (x,y) 對應兩個 z",
              "可以，因為它連續",
              "可以，因為半徑固定",
              "不能，因為沒有實數點"
            ],
            "answer": 0,
            "explanation": "例如 (x,y)=(0,0) 時，z 可以是 1 或 −1。"
          },
          {
            "prompt": "上半球 x²+y²+z²=1、z≥0 的顯式形式是？",
            "options": [
              "z=1−x²−y²",
              "z=−√(1−x²−y²)",
              "z=√(1+x²+y²)",
              "z=√(1−x²−y²)"
            ],
            "answer": 3,
            "explanation": "由 z²=1−x²−y²，選擇非負平方根。"
          },
          {
            "prompt": "平面 z=2x+3y 的等高線 z=6 是？",
            "options": [
              "2x+3y=0",
              "z=2x+6",
              "2x+3y=6",
              "x²+y²=6"
            ],
            "answer": 2,
            "explanation": "把高度固定成 6，得到 2x+3y=6。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.partials",
        "title": "15 · 一階偏導數",
        "intro": "對一個變量求導時固定其餘變量，計算指定位置的局部變化率。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.surfaces",
          "cis221-calculus.chain"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "偏導數沿著固定其他座標的截面計算斜率。對 x 求導時，y、z 等視為常數，但含 x 的乘積與複合函數仍要使用相應求導法則。"
          },
          {
            "type": "formula",
            "text": "f_x=∂f/∂x（固定 y）；f_y=∂f/∂y（固定 x）。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "f(x,y)=x²y+sin x。\n① 固定 y，f_x=2xy+cos x。\n② 固定 x，f_y=x²。\n③ 在 (0,3)，f_x=1，f_y=0。"
          },
          {
            "type": "tip",
            "text": "先看清楚分母中的變量。例如 ∂f/∂y 要對 y 求導，不能把 x 也一起改變。"
          }
        ],
        "questions": [
          {
            "prompt": "f=x²+3y²，f_x 是？",
            "options": [
              "6y",
              "0",
              "2x",
              "2x+6y"
            ],
            "answer": 2,
            "explanation": "對 x 求導，3y² 當常數，所以 f_x=2x。"
          },
          {
            "prompt": "f=x²+3y²，f_y 是？",
            "options": [
              "2x+6y",
              "6y",
              "2x",
              "3y"
            ],
            "answer": 1,
            "explanation": "x² 當常數，3y² 對 y 求導得 6y。"
          },
          {
            "prompt": "f=x²y，f_x 是？",
            "options": [
              "2xy",
              "x²",
              "2x",
              "x²y"
            ],
            "answer": 0,
            "explanation": "把 y 視為常數倍，得到 2xy。"
          },
          {
            "prompt": "f=x²y，f_y 是？",
            "options": [
              "2xy",
              "2y",
              "0",
              "x²"
            ],
            "answer": 3,
            "explanation": "x² 是常數倍，y 對自身求導是 1。"
          },
          {
            "prompt": "f=e^(xy)，f_x 是？",
            "options": [
              "e^(xy)",
              "xy e^(xy)",
              "y e^(xy)",
              "x e^(xy)"
            ],
            "answer": 2,
            "explanation": "外層求導不變，再乘 xy 對 x 的偏導數 y。"
          },
          {
            "prompt": "f=sin x+cos y，f_y 是？",
            "options": [
              "cos y",
              "−sin y",
              "cos x−sin y",
              "sin y"
            ],
            "answer": 1,
            "explanation": "sin x 對 y 的偏導數為 0，cos y 導數為 −sin y。"
          },
          {
            "prompt": "f=x²+y²，在 (1,3) 的 f_x 是？",
            "options": [
              "2",
              "6",
              "10",
              "1"
            ],
            "answer": 0,
            "explanation": "f_x=2x，代入 x=1 得 2。"
          },
          {
            "prompt": "f=3x+4y，f_y 是？",
            "options": [
              "3",
              "7",
              "4y",
              "4"
            ],
            "answer": 3,
            "explanation": "只有 4y 對 y 求導產生 4。"
          },
          {
            "prompt": "f(x,y,z)=xz+y²，f_z 是？",
            "options": [
              "2y",
              "xz",
              "x",
              "z"
            ],
            "answer": 2,
            "explanation": "對 z 求導時，x 和 y 固定。"
          },
          {
            "prompt": "偏導數 f_x(a,b) 描述哪種變化？",
            "options": [
              "只改變 z 而固定 x、y",
              "固定 y=b 時，沿 x 方向的瞬間變化率",
              "x 與 y 都以相同速度改變",
              "整個曲面的面積"
            ],
            "answer": 1,
            "explanation": "偏導數定義固定其他自變量，只讓指定變量改變。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.higher-implicit",
        "title": "16 · 高階與隱式偏導數",
        "intro": "計算二階偏導、混合偏導，以及隱式曲面上的局部斜率。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.partials",
          "cis221-calculus.implicit"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "高階偏導是對一階偏導再求導。若混合二階偏導在鄰域內連續，交換求導次序得到相同結果。隱式求 z_x 時，固定 y，把 z 視為 x 的函數。"
          },
          {
            "type": "formula",
            "text": "f_xy=(f_x)_y；若 F(x,y,z)=0 且 F_z≠0，z_x=−F_x/F_z、z_y=−F_y/F_z。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "球面 x²+y²+z²=9。\n① 對 x 求導得 2x+2z z_x=0。\n② z≠0 時，z_x=−x/z。\n③ 在 (1,2,2)，z_x=−1/2，且該點滿足球面方程。"
          },
          {
            "type": "tip",
            "text": "混合偏導相等需要適當連續性條件。解隱式偏導時要檢查 F_z 是否為零。"
          }
        ],
        "questions": [
          {
            "prompt": "f=x³y，f_xx 是？",
            "options": [
              "3x²y",
              "6xy",
              "3x²",
              "6x"
            ],
            "answer": 1,
            "explanation": "先得 f_x=3x²y，再對 x 求導得 6xy。"
          },
          {
            "prompt": "f=x²y³，f_xy=(f_x)_y 是？",
            "options": [
              "6xy²",
              "2xy³",
              "3x²y²",
              "6x²y"
            ],
            "answer": 0,
            "explanation": "f_x=2xy³，再對 y 求導得 6xy²。"
          },
          {
            "prompt": "f=x²+y²，f_xy 是？",
            "options": [
              "2",
              "4",
              "2x+2y",
              "0"
            ],
            "answer": 3,
            "explanation": "f_x=2x，對 y 求導為 0。"
          },
          {
            "prompt": "哪個條件足以保證 f_xy=f_yx？",
            "options": [
              "f 在該點等於零",
              "f_x 在該點等於 f_y",
              "混合二階偏導在該點鄰域連續",
              "f 只要有定義"
            ],
            "answer": 2,
            "explanation": "混合偏導的連續性是交換次序的常用充分條件。"
          },
          {
            "prompt": "x²+y²+z²=9、z≠0，固定 y 求 z_x 是？",
            "options": [
              "x/z",
              "−x/z",
              "−y/z",
              "−z/x"
            ],
            "answer": 1,
            "explanation": "2x+2z z_x=0，解得 −x/z。"
          },
          {
            "prompt": "球面 x²+y²+z²=9、z≠0，固定 x 求 z_y 是？",
            "options": [
              "−y/z",
              "−x/z",
              "y/z",
              "−z/y"
            ],
            "answer": 0,
            "explanation": "對 y 求導得到 2y+2z z_y=0。"
          },
          {
            "prompt": "球面 x²+y²+z²=9 在 (1,2,2) 的 z_x 是？",
            "options": [
              "−1",
              "1/2",
              "−2",
              "−1/2"
            ],
            "answer": 3,
            "explanation": "z_x=−x/z=−1/2。"
          },
          {
            "prompt": "由 x+y+z=6，把 z 視為 x、y 的函數，z_x 是？",
            "options": [
              "0",
              "6",
              "−1",
              "1"
            ],
            "answer": 2,
            "explanation": "固定 y 後求導，1+z_x=0。"
          },
          {
            "prompt": "f=x²y²，f_yy 是？",
            "options": [
              "2x²y",
              "2x²",
              "2y²",
              "4xy"
            ],
            "answer": 1,
            "explanation": "先對 y 得 2x²y，再對 y 得 2x²。"
          },
          {
            "prompt": "若 F_z=0，能否直接使用 z_x=−F_x/F_z？",
            "options": [
              "不能，需另行分析局部關係",
              "可以，答案必定為零",
              "可以，直接約掉 F_z",
              "可以，所有曲面都有有限斜率"
            ],
            "answer": 0,
            "explanation": "分母為零時該公式不能直接使用，局部也未必可把 z 寫成可微函數。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.multi-chain",
        "title": "17 · 多變量鏈式法則",
        "intro": "沿每條變量依賴路徑相乘，再把不同路徑的貢獻相加。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.partials",
          "cis221-calculus.chain"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "當多個中間變量一起改變，總變化率要計入所有路徑。若中間變量依賴 u、v，求對 u 的偏導時固定 v。可先代入化簡，作為鏈式法則的交叉檢查。"
          },
          {
            "type": "formula",
            "text": "z=f(x,y)，x=x(t)、y=y(t)：dz/dt=f_x x′+f_y y′。\nz_u=f_x x_u+f_y y_u。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "z=x²+y²，x=t、y=2t。\n① f_x=2x、f_y=2y，x′=1、y′=2。\n② dz/dt=2x+4y。\n③ 代回得 10t；直接寫成 z=5t² 也得到同一結果。"
          },
          {
            "type": "tip",
            "text": "不要只乘一條路徑。求導結束後，把仍含中間變量的式子代回題目需要的變量。"
          }
        ],
        "questions": [
          {
            "prompt": "z=f(x,y)，x=x(t)、y=y(t)，dz/dt 的公式是？",
            "options": [
              "f_x x′+f_y y′",
              "f_x+f_y",
              "f_x x′−f_y y′",
              "f_x f_y"
            ],
            "answer": 0,
            "explanation": "每條路徑相乘，再把 x、y 兩條路徑相加。"
          },
          {
            "prompt": "z=x²+y²，x=t、y=2t，dz/dt 是？",
            "options": [
              "6t",
              "5t",
              "10",
              "10t"
            ],
            "answer": 3,
            "explanation": "代入得 z=5t²，所以導數為 10t。"
          },
          {
            "prompt": "z=xy，x=t²、y=t，t=2 時 dz/dt 是？",
            "options": [
              "6",
              "4",
              "12",
              "8"
            ],
            "answer": 2,
            "explanation": "z=t³，導數為 3t²，在 2 得 12。"
          },
          {
            "prompt": "z=x+y，x=u+v、y=u−v，z_u 是？",
            "options": [
              "−2",
              "2",
              "0",
              "1"
            ],
            "answer": 1,
            "explanation": "z=(u+v)+(u−v)=2u，對 u 求偏導為 2。"
          },
          {
            "prompt": "z=x+y，x=u+v、y=u−v，z_v 是？",
            "options": [
              "0",
              "2",
              "1",
              "−1"
            ],
            "answer": 0,
            "explanation": "化簡後 z=2u，與 v 無關。"
          },
          {
            "prompt": "z=x²+y²，x=u+v、y=u−v，z_u 是？",
            "options": [
              "4v",
              "2u",
              "2u+2v",
              "4u"
            ],
            "answer": 3,
            "explanation": "代入 z=2u²+2v²，對 u 求導得 4u。"
          },
          {
            "prompt": "z=e^(x+y)，x=t、y=−t，dz/dt 是？",
            "options": [
              "e^t",
              "2e^t",
              "0",
              "1"
            ],
            "answer": 2,
            "explanation": "x+y=0，所以 z=e⁰=1 為常數。"
          },
          {
            "prompt": "某點 f_x=2、f_y=−3、x′=4、y′=1，dz/dt 是？",
            "options": [
              "−24",
              "5",
              "11",
              "−1"
            ],
            "answer": 1,
            "explanation": "2×4+(−3)×1=5。"
          },
          {
            "prompt": "w=x+y+z，x=t、y=t²、z=t³，t=1 時 dw/dt 是？",
            "options": [
              "6",
              "3",
              "5",
              "1"
            ],
            "answer": 0,
            "explanation": "dw/dt=1+2t+3t²，在 1 得 6。"
          },
          {
            "prompt": "z=x²+y，x=u²、y=3u，z_u 是？",
            "options": [
              "2u²+3",
              "4u+3",
              "u⁴+3u",
              "4u³+3"
            ],
            "answer": 3,
            "explanation": "z=u⁴+3u，求導得 4u³+3。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.antiderivatives",
        "title": "18 · 不定積分與冪次法則",
        "intro": "把積分理解為求導的逆運算，學會寫出一整族原函數。",
        "kind": "integral",
        "minutes": 15,
        "parents": [
          "cis221-calculus.power"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "若 F′(x)=f(x)，F 就是 f 的一個原函數。不定積分表示所有相差常數的原函數。可以逐項積分，也可以把常數倍提出。求完後再微分，應回到原來的被積函數。"
          },
          {
            "type": "formula",
            "text": "∫xⁿ dx=x^(n+1)/(n+1)+C（n≠−1，在函數有定義的區間內）；∫k dx=kx+C。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 ∫(6x²−4x+3) dx。\n① 逐項把次方加 1，再除以新次方。\n② 得 2x³−2x²+3x+C。\n③ 求導得到 6x²−4x+3，驗算完成。"
          },
          {
            "type": "tip",
            "text": "積分與求導的冪次規則方向相反。n=−1 要另用對數公式，不能除以零。"
          }
        ],
        "questions": [
          {
            "prompt": "∫x³ dx 是？",
            "options": [
              "3x²+C",
              "x⁴+C",
              "x³/3+C",
              "x⁴/4+C"
            ],
            "answer": 3,
            "explanation": "次方由 3 加到 4，再除以 4。"
          },
          {
            "prompt": "∫5 dx 是？",
            "options": [
              "C",
              "x⁵/5+C",
              "5x+C",
              "5+C"
            ],
            "answer": 2,
            "explanation": "常數 5 的原函數是 5x；求導可驗算。"
          },
          {
            "prompt": "∫(2x+3) dx 是？",
            "options": [
              "2+C",
              "x²+3x+C",
              "2x²+3x+C",
              "x²+3+C"
            ],
            "answer": 1,
            "explanation": "分別積分 2x 與 3，再加一個任意常數。"
          },
          {
            "prompt": "x>0 時，∫√x dx 是？",
            "options": [
              "(2/3)x^(3/2)+C",
              "(1/2)x^(−1/2)+C",
              "2√x+C",
              "x^(3/2)+C"
            ],
            "answer": 0,
            "explanation": "把 √x 寫成 x^(1/2)，新次方為 3/2，係數為 2/3。"
          },
          {
            "prompt": "x>0 時，∫x^(−2) dx 是？",
            "options": [
              "1/x+C",
              "ln x+C",
              "−2x^(−3)+C",
              "−1/x+C"
            ],
            "answer": 3,
            "explanation": "新次方為 −1，除以 −1 得 −x^(−1)。"
          },
          {
            "prompt": "若 F′(x)=f(x)，哪項也必定是 f 的原函數？",
            "options": [
              "F(x)+x",
              "F′(x)",
              "F(x)+7",
              "7F(x)"
            ],
            "answer": 2,
            "explanation": "常數項求導為零，因此加常數不改變導數。"
          },
          {
            "prompt": "已知 F′(x)=2x、F(1)=4，F(x) 是？",
            "options": [
              "x²−3",
              "x²+3",
              "x²+4",
              "2x²+2"
            ],
            "answer": 1,
            "explanation": "先積分得 x²+C，再由 1+C=4 求得 C=3。"
          },
          {
            "prompt": "∫(3x²−2x) dx 是？",
            "options": [
              "x³−x²+C",
              "6x−2+C",
              "3x³−2x²+C",
              "x³+x²+C"
            ],
            "answer": 0,
            "explanation": "3x² 的積分是 x³，−2x 的積分是 −x²。"
          },
          {
            "prompt": "冪次積分公式中，哪個 n 必須另外處理？",
            "options": [
              "0",
              "1",
              "2",
              "−1"
            ],
            "answer": 3,
            "explanation": "n=−1 時 n+1=0，公式的分母為零。"
          },
          {
            "prompt": "如何驗算候選原函數 F(x) 是否正確？",
            "options": [
              "檢查 F(0) 是否為零",
              "把被積函數再求導一次",
              "檢查 F′(x) 是否等於被積函數",
              "檢查 F(x) 是否恆為正"
            ],
            "answer": 2,
            "explanation": "原函數的定義就是求導後回到被積函數。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.elementary-integrals",
        "title": "19 · 指數、對數與三角積分",
        "intro": "辨認常見導數的反向形式，留意正負號及對數絕對值。",
        "kind": "integral",
        "minutes": 15,
        "parents": [
          "cis221-calculus.antiderivatives",
          "cis221-calculus.elementary"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "三角積分沿用弧度制。因為 cos 的導數是負的 sin，所以 sin 的積分帶負號。1/x 的原函數用 ln|x|，可在不跨越零的正或負區間使用。"
          },
          {
            "type": "formula",
            "text": "∫eˣ dx=eˣ+C；∫(1/x) dx=ln|x|+C（x≠0）。\n∫cos x dx=sin x+C；∫sin x dx=−cos x+C；∫sec²x dx=tan x+C。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 ∫(2eˣ+3cos x−1/x) dx。\n① 三項分別積分為 2eˣ、3sin x、−ln|x|。\n② 合併並加 C。\n③ 答案 2eˣ+3sin x−ln|x|+C，適用於不跨越 x=0 的區間。"
          },
          {
            "type": "tip",
            "text": "對數絕對值不代表可以穿越 x=0；原來的 1/x 在零沒有定義。"
          }
        ],
        "questions": [
          {
            "prompt": "∫eˣ dx 是？",
            "options": [
              "e^(x+1)+C",
              "eˣ/x+C",
              "eˣ+C",
              "x eˣ+C"
            ],
            "answer": 2,
            "explanation": "eˣ 求導後仍是 eˣ。"
          },
          {
            "prompt": "∫cos x dx 是？",
            "options": [
              "−cos x+C",
              "sin x+C",
              "−sin x+C",
              "cos x+C"
            ],
            "answer": 1,
            "explanation": "sin x 的導數為 cos x。"
          },
          {
            "prompt": "∫sin x dx 是？",
            "options": [
              "−cos x+C",
              "cos x+C",
              "sin x+C",
              "−sin x+C"
            ],
            "answer": 0,
            "explanation": "−cos x 的導數是 sin x。"
          },
          {
            "prompt": "∫sec²x dx 是？",
            "options": [
              "sec x+C",
              "−tan x+C",
              "2sec x tan x+C",
              "tan x+C"
            ],
            "answer": 3,
            "explanation": "tan x 的導數是 sec²x，在函數有定義的區間使用。"
          },
          {
            "prompt": "x<0 的區間上，∫(1/x) dx 可寫成？",
            "options": [
              "−ln(−x)+C",
              "1/x²+C",
              "ln(−x)+C",
              "ln x+C"
            ],
            "answer": 2,
            "explanation": "此時 |x|=−x，而 ln(−x) 的導數仍是 1/x。"
          },
          {
            "prompt": "∫(4eˣ−2sin x) dx 是？",
            "options": [
              "eˣ+2cos x+C",
              "4eˣ+2cos x+C",
              "4eˣ−2cos x+C",
              "4x eˣ+2cos x+C"
            ],
            "answer": 1,
            "explanation": "−2sin x 積分為 +2cos x。"
          },
          {
            "prompt": "∫2ˣ dx 是？",
            "options": [
              "2ˣ/ln 2+C",
              "2ˣ ln 2+C",
              "2^(x+1)+C",
              "x·2ˣ+C"
            ],
            "answer": 0,
            "explanation": "2ˣ 的導數多了 ln 2，因此積分要除以 ln 2。"
          },
          {
            "prompt": "x>0 時，∫(3/x+cos x) dx 是？",
            "options": [
              "3/x²+sin x+C",
              "ln(3x)+sin x+C",
              "3ln x−sin x+C",
              "3ln x+sin x+C"
            ],
            "answer": 3,
            "explanation": "常數倍提出；1/x 積分為 ln x，cos 積分為 sin。"
          },
          {
            "prompt": "F′(x)=cos x、F(0)=2，F(x) 是？",
            "options": [
              "−sin x+2",
              "cos x+1",
              "sin x+2",
              "sin x+1"
            ],
            "answer": 2,
            "explanation": "F=sin x+C，代入 0 得 C=2。"
          },
          {
            "prompt": "哪個函數是 −sin x 的一個原函數？",
            "options": [
              "−sin x",
              "cos x",
              "−cos x",
              "sin x"
            ],
            "answer": 1,
            "explanation": "cos x 的導數恰好是 −sin x。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.definite",
        "title": "20 · 定積分與微積分基本定理",
        "intro": "用原函數計算累積量，並分清帶符號面積和幾何面積。",
        "kind": "integral",
        "minutes": 15,
        "parents": [
          "cis221-calculus.antiderivatives"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "定積分給出區間內的帶符號累積量，曲線在 x 軸下方的部分算負。微積分基本定理把面積累積與導數連起來；計算時先找原函數，再用上限值減下限值。"
          },
          {
            "type": "formula",
            "text": "若 f 在 [a,b] 連續且 F′=f，∫[a,b] f(x) dx=F(b)−F(a)。\n若 G(x)=∫[a,x] f(t) dt，則 G′(x)=f(x)。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 ∫[0,2] (3x²+1) dx。\n① 原函數 F(x)=x³+x。\n② F(2)=10、F(0)=0。\n③ 定積分等於 10−0=10，不需要再加 C。"
          },
          {
            "type": "tip",
            "text": "幾何面積一定非負；跨越 x 軸時，通常要在零點分段，對負的部分改取正值。"
          }
        ],
        "questions": [
          {
            "prompt": "∫[0,2] x dx 是？",
            "options": [
              "0",
              "2",
              "4",
              "1"
            ],
            "answer": 1,
            "explanation": "用 x²/2，得到 2²/2−0=2。"
          },
          {
            "prompt": "∫[1,3] 2 dx 是？",
            "options": [
              "4",
              "6",
              "2",
              "8"
            ],
            "answer": 0,
            "explanation": "常數乘區間長度，2×(3−1)=4。"
          },
          {
            "prompt": "∫[0,1] x² dx 是？",
            "options": [
              "1/2",
              "1",
              "3",
              "1/3"
            ],
            "answer": 3,
            "explanation": "原函數 x³/3，在上下限相減得 1/3。"
          },
          {
            "prompt": "若 F′=f，∫[a,b] f(x) dx 應算哪一項？",
            "options": [
              "F(b)+F(a)",
              "f(b)−f(a)",
              "F(b)−F(a)",
              "F(a)−F(b)"
            ],
            "answer": 2,
            "explanation": "先找到原函數，再上限減下限。"
          },
          {
            "prompt": "∫[0,2] (−3) dx 是？",
            "options": [
              "0",
              "−6",
              "6",
              "−3"
            ],
            "answer": 1,
            "explanation": "曲線在 x 軸下，帶符號面積是 −3×2=−6。"
          },
          {
            "prompt": "曲線 y=−3 與 x 軸在 0≤x≤2 之間的幾何面積是？",
            "options": [
              "6",
              "−6",
              "3",
              "−3"
            ],
            "answer": 0,
            "explanation": "幾何面積取正，矩形面積為 3×2=6。"
          },
          {
            "prompt": "G(x)=∫[0,x] t² dt，G′(x) 是？",
            "options": [
              "2x",
              "x³/3",
              "0",
              "x²"
            ],
            "answer": 3,
            "explanation": "基本定理指出累積函數的導數等於上限處的被積函數。"
          },
          {
            "prompt": "∫[1,2] 3x² dx 是？",
            "options": [
              "9",
              "6",
              "7",
              "8"
            ],
            "answer": 2,
            "explanation": "原函數 x³，2³−1³=7。"
          },
          {
            "prompt": "計算定積分時，原函數中的同一常數 C 會怎樣？",
            "options": [
              "變成積分區間長度",
              "在上下限相減時抵消",
              "必須加在數值答案後",
              "永遠等於 1"
            ],
            "answer": 1,
            "explanation": "(F(b)+C)−(F(a)+C)=F(b)−F(a)。"
          },
          {
            "prompt": "∫[−1,1] x dx=0，這是否代表曲線與 x 軸之間完全沒有面積？",
            "options": [
              "不是，正負累積量互相抵消",
              "是，曲線必定是 x 軸",
              "是，區間長度為零",
              "不是，因為積分值其實是 2"
            ],
            "answer": 0,
            "explanation": "兩邊各有面積 1/2，帶符號面積相反，所以積分為零。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.integral-properties",
        "title": "21 · 積分性質與奇偶對稱",
        "intro": "運用線性、分段、反向上下限和對稱性，減少計算。",
        "kind": "integral",
        "minutes": 15,
        "parents": [
          "cis221-calculus.definite",
          "cis221-calculus.trigonometry"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "積分可以按同一區間線性組合，也可以把相鄰區間接起來。奇函數滿足 f(−x)=−f(x)，偶函數滿足 f(−x)=f(x)。對稱技巧要求區間關於零對稱，並且相關定積分存在。"
          },
          {
            "type": "formula",
            "text": "∫[a,b](αf+βg)=α∫[a,b]f+β∫[a,b]g；∫[b,a]f=−∫[a,b]f。\n奇函數：∫[−a,a]f=0；偶函數：∫[−a,a]f=2∫[0,a]f（可積時）。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 ∫[−2,2](x³+x²) dx。\n① x³ 是奇函數，對稱區間積分為 0。\n② x² 是偶函數，積分為 2∫[0,2]x² dx。\n③ 得 2×(8/3)=16/3。"
          },
          {
            "type": "tip",
            "text": "不能把奇函數性質直接套在跨越奇點的發散積分。例如 ∫[−1,1]1/x dx 的普通瑕積分不存在。"
          }
        ],
        "questions": [
          {
            "prompt": "已知 ∫[0,2]f dx=5，則 ∫[2,0]f dx 是？",
            "options": [
              "−5",
              "5",
              "0",
              "10"
            ],
            "answer": 0,
            "explanation": "交換上下限令積分變號。"
          },
          {
            "prompt": "已知同一區間上 ∫f=3、∫g=2，則 ∫(2f−g) 是？",
            "options": [
              "8",
              "1",
              "6",
              "4"
            ],
            "answer": 3,
            "explanation": "利用線性得到 2×3−2=4。"
          },
          {
            "prompt": "已知 ∫[0,1]f=2、∫[1,3]f=5，則 ∫[0,3]f 是？",
            "options": [
              "10",
              "5/2",
              "7",
              "3"
            ],
            "answer": 2,
            "explanation": "相鄰區間的積分相加為 2+5=7。"
          },
          {
            "prompt": "∫[4,4] (x²+1) dx 是？",
            "options": [
              "1",
              "0",
              "17",
              "4"
            ],
            "answer": 1,
            "explanation": "上下限相同，區間長度為零。"
          },
          {
            "prompt": "∫[−2,2] x³ dx 是？",
            "options": [
              "0",
              "8",
              "16",
              "−8"
            ],
            "answer": 0,
            "explanation": "x³ 是連續奇函數，對稱區間積分為零。"
          },
          {
            "prompt": "∫[−1,1] x² dx 是？",
            "options": [
              "0",
              "1/3",
              "2",
              "2/3"
            ],
            "answer": 3,
            "explanation": "x² 為偶函數，2∫[0,1]x² dx=2/3。"
          },
          {
            "prompt": "下列哪個函數是偶函數？",
            "options": [
              "x³",
              "x",
              "cos x",
              "sin x"
            ],
            "answer": 2,
            "explanation": "cos(−x)=cos x，因此是偶函數。"
          },
          {
            "prompt": "∫[−π,π] sin x dx 是？",
            "options": [
              "2π",
              "0",
              "2",
              "−2"
            ],
            "answer": 1,
            "explanation": "sin 是連續奇函數，在對稱區間積分為零。"
          },
          {
            "prompt": "∫[−1,1] (x³+2) dx 是？",
            "options": [
              "4",
              "0",
              "2",
              "6"
            ],
            "answer": 0,
            "explanation": "奇函數部分為 0，常數部分為 2×2=4。"
          },
          {
            "prompt": "為何不能直接說 ∫[−1,1]1/x dx=0？",
            "options": [
              "1/x 其實是偶函數",
              "積分上下限不能有負數",
              "所有奇函數都不可積",
              "x=0 有奇點，兩側瑕積分不收斂"
            ],
            "answer": 3,
            "explanation": "奇函數的零積分性質要求積分存在；這裡兩側都發散。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.substitution",
        "title": "22 · 換元積分與反向鏈式法則",
        "intro": "找出內層函數及其導數，把複合積分化為熟悉形式。",
        "kind": "integral",
        "minutes": 15,
        "parents": [
          "cis221-calculus.elementary-integrals",
          "cis221-calculus.chain"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "換元是把鏈式法則倒過來使用。先選內層為 u，再把 dx 與其他因子合成 du。若只差常數倍，可以補償；若還剩未處理的 x，就要檢查換元是否完整。"
          },
          {
            "type": "formula",
            "text": "u=g(x)，du=g′(x) dx：∫f(g(x))g′(x) dx=∫f(u) du。\n定積分換元時，上下限同步改為 g(a)、g(b)。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 ∫2x cos(x²) dx。\n① 設 u=x²，du=2x dx。\n② 積分化為 ∫cos u du=sin u+C。\n③ 代回得 sin(x²)+C。"
          },
          {
            "type": "tip",
            "text": "定積分可全程使用新變量和新上下限，或先求原函數代回 x；不要混用 u 的式子和 x 的上下限。"
          }
        ],
        "questions": [
          {
            "prompt": "計算 ∫2x cos(x²) dx，最直接的換元是？",
            "options": [
              "u=cos x",
              "u=2x cos x",
              "u=x³",
              "u=x²"
            ],
            "answer": 3,
            "explanation": "內層是 x²，而外面的 2x dx 正好是其微分。"
          },
          {
            "prompt": "∫2x e^(x²) dx 是？",
            "options": [
              "e^(x²)/(2x)+C",
              "x²e^(x²)+C",
              "e^(x²)+C",
              "2e^(x²)+C"
            ],
            "answer": 2,
            "explanation": "設 u=x²，得到 ∫e^u du。"
          },
          {
            "prompt": "∫3(3x+1)² dx 是？",
            "options": [
              "(3x+1)²/3+C",
              "(3x+1)³/3+C",
              "(3x+1)³+C",
              "3(3x+1)³+C"
            ],
            "answer": 1,
            "explanation": "u=3x+1，du=3dx，積分為 u³/3+C。"
          },
          {
            "prompt": "∫cos(2x) dx 是？",
            "options": [
              "(1/2)sin(2x)+C",
              "2sin(2x)+C",
              "sin(2x)+C",
              "−(1/2)sin(2x)+C"
            ],
            "answer": 0,
            "explanation": "內層導數是 2，所以積分係數要除以 2。"
          },
          {
            "prompt": "∫e^(3x) dx 是？",
            "options": [
              "3e^(3x)+C",
              "e^(3x)+C",
              "e^(3x)/x+C",
              "(1/3)e^(3x)+C"
            ],
            "answer": 3,
            "explanation": "求導驗算：(1/3)×3e^(3x)=e^(3x)。"
          },
          {
            "prompt": "∫2x/(x²+1) dx 是？",
            "options": [
              "2ln(x²+1)+C",
              "ln|x|+C",
              "ln(x²+1)+C",
              "1/(x²+1)+C"
            ],
            "answer": 2,
            "explanation": "u=x²+1>0，du=2x dx，得到 ln u+C。"
          },
          {
            "prompt": "x>0 時，∫(ln x)/x dx 是？",
            "options": [
              "(ln x)²+C",
              "(ln x)²/2+C",
              "ln x+C",
              "1/(2x²)+C"
            ],
            "answer": 1,
            "explanation": "令 u=ln x，du=dx/x，積分變為 ∫u du。"
          },
          {
            "prompt": "用 u=x² 換元 ∫[0,2]2x e^(x²) dx，新上下限是？",
            "options": [
              "0 到 4",
              "0 到 2",
              "2 到 4",
              "0 到 e⁴"
            ],
            "answer": 0,
            "explanation": "把原上下限代入 u=x²，得到 0²=0、2²=4。"
          },
          {
            "prompt": "∫[0,1]2x/(x²+1) dx 是？",
            "options": [
              "1",
              "2ln 2",
              "ln 3",
              "ln 2"
            ],
            "answer": 3,
            "explanation": "原函數 ln(x²+1)，代入得 ln 2−ln 1=ln 2。"
          },
          {
            "prompt": "∫x√(x²+4) dx 是？",
            "options": [
              "√(x²+4)+C",
              "(x²+4)^(3/2)/2+C",
              "(x²+4)^(3/2)/3+C",
              "(x²+4)^(3/2)+C"
            ],
            "answer": 2,
            "explanation": "u=x²+4，x dx=du/2，得到 (1/2)×(2/3)u^(3/2)+C。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.integral-applications",
        "title": "23 · 積分應用與初始條件",
        "intro": "從變化率重建總量，並用初始資料決定積分常數。",
        "kind": "integral",
        "minutes": 15,
        "parents": [
          "cis221-calculus.definite",
          "cis221-calculus.elementary-integrals"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "速度積分得到位移，速率積分得到路程；有折返時兩者不同。加速度先積分為速度，再積分為位置，每次都需要相應初始條件。邊際成本積分得到成本增加量，再加固定成本。"
          },
          {
            "type": "formula",
            "text": "s′(t)=v(t)，v′(t)=a(t)；s(b)−s(a)=∫[a,b]v(t) dt。\n總路程=∫[a,b]|v(t)| dt；總成本 C(q)=C(0)+∫[0,q]C′(u) du。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "物體 a(t)=2、v(0)=3、s(0)=5。\n① v(t)=2t+C₁，由 v(0)=3 得 v=2t+3。\n② s(t)=t²+3t+C₂，由 s(0)=5 得 s=t²+3t+5。\n③ t=2 時位置為 15，這段時間的位移為 15−5=10。"
          },
          {
            "type": "tip",
            "text": "先寫清正在求的是位置、位移、路程還是總量。初始位置不等於位移。"
          }
        ],
        "questions": [
          {
            "prompt": "v(t)=2t（米/秒），0≤t≤3 的位移是多少米？",
            "options": [
              "3",
              "18",
              "9",
              "6"
            ],
            "answer": 2,
            "explanation": "位移 ∫[0,3]2t dt=[t²]₀³=9 米。"
          },
          {
            "prompt": "a(t)=4、v(0)=1，速度函數是？",
            "options": [
              "v(t)=4",
              "v(t)=4t+1",
              "v(t)=2t²+1",
              "v(t)=4t"
            ],
            "answer": 1,
            "explanation": "積分得到 4t+C，初始條件給 C=1。"
          },
          {
            "prompt": "v(t)=3、s(0)=5，s(2) 是？",
            "options": [
              "11",
              "6",
              "8",
              "15"
            ],
            "answer": 0,
            "explanation": "s(t)=3t+5，所以 s(2)=11。"
          },
          {
            "prompt": "v(t)=t−1，0≤t≤2 的位移是？",
            "options": [
              "1",
              "2",
              "−1",
              "0"
            ],
            "answer": 3,
            "explanation": "∫[0,2](t−1) dt=[t²/2−t]₀²=0。"
          },
          {
            "prompt": "v(t)=t−1，0≤t≤2 的總路程是？",
            "options": [
              "2",
              "1/2",
              "1",
              "0"
            ],
            "answer": 2,
            "explanation": "在 t=1 分段，兩個三角形面積各 1/2，總路程為 1。"
          },
          {
            "prompt": "邊際成本 C′(q)=2q+5、固定成本 C(0)=10，C(3) 是？",
            "options": [
              "40",
              "34",
              "24",
              "19"
            ],
            "answer": 1,
            "explanation": "C(q)=q²+5q+10，代入 3 得 9+15+10=34。"
          },
          {
            "prompt": "圓面積 A(r) 滿足 A′(r)=2πr、A(0)=0，A(r) 是？",
            "options": [
              "πr²",
              "2πr²",
              "2πr",
              "πr³/3"
            ],
            "answer": 0,
            "explanation": "積分 2πr 得 πr²+C，初始條件給 C=0。"
          },
          {
            "prompt": "球體積 V(r) 滿足 V′(r)=4πr²、V(0)=0，V(r) 是？",
            "options": [
              "4πr²",
              "πr³",
              "12πr³",
              "4πr³/3"
            ],
            "answer": 3,
            "explanation": "對半徑積分，∫4πr² dr=4πr³/3+C，且 C=0。"
          },
          {
            "prompt": "水流入速度為 5 公升/分鐘，持續 4 分鐘，原有 7 公升且沒有流出，最後有多少公升？",
            "options": [
              "12",
              "35",
              "27",
              "20"
            ],
            "answer": 2,
            "explanation": "新增水量 5×4=20，再加原有的 7 得 27。"
          },
          {
            "prompt": "a(t)=2、v(0)=0、s(0)=1，位置 s(t) 是？",
            "options": [
              "2t²+1",
              "t²+1",
              "2t+1",
              "t²"
            ],
            "answer": 1,
            "explanation": "先得 v=2t，再得 s=t²+C，由 s(0)=1 得 C=1。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.linearization",
        "title": "24 · 微分與線性近似",
        "intro": "用切線在已知點附近估算函數值，理解近似的適用範圍。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.chain"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "線性近似使用已知點的函數值和斜率，把局部曲線換成切線。一般而言，離展開點越遠，近似誤差可能越大。dy 是切線預測的改變量，Δy 是原函數真正的改變量，兩者通常不完全相等。"
          },
          {
            "type": "formula",
            "text": "L(x)=f(a)+f′(a)(x−a)；dy=f′(x) dx；Δy≈dy（變化夠小時）。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "估算 √4.04。\n① 取 f(x)=√x、a=4，f(4)=2、f′(4)=1/4。\n② L(x)=2+(x−4)/4。\n③ L(4.04)=2.01，因此 √4.04≈2.01。"
          },
          {
            "type": "tip",
            "text": "把「≈」與「=」分清。近似公式中的斜率要在展開點 a 計算。"
          }
        ],
        "questions": [
          {
            "prompt": "f(x)=x² 在 a=3 的線性近似 L(x) 是？",
            "options": [
              "x²+6",
              "9+6(x−3)",
              "9+3(x−3)",
              "6+9(x−3)"
            ],
            "answer": 1,
            "explanation": "f(3)=9，f′(3)=6，套入切線公式。"
          },
          {
            "prompt": "用 f(x)=√x 在 a=4 的線性近似估算 √4.04，結果是？",
            "options": [
              "2.01",
              "2.04",
              "2.001",
              "2.02"
            ],
            "answer": 0,
            "explanation": "2+(1/4)×0.04=2.01。"
          },
          {
            "prompt": "用 eˣ 在 a=0 的線性近似估算 e^0.02，結果是？",
            "options": [
              "0.02",
              "1.0002",
              "1.04",
              "1.02"
            ],
            "answer": 3,
            "explanation": "f(0)=1、f′(0)=1，所以 eˣ≈1+x。"
          },
          {
            "prompt": "用 ln x 在 a=1 的線性近似估算 ln(1.03)，結果是？",
            "options": [
              "0.0003",
              "−0.03",
              "0.03",
              "1.03"
            ],
            "answer": 2,
            "explanation": "ln x≈0+1×(x−1)，代入 1.03 得 0.03。"
          },
          {
            "prompt": "y=x³，在 x=2、dx=0.01 時，dy 是？",
            "options": [
              "0.012",
              "0.12",
              "0.04",
              "0.08"
            ],
            "answer": 1,
            "explanation": "dy=3x²dx=3×4×0.01=0.12。"
          },
          {
            "prompt": "對一般可微的非線性函數，dy 與 Δy 的關係通常是？",
            "options": [
              "當 dx 很小時可近似，但不保證完全相等",
              "永遠完全相等",
              "永遠互為相反數",
              "兩者都必定為零"
            ],
            "answer": 0,
            "explanation": "dy 是線性部分，真實改變量還可能有更高階項。"
          },
          {
            "prompt": "用 f(x)=1/x 在 a=2 的線性近似估算 1/2.04，結果是？",
            "options": [
              "0.51",
              "0.48",
              "0.50",
              "0.49"
            ],
            "answer": 3,
            "explanation": "f(2)=1/2，f′(2)=−1/4，故 0.5−0.25×0.04=0.49。"
          },
          {
            "prompt": "用 sin x 在 a=0 的線性近似估算 sin(0.05)，弧度制下結果是？",
            "options": [
              "0",
              "0.0025",
              "0.05",
              "1.05"
            ],
            "answer": 2,
            "explanation": "sin 0=0、cos 0=1，所以 sin x≈x。"
          },
          {
            "prompt": "線性近似 L(x) 在展開點 a 必定滿足甚麼？",
            "options": [
              "L 的斜率必定為 1",
              "L(a)=f(a)，且斜率為 f′(a)",
              "L(a)=0",
              "L(x) 在所有 x 都等於 f(x)"
            ],
            "answer": 1,
            "explanation": "切線與曲線在展開點有相同函數值和一階導數。"
          },
          {
            "prompt": "若已知 f(2)=5、f′(2)=−3，f(2.1) 的線性近似是？",
            "options": [
              "4.7",
              "5.3",
              "4.3",
              "2"
            ],
            "answer": 0,
            "explanation": "5+(−3)×0.1=4.7。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.taylor",
        "title": "25 · Taylor 多項式與二階近似",
        "intro": "加入高階導數，建立線性、二次及更高次的局部近似。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.linearization",
          "cis221-calculus.elementary"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "Taylor 多項式以展開點 a 的導數決定每項係數；a=0 時稱為 Maclaurin 多項式。階乘 k! 不能省略。有限次多項式通常只是局部近似，誤差要視函數、次數和離展開點的距離而定。"
          },
          {
            "type": "formula",
            "text": "Tₙ(x)=Σ[k=0 到 n] f⁽ᵏ⁾(a)(x−a)ᵏ/k!。\nT₂(x)=f(a)+f′(a)(x−a)+f″(a)(x−a)²/2。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "求 eˣ 在 a=0 的二次近似，並估算 e^0.1。\n① f(0)=f′(0)=f″(0)=1。\n② T₂(x)=1+x+x²/2。\n③ T₂(0.1)=1+0.1+0.005=1.105。"
          },
          {
            "type": "tip",
            "text": "Taylor 的次數指保留到哪個次方；某些導數等於零時，對應的項會消失。"
          }
        ],
        "questions": [
          {
            "prompt": "eˣ 在 0 的二次 Taylor 多項式是？",
            "options": [
              "1+x+x²/2",
              "1+x+x²",
              "x+x²/2",
              "1+x²/2"
            ],
            "answer": 0,
            "explanation": "所有階導數在 0 都是 1，二次項係數需除以 2!。"
          },
          {
            "prompt": "sin x 在 0 的三次 Taylor 多項式是？",
            "options": [
              "x+x³/6",
              "1−x²/2",
              "x−x³/3",
              "x−x³/6"
            ],
            "answer": 3,
            "explanation": "在 0 的導數依次為 0、1、0、−1，因此保留 x−x³/6。"
          },
          {
            "prompt": "cos x 在 0 的二次 Taylor 多項式是？",
            "options": [
              "x−x²/2",
              "−x²",
              "1−x²/2",
              "1+x²/2"
            ],
            "answer": 2,
            "explanation": "cos 0=1，一階導數為 0，二階導數為 −1。"
          },
          {
            "prompt": "ln(1+x) 在 0 的二次 Taylor 多項式是？",
            "options": [
              "−x−x²/2",
              "x−x²/2",
              "1+x−x²/2",
              "x+x²/2"
            ],
            "answer": 1,
            "explanation": "f(0)=0，f′(0)=1，f″(0)=−1。"
          },
          {
            "prompt": "用 eˣ 的二次近似 1+x+x²/2 估算 e^0.1，結果是？",
            "options": [
              "1.105",
              "1.11",
              "1.1",
              "1.1005"
            ],
            "answer": 0,
            "explanation": "代入 0.1 得 1+0.1+0.01/2=1.105。"
          },
          {
            "prompt": "已知 f(2)=3、f′(2)=4、f″(2)=6，T₂(x) 是？",
            "options": [
              "3+4(x−2)+6(x−2)²",
              "3+4x+3x²",
              "4+6(x−2)+3(x−2)²",
              "3+4(x−2)+3(x−2)²"
            ],
            "answer": 3,
            "explanation": "二次項係數為 f″(2)/2=3，全部使用 x−2。"
          },
          {
            "prompt": "Taylor 公式中三次項的分母 3! 等於多少？",
            "options": [
              "9",
              "1",
              "6",
              "3"
            ],
            "answer": 2,
            "explanation": "3!=3×2×1=6。"
          },
          {
            "prompt": "f(x)=x² 在 a=1 的二次 Taylor 多項式是？",
            "options": [
              "1+2(x−1)+2(x−1)²",
              "1+2(x−1)+(x−1)²",
              "1+(x−1)+(x−1)²",
              "2+2(x−1)+(x−1)²"
            ],
            "answer": 1,
            "explanation": "f(1)=1、f′(1)=2、f″(1)=2，展開後恰好等於 x²。"
          },
          {
            "prompt": "Maclaurin 多項式的展開點是哪裡？",
            "options": [
              "a=0",
              "a=1",
              "a=−1",
              "每次一定是極值點"
            ],
            "answer": 0,
            "explanation": "Maclaurin 是以零為展開點的 Taylor 多項式。"
          },
          {
            "prompt": "對一般非多項式函數，有限次 Taylor 多項式應如何理解？",
            "options": [
              "對所有實數都必定完全相等",
              "次數越高就必定在所有地方更準",
              "只要一階導數非零便不能使用",
              "展開點附近的近似，通常存在誤差"
            ],
            "answer": 3,
            "explanation": "有限次近似通常留下餘項，適用範圍與誤差需要考慮。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.newton-roots",
        "title": "26 · Newton 求根法",
        "intro": "利用切線的 x 軸截距反覆更新根的估計，並辨認失敗情況。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.linearization",
          "cis221-calculus.chain"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "Newton 求根法從初始值 x₀ 出發，在該點畫切線，取切線的零點作下一次估計。通常要同時檢查殘差 |f(xₙ)|、步長 |xₙ₊₁−xₙ| 和迭代次數上限。收斂與初值及函數形狀有關，並非每次都成功。"
          },
          {
            "type": "formula",
            "text": "xₙ₊₁=xₙ−f(xₙ)/f′(xₙ)，要求這一步的 f′(xₙ)≠0。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "用 Newton 法解 x²−2=0，取 x₀=1。\n① f′(x)=2x，更新式 xₙ₊₁=(xₙ+2/xₙ)/2。\n② x₁=(1+2)/2=1.5。\n③ x₂=(1.5+2/1.5)/2=17/12≈1.4167，逐步接近 √2。"
          },
          {
            "type": "tip",
            "text": "分母為零、迭代跳離定義域、振盪或發散時，應停止檢查並調整初值或方法。"
          }
        ],
        "questions": [
          {
            "prompt": "求解 f(x)=0 的 Newton 更新公式是？",
            "options": [
              "xₙ₊₁=xₙ−f′(xₙ)/f″(xₙ)",
              "xₙ₊₁=f(xₙ)",
              "xₙ₊₁=xₙ+f′(xₙ)",
              "xₙ₊₁=xₙ−f(xₙ)/f′(xₙ)"
            ],
            "answer": 3,
            "explanation": "以當前點切線的零點作下一次估計，導出 f/f′ 的更新。"
          },
          {
            "prompt": "對 f(x)=x²−2，x₀=1，第一次更新 x₁ 是？",
            "options": [
              "0.5",
              "1",
              "1.5",
              "2"
            ],
            "answer": 2,
            "explanation": "1−(1−2)/(2×1)=1.5。"
          },
          {
            "prompt": "對 f(x)=x²−2，從 x₁=1.5 再更新一次，x₂ 是？",
            "options": [
              "7/4",
              "17/12",
              "3/2",
              "4/3"
            ],
            "answer": 1,
            "explanation": "1.5−(2.25−2)/3=1.5−1/12=17/12。"
          },
          {
            "prompt": "對 f(x)=x²−9，x₀=4，x₁ 是？",
            "options": [
              "25/8",
              "3",
              "7/2",
              "9/4"
            ],
            "answer": 0,
            "explanation": "4−(16−9)/8=4−7/8=25/8。"
          },
          {
            "prompt": "對 f(x)=x²−2，為何不能直接用 x₀=0 作 Newton 更新？",
            "options": [
              "f(0)=0，已經求到根",
              "所有負函數值都不允許",
              "x² 在 0 沒有定義",
              "f′(0)=0，分母為零"
            ],
            "answer": 3,
            "explanation": "f′(x)=2x，在 0 等於零，更新式不能直接計算。"
          },
          {
            "prompt": "Newton 求根法的幾何意義是？",
            "options": [
              "每次把區間固定平分",
              "每次只向右移動一個單位",
              "用當前點切線與 x 軸的交點作下一估計",
              "用曲線與 y 軸的交點作下一估計"
            ],
            "answer": 2,
            "explanation": "切線方程設 y=0，可得到 Newton 公式。"
          },
          {
            "prompt": "對 f(x)=x³−2x+2，x₀=0，前兩次更新是？",
            "options": [
              "x₁=0，x₂=0",
              "x₁=1，x₂=0",
              "x₁=1，x₂=2",
              "x₁=−1，x₂=0"
            ],
            "answer": 1,
            "explanation": "f(0)=2、f′(0)=−2 得 1；f(1)=1、f′(1)=1 得 0，形成循環。"
          },
          {
            "prompt": "若殘差 |f(xₙ)| 很小，最直接表示甚麼？",
            "options": [
              "目前估計近似滿足方程 f(x)=0",
              "必定已找到唯一的根",
              "必定是函數的最小值點",
              "與真根的距離必定小於同一數值"
            ],
            "answer": 0,
            "explanation": "殘差衡量方程滿足程度；位置誤差還與局部斜率等因素有關。"
          },
          {
            "prompt": "對 f(x)=2x−6，x₀=0，一次 Newton 更新後是？",
            "options": [
              "6",
              "−3",
              "2",
              "3"
            ],
            "answer": 3,
            "explanation": "0−(−6)/2=3，線性函數一步便到達根。"
          },
          {
            "prompt": "關於 Newton 求根法，下列哪句正確？",
            "options": [
              "每一步都必定比上一步更接近根",
              "不需要計算導數",
              "初值可能影響找到的根，也可能不收斂",
              "任何初值都必定收斂"
            ],
            "answer": 2,
            "explanation": "Newton 法是局部方法，存在多根、循環或發散等情況。"
          }
        ],
        "passCount": 7
      },
      {
        "schemaVersion": 1,
        "id": "cis221-calculus.newton-optimization",
        "title": "27 · Newton 最佳化與結果判別",
        "intro": "把求根法用於 f′(x)=0，再檢查所得駐點是否為目標極值。",
        "kind": "derivative",
        "minutes": 15,
        "parents": [
          "cis221-calculus.newton-roots",
          "cis221-calculus.optimization",
          "cis221-calculus.taylor"
        ],
        "content": [
          {
            "type": "heading",
            "text": "學習重點"
          },
          {
            "type": "paragraph",
            "text": "單變量 Newton 最佳化把目標函數的一階導數設為零，等於對 f′ 使用 Newton 求根。它也可以理解為求局部二次近似的駐點。方法可能收斂到極大值，甚至非極值駐點；因此不能把停止迭代直接當作成功找到最小值。"
          },
          {
            "type": "formula",
            "text": "xₙ₊₁=xₙ−f′(xₙ)/f″(xₙ)，要求 f″(xₙ)≠0。\n駐點 x*：f′(x*)=0；f″(x*)>0 判局部極小，f″(x*)<0 判局部極大。"
          },
          {
            "type": "heading",
            "text": "逐步例題"
          },
          {
            "type": "example",
            "text": "最小化 f(x)=x²−4x+7，取 x₀=0。\n① f′(x)=2x−4、f″(x)=2。\n② x₁=0−(−4)/2=2。\n③ f′(2)=0、f″(2)>0；又 f=(x−2)²+3，故全域最小值為 3，在 x=2 取得。"
          },
          {
            "type": "tip",
            "text": "求根用 f/f′；求駐點用 f′/f″。有區間限制時還要檢查端點，二階導數為零時須另用其他判別方法。"
          }
        ],
        "questions": [
          {
            "prompt": "用 Newton 方法尋找 f 的駐點，更新公式是？",
            "options": [
              "xₙ₊₁=xₙ+f″(xₙ)",
              "xₙ₊₁=f′(xₙ)",
              "xₙ₊₁=xₙ−f′(xₙ)/f″(xₙ)",
              "xₙ₊₁=xₙ−f(xₙ)/f′(xₙ)"
            ],
            "answer": 2,
            "explanation": "把 Newton 求根公式中的函數換成 f′。"
          },
          {
            "prompt": "f(x)=x²−4x+7，從 x₀=0 更新一次得到？",
            "options": [
              "7/4",
              "2",
              "4",
              "−2"
            ],
            "answer": 1,
            "explanation": "f′(0)=−4、f″(0)=2，因此 x₁=0−(−4)/2=2。"
          },
          {
            "prompt": "f(x)=x²−4x+7 的最小函數值是？",
            "options": [
              "3",
              "2",
              "7",
              "0"
            ],
            "answer": 0,
            "explanation": "配方成 (x−2)²+3，最小值是 3。"
          },
          {
            "prompt": "f(x)=−x²，Newton 駐點迭代找到 x=0，這是甚麼點？",
            "options": [
              "局部極小值點",
              "沒有定義的點",
              "非駐點",
              "局部及全域極大值點"
            ],
            "answer": 3,
            "explanation": "f′(0)=0，而 f″(0)=−2<0，因此是極大值點。"
          },
          {
            "prompt": "若某次 f″(xₙ)=0，直接使用 Newton 駐點公式會有甚麼問題？",
            "options": [
              "下一步必定等於零",
              "可直接把分母改成 1",
              "分母為零，需改用其他處理",
              "必定已經找到最小值"
            ],
            "answer": 2,
            "explanation": "公式含 f′/f″，不能直接除以零。"
          },
          {
            "prompt": "f(x)=x³−3x，x₀=2，一次 Newton 駐點更新得到？",
            "options": [
              "2.75",
              "1.25",
              "1.5",
              "−1"
            ],
            "answer": 1,
            "explanation": "f′(2)=9、f″(2)=12，x₁=2−9/12=1.25。"
          },
          {
            "prompt": "f(x)=x³−3x 的駐點 x=−1 是？",
            "options": [
              "局部極大值點",
              "局部極小值點",
              "全域最小值點",
              "不是駐點"
            ],
            "answer": 0,
            "explanation": "f′(−1)=0、f″(−1)=−6<0，故為局部極大。"
          },
          {
            "prompt": "已確認 f′(x*)=0，哪項是判定局部極小值的常用充分條件？",
            "options": [
              "f(x*)>0",
              "x*>0",
              "f″(x*)<0",
              "二階導數在附近連續且 f″(x*)>0"
            ],
            "answer": 3,
            "explanation": "在適當可微條件下，真正駐點處正的二階導數表示局部極小；數值殘差也要檢查。"
          },
          {
            "prompt": "在閉區間 [a,b] 尋找連續函數的全域最小值，除了內部候選點，還應檢查哪裡？",
            "options": [
              "只檢查函數值為零的點",
              "不用再檢查任何地方",
              "兩個端點 a、b",
              "只檢查中點"
            ],
            "answer": 2,
            "explanation": "全域最小值可能發生於邊界，因此要比較端點及內部候選值。"
          },
          {
            "prompt": "Newton 駐點更新與二次 Taylor 近似有甚麼關係？",
            "options": [
              "它每次都能保證到達全域最小值",
              "它取當前點二次近似的駐點作下一步",
              "它令原函數值每次必定減半",
              "它完全忽略一階導數"
            ],
            "answer": 1,
            "explanation": "二次近似的導數為 f′(xₙ)+f″(xₙ)(x−xₙ)，設為零就得到更新式。"
          }
        ],
        "passCount": 7
      }
    ]
  }
];
