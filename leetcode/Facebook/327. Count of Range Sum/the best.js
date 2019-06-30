/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 * 先把nums[i]里 在lower和upper之间的找出来。
 * 然后对每一个求和，求和的结果sums排序。然后做减法
 */
var countRangeSum = function (nums, lower, upper) {
    if (nums.length == 0) return 0;
    let sum = 0, sums = [], res = 0;
    for (let index in nums) {
        sum += nums[index];
        if (sum >= lower && sum <= upper) {
            res++;
        };
        sums[index] = sum;
    };
    //console.log(sums);console.log(sum);console.log(res);
    //[ -2, 3, 2, 5, 12, 8 ]    8   2
    var mergeSort = function (arr) {
        if (arr.length === 1) {
            return arr;
        };
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        //console.log(left);console.log(right);
        // [ -2, 3, 2 ]    [ 5, 12, 8 ]
        // [ -2 ] [ 3, 2 ]
        //         [ 3 ] [ 2 ]
        //                 [ 5 ] [ 12, 8 ]
        //                         [ 12 ] [ 8 ]
        return merge(
            mergeSort(left),
            mergeSort(right)
        );
    };

    var merge = function (left, right) {
        // console.log(left);console.log(right);
        // [ 3 ]   [ 2 ]
        // [ -2 ]  [ 2, 3 ]
        // [ 12 ]  [ 8 ]
        // [ 5 ]   [ 8, 12 ]
        //[ -2, 2, 3 ]    [ 5, 8, 12 ]
        let result = [];
        let j = 0, k = 0, l = 0, m = 0;
        for (let i = 0; i < left.length; i++) {
            while (j < right.length && right[j] - left[i] < lower) {
                j++;
            };
            while (k < right.length && right[k] - left[i] <= upper) {
                k++;
            };

            while (l < left.length && m < right.length) {
                if (left[l] <= right[m]) {
                    result.push(left[l]);
                    l++;
                } else {
                    result.push(right[m]);
                    m++;
                };
            };

            while (l < left.length) {
                result.push(left[l]);
                l++;
            };

            while (m < right.length) {
                result.push(right[m]);
                m++;
            };
            // console.log(k,j);
            // 1 0
            // 0 0
            // 1 1
            // 0 0
            // 0 0
            // 0 0
            // 1 0
            res += k - j;
        };
        //console.log(result);
        return result;
    };

    mergeSort(sums);
    //console.log(sums); [ -2, 3, 2, 5, 12, 8 ]
    return res;
};
/*
Runtime: 68 ms, faster than 100.00% 
Memory Usage: 42.9 MB, less than 18.75% 
*/
console.log(countRangeSum([-2, 5, -1, 3, 7, -4], -2, 2));