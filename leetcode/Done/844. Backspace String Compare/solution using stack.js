/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    return read(S) == read(T);

    function read(str) {
        var stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] != '#')
                stack.push(str[i])
            else if (stack.length != 0)
                stack.pop();
        }
        return stack.join('');
    }
};
/*
Runtime: 52 ms, faster than 95.89% 
Memory Usage: 35 MB, less than 74.82% 
*/