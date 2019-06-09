var rotate = function(matrix) {
    if (matrix.length == 1)
        return matrix;
    let n = matrix.length - 1;
    
    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - i; j++) {
            rotate2(matrix, i, j);
        }
    }
    
    return matrix;
};

function rotate2(matrix, i, j) {
    let n = matrix.length - 1;
    if (i==j && i== n / 2) {
        return;
    }
    let temp = matrix[i][j];
    matrix[i][j] = matrix[n - j][i];
    matrix[n - j][i] = matrix[n - i][n - j];
    matrix[n - i][n - j] = matrix[j][n - i];
    matrix[j][n - i] = temp;
}

console.log(rotate([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ]));
