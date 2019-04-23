/**
 * Q1
 */
var arr = [2, 3, 8, 5, 9, 1];
var i, j = 2;
for (i = 0; i + j < arr.length; i++) {
    arr[i + j] = arr[i];
}
console.log(arr[2]);//2
//非常阴险，循环开始的时候，把i又变为0，所以第一轮循环就重制了arr[2]

/**
 * Q3
 */
var a = 1;
for (i = 0; i <= 5; i++) {
    i += 2;
    a *= 2;
}
console.log(a);//4