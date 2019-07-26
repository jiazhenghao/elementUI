/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    if (k == 1) return nums;
    var res = [];
    if (k % 2 == 0) {
        let temp = [];
        for (let i = 0; i < k; i++) {
            temp.push(nums[i]);
        }
        temp.sort((a, b) => a - b);
        res.push(medianEven(temp));
        for (let i = k; i < nums.length; i++) {
            //nums[i] in, nums[i-k] out;
            if (nums[i] == nums[i - k]) {//节约时间
                res.push(medianEven(temp));
                continue;
            }
            //先把nums[i-k] 凹凸 
            temp.splice(temp.indexOf(nums[i - k]), 1);
            if (temp[temp.length - 1] < nums[i]) {
                temp.push(nums[i]);
            } else {
                for (let j = 0; j < temp.length; j++) {
                    if (nums[i] <= temp[j]) {
                        temp.splice(j, 0, nums[i]);
                        break;
                    }
                }
            }
            res.push(medianEven(temp));
        }
        return res;
    }
    else {
        let temp = [];
        for (let i = 0; i < k; i++) {
            temp.push(nums[i]);
        }
        temp.sort((a, b) => a - b);
        res.push(medianOdd(temp));//第一个送进result
        for (let i = k; i < nums.length; i++) {
            //nums[i] in, nums[i-k] out;
            if (nums[i] == nums[i - k]) {//节约时间
                res.push(medianOdd(temp));
                continue;
            }
            //先把nums[i-k] 凹凸 
            temp.splice(temp.indexOf(nums[i - k]), 1);
            if (temp[temp.length - 1] < nums[i]) {
                temp.push(nums[i]);
            } else {
                for (let j = 0; j < temp.length; j++) {
                    if (nums[i] <= temp[j]) {
                        temp.splice(j, 0, nums[i]);
                        break;
                    }
                }
            }
            res.push(medianOdd(temp));
        }
        return res;
    }

    function medianEven(sortedArray) {
        return (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
    }
    function medianOdd(sortedArray) {
        return sortedArray[(sortedArray.length - 1) / 2];
    }
};

/*
Runtime: 132 ms, faster than 77.78%
Memory Usage: 39 MB, less than 100.00%
*/