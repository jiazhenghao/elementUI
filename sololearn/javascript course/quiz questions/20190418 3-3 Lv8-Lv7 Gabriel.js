/**
 * Q2
 */
var a = [0,1,2,3];
var b = [];
for (i = 0; i <= a.length; i++) {
    if (i == a[i]) {
        b.push(i++);
    }    
}
console.log(b);//[0, 2]
