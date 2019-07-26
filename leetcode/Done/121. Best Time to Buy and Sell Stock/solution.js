/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let high = 0;
    let low = 0;
    let sell;
    if (prices[0] >= prices[1]) {
        low = prices[1];
    } else {
        high = prices[1];
        low = prices[0];
    }
    sell = high - low;

    for ( let i = 2; i < prices.length; i++ ) {
        if (high == 0) {
            if (prices[i] <= low) {
                low = prices[i];
                continue;
            } else {
                high = prices[i];
                if (high - low > sell) {
                    sell = high - low;
                }
                continue;
            }
        } else {
            if (prices[i] > high) {
                high = prices[i];
                if (high - low > sell) {
                    sell = high - low;
                }
                continue;
            } else if (prices[i] <= high && prices[i] >= low) {
                continue;
            } else {
                low = prices[i];
                high = 0;
                continue;
            }
        }
    }
   
    if (sell <= 0) return 0;
    else return sell;
};

/*
Runtime: 48 ms, faster than 99.35% 
Memory Usage: 35.3 MB, less than 82.43% 
*/

