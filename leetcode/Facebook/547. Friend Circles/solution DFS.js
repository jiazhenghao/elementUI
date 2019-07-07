/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    var visited = Array(M.length);
    visited.fill(0);
    var count = 0;
    for (let i = 0; i < M.length; i++) {
        if (visited[i] == 0) {
            dfs(M, visited, i);
            count++;
        }
    }
    return count;

    function dfs(M, visited, i) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j] == 1 && visited[j] == 0) {
                visited[j] = 1;
                dfs(M, visited, j);
            }
        }
    }
};
/* 
Runtime: 60 ms, faster than 98.20% 
of JavaScript online submissions for Friend Circles.
Memory Usage: 36.2 MB, less than 94.79%
*/