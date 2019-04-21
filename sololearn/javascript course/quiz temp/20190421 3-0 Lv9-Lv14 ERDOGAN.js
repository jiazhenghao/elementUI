/**
 * Q2
 */
var s = {name:'js',fullName:'javascript'};
var x;
for(x in s) {
    console.log(x);
}
//name fullName

/**
 * Q4
 */
var arr = [1,2,3,4];
var length = arr.length;
for (var i = 0; i < length; i++) {
    length--;
    console.log(arr[i]);
}
//1 2