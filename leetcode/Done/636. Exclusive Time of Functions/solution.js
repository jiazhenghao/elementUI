/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    var stack = [];
    var res = new Array(n);
    res.fill(0);
    var s = logs[0].split(':');
    stack.push(s[0] * 1);

    var i = 1, prev = s[2] * 1;
    while (i < logs.length) {
        s = logs[i].split(':');
        if (s[1] == 'start') {
            if ( stack.length != 0) 
                res[stack[stack.length - 1]] += s[2]*1 - prev;
            stack.push(s[0] * 1);
            prev = s[2] * 1;
        } else {
            res[stack[stack.length - 1]] += s[2] *1 - prev + 1;
            stack.pop();
            prev = s[2] * 1 + 1;
        }
        i++;
    }
    return res;
};

/*
Runtime: 68 ms, faster than 100.00% 
Memory Usage: 39.6 MB, less than 86.96%
*/