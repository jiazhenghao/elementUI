/**
 * Q1
 * 对于 callback函数里，数组里有没有任何值能够返回true，
 * 如果有就是true，没有就是false
 */
var arr = [1, 2, 3, 4, 5];
var five = function (e) {
    return e % 6 == 0;
}
check = arr.some(five);
console.log(check);//false;

/**
 * Q2
 * What are the efficient array methods that can be used to delete an element of an array?
 * splice(),pop(),shift()
 */

/**
 * Q5
 */
var a = [9, 5, 3];
for (var i = 1; i < 3; i++) {
    a[0] %= a[i];
    a[0] += a[2];
}
console.log(a[0]);//一共两次循环，第一次， 4，5，3；7，5，3 第二次， 1，5，3； 4，5，3 // 4
