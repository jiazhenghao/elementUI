/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    if (board.length == 0) return false;
    if (word.length == 0) return true;
    var width = board[0].length;
    var height = board.length;
    
    var res = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (res == false && board[i][j] == word[0]) {
                let set = new Set();
                set.add(`${i},${j}`);
                find(i, j, set, word.substring(1));
            } 
        }
    }
    return res;
    
    function find(posX, posY, setRoute, str) {
        if (res == true) {
            return;
        }
        if (str.length == 0) {
            res = true;
            return;
        }
        if (posX + 1 < height && board[posX + 1][posY] == str[0]) {
            let arr = [...setRoute];
            let set = new Set(arr);
            if (!set.has(`${posX + 1},${posY}`)) {
                set.add(`${posX + 1},${posY}`);
                find(posX+1, posY, set, str.substring(1));
            }
        }
        if (posX - 1 >= 0 && board[posX - 1][posY] == str[0]) {
            let arr = [...setRoute];
            let set = new Set(arr);
            if (!set.has(`${posX - 1},${posY}`)) {
                set.add(`${posX - 1},${posY}`);
                find(posX-1, posY, set, str.substring(1));
            }
        }
        if (posY + 1 < width && board[posX][posY + 1] == str[0]) {
            let arr = [...setRoute];
            let set = new Set(arr);
            if (!set.has(`${posX},${posY + 1}`)) {
                set.add(`${posX},${posY + 1}`);
                find(posX, posY + 1, set, str.substring(1));
            }
        }
        if (posY - 1 >= 0 && board[posX][posY - 1] == str[0]) {
            let arr = [...setRoute];
            let set = new Set(arr);
            if (!set.has(`${posX},${posY - 1}`)) {
                set.add(`${posX},${posY - 1}`);
                find(posX, posY - 1, set, str.substring(1));
            }
        }
    }
};
/*
Runtime: 476 ms, faster than 10.50% 
Memory Usage: 75.6 MB, less than 7.78%
*/