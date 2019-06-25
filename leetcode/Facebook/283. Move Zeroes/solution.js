/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 从后往前推，非0的元素，往前挪，0元素不动。
 */
var moveZeroes = function(nums) {
    if (nums.length == 0) return;
    var count = 0;
    var i = nums.length - 1;
    while (count < nums.length) {
        if (nums[i] == 0) {
            i--;
        } else {
            let temp = nums.splice(i, 1);
            nums.unshift(temp);
        }
        count++;
    }
};
/*
Runtime: 76 ms, faster than 20.92% 
of JavaScript online submissions for Move Zeroes.
Memory Usage: 37.3 MB, less than 5.00% 
*/