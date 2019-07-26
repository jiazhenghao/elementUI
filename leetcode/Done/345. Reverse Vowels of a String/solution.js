/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var index = [];
    var arr = [];
    var as = s.split('');
    for (let i = 0; i < as.length; i++) {
        if (as[i] == 'a' || as[i] == 'e' || as[i] == 'i' || as[i] == 'o' || as[i] == 'u' ||
            as[i] == 'A' || as[i] == 'E' || as[i] == 'I' || as[i] == 'O' || as[i] == 'U') {
            arr.push(as[i]);
            index.push(i);
        }
    }
    for (let i = 0, j = arr.length - 1; i < index.length; i++ , j--) {
        as[index[i]] = arr[j];
    }
    return as.join('');
};
/*
Runtime: 64 ms, faster than 99.16% 
Memory Usage: 39.1 MB, less than 61.37%
*/