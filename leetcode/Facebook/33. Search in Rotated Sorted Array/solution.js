/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    this.index = -1;
    this.arr = nums;
    this.target = target;
    if (nums.length == 0) return -1;
    if (nums.length == 1) return nums[0] == target ? 0 : -1;

    binarySearch.call(this, 0, nums.length - 1);
    
    return this.index;
    
    function binarySearch(start, end) {
        //这两种情况可以结束循环
        if (start == end) {
            this.target == this.arr[start] ? this.index = start : this.index = -1;
            return;
        }
        if (end - start == 1) {
            if (this.target == this.arr[start]) {
                this.index = start;
                return;
            }
            if (this.target == this.arr[end]) {
                this.index = end;
                return;
            }
            this.index = -1;
            return;
        }
        //我把四种等号拿出来，也是可以结束循环的
        if (this.arr[start] == this.target) {
            this.index = start;
            return;
        }
        if (this.arr[end] == this.target) {
            this.index = end;
            return;
        }
        let medianLeft = Math.trunc( (end - start) / 2 ) + start;
        let medianRight = medianLeft + 1;
        if (this.arr[medianRight] == this.target) {
            this.index = medianRight;
            return;
        }
        if (this.arr[medianLeft] == this.target) {
            this.index = medianLeft;
            return;
        }

        //大戏码开始
        if (arr[start] < this.target && arr[medianLeft] > this.target) {
            binarySearch(start, medianLeft);
            return;
        }
        if (arr[start] < this.target && arr[medianLeft] < arr[start]) {
            binarySearch(start, medianLeft);
            return;
        }
        if (arr[start] > this.target && arr[medianLeft] > this.target && arr[medianLeft] < arr[start]) {
            binarySearch(start, medianLeft);
            return;
        }
        binarySearch(medianRight, end);
        return;
    };
};

/*
Runtime: 44 ms, faster than 99.33% 
Memory Usage: 33.8 MB, less than 53.54% 
*/