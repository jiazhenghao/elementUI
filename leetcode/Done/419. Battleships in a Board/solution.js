/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = board => {
    let ships = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X') {
                ships++;//先给加上，再扣掉。。。极其极其聪明
                if (i > 0 && board[i - 1][j] === 'X')
                    ships--;
                else if (j > 0 && board[i][j - 1] === 'X')
                    ships--;
            }
        }
    }

    return ships;
};
/*
Runtime: 52 ms, faster than 99.22%
of JavaScript online submissions for Battleships in a Board.
Memory Usage: 35.9 MB, less than 86.79%
*/