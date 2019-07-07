/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (!nums.length)
        return false;
    var head = 0;
    var tail = nums.length - 1;
    if (nums[head] <= target) {//目标比第一个大，就从这里开始搜索
        while (head < nums.length && nums[head] !== target) {
            head++;
        }
        return nums[head] == target;
    }
    if (nums[tail] >= target) { //否则就从尾巴开始搜索
        while (tail >= 0 && nums[tail] !== target) {
            tail--;
        }
        return nums[tail] == target;
    }
    if (nums[tail] < target && nums[head] > target) //既比尾巴大，又比头小，不存在的
        return false;
};
/*
Runtime: 32 ms, faster than 100.00%
Memory Usage: 34.3 MB, less than 38.89%
*/