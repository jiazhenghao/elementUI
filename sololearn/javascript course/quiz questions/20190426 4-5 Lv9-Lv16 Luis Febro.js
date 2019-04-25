/**
 * Q3
 */
function addBin(a, b) {
    var sum = a + b;
    var res = "";
    while (sum > 0) {
        res = sum % 2 + res;
        sum = Math.floor(sum / 2);
    }
    return res;
}
console.log(addBin(2, 5));//111