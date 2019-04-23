/**
 * Q4
 */
var i = 0, j = 0, count = 0;
for (; i < 3; i++) {
    for (; j < 3; j++) {
        count++;
    }
}
console.log(count);//3

/**
 * Q5
 */
var x = true, y = false;
if (x && z || (y || x) && (!z && x)) {
    console.log("1");
}
else {
    console.log("0");
}
//Uncaught ReferenceError: z is not defined