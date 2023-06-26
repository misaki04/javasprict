// 問題１,タイマーを使用して1秒ごとにメッセージをコンソールに表示するコードを書いてください。

setInterval(() => {
  console.log("メッセージ");
}, 1000);

// setInterval（）　指定した時間で繰り返し処理をするための命令

// 問題２,タイマーを使用して、指定された秒数が経過した後に特定の関数を実行す
const executeAfterDelay = (delay, callback) => {
  setTimeout(callback, delay * 1000);
};

// 使用例
executeAfterDelay(5, () => {
  console.log("5秒経過しました");
});

// executeAfterDelay（）

// ボタンをクリックするたびに、タイマーをリセットして10秒からカウントダウンするコードを書いてください。
let timer;
let remainingSeconds = 10;

const countdown = () => {
  console.log(remainingSeconds);
  remainingSeconds--;

  if (remainingSeconds < 0) {
    clearInterval(timer);
    console.log("カウントダウン終了");
  }
};

const resetTimer = () => {
  clearInterval(timer);
  remainingSeconds = 10;
  timer = serInterval(countdown, 1000);
};

// ボタンクリック時のイベントハンドラー
document.getElementById("starButton").addEventListener("click", resetTImer);
