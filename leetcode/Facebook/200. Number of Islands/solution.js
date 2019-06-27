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
    var vertical = grid.length;//4
    var horizntal = grid[0].length;//5
    //console.log(vertical, horizntal );
    //改动grid
    //加最后一列
    for (let i = 0; i < vertical; i++) {
        grid[i].push('0');
    }
    //加最后一行
    grid.push([]);
    for (let i = 0; i < horizntal; i++) {
        grid[vertical].push('0');
    }
    //加第一列
    for (let i = 0; i < vertical; i++) {
        grid[i].unshift('0');
    }
    //加第一行
    grid.unshift([]);
    for (let i = 0; i < horizntal; i++) {
        grid[0].push('0');
    }

    console.log(grid);
    var islands = 0;
    for (let i = 1; i <= vertical; i++) {
        for (let j = 1; j <= horizntal; j++) {
            if (grid[i][j] == '1') {
                grid[i][j] = '3';
                findAnIsland(i, j);
                islands++;
            }
        }
    }
    console.log(grid);
    return islands;
    function findAnIsland(row, col) {
        //往右边
        if (grid[row][col + 1] == '1') {
            grid[row][col + 1] = '2';
            findAnIsland(row, col + 1);
        }
        //往下面
        if (grid[row + 1][col] == '1') {
            grid[row + 1][col] = '2';
            findAnIsland(row + 1, col);
        }
        //往左边
        if (grid[row][col - 1] == '1') {
            grid[row][col - 1] = '2';
            findAnIsland(row, col - 1);
        }
        //往上边
        if (grid[row - 1][col] == '1') {
            grid[row - 1][col] = '2';
            findAnIsland(row - 1, col);
        }
    }
};

/*
Runtime: 60 ms, faster than 94.05% 
of JavaScript online submissions for Number of Islands.
Memory Usage: 38.7 MB, less than 40.29%
*/

// console.log(numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]));

// console.log(numIslands([
//     ["1", "1", "1"], 
//     ["0", "1", "0"], 
//     ["1", "1", "1"]
// ]));


// [    
//     ['0', '0', '0'],
// ['0', '1', '1', '1', '0'],
// ['0', '0', '1', '0', '0'],
// ['0', '1', '1', '1', '0'],
//      ['0', '0', '0']
// ]

// [    ['0', '0', '0'],
// ['0', '3', '2', '2', '0'],
// ['0', '0', '2', '0', '0'],
// ['0', '2', '2', '2', '0'],
//      ['0', '0', '0']]