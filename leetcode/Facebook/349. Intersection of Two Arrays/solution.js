/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    if (nums1.length == 0 || nums2.length == 0) {
        return [];
    }
    var intersection = [];
    var set1 = new Set(nums1);
    var set2 = new Set(nums2);
    if (set1.size >= set2.size) {
        for (let item of set2.values()) {
            if (set1.has(item)) {
                intersection.push(item);
            }
        }
    }
    else {
        for (let item of set1.values()) {
            if (set2.has(item)) {
                intersection.push(item);
            }
        }
    }
    return intersection;
};


/*
Runtime: 48 ms, faster than 99.34% 
Memory Usage: 34.9 MB, less than 53.35%
*/
