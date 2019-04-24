/**
 * Q3
 */
var arr = ['foo','bar','baz'];
arr.length = 0;
arr.push('bin');
console.log(arr);//["bin"]
//对于字符串无效
var str = "Hello world!";
str.length = 0;
console.log(str);//Hello world!