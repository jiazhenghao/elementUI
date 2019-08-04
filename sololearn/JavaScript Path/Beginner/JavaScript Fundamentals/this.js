let app = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log(app.getId());//123

this.carId = 456;
let app2 = {
    carId: 123,
    getId: () => {
        console.log(this);
        return this.carId;
    }
};
console.log(app2.getId());//456