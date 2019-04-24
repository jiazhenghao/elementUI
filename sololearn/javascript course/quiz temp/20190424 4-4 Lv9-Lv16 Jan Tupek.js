/**
 * Q4
 * i 本来 有0 1 2 3 4 5 6
 * 0 1 2
 * 到3，i=5，count不加，i++后，变6
 * 6正常
 * 故累加4次。
 */
var count = 0;
for (var i = 0; i <= 6; i++) {
    if (i == 3) {
        i = 5;
        continue;
    }
    count++;
}
console.log(count);//4
