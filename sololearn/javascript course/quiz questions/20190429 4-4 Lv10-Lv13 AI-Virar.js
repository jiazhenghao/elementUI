/**
 * Q4
 */
let a = "() => 42";
console.log(typeof eval(a));//function
console.log(typeof eval(a)());//number