/**
 * Q3
 * 这个题目非常好，当 || 的第一个条件就是true了以后，后面一个就不执行了。
 * 非常有用的知识点
 */
var a = 10;
var b = 11;
var c;
if (!(a++ >= 10 || b++ >= 11)) {
    c = a + b;
    console.log(a + '' + c);
}
else {
    console.log(a + '' + b);//1111
}
console.log(a);//11
console.log(b);//11
console.log(c);//undefined

/**
 * Q5
 * 纯看眼力了
 */
let abc = new Set();
abc.add(1).add(2).delete("1");
console.log(abc.has(1));//true
