// ; 1,map関数の問題: 問題: 数字の配列が与えられた場合、各要素を2倍にして関数を実装してくださいmap。
// ; 解答１　正解
const numberArray = [1, 2, 3, 4, 5];
number = numberArray.map(function (value) {
  return value * 2;
});

console.log(numberArray);
console.log(number);

[1, 2, 3, 4, 5][(2, 4, 6, 8, 10)];

// Chat GPTの解答１
function doubleElements(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}
// 使用例
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleElements(numbers);
console.log(doubledNumbers); //　答え [2, 4, 6, 8, 10]

//   その他の問題
const values = [1, 5, 13, 24, 30];
const multiple = values.map((value) => value * 2);
console.log(multiple);
[1, 5, 13, 24, 30];
[2, 10, 26, 48, 60];

// ; 2,map関数の問題: 問題: 文字列の配列が与えられた場合、各文字列を大文字に変換する関数を実装してくださいmap。
// 解答２　正解
const array = ["cake", "chocolate", "chiffon", "tart"];
const arrayUppercase = array.map((value) => value.toUpperCase());
console.log(arrayUppercase);
["CAKE", "CHOCOLATE", "CHIFFON", "TART"];

// Chat GPTの解答２
function convertToUpperCase(arr) {
  return arr.map(function (str) {
    return str.toUpperCase();
  });
}

// 使用例
const strings = ["apple", "banana", "cherry"];
const uppercaseStrings = convertToUpperCase(strings);
console.log(uppercaseStrings); // 答え　["APPLE", "BANANA", "CHERRY"]

// Comment "文字列を大文字に変換するには「toUpperCaseメソッド"」を使用。=> [upper（上級・高層）case（場合）]
// mapメソッドと組み合わせることで、配列の要素を全て大文字に変換して配列を作成。

// ; 3,find関数の問題: 問題: 学生を表すオブジェクトの配列が与えられた場合、最高点を持つ学生を関数を使って見つけてくださいfind。
// 解答３

// const students = [
//     {name:'Alice', score:60},
//     {name:'jon', score:70},
//     {name:'noah', score:80},
//     {name:"leo",score:90}
// ];

// const getStudents = students.find(HighScore) = 90

// ; 4,map関数の問題: 問題: 数字の配列が与えられた場合、各数値の2乗を計算する関数を実装してくださいmap。
// 解答４  x ** y

// ; 5,find関数の問題: 問題: 文字列の配列が与えられた場合、最初に文字が「あ」で始まる文字列を関数を使って見つけてくださいfind。

// ; これらの問題は、map関数とfind関数の理解と使い方を確認するのに役立ちます。 ぜひ挑戦してみてください！
