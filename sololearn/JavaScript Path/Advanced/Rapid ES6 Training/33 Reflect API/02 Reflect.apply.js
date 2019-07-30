class Restaurant {
    constructor() {
        this.id = 33;
    }
    show(prefix) {
        console.log(prefix + this.id);
    }
}
Reflect.apply(Restaurant.prototype.show, {id: 22}, ["REST: "]);
//REST: 22




