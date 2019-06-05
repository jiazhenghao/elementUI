/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length == 0) {
        return medianSingleArray(nums2);
    }
    if (nums2.length == 0) {
        return medianSingleArray(nums1);
    }
    var output = 0;
    if ((nums1.length + nums2.length) % 2 == 0) {
        //有偶数个总数，就要2个位置处以2
        var medianLeft = (nums1.length + nums2.length) / 2 - 1;
        let i = 0;
        while (i <= medianLeft) {
            if (nums1[0] < nums2[0]) {
                output = nums1[0];
                nums1.shift();
            }
            else {
                output = nums2[0];
                nums2.shift();
            }
            //当其中某个数组已经没有数字了
            if (nums1.length == 0) {
                //i已经是左边数字了，右边数字就是另外数组的第一个元素
                if (i == medianLeft) {
                    return (output + nums2[medianLeft - i]) / 2;
                }
                else {
                    return (nums2[medianLeft - i - 1] + nums2[medianLeft - i]) / 2;
                }
            }
            if (nums2.length == 0) {
                //i已经是左边数字了，右边数字就是另外数组的第一个元素
                if (i == medianLeft) {
                    return (output + nums1[medianLeft - i]) / 2;
                }
                else {
                    return (nums1[medianLeft - i - 1] + nums1[medianLeft - i]) / 2;
                }
            }
            i++;
        }

        if (nums1.length == 0) {
            return (nums2[0] + output) / 2;
        }
        else if (nums2.length == 0) {
            return (nums1[0] + output) / 2;
        }
        else {
            return (output + Math.min(nums1[0], nums2[0])) / 2;
        }
    }
    else {
        //有奇数个数，只要一个中间值
        var median = (nums1.length + nums2.length - 1) / 2;
        let i = 0;
        while (i <= median) {
            if (nums1[0] < nums2[0]) {
                output = nums1.shift();
            }
            else {
                output = nums2.shift();
            }
            if (i == median) {
                return output;
            }
            //当其中某个数组已经没有数字了
            if (nums1.length == 0) {
                return nums2[median - i - 1];
            }
            if (nums2.length == 0) {
                return nums1[median - i - 1];
            }
            i++;
        }
    }
};

var medianSingleArray = function (nums) {
    return nums.length % 2 == 0 ?
        (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2 :
        (nums[(nums.length - 1) / 2]);
}

console.log(findMedianSortedArrays([1, 2, 3, 5, 6, 7], [0.5, 1, 1, 2, 3, 4])); // 2.5
console.log(findMedianSortedArrays([1, 2], [0.5, 1, 1, 2, 3, 4]));//1.5
console.log(findMedianSortedArrays([1.6], [0.5, 1.6, 1.6, 2.2, 3, 4]));//1.6
console.log(findMedianSortedArrays([1, 2], [3, 4]));//2.5

// Runtime: 100 ms, faster than 98.25% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 38.6 MB, less than 96.24% of JavaScript online submissions for Median of Two Sorted Arrays.
