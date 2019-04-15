/**
 * Q1
 */
var num = 44, sum = "42";
if (typeof num === typeof sum) {
    console.log(num - sum);
}
else {
    console.log(num % 4 + sum);//0+"42"
}
//042

/**
 * Q2
 * the following code is valid.
 * 对于const，你改变指向的函数、对象、数组的内容，是可以的。其实就是这个内存地址并没有改变。
 */
const arr = [1, 2];
arr.push(3);
//arr = {};这是报错的。

