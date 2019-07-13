/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0)
        return false;
    else if (x < 10)
        return true;
    let str = x + '';
    //console.log(typeof str);
    //let arr = str.split('');
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i])
            return false;
    }
    return true;    
};

/*
Runtime: 192 ms, faster than 89.57% 
Memory Usage: 46.3 MB, less than 8.58%
*/