/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    var res = [];
    var low;
    var high;

    for (let i = 0; i < intervals.length; i++) {
        if (low == undefined) {
            if (newInterval[0] > intervals[i][1]) {
                res.push(intervals[i]);
                continue;
            }
            else {
                low = i;
            }
        }

        if (high == undefined) {
            if (newInterval[1] > intervals[i][1]) {
                continue;
            }
            else {
                high = i;
                break;
            }
        }
    }

    if (low == undefined) {
        intervals.push(newInterval);
        return intervals;
    }
    if (high == undefined) {
        res.push([Math.min(intervals[low][0], newInterval[0]), newInterval[1]]);
        return res;
    }

    if (newInterval[1] >= intervals[high][0]) {
        res.push([Math.min(intervals[low][0], newInterval[0]), Math.max(intervals[high][1], newInterval[1])]);
        for (let i = high + 1; i < intervals.length; i++) {
            res.push(intervals[i]);
        }
    }
    else {
        res.push([Math.min(intervals[low][0], newInterval[0]), newInterval[1]]);
        for (let i = high; i < intervals.length; i++) {
            res.push(intervals[i]);
        }
    }
    return res;
};

/*
Runtime: 60 ms, faster than 94.02% 
of JavaScript online submissions for Insert Interval.
Memory Usage: 35.5 MB, less than 100.00%
*/