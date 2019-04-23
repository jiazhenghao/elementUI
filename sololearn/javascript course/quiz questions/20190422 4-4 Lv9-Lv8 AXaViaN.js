/**
 * Q4
 */
var a, b, c, d;
b = a;
c = a + b;
d = c - a;
console.log(d == b);//false
console.log(a);//undefined
console.log(b);//undefined
console.log(c);//NaN
console.log(d);//NaN
console.log(undefined == undefined);//true
console.log(NaN == NaN);//false
console.log(undefined == NaN);//false
console.log(a == b); //true
console.log(a === b);//true