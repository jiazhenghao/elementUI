/**
 * Q1
 */
var count = 6, sum = 0;
while (count > 0) {
    sum += 2;
    count -= 2;
    if (count == 2) {
        count = 0;
    }
}
console.log(sum);//4