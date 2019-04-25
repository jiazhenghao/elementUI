/**
 * Q4
 */
function MyClass() {
    this.valueOf = function() {
        return false;
    }
}
var hello = new MyClass();
console.log(hello === false);//false
if (hello) {
    console.log(true);//true
}
else {
    console.log(false);
}
console.log(hello == false);//true
console.log(hello == true); //false