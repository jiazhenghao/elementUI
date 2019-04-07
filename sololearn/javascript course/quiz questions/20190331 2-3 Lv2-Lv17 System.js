/**
 * Q1
 * What is the output of this code?
 */
var x = 20 + 30 + 10 + "5";
console.log(x);//605
/**
 * 顺序计算是从左往右
 */

/**
 * Q2
 * What will be displayed via separate alerts?
 */
var a = new Array("A", "B");
var b = new Array("A", "B");
var c = "Red";
var d = "Car";
console.log(a == b ? "Red" : "Blue");//Blue
console.log(c == d ? "Car" : "Bike");//Bike

/**
 * Q3
 * What is the output of this code?
 */
var obj = new class myClass {
    constructor() {
        this.age = 5;
    }
}
console.log(obj.age);//5
//标准的构造函数用法

/**
 * Q4
 * What will be alerted?
 */
var z = '0';
var o = '1';
if (++z) {
    alert(0);
}
else if (++o) {
    alert(z);
}
else {
    alert(2);
}//0
//一开始的z就是1了，所以执行第一个if下面的语句

/**
 * Q5 
 * What will be alerted?
 */
var a = null;
var b = 5;
var c = a + b;
console.log(c);//5
//在JS中，null转化为数字就是0

