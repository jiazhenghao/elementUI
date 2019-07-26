/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var dirs = [[0,1], [1,0], [0,-1], [-1,0]];
    var m, n;
    
    if (matrix.length == 0) return 0;
    m = matrix.length; n = matrix[0].length;
    var cache = new Array(m);
    for (let i = 0; i < m; i++) {
        cache[i] = [];
        for (let j = 0; j< n; j++) { 
            cache[i].push(0);
        }
    }

    var ans = 0;
    for (let i = 0; i < m; i++) 
        for (let j = 0; j < n; j++)
            ans = Math.max(ans, dfs(matrix, i, j, cache));
    return ans;
    
    function dfs(matrix, i, j, cache) {
        if (cache[i][j] != 0) return cache[i][j];
        for (let d of dirs) {
            let x = i + d[0], y = j + d[1];
            if (0<=x && x < m && 0<=y && y < n && matrix[x][y] > matrix[i][j])
                cache[i][j] = Math.max(cache[i][j], dfs(matrix, x, y, cache));
        }
        return ++cache[i][j];
    }
    
};
/*
Runtime: 80 ms, faster than 89.51% 
Memory Usage: 39 MB, less than 64.94% 
*/