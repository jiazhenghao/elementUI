/**
 * Q2
 * Array.prototype.reverse()
 * 一般情况下不传参。
 */
const num = [1,2,3,4,4,3,2,1];
len = num.length;
arr = new Array();
for (let i = 0; i < len; i++) {
    if (arr.indexOf(num[i]) == -1) {
        arr.push(num[i]);
        arr.reverse([i]);
    }
}
console.log(arr);