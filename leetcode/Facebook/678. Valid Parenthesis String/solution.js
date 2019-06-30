/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    if (s.length == 0) return true;
    var frontStack = [];
    var starStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '*') {
            starStack.push(i);
        } else if (s[i] == '(') {
            frontStack.push(i);
        } else {
            if (frontStack.length != 0) {
                frontStack.pop();
            } else {
                if (starStack.length == 0) {
                    return false;
                } else {
                    starStack.pop();
                }
            }
        }
    }

    if (frontStack.length == 0) {
        return true;
    }
    else {
        if (frontStack.length > starStack.length) return false;
        while (frontStack.length != 0) {
            if (frontStack[frontStack.length - 1] > starStack[starStack.length - 1]) {
                return false;
            } else {
                frontStack.pop();
                starStack.pop();
            }
        }
    }
    return true;
};

/*
Runtime: 44 ms, faster than 99.21% 
Memory Usage: 33.8 MB, less than 52.00% 
*/