/**
 * @param {number[]} nums
 * @return {boolean}
 * O(n) time solution
 */
var increasingTriplet = function (nums) {
    var stack1 = [Infinity], stack2 = [Infinity, Infinity];

    for (var i = 0, len = nums.length; i < len; i++) {
        var num = nums[i];
        if (stack2 && stack2[1] < num) {
            return true;
        }

        else if (stack1[0] < num && stack2[1] > num) {
            stack2 = [stack1[0], num];
        }

        else if (stack1[0] > num) {
            stack1[0] = num;
        }
    }
    return false;
};
/*
Runtime: 48 ms, faster than 98.73%
Memory Usage: 34.8 MB, less than 43.18%
*/