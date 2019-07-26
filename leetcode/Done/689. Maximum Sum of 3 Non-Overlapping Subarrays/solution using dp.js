/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, K) {
    //W is an array of sums of windows
    var W = new Array(nums.length - K + 1);
    W.fill(0);
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= K) sum -= nums[i-K];
        if (i >= K-1) W[i-K+1] = sum;
    }
    var left = new Array(W.length);
    var best = 0;
    for (let i = 0; i < W.length; i++) {
        if (W[i] > W[best]) best = i;
        left[i] = best;
    }
    var right = new Array(W.length);
    best = W.length - 1;
    for (let i = W.length - 1; i >= 0; i--) {
        if (W[i] >= W[best]) best = i;
        right[i] = best;
    }

    var ans = [-1, -1, -1];
    
    for (let j = K; j < W.length - K; j++) {
        let i = left[j - K], k = right[j + K];
        if (ans[0] == -1 || W[i] + W[j] + W[k] >
                W[ans[0]] + W[ans[1]] + W[ans[2]]) {
            ans[0] = i;
            ans[1] = j;
            ans[2] = k;
        }
    }

    return ans;
};

/*
Runtime: 56 ms, faster than 96.30% 
Memory Usage: 38.9 MB, less than 20.00%
*/