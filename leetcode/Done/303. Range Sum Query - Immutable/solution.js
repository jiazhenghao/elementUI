/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = Array(nums.length + 1);
    this.sum[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        this.sum[i + 1] = this.sum[i] + nums[i];
    }
    //console.log(this.sum);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j + 1] - this.sum[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

/*
Runtime: 88 ms, faster than 95.65%
Memory Usage: 44.7 MB, less than 68.15%
*/