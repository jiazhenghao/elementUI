/**
 * 191  Q3
 */
var x = new RegExp("Solo");
var y = "Learn";
console.log(x + y);//   /Solo/Learn

/**
 * 192 Q3
 */
var obj = {
    n: 'nth',
    10: "ten"
}
console.log(obj[10]);//ten
console.log(obj);//{10: "ten", n: "nth"}
//console.log(obj.10);//Uncaught SyntaxError: missing ) after argument list

/**
 * 193 Q2
 */
var nums1 = [1, 2];
var nums2 = [3, 4];
var set = nums1 + nums2;
console.log(set.length);//6
console.log(set);//1,23,4
console.log(typeof set);//string

