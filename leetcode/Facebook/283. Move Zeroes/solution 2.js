/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 从前往后遍历，发现多少个0，记一下，先把0删掉，然后后面一起加。
 */
var moveZeroes = function(nums) {
    if (nums.length == 0) return;
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count++;
            nums.splice(i, 1);
            i--;
        }
    }
    //console.log(count);
    while (count != 0) {
        nums.push(0);
        count--;
    }
};
/*
Runtime: 52 ms, faster than 99.28% 
Memory Usage: 36 MB, less than 24.37%
*/