/**
 * Q1
 * What is the output of this code?
 */
// var x = 1;
// var y = x + x++;
// console.log(y);// x is 1, 1 + 1 = 2,y is 2, x is 2;

/**
 * Q2
 * What is the output of this code?
 */
// function x(y) {
//     return (y < 6) && (y > 5);
// }
// document.write(x(2));//false

/**
 * Q3
 * Is the code below valid?
 */
// $a = 5;
// alert($a);//Yes
//变量名可以 1.划线_ 2.字母 3.$开头

/**
 * Q4
 * How many times will this loop run?
 */
// var x = 7;
// var y = 3;
// do {
//     console.log("hello world");
// } while (y >= x);//1 次

/**
 * Q5
 * What will be printed?
 */
function MyClass() {
    this.valueOf = function () {
        return false;
    }
}
var hello = new MyClass();
console.log(hello === false);//false;
if (hello) {
    console.log(true);
}
else {
    console.log(false);
}//true;
/**
 * 首先，hello是一个函数的实例，所以跟布尔false肯定不是一回事。
 * 其次，如果一个函数判断真假，就是真的。比如如下代码
 */

function test() {
    console.log("Do Nothing");
}
var ins = new test();
if (ins) {
    console.log("秀一秀");
}