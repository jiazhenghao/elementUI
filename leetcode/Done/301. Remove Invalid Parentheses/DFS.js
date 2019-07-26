/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    let left = 0, right = 0, pair = 0;

    let res = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') left++;
        else if (s[i] === ')') {
            if (left > 0) left--;
            else right++;
        }
    }
    dfs(pair, 0, left, right, s, "", res);

    function dfs(pair, index, left, right, s, solution, res) {
        if (s.length === index) {
            if (left === 0 && right === 0 && pair === 0) {
                for (var i = 0; i < res.length; i++) {
                    if (res[i] === solution) return;//如果solution已经重复了，就不要了。
                }
                res.push(solution);//否则就把这个solution加进result里面。
            }
            return;
        }

        if (s[index] === '(') {
            if (left > 0) {//如果left是大于0的，说明opening括号需要删除的。
                dfs(pair, index + 1, left - 1, right, s, solution, res);
            }
            //不管怎么样，把opening括号算进去，就要pair+1；
            dfs(pair + 1, index + 1, left, right, s, solution + s[index], res);
        } else if (s[index] === ')') {
            //如果right是大的，则删除这个，可以让right变小。
            if (right > 0) dfs(pair, index + 1, left, right - 1, s, solution, res);
            //如果pair大于0，就说明把这个closing括号算进去，就可以让pair为0。
            if (pair > 0) dfs(pair - 1, index + 1, left, right, s, solution + s[index], res);
        } else {
            //遇到别的，就直接加就行。
            dfs(pair, index + 1, left, right, s, solution + s[index], res);
        }
    };
    return res;
};

/*
Runtime: 48 ms, faster than 99.78% 
Memory Usage: 36.9 MB, less than 77.78% 
*/
/*
"(a)b(c)d)e)f(g)h(k()"
left = 1 right = 2;

*/