/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var res = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j< words.length;j++) {
            if (j == i) continue;
            if (isPalindrome(words[i] + words[j])) {
                res.push([i, j]);
            }
        }
    }
    return res;
    
    function isPalindrome(str) {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - 1 - i]) 
                return false;
        } 
        return true;       
    }
};

/*
Runtime: 2972 ms, faster than 28.52% 
Memory Usage: 46.7 MB, less than 90.32% 
*/