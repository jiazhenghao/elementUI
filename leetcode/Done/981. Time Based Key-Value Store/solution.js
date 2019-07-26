/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this.map = {};
    this.val = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map[key] == undefined) {
        this.map[key] = [timestamp];
        this.val[key] = [value];
    } else {
        this.map[key].push(timestamp);
        this.val[key].push(value);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (this.map[key] == undefined) {
        return "";
    } else {
        let temp = this.map[key];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] > timestamp) {
                if (i == 0) return "";
                else return this.val[key][i - 1];
            } else if (temp[i] == timestamp) {
                return this.val[key][i];
            }
        }
        return this.val[key][temp.length - 1];
    }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
/*
Runtime: 1908 ms, faster than 14.60% 
of JavaScript online submissions for Time Based Key-Value Store.
Memory Usage: 114.7 MB, less than 14.29%
*/