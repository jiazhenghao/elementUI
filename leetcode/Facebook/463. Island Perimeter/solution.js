/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                count+=4;
                if (j + 1 < grid[i].length && grid[i][j + 1] == 1) count--;
                if (j - 1 >= 0 && grid[i][j - 1] == 1) count--;
                if (i + 1 < grid.length && grid[i + 1][j] == 1) count--;
                if (i - 1 >= 0 && grid[i - 1][j] == 1) count--;
            }
        }
    }
    return count;
};
/*
Runtime: 152 ms, faster than 99.60% 
Memory Usage: 44 MB, less than 60.97% 
*/