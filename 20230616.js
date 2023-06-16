// /問題1:
// 以下のコードの実行結果は何でしょうか？
// console.log(5 + "2");
// 解答１(52);
// ヒント:JavaScriptでは、+ 演算子は数値の加算と文字列の結合の両方に使用できます。
// しかし、演算子の優先順位により、文字列の結合が優先されます。

// 問題2:
// 次のコードを実行すると、どのような出力が得られますか？
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 解答２
// 5
// 5
// 5
// 5
// 5

// 問題3:
// 次のコードを実行すると、どのような結果が得られますか？
console.log(typeof null);
// 解答３
//object

// 問題4:
// 次のコードを実行すると、どのような結果が得られますか？
console.log("hello".length);
// 解答4
// 5

// 問題5:
// 以下のコードを実行すると、どのような結果が得られますか？
console.log(2 === "2");
// 解答5
// false
