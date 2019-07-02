/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {

    let count = 0,
        rows = new Array(3).fill(0),
        cols = new Array(3).fill(0),
        l = 0,
        r = 0,
        curr;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            curr = board[i][j];
            if (curr === 'X') {
                count++;
                rows[i]++;
                cols[j]++;
                if (i === j) l++;
                if (i + j === 2) r++;
            } else if (curr === 'O') {
                count--;
                rows[i]--;
                cols[j]--;
                if (i === j) l--;
                if (i + j === 2) r--;
            }
        }
    }
    if (count < 0 || count > 1) return false;
    const xWin = rows.some(x => x === 3) || cols.some(x => x === 3) || l === 3 || r === 3;
    const oWin = rows.some(x => x === -3) || cols.some(x => x === -3) || l === -3 || r === -3;
    if (xWin && oWin) {
        return false;
    }
    if (xWin && count === 0) {
        return false;
    }
    if (oWin && count === 1) {
        return false;
    }
    return true;
}
/*
Runtime: 48 ms, faster than 100.00% 
of JavaScript online submissions for Valid Tic-Tac-Toe State.
Memory Usage: 33.9 MB, less than 60.00%
*/