/**
 * Q4
 */
var p = new Proxy({}, {
    get:function (obj, val) {
        console.log(val);
    }
});
p[7];//7

/**
 * Q5
 */
var y = 0;
y += y++;
console.log(y);//0

var x = 1;
x += ++x;
console.log(x);//3

var z = 0;
z = ++z + z;
console.log(z);//2
