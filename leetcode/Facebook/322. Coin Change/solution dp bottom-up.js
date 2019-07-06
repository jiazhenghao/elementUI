/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var max = amount + 1;             
    var dp = Array(amount + 1);
    dp.fill(max);
    dp[0] = 0;   
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
/*
Runtime: 84 ms, faster than 92.32% 
Memory Usage: 36.9 MB, less than 93.59%
*/