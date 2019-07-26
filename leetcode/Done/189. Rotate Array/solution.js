/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length == 0) return;
    if (k % nums.length == 0) return;
    k = k % nums.length;
    while (k != 0) {
        let temp = nums.pop();
        nums.unshift(temp);
        k--;
    }
};
/*
Runtime: 88 ms, faster than 56.09% 
Memory Usage: 35.4 MB, less than 43.58%
*/