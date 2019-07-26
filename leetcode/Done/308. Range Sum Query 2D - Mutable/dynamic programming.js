/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;
    this.holder = [];
    for (var i = 0; i < matrix.length; i++) {
        this.holder[i] = new Array(matrix[0].length);
    }
    for (let i = 0; i < matrix.length; i++) {
        this.holder[i][0] = 0;
        for (let j = 1; j < matrix[0].length + 1; j++) {
            this.holder[i][0] = 0;
            this.holder[i][j] = this.holder[i][j - 1] + matrix[i][j - 1];
        }
    }
    //console.log(this.holder);
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
    let replaced = this.matrix[row][col];
    this.matrix[row][col] = val;
    for (col; col < this.matrix[0].length; col++) {
        this.holder[row][col + 1] += (val - replaced);
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let answer = 0;
    for (row1; row1 <= row2; row1++) {
        answer += this.holder[row1][col2 + 1] - this.holder[row1][col1];
    }
    return answer;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */

/*
DP
Runtime: 68 ms, faster than 97.96% 
Memory Usage: 41.4 MB, less than 6.90%
*/