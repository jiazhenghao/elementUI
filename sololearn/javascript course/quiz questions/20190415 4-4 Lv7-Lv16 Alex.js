/**
 * Q3
 * 执行foo()，返回的是bar函数，故为10
 */
function foo() {
    var a = 2;
    function bar(a) {
        return a * 2;
    }
    return bar;
}

console.log(foo()(5));
