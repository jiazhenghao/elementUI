/**
 * 254 Q4
 */
var x;
if (x = 1) {    //care
    console.log("1");//console.log
}
else {
    console.log("0");
}
console.log(x);//1

/**
 * 258 Q5
 */
function* engine() {
    let start = 0;
    while (start < 5)
        yield start++;
}
var itr = engine();
console.log(itr.next().value);//0
console.log(itr.next());//{value: 1, done: false}
