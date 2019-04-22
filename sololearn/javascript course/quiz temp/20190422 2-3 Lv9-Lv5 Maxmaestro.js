/**
 * Q1
 */
let studentA = {name:'John', age: 21};
let studentB = JSON.parse(JSON.stringify(studentA));
studentB.name = "Brad";
console.log(studentA.name);//John
console.log(studentB);//{name: "Brad", age: 21}

/**
 * Q2
 */
console.log(1 / 0);//Infinity
console.log(1 / Infinity);// 0

/**
 * Q3
 * 5 + 0 / 2
 */
var x = 5;
var y = -1;
z = x++ + ++y / 2;
console.log(z); //5
console.log(1 / 2);//0.5

/**
 * Q4
 */
var set = new Set([1,2.0,2,4]);
var map = new Map([[set], [set]]);
console.log(map.size); // 1
console.log(set.size); // 3
console.log(2 == 2.0 && 2 === 2.0);//true
console.log(map); // Map(1) { Set(3) => undefined }
console.log(set);//Set(3) {1, 2, 4}

var kvArray = [['key1', 'value1'], ['key2', 'value2']];
var myMap = new Map(kvArray);
console.log(myMap.size);//2
console.log(myMap);//Map(2) {"key1" => "value1", "key2" => "value2"}