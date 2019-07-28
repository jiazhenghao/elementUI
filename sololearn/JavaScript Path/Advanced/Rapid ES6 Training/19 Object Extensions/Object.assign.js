// let a = { a: 1 }, b = { b: 2 };
// let target = {};
// Object.assign(target, a, b);
// console.log(target);
// // { a: 1, b: 2 }

let a = { a: 1 }, b = { a: 5, b: 2 };
let target = {};
Object.assign(target, a, b);
console.log(target);
// { a: 5, b: 2 }
