/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function (N) {
    // var first = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //10
    var arr = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]; //10 + 10;
    var temp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var next = [];
    for (let i = 2; i <= N; i++) {
        next = [];
        for (let j = 0; j < temp.length; j++) {
            for (let k = 0; k < arr[temp[j]].length; k++) {
                next.push(arr[temp[j]][k]);
            }
        }
        temp = next;
    }
    //console.log(temp);
    return temp.length;
};
// console.log(knightDialer(1));//10   10
// console.log(knightDialer(2));//20   20
// console.log(knightDialer(3));//46   46
//console.log(knightDialer(4));//104 104
//console.log(knightDialer(5));//240 240
/**
 * 
 * JavaScript heap out of memory.
 */
