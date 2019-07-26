/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    const res = [];
    if (num === null || num.length === 0) { /*edge case*/
        return res;
    }
    calculate(num, 0, '', target, 0, 0, 0, res);
    return res;
}

function calculate(nums, start, left, target, sum, product, last, res) {
    // console.log('target', target);
    // console.log('sum', sum);
    // console.log('nums.length', nums.length);
    // console.log('start+1', start+1);
    if (nums.length < start + 1) {
        if (target === sum && left.length !== 0 && last === 0) {
            res.push(left.substr(1));
        }
        return;
    }
    const num = last * 10 + parseInt(nums.substr(start, 1), 10);

    if (left.length > 0) {
        // "*", "-" is not allowed as first operator. 
        calculate(nums, start + 1, left + "*" + num, target, sum - product + product * num, product * num, 0, res);
        calculate(nums, start + 1, left + "-" + num, target, sum - num, -num, 0, res);
    }
    calculate(nums, start + 1, left + "+" + num, target, sum + num, num, 0, res);

    if (num !== 0) {
        calculate(nums, start + 1, left, target, sum, product, num, res);
    }
}

