/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var arr = [];
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i]] == undefined) {
            if (arr[nums[i]+1] != undefined && arr[nums[i]-1] != undefined) {
                let low = arr[nums[i]-1];
                let high = arr[nums[i]+1];
                arr[nums[i]-1-low+1] = low + high + 1;
                arr[nums[i]+1+high-1] = low + high + 1;
                arr[nums[i]] = low + high + 1;//or = 1;
                count = Math.max(low + high + 1, count);
            }
            else if (arr[nums[i]+1] != undefined) {
                let high = arr[nums[i]+1];
                arr[nums[i]+1+high-1] = high + 1;
                arr[nums[i]] = high + 1;
                count = Math.max(high + 1, count);
            }
            else if (arr[nums[i]-1] != undefined) {
                let low = arr[nums[i]-1];
                arr[nums[i]-1-low+1] = low + 1;
                arr[nums[i]] = low + 1;
                count = Math.max(low + 1, count);
            }
            else {
                arr[nums[i]] = 1;
                count = Math.max(count, 1);
            }
        }
    }
    return count;
};
/*
Runtime: 52 ms, faster than 98.97% 
Memory Usage: 36 MB, less than 63.88%
*/