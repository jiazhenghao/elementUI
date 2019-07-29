function *process() {
    let result = yield;
    console.log(`Result is ${result}`);
}
let it = process();
//No.1
// it.next();
// it.next(200);//Result is 200

//No.2
//it.next(300);// no console

//No.3
it.next();
console.log(it.next(200));
//Result is 200
//{ value: undefined, done: true }

