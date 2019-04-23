/**
 * Q2
 */
const t = {
    val: 2
};
//t = 123; //Uncaught TypeError: Assignment to constant variable.
//但是对t引用的地址对应到的内存内容进行修改，并不会触发报错
const c1 = () => t.val += 1;
const c2 = () => t.val *= 2;
c2();
c1();
console.log(t.val);//5

/**
 * Q3
 */
var y = 0;
if (function f(){}) {
    console.log(123);
    y += typeof f;
}
console.log(y);
console.log(undefined == true);//false
console.log({} == true);//false
//console.log(f());//Uncaught ReferenceError: f is not defined

/**
 * Q4
 */
console.log(Boolean("0"));//true
console.log("0" == true);//false
console.log(0 == true);//false
var c = Boolean(); //false
var d = Boolean("s");//true
var e = Boolean(0);//false
