/**
 * 211 Q4
 */
var person = {
    $age: 30,
    get age() {
        return this.$age
    },
    set age(val) {
        this.$age = val;
    }
};
person.age = 35;
console.log(person.age);//35
console.log(person);
// Object
// $age: 35
// age: 35
// get age: ƒ age()
// set age: ƒ age(val)
// __proto__: Object

/**
 * 213 Q1
 */
function mlt(a, b) {
    if (!(a && b)) {
        return 0;
    }
    else if (b == 1) {
        return a;
    }
    else {
        return (a + mlt(a, b - 1));
    }
}
console.log(mlt(3, 11));//33
console.log(mlt(7, 1));//7

/**
 * 218 Q1
 * 直接将数组的长度设置为0，就可以清空所有内容。但string是不行的
 */
var arr = ['foo', 'bar', 'baz'];
arr.length = 0;
arr.push('bin');
console.log(arr);//["bin"]

/**
 * 219 Q1
 */
var c = new Array(1, 2, 3, 4);
var b = c.filter(function (a) {
    return (a % 2 - 1);
})
console.log(b[0]);//2
console.log(b);//(2) [2, 4]

/**
 * 220 Q3
 * choose the name used to call every element in the DOM tree
 * Node
 */

/**
 * 220 Q5
 * The new.target property lets you detect whether a function or constructor was 
 * called using the new operator. 
 * In constructors and functions instantiated with the new operator,
 * new.target returns a reference to the constructor or function. 
 * In normal function calls, new.target is undefined.
 */
function x() {
    console.log(new.target ? 1 : 0);
}
new x();//1
x();//0


  