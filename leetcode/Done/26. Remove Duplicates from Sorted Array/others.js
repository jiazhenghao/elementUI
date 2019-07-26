/**
 * @param {number[]} nums
 * @return {number}
 * 先把不一样的放到最后，然后一次性把N个删除
 */
var removeDuplicates = function (nums) {
    let i = 0, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] != nums[i + 1]) {
            nums.push(nums[i]);
        }
    }
    nums.splice(0, len);
    return nums.length;
};
/*
Runtime: 60 ms, faster than 98.63% 
Memory Usage: 37.7 MB, less than 12.21%
*/