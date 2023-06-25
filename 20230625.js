// 関数は引数として受け取った数値が偶数ならtrueを、奇数ならfalseを返すようになります。
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));

// 関数は引数として受け取った文字列が「apple」または「banana」の場合には"果物です"、
// それ以外の場合には"果物ではありません"というメッセージを返します。

function checkFruit(fruit) {
  if (fruit === "apple" || fruit === "banana") {
    return "果物です";
  } else {
    return "果物ではありません";
  }
}
console.log(checkFruit("apple"));
console.log(checkFruit("banana"));
console.log(checkFruit("orange"));
console.log(checkFruit("strawberry"));

// 関数は引数として受け取った数値が1以上10以下の範囲にある場合にはtrueを、
// それ以外の場合にはfalseを返すようになります。
function isInRange(number) {
  if (number >= 1 && number <= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isInRange(11));
console.log(isInRange(5));

// 関数は引数として受け取った数値が正の数ならその数を2倍にして返し、
// 負の数ならその数を3倍にして返します。
// ただし、0の場合には0を返します。

function multiplyNumber(number) {
  if (number > 0) {
    return number * 2;
  } else if (number < 0) {
    return number * 3;
  } else {
    return 0;
  }
}

console.log(multiplyNumber(4));
console.log(multiplyNumber(-7));
console.log(multiplyNumber(0));
console.log(multiplyNumber(10));

// 関数は引数として受け取った数値が3で割り切れるかどうかを判定し
// 割り切れる場合にはtrueを、割り切れない場合にはfalseを返します。
function isDivisibleByThree(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisibleByThree(9));
console.log(isDivisibleByThree(22));
console.log(isDivisibleByThree(33));

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMax([5, 2, 9, 1, 7]));
console.log(findMax([0, -1, -7, -3, -5]));
console.log(findMax([10, 4, 6, 8]));
