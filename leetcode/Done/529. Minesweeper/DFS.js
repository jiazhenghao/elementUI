/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = (board, click) => {
    const [x, y] = click;

    if (board[x][y] === 'M') {
        // If a mine ('M') is revealed, then the game is over - change it to 'X'
        board[x][y] = 'X';
    } else {
        dfs(board, x, y);
    }

    return board;
};

const dfs = (board, x, y) => {
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const m = board.length;
    const n = board[0].length;

    // Count the adjacent mines
    let minesCount = 0;
    for (let [dx, dy] of dirs) {
        const i = x + dx, j = y + dy;

        if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'M') {
            minesCount++;
        }
    }

    if (minesCount > 0) {
        // If an empty square ('E') with at least one adjacent mine is revealed,
        // then change it to a digit ('1' to '8') representing the number of adjacent mines.
        board[x][y] = '' + minesCount;
    } else {
        // If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B')
        // and all of its adjacent unrevealed squares should be revealed recursively.
        board[x][y] = 'B';

        for (let [dx, dy] of dirs) {
            const i = x + dx, j = y + dy;

            if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'E') {
                board[i][j] = 'B';
                dfs(board, i, j);
            }
        }
    }
};

/*
Runtime: 88 ms, faster than 94.69% of JavaScript online submissions for Minesweeper.
Memory Usage: 43.2 MB, less than 8.33%
*/