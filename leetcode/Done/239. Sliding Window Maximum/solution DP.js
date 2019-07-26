/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    var n = nums.length;
    if (n * k == 0) return [];
    if (k == 1) return nums;

    var left = Array(n);
    left[0] = nums[0];
    var right = Array(n);
    right[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        // from left to right
        if (i % k == 0) left[i] = nums[i];  // block_start
        else left[i] = Math.max(left[i - 1], nums[i]);

        // from right to left
        let j = n - i - 1;
        if ((j + 1) % k == 0) right[j] = nums[j];  // block_end
        else right[j] = Math.max(right[j + 1], nums[j]);
    }

    var output = Array(n - k + 1);
    for (let i = 0; i < n - k + 1; i++)
        output[i] = Math.max(left[i + k - 1], right[i]);

    return output;
};
/*
Runtime: 64 ms, faster than 100.00% 
Memory Usage: 41.1 MB, less than 86.15%
*/