// 数组创建
// Array.of()
// 将参数中所有值作为元素形成数组。

// console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
 
// // 参数值可为不同类型
// console.log(Array.of(1, '2', true)); // [1, '2', true]
 
// // 参数为空时返回空数组
// console.log(Array.of()); // []
// Array.from()
// 将类数组对象或可迭代对象转化为数组。

// // 参数为数组,返回与原数组一样的数组
// console.log(Array.from([1, 2])); // [1, 2]
 
// // 参数含空位
// console.log(Array.from([1, , 3])); // [1, undefined, 3]

// 参数
// Array.from(arrayLike[, mapFn[, thisArg]])
// 返回值为转换后的数组。
// arrayLike
// 想要转换的类数组对象或可迭代对象。
// console.log(Array.from([1, 2, 3])); // [1, 2, 3]
// mapFn
// 可选，map 函数，用于对每个元素进行处理，放入数组的是处理后的元素。
// console.log(Array.from([1, 2, 3], (n) => n * 2)); // [2, 4, 6]
// thisArg
// 可选，用于指定 map 函数执行时的 this 对象。
// let map = {
//     do: function(n) {
//         return n * 2;
//     }
// }
// let arrayLike = [1, 2, 3];
// console.log(Array.from(arrayLike, function (n){
//     return this.do(n);
// }, map)); // [2, 4, 6]

// 类数组对象
// 一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。

// let arr = Array.from({
//   0: '1',
//   1: '2',
//   2: 3,
//   length: 3
// });
// console.log(); // ['1', '2', 3]
 
// // 没有 length 属性,则返回空数组
// let array = Array.from({
//   0: '1',
//   1: '2',
//   2: 3,
// });
// console.log(array); // []
 
// // 元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组  
// let array1 = Array.from({
//   a: 1,
//   b: 2,
//   length: 2
// });
// console.log(array1); // [undefined, undefined]

// 转换可迭代对象
// 转换 map

// let map = new Map();
// map.set('key0', 'value0');
// map.set('key1', 'value1');
// console.log(Array.from(map)); // [['key0', 'value0'],['key1',
// // 'value1']]
// 转换 set

// let arr = [1, 2, 3];
// let set = new Set(arr);
// console.log(Array.from(set)); // [1, 2, 3]
// 转换字符串

// let str = 'abc';
// console.log(Array.from(str)); // ["a", "b", "c"]

// 扩展的方法
// 查找
// find()

// 查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。

// let arr = Array.of(1, 2, 3, 4);
// console.log(arr.find(item => item > 2)); // 3
// // 数组空位处理为 undefined
console.log([, 1].find(n => true)); // undefined
console.log([2, 1].find(n => true)); // 2
if (undefined) {
    console.log("undefined is true");
}
else {
    console.log("undefined is false");//this printed
}

// findIndex()

// 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。

// let arr = Array.of(1, 2, 1, 3);
// // 参数1：回调函数
// // 参数2(可选)：指定回调函数中的 this 值
// console.log(arr.findIndex(item => item = 1)); // 0
 
// // 数组空位处理为 undefined
// console.log([, 1].findIndex(n => true)); //0

// 填充
// fill()

// 将一定范围索引的数组元素内容填充为单个指定的值。

// let arr = Array.of(1, 2, 3, 4);
// // 参数1：用来填充的值
// // 参数2：被填充的起始索引
// // 参数3(可选)：被填充的结束索引，默认为数组末尾
// console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]

// copyWithin()

// 将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。

// // 参数1：被修改的起始索引
// // 参数2：被用来覆盖的数据的起始索引
// // 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
// console.log([1, 2, 3, 4].copyWithin(0,2,4)); // [3, 4, 3, 4]
 
// // 参数1为负数表示倒数
// console.log([1, 2, 3, 4].copyWithin(-2, 0)); // [1, 2, 1, 2]
 
// console.log([1, 2, ,4].copyWithin(0, 2, 4)); // [, 4, , 4]

// 遍历
// entries()

// 遍历键值对。

// for(let [key, value] of ['a', 'b'].entries()){
//     console.log(key, value);
// }
// 0 "a"
// 1 "b"
 
// 不使用 for... of 循环
let entries = ['a', 'b'].entries();
console.log(entries.next().value); // [0, "a"]
console.log(entries.next().value); // [1, "b"]
// 数组含空位
console.log([...[,'a'].entries()]); // [[0, undefined], [1, "a"]]

keys()
遍历键名。
for(let key of ['a', 'b'].keys()){
    console.log(key);
}
// 0
// 1
// 数组含空位
console.log([...[,'a'].keys()]); // [0, 1]
values()
遍历键值。
for(let value of ['a', 'b'].values()){
    console.log(value);
}
// "a"
// "b"
// 数组含空位
console.log([...[,'a'].values()]); // [undefined, "a"]

包含
includes()

数组是否包含指定值。

注意：与 Set 和 Map 的 has 方法区分；Set 的 has 方法用于查找值；Map 的 has 方法用于查找键名。

// 参数1：包含的指定值
[1, 2, 3].includes(1);    // true
 
// 参数2：可选，搜索的起始索引，默认为0
[1, 2, 3].includes(1, 2); // false
 
// NaN 的包含判断
[1, NaN, 3].includes(NaN); // true

嵌套数组转一维数组
flat()

console.log([1 ,[2, 3]].flat()); // [1, 2, 3]
 
// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
 
// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
 
// 自动跳过空位
console.log([1, [2, , 3]].flat());<p> // [1, 2, 3]

flatMap()
先对数组中每个元素进行了的处理，再对数组执行 flat() 方法。

// 参数1：遍历函数，该遍历函数可接受3个参数：当前元素、当前元素索引、原数组
// 参数2：指定遍历函数中 this 的指向
console.log([1, 2, 3].flatMap(n => [n * 2])); // [2, 4, 6]

