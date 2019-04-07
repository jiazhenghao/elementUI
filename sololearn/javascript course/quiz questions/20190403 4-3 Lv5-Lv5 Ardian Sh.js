/**
 * Q1
 * What is the extension of JavaScript source files?
 * .js
 */

/**
 * Q2
 * What will be alerted?
 */
// var x = "3";
// var y = 4;
// var z = (x + y) * (y % x);
// console.log(++z);//34 * 1 + 1 = 35

/**
 * Q3
 * What is the output of the following code?
 */
// var x = 5;
// var y = x++;
// console.log(x++ + y--);// 6 + 5 = 11

/**
 * Q4
 * What is the output of this code?
 */
// var x, y, z;
// x = 5;
// z = 6;
// function test(a, b, c=3) {
//     return a * b * c;
// }
// console.log(test(x,z,y));//5*6*3= 90

/**
 * Q5
 * Which of these is true about these two objects?
 */
let obj1 = {};
let obj2 = {};
Object.freeze(obj1);
Object.seal(obj2);
/**
 * 新的属性都不能添加进去了，但是seal过的obj2还可以修改属性值
 */
