/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    if (s == '')
        return 0;
    var num = 0;

    while (s.length > 0) {
        if (s[0] == 'C') {
            if (s.substring(0, 2) == 'CM') {
                num += 900;
                s = s.substring(2);
                continue;
            }
            else if (s.substring(0, 2) == 'CD') {
                num += 400;
                s = s.substring(2);
                continue;
            }
            else {
                num += 100;
                s = s.substring(1);
                continue;
            }
        }
        else if (s[0] == 'X') {
            if (s.substring(0, 2) == 'XC') {
                num += 90;
                s = s.substring(2);
                continue;
            }
            else if (s.substring(0, 2) == 'XL') {
                num += 40;
                s = s.substring(2);
                continue;
            }
            else {
                num += 10;
                s = s.substring(1);
                continue;
            }
        }
        else if (s[0] == 'I') {
            if (s.substring(0, 2) == 'IX') {
                num += 9;
                s = s.substring(2);
                continue;
            }
            else if (s.substring(0, 2) == 'IV') {
                num += 4;
                s = s.substring(2);
                continue;
            }
            else {
                num += 1;
                s = s.substring(1);
                continue;
            }
        }
        else if (s[0] == 'M') {
            num += 1000;
            s = s.substring(1);
            continue;
        }
        else if (s[0] == 'D') {
            num += 500;
            s = s.substring(1);
            continue;
        }
        else if (s[0] == 'L') {
            num += 50;
            s = s.substring(1);
            continue;
        }
        else if (s[0] == 'V') {
            num += 5;
            s = s.substring(1);
            continue;
        }
    }
    return num;
};

/*
Runtime: 132 ms, faster than 96.93%
Memory Usage: 39.8 MB, less than 66.86%
*/