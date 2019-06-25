/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    if (sum % 2 == 1) return false;// 求和除不尽2的，肯定gg
    const target = sum / 2;

    if (nums[nums.length - 1] > target) return false;// 最后一位比平均数大，GG

    const memo = new Array(target + 1).fill(false);//初始除了0是true，别的到target都是false
    memo[0] = true;

    for (const num of nums) {
        if (num > target) return false;// 当前值比平均数大，GG
        if (memo[target - num]) return true; //target-当前值 如果true，就找到了。

        for (let t = target; t >= num; t--) {
            //builds up reachable area
            memo[t] = memo[t - num]; //更新从target开始，一直到num的数值，关联true或者false
        }
    }

    return false;
};
canPartition([1, 2, 3, 4, 5, 6, 7, 9, 10, 22, 23, 12, 1, 9, 1, 4, 6, 19]);
/*
Runtime: 68 ms, faster than 95.72%
Memory Usage: 35.5 MB, less than 76.19%
*/