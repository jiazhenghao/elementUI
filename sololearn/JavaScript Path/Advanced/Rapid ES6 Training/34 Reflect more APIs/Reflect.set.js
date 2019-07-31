class Person {
    constructor() {
        this._id = 9000;
    }
    set id(value) {
        this._id = value;
    }
}
let r = new Person();
let alt = {id : 88};
/*No.1
Reflect.set(r, '_id', 90, alt);
console.log(r._id);//9000
console.log(alt._id);//90
console.log(r.id);//undefined
console.log(alt.id);//88
*/
/*No.2 
Reflect.set(r, 'id', 90, alt);
console.log(r._id);//9000
console.log(alt._id);//90
console.log(r['id']);//undefined
console.log(alt.id);//88
*/