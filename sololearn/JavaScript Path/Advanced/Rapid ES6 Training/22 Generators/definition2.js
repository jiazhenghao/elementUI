function *process() {
    let nextId = 7000;
    while (true) {
        yield nextId++;
    }
}
let it = process();
console.log(it.next());//{ value: 7000, done: false }
console.log(it.next().value);//7001



