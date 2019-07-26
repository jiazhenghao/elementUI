/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 0就往前走，2就往后，1保持不动。
 */
var sortColors = function (nums) {
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.unshift(0);
        } else if (nums[i] == 2) {
            if (nums.length - i == count) {
                break;
            }
            nums.splice(i, 1);
            nums.push(2);
            count++;
            i--;
        }
    }
};

/*
Runtime: 48 ms, faster than 96.87% 
of JavaScript online submissions for Sort Colors.
Memory Usage: 33.8 MB, less than 69.92% 
*/