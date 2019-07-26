/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // start our "pointer" in the bottom-left
    var row = matrix.length-1;
    var col = 0;
    while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target) {
            col++;
        } else { // found it
            return true;
        }
    }
    return false;
};

/*
Runtime: 68 ms, faster than 96.51% 
Memory Usage: 37.1 MB, less than 92.16% 
*/
