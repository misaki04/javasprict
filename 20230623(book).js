// book参照「関数を組み合わせて使用」
// メール作成　関数
let createMail = (recv, bill) => {
  let msg = `${recv}様
    PT企画の斉藤です。
    今月の請求額は${bill}円です。`;
  console.log(msg);
};

// 手数料の追加する関数
let addCharge = (bill) => {
  return bill * 1.07;
};

// 送付先データ
let data = [
  { name: "山本", bill: "40000", crg: true },
  { name: "吉田", bill: "25000", crg: false },
];

// メール作成実行
for (let rec of data) {
  let bill = rec["bill"];
  if (rec["ceg"]) {
    bill = addCharge(bill);
  }
  createMail(rec["name"], bill);
}

// ①関数定義を貼り付ける　メールを作る関数〜手数料を追加する関数
// ②データを貼り付ける　送付先データ
// ③新たに書く部分　メール作成実行

// createMail関数とaddCharge関数,変数dataに入れた配列&オブジェクト

//データの数だけ関数を呼び出す（for~or文）

for (let rec of data) {
  let bill = rec["bill"];
  if (rec["crg"]) {
    bill = addCharge(bill);
  }
  createMail(rec["name"], bill);
}

// 読み下し文
// 変数dataに所属する要素を、新規作成した変数recに順次に入れる間に、以下を繰り返せ
// { 変数recのプロパティ「bill」を、新規作成した変数billに入れろ。
//  もしも変数recのプロパティ「crg」が真なら以下を実行せよ
//  { 変数billを指定して手数料を追加し、変数billに入れろ。 }
//  変数recのプロパティ「name」と変数billを指定してメールを作成しろ。
// }

// 引数のデフォルト値を指定する
// 関数を定義する時に関数名の後ろに書く引数を仮引数、(recv)
// 関数を呼び出すときに実際に渡す引数を実引数 (boll)
// と呼んで、２つを区分する場合があります。
let createMail1 = (recv, bill) => {
  // ・・・中略・・・
};
createMail("山本");

// javascriptは仮引数と実引数の数が一致しなくても
// エラーは発生しない
// 上記のように呼び出し時に渡される引数が少なかった場合、
// 指定されなかった引数（ここでは仮引数bill)はundefinedになります。

// こえを避けるには、つぎのように代入文に似た形で仮引数のデフォルト値を指定します。

let createMail2 = (recv, bill = 0) => {
  //   ・・・中略・・・
};
