// for文

// 問題1：
// 1から10までの整数を順に出力するforループを作成してください。

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 問題2：
// 10から1までの整数を逆順に出力するforループを作成してください。

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 問題3：
// 0から20までの偶数のみを出力するforループを作成してください。
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 問題4：
// 1から100までの整数の合計を計算し、結果を出力するforループを作成してください。
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 += i;
}
console.log(sum1);

// 問題5：
// 配列numbersに格納された数値を順に出力するforループを作成してください。
const numbers = [5, 10, 15, 20, 25];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
