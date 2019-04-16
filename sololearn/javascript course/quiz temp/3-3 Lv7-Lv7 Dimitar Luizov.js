/**
 * Q3
 * "2*2"+4 = "2*24"
 */
var x = "2*2";
var y = 4;
var z = eval(x + y);
console.log(eval("2*2" + 4));//48

/**
 * Q4
 */
var a = "";
var b = "0";
var c = 0;
if (a == b) {
    console.log("true");//不执行
}
if (b == c)
    console.log("false");
if (a == c)
    console.log("true");
//false true
