/**
 * 133 Q4
 */
let arr = Array.from(new Array(5), (val, index) => index % 2);
console.log(arr);//[0, 1, 0, 1, 0]
//How to use Array.from 
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]

/**
 * 135 Q5
 */
console.log("" == 0);//true
console.log(" " == 0);//true
console.log(" d" == 0);//false
console.log("Z" > "D");//true

/**
 * 136 Q4
 */
var num = 5.489.toFixed(2);
console.log(num);//5.49

/**
 * 138 Q4
 * 严格模式下，不能用arugments对str进行赋值
 */
function foo(str) {
    arguments[0] = "Hello";
    return str;
}
function bar(str) {
    "use strict";
    arguments[0] = "World";
    return str;
}
console.log(foo("hello") + " " + bar("world"));//Hello world

/**
 * 140 Q3
 */
var f = function g() {return 23;};
console.log(typeof f);//function
console.log(typeof f());//number
//console.log(typeof g());Uncaught ReferenceError: g is not defined
console.log(typeof g);//undefined

