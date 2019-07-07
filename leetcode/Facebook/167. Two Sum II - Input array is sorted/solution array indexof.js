/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.slice(i + 1).indexOf(target - numbers[i]) != -1) {
            return [i + 1, numbers.slice(i + 1).indexOf(target - numbers[i]) + i + 2];
        }
    }
};
/*
Runtime: 444 ms, faster than 5.12% 
Memory Usage: 41.3 MB, less than 5.05% 
*/