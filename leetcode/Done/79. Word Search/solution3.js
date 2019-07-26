/*
This is very clever to change arr 
and change back arr.
*/
const dfs = (board, i, j, word, idx) => {
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] === '!') { return false; }
    if (board[i][j] !== word[idx]) { return false; }
    if (idx === word.length - 1) { return true; }

    let letter = board[i][j];
    board[i][j] = '!';//改了，但是我下次改回来
    
    let ans = dfs(board, i + 1, j, word, idx + 1) 
        || dfs(board, i - 1, j, word, idx + 1) 
        || dfs(board, i, j + 1, word, idx + 1) 
        || dfs(board, i, j - 1, word, idx + 1);
    
    board[i][j] = letter;//改回来了
    return ans;
}

const exist = (board, word) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let found = dfs(board, i, j, word, 0);
            if (found) {
                return true; 
            }
        }
    }
    
    return false;
};