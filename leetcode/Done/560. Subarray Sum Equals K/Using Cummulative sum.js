/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var count = 0;
    var sum = Array(nums.length + 1);
    sum[0] = 0;
    for (let i = 1; i <= nums.length; i++)
        sum[i] = sum[i - 1] + nums[i - 1];
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            if (sum[end] - sum[start] == k)
                count++;
        }
    }
    return count;
};
/*
Runtime: 336 ms, faster than 13.61% 
Memory Usage: 36.8 MB, less than 74.67% 
*/