console.log(Math.pow(2, 31) - 1);//2147483647
console.log(Math.pow(2, 31) * (-1));//-2147483648

var divide = function(dividend, divisor) {
    var count = 0;
    if (dividend == 0)
        return 0;
    if (divisor == 1) {
        if (dividend > 2147483647 || dividend < -2147483648)
            return 2147483647;
        else 
            return dividend;
    }
    if (divisor == -1) {
        if (dividend < 0) {
            if (dividend <= -2147483648)
                return 2147483647;
            else
                return Math.abs(dividend)
        }
        else {
            if (dividend > 2147483647)
                return 2147483647;
            else
                return parseInt('-'+ dividend);
        }
    }
    
    let sign = 1;
    if ( (dividend < 0 && divisor > 0)  || (dividend > 0 && divisor < 0) )
        sign = -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend - divisor >= 0 && count <= 2147483648) {
        count++;
        dividend = dividend-divisor;
    }
    if (sign == 1) {
        if (count > 2147483647) {
            return 2147483647;
        }
        else {
            return count;
        }
    } else {
        if (count > 2147483648) {
            return 2147483647;
        } else {
            //console.log(1);
            return parseInt('-'+ count);
        }
    }       
           
};

/*
Runtime: 4776 ms, faster than 22.81%
Memory Usage: 36.5 MB, less than 6.63%


*/
