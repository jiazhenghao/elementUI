/**
 * 222 Q1
 */
var num = Infinity - Infinity;
console.log(num);//NaN

/**
 * 224 Q3
 * Which of the following is valid conditional statements?
 * if (true) {} else {};
 * var a,b;(false?a:b);
 */

/**
 * 225 Q2
 */
var arr = [10, 14, 17];
arr.foo = 'Hello World';
console.log(arr.length);//3
for (var i in arr) {
    console.log(i);//0 1 2 foo
}

/**
 * 227 Q5
 *  2221
    2211
    2111
 */
var size = 4;
for (let i = 1; i < size; i++) {
    for (let k = 0; k < size - i; k++) {
        document.write(2);
    }
    for (let k = 0; k < i; k++) {
        document.write(1);
    }
    document.write("<br>");
}

/**
 * 229 Q1
 */
var obj = new class myClass {
    constructor() {
        this.age = 5;
    }
}
console.log(obj.age);//5
