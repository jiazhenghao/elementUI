/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    var sum = 0;
    var map = {};
    map[-1] = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        map[i] = sum;
    }
    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] == 2 * map[i - 1]) return i;
    }
    return -1;
};
/*
Runtime: 72 ms, faster than 87.54%
Memory Usage: 38 MB, less than 26.81% 
*/
