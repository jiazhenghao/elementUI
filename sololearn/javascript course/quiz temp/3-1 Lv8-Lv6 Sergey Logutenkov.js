/**
 * Q3
 * JavaScript numbers are always stored as double precision floating point numbers.
 */

/**
 * Q5
 */
function addBin(a, b) {
    var sum = a + b;
    var res = "";
    while (sum > 0) {
        res = sum % 2 + res;
        sum = Math.floor(sum / 2);
    }
    return res;
}
console.log(addBin(2, 5));//111
/**
 * 第一次循环，res = "1", sum = 3
 * 第二次循环，res = "11", sum = 1;
 * 第三次循环，res = "111", sum = 0;
 */