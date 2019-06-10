var addBinary = function(a, b) {
    let carry = 0, i = a.length - 1, j = b.length - 1, str = '';
    while (i >= 0 || j >= 0 || carry != 0) {
        let n1 = i >= 0 ? a[i] : 0, n2 = j >= 0 ? b[j] : 0;
        let sum = carry + n1 * 1 + n2 * 1;
        if (sum == 2) {
            sum = 0;
            carry = 1;
        }
        else if (sum == 3) {
            sum = 1;
            carry = 1;
        }
        else {
            carry = 0;
        }
        str = sum + str;
        i--;
        j--;
    }
    return str;
};
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));

/*
Runtime: 44 ms, faster than 100.00%
Memory Usage: 35.8 MB, less than 41.44%
*/