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
            if (nums2[i] > stack[j][0]) {
                result[stack[j][1]] = nums2[i];
                stack.splice(j, 1);
                j--;
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        result[stack[i][1]] = -1;
    }
    return result;
};
/*
Runtime: 64 ms, faster than 79.35% 
Memory Usage: 36 MB, less than 38.50% 
*/