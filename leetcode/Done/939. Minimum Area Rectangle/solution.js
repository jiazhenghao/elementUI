/**
 * @param {number[][]} points
 * @return {number}
 */
const minAreaRect = function (points) {
    let ans = Infinity;
    let isPoint = {};
    points.forEach(([x, y]) => (isPoint[x * 40000 + y] = true));

    for (let idx1 = 0; idx1 < points.length - 1; idx1++) {
        let [x1, y1] = points[idx1];
        for (let idx2 = idx1 + 1; idx2 < points.length; idx2++) {
            let [x2, y2] = points[idx2];
            let area = Math.abs((x1 - x2) * (y1 - y2));
            if (area === 0 || area >= ans) continue;
            if (isPoint[x1 * 40000 + y2] && isPoint[x2 * 40000 + y1]) ans = area;
        }
    }
    return ans !== Infinity ? ans : 0;
};
/*
Runtime: 116 ms, faster than 97.23% 
of JavaScript online submissions for Minimum Area Rectangle.
Memory Usage: 37.8 MB, less than 100.00% 
*/