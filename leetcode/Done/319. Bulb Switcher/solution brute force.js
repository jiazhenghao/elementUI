/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    var bulbs = new Array(n);
    bulbs.fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j < n; j = j + i) {
            bulbs[j] = bulbs[j] ^ 1;
        }
    }
    //console.log(bulbs);
    var temp = bulbs.reduce((acc, ele)=>acc+ele, 0);
    //console.log(temp);
    return temp;
};
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