var get = function(price, adjust = 2) {
    console.log(arguments.length);
}
get(10); //1

var getTotal = new Function("price = 20", "return price;");
console.log(getTotal());//20 

var test = new Function("a", "b", "console.log(a+b);console.log(123)");
test(1,2);