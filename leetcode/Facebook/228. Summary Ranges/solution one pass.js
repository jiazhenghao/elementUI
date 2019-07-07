/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length == 0) return nums;
    var res = [];
    var small = nums[0];
    var big = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - big == 1) {
            big = nums[i];
        } else {
            add(small, big);
            small = nums[i];
            big = nums[i];
        }
    }
    add(small, big);
    return res;

    function add(small, big) {
        if (small == big) {
            res.push('' + small);
        } else {
            res.push('' + small + '->' + big);
        }
    }
};
/*
Runtime: 48 ms, faster than 90.66% 
Memory Usage: 33.7 MB, less than 91.51%
*/