/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + carry == 10) {
            digits[i] = 0;
            carry = 1;
        }
        else {
            digits[i]++;
            carry = 0;
            break;
        }
    }
    if (carry == 1) {
        digits.unshift(1);
    }
    return digits;
};
/*
Runtime: 44 ms, faster than 99.85% 
Memory Usage: 33.8 MB, less than 60.16%
*/