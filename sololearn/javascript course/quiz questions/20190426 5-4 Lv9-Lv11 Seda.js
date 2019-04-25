/**
 * Q1
 */
Object.defineProperty(Array.prototype, "-1", {
    get: function () {
        return this[this.length - 1];
    }
});
var arr = [1, 2, 3, 4];
console.log(arr[-1]);//4
