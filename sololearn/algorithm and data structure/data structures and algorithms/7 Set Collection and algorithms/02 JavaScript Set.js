const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false

// Set.prototype.size
// Set.prototype.add(value)
// Set.prototype.clear()
// Set.prototype.delete(value)
// Set.prototype.entries()
// Set.prototype.forEach(callbackFn[, thisArg])
// Set.prototype.has(value)
// Set.prototype.keys() 
// /*
// Is the same function as the values() function and returns a new Iterator object that
//  contains the values for each element in the Set object in insertion order.
// */
// Set.prototype.values()
// Set.prototype[@@iterator]()
