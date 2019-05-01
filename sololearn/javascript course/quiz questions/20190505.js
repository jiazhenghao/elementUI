/**
 * 151 Q1
 */
var first = function (a, b) {
    return a + b;
};
var second = first.bind(null, "learn");
console.log(second("solo"));//learnsolo

/**
 * 152 Q3
 */
var a = 1;
var b = 1;
var c = 1;
while (c != 3) {
    a += 2.5 + b + c;
    ++b;
    ++c;
}
console.log(a / 3);

/**
 * 156 Q3
 */
console.log(17 / 2);//8.5
console.log("2" * "4" - Number(17/2));//-0.5

/**
 * 160 Q2
 * funcs包含了5个函数。
 * 但如果不用let y = i；
 * 直接log i 则是5个5.
 */
var funcs = [];
for (var i = 0; i < 5; ++i) {
    let y = i;
    funcs.push(function() {
        console.log(y);
    });
}
funcs.forEach(function (func) {
    func();
});// 0 1 2 3 4
console.log(funcs);

