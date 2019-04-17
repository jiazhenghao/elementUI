/**
 * Q2
 * this对象是哪个，作用域的概念
 */
var x = 3;
var one = {
    x:2,
    two: {
        x:1,
        three:function () {
            return this.x;
        }
    }
}
var go = one.two.three;
console.log(go(), one.two.three());//3 1

/**
 * Q5
 * The following code is valid.
 */
var mystring1 = "I am learning ";
var mystring2 = "JavaScript with SoloLearn.";
console.log(mystring1.append("hello"));
//false 字符串不能用append
