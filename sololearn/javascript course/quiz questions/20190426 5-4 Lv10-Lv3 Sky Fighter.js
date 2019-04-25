/**
 * Q1
 * 是y，不是x
 */
var x = 8;
var y = 4;
x += y;
x /= y;
console.log(y);//4

/**
 * Q4
 */
let a = "10";
let b = Array.from(a).length;//2
console.log(b);
console.log(Array.from("1010"));//["1", "0", "1", "0"]
