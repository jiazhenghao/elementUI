/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    var left = 0;
    var max = 0;
    
    while (left < A.length - max) {
        givenLeftFindRight(left);
        while (A[left] == 1 && left < A.length - max - 1) {
            left++;
        }
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
Runtime: 856 ms, faster than 14.46% 
Memory Usage: 38.1 MB, less than 25.30%
*/

