/**
 *  const, let 等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// Uncaught SyntaxError: Identifier 'val2' has already been declared

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";
// Uncaught TypeError: Assignment to constant variable.

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";
// Uncaught SyntaxError: Identifier 'val3' has already been declared

// constでオブジェクトを宣言する
const val4 = {
  name: "Tom",
  age: 3
};
console.log(val4);

// constで宣言したオブジェクトのプロパティを変えることができる
val4.name = "Jerry";
console.log(val4);

// constで宣言したオブジェクトに、新しいプロパティを追加することもできる
val4.address = "NY";
console.log(val4);

// constで配列を宣言する
const val5 = ['dog', 'cat'];
console.log(val5);

// constで宣言した配列のプロパティを変更することができる
val5[0] = "bird";
console.log(val5);

// constで宣言した配列に、新しいプロパティを追加することもできる
val5.push("meow");
console.log(val5);

// このように、オブジェクトや配列はconstで宣言しても変更ができる
// よって、Reactではほとんどをconstで宣言することになる
// 処理の中で上書きが必要な変数にはletを使う

/**
 * テンプレート文字列
 */

const name = "Tom";
const age = 3;
// 「私の名前はTomです。年齢は3歳です。」という文字列を表示したい

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);
// これだと結合の度に+を書かないといけないし、読みにくい

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
// バッククオート内の${}内に書かれたコードはJSのコードとして解釈される。

/**
 * アロー関数
 */

// 従来の関数
// function 関数名(引数) {処理}
function func1(str) {
  return str;
}
console.log(func1("func1です"));
// 変数に関数を入れることもできる
// const 関数名 = function(引数) {処理}
const func2 = function(str) {
  return str;
}
console.log(func2("func2です"));

// アロー関数
// const 関数名 = (引数) => {処理}
const func3 = (str) => {
  return str;
}
console.log(func3("func3です"));
// ※アロー関数の引数が一つのときは、()を書かなくてもいい
// ※アロー関数の処理が一行で終わるときは、{}とreturnを書く必要がない。ただし、{}で囲ったときはreturnで返さないといけない。
// したがって、下記のように書く事もできる
const func4 = str => str;
console.log(func4("func4です"));

// 二つの引数(数字)をとって、足した結果を返却する関数をアロー関数で書く
const func5 = (num1, num2) => {
  return num1 + num2
};
console.log(func5(10, 200));
// 下記の書き方をしても同じ結果を得ることができる
const func6 = (num1, num2) => num1 + num2;
console.log(func6(10, 200));
