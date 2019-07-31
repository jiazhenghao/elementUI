class Person {

}
let r = new Person();
Reflect.defineProperty(r, 'id', {
    value: 2000,
    configurable: true,
    //writable: true,
    enumerable: true
});
console.log(r['id']);//2000
