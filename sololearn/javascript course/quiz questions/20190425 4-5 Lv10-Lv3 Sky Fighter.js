/**
 * Q3
 * The Object.values() method returns an array of a given object's own enumerable
 * property values, in the same order as that provided by a 
 * for...in loop (the difference being that a for-in loop enumerates properties
 *  in the prototype chain as well).
 */
const cars = {
    Tesla:3,
    Buggati:4,
    Ferrari:1
}
const values = Object.values(cars);
console.log(++values[0]);//4
console.log(values);//[4, 4, 1]


