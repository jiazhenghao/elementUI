var merge = function (intervals) {
    if (intervals.length == 0 || intervals.length == 1)
        return intervals;
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            let a = intervals[i][0];
            let b = intervals[i + 1][1];
            intervals.shift();
            intervals.shift();
            let newArray = [a, b];
            intervals.unshift(newArray);
            i--;
        }
    }
    return intervals;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [0, 4]]));//[ [ 1, 4 ] ]
//[[0,4]]