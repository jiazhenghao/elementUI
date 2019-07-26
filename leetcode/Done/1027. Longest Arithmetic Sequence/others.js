/**
 * @param {number[]} A
 * @return {number}
 * 我将问题复杂化了，给定一个unordered的数组。
 * 找出连续度最高的。
 * 但题目只是要求在顺序里找到。是按照array的顺序的。
 */
var longestArithSeqLength = function (A) {
    let dp = Array(A.length), max = 2;

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Map();
    }
    //用hashtable来存储，dp动态存储进hashtable
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < i; j++) {
            let diff = A[i] - A[j];
            dp[i].set(diff, dp[j].get(diff) + 1 || 2);
            max = Math.max(max, dp[i].get(diff));
            // if (max < dp[i].get(diff) ) {
            //     max = dp[i].get(diff);
            // }
        }
    }
    //console.log(dp[4]);
    return max;
};