/**
 * Q3
 */
let {log} = console;
log("10");//10

let { cus, age } = { name: 'xxx', age: 18 };
console.log(cus);//undefined
console.log(age);//18

/**
 * Q4
 * setTimeout返回的是一个数字，记录这是第几个计数器，从1开始
 */
time = setTimeout(update, 1000);
function update() {
    console.log(time);
    console.log(typeof time);
}
time2 = setTimeout(update2, 1000);
function update2() {
    console.log(time2);
    console.log(typeof time2);
}
