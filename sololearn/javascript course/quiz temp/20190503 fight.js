/**
 * 133 Q4
 */
let arr = Array.from(new Array(5), (val, index) => index % 2);
console.log(arr);//[0, 1, 0, 1, 0]
//How to use Array.from 
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]

