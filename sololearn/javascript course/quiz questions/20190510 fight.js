/**
 * 203 Q5
 */
var x = 4;
var y = 5;
var d = 4 + z;
console.log(d);//NaN
var z = y - x;
var c = x + z + d + y;
console.log(c);//NaN

/**
 * 206 Q2
 */
var a = [1, 2, 3, 4, 5];
var c = [];
c[0] = new Array(a);
console.log(a == c[0]);//false
a[c.length] = 3;
console.log(c[0]);//[[1, 3, 3, 4, 5]]
console.log(c[0].length);//1
console.log(a == c[0][0]);//true
console.log(a === c[0][0]);//true
var arr = new Array({x: 1});
console.log(arr);//[{x: 1}]

/**
 * 208 Q4
 */
var j = 0;
var k = j / 0; console.log(k);//NaN
var a = j + k; console.log(a);//NaN
var b = k / j; console.log(b);//NaN
var c = j / k; console.log(c);//NaN
var d = 1 / j; console.log(d);//Infinity
var e = 1 / k; console.log(e);//NaN

/**
 * 209 Q5
 * Choose all the correct examples below
 * which use quotes inside a string.
 */
var ans = "It's all right.";
let ttt = "He is called 'sd' joos";
var con = 'He is called "sd" joos';
console.log(ans, ttt, con);
//It's all right. He is called 'sd' joos He is called "sd" joos