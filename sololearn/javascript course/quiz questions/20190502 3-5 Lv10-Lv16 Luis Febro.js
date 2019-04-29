/**
 * Q3 
 * What will be the output?
 */
let a = [5, 2];
(() => {
    console.log(a[0]);
});// No output

(() => {
    console.log(a[0]);
})();//5

var x = function () {
    console.log(1);
}();//1

