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

/**
 * 267 Q4
 */
var x = 6, y = 0;
y += ++x + "" + x;
console.log(y);//077

/**
 * 268 Q5
 */
var x = 32;
//alert("x - ${x}");//x - ${x}
console.log("x - ${x}");//x - ${x}
console.log(`x - ${x}`);//x - 32

/**
 * 270 Q1
 */
var str = "I am 16 years and 5 months old";
console.log(str.match(/\d+/));//["16", index: 5, input: "I am 16 years and 5 months old", groups: undefined]
console.log(str.match(/\d+/g));//["16", "5"]