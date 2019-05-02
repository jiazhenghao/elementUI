/**
 * 181 Q2
 */
var str = "js css html php";
var res1 = str.substring(-2, 2);//js
var res2 = str.substr(-3, 3);//php
var res3 = str.slice(-3);//php
console.log(res1 + " " + res2 + " " + res3);//js php php

/**
 * 181 Q5
 */
let name = "DAVE";
let school = "OXFORD";
name.toLowerCase();//因为这个并没有赋值给name
school = school.toLowerCase();
console.log(name + school);//DAVEoxford

/**
 * 186 Q2
 */
function abc(a) {
    return (function(y){
        return y + 1;
    })(++a) + a;
}
console.log(abc(2));//7

/**
 * 186 Q4
 */
//console.log(typeof int a = 5);//Uncaught SyntaxError: missing ) after argument list

/**
 * 188 Q2
 */
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';
console.log(arr.length);//2
console.log(arr);//(2) ["a", "b", foo: "c"]
arr['zpp'] = 'd';
console.log(arr.length);//2
console.log(arr);//(2) ["a", "b", foo: "c", zpp: "d"]
var str = 'ds';
console.log(str.length);//2
str[2] = 'd';
console.log(str.length);//2
console.log(str);//ds
console.log(arr['zpp']);//d
console.log(arr.foo);//c

/**
 * 190 Q1
 *  g：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
    i：表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写；
    m：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
 */
var s = "SoloLearn";
var r = /[A-Z]/gm;
console.log(s.match(r));//(2) ["S", "L"]

/**
 * 190 Q5
 * return value:    The object that was passed to the function.
 */
Object.freeze(Object);
var obj = {
    property: "one"
};
obj.property = "two";
console.log(obj);//{property: "two"}
Object.freeze(obj);
obj.property = "three";
console.log(obj);//{property: "two"}

