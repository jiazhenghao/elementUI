/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function (sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}
/*
Runtime: 64 ms, faster than 78.59% 
of JavaScript online submissions for Happy Number.
Memory Usage: 36.2 MB, less than 42.73% 
*/