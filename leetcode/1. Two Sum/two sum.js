var twoSum = function(nums, target) {
    var arrResult = [];

    if (nums.length < 2) {
        return arrResult;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arrResult.push(i, j);
                return arrResult;
            } 
        }
    }
    return arrResult;

};

// Runtime: 112 ms, faster than 48.25% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.7 MB, less than 56.05% of JavaScript online submissions for Two Sum.
/*
Time complexity : O(n^2)
For each element, we try to find its complement by looping through the rest of array which 
takes O(n) time. Therefore, the time complexity is O(n^2).

Space complexity : O(1)
*/