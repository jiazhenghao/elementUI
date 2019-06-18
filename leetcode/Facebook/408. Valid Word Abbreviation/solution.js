/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
    if (abbr.length > word.length) return false;
    if (word == abbr) return true;
    let pointerS = 0, num = '';//指针S，num用于存放多个数字拼凑的字符串
    for (let i = 0; i < abbr.length; i++) {
        if (abbr.charCodeAt(i) >= 48 && abbr.charCodeAt(i) <= 57) {
            num += abbr[i];
        }
        else if (num == '') {
            if (word[pointerS] != abbr[i]) return false;
            else {
                pointerS++;
                continue;
            }
        }
        else {
            if (num[0] == '0') return false;
            pointerS += num * 1;
            num = '';
            if (pointerS > word.length - 1) return false;
            if (word[pointerS] != abbr[i]) return false;
            else {
                pointerS++;
                continue;
            }
        }
    }
    if (num == '') return true;
    else if (num[0] == '0') return false;
    else return word.substring(pointerS).length == num;
};

/*
Runtime: 48 ms, faster than 100.00% 
Memory Usage: 34 MB, less than 41.18%
*/