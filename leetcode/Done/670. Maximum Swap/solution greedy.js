/**
 * @param {number} num
 * @return {number}
 *   8827036   8872036
 */
var maximumSwap = function(num) {
    var A = (num + '').split('');
    console.log(A);// [ '8', '8', '2', '7', '0', '3', '6' ]

    var last = new Array(10);
    last.fill(-1); 
    for (let i = 0; i < A.length; i++) {
        last[A[i].charCodeAt(0) - '0'.charCodeAt(0)] = i;
    }
    console.log(last);//[ 4, -1, 2, 5, -1, -1, 6, 3, 1, -1 ]
    
    for (let i = 0; i < A.length; i++) {
        for (let d = 9; d > A[i].charCodeAt(0) - '0'.charCodeAt(0); d--) {
            if (last[d] > i) {
                let tmp = A[i];
                A[i] = A[last[d]];
                A[last[d]] = tmp;
                return A.join('');
            }
        }
    }
    return num;
};
/*
Runtime: 44 ms, faster than 100.00% 
Memory Usage: 33.8 MB, less than 69.39% 
*/