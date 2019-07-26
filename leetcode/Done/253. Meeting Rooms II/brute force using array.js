/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    if (intervals.length == 0) return 0;
    var arr = [];
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
            if (arr[j] == undefined) arr[j] = 1;
            else arr[j]++;
        }
    }
    var res = 1;
    arr.forEach(val => {
        if (val > res) res = val;
    });
    return res;
};
/*
Runtime: 5712 ms, faster than 5.03%
Memory Usage: 136.2 MB, less than 5.10% 
*/