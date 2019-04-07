/**
 * Q1
 * What is the output of this code?
 */
function msg() {
    return this.num;
}
var JS = {
    num: 1,
    msg: msg
};
var PHP = {
    num: 2,
    msg: msg
};
console.log(PHP.msg.call(JS));//1
/**
 * 使用call调用的对象却是JS，故num=1
 */

/**
 * Q2
 * What is the output of this code?
 */
document.write(name, printName());
//console.log(name, printName());
var name = "Lawrence";
function printName() {
    return "John Doe";
}//John Doe;
/**
 * 因为一开始的时候，name只是声明，没有赋值，声明会hoisting，函数也是会被hoisted，所以不会是undefined.
 * 第二次打开，因为浏览器缓存的关系，可能就有了。关掉网页再试即可。用console.log一样的效果
 */

/**
 * Q3
 * What is the output of this code?
 */
console.log(parseInt("78o99"));//78
/**
 * 因为转整型的方法是遇到第一个不为数字的就结束
 */

/**
 * Q4
 * Fill in the blanks to fill arr1 with arr2 elements.
 */
var arr1 = new Array();
var arr2 = [1, 3, 4, 7];
for (let x = 0; x < arr2.length; x++) {
    arr1[x] = arr2[x];
}
console.log(arr1);
