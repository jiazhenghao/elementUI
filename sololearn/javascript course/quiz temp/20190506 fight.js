/**
 * 162 Q2
 */
console.log(" ".concat(null));//' null'
console.log("".concat(null));// 'null'

/**
 * 164 Q5
 */
var x = String("Solo");
var y = String("Solo");
console.log(x == y);//true
console.log(typeof x);//string
var z = Array(3);
console.log(typeof z);//object
console.log(z);//(3) [empty × 3]
var w = Number(10);
console.log(typeof w);//number
console.log(w);//10
var color3 = new String("red");
console.log(typeof color3);//object

/**
 * 166 Q2
 */
var a = 1;
var b = false;
var c = !(a || b);
a = c && true;
c = 0 || a;
console.log(!c || (!a && b));//true

/**
 * 167 Q1
 * Which of these are valid ways of array declaration?
 */
var cars = [1-3];
console.log(cars);//[-2]

/**
 * 167 Q2
 */
var x = 1;
for (; x < 5; x++) {
    x += x;
}
console.log(x);//7

/**
 * 169 Q2
 */
var arr = [9, 8, 7, 6];
console.log(1 in arr);//true
console.log(9 in arr);//false
// // 数组
// var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
// 0 in trees        // 返回true
// 3 in trees        // 返回true
// 6 in trees        // 返回false
// "bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)
// "length" in trees // 返回true (length是一个数组属性)
// Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)
// // 内置对象
// "PI" in Math          // 返回true
// // 自定义对象
// var mycar = {make: "Honda", model: "Accord", year: 1998};
// "make" in mycar  // 返回true
// "model" in mycar // 返回true
// var color1 = new String("green");
// "length" in color1 // 返回true
// var color2 = "coral";
// "length" in color2 // 报错(color2不是对象)



