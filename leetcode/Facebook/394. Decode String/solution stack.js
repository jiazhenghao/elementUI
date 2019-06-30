/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let cntStack = [], resStack = [], res = '', ind = 0;
    while (ind < s.length) {
        if (!isNaN(s[ind])) {
            let sum = Number(s[ind]);
            ind++;
            while (!isNaN(s[ind])) {
                let tmp = Number(s[ind]);
                sum = 10 * sum + tmp;
                ind++;
            }
            cntStack.push(sum);
            continue;
        }
        else if (s[ind] == '[') {
            resStack.push(res);
            res = '';
        }
        else if (s[ind] == ']') {
            res = resStack.pop() + res.repeat(cntStack.pop());
        }
        else
            res += s[ind];
        ind++;
    }
    return res;
};
/*
Runtime: 44 ms, faster than 98.52% 
Memory Usage: 33.9 MB, less than 35.33%
*/
/*
We can use two stack, the cntStack is to record the repeated number, 
while the resStack is to record the temperal result. 
Thus, the solution is as follows:
1. If we meet numerical char, we resolve its value
2. If we meet '[', we push the temperal result to resStack
3. If we meet ']', we calculate the repeated substring, and append it to the temperal resul
4. Else, we add the char to temperal result
*/