// 問題１
const age = 29;

if (age >= 20) {
  console.log("成人");
} else {
  console.log("未成年");
}
// 問題２
let number = 10;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("Zero");
}
// 問題３

let language = "Python";

if (language === "javaScript") {
  console.log("I love JavaScript!");
} else if (language === "Python") {
  console.log("I enjoy Python!");
} else {
  console.log("I don't know that language.");
}
// 問題４

let num1 = 5;
let num2 = 7;

if (num1 > num2) {
  console.log("num1が大きい");
} else if (num2 > num1) {
  console.log("num2が大きい");
} else {
  console.log("同じ値");
}
// 問題５
let day = "月曜日";

if (day === "土曜日" || day === "日曜日") {
  console.log("週末です！");
} else {
  console.log("平日です");
}
