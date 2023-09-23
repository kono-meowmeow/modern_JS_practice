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

/**
 * 分割代入
 */

// オブジェクトで通常の書き方
const myProfile = {
  name2: "Tom",
  age2: 3,
};
const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}歳です。`;
// 上記の書き方だと、myProfileの中身を取得するたびにmyProfileを書かないといけないので、プロパティが増えたときに面倒
console.log(message3);

// 分割代入を使うと、myProfileの中身を取得するときにmyProfileを書かなくてもいい
// const { プロパティ名1, プロパティ名2 } = オブジェクト名;
// プロパティ名は元のオブジェクトのプロパティ名と同じにする必要がある
const { name2, age2 } = myProfile;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);

// 配列で通常の書き方
const myProfile2 = ["Tom", 3];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// 上記の書き方だと、myProfileの中身を取得するたびにmyProfileを書かないといけないので、プロパティが増えたときに面倒
console.log(message5);

// 分割代入を使うと、myProfileの中身を取得するときにmyProfileを書かなくてもいい
// const [変数名1, 変数名2] = 配列名;
// 配列の場合は、順番に変数に代入される
const [name3, age3] = myProfile2;
const message6 = `名前は${name3}です。年齢は${age3}歳です。`;
console.log(message6);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => {
  return console.log(`こんにちは！${name}さん！`);
}
// 引数が渡された場合は、渡された値が使われる
sayHello("Tom"); // こんにちは！Tomさん！
// 引数が渡されなかった場合は、デフォルト値が使われる
// デフォルト値が設定されていない場合は、undefinedとなる（バグの原因になるので注意）
sayHello(); // こんにちは！ゲストさん！

/**
 * スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
// スプレッド構文で書くと、配列の中身を順番に展開してくれる
// ...配列名
console.log(...arr1); // 1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
// 通常の書き方
sumFunc(arr1[0], arr1[1]); // 3
// スプレッド構文で書くと、配列の中身を順番に展開してくれる
sumFunc(...arr1); // 3
// 復習：分割代入を使って書いてみる
const [num1, num2] = arr1;
sumFunc(num1, num2); // 3

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num3, num4, ...arr3] = arr2;
// 分割代入で、num3には配列の一番最初の値が、num4には配列の二番目の値が、arr3には残りの値が入る
console.log(num3); // 1
console.log(num4); // 2
// arr3はスプレッド構文を使っているので、arr2の残りの値が配列として入る
console.log(arr3); // [3, 4, 5]
// スプレッド構文で中身を確認すれば、配列の中身が順番に展開されていることがわかる
console.log(...arr3); // 3 4 5

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
// arr4の中身をarr6にコピーする
const arr6 = [...arr4];
console.log(arr6); // [10, 20]
// スプレッド構文を使うと、参照渡しではなく、値渡しになる
const arr11 = [...arr4];
arr11[0] = 100;
console.log(arr4); // [10, 20]
console.log(arr11); // [100, 20]
// 単純にコピーするだけなら、スプレッド構文を使わなくてもいい気がするが、参照渡しになるので、スプレッド構文を使ったほうがいい
const arr10 = arr4;
console.log(arr10); // [10, 20]
// ただし、arr4の中身を変更すると、arr10の中身も変更されてしまう
// arr10の中身を変更した場合も、arr4の中身も変更されてしまう
arr10[0] = 100;
console.log(arr4); // [100, 20]
console.log(arr10); // [100, 20]
// これは、arr4の中身をコピーしたのではなく、arr4の参照をコピーしただけなので、arr4の中身を変更すると、arr10の中身も変更されてしまう(逆も同様)
// これは、不具合の原因になる(参照渡しと呼ばれる)
arr4[0] = 10;
// スプレッド構文を使わなかった場合、配列の中に配列が入ってしまう
const arr7 = [arr4];
console.log(arr7); // [[10, 20]]
// arr4とarr5を結合する
const arr8 = [...arr4, ...arr5];
console.log(arr8); // [10, 20, 30, 40]
// スプレッド構文を使わなかった場合、配列の中に配列が入ってしまう
const arr9 = [arr4, arr5];
console.log(arr9); // [[10, 20], [30, 40]]

/**
 * mapやfilterを使った配列の処理
 */
// mapやfilterを使うことで、従来のfor文を使わなくても配列の中身を取得したり、条件に合うものだけを取得したりできる

const nameArr = ["田中", "山田", "鈴木"];
// 従来のfor文を使った書き方
// for (第一引数に何回目の処理を管理するindex, 第二引数にループから抜ける条件, 第三引数に一回の処理が終わるたびに行う処理) {処理}
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// mapを使った書き方
// mapは配列に対して使えるメソッド
// 第一引数に配列の要素、第二引数に配列のindex番号、第三引数に処理対象の配列
// 第二引数と第三引数は省略可能

// mapを使った結果をもとに、新しい配列を作成する
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); // ["田中", "山田", "鈴木"]

// mapを使って、配列の中身を順番に取得する
nameArr.map((name) => console.log(name)); // 田中 山田 鈴木
