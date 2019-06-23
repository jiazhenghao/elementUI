/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    var beginSameTime = false;
    intervals.sort(function (a, b) {
        if (a[0] > b[0]) 
            return 1;
        else if (a[0] < b[0]) 
            return -1;
        else 
            beginSameTime = true;  
    });
    if (beginSameTime) return false;
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i+1][0]) return false;
    }
    return true;
};
/*
Runtime: 64 ms, faster than 92.80% 
Memory Usage: 35.6 MB, less than 100.00%
*/