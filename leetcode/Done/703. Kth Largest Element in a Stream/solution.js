/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.nums = nums.sort((a, b) => b - a);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    let i = 0;
    for (; i < this.nums.length; i++) {
        if (val >= this.nums[i]) {
            this.nums.splice(i, 0, val);
            break;
        }
    }
    if (i > this.nums.length - 1) {
        this.nums.push(val);
    }
    return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/*
Runtime: 276 ms, faster than 44.48% 
of JavaScript online submissions for Kth Largest Element in a Stream.
Memory Usage: 45.2 MB, less than 42.86%
*/