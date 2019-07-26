/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    var cash = 0, hold = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        //更新赚到的钱。
        cash = Math.max(cash, hold + prices[i] - fee);
        //何时买进最佳，之前买进的hold，现在买进的 cash-当前价格 即是这次的买进
        //2个的max就是持股的最大收益。
        hold = Math.max(hold, cash - prices[i]);
        console.log(cash, hold);
    }
    return cash;
};
/*
Runtime: 72 ms, faster than 93.64% 
of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
Memory Usage: 44.6 MB, less than 95.83% 
*/