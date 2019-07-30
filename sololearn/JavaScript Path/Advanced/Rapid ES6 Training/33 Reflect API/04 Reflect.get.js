// class Person {
//     constructor() {
//         this.id = 8080;
//     }
// }
// let r = new Person();
// console.log(Reflect.get(r, 'id'));//8080

class Person {
    constructor() {
        this._id = 8080;
    }
    get id() {
        return this._id;
    }
}
let r = new Person();
console.log(Reflect.get(r, 'id', { _id: 88 }));//88
console.log(Reflect.get(r, '_id'));//8080
console.log(Reflect.get(r, 'id'));//8080
console.log(Reflect.get(r, '_id', { _id: 88 }));//8080
console.log(Reflect.get(r, 'did', { _id: 88 }));//undefined


