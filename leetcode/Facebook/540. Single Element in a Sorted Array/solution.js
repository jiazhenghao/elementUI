var singleNonDuplicate = function (arr) {
    var res;
    find(arr);
    return res;

    function find(nums) {
        // if (nums.length == 1) {
        //     res = nums[0];
        //     return;
        // }
        if (nums.length == 3) {
            if (nums[0] != nums[1] && nums[0] != nums[2]) {
                res = nums[0];
                return;
            }
            if (nums[1] != nums[0] && nums[1] != nums[2]) {
                res = nums[1];
                return;
            }
            if (nums[2] != nums[0] && nums[2] != nums[1]) {
                res = nums[2];
                return;
            }
        }
        var mid = (nums.length - 1) / 2;
        if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
            res = nums[mid];
            return;
        } else if (nums[mid] == nums[mid - 1]) {
            if (((nums.length - 1) / 2) % 2 == 0) {
                find(nums.slice(0, (nums.length - 1) / 2 - 1));
            } else {
                find(nums.slice((nums.length - 1) / 2 + 1));
            }
        } else {
            if (((nums.length - 1) / 2) % 2 == 0) {
                find(nums.slice((nums.length - 1) / 2 + 1 + 1));
            } else {
                find(nums.slice(0, (nums.length - 1) / 2));
            }
        }
    }
};



/*
[1,1,4,4,5,5,6,8,8] //6
[1,1,2,3,3,4,4,8,8] //2
[3,3,7,7,10,11,11]  //10
[3,3,4,7,7,11,11]   // 4
Runtime: 44 ms, faster than 99.19% 
of JavaScript online submissions for Single Element in a Sorted Array.
Memory Usage: 34.4 MB, less than 37.45% 
Runtime: 44 ms, faster than 99.19% of 
JavaScript online submissions for Single Element in a Sorted Array.
Memory Usage: 34.7 MB, less than 36.26% 
*/