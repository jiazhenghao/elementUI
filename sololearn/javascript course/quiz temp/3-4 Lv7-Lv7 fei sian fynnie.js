/**
 * Q3
 * 就是把326拆开来，3，2，6
 */
// var x = 326;
// var prod = 1;
// while (x > 0) {
//     prod *= x % 10;         // 6  * 2 * 3
//     x = (x - x % 10) / 10;  // 32 , 3,  0
// }
// console.log(prod);//36

/**
 * Q5
 * delete用于删除一个对象的某个属性。delete obj.property
 * 在严格模式下，直接delete一个变量，就报语法错误。
 * 在非严格模式下，直接delete一个变量，就返回错误。
 */
// (function(x) {
//     delete x;
//     document.write(x);
// })(1);
