/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const helper = function(tmp, inp, outp) {
    if (inp.length == 0) {
        outp.push(tmp.slice());
        return;
    }
    for (let i = 0; i < inp.length; i++) {
        tmp.push(inp[i]);
        inp.splice(i, 1);
        helper(tmp, inp, outp);
        inp.splice(i, 0, tmp.pop());
    }
}

var permute = function(nums) {
    let tmp = [], outp = [];
    helper(tmp, nums, outp);
    return outp;
};
/*
Approach 1: Backtracking
Runtime: 64 ms, faster than 90.31% 
Memory Usage: 37 MB, less than 46.25% 
*/