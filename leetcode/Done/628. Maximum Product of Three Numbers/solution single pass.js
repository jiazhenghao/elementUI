/*
find out the larger value out of min1 \times min2 \times max1min1×min2×max1 and
max1 \times max2 \times max3max1×max2×max3 to find the required maximum product.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
    let third = -1e9, second = -1e9, first = -1e9, smFirst = 1e9, smSecond = 1e9;

    for (let n of nums) {
        if (n > first) { third = second; second = first; first = n; }
        else if (n > second) { third = second; second = n; }
        else if (n > third) { third = n; }

        if (n < smFirst) { smSecond = smFirst; smFirst = n; }
        else if (n < smSecond) { smSecond = n; }
    }

    return Math.max(third * second * first, first * smFirst * smSecond);
};
/*
Runtime: 52 ms, faster than 100.00% 
of JavaScript online submissions for Maximum Product of Three Numbers.
Memory Usage: 37.4 MB, less than 88.71%
*/