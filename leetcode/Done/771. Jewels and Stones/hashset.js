/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    if (J.length == 0 || S.length == 0) return 0;
    var set = new Set();
    for (let i = 0; i < J.length; i++) {
        set.add(J[i]);
    }
    var res = 0;
    for (let i = 0; i < S.length; i++) {
        if (set.has(S[i])) res++;
    }
    return res;
};
/*
Time Complexity: O(J\text{.length} + S\text{.length}))O(J.length+S.length)). 
The O(J\text{.length})O(J.length) part comes from creating J. 
The O(S\text{.length})O(S.length) part comes from searching S.
Space Complexity: O(J\text{.length})O(J.length).
*/