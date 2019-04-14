/**
 * Q1
 * 做了三次循环，有点复杂的。
 */
// var x = 125;
// var sum = 0;
// while (x > 0) {
//     sum += x % 10;  //sum 5 + 2 + 1
//     x = (x - x % 10) / 10; //125-5=120/10 =12  12-2 / 10 = 1 1-1/10 = 0
// }
// console.log(sum);//8

/**
 * Q4
 */
var mixNumArr = ['80', '9', 29, 5];
function _func(a, b) {
    return a - b;
}
console.log(mixNumArr.sort(_func));//[5, "9", 29, "80"]

/**
 * Q5
 * x = 0, 0 / 0 不行的
 */
var x = 1;
console.log(isNaN(--x / x));//true;
//console.log(0/0);//NaN