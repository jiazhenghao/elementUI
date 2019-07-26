/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    if (nums2.length == 0) return [];
    var stack = [];
    var result = [];
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.indexOf(nums2[i]) != -1) {
            let tempIdx = nums1.indexOf(nums2[i]);
            if (i == nums2.length - 1) {
                result[tempIdx] = -1;
            } else if (nums2[i + 1] > nums2[i]) {
                result[tempIdx] = nums2[i + 1];
            } else {
                stack.push([nums2[i], tempIdx]);
            }
        }
        for (let j = 0; j < stack.length; j++) {
            if (stack[j][0] == -1) continue;
            if (nums2[i] > stack[j][0]) {
                result[stack[j][1]] = nums2[i];
                stack[j][0] = -1;
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        if (stack[i][0] != -1) {
            result[stack[i][1]] = -1;
        }
    }
    return result;
};
/*
Runtime: 60 ms, faster than 91.30% 
of JavaScript online submissions for Next Greater Element I.
Memory Usage: 35.5 MB, less than 60.50%
*/