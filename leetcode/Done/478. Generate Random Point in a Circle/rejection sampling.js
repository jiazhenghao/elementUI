/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
    this.rad = radius;
    this.xc = x_center;
    this.yc = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
    var x0 = this.xc - this.rad;
    var y0 = this.yc - this.rad;
    while (true) {
        var xg = x0 + Math.random() * this.rad * 2;
        var yg = y0 + Math.random() * this.rad * 2;
        if (Math.sqrt(Math.pow((xg - this.xc), 2) + Math.pow((yg - this.yc), 2)) <= this.rad)
            return [xg, yg];
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

/*
Runtime: 168 ms, faster than 100.00% 
Memory Usage: 60.9 MB, less than 100.00%
*/