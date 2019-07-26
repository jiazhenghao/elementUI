/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.arr = [];
    this.capacity = capacity;
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        //更新队列,map不需要动
        let temp = this.arr.indexOf(key);
        let ele = this.arr.splice(temp, 1);
        this.arr.unshift(ele[0]);
        return this.map.get(key);
    }
    else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        //更新队列，
        let temp = this.arr.indexOf(key);
        let ele = this.arr.splice(temp, 1);
        this.arr.unshift(ele[0]);
        //更新map
        this.map.set(key, value);
    }
    else {
        if (this.arr.length < this.capacity) {
            this.map.set(key, value);
            this.arr.unshift(key);
            //无需更新队列
        }
        else {
            //先删队列arr里的第一个元素，同步更新map
            let k = this.arr.pop();
            this.map.delete(k);
            //再插入key进入arr，同步更新map
            this.map.set(key,value);
            this.arr.unshift(key);
        } 
    }    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
Runtime: 228 ms, faster than 31.07% 
Memory Usage: 59.4 MB, less than 25.34% 
*/