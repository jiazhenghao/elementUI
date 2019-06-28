/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var hash = { 0: 1 };
    for(var i=0; i < nums.length; i++) {
        var newHash = {};
        for(var j in hash) {
            var jValue = parseInt(j);
            newHash[jValue + nums[i]] = (newHash[jValue + nums[i]] || 0) + hash[j];
            newHash[jValue - nums[i]] = (newHash[jValue - nums[i]] || 0) + hash[j];
        }
        hash = newHash;
    }
    return hash[S] || 0;
};

// 1. 首先，我取第一个数，+ 或者 - 得到 2个结果
// 2. 然后，我取第二个， 在之前结果的基础上+ 或者 -
// 3. 依次类推，得到的不同结果为key， 重复出现的次数为value
