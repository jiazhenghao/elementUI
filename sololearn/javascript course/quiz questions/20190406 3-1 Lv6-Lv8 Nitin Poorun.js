/**
 * Q1
 * What is the output of this code?
 */
// var x = 1;
// for (var i = 0; i < 6; i++) {
//     x += i;
// }
// console.log(x);//1+0+1+2+3+4+5 = 16

/**
 * Q2
 * What will the func('abra') return?
 */
function func(str) {
    var len = str.length;
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            //console.log(str[i], str[len -1-i]);//b r
            return false;
        }
    }
    return true;
}
/*
console.log(Math.floor(3.5));//3
console.log(Math.round(3.5));//4
console.log(Math.ceil(3.5));//4
console.log(Math.floor(3));//3
console.log(Math.round(3));//3
console.log(Math.ceil(3));//3
*/
func('abra');//false
/**
 * 第一轮都是a，第二轮是b r
 */

/**
 * Q3
 * What is the output of this code?
 */
function slices() {
    return "SoloLearn".slice(5, -1);
}
console.log(slices());
/**
 * SoloLearn
 * 012345678
 * slice函数第一个参数表示从下标号为5，即e开始。
 * 第二个参数表示从哪里end。
 * -1就是n不要了。
 * 故答案是ear
 */
console.log("SoloLearn".slice(-5, -1));
//Lear

/**
 * Q4
 * What is the output of this code?
 */
var x = 8;
var y = 2;
x -= y;
y = x / y;
console.log(y);// x is 6, y is 6 / 2 = 3

/**
 * Q5
 * What is the output of this code?
 */
var foods = ["pizza", , "sandwich", , "soup"];
console.log(foods.length);//5

