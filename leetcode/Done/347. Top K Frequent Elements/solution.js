/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map();
    var res = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    //nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    var sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    return res;
};
/*
Runtime: 68 ms, faster than 93.17% 
Memory Usage: 37.2 MB, less than 82.29% 
*/
//console.log(topKFrequent([1,0,2,3,2,8,8,7,6,7,7,7,7,4,4,4,4,3,1,1,2,2,3], 3));
//Map { 1 => 3, 0 => 1, 2 => 4, 3 => 3, 8 => 2, 7 => 5, 6 => 1, 4 => 4 }
