/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.hashmap = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.hashmap[message] != undefined) {
        if (timestamp - this.hashmap[message] >= 10) {
            this.hashmap[message] = timestamp;
            return true;
        } else {
            return false;
        }
    } else {
        this.hashmap[message] = timestamp;
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

/*
Runtime: 144 ms, faster than 97.22%
Memory Usage: 51.2 MB, less than 67.44% 
*/