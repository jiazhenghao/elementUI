/**
 * Q1
 */
//console.log(Math.PI.toFixed(2));//3.14

/**
 * Q2
 */
// var a = true;
// var b = false;
// if (a && b) {
//     console.log('a');
// }
// else {
//     console.log('b');
// }//b

/**
 * Q3
 */
// var x = { age: 24 };
// var y = x;
// var z = { age: 24 };
// console.log(y !== (x !== z));// x!==z 当然是true； 对象和boolean 当然也是不等的
// //true;

/**
 * Q4
 */
// let a = "()=> 42";
// console.log(typeof eval(a)()); //number

/**
 * Q5
 */
var a = [1,2,3,4,5];
var b = [1,2,3,4,5];
// var c = (a.splice() == b.slice());
// console.log(c);//false
console.log(a.splice()); //[] 返回空数组
console.log(b.slice());//[1, 2, 3, 4, 5] 