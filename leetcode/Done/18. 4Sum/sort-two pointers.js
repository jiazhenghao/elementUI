/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    if (nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    let sum1 = nums[0] + nums[1] + nums[2] + nums[3];
    if (target < sum1)
        return [];
    else if (target == sum1) {
        return [[nums[0], nums[1], nums[2], nums[3]]];
    }

    let i, j, k, m, sum;
    let len = nums.length;
    let res = [];
    for (i = 0; i < len - 3; i++) {
        //avoid repetitive values
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (j = i + 1; j < len - 2; j++) {
            //avoid repetitive values
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
            k = j + 1;
            m = len - 1;
            while (k < m) {
                sum = nums[i] + nums[j] + nums[k] + nums[m];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[m]]);
                    //avoid repetitive values
                    while (nums[k + 1] === nums[k]) k++;
                    while (nums[m - 1] === nums[m]) m--;
                    k++;
                    m--;
                } else if (sum > target) {
                    m--;
                } else {
                    k++;
                }
            }
        }
    }
    return res;
};