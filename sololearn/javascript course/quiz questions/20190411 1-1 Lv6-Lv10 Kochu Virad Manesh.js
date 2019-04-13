/**
 * Q1
 */
// var x = 1;
// for (var i = 0; i<10; i++) {
//     for (var j = 0; j >=2; j++) {//这个地方很阴险
//         for (var k = 0; k < 5; k++) {
//             x++;
//         }
//     }
// }
// console.log(x);//1

/**
 * Q3
 */
// let result = '';
// for (let i of "abcdef") {
//     result += i;
// }
// console.log(result); //abcdef

/**
 * Q4
 * typeof 运算符
 * Undefined	"undefined"
    Null	"object" (see below)
    Boolean	"boolean"
    Number	"number"
    String	"string"
    Symbol (new in ECMAScript 2015)	"symbol"
    Host object (provided by the JS environment)	Implementation-dependent
    Function object (implements [[Call]] in ECMA-262 terms)	"function"
    Any other object	"object"
 */
// var x = [2,3,1];
// console.log(typeof(x));//object

/**
 * Q5
 */
function func(a,b) {
    return a**b/b;
}
console.log(func(10,2));//50
var a = 10;
var b = 3;
var c = 2;
console.log(a**b);//1000