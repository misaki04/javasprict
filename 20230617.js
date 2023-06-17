// 問題１
// 変数xに数値10を代入し、変数yに数値5を代入してください。その後、xとyの合計をコンソールに表示するコードを書いてください。
let x = 10;
let y = 5;

console.log(x + y);

// 解答１　１5

// 問題２
// 配列[1, 2, 3, 4, 5]を定義し、その中の偶数のみをコンソールに表示するコードを書いてください。

const even = (array) => {
  return array
    .map((element, index) => {
      return index % 2 === 0 ? element : "";
    })
    .filter(Boolean);
};
const array = [1, 2, 3, 4, 5];
console.log(even(array));

// 解答２　「１、３、５」

// 問題３
// "Hello, World!"という文字列を逆さまにして表示するコードを書いてください。
const str = "Hello,World";

const result = str.split("").reverse().join("");

console.log(result);

// 解答３　dlroW,olleH

// 問題４
// 1から10までの数字を順番に表示するループを作成し、その中で3の倍数のときには"Fizz"、5の倍数のときには"Buzz"、3と5の倍数のときには"FizzBuzz"を表示するコードを書いてください。
for (let i = 1; i <= 10; i++) {
  if (i % 15 === 0) {
    console, log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
// 解答４
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
