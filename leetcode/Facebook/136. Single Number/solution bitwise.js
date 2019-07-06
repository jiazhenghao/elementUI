/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var res;
    for (let i = 0; i < nums.length; i++)
        res ^= nums[i];
    return res;
};
/*
Runtime: 52 ms, faster than 96.03% 
of JavaScript online submissions for Single Number.
Memory Usage: 35.3 MB, less than 97.04%
*/