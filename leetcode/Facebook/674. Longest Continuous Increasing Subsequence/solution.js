/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return 1;
    var result = 1;
    var left = 0;
    var right = left + 1;
    while (left < nums.length - result) {
        if (nums[right] > nums[right - 1]) {
            right++;
            continue;
        }
        else {
            result = right - left > result ? right - left : result;
            left = right;
            right = left + 1;
        }
    }
    return result;
};
/*
Runtime: 40 ms, faster than 100.00% 
Memory Usage: 35 MB, less than 79.12%
*/