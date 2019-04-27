/**
 * Q3
 */
// var a = new String("hello");
// console.log(a);//String {"hello"}
// console.log(typeof a);//object
// var b = new String("hello");
// if (a === b) {
//     console.log('a');
// }
// else {
//     console.log('b');//b
// }
// console.log(a == b);//false

/**
 * Q5
 */
const a = {
    num: 0,
    valueOf: function() {
        return this.num += 1;
    }
};
const equality = (a == 1 && a == 2);
console.log(equality);//true
console.log(a.num);//2
var bool = a >= 3;
console.log(a.num);//3