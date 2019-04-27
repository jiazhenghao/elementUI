/**
 * Q5
 * What is the output of this code?
 * Uncaught SyntaxError: Illegal return statement
 * 太阴险了，在if-else里用return，但又不是函数。肯定报错。。。
 */
var value = 0;
if (value) {
    return true;
}
else {
    return false;
}