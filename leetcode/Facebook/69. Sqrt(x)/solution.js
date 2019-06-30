/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 0) return 0;
    if (x < 4) return 1;
    if (x == 4) return 2;

    let minbond = 0;
    let maxbond = Math.ceil(x / 2);
    let tester = Math.floor((maxbond + minbond) / 2);
    while (maxbond - minbond > 1) {
        if (tester ** 2 === x) {
            return tester;
        }
        if (tester ** 2 > x) {
            maxbond = tester;
        }
        else if (tester ** 2 < x) {
            minbond = tester;
        }
        tester = Math.floor((maxbond + minbond) / 2);
    }
    return tester;
}
/*
Runtime: 64 ms, faster than 97.32%
Memory Usage: 35.8 MB, less than 20.29%
*/