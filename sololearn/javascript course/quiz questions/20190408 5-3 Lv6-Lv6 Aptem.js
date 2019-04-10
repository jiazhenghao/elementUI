/**
 * Q1
 * What is the output of this code?
 */
// var a = 5; 
// var b = a;
// for (var i = b; i > 0; i--) {
//     document.write(a);
// }//55555

/**
 * Q2
 * What is the output of this code?
 */
var array = ["Hello", "world"];
var text = array[1].split("o");
console.log(text[0]);//w
console.log(text);//["w", "rld"]

/** 
 * Q3
 * What is the output of this code?
 */
let a = "10";
let b = Array.from(a).length;
console.log(b);//2
/**
 * Array.from
 * The Array.from() method creates a new, shallow-copied Array instance 
 * from an array-like or iterable object.
 */
console.log(Array.from('foo')); // ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));// [2, 4, 6]