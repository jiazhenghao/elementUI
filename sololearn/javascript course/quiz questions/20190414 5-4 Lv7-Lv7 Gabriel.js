/**
 * Q2
 * Is the output of the code below "undefined"?
 * 
 */
var sent = "Im the best in JS";
function mS(t,r) {
    return sent.substring(t,r);
}
console.log(mS(7,11));//best
console.log(sent);//Im the best in JS
console.log(sent[mS(7,11)]);//undefined


