/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let longest = 0;
    let zeroCount = 0;
    let start = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) zeroCount++;//先把0从左往右填满。

        while (zeroCount > K) {//当填的0超过K了。去从头到位，更新start的位置。
            if (A[start] === 0) zeroCount--;
            start++;
        }
        
        longest = Math.max(longest, i - start + 1);
    }
    
    return longest;
};

/*
Runtime: 72 ms, faster than 97.59% 
Memory Usage: 37.9 MB, less than 37.35%
*/