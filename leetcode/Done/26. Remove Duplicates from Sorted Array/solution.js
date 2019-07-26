/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (chars) {
    var char = chars[0];

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] == char) {
            chars.splice(i, 1);
            i--;
        }   
        else {
            char = chars[i];
        }
    }

    return chars.length;
};
/*
O(n)
Runtime: 76 ms, faster than 66.38% 
Memory Usage: 37.5 MB, less than 19.22%
*/