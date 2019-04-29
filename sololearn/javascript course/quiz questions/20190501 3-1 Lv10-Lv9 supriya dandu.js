/**
 * Q1
 * 3^3 = 27...
 */
var i = 3;
var k = 0;
for (var j = 0; j < Math.pow(i,3); j++) {
    k++;
    //k = k * 10;
}
console.log(k);

/**
 * Q5
 * arguments is an Array-like object accessible inside functions 
 * that contains the values of the arguments passed to that function.
 */
function hello() {
    console.log(arguments[0]);//5
    console.log(Array.isArray(arguments));//false
    console.log(+Array.isArray(arguments));//0
    console.log(typeof arguments);//object
}
hello(5);