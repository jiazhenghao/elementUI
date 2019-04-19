/**
 * Q1
 */
let arr = [1, 2, 2, 3, 3, 5];
let set = new Set(arr);
let map = new Map([arr]);
console.log("map: " + map.size);//1
console.log("set: " + set.size);//4
//let map2 = new Map(arr);//Uncaught TypeError: Iterator value 1 is not an entry object

/**
 * Q4
 */
console.log("Solo Learn ".slice(-5, -1)); //earn
console.log("Solo Learn ".substring(-5, -1));//空
console.log("Solo Learn ".substring(5, 10)); //Learn
//console.log("Solo Learn ".splice(6, 10));//string 不能用这个
console.log("Solo Learn ".substr(7, 4));//arn 