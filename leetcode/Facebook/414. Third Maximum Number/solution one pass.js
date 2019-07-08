/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    var min;
    var mid;
    var max;
    var i = 0;
    for (; i < nums.length; i++) {
        if (min == undefined) {
            min = nums[i];
            continue;
        }
        if (mid == undefined) {
            if (nums[i] > min) {
                mid = nums[i];
            }
            else if (nums[i] < min) {
                mid = min;
                min = nums[i];
            }
            continue;
        }
        if (max == undefined) {
            if (nums[i] > mid) {
                max = nums[i];
            } else if (nums[i] < mid && nums[i] > min) {
                max = mid;
                mid = nums[i];
            } else if (nums[i] < min) {
                max = mid;
                mid = min;
                min = nums[i];
            }
            continue;
        }
        //这里是可以优化的，一旦找到了max以后，后面就不需要判断前面三个if了。
        if (nums[i] > max) {
            min = mid;
            mid = max;
            max = nums[i];
        } else if (nums[i] < max && nums[i] > mid) {
            min = mid;
            mid = nums[i];
        } else if (nums[i] < mid && nums[i] > min) {
            min = nums[i];
        }
    }
    if (max == undefined) {
        return mid == undefined ? min : mid;
    }
    return min;
};
/*
Runtime: 56 ms, faster than 92.57% 
Memory Usage: 34.8 MB, less than 81.88% 
*/