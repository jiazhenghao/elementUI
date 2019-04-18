/**
 * Q1
 */
const mul = x => y => x * y;
const res = mul(2)(5);
console.log(res);

var mul2 = function(x) {
    return function(y) {
        return x * y;
    }
}
console.log(mul2(2)(5));


