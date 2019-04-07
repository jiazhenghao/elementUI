/**
 * Q1
 * Which are valid variable names?
 * 变量名和函数都不能以数字开头
 * 可以下1.划线_ 2.字母 3.$开头
 * 不能用特殊字符，比如#，&
 */

/**
 * Q3
 * What is the output of this code?
 */
(function (n) {
    console.log("Hello" + n);
})(1);//Hello1
//这是自执行函数的写法

/**
 * Q4
 * What is the output of this code?
 */
var a1 = new Array('1', '2', '3');
var a2 = new Array(1, 2, 3);
console.log(a1 == a2);//false

/**
 * Q5
 * What is the output of this code?
 */
var man = [8,6,7];
man.pop();
console.log(man[2]);//undefined
//pop代表把数组最后一个元素remove，并返回这个元素。
