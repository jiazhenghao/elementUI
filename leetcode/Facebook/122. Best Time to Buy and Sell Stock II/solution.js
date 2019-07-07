/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var cash = 0, hold = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        //更新赚到的钱。
        cash = Math.max(cash, hold + prices[i]);
        //何时买进最佳，之前买进的hold，现在买进的 cash-当前价格 即是这次的买进
        //2个的max就是持股的最大收益。
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};
/*
Runtime: 48 ms, faster than 99.17% 
Memory Usage: 35.4 MB, less than 54.09%
*/
