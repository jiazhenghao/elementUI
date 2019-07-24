/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function (s, k) {
    var map = new Map();
    var array;
    var n = s.length;
    var resArr = new Array(n);
    for (let i of s) {
        map.set(i, map.get(i) + 1 || 1);
    }
    array = [...map];
    //console.log(array);
    //console.log(resArr[0]);
    array.sort(function (a, b) {
        return b[1] - a[1];
    });
    //console.log(array);



};