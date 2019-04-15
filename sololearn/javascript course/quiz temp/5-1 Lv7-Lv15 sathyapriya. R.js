/**
 * Q1
 */
var a = 2;
var c = console.log;
(function foo() {
    var a = 3;
    c(a);
})();
c(a);
//3 2

