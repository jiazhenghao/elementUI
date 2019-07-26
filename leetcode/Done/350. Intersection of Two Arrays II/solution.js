/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length == 0 || nums2.length == 0) return [];
    var intersection = [];
    var map1 = new Map();
    var map2 = new Map();

    for (let i = 0; i < nums1.length; i++) {
        if (map1.has(nums1[i])) {
            map1.set(nums1[i], map1.get(nums1[i]) + 1);
        } else {
            map1.set(nums1[i], 1);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map2.has(nums2[i])) {
            map2.set(nums2[i], map2.get(nums2[i]) + 1);
        } else {
            map2.set(nums2[i], 1);
        }
    }
    if (map1.size >= map2.size) {
        for (let item of map2.keys()) {
            if (map1.has(item)) {
                let n = map1.get(item) > map2.get(item) ? map2.get(item) : map1.get(item);
                for (let i = 0; i < n; i++) {
                    intersection.push(item);
                }
            }
        }
    }
    else {
        for (let item of map2.keys()) {
            if (map2.has(item)) {
                let n = map1.get(item) > map2.get(item) ? map2.get(item) : map1.get(item);
                for (let i = 0; i < n; i++) {
                    intersection.push(item);
                }
            }
        }
    }
    return intersection;
};

/*
Runtime: 60 ms, faster than 87.78% 
Memory Usage: 36.7 MB, less than 10.76%
*/
