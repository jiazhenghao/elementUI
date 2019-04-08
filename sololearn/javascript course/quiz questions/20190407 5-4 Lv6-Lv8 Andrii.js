/**
 * Q1
 * What is the output of this code?
 */
let add = (x, y) => {
    return x + y;
}
let sub = (x, y) => {
    return x - y;
}
let calc = (x, y, fun) => {
    return fun(x, y);
}
console.log(calc(9, -1, add));//8

/**
 * Q3
 * What is the output of this code?
 */
console.log("".concat(null));//null

/**
 * Q4
 * What is the output of this code?
 */
var a = 50;
function myfunc() {
    let a = 5;
    return a;
}
myfunc();
console.log(a);//50
