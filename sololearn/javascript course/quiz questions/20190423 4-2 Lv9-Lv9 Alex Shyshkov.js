/**
 * Q5
 * return value:
 * The object that was passed to the function.
 */
const foo = Object.freeze({});
foo.prop = 123;
console.log(foo.prop);//undefined
console.log(foo);//{}
