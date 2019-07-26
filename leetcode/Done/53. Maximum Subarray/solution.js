/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var n = nums.length;
    var currSum = nums[0];
    var maxSum = nums[0];
    for (let i = 1; i < n; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    //无论第一个正负，第二个来了，第三个来了，第N个来了。
    //正 正 currSum + nums[i] 2.比大小
    //负 负 nums[i] 2.比大小
    //正 负 currSum + nums[i] 2.比大小
    //负 正 nums[i] 2.比大小
    return maxSum;
};
/*
Runtime: 52 ms, faster than 97.40% 
Memory Usage: 35.4 MB, less than 30.09% 
*/