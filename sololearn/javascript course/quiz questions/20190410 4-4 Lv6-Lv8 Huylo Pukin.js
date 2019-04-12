/**
 * Q3
 */
function logic(a = 1, b = false) {
    var c = a && b;//fasle
    if (c) {
        let d = true;
    }
    else {
        let d = false;
    }
    return d;//因为let的作用域就是在括号里，所以退出了这个if-else模块，d就是未定义
}
//console.log(logic(0));// Uncaught ReferenceError: d is not defined 

/**
 * Q4
 * What is the return value of a confirm box if the user presses "Cancel";
 * //false;
 */

/**
 * Q5
 * 立方根 cbrt
 */
console.log(Math.cbrt(8));//2

