/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function (board) {
    // check if board is valid after updating number at row-col
    function isValid(board, row, col) {
        let num = board[row][col];
        // check if row / column / block already has current number
        return !(
            boardHasNumberInSection(board, num, {
                rowStart: 0, rowEnd: 9, rowInc: 1,
                colStart: col, colEnd: col + 1, colInc: 1,
            }, { row, col })
            || boardHasNumberInSection(board, num, {
                rowStart: row, rowEnd: row + 1, rowInc: 1,
                colStart: 0, colEnd: 9, colInc: 1
            }, { row, col })
            || boardHasNumberInSection(board, num, {
                rowStart: Math.floor(row / 3) * 3, rowEnd: Math.floor(row / 3) * 3 + 3, rowInc: 1,
                colStart: Math.floor(col / 3) * 3, colEnd: Math.floor(col / 3) * 3 + 3, colInc: 1
            }, { row, col })
        );
    }

    function boardHasNumberInSection(board, num, section, skip) {
        for (let row = section.rowStart; row < section.rowEnd; row += section.rowInc) {
            for (let col = section.colStart; col < section.colEnd; col += section.colInc) {
                if (row === skip.row && col === skip.col) continue;
                if (board[row][col] === num) return true;
            }
        }
        return false;
    }

    let isSolved = [[], [], [], [], [], [], [], [], []]; // boolean board that contains "solved" flags
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let num = Number.parseInt(board[row][col]);
            isSolved[row][col] = !!Number.parseInt(board[row][col]);
            board[row][col] = num || 0;
        }
    }
    let row, col, index = 0, direction = 1;

    while (index >= 0 && index < 81) {
        row = Math.floor(index / 9);
        col = index % 9;

        if (!isSolved[row][col]) {
            // increase the next item because last try didn't succeed
            ++board[row][col];

            // increase the number till it fits into the picture, or becomes 10
            while (board[row][col] <= 9 && !isValid(board, row, col)) {
                ++board[row][col];
            }

            // intentional fail point: number can be 10. in this case reset number to 0 and backtrack
            if (board[row][col] > 9) {
                board[row][col] = 0;
                direction = -1;
            } else {
                direction = 1;
            }
        }
        index += direction;
    }
    if (index < 0) {
        throw new Error(`Catastrophic failure! Couldn't solve the puzzle`);
    }

    // convert back into strings
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            board[row][col] = '' + board[row][col];
        }
    }
};