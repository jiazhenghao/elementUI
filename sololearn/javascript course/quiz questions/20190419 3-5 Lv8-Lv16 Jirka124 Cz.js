/**
 * Q3
 */
function f(a) {
    var arr = [];
    var i = 0;
    while (i < a.length) {
        if (a[i] % 2 === 0) {
            arr.push(a[i]);
        }
        i++;
    }
    return arr;
}
var a = [3, 5, 2, 1, 4, 8];
console.log(f(a));// [2, 4, 8]

/**
 * Q5
 */
var x = y = 3;
n = [1, 2, 3].fill(0, x, y);
console.log(n[0] * 2);//2
console.log(n); //[1, 2, 3]
n = [1, 2, 3].fill(0, 3, 5);
console.log(n);//[1, 2, 3]
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
