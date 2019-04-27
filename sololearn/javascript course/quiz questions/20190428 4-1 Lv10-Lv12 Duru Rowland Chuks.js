/**
 * Q5
 * javascript的数组，key一般都是数字index。
 * 但如果用其他做key，也是算在长度中的。
 */
var arr = [];
arr[0] = 0;
arr["one"] = 1;
arr["2"] = 2;
console.log(arr.length);//3
console.log(arr);// [0, empty, 2, one: 1]