var price = 5.99, quantity = 10;

var productView = {
    price,
    quantity,
    cal() {
        return this.price * this.quantity;
    }
};

var field = 'dynamic';
var prod = {
    price,
    quantity,
    [field + '001']() {
        console.log('abcd');
    }
}
prod.dynamic001();//abcd


