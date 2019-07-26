/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
//You may assume that A's column number is equal to B's row number.
var multiply = function (A, B) {
    if (A.length == 0 || B.length == 0) {
        return [];
    }
    var result = [];//A的长度，B的某列的长度
    for (let i = 0; i < A.length; i++) {
        result.push([]);
    }
    for (let i = 0; i < A.length; i++) {//A的长度
        for (let j = 0; j < B[0].length; j++) {//B的某列的长度
            let temp = 0;
            for (let k = 0; k < A[i].length; k++) {
                temp = temp + A[i][k] * B[k][j];//A[i]行 * B[j]列
            }
            result[i][j] = temp;
        }
    }
    return result;
};
/*
Runtime: 56 ms, faster than 98.75% 
Memory Usage: 35.1 MB, less than 61.36%
*/


