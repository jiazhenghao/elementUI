/**
 * Q2
 */
var arr = Array(3).fill(5);
arr.forEach(k => {
    console.log(k);
})
//555

/**
 * Q4
 */
var x = typeof("76");
var y = typeof("turtle");
if (y == "string" && x == "number") {
    console.log(x + y);
}
else {
    console.log(y[4]);//n
}
