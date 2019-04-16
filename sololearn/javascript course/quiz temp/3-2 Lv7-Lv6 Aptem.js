/**
 * Q3
 * 对于对象引用，无论==还是恒等===
 * 都是true；
 */
var a = {}, b = a;
a.id = 1;
console.log(a == b && a === b ? a.id : 0);//1

/**
 * Q5
 * Fill in the blanks to get the following output:
 * 2221
 * 2211
 * 2111
 */
var size = 4;
for (let i = 1; i < size; i++) {
    for (let k = 0; k < size-i; k++) {
        document.write(2);
    }
    for (let k = 0; k < i; k++) {
        document.write(1);
    }
    document.write("<br>");
}