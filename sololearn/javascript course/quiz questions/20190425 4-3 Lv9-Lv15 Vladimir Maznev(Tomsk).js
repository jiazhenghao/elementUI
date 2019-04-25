/**
 * Q1
 */
var str = "I love JS!", j = 0, res = [];
while ((j = str.indexOf(' ', j + 1)) > 0) {
    res.push(j + 1);
}
console.log(res);// [2, 7]

