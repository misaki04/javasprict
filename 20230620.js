// 1,代入演算子の中で、値を加算しながら代入する演算子は何ですか？
// インクリメント演算子("++");
// let = 5;
// x++;
// console.log(x);
// // 2,比較演算子「等しい」を表す演算子は何ですか？
// // 等価演算子(==)左辺の形と右辺の値を比較した時に自動変換され結果はtuer(文字列と数値はtuer)
// // 厳密等価演算子(===)左辺の形と右辺の値が同じであれば結果はtuer(文字列と数値はfalse)

// // 3,論理演算子「論理和」を表す演算子は何ですか？
// // 　式1 OR 式2
// // 条件1 || 条件2
// // 「論理和」の演算子は、少なくとも1つの式や条件が真（True）である場合に真を返します。それ以外の場合は偽（False）を返します。

// // 4,真偽値を反転させるための演算子は何ですか？
// // !(ノット＝ではない)
// let moji = prompt("年齢は？");
// if (!isNaN(moji)) {
//   console.log("数値に変換可能");
// }
// 文字列「年齢は？」を表示してユーザーに入力させた結果を、新規作成した変数mojiに入れろ。
// もしも「変数mojiは数値に変更不可ではない」が真なら以下を実行せよ
// {文字列「数値に変更可能」をコンソールに表示しろ。}
// 5,三項演算子は何の略ですか？
// 条件演算子（Conditional Operator）は、一つの条件式に基づいて2つの値の中から一つを選択するために使用される演算子

// 1,変数scoreが80以上の場合に"合格"、そうでない場合に"不合格"という結果を返します。条件演算子を使って、結果を返すコードを完成させてください。

// const score = 75;
// const result = score >= 80 ? "合格" : "不合格";
// console.log(result);
// 2,変数numが偶数の場合には"偶数"、奇数の場合には"奇数"という結果を返すような条件演算子を使ったコードを作成してください。

// const score = 7;
// const result = num % 2 === 0 ? "偶数" : "奇数";
// console.log(result);

// 3,変数ageが18以上である場合には"成年"、そうでない場合には"未成年"という結果を返す条件演算子のコードを作成してください。
// const age = 20;
// const result = age >= 18 ? "成年" : "未成年";
// console.log(result);

// 4,変数num1とnum2が等しい場合には"等しい"、そうでない場合には"異なる"という結果を返す条件演算子のコードを作成してください。
// const num1 = 5;
// const num2 = 10;
// const result = num1 === num2 ? "等しい" : "異なる";
// console.log(result);

// // 5,変数numが正の数の場合には"正の数"、0の場合には"ゼロ"、負の数の場合には"負の数"という結果を返す条件演算子のコードを作成してください。
// const num = -7;
// const result = num > 0 ? "正の数" : num < 0 ? "負の数" : "ゼロ";
// console.log(result);

// 1,変数scoreが80以上の場合は"合格"と表示し、そうでない場合は"不合格"と表示するような条件分岐のコードを作成してください。num
const score = 75;
if (score >= 80) {
  console.log("合格");
} else {
  console.log("不合格");
// }
// 変数scoreが80以上の場合にはifブロック内のコードが実行されて"合格"が表示されます。
// それ以外の場合、つまりscoreが80未満の場合にはelseブロック内のコードが実行されて"不合格"

// 2,変数numが正の数の場合は"正の数"、0の場合は"ゼロ"、負の数の場合は"負の数"と表示するような条件分岐のコードを作成してください。
const num = -1;
if (num > 0) {
  console.log("正の数");
} else if (num < 0) {
  console.log("負の数");
} else {
  console.log("ゼロ");
}
// // 3,変数ageが18以上の場合は"成年"と表示し、そうでない場合は"未成年"と表示するような条件分岐のコードを作成してください。
const age = 17;
if (age >= 18) {
  console.log("成年");
} else {
  console.log("未成年");
}
// 4,変数monthが1から12の範囲内の場合は、該当する月の名前を表示し、それ以外の場合は"無効な月"と表示するような条件分岐のコードを作成してください。

const month = 6;

if (month >= 1 && month <= 12) {
  if (month === 1) {
    console.log("1月");
  } else if (month === 2) {
    console.log("2月");
  } else if (month === 3) {
    console.log("3月");
  } else if (month === 4) {
    console.log("4月");
  } else if (month === 5) {
    console.log("5月");
  } else if (month === 6) {
    console.log("6月");
  } else if (month === 7) {
    console.log("7月");
  } else if (month === 8) {
    console.log("8月");
  } else if (month === 9) {
    console.log("9月");
  } else if (month === 10) {
    console.log("10月");
  } else if (month === 11) {
    console.log("11月");
  } else {
    console.log("12月");
  }
} else {
  console.log("無効な月");
}
// 5,変数letterが母音（a, e, i, o, u）の場合は"母音"と表示し、それ以外の場合は"子音"と表示するような条件分岐のコードを作成してください。
const letter = "a";
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  console.log("母音");
} else {
  console.log("子音");
}

// 1,letキーワードを使用して変数countを宣言し、初期値を10として設定してください。
// let const = 10;

// 2,変数priceをletを使って宣言し、値を100として設定してください。その後、priceの値を200に更新してください。
// let price = 100;
// price = 200;

// 3,letを使用して変数nameを宣言し、値を"John"として設定してください。その後、nameの値を"Mike"に変更してください。
// let name = "John";
// name = "Mike";
// // 4,letキーワードを使って変数isAvailableを宣言し、値をtrueとして設定してください。その後、isAvailableの値を反転させてください。
// let isAvailable = true;
// isAvailable = !isAvailable;
// // 5,letを使用してブロックスコープ内で変数messageを宣言し、値を"Hello"として設定してください。その後、ブロックの外でmessageにアクセスしてみて、値がどのようになるか確認してください。
// {
//   let message = "Hello";
//   console.log(message);
// }
// 1,変数scoreが80以上の場合、"合格です"と表示する条件分岐のコードを書いてください。
const score = 90;

if (score >= 85);
{
  console.log("合格です");
}
// 2,変数dayが"土曜日"または"日曜日"の場合、"週末です"と表示する条件分岐のコードを書いてください。
const day = "土曜日";

if (day === "土曜日" || day === "日曜日");
{
  console.log("週末です");
}
// 3,変数numが偶数の場合、"偶数です"と表示し、奇数の場合、"奇数です"と表示する条件分岐のコードを書いてください。
const num1 = 4;
if (num1 % 2 === 0) {
  console.log("偶数です");
} else {
  console.log("奇数です");
}
// 4,変数ageが18以上かつ変数isStudentがtrueの場合、"成人であり学生です"と表示し、それ以外の場合、"成人ですが学生ではありません"と表示する条件分岐のコードを書いてください。
const age2 = 20;
const isStudent = true;

if ((_age2) => 18 && isStudent) {
  console.log("成人であり学生です");
} else {
  console.log("成人であり学生ではありません");
}

// 5,変数fruitが"りんご"の場合は100円、"バナナ"の場合は150円、それ以外の場合は200円として、fruitの値に基づいて価格を表示する条件分岐のコードを書いてください。
const fruit = "りんご";
let price;
if (fruit === "りんご") {
  price = 100;
} else if (fruit === "バナナ") {
  price = 150;
} else {
  price = 200;
}
console.log(fruit + "の価格" + price + "円です");
