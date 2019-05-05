/**
 * 241 Q5
 */
var arr = [2, 3, 8, 5, 9, 1];
var i, j = 2;
for (i = 0; i + j < arr.length; i++) {
    arr[i + j] = arr[i];
}
console.log(arr[2]);//arr[2] = arr[0] 2

/**
 * 242 Q1
 */
var k = 10;
for (var i = 0; i < k; i++) {
    k += 0.5;
}
console.log(i, k);
//k=6, 12 12
//k=3, 6  6
//k=5, 10 10
//k=10, 20 20

/**
 * 243 Q3
 */
var a = [1, 2, 3, 4, 5];
console.log(a.splice());
var b = [1, 2, 3, 4, 5];//[]
console.log(b.slice());//(5) [1, 2, 3, 4, 5]

/**
 * 243 Q4
 */
var a = '10';
var b = Array.from(a).length;
console.log(b);//2
console.log(Array.from("101"));//(3) ["1", "0", "1"]

/**
 * 248 Q1
 */
var a = (obj = (str) => str.split())("hey");
console.log(a[0]);//hey
console.log(a);//["hey"]
var str = "hey2";
var arr = str.split();
console.log(arr);//["hey2"]

/**
 * 249 Q3
 */
var x = " ";
console.log(x == false);//true
console.log("   " == false);//true

