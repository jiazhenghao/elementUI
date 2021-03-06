var isValidSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == '.') {
                continue;
            }
            //横排里面，在j列出现之前，已经出现过相同的了，就错了。
            if (board[i].indexOf(board[i][j]) < j) {
                console.log(1);
                return false;
            }
            //竖排里面，在j出现之前，别的i的j列已经出现过这个值，就错了。
            for (let k = 0; k < i; k++) {
                if (board[k][j] == board[i][j]) {
                    console.log(2);
                    return false;
                }
            }
            //井字格里有重复出现，就gg
            let left = (i - i % 3) / 3;
            let right = (j - j % 3) / 3;
            for (let x = left * 3; x <= i; x++) {
                for (let y = right * 3; y < right*3 + 3; y++) {
                    if (board[x][y] == board[i][j] && !(x == i && y == j)) {
                        console.log(3);
                        return false;
                    }
                }
            }
        }
    }
    return true;
};

console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
console.log(isValidSudoku([
    [".", ".", "5", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", "8", ".", ".", ".", "3", "."], 
    [".", "5", ".", ".", "2", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", ".", "9"], 
    [".", ".", ".", ".", ".", ".", "4", ".", "."], 
    [".", ".", ".", ".", ".", ".", ".", ".", "7"], 
    [".", "1", ".", ".", ".", ".", ".", ".", "."], 
    ["2", "4", ".", ".", ".", ".", "9", ".", "."]
]));