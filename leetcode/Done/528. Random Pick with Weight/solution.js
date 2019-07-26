/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.map = new Map();
    this.sum = 0;
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.map.set(this.sum, i);
    }
    this.keys = [...this.map.keys()].sort((a, b) => a - b);
    console.log(this.map);
    console.log(this.keys);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const r = parseInt(Math.random() * this.sum);
    for (const key of this.keys) {
        if (r < key) {
            return this.map.get(key);
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

