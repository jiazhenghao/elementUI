var divide = function (dividend, divisor) {
    //排除所有的超大数字
    if (divisor === 0 || dividend > 2147483647 || dividend < -2147483648 
        || dividend < -2147483647 && divisor === -1) 
        return 2147483647;
    //判断符号
    let isNegative = dividend < 0 && divisor >= 0 || dividend >= 0 && divisor < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    //0剔除
    if (dividend === 0 || dividend < divisor) 
        return 0;

    //位运算
    let doubling = divisor;
    let count = 1;
    while (doubling < dividend && !(doubling & (1 << 30))) {
        doubling <<= 1;
        count <<= 1;
    }
    if (doubling > dividend) {
        doubling >>>= 1;
        count >>>= 1;
    }

    let res = count + divide(dividend - doubling, divisor);
    return isNegative ? 0 - res : res;
};

/*
Runtime: 60 ms, faster than 99.23% 
Memory Usage: 34.8 MB, less than 93.18% 

*/
console.log(1 << 30);//1*2^30;1073741824
console.log(9 << 2);//36
console.log(4 << 1);//8
console.log(Math.pow(2, 30));//1073741824
console.log(1073741835 & (1 << 30));