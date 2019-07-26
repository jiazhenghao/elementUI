/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length == 0 || nums.length == 1)
        return false;
    if (nums.length == 2) {
        return (nums[0] + nums[1]) % k == 0 || nums[0] + nums[1] == k;
    }
    
    var dynamics = [nums[0] + nums[1], nums[1]];
    
    if (k == 0) {
        for (let i = 2; i < nums.length; i++) {
            for (let j = 0; j < dynamics.length; j++) {
                if ( nums[i] + dynamics[j] == 0 ) {
                    return true;
                }
                else {
                    dynamics[j] = nums[i] + dynamics[j];
                }
            }
            dynamics.push(nums[i]);
        }
        return false;
    }
    else {
        for (let i = 2; i < nums.length; i++) {
            for (let j = 0; j < dynamics.length; j++) {
                if ( (nums[i] + dynamics[j]) % k == 0 ) {
                    return true;
                }
                else {
                    dynamics[j] = nums[i] + dynamics[j];
                }
            }
            dynamics.push(nums[i]);
        }
        return false;
    }
};

/*
Runtime: 76 ms, faster than 53.08%
Memory Usage: 37.1 MB, less than 66.97% 
*/