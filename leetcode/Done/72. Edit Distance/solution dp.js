/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    var n = word1.length;
    var m = word2.length;

    // if one of the strings is empty
    if (n * m == 0)
        return n + m;

    // array to store the convertion history
    var d = [];
    for (let i = 0; i < n + 1; i++) {
        d.push([]);
        for (let j = 0; j < m + 1; j++) {
            d[i].push(0);
        }
    }
    // console.log(d);
    // init boundaries
    for (let i = 0; i < n + 1; i++) {
        d[i][0] = i;
    }
    for (let j = 0; j < m + 1; j++) {
        d[0][j] = j;
    }

    // DP compute 
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < m + 1; j++) {
            let left = d[i - 1][j] + 1;
            let down = d[i][j - 1] + 1;
            let left_down = d[i - 1][j - 1];
            if (word1[i - 1] != word2[j - 1])
                left_down += 1;
            d[i][j] = Math.min(left, Math.min(down, left_down));
        }
    }
    return d[n][m];
};
/*
Runtime: 72 ms, faster than 98.11% 
Memory Usage: 41.3 MB, less than 46.43%
*/

