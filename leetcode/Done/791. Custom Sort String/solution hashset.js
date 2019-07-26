/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    let set = {};
    let result = '';

    for (let i = 0; i < S.length; i++) {
        set[S[i]] = 0;
    }

    for (let i = 0; i < T.length; i++) {
        if (set.hasOwnProperty(T[i])) {
            set[T[i]]++;
        } else {
            result += T[i];
        }
    }

    for (let val of Object.keys(set)) {
        if (set[val] !== 0) {
            for (let i = 0; i < set[val]; i++) {
                result += val;
            }
        }
    }

    return result;
};
/*
Runtime: 44 ms, faster than 99.47% 
Memory Usage: 34 MB, less than 76.16% 
*/

