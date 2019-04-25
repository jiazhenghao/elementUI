/**
 * Q3
 * Uncaught ReferenceError: a is not defined
 */
"use strict";
function foo() {
    a = 1;
}
foo();
console.log(a);
