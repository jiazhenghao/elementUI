/**
 * Q1
 * Fill in the blanks to get the value of b 4 times
 * 第一次do a = 1，第二次，a = 2，第三次，a = 3， 第四次 a = 4 因为 如果填写5，那么第四次结束以后，又回去打印一遍b
 */
// var b = 7;
// var a = 0;
// do {
//     console.log(b);
//     a++;
//     //console.log("a = " + a);
// }
// while (a < 4);

/**
 * Q2
 * 这个例子显示了如何正确反馈实例自身。
 */
// function Test() {
//     this.getContext = function () {
//         return this;
//     }
// }
// var test = new Test();
// console.log(test.getContext() === test);//true

/**
 * Q3
 * which method is used to merge two or more arrays?
 * concat()
 */

/**
 * Q5
 * slice这个函数如果不传值，就返回array本身
 */
// var a = [9,1,1,0];
// var c = [];
// c[0] = a.slice();
// //console.log(c);//[[9, 1, 1, 0]]
// a[0] = 0;
// console.log(c[0]);//[9, 1, 1, 0]