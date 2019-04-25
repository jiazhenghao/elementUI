/**
 * Q2
 * 0 - 1 = -1
 */
var x = -1;
var y = ++x;
console.log(y++ - ++x);//-1

/**
 * Q3
 */
function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
test();//undefined 2
