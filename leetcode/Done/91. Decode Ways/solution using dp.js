/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0) return 0;
    const N = s.length;
    const dp = Array(N+1).fill(0);

    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for (let i = 2; i <= N; i++) {
        if (s[i-1] !== '0') {//若等于0，则必须跳过。
            dp[i] += dp[i-1];
        }
        if (s[i-2] === '1' || s[i-2] === '2' && s[i-1] <= '6') {//判断前面一位是不是1，2，如果不是，就不能加dpi-2
            dp[i] += dp[i-2];
        }
    }
    return dp[N];
};

/*
Runtime: 56 ms, faster than 96.99% 
Memory Usage: 33.8 MB, less than 96.53% 
*/


// "1222460"
// [ 1, 1, 2, 3, 5, 8, 8, 0 ]
// "9222460"
// [ 1, 1, 1, 2, 3, 5, 5, 0 ]