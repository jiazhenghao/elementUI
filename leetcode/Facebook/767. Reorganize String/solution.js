/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
    if (S.length <= 1) return S;
    var map = {};
    var max = 1;
    var char = S[0];
    var sum = S.length;
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = ++map[S[i]] || 1;
        if (map[S[i]] > max) {
            max = map[S[i]];
            char = S[i];
        }
    }
    if (max * 2 - 1 > sum) return "";
    var arr = [];
    for (let i = 0; i < max; i++) {
        arr[i] = char;
    }
    console.log(arr);
    delete map[char];
    var index = 0;
    for (let key in map) {
        for (let i = 0; i < map[key]; i++) {
            arr[index % max] = arr[index % max] + key;
            index++;
        }
    }
    return arr.reduce((acc, ele) => acc + ele, '');
};
/*
Runtime: 60 ms, faster than 89.08% 
of JavaScript online submissions for Reorganize String.
Memory Usage: 36.6 MB, less than 28.85%
*/