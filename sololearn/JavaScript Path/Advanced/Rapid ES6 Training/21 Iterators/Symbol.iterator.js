let ids = [1,2,30];
console.log(typeof ids[Symbol.iterator]);//function
let it = ids[Symbol.iterator]();
console.log(it.next());//{ value: 1, done: false }
console.log(it.next());//{ value: 2, done: false }
console.log(it.next());//{ value: 30, done: false }
console.log(it.next());//{ value: undefined, done: true }



