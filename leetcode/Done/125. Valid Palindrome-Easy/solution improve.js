// console.log('zbc'.charCodeAt(0));
// // a : 97;  z: 122;
// console.log('9bc'.charCodeAt(0));
// // 0: 48    1: 49      9:57 
var isPalindrome = function (s) {
    let sSmall = s.toLowerCase();
    if (s.length == 0 || s.length == 1)
        return true;
    let i = 0;
    let j = s.length - 1;
    let left = '';
    let right = '';
    while (i < j) {
        if (left == '') {
            if (!(sSmall.charCodeAt(i) >= 97 && sSmall.charCodeAt(i) <= 122) && 
                    !(sSmall.charCodeAt(i) >= 48 && sSmall.charCodeAt(i) <= 57)) {
                i++;
                continue;
            } else {
                left = sSmall.charCodeAt(i);
            }
        } 
        if (right == '') {
            if (!(sSmall.charCodeAt(j) >= 97 && sSmall.charCodeAt(j) <= 122) && 
                    !(sSmall.charCodeAt(j) >= 48 && sSmall.charCodeAt(j) <= 57)) {
                j--;
                continue;
            } else {
                right = sSmall.charCodeAt(j);
            }
        }
        if (left != right)
            return false;
        else {
            left = '';
            right = '';
            i++;
            j--;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));//true
console.log(isPalindrome("race a car")); //false

/*
Runtime: 60 ms, faster than 98.87% 
Memory Usage: 36 MB, less than 97.75%
*/