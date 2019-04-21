/**
 * Q2
 * NaN永远不会等于另一个NaN
 */
var x = 1;
var y = "Hello!";
x = Math.pow(y, 2);
y = x;
//console.log(y);//NaN
//console.log(Math.pow(16,2));//256
if (x == y)
    console.log("true");
else 
    console.log("false");
console.log(NaN == NaN);//false
