/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let result = 0, sign = 1;
    const stack = [], opStack = [];

    for (let i = 0; i < s.length; i++) {
        const curr = s.charAt(i);
        if (curr === ' ') {
            continue;
        } else if (curr === '+') {
            sign = 1;
        } else if (curr === '-') {
            sign = -1;
        } else if (curr >= '0' && curr <= '9') {
            let num = curr;
            while (i + 1 < s.length && s.charAt(i + 1) >= '0' && s.charAt(i + 1) <= '9') {
                num += s.charAt(i + 1);
                i++;
            }
            result += sign * parseInt(num);
        } else if (curr === '(') {//把result推送到stack里，把sign也推入另一个stack
            stack.push(result);
            result = 0;//重制
            opStack.push(sign);
            sign = 1;//重制
        } else if (curr === ')') {//运算
            result = opStack.pop() * result + stack.pop();
            sign = 1;//重制。
        }
    }
    return result;
};

/*
Runtime: 64 ms, faster than 92.98% 
Memory Usage: 36.5 MB, less than 83.33% 
*/