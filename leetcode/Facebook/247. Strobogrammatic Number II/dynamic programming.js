/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
    var dp = [[''], ['0', '1', '8']];
    for (var i = 2; i < n + 1; i++) {
        dp[i] = [];
        for (var center of dp[i - 2]) {
            if (i != n) dp[i].push('0' + center + '0');
            dp[i].push('1' + center + '1');
            dp[i].push('6' + center + '9');
            dp[i].push('8' + center + '8');
            dp[i].push('9' + center + '6');
        }
    }
    return dp[n];
};
/*
Runtime: 112 ms, faster than 88.33% 
Memory Usage: 59.1 MB, less than 21.43%
*/