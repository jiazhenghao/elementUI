function *process() {
    yield 42;
    yield* [1,2,3];
}
let it = process();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
// 42
// 1
// 2
// 3
// undefined