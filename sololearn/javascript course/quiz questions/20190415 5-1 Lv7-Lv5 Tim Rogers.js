/**
 * Q2
 * ceil 最小的整数，大于等于原始值
 * ceil 天花板
 */
var a = 0.4;
var b = 2.0;
var c = 5.0;
var price = (2 * a) + b + (3 * c);
var price = Math.ceil(price);
console.log(price);//18

/**
 * Q5
 * NaN + 数字 = NaN
 */
var a = 1;
var b = 2;
var c = a % 0;//NaN
console.log(a + b + c);//NaN