/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
这个算法就是先找出第一个k长度的子数组里的最大元素，计入maxi（这是个index）
初始maxi = -1；
然后每平移一个单位，看一下maxi是否包含，包含的话，就和移入的元素比较，
不包含，就重新计算maxi。
这个算法最大的问题是碰到倒序的nums，就会使用很长很长的时间。
k*（n-k+1）
*/
var maxSlidingWindow = function (nums, k) {
    if (nums.length === 0) {
        return [];
    }

    let ret = [];

    let winStart = 0; // start of window
    let maxi = -1; // maximum within the window (default to before window to find next max within)

    while (winStart + k <= nums.length) {
        if (maxi < winStart) { // if the maximum has fallen outside window, walk window to find it
            let max;

            for (let i = winStart; i < winStart + k; i++) {
                if (max == null || nums[i] > max) {
                    max = nums[i];
                    maxi = i;
                }
            }
        }
        else { // otherwise, the maximum must be either the current, or the new value in the window
            if (nums[winStart + k - 1] > nums[maxi]) {
                maxi = winStart + k - 1;
            }
        }

        ret.push(nums[maxi]); // push the new maximum
        winStart++; // shift window
    }

    return ret;
};
/*
Runtime: 68 ms, faster than 100.00% 
Memory Usage: 41.2 MB, less than 84.62%
*/