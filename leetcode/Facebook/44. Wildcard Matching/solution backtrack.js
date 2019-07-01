/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var sLen = s.length, pLen = p.length;
    var sIdx = 0, pIdx = 0;//s_idx to iterate over the string, and p_idx
    var starIdx = -1, sTmpIdx = -1;
    //a possible backtrack the star position in star_idx variable, 
    //and the current string pointer in s_tmp_idx variable.

    while (sIdx < sLen) {
        // If the pattern caracter = string character
        // or pattern character = '?'
        if (pIdx < pLen && (p[pIdx] == '?' || p[pIdx] == s[sIdx])) {
            ++sIdx;
            ++pIdx;
        }
        // If pattern character = '*'
        else if (pIdx < pLen && p[pIdx] == '*') {
            // Check the situation
            // when '*' matches no characters
            starIdx = pIdx;
            sTmpIdx = sIdx;
            ++pIdx;
        }
        // If pattern character != string character
        // or pattern is used up
        // and there was no '*' character in pattern
        else if (starIdx == -1) {
            return false;
        }
        // If pattern character != string character
        // or pattern is used up
        // and there was '*' character in pattern before
        else {
            // Backtrack: check the situation
            // when '*' matches one more character
            pIdx = starIdx + 1;
            sIdx = sTmpIdx + 1;
            sTmpIdx = sIdx;
        }
    }
    // The remaining characters in the pattern should all be '*' characters
    for (let i = pIdx; i < pLen; i++)
        if (p[i] != '*') return false;
    return true;

};

/*
Runtime: 92 ms, faster than 97.20% 
of JavaScript online submissions for Wildcard Matching.
Memory Usage: 38.7 MB, less than 82.52%
*/