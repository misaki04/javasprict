// 問題４ 時間を使って、指定された時間ごとに画面上の要素を直接させるコードを作成してください。

const element = document.getElementById("flashingElement");
const intervalInSeconds = 1;

const flashElement = () => {
  element.style.visibility =
    element.style.visibility === "hidden" ? "visible" : "hidden";
};

setInterval(flashElement, intervalInSeconds * 1000);
// 問題5 デバイスを使用して、指定された秒数が経過した後にページをリロードするコードを書いてください。
const seconds = 10;

setTimeout(() => {
  location.reload();
}, seconds * 1000);
