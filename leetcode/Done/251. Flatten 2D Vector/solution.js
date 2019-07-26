/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
    this.v = v;
    this.i = 0;
    this.j = 0;
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    this.hasNext();
    return this.v[this.i][this.j++];
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    while (this.v[this.i] && this.j === this.v[this.i].length) {
        this.i++;
        this.j = 0;
    }
    return this.i < this.v.length;
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/*
Runtime: 120 ms, faster than 95.45% 
Memory Usage: 48.2 MB, less than 37.04% 
*/