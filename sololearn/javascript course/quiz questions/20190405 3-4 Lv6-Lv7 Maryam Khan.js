/**
 * Q1
 * What is the output of this code?
 */
let result = '';
for (let i in "abcdef") {
    result += i;
}
console.log(result);//012345
/**
 * 首先result已经是字符串了，所以后面这些数字加上去，还是字符串类型。
let obj = {x:1,y:2,z:3};
for (let k in obj) {
    console.log(k + ' ' + obj[k]);//x 1...
}
let str = "abc";
for (let i in str) {
    console.log(i + ' ' + str[i]);//0 a...
}
 */

/**
 * Q2
 * Which is a valid way to refer to the first index of an array?
 * array[0]
 */

/**
 * Q3
 * What is the output of this code?
 */
var score = [12, 7, 14];
var getMax = Math.max(...score);
console.log(getMax);//14
//spread and rest

/**
 * Q4
 * What will be the output of this code?
 */
var i = 0;
while (i<10) {
    if (i % 2 === 0) {
        document.write(i);
    }
    i++;
}//02468

/**
 * Q5
 * What is the output of this code?
 */
var x,y,z;
x = 3.5;
y = 3;
z = x % y;
console.log(z);//0.5
console.log(3 % 2.4);//0.6000000000000001
console.log(3.5 % 2.5);//1
//js的求余数还是比较骚的。

