/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function (s, k) {
    // best candidates: most biggest count that fits current index;
    const candidates = new Array(26).fill(0);
    const allowedIndices = new Array(26).fill(0);
    let result = '';

    for (let c of s) {
        const index = c.charCodeAt(0) - 97;
        candidates[index]++;
    }

    for (let i = 0; i < s.length; i++) {
        let max = -1;
        let pos = -1;
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j] > 0 && candidates[j] > max && i >= allowedIndices[j]) {
                max = candidates[j];
                pos = j;
            }
        }
        if (max === -1) {
            return '';
        }
        candidates[pos]--;
        allowedIndices[pos] = i + k;
        result += String.fromCharCode(97 + pos);
    }
    return result;
};
/*
Runtime: 76 ms, faster than 100.00% 
Memory Usage: 43.9 MB, less than 100.00%
*/