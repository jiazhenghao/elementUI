/*
left pointer & right pointer 
O(n) because the worst situation is 2n
*/
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    var n = nums.length;
    var ans = Number.MAX_VALUE;
    var left = 0;
    var sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        while (sum >= s) {
            ans = Math.min(ans, i + 1 - left);
            sum -= nums[left++];
        }
    }
    return (ans != Number.MAX_VALUE) ? ans : 0;
};
/*
Runtime: 40 ms, faster than 100.00% 
Memory Usage: 35.6 MB, less than 40.00%
*/