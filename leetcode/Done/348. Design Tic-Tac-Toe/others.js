/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
    rowv = new Array(n);
    colv = new Array(n);
    rowv.fill(0);
    colv.fill(0);
    total = n;
    diag = 0, anti = 0;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    add = player == 1 ? 1 : -1;
    diag += row == col ? add : 0;
    anti += row == total - col - 1 ? add : 0;
    rowv[row] += add;
    colv[col] += add;
    //return rowv[row];
    if (Math.abs(diag) == total || Math.abs(anti) == total 
        || Math.abs(rowv[row]) == total || Math.abs(colv[col]) == total) 
        { return player; }
    return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = Object.create(TicTacToe).createNew(n)
 * var param_1 = obj.move(row,col,player)
 */

/*
Runtime: 80 ms, faster than 100.00%
Memory Usage: 43.3 MB, less than 86.67% 
*/