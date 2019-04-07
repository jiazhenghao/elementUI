/**
 * Q1
 * What is the output of this code?
 */
let map = new Map();
map.set('a', '1').set('a', '2');
map.set('b', '3').set('b', '3');
console.log(map.size);//2
/**
 * 对于Map，key value 健值对。 同一个key健名，一个值value
 */

/**
 * Q4
 * what is the output of this code?
 */
let a, b;
[a, b = 6] = [2];
console.log(a + b);//8

/**
 * Q5
 * What is the output of this code?
 */
let vow = new Set(["a", "e", "i", "o", "u"]);
vow.clear();
console.log(vow.add("a").size);//1