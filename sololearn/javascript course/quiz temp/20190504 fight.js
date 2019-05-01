/**
 * 141 Q1
 */
var arr = [];
arr[0] = 0;
arr["one"] = 1;
arr["2"] = 2;
console.log(arr.length);//3
//(3) [0, empty, 2, one: 1]
// 0: 0
// 2: 2
// one: 1

/**
 * 143 Q4
 * !或者括号 都是让这个表达式进行运算了。所以a = 7
 */
var a = 5;
!function (x) {
    a = x;
}(7);
console.log(a);//7

/**
 * 143 Q5
 * Object.prototype.valueOf
 */
function MyNumberType(n) {
    this.number = n;
}
MyNumberType.prototype.valueOf = function () {
    return this.number;
};
const object1 = new MyNumberType(4);
console.log(object1 + 3);//7
function MyClass() {
    this.valueOf = function() {
        return false;
    }
}
var hello = new MyClass();
console.log(hello);//MyClass {valueOf: ƒ}
console.log(hello == false);//true
console.log(hello === false);//false
if (hello) {
    console.log(123);//123
}
else {
    console.log(456);
}

/**
 * 148 Q2
 */
var i = Infinity;
console.log(typeof i);//number

