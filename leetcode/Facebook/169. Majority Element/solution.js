/**
 * @param {number[]} nums
 * @return {number}
 * 我先排序，可以说，最中间的那个数字，肯定就是我们的目标数字。
 */

var majorityElement = function (nums) {
    if (nums.length <= 2)
        return nums[0];
    nums.sort(function (a, b) {
        return a - b;
    });
    return nums[Math.trunc(nums.length / 2)];
};

/*
Runtime: 60 ms, faster than 93.60% 
Memory Usage: 37.7 MB, less than 46.66%
*/