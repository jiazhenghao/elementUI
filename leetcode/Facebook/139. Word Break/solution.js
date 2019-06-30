/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var wordDictSet = new Set(wordDict);//hashset
    var dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

// "leetcode"
// ["leet","code"]
// [ true, <3 empty items>, true, <3 empty items>, true ]
/*
Dynamic Programming
Runtime: 60 ms, faster than 85.82%
Memory Usage: 36.2 MB, less than 73.27%
*/
