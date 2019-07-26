/**
 * Initialize your data structure here.
 */

var RandomizedCollection = function () {
    this.map = {};  //val: [idx1, idx2]
    this.array = []; //[[val,0],[val,1] ...]
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    let res = true;
    if (this.map[val] !== undefined) res = false;
    this.map[val] = this.map[val] || [];
    this.map[val].push(this.array.length);
    this.array.push([val, this.map[val].length - 1]);

    return res;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (this.map[val] === undefined) return false;

    let valIdx = this.map[val].pop();
    if (this.map[val].length === 0) delete (this.map[val]);
    let lastIdx = this.array.length - 1;
    if (valIdx === lastIdx) {
        this.array.pop();
        return true;
    }

    [this.array[valIdx], this.array[lastIdx]] = [this.array[lastIdx], this.array[valIdx]];
    this.array.pop();

    let key = this.array[valIdx][0];
    let idx = this.array[valIdx][1];
    this.map[key][idx] = valIdx;

    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    return this.array[Math.floor(Math.random() * this.array.length)][0];
};

