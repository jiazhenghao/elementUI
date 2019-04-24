/**
 * Q2
 */
var arr = [4, 3, 2, 5];
for (var i = 1; i < 3; i++) {
    arr[i] = arr[i - 1] + arr[i + 1];
}
console.log(arr);
/**
 * i = 1;
 * a1 = a0+a2;
 * 4,6,2,5
 * i = 2;
 * a2 = a1+a3;
 * 4,6,11,5
 */

/**
 * Q4
 */
for (var i = 0; i < 3; i++)
    document.write(i);
for (var i = 0; i < 3; i++)
    document.write(i);
//012012
