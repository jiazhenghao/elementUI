/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    var result = 0;
    for(var i = 0; i < 32; i++){
        var one = 0;//初始这一位是1的数量定位0个。
        for(var j = 0; j < nums.length; j++){
            one += nums[j] >> i & 1;
        }
        //对于这一轮迭代，只要发现这一轮为1的数量 * 为0的数量
        result += one * (nums.length - one);
    }
    return result;
};


/*
Runtime: 56 ms, faster than 97.37% 
Memory Usage: 37.5 MB, less than 44.83%
*/