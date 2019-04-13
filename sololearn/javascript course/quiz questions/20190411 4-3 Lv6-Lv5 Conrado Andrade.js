/**
 * Q1
 */
var n = typeof null;
var o = typeof {};
if (n === o) {
    console.log(1);
}
else {
    console.log(0);
}//1,因为null，数组，对象都是对象，函数是函数。未定义是未定义。

/**
 * Q3
 */
function f(p) {
    return p.x / p.y;
}
console.log(f({y:2,x:8}));//4


