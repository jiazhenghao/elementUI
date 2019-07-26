/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n == 0)
        return;
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    if (n > nums2.length) 
        n = nums2.length;
        
    var p1 = 0;
    var p2 = 0;
    var total = m + n;
    
    while (p2 < n ) {
        //如果m已经耗尽，后面的就可以完全直接插进去了。
        if (m == 0) {
            nums1[p1] = nums2[p2];
            p2++;
            p1++;
        } else {//如果m尚未耗尽，就走正常流程，逐个比较
            if (nums2[p2] <= nums1[p1]) {
                nums1.splice(p1, 0, nums2[p2]);
                p2++;
                p1++;
            } else {
                p1++;
                m--;
            } 
        }  
    }
    nums1.splice(total);
};

/*
Runtime: 40 ms, faster than 100.00%
Memory Usage: 33.8 MB, less than 90.47% 
*/