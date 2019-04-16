/**
 * The Array.from() method creates a new, shallow-copied Array instance 
 * from an array-like or iterable object.
 */
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


// Array.from(arrayLike[, mapFn[, thisArg]])

// arrayLike
// An array-like or iterable object to convert to an array.

// mapFn Optional
// Map function to call on every element of the array.

// thisArg Optional
// Value to use as this when executing mapFn.

// Return valueSection
// A new Array instance.

const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];
Array.from(mapper.keys());
// ['1', '2'];
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
