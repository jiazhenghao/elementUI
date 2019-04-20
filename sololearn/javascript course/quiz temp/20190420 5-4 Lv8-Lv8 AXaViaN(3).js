/**
 * Q3
 */
var x = 0; y = 0;
for (i = 0; i <= 2; i++) {
    x = i;
    switch (x) {
        case 0: y = 100;
        case 1: y += 10;
        case 2: y += 1;
    }
}
console.log(y);//123

/**
 * Q5
 * Fill in the blanks to create a function that returns the binary representation
 * of its parameter
 */
function bin(num) {
    var res = "";
    while (num > 0) {
        res = num % 2 + res;
        num = Math.floor(num / 2);
    }
    return res;
}
console.log(bin(13));//1101
