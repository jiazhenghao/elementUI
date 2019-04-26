/**
 * Q1
 */
let foo = () => {
    var foo;
};
if (typeof foo === typeof foo()) {
    console.log(1);
}
else {
    console.log(7);
}
foo();
console.log(foo());//undefined
