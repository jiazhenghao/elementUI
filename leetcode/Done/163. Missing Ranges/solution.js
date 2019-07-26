/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    const res = [];

    if (nums[0] !== lower) nums.unshift(lower - 1);
    if (nums[nums.length - 1] !== upper) nums.push(upper + 1);

    for (let i = 0; i < nums.length; i++) {
        const delta = nums[i] - nums[i - 1];
        if (delta === 2)
            res.push(nums[i - 1] + 1 + '');
        else if (delta > 2)
            res.push((nums[i - 1] + 1) + '->' + (nums[i] - 1));
    }

    return res;
};
/*
Runtime: 52 ms, faster than 84.39% 
of JavaScript online submissions for Missing Ranges.
Memory Usage: 34 MB, less than 8.22%
*/