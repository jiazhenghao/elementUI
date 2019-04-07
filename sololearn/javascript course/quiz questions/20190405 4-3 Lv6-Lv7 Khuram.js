/**
 * Q1
 * Choose the corresponding value of x so the code outputs true.
 */
// var x = -4;
// console.log(x > -5 && x < -3 && x!= 0);//true;

/**
 * Q2
 * What is the output of this code?
 */
// var x = 1;
// for (;x < 5;x++) {
//     x += x;
//     //console.log(x); //2 6 
// }
// console.log(x);//1+1=2,then 3; second loop, 3+3=6,then7, break loops;

/**
 * Q3
 * What is the output of this code?
 */
//var x = "Programming";
//var z = x.substr(0, 6) + x.charAt(6).toUpperCase() + x.charAt(7).toUpperCase() + x.substr(8);
//console.log(z);//PrograMMing
/**
 * Programming
 * 012345678910
 * substr(0, 6) 第一个参数表示从哪里开始，第二个参数表示长度。Progra
 * MM
 * ing
 */

/**
 * Q4
 * What is the output of this code?
 */
function a() {
    var a = 10;
    return function() {
        var b = a * a;
        return b;
    }
}
console.log(a()());//100
//这就是JavaScript的闭包closure

/**
 * Q5
 * What is the output of this code?
 */
var x=9;
var y = x++;
console.log(++x * y);// x is 9, y is 9, x is 10; then x is 11; so 99
