/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return nums[0] + nums[1];
    let result = nums[0] + nums[1] + nums[2];
    //first, do the sorting.
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        const cur = nums[i];//the current as the first one of the three elements
        let l = i + 1; //the middle one
        let r = nums.length - 1;//the last one

        while (l < r) {
            sum = cur + nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
            if (sum === target) return sum;
            if (sum < target) {
                while(nums[l] == nums[l+1]) { //if equals then continue
                    l++;
                }
                l++;
            }
            if (sum > target) {
                while (nums[r] == nums[r - 1]) { //if equals then continue
                    r--;
                }
                r--;
            }
        }
    }

    return result;
};

/*
Runtime: 56 ms, faster than 99.07% 
Memory Usage: 35.5 MB, less than 22.80%
*/