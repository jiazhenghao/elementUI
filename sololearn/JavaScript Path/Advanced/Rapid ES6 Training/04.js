var show = function(productId, ...cat) {
    console.log(cat instanceof Array);
}
show();//true

var arr = [1, 2, 3, 4, 5]
var [a, b, ...c] = arr;
console.log(a);//1
console.log(b);//2
console.log(c);//[3,4,5]

const codeArray = ['A', ...'BCD', 'E'];
console.log(codeArray); // [ 'A', 'B', 'C', 'D', 'E' ]
