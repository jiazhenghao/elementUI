/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return Math.trunc(Math.pow(n, 0.5));
};
for (let i  = 1; i <= 32; i++) {
    console.log(i + ':' + bulbSwitch(i));
}
//1 1
//2 1
//3 1
//4 2
//5 2
//6 2
//7 2
//8 2
//9 3
//10 3
//15 3
//16 4
//25 5
//31 5
//32 5