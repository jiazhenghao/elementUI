/**
 *  Array Element Finding
 * 
 */
var arr = [4, 5, 1, 8, 2, 33].filter(function (x) {
    return x > 3;
});
console.log(arr);//[4,5,8,33]
let arrFind = [4, 5, 1, 8, 2, 33].find(x => x > 3);
console.log(arrFind);//4 找到第一个比3大的元素。
let arrIndexFind = [4, 5, 1, 8, 2, 33].findIndex(x => x > 3);
console.log(arrIndexFind);//0



