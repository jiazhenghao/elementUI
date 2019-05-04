/**
 * 241 Q5
 */
var arr = [2, 3, 8, 5, 9, 1];
var i, j = 2;
for (i = 0; i + j < arr.length; i++) {
    arr[i + j] = arr[i];
}
console.log(arr[2]);//arr[2] = arr[0] 2