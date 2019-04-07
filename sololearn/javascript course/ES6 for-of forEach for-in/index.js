/**
 * for-of循环
for(var value of myArray){
     console.log(value);
}
它和forEach不同，它可以break、continue、return。同时又避开了for-in 的缺点。
for-of可以遍历：
数组Array、字符串String、也支持map和set对象的遍历、大多数类数组对象：如DOM的NodeList对象
for-of不支持普通对象
 */
//set遍历
let set = new Set().add('jyw').add('jx').add('ziteng').add('abian');
for (let key of set) {
    console.log(key);//jyw jx ziteng abian
}
//map遍历
let map = new Map().set('szt', 183).set('fb', 174).set('jzh', 172);
for (let [key, value] of map) {
    console.log(key + " 身高 " + value);//szt 身高 183;fb 身高 174;jzh 身高 172 
}
//字符串
let strForOf = "helloworld";
for (let key of strForOf) {
    console.log(key);//h e l l o w o r l d
}
//数组
let arr = [10, 9, 8, 7, 6, 2];
for (let key of arr) {
    console.log(key);//10 9 8 7 6 2
}

/**
 * for-in循环用来遍历对象属性
 * 在数组上不建议使用for-in循环
 * 可以使用 hasOwnProperty方法来过滤。所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。
 * 这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
for（var i in a）{
     if(!a.hasOwnProperty(i)) continue;//跳过继承的属性
     //循环体
}
 */
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
    console.log(key + " = " + obj[key]);//x = 1;y = 2;z = 3
}
let str = "abc";
for (let i in str) {
    console.log(i + ' ' + str[i]);//0 a;1 b;2 c
}

/**
 * 用forEach遍历数组的话，不能用break跳出循环，也不能用return返回外层。
 * 如果要提前终止，必须把forEach（）方法放在一个try块中，并能抛出一个异常。
 * 如果forEach（）调用的函数抛出foreach.break异常，循环会提前终止。
 * function foreach（a,f,t）{
    try { a.forEach（f,t）; }
    catch（e）{
        if（e === foreach.break）return;
        else throw e;
    }
}
foreach.break = new Error（"StopIteration"）;
 */
let arrForEach = [2, 3, 1, 23, 54, 88, 11];
arrForEach.forEach(el => {
    console.log(el / 2);//1 1.5 0.5 11.5 27 44 5.5
});
console.log(arrForEach);//(7) [2, 3, 1, 23, 54, 88, 11]
arrForEach.forEach((value, index) => {
    arrForEach[index] = value / 2;
});
console.log(arrForEach);//[1, 1.5, 0.5, 11.5, 27, 44, 5.5]
/**
 * Array.forEach(function(value , index , array){
 *  //value为遍历的当前元素，index为当前索引，array为正在操作的数组
    //do something
    },thisArg)      //thisArg为执行回调时的this值
 */
