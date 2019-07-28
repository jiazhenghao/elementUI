let amount = NaN;
let d = NaN;
console.log(Object.is(amount, d));  //true
console.log(amount === amount);     //false

let a = 0, b = -0;
console.log(a === b); //true
console.log(Object.is(a, b)); //false

