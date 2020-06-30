'use strict';

console.log('Hello world from main.js!');

// ▶文字列
console.log('it's me!');
// シングルクオーテーションに注意
console.log("it's me!");
console.log('it\'s me!');
console.log('hel\nlo wor\tld');
console.log('hello' + 'world');

// ▶計算
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.333...
console.log(10 % 3); // 1
console.log(10 ** 3); // 1000
console.log(2 + 10 * 3); // 32
console.log((2 + 10) * 3); // 36

// ▶定数(const) 変更できない
const price = 150;
console.log(price * 140);
console.log(price * 160);

// ▶変数(let)
let price = 150;
console.log(price * 140);
console.log(price * 160);

// ▶変数を使った計算
let price = 500;

// price = price + 100;
price += 100; // 600

// price = price * 2;
price *= 2; // 1200

// price = price + 1;
// price += 1;
price++; // 1201

// price -= 1;
price--; // 1200

// ▶データ型
console.log(typeof 'hello'); //string
console.log(typeof 5); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object

// ▶数字からなる文字列
console.log('5' * 3);
console.log('5' - '3');
console.log('5' + 3); //53 連結になる
console.log(parseInt('5', 10) + 3);
parseInt(文字,10) 10進数に変換
console.log(parseInt('hello', 10));//error

// ▶比較演算子
console.log(price > 1000); // true
console.log(price < 1000); // false
console.log(price >= 1000); // true
console.log(price <= 1000); // false
console.log(price === 1000); // false
console.log(price !== 1000); // true

// false <- 0, null, undefined, '', false で出力される
// true <- それ以外で出力される

console.log(Boolean(0));
console.log(Boolean('hello'));

// ▶条件分岐
const score = 40;

// if (score >= 80) {
  console.log('Great!');
} else if (score >= 60) {
  console.log('Good.');
} else {
  console.log('OK...');
}

// ▶条件演算子
const score = 85;
score >= 80 ? console.log('Great!') : console.log('OK...!');
// →great

// ▶論理演算子
const score = 60;
const name = 'taguchi';
&& なおかつ（AND）
|| もしくは（OR）
! 〜ではない（NOT）
if (score >= 50 && name === 'taguchi') {
  console.log('Good job!');
}

// ▶switchで条件分岐
const signal = 'pink';

switch (signal) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green': 条件を二つにしたい場合caseを続けて書く
    console.log('Go!');
    break;
  default:
    console.log('Wrong signal!');
    break;
}

// ▶for文
for (let i = 1; i <= 10; i++) {
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`); hello 1 hello 2 hello 3 …
  // ${数値} テンプレートリテラル…数値を文字列に変換
  // バッククオート``は@の箇所にある
}

// ▶whileのループ処理

let hp = 100;
while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}

let hp = -50;
do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);
// do while文であれば条件を満たさなくても一度は表示される

// ▶continue,break
for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
  // if (i % 3 === 0) {
  //   continue;
  // }
  if (i === 4) {
    break;
  }
  console.log(i);
}
// continue スキップする 

// ▶関数
function showAd() {
  console.log('----------');
  console.log('--- Ad ---');
  console.log('----------');
}

showAd();
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd();

// ▶引数（constやletは必要ない）
function showAd(message = 'Ad') { // 仮引数
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header Ad'); // 実引数
console.log('Tom is great!');
console.log('Bob is great!');
showAd(); //showAD("AD")
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');

// ▶return
function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c; //return以降の処理は実行されない
  console.log(a + b + c);
}

// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
// console.log(total);

// ▶関数式
const sum = function(a, b, c) {
  return a + b + c;
}; // functionは無名関数、定数に代入しているだけなので「;」忘れずに

const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

// ▶アロー関数
const double = a => a * 2; // functionとreturnをすっ飛ばす
console.log(double(12));

// ▶スコープ
function f() {
  const x = 1;
  console.log(x);
}

f();
console.log(x); //xは表示されない

// ▶コードをブロックで囲っておこう
// 書いたコードをブロックで囲うとスコープを分けられる
{
  const x = 300;
  console.log(x);
}
{
  const x = 100;
  console.log(x);
}
