/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var map = {};
    var res = [];
    for (let i = 0; i < strs.length; i++) {
        let temp = strs[i].split('').sort((a, b) => {
            if (a > b) return 1;
            else if (a == b) return 0;
            else return -1;
        }).join('');
        if (map[temp] != undefined) {
            res[map[temp]].push(strs[i]);
        } else {
            map[temp] = res.length;
            res.push([]);
            res[map[temp]].push(strs[i]);
        }
    }
    return res;
};

/*
Runtime: 116 ms, faster than 91.89% 
of JavaScript online submissions for Group Anagrams.
Memory Usage: 47.2 MB, less than 19.39% 
*/

