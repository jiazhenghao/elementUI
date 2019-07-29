function *process() {
    yield 8000;
    yield 8001;
}
let it = process();
console.log(it.next());//{ value: 8000, done: false }
console.log(it.next());//{ value: 8001, done: false }
console.log(it.next());//{ value: undefined, done: true }


