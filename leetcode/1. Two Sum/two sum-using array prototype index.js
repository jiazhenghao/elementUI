var twoSum = function(nums, target) {
    var arrResult = [];

    if (nums.length < 2) {
        return arrResult;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target-nums[i] ,i+1);
        if( index != -1) {
            arrResult.push(i, index);
            return arrResult;
        } 
    }
    
    return arrResult;
};

// var nums = [-1,-2,-3,-4,-5];
// var target = -8;
// console.log(twoSum(nums, target));

// var nums = [2, 7, 11, 15], target = 9;
// console.log(twoSum(nums, target));

// Runtime: 140 ms, faster than 27.87% of JavaScript online submissions for Two Sum.
// Memory Usage: 33.8 MB, less than 98.22% of JavaScript online submissions for Two Sum.

//因为没有额外创建什么，所以消耗的内存空间很小。
