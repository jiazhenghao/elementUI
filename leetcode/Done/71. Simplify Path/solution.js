/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var directory = path.split('/');
    var stack = [];
    for (let i = 0; i < directory.length; i++) {
        if (directory[i] == '' || directory[i] == '.') continue;
        if (directory[i] == '..') {
            if (stack.length != 0)  stack.pop();
        }
        else 
            stack.push(directory[i]);
    }
    var result = '/';
    return result + stack.join('/');
};


/*
Runtime: 56 ms, faster than 95.56% 
Memory Usage: 35.8 MB, less than 64.14% 
*/