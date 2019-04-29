/**
 * Q4
 */
let arr = [];
for (let {x = 3, y = 2} of [{x : 1}, {y: 4}]) {
    arr.push(x, y);
}
arr.forEach(k => {
    console.log(k);
});
console.log(arr);// [1, 2, 3, 4]

/**
 * 结构默认值
let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;
let {a: aa = 10, b: bb = 5} = {a: 3};
// aa = 3; bb = 5;
所以上述的默认值解构就是
let {x = 3, y = 2} = {x: 1};
// x = 1, y = 2
let {x = 3, y = 2} = {y: 4};
// x = 3, y = 4
*/