/**
 * @param {number} N
 * @return {number}
 */
/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function (N) {
    var arr = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];
    var temp = new Map();
    for (let i = 0; i < 10; i++) {
        temp.set(i, 1);
    }
    var next;
    for (let i = 2; i <= N; i++) {
        next = new Map();
        for (let [key, value] of temp.entries()) {
            for (let k = 0; k < arr[key].length; k++) {
                if (next.has(arr[key][k])) {
                    next.set(arr[key][k], next.get(arr[key][k]) + value);
                } else {
                    next.set(arr[key][k], value);
                }
            }
        }
        temp = next;
    }
    var result = 0;
    for (let value of temp.values()) {
        result += value;
    }
    return result;
};

console.log(knightDialer(1));//10   10
console.log(knightDialer(2));//20   20
console.log(knightDialer(3));//46   46
console.log(knightDialer(4));//104 104
console.log(knightDialer(5));//240 240