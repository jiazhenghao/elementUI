/**
includes()：返回布尔值，判断是否找到参数字符串。
startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部。
repeat()：返回新的字符串，表示将字符串重复指定次数返回。

字符串补全
padStart：返回新的字符串，表示用参数字符串从头部补全原字符串。
padEnd：返回新的字符串，表示用参数字符串从头部补全原字符串。
以上两个方法接受两个参数，
第一个参数是指定生成的字符串的最小长度，
第二个参数是用来补全的字符串。
如果没有指定第二个参数，默认用空格填充。

*/
console.log("h".padStart(5, "o"));  // "ooooh"
console.log("h".padEnd(5, "o"));    // "hoooo"
console.log("h".padStart(5));       // "    h"

//当模板字符串中带有变量，会将模板字符串参数处理成多个参数。
function f(stringArr, ...values) {
    let result = "";
    for (let i = 0; i < stringArr.length; i++) {
        result += stringArr[i];
        if (values[i]) {
            result += values[i];
        }
    }
    return result;
}
let name = 'Mike';
let age = 27;
console.log(f`My Name is ${name},I am ${age + 1} years old next year.`);
//My Name is Mike,I am 28 years old next year.
//等同于
console.log(f(['My Name is ', ',I am ', ' years old next year.'], 'Mike', 28));
//My Name is Mike,I am 28 years old next year.

