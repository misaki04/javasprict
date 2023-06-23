// 1,配列 numbers が与えられています。配列の要素の合計値を求めるコードを書いてください。
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
// 2,配列 fruits に新しい要素 "banana" を追加するコードを書いてください。
const fruits = ["apple", "strawberry"];
fruits.push("banana");

console.log(fruits);
// 3,配列 animals の最後の要素を削除するコードを書いてください。
const animals = ["cat", "dog", "elephant"];
animals.pop();

console.log(animals);
// 4,配列 colors の要素数がいくつあるかを求めるコードを書いてください。
const colors = ["red", "blue", "green"];
const count = colors.length;
console.log(count);

// 5,配列 names の最初の要素を取得するコードを書いてください。
const names = ["Alice", "Bob", "Charlie"];
const firstElement = names[0];

console.log(firstElement);
