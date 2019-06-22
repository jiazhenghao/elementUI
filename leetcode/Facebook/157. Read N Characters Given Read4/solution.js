/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        while (buf.length < n) {
            const nibble = [];
            read4(nibble);
            if (nibble.length === 0) break;
            buf.push(...nibble);
        }
        buf.splice(n);
        return buf.length;
    };
};

/**
Runtime: 44 ms, faster than 98.87% 
Memory Usage: 33.8 MB, less than 47.69% 
 */