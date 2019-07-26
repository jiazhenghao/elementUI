/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    var count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (count == 1) return false;
            if (nums[i + 1] < nums[i - 1] && nums[i] > nums[i + 2]) return false;
            count++;
        }
    }
    return true;
};
/*
Runtime: 60 ms, faster than 94.10%
Memory Usage: 36.8 MB, less than 61.19%
*/
