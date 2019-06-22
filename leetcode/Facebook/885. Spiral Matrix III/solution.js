/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    let dr = [0, 1, 0, -1];
    let dc = [1, 0, -1, 0];
    let ans = new Array(R * C);

    let t = 0;
    ans[t++] = [r0, c0];

    if (R * C == 1) return ans;
    
    for (let k = 1; k < 2 * (R + C); k+=2) {
        for (let i = 0; i < 4; i++) { // i: direction index
            let dk = k + Math.trunc(i / 2); // number of steps in this direction
            for (let j = 0; j < dk; j++) { // for each step in this direction...
                // step in the i-th direction
                r0 += dr[i];
                c0 += dc[i];
                if (0 <= r0 && r0 < R && 0 <= c0 && c0 < C) {
                    ans[t++] = [r0, c0];
                    if (t == R * C) return ans;
                }
            }
        }
    }
};
/*
Runtime: 96 ms, faster than 98.73% 
of JavaScript online submissions for Spiral Matrix III.
Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix III.
*/