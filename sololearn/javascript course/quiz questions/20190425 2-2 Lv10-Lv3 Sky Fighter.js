/**
 * Q2
 */
function abc(a) {
    return (function (y) {
        return y + 1;
    })(++a) + a;
}
console.log(abc(2));//4 + 3 = 7
// var i = 3;
// console.log(++i + i);//8
// var j = 3;
// console.log(j + ++j);//7
// var k = 3;
// console.log(k + k++);//6
// var h = 3;
// console.log(h++ + h);//3 + 4 = 7

