var merge = function (intervals) {
    if (intervals.length == 0 || intervals.length == 1)
        return intervals;

    intervals.sort(function (a, b) {
        if (a[0] - b[0] > 0) {
            return 1;
        }
        else if (a[0] - b[0] < 0) {
            return -1;
        }
        else if (a[1] - b[1] > 0) {
            return 1;
        }
        else if (a[1] - b[1] < 0) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (let i = 0; i < intervals.length - 1; i++) {
        //i = sortMerge(intervals, intervals[i], intervals[i+1], i);
        if (intervals[i + 1][0] - intervals[i][1] < 1) {
            let a = intervals[i][0];
            let b = intervals[i + 1][1] > intervals[i][1] ? intervals[i + 1][1] : intervals[i][1];
            let newArray = [a, b];
            intervals.splice(i, 2, newArray);
            // intervals.shift();
            // intervals.shift();
            //intervals.unshift(newArray);
            i--;
        }
    }
    return intervals;
};

/*
Runtime: 68 ms, faster than 97.86 % 
Memory Usage: 38 MB, less than 19.54 % 
*/
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
//[[1, 3], [2, 6], [8, 10], [15, 18]]
//[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

console.log(merge([[1, 4], [0, 4]]));
//[[0, 4], [1, 4]]
//[ [ 0, 4 ] ]

console.log(merge([[3, 6], [1, 2], [7, 9]]));
//[[1, 2], [3, 6], [7, 9]]
//[ [ 1, 2 ], [ 3, 6 ], [ 7, 9 ] ]

console.log(merge([[3, 6], [1, 2], [7, 9], [1, 4], [1, 3]]));
//[[1, 2], [1, 3], [1, 4], [3, 6], [7, 9]]
//[[1, 6], [7, 9]]

console.log(merge([[3, 6], [1, 2], [7, 9], [4, 7]]));
//[ [ 1, 2 ], [ 3, 6 ], [ 4, 7 ], [ 7, 9 ] ]
//[ [ 1, 2 ], [ 3, 9 ] ]

console.log(merge([[3, 6], [1, 2], [7, 9], [11, 17]]));
//[ [ 1, 2 ], [ 3, 6 ], [ 7, 9 ], [ 11, 17 ] ]

console.log(merge([[1, 4], [2, 3]]));
//[1, 4]
