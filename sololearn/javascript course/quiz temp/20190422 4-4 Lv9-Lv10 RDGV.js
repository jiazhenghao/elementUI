/**
 * Q1
 */
let a = [1, 3, 5][2];
let b = { x: 4, y: 10 }.y;
let c = "199"[0];
console.log(a + b + c);//151
console.log(typeof c);//string

/**
 * Q5
 */
var dogs = ['wendy', 'jerry', 'bret', 'lizzy'];
dogs = dogs.slice(1, 2 + 2);
console.log(dogs);//["jerry", "bret", "lizzy"]
