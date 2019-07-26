/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    var left = 0;
    var right;
    var max = 0;
    
    while (left < A.length - max) {
        givenLeftFindRight(left);
        left++;
    }
    return max;
    
    function givenLeftFindRight(left) {
        var times = K;
        let right = left;
        for (; right < A.length; right++) {
            if (A[right] == 0) {
                if (times <= 0) {
                    break;
                } else {
                    times--;
                }
            }
        }
        max = Math.max(max, right - left);
    }
};
/*
Runtime: 1468 ms, faster than 13.25% 
Memory Usage: 38.1 MB, less than 24.10%
*/