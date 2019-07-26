/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0)
        return '';
    if (strs.length == 1)
        return strs[0];

    var str = strs[0];
    for (let i = 0; i < strs.length - 1; i++) {
        if (two(str, strs[i + 1]) == '') {
            return '';
        }
        else {
            str = two(str, strs[i + 1]);
        }
    }
    return str;
};

function two(str1, str2) {
    if (str1.length == 0 || str2.length == 0)
        return '';
    var str = '';
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] == str2[i])
            str = str + str1[i];
        else
            break;
    }
    return str;
}
/*
Runtime: 48 ms, faster than 98.82% 
Memory Usage: 37.4 MB, less than 5.03%
*/