/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
};

// Runtime: 76 ms, faster than 42.32 % 
// Memory Usage: 35.9 MB, less than 53.71 %