var addStrings = function(num1, num2) {
    //这个算法模拟了人的行为，从左往右计算，
    let ret = '', carry = 0, i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        //n1, n2 就是各自字符串的当前值
        let n1 = i >= 0 ? num1[i--] : 0;
        let n2 = j >= 0 ? num2[j--] : 0;
        //sum就是进位+n1+n2
        let sum = carry + n1 * 1 + n2 * 1;
        carry = Math.trunc(sum / 10);
        ret = (sum % 10) + ret;
    }
    return ret;
};

console.log(addStrings('6994', '36'));
// let ss = 9 + undefined;
// console.log(ss);

/*
Runtime: 48 ms, faster than 100.00% 
Memory Usage: 37.1 MB, less than 22.09% 
*/