/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m == 1 || n == 1) return 1;
    var CTop = Math.min(m - 1, n - 1);
    var CBot = m - 1 + n - 1;
    var res = 1;
    var divide = 1;
    for (let i = 1, j = CBot; i <= CTop; i++ , j--) {
        divide *= i;
        res *= j;
    }
    return res / divide;
};
/*
Runtime: 48 ms, faster than 95.92% 
of JavaScript online submissions for Unique Paths.
Memory Usage: 33.7 MB, less than 96.69%  
*/