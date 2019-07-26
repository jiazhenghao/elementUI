/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var ans = [[]];
    function CopySelf(arr) {
        var n = arr.length;
        for (var i = 0; i < n; i++) {
            arr.push([...arr[i]]);
        }
        //console.log(arr);
    }
    for (var i = 0; i < nums.length; i++) {
        CopySelf(ans);
        console.log(ans);
        for (var j = ans.length / 2; j < ans.length; j++) {
            ans[j].push(nums[i]);
        }
        console.log(ans);
    }
    return ans;
};

subsets([1,2,3]);
/*
[ [], [] ]
[ [], [ 1 ] ]
[ [], [ 1 ], [], [ 1 ] ]
[ [], [ 1 ], [ 2 ], [ 1, 2 ] ]
[ [], [ 1 ], [ 2 ], [ 1, 2 ], [], [ 1 ], [ 2 ], [ 1, 2 ] ]
[ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
太聪明了，这个算法。
Runtime: 56 ms, faster than 91.43% 
Memory Usage: 35.4 MB, less than 33.91% 
*/