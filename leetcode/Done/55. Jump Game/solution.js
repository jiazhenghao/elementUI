/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length == 0) {
        return false;
    }
    if (nums.length == 1) {
        return true;
    }
    nums.pop();
    nums.reverse();
    
    
    while(nums.length > 0) {
        if (nums[0] != 0) {
            nums.shift();
        }
        else {
            if (!validate(nums)) {
                return false;
            }
            //continue;
        }
    }
    
    return true;
};

function validate(nums) {
    if (nums.length == 1) {
        return false;
    }
    for (let i = 1; i< nums.length; i++) {
        if (nums[i] > i) {
            nums.splice(0, i+1);
            //console.log(nums);
            return true;
        }
    }
    return false;
    
}


console.log(canJump([2, 0, 0]));
// nums = [1,2,3,4,5];
// nums.splice(0, 4);
// console.log(nums);