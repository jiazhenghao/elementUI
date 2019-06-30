/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const k2 = k % nums.length;
    nums.unshift.apply(nums, nums.splice(nums.length - k2, k2));
};
/*
Runtime: 56 ms, faster than 98.93% 
Memory Usage: 35.3 MB, less than 73.62%
*/