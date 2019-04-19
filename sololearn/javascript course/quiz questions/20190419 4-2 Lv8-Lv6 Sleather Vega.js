/**
 * Q4
 */
function myFunc(str) {
    var p = /\d+/g;
    var res = str.match(p);
    return res;
}
console.log(myFunc("I have 28 years"));
//["28"]
console.log(myFunc("I ha12ve 14 ye31ars 12"));
//["12", "14", "31", "12"]

/**
 * Q5
 * Array.prototype.toString()返回的时候带了英文逗号
 */
var arr = ['o', 'n', 's', 'e'];
arr.push('n', '.');//['o', 'n', 's', 'e', 'n', '.']
var a = arr.shift();//'o'
var b = arr.toString();//n,s,e,n,.
console.log(b + a);//n,s,e,n,.o
