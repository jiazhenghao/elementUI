/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let bitMap = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256];
    let rowBits = new Array(9).fill(0);
    let colBits = new Array(9).fill(0);
    let boxBits = new Array(9).fill(0);
    let stack = [], stackPointer;

    //Update rows, collums and boxes and find empty cells
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let bit = bitMap[Number(board[i][j])];
            if (bit) {
                savePlay(bit, i, j)
            } else {
                stack.push({ i, j });
            }
        }
    }

    //Reorder empty cells based on information available
    stack.forEach(a => {
        a.playedCount = bitCount(rowBits[a.j] | colBits[a.i] | boxBits[getBoxNum(a.i, a.j)]);
    })

    stack.sort((a, b) => a.playedCount - b.playedCount);


    stackPointer = stack.length;
    solve();

    // solve the problem using back tracking
    function solve() {
        if (!stackPointer) return true;
        let { i, j } = stack[--stackPointer];
        for (let num = 1; num <= 9; num++) {
            let bit = bitMap[num];
            if (canPlay(bit, i, j)) {
                savePlay(bit, i, j);
                board[i][j] = String(num);
                if (solve()) return true;
                else removePlay(bit, i, j);
            }
        }
        stackPointer++;
        return false;
    }

    function removePlay(bit, i, j) {
        rowBits[j] ^= bit;
        colBits[i] ^= bit;
        boxBits[getBoxNum(i, j)] ^= bit;
    }

    function savePlay(bit, i, j) {
        rowBits[j] |= bit;
        colBits[i] |= bit;
        boxBits[getBoxNum(i, j)] |= bit;
    }

    function canPlay(bit, i, j) {
        let bitRecord = rowBits[j] | colBits[i] | boxBits[getBoxNum(i, j)];
        return !(bit & bitRecord);
    }

};


function getBoxNum(i, j) {
    return Math.floor(i / 3) + Math.floor(j / 3) * 3;
}

function bitCount(n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    n = ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
    return n;
}
/*
在C/C++中，0x为十六进制的前缀标识，0位八进制的前缀标识，十进制没有前缀标识。

因此，那些奇怪的字符为整数的十六进制表示。有那么多的整数，为何在涉及位操作程序中会出现这些整数呢。

因为这些整数的二进制形式很特殊，可以借助Windows系统自带的计算器，快捷计算出该整数的二进制形式

0xaaaaaaaa = 10101010101010101010101010101010 (偶数位为1，奇数位为0）

0x55555555 = 1010101010101010101010101010101 (偶数位为0，奇数位为1）

0x33333333 = 110011001100110011001100110011 (1和0每隔两位交替出现)

0xcccccccc = 11001100110011001100110011001100 (0和1每隔两位交替出现)

0x0f0f0f0f = 00001111000011110000111100001111 (1和0每隔四位交替出现)

0xf0f0f0f0 = 11110000111100001111000011110000 (0和1每隔四位交替出现)

*/