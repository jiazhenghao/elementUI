/**
 * Q2
 * 函数内，先找有没有x，没的话，再去外面，里面有了，就不会去外面找。
 */
var x = 8;
function y(x) {
    x = x +2;
    return x;
}
x = x-y(2); //8-4
console.log(x);//4

/**
 * Q4
 * 注意ES6的新写法``，其表示的是里面是字符串文本，除非遇到${}
 */
let res = `ab + ${1 + 2}`;
console.log(res);// ab+3;

/**
 * Q5
 * Javascript支持按位运算操作符
 */