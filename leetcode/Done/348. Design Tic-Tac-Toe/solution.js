/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.dp = [];
    this.n = n;

    //存储row，col，两个slant的校验情况
    this.bool = {
        row: [],
        col: [],
        slant: [true, true]
    }
    //把row和col填充好；
    for (let i = 0; i < n; i++) {
        this.bool.row.push(true);
        this.bool.col.push(true);
    }

    for (let i = 0; i < n; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(0);
        }
        this.dp.push(temp);
    }
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
TicTacToe.prototype.move = function(row, col, player) {
    this.dp[row][col] = player;
    //console.log(this.dp);

    return isWin(row, col, player, this.dp, this.n, this.bool) ? player : 0;
    
    function isWin(row, col, player, dp, n, bool) {
        this.n = n;
        this.dp = dp;
        
        //判断两个斜方向
        if (row == col && bool.slant[0]) {
            let slant = true;
            for (let i = 0; i < this.n; i++) {
                if (this.dp[i][i] != player) {
                    if (this.dp[i][i] != 0)
                        bool.slant[0] = false;
                    slant = false;
                    break;
                }
            }
            if (slant == true)
                return true;
        }
        if (this.n - 1 - row == col && bool.slant[1]) {
            let slant = true;
            for (let i = 0; i < this.n; i++) {
                if (this.dp[this.n - 1 - i][i] != player) {
                    if (this.dp[this.n - 1 - i][i] != 0)
                        bool.slant[1] = false;
                    slant = false;
                    break;
                }
            }
            if (slant == true)
                return true;
        }

        //判断水平
        if (bool.row[row]) {
            let horizontal = true;
            for (let i = 0; i < this.n; i++) {
                if (this.dp[row][i] != player) {
                    if (this.dp[row][i] != 0)
                        bool.row[row] = false;
                    horizontal = false;
                    break;
                }
            }
            if (horizontal == true) {
                return true;
            }
        } 
        
        //判断垂直
        if (bool.col[col]) {
            let vertical = true;
            for (let j = 0; j < this.n; j++) {
                if (this.dp[j][col] != player) {
                    if (this.dp[j][col] != 0)
                        bool.col[col] = false;
                    vertical = false;
                    break;
                }
            }
            if (vertical == true) {
                return true;
            }
        }

        return false;
    }
};


/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

/*
Runtime: 100 ms, faster than 87.68% 
Memory Usage: 43.9 MB, less than 35.24%
*/