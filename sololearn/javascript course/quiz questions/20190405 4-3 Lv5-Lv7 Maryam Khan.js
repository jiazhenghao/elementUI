/**
 * Q1
 * What is the output of this code?
 */
console.log("abab".replace(/a/, "c"));//cbab
/**
 * 如果只是replace一个string，那么只有第一个会被替换。
 * 如果用的是RegExp，且用了g模式。则替换所有。
 */
console.log("abab".replace(/a/g, "c"));//cbcb

/**
 * Q2
 * What is the output of this code?
 */
var x = 8 % 4;
var res = (x >= 0) ? "false" : "true";
console.log(res);//false
console.log(x);//0

/**
 * Q3
 * What is the output of this code?
 */
var a = 7;
var b = 6;
var c = a * b;
if (c < 50) {
    c += b;
}
c = c % a;
console.log(c);//42+6 c=48, 48%7=6 answer is 6

/**
 * Q4
 * What is the output of this code?
 */
console.log(1 > 2 ? "yes" : "no");//no

/**
 * Q5
 * What is the output of this code?
 */
var count = 0;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j <= 2; j++) {
        count++;
    }
}
console.log(count);//0 + 3*3 = 9 
