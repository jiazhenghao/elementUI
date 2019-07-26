/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var ans = [];
    if (matrix.length == 0) return ans;
    var r1 = 0, r2 = matrix.length - 1;
    var c1 = 0, c2 = matrix[0].length - 1;
    while (r1 <= r2 && c1 <= c2) {
        for (let c = c1; c <= c2; c++) ans.push(matrix[r1][c]);
        for (let r = r1 + 1; r <= r2; r++) ans.push(matrix[r][c2]);
        if (r1 < r2 && c1 < c2) {
            for (let c = c2 - 1; c > c1; c--) ans.push(matrix[r2][c]);
            for (let r = r2; r > r1; r--) ans.push(matrix[r][c1]);
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return ans;
};
/*
Runtime: 44 ms, faster than 98.31% 
of JavaScript online submissions for Spiral Matrix.
Memory Usage: 33.8 MB, less than 53.40%
*/