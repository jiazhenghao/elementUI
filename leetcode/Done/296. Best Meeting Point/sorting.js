/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function (grid) {
    var rows = [];
    var cols = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                rows.push(row);
                cols.push(col);
            }
        }
    }
    var row = rows[Math.trunc(rows.length / 2)];
    cols.sort((a, b) => a - b);
    var col = cols[Math.trunc(cols.length / 2)];
    return minDistance1D(rows, row) + minDistance1D(cols, col);

    function minDistance1D(points, origin) {
        var distance = 0;
        for (let point of points) {
            distance += Math.abs(point - origin);
        }
        return distance;
    }
};

