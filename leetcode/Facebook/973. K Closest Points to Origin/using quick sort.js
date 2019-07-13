/**
 * solution2: quick select
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    const len = points.length;
    let l = 0, r = len - 1;
    while (l < r) {
        const mid = quickSelect(points, l, r);
        if (mid === K) break;
        else if (mid < K) l = mid + 1;
        else r = mid - 1;
    }
    return points.slice(0, K);
};

/**
 * 快排的变种
 * 选择任意点（通常初始化为第一个点），找到该点的在arr中的正确位置（即：以该点为界正确分类数组）
 * @param {array} arr 
 * @param {number} l 
 * @param {number} r 
 */
var quickSelect = function (arr, l, r) {
    const pivot = arr[l];
    while (l < r) {
        while (l < r && compare(arr[r], pivot) >= 0) r--;
        arr[l] = arr[r];
        while (l < r && compare(arr[l], pivot) <= 0) l++;
        arr[r] = arr[l];
    }
    arr[l] = pivot;
    return l;
}

/**
 * 比较距离原点的距离
 * @param {number[]} p1 
 * @param {number[]} p2 
 */
var compare = function (p1, p2) {
    return (p1[0] * p1[0] + p1[1] * p1[1]) - (p2[0] * p2[0] + p2[1] * p2[1]);
}

/*
Runtime: 152 ms, faster than 99.41% 
Memory Usage: 48 MB, less than 76.99% 
*/