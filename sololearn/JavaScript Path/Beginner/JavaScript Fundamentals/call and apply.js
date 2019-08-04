// let app = {
//     carId: 123,
//     getId: function() {
//         console.log(this);
//         return this.carId;
//     }
// };
// console.log(app.getId());//123
// let newCar = {
//     carId: 456
// };
// console.log(app.getId.call(newCar));//456

/*
call and apply do the same thing, to pass another object to the this keyword
but apply can accept an array of parameters
*/
let app2 = {
    carId: 123,
    getId: function (prefix = "id") {
        return prefix + this.carId;
    }
};
console.log(app2.getId());//id123
let newCar2 = {
    carId: 456
};
console.log(app2.getId.call(newCar2, ['ID: ']));//ID: 456
