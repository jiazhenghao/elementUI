/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '')
        return 0;
    if (haystack == '' || haystack.length < needle.length)
        return -1;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] != needle[0]) {
            continue;
        }
        let temp = i + 1;
        let j = 1;
        while (j < needle.length && haystack[temp] == needle[j]) {
            temp++;
            j++;
        }
        if (j == needle.length) 
            return i;
    }
    return -1;
};
/*
Runtime: 48 ms, faster than 97.93%
Memory Usage: 35.1 MB, less than 39.46%

*/