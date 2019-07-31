function getId() {
    return 55;
}
var p = new Proxy(getId, {
    apply: function(target, thisArg, argumentsList) {
        return Reflect.apply(target, thisArg, argumentsList);
    }
});
console.log(p());//55


