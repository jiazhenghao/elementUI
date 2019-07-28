let a = { a: 1 }, b = { a: 5, b: 2 };
Object.defineProperty(b, 'c', {
    value: 10,
    enumerable: false
});

let target = {};
Object.assign(target, a, b);
console.log(target);//{ a: 5, b: 2 }


