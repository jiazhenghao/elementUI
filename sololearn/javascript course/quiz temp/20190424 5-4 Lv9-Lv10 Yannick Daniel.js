/**
 * Q2
 */
var j;
if (j === null) 
    console.log(0);
else if (j == null)
    console.log(1);
else 
    console.log(1 + 2);
//1
console.log(undefined == null);//true

/**
 * Q5
 * delete 只能删除 对象的属性 
 */
var test = function () {
    var x = 3;
    delete this.x;
    console.log(x);
}
test();//3
var obj = {x: 1};
delete obj;
console.log(obj);//{x: 1}
delete obj.x;
console.log(obj);//{}