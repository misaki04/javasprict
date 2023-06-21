// 三項演算子(条件式 ? 真の場合の値 : 偽の場合の値)
const x = 10;
const y = 5;
const result = x > y ? "xはyより大きい" : "xはy以下";
console.log(result);

const text = "Alice";
const greeting = text === "Alice" ? "こんにちは、Aliceさん!" : "ようこそ!";
console.log(greeting);

const num = 7;
const message = num % 2 === 0 ? "偶数です" : "奇数です";
console.log(message);

const age = 18;
const allowed = age >= 18 ? "入場可" : "入場不可";
console.log(allowed);

const fruit = "apple";
const color = fruit === "apple" ? "赤" : "その他";
console.log(color);

const x1 = 10;
const y1 = "10";
const result1 = x1 === y1 ? true : false;
console.log(result1);

const num1 = 15;
const result2 = num1 > 10 ? (num1 < 20 ? "範囲内" : "範囲外") : "範囲外";
console.log(result2);

const a = 5;
const b = 3;
const c = 8;
const result3 =
  a === b
    ? "aとbは等しい"
    : a === c
    ? "aとcは等しい"
    : "aとb,c派どちらとも異なる";
console.log(result3);

const text1 = "john";
const result4 = text1.length > 5 ? "長い名前です" : "短い名前です";
console.log(result4);

const x2 = 10;
const result5 =
  x2 > 5
    ? x2 > 8
      ? "xは5より大きく、かつ8より大きい"
      : "xは5より大きく、8以下"
    : "xは5以下";
console.log(result5);

// 条件演算子
const x3 = 10;
const result6 = x3 > 5 ? "大きい" : "小さい";
console.log(result6);

const num2 = -7;
const result7 = num2 >= 0 ? "非負数" : "負数";
console.log(result7);

const text2 = "";
const result8 = text2 ? "名前あり" : "名前なし";
console.log(result8);

const age1 = 25;
const result9 = age < 18 ? "未成年" : age < 65 ? "成人" : "高齢者";
console.log(result9);

const a1 = true;
const b1 = false;
const result10 = a1 && b1 ? "両方真" : a1 || b1 ? "どちらか真" : "両方偽";
console.log(result10);

// 条件分岐 (if{}else文)
const age2 = 20;
if (age2 >= 18) {
  console.log("成年です");
} else {
  console.log("未成年です");
}

const score = 85;
if (score >= 90) {
  console.log("優秀です");
} else if (score >= 70) {
  console.log("普通です");
} else {
  console.log("不合格です");
}

const number3 = 8;
let message1 = "";
switch (number3) {
  case 1:
    message1 = "数字は1です";
    break;
  case 3:
    message1 = "数字は3です";
    break;
  case 7:
    message1 = "数字は7です";
    break;
  default:
    message1 = "その他の数字です";
    break;
}
console.log(message1);
// ※break とめる・壊す
// ※case  場合・例
// ※switch 交換・替わる
// ※default　既定値

const day = "月曜";
switch (day) {
  case "月曜":
  case "火曜":
  case "水曜":
  case "木曜":
  case "金曜":
    console.log("平日です");
    break;
  case "土曜":
  case "日曜":
    console.log("週末です");
    break;
  default:
    console.log("無効な日付です");
    break;
}

const temperature = 25;
const weather = "晴れ";
if (temperature >= 30 && weather === "晴れ") {
  console.log("外出しましょう");
} else {
  console.log("外出は控えましょう");
}

// temperature(テンプラチャー)温度・気温・熱
