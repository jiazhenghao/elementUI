/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 * very slow but can solve the problem.
 */
var addOperators = function (num, target) {
    var arr = num.split('');
    var stack = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let newStack = [];
        for (let j = 0; j < stack.length; j++) {
            if (stack[j][stack[j].length - 1] != '0') {
                newStack.push(stack[j] + '' + arr[i]);
            } else if (stack[j].length >= 2 &&
                stack[j][stack[j].length - 2] != '+' &&
                stack[j][stack[j].length - 2] != '-' &&
                stack[j][stack[j].length - 2] != '*'
            ) {
                newStack.push(stack[j] + '' + arr[i]);
            }
            newStack.push(stack[j] + '+' + arr[i]);
            newStack.push(stack[j] + '-' + arr[i]);
            newStack.push(stack[j] + '*' + arr[i]);
        }
        stack = newStack;
    }
    var output = [];
    for (let i = 0; i < stack.length; i++) {
        if (eval(stack[i]) == target)
            output.push(stack[i]);
    }
    return output;
};
//console.log(addOperators("999999999", 80));
console.log(addOperators("2147483647", 2147483647)); 

