/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    if (s.length == 0) return 0;
    var size = s.length;
    var ans = size;
    var dp = [];
    for (let i = 0; i < size; i++) {
        dp.push([]);
    }

    for (let i = 0; i < size; i++) {
        dp[i][i] = true;
    }

    for (let len = 2; len <= size; len++) {
        for (let start = 0; start+len <= size; start++) {
            let end = start + len - 1;
            if (start == end - 1) {
                dp[start][end] = s[start] == s[end];
            }
            else {
                dp[start][end] = s[start] == s[end] && dp[start+1][end-1];
            }
            if (dp[start][end]) {
                ans++;
            }
        }
    }
    return ans;
};

/*
Runtime: 80 ms, faster than 61.14% 
of JavaScript online submissions for Palindromic Substrings.
Memory Usage: 74.2 MB, less than 10.66%
*/