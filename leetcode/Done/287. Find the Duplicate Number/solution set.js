var findDuplicate = function(nums) {
    var set = new Set();
    // var dump;
    // var count = 1;
    // var temp;
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i]) == false) {
            set.add(nums[i]);
        }
        else {
            return nums[i];
        }
    }
};
/*
Runtime: 56 ms, faster than 93.57% 
Memory Usage: 36.6 MB, less than 34.60%
*/