/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (isValid(s.substring(j, i+1))) 
                count++;
        }
    }
    return count; 
};

var isValid = function(temp) {
    let startIndex = 0;
    for (let i = temp.length - 1; i >= temp.length / 2; i--) {
        if (temp[startIndex++] !== temp[i]) {
            return false;
        }
    }
    return true;
}

/*
Runtime: 448 ms, faster than 26.38% 
of JavaScript online submissions for Palindromic Substrings.
Memory Usage: 37.3 MB, less than 46.74% 
*/