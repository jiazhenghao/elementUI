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
            console.log('???xxx');
            ++sIdx;
            ++pIdx;
            console.log(sIdx, pIdx, starIdx, sTmpIdx);
        }
        // If pattern character = '*'
        else if (pIdx < pLen && p[pIdx] == '*') {
            // Check the situation
            // when '*' matches no characters
            console.log('***');
            starIdx = pIdx;
            sTmpIdx = sIdx;
            ++pIdx;
            console.log(sIdx, pIdx, starIdx, sTmpIdx);
        }
        // If pattern character != string character
        // or pattern is used up
        // and there was no '*' character in pattern
        else if (starIdx == -1) {
            console.log('3333');
            console.log(sIdx, pIdx, starIdx, sTmpIdx);
            return false;
        }
        // If pattern character != string character
        // or pattern is used up
        // and there was '*' character in pattern before
        else {
            // Backtrack: check the situation
            // when '*' matches one more character
            console.log('backtracking');
            pIdx = starIdx + 1;
            sIdx = sTmpIdx + 1;
            sTmpIdx = sIdx;
            console.log(sIdx, pIdx, starIdx, sTmpIdx);
        }
    }
    // The remaining characters in the pattern should all be '*' characters
    for (let i = pIdx; i < pLen; i++)
        if (p[i] != '*') return false;
    console.log(sIdx, pIdx, starIdx, sTmpIdx);
    console.log(p);
    return true;

};

console.log(isMatch("adcjkbdk", "*a?c*b?k*"));

/*
***
0 1 0 0
???xxx
1 2 0 0
???xxx
2 3 0 0
???xxx
3 4 0 0
***
3 5 4 3
backtracking
4 5 4 4
backtracking
5 5 4 5
???xxx
6 6 4 5
???xxx
7 7 4 5
???xxx
8 8 4 5
8 8 4 5
*a?c*b?k*
true
*/