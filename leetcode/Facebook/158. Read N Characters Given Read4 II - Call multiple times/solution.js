/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    let temp = [];
    return function (buf, n) {
        while (buf.length < n) {
            if (temp.length === 0) { read4(temp); }; // if no bytes unused from last call, read 4 bytes
            if (temp.length === 0) { break; } // end of file
            while (buf.length < n && temp.length > 0) {
                buf.push(temp.shift()); // copy from temp to buf
            }
        }
        return buf.length;
    };
};