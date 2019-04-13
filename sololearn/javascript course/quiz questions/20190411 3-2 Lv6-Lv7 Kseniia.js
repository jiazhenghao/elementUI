/**
 * Q1
 * console.log(typeof []);//object,但这个object是一个字符串
 */
console.log(typeof typeof []);//string

/**
 * Q4
 * 
 */
// var str = 'i love sololearn!';
// var x = -5;
// console.log(str.slice(--x));//learn!
// console.log(str.slice(2, 5));//lov

/**
 * Q5
 */
let a = 1;
let b = Infinity;
let c = 0;
let x = (a / b) == c;
console.log(x);//true;
let y = (a / c) == b;
console.log(y);//true;
const z = x == y;
console.log(z);//true;
console.log(1 / 0);//Infinity