'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

var fluffy = new Cat('Fluffy', 'Red');
// console.log(Cat.prototype);
// console.log(fluffy.__proto__);
// console.log(Cat.prototype === fluffy.__proto__);
// // Cat {}
// // Cat {}
// // true

var muffin = new Cat('Muffin', 'Black');
Cat.prototype.age = 19;
console.log(fluffy.age);//19
console.log(muffin.age);//19

/**
 * 当fluffy.age找不到的时候。会去fluffy.__proto__.age里找到的
 */

console.log(fluffy.hasOwnProperty('age'));//false

Cat.prototype = {age: 99};
var mike = new Cat('Mike', 'Green');
console.log(mike.age);//99
console.log(muffin.age, fluffy.age);//19 19