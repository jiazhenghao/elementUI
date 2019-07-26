/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var count = 0, sum = 0;
    var map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k))
            count += map.get(sum - k);
        map.set(sum, map.get(sum) + 1 || 1 );
    }
    //console.log(map);
    return count;
};
/*
Runtime: 60 ms, faster than 99.21% 
Memory Usage: 38.8 MB, less than 49.02% 
*/