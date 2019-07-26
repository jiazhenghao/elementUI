/**
 * @param {number[]} w
 */
var Solution = function (w) {
    const newWeights = [];
    let sum = 0;

    for (const weight of w) {
        sum = weight + sum;
        newWeights.push(sum);
    }

    this.w = newWeights;
    this.max = newWeights[newWeights.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const { max, w } = this;
    const target = Math.floor(Math.random() * max);

    let left = 0;
    let right = w.length;

    // Begin binary search
    while (left < right) {
        const mid = (left + right) >> 1;

        if (target >= w[mid]) left = mid + 1;
        else right = mid;
    }

    return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(w)
 * var param_1 = obj.pickIndex()
 */
/*
Runtime: 200 ms, faster than 83.50 % 
Memory Usage: 47 MB, less than 100.00 %
*/