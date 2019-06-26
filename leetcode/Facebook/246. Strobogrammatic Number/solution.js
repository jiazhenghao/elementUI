/**
 * @param {string} num
 * @return {boolean}
 * //2、3、4、5、7、
 * //1、8、6、9、0
 */
var isStrobogrammatic = function (num) {
    if (num.length == 0) return true;
    if (num.indexOf('2') != -1 || num.indexOf('3') != -1 || num.indexOf('4') != -1
        || num.indexOf('5') != -1 || num.indexOf('7') != -1) {
        return false;
    }
    if (num.length % 2 == 0) {
        for (let i = 0; i < num.length / 2; i++) {
            if ((num[i] == '1' || num[i] == '8' || num[i] == '0') && (num[i] != num[num.length - 1 - i]))
                return false;
            if (num[i] == '6' && num[num.length - 1 - i] != '9') 
                return false;
            if (num[i] == '9' && num[num.length - 1 - i] != '6') 
                return false;
        }
    } else {
        if (num[(num.length - 1) / 2] == '6' || num[(num.length - 1) / 2] == '9')
            return false;
        for (let i = 0; i < (num.length - 1) / 2; i++) {
            if ((num[i] == '1' || num[i] == '8' || num[i] == '0') && (num[i] != num[num.length - 1 - i]))
                return false;
            if (num[i] == '6' && num[num.length - 1 - i] != '9')
                return false;
            if (num[i] == '9' && num[num.length - 1 - i] != '6')
                return false;
        }
    }
    return true;
};

/*
Runtime: 44 ms, faster than 99.22% 
Memory Usage: 33.9 MB, less than 39.66%
*/