/**
 * Q3
 * 当在函数体内部定义了又一个var x，这时候的x是局部变量。如果y出现之前，x未定义值，则y就使用传参进来的x
 * 反之，则用局部的x
 * 但函数f永远用的是传参的x
 */
var r = (function (x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return (x + y + f());

})(1);
console.log(r);//2 + 1 + 1
var rr = (function (x, f = () => x) {
    var x;
    x = 10;
    var y = x;
    return (x + y + f());
})(1);
console.log(rr);//10 + 10 + 1
var rrr = (function (x, f = () => x) {
    //var x;
    x = 10;
    var y = x;
    return (x + y + f());
})(1);
console.log(rrr);//10 + 10 + 10