/**
 * Q4
 * arr.push() 返回的是arr的长度
 */
var arr = [];
var x = 80 % 70;
var y = 0;
for (var i = 0; i < x; i++) {
    if (i % 3 === 0) {
        y = arr.push(i);
    }

}
console.log(y);//4