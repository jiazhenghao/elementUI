/**
 *  Array Element Finding
 * 
 */
// var arr = [4, 5, 1, 8, 2, 33].filter(function (x) {
//     return x > 3;
// });
// console.log(arr);//[4,5,8,33]
// let arrFind = [4, 5, 1, 8, 2, 33].find(x => x > 3);
// console.log(arrFind);//4 找到第一个比3大的元素。
// let arrIndexFind = [4, 5, 1, 8, 2, 33].findIndex(x => x > 3);
// console.log(arrIndexFind);//0

/**
 * Array.prototype.splice
 */
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');//插入的位置是1，删除0个元素，插入‘Feb’
console.log(months);// ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');//插入的位置是4，删除1个元素，插入‘May’
console.log(months);//["Jan", "Feb", "March", "April", "May"]
console.log(months.splice());//[]


/**
 * Array.prototype.slice
 * 从第一个元素下标开始选取，到第二个元素-1截止。选出来的是新数组。
 * 不会改变原来的数组
 */
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
//  ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
//  ["camel", "duck"]
console.log(animals.slice(1, 5));
//  ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(2, 3));//["camel"]
console.log(animals.slice(2, 2));//[]
console.log(animals.slice(2, 1));//[]
console.log(animals.slice());//["ant", "bison", "camel", "duck", "elephant"]