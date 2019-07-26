/**
 * @param {number[]} w
 */
var Solution = function (w) {
    // convert input array into the prefix sum
    let preSum = Array(w.length + 1);
    preSum[0] = 0;
    for (let i = 0; i < w.length; i++) {
        preSum[i + 1] = preSum[i] + w[i];
    }
    this.weights = preSum;
    this.maxWeight = preSum[preSum.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    // generate a random value between 0 (inclusive) and maxWeight(exclusive)
    const r = genRandInt(0, this.maxWeight);
    // binary search to find the possible index
    let start = 0,
        end = this.weights.length - 2;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (this.weights[mid] === r) return mid;
        else if (this.weights[mid] < r) start = mid;
        else end = mid - 1;
    }
    if (this.weights[end] <= r) return end;
    return start;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */

function genRandInt(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}
/*
Runtime: 184 ms, faster than 100.00% 
Memory Usage: 47.1 MB, less than 100.00%
*/