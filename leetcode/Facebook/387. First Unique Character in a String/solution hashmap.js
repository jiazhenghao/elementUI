/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // if (s.length == 0) return -1;
    // if (s.length == 1) return 0;
    var map = new Map();
    var count = 26;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) != -1) {
                map.set(s[i], -1); 
                if (count == 1) return -1;
                count--;
            }
        }
        else 
            map.set(s[i], i);
    }
    var res = Number.MAX_VALUE; 
    for (let value of map.values()) {
        if (value == -1) continue;
        else if (value < res) res = value; 
    }
    return res == Number.MAX_VALUE ? -1 : res;
};


/*
Runtime: 76 ms, faster than 94.25% 
Memory Usage: 37.4 MB, less than 98.09% 
*/
