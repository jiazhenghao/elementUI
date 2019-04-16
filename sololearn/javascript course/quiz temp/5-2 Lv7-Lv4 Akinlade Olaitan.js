/**
 * Q1
 */
class Base {
    constructor (n) {
        this.num = ++n
        console.log("base");//base
    }
}
class Derived extends Base {
    constructor (n) {
        super(n++);
        console.log(n);//8
        this.num = ++n;
    }
}
let obj = new Derived(7);
console.log(obj.num);//9


