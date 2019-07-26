/*
profit[i] is the maximum profit one can obtain doing one transaction given prices[0..i].

profit2[i] is the maximum profit one can obtain doing one transaction given prices[i..n-1].
*/
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;

    var min = prices[0];
    var max = prices[0];
    var profits = [0];
    var profits2 = [0];
    var profit = 0;
    var cur, i;

    // from left to right.
    for (i = 1; i < prices.length; ++i) {
        cur = prices[i];

        if (cur > max) {
            max = cur;
            if (max - min > profit) profit = max - min;
        }
        if (cur < min) {
            min = cur;
            max = cur;
        }

        profits[i] = profit;
    }

    min = prices[prices.length - 1];
    max = prices[prices.length - 1];
    profit = 0;

    // from right to left.
    for (i = prices.length - 2; i >= 0; --i) {
        cur = prices[i];

        if (cur < min) {
            min = cur;
            if (max - min > profit) profit = max - min;
        } else if (cur > max) {
            max = cur;
            min = cur;
        }

        profits2[i] = profit;
    }

    // find the max of (profits[i] + profits2[i]).
    max = 0;
    for (var j = 0; j < profits.length; ++j) {
        profit = profits[j] + profits2[j];
        if (profit > max) {
            max = profit;
        }
    }
    return max;
};

/*
Runtime: 64 ms, faster than 82.49% 
Memory Usage: 37.2 MB, less than 38.20% 
*/

