/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function (row, col, val) {
    this.matrix[row][col] = val;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let x = row1;
    let value = 0;
    while (x <= row2) {
        for (let i = col1; i <= col2; i++) {
            value += this.matrix[x][i];
        }
        x++;
    }
    return value;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */

/*
Brute Force
Runtime: 76 ms, faster than 87.76% 
Memory Usage: 38.3 MB, less than 72.41%
*/