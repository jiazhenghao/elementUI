var handler = {
    get: function (obj, prop) {
        return prop in obj ?
            obj[prop] :
            37;
    }
};
var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;
console.log(p.a, p.b); // 1 undefined
console.log('c' in p, p.c); // false 37

// With a Proxy, you can easily validate the passed value for an object.
// This example uses the set handler.

let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        // The default behavior to store the value
        obj[prop] = value;
        // Indicate success
        return true;
    }
};
let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age); // 100
//person.age = 'young'; // Uncaught TypeError: The age is not an integer
//person.age = 300; // Uncaught RangeError: The age seems invalid
