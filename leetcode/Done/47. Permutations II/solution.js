/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let results = [];

    nums.sort((a, b) => {//先排序nlog(n)
        return a - b;
    });

    (function getPermutations(prefix, rest) {
        if (rest.length === 0) {//完成
            results.push(prefix);
            return;
        }

        for (let i = 0; i < rest.length; i++) {
            if (i > 0 && rest[i] === rest[i - 1]) continue;//重复的就继续
            getPermutations(prefix.concat(rest[i]), rest.slice(0, i).concat(rest.slice(i + 1)));
        }
    })([], nums);

    return results;
};

/*
Runtime: 68 ms, faster than 98.02% 
Memory Usage: 37.8 MB, less than 45.48%
*/
