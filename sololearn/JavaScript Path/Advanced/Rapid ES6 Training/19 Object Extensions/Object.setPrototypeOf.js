let a = { a: 1 }, b = { a: 5, b: 2 }, c = { c: 20 };
Object.setPrototypeOf(b, c);
console.log(b); //{ a: 5, b: 2 }
console.log(b.c);//20
let target = {};
Object.assign(target, a, b);
console.log(target);//{ a: 5, b: 2 }
//assign do not walk throught the prototype chain
