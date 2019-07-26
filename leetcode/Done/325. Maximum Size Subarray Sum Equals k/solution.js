/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    if (!nums || !nums.length) { return 0; }
    
    let len = 0, pf = {}, sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (sum == k) { 
            len = i + 1; 
        } else if (pf[sum - k] !== undefined)  {
            len = Math.max(len, i - pf[sum - k]);
        }
        
        if (pf[sum] === undefined) {
            pf[sum] = i;
        }
    }
    
    return len;
};

