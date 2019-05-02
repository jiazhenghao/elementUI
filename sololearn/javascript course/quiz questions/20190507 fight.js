/**
 * 177 Q1
 * Which of the following methods changes the contents
 * of an array by removing existing elements and/or adding
 * new elements.
 * 第二个参数表示 多少个删除了。
 * return value 是包含删除元素的数组。
 */
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

/**
 * 177 Q5
 */
var sum = 0;
for (let i = 0; i < 3; i++) {
    sum += i;
}
//console.log(i);//20190507 fight.js:26 Uncaught ReferenceError: i is not defined

/**
 * 178 Q2
 */
var str = "SoloLearn";
console.log(str.match(/o/g).length);//2
console.log(str.match(/o/g));//(2) ["o", "o"]

/**
 * 179 Q4
 */
//test = (x, y) = (a, b) => {};
//Uncaught ReferenceError: Invalid left-hand side in assignment

