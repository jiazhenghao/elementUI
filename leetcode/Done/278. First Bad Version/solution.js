/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    var result = {x: 0};
    return function(n) {
        //排除1和2的特例
        if (n == 1) 
            return 1;
        if (n == 2 ) {
            if (isBadVersion(1)) {
                return 1;
            }else {
                return 2;
            }
        } 
        
        //binary查找
        if (isBadVersion(Math.ceil(n / 2)) ) {
            find(1, Math.ceil(n / 2));
        }
        else {
            find(Math.ceil(n / 2), n);
        }
        return result.x;
    };
    
    function find(m, n) {
        //这是循环最后点
        if (n - m == 1) {
            if (isBadVersion(m)) {
                result.x = m;
            }
            else {
                result.x = n;
            }
            return;
        }
        //这是循环点
        let median = Math.ceil ((m + n) / 2) ;
        if (isBadVersion(median) ) {
            find(m, median);
        }
        else {
            find(median, n);
        }
    }
};

/*
Runtime: 40 ms, faster than 99.64% 
Memory Usage: 33.7 MB, less than 90.38% 
*/