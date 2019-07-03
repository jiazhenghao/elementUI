/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    if (S.length == 0) return 0;
    var count = 0;
    var result = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == '(') {
            count++;
        } else {
            if (count == 0) {
                result++;
            } else {
                count--;
            }
        }
    }
    return result + count;
};
/*
Runtime: 60 ms, faster than 76.64% 
of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
Memory Usage: 34.4 MB, less than 85.25% 
*/