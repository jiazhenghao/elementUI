/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var arr = s.split(' ');
    var res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != '') {
            res.push(arr[i]);
        }
    }
    return res.join(' ');
};
/*
Runtime: 48 ms, faster than 97.39% 
of JavaScript online submissions for Reverse Words in a String.
Memory Usage: 34.9 MB, less than 48.73% 
*/