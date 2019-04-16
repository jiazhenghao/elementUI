/**
 * Q4
 * 数组本身也是一个对象，可以把它赋予属性。
 * 但这不影响其长度
 */
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';
console.log(arr.length);//2
console.log(typeof arr);//object
console.log(arr.foo);//c
