/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var low = 0, high = numbers.length - 1;
    while (low < high) {
        let sum = numbers[low] + numbers[high];
        if (sum == target)
            return [low + 1, high + 1];
        else if (sum < target)
            ++low;
        else
            --high;
    }
};
/*
Runtime: 44 ms, faster than 99.62% 
Memory Usage: 35.2 MB, less than 48.74% 
*/