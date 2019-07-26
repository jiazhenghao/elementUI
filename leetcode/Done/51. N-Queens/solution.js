/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var rows = new Array(n);
    rows.fill(0);
    var hills = new Array(4 * n - 1);
    hills.fill(0);
    var dales = new Array(2 * n - 1);
    dales.fill(0);
    var queens = new Array(n);
    queens.fill(0);
    var output = [];

    backtrack(0);

    return output;

    function isNotUnderAttack(row, col) {
        var res = rows[col] + hills[row - col + 2 * n] + dales[row + col];
        return res == 0;
    }

    function placeQueen(row, col) {
        queens[row] = col;
        rows[col] = 1;
        hills[row - col + 2 * n] = 1;
        dales[row + col] = 1;
    }

    function removeQueen(row, col) {
        queens[row] = 0;
        rows[col] = 0;
        hills[row - col + 2 * n] = 0;
        dales[row + col] = 0;
    }

    function addSolution() {//将一个solution加到output里去。
        var solution = [];
        for (let i = 0; i < n; i++) {
            let col = queens[i];
            let sb = '';
            for (let j = 0; j < col; j++) sb += '.';
            sb += 'Q';
            for (let j = 0; j < n - col - 1; j++) sb += '.';
            solution.push(sb);//将这一行加到solution里去。
        }
        output.push(solution);
    }

    function backtrack(row) {
        for (let col = 0; col < n; col++) {
            if (isNotUnderAttack(row, col)) {
                placeQueen(row, col);
                //if n queens are already placed, then add solution
                if (row + 1 == n)
                    addSolution();
                else // if not proceed to place the rest
                    backtrack(row + 1);
                //backtrack
                removeQueen(row, col);
            }
        }
    }
};

/*
Runtime: 64 ms, faster than 94.56%
of JavaScript online submissions for N-Queens.
Memory Usage: 36.5 MB, less than 87.94%
*/