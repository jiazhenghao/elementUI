var invoice = {
    number: 123,
    process: function() {
        console.log(this);
    }
};
invoice.process();// { number: 123, process: [Function: process] }

var invoice2 = {
    number: 123,
    process: () => console.log(this)
};
invoice2.process();// {} We get the context of the code running

var invoice3 = {
    number: 123,
    process: function() {
        return () => console.log(this.number);
    }
};
invoice3.process()();//123

var invoice4 = {
    number: 123,
    process: function() {
        return () => console.log(this.number);
    }
};
var newInvoice = {
    number: 456
};
invoice4.process().bind(newInvoice)(); // 123
//the javascript engine just ignored and not throw an error
//you cannot bind an object to an arrow function

//also useless in call and apply

const test = () => 3.14;
console.log(test.hasOwnProperty('prototype'));//false

var test2 = function() {
    return 3.14;
}
console.log(test2.hasOwnProperty('prototype'));//true
