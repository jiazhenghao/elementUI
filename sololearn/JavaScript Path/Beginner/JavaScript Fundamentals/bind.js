let app = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};
let newCar = {
    carId: 456
};
/*
bind gives a brand new function, a copy of the old,
while call and apply don't
*/
let newFn = app.getId.bind(newCar);
console.log(newFn());//456