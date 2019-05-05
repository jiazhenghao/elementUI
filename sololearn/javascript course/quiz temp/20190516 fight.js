/**
 * 265 Q4
 */
// var a = null;
// var b = ++a;
// var c = a + b;
// for (i = c; i < 5; i++) { }
// console.log(i - c);//3
// console.log(i);//5
// console.log(a, b, c);//1 1 2

/**
 * 266 Q1
 */
// let obj = {
//     1:0,
//     0:1
// };
// console.log(obj[1]);//0
// console.log(obj['1']);//0

/**
 * 266 Q5
 * 太阴险了！！！
 */
var a = undefined;
var b = a;
console.log(a == b);//true
console.log(undefined == undefined);//true
console.log(null == null);//true
var c, d = "undefined";
console.log(Number(c == d));//0
console.log(typeof c);//undefined
console.log(typeof d);//string
console.log(c);//undefined

