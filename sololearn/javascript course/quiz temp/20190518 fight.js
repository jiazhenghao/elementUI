/**
 * 284 Q4
 */
console.log(false + true - null);//1
console.log([] + 0);//0
console.log([] + false - null + true);//NaN
console.log([] + false);//false
console.log([] + false - null);//NaN

function evenize(a) {
    if (a % 2 == 0)
        return a;
    //if (a % 2 == 2)
        return a + 1;
}
var a = evenize(13);
console.log(a);//14