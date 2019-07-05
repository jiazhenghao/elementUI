/*
Use one object for value to index mapping, another for index to value mapping.
insert - set index of new value to be current set size and increment set size.
remove - set last value (with index this.size - 1) to have index of the deleted value, 
remove value from both mappings and decrement this.size.
getRandom - randomize over [0, this.size) and get the value with the resulting index.
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.data = {};
    this.index = {};
    this.size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (val in this.data) return false;
    this.data[val] = this.size;
    this.index[this.size++] = val;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!(val in this.data)) return false;

    const index = this.data[val];

    this.size--;

    const lastValue = this.index[this.size];
    this.index[index] = lastValue;
    this.data[lastValue] = index;

    delete this.data[val];
    delete this.index[this.size];

    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.index[Math.floor(this.size * Math.random())];
};

/*
Runtime: 128 ms, faster than 96.69% 
of JavaScript online submissions for Insert Delete GetRandom O(1).
Memory Usage: 46 MB, less than 64.81%
*/