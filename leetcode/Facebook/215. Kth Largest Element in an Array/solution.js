/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort(function(a,b) {
        return b-a;
    });
    return nums[k - 1];
};

/*
Runtime: 64 ms, faster than 91.88% 
Memory Usage: 35.8 MB, less than 64.19%
O(NlogN) time complexity and O(1) space complexity.
Using heap instead:
Time complexity : O(Nlogk).
Space complexity : O(k) to store the heap elements. 
*/
