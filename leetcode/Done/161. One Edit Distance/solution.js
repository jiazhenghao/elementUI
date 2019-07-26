/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    if (Math.abs(s.length - t.length) >= 2 || s == t) return false;
    if (s.length == t.length) {//相等，只判断replace的情况。
        for (let i = 0; i < s.length; i++) {
            if (s[i] != t[i]) {
                return s.substring(i + 1) == t.substring(i + 1);
            }
        }
    } else {//相差为1，判断插入或者删除的情况。
        if (s.length > t.length) {
            for (let i = 0; i < s.length; i++) {
                if (s[i] != t[i]) {
                    return s.substring(i + 1) == t.substring(i);
                }
            }
        } else {
            for (let i = 0; i < t.length; i++) {
                if (t[i] != s[i]) {
                    return t.substring(i + 1) == s.substring(i);
                }
            }
        }
    }
};

/*
Runtime: 48 ms, faster than 99.58% 
Memory Usage: 33.7 MB, less than 100.00%
*/