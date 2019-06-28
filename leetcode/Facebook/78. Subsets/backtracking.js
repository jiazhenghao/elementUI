/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let chosen = [];
    let subSets = [];
    findSubsetsHelper(nums, chosen, subSets);
    return subSets;
};

var findSubsetsHelper = function(set, chosen, subSets) {
    if(set.length === 0) {
        subSets.push(Object.assign([],chosen));
    }
    else {
        let pivot = set[0];
        set.splice(0, 1);
        chosen.push(pivot);
        findSubsetsHelper(set, chosen, subSets);

        chosen.pop();
        findSubsetsHelper(set, chosen, subSets);

        set.splice(0, 0, pivot);
    }
};

console.log(subsets([1,2,3]));
//[ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], [] ]
/*
先把包含1的都算进去。
然后把包含2的都算进去。
然后都包含3的。 [ 1, 2, 3 ], [ 1, 2 ]
接下去不含2，但 1,3   1
接下去不包含1， [2,3] [2] [3] []

*/
