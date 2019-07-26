/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length == 0) return 0;
    var vertical = grid.length;
    var horizntal = grid[0].length;

    var islands = 0;
    for (let i = 0; i < vertical; i++) {
        for (let j = 0; j < horizntal; j++) {
            if (grid[i][j] == '1') {
                grid[i][j] = '3';
                findAnIsland(i, j);
                islands++;
            }
        }
    }
    return islands;
    function findAnIsland(row, col) {
        //往右边
        if (col + 1 < horizntal && grid[row][col + 1] == '1') {
            grid[row][col + 1] = '2';
            findAnIsland(row, col + 1);
        }
        //往下面
        if (row + 1 < vertical && grid[row + 1][col] == '1') {
            grid[row + 1][col] = '2';
            findAnIsland(row + 1, col);
        }
        //往左边
        if (col - 1 >= 0 && grid[row][col - 1] == '1') {
            grid[row][col - 1] = '2';
            findAnIsland(row, col - 1);
        }
        //往上边
        if (row - 1 >= 0 && grid[row - 1][col] == '1') {
            grid[row - 1][col] = '2';
            findAnIsland(row - 1, col);
        }
    }
};


/*
Runtime: 56 ms, faster than 97.77% 
of JavaScript online submissions for Number of Islands.
Memory Usage: 37.4 MB, less than 82.34%
*/
