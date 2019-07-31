function Employee() {
    this.name = 'Jack Sun';
    this.salary = 0;
}
var e = new Employee();
var p = new Proxy(e, {
    get: function (target, prop, receiver) {
        return "Attempted access: " + prop;
    }
});
console.log(p.salary); //Attempted access: salary

var p2 = new Proxy(e, {
    get: function (target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }
});
console.log(p2.salary);//0

var p3 = new Proxy(e, {
    get: function (target, prop, receiver) {
        if (prop == 'salary')
            return 'Denied';
        return Reflect.get(target, prop, receiver);
    }
});
console.log(p3.salary);//Denied
console.log(p3.name);//Jack Sun

