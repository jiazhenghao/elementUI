/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length == 0 || nums.length == 1)
        return;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if(forward(nums, i)) {
             break;
        }
    }
};

//仍然需要验证，函数里传arr，是否会改变array
function forward(nums, i) {
    if (i == 0) {
        for (let j = 0; j < nums.length / 2; j++) {
            let temp = nums[j];
            nums[j] = nums[nums.length - 1 - j];
            nums[nums.length - 1 - j] = temp;
        }
        return true;
    }
    for (let j = i-1; j >= 0; j--) {
        if (nums[j] >= nums[j + 1]) {
            continue;
        }
        else {
            for (let k = j+1; k<= i; k++) {
                if (nums[k] <= nums[j]) {
                    let temp = nums[k-1];
                    nums[k-1] = nums[j];
                    nums[j] = temp;
                    break;
                }
                if (k == i) {
                    let temp = nums[k];
                    nums[k] = nums[j];
                    nums[j] = temp;
                }
            }
            //reverse 一把j 到 i的
            let arr = nums.splice(j+1);
            
            arr.sort(function(a,b) {return a - b;});
            for (let index = 0; index < arr.length; index++) {
                nums.push(arr[index]);
            }
            return true;
        }
    }
    return false;
}

/*
Runtime: 56 ms, faster than 98.22%
Memory Usage: 35.1 MB, less than 24.17%
*/