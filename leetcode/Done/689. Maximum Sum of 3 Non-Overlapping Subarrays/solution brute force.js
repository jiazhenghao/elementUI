/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
    var arr = new Array(nums.length);
    arr.fill(0);
    for (let i = 0; i <= nums.length - k; i++) {
        for (let j = i; j < i + k; j++) {
            arr[i] += nums[j];
        }
    }
    var output = 0;
    var result = [];

    for (let i = 0; i <= nums.length - k - k - k + 1; i++) {
        for (let j = i + k; j <= nums.length - k - k + 1; j++) {
            for (let last = j + k; last <= nums.length - k; last++) {
                if (arr[i] + arr[j] + arr[last] > output) {
                    output = arr[i] + arr[j] + arr[last];
                    result[0] = i;
                    result[1] = j;
                    result[2] = last;
                }
            }
        }
    }
    return result;
};

//[ 1, 2, 1, 2,  6,  7,  5,  1,  9, 8, 2]
//[ 4, 5, 9, 15, 18, 13, 15, 18, 19, 0, 0 ]