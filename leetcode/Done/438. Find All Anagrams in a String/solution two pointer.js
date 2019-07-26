/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var left = 0;
    var right = 0;
    
    //var constArr = p.split('');
    var arrP = p.split('');

    var result = [];
    while (right < s.length) {
        if (arrP.indexOf(s[right]) != -1 ) {
            let temp = arrP.indexOf(s[right]);
            arrP.splice(temp, 1);
            if (arrP.length == 0) {
                result.push(left);
                while (right + 1 < s.length && s[right + 1] == s[left]) {
                    left++;
                    right++;
                    result.push(left);
                }
                left++;
                right = left;
                arrP = p.split('');
            } else {
                right++;
            }
        }
        else {
            left++;
            right = left;
            arrP = p.split('');
        }
    }
    return result;
};

/*
Runtime: 6928 ms, faster than 9.34% 
of JavaScript online submissions for Find All Anagrams in a String.
Memory Usage: 66.7 MB, less than 5.30% 

*/

console.log(findAnagrams(
    "cbadddcbaddddddcbaddddddddddcba"
    , "abcdd"
    ));
