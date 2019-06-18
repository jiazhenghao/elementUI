/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 * 从门出发，填写空房子，每次+1。
 */
var EMPTY = 2147483647;
var GATE = 0;
var DIRECTIONS = [[1,  0], [-1,  0], [0,  1], [0, -1]];

var wallsAndGates = function(rooms) {
    var m = rooms.length;
    if (m == 0) return;
    var n = rooms[0].length;
    var q = [];
    for (var row = 0; row < m; row++) {
        for (var col = 0; col < n; col++) {
            if (rooms[row][col] == GATE) {
                q.push([row, col]);//q里面充满了Gate。
            }
        }
    }
    while (q.length > 0) {
        var point = q.shift();
        var rw = point[0];
        var cl = point[1];
        DIRECTIONS.forEach(function(direction) {
            var r = rw + direction[0];
            var c = cl + direction[1];
            if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] != EMPTY) {//很聪明，如果已经有值了，就不覆盖
                return;
            }
            rooms[r][c] = rooms[rw][cl] + 1;
            q.push([r, c]);//加成功的，送进队列里面，下次按顺序再滚一遍四个方向。
        });
    }
}

/*
Runtime: 100 ms, faster than 96.36% 
Memory Usage: 41.2 MB, less than 59.48% 
*/