var twoSum = function (nums, target) {
    //var arrResult = [];

    if (nums.length < 2) {
        return arrResult;
    }

    var map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    //console.log(map);
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            var j = map.get(target - nums[i]);
            if (j != i) {
                //console.log(i, j);
                return [i, j];
            }
        }
    }
    return [];

};

// var nums = [-1,-2,-3,-4,-5];
// var target = -8;
// console.log(twoSum(nums, target));

// var nums = [2, 7, 11, 15], target = 9;
// console.log(twoSum(nums, target));

// var nums = [0, 2, 1, 0], target = 0;
// console.log(twoSum(nums, target));

// var nums = [0, 2, 1, 0], target = -1;
// console.log(twoSum(nums, target));

// Runtime: 60 ms, faster than 87.27% of JavaScript online submissions for Two Sum.
// Memory Usage: 36.1 MB, less than 13.83% of JavaScript online submissions for Two Sum.


/*
Time complexity : O(n). 
We traverse the list containing n elements exactly twice. 
Since the hash table reduces the look up time to O(1), the time complexity is O(n).

Space complexity : O(n). 
The extra space required depends on the number of items stored in the hash table, 
which stores exactly n elements. 
*/