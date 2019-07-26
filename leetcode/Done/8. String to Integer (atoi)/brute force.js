var myAtoi = function(str) {
    var num = parseInt(str);
    if (num > 2147483647) {
        return 2147483647;
    }
    if (num < -2147483648) {
        return -2147483648;
    }
    if (isNaN(num)) {
        return 0;
    }
    return num;
};

/*
console.log(myAtoi("42")); //42
console.log(myAtoi("   -42"));//-42
console.log(myAtoi("4193 with words"));//4193
console.log(myAtoi("words and 987"));//0
console.log(myAtoi("-91283472332"));//-2147483648
*/

/*
Runtime: 68 ms, faster than 98.14% 
Memory Usage: 35.7 MB, less than 84.66% 
*/