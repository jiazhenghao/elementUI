/**Q1
 * javascript对于加法，都是先将变量转化为数字或者字符串。
 * 在数组，就是 转化为字符串
 * var str = "1,2,3";
        var str2= "4,5,6";
    console.log(str+str2);//“1,2,34,5,6”
 */
// var array1 = [1,2,3];
// var array2 = [4,5,6];
// function join(firstArr, secondArr) {
//     return firstArr + secondArr;
// }
// console.log(join(array1, array2).split(","));// ["1", "2", "34", "5", "6"]

/**
 * Q3
 */
// var x = 1;
// for (;x<6;x+=2) {
//     x = x * x;
// }
// console.log(x);// x=1,x=3; x=9;x=11;

/**
 * Q4
 */
var x = 0;
if (!true) {
    x = 1; //错
}
else if (false) {
    x = 2; //错
}
else {
    x = 3;
}
console.log(x);//3

