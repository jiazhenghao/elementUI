/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    if (J.length == 0 || S.length == 0) return 0;
    var res = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) != -1) res++;
    }
    return res;
};
/*
Runtime: 48 ms, faster than 98.28%
Memory Usage: 34.1 MB, less than 62.33%
*/