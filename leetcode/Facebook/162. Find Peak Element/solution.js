/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length == 0) 
        return null;
    if (nums.length == 1)
        return 0;
    
    if (nums[0] > nums[1])
        return 0;
    if (nums[nums.length - 1] > nums[nums.length - 2])
        return nums.length-1;
    
    var left = 1;
    var right = nums.length - 2;
    while (left != right) {
        if (nums[left] > nums[left + 1]) {
            return left;
        }
        if (nums[right] > nums[right - 1]) {
            return right;
        }
        left++;
        right--;
    }
    return left;
};

/*
Runtime: 44 ms, faster than 99.27%
Memory Usage: 33.7 MB, less than 91.76% 
*/
