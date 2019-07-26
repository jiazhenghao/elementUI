/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    var dp = Array(nums.length);
    dp[0] = 1;
    var maxans = 1;
    for (let i = 1; i < dp.length; i++) {
        let maxval = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                maxval = Math.max(maxval, dp[j]);
            }
        }
        dp[i] = maxval + 1;
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
};
/*
Runtime: 64 ms, faster than 79.67% 
of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 34.7 MB, less than 58.24% 
*/