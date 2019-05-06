/**
 * 273 Q5
 */
Obj = () => this;
let a = Obj();
console.log(a);//Window
let b1 = (a == Obj()), b2 = (a === Obj());
console.log(b1, b2);//true true

/**
 * 
 */
var arr = Number(300, 200);
console.log(arr);//300
console.log(arr.length);//undefined
