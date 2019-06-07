/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let result = 1;
    if (n == 0) {
        return 1;
    }
    if (x == 1) {
        return 1;
    }
    if (x == -1) {
        if (Math.abs(n) % 2 == 1)
            return -1;
        else
            return 1;
    }

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            result *= x;
        }
        return result;
    }
    if (n < 0) {
        n = n * (-1);
        for (let i = 1; i <= n; i++) {
            result *= x;
        }
        return 1 / result;
    }
};

/*
Runtime: 4504 ms, faster than 11.01% 
Memory Usage: 35.9 MB, less than 5.04%
*/

