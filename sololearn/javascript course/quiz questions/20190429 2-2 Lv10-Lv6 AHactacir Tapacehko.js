/**
 * Q1
 */
var array = [];
for (var i = 0; i < 4; i++)
    array.push("Index " + (i * 2));
var debug = '';
for (var index in array)
    debug += array[index].charAt(6);
console.log(parseInt(debug));//246
console.log(array);//["Index 0", "Index 2", "Index 4", "Index 6"]
console.log(debug);//0246

/**
 * Q3
 * 太贱了
 */
var x = 1;
x = +1;
console.log(x);//1

/**
 * Q4
 */
var p = document.getElementsByTagName('p');
var b = document.createTextNode(';)');
p[0].appendChild(b);

