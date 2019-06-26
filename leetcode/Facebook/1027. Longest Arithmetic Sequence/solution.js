/**
 * @param {number[]} A
 * @return {number}
 * 我将问题复杂化了，给定一个unordered的数组。
 * 找出连续度最高的。
 * 但题目只是要求在顺序里找到。是按照array的顺序的。
 */
var longestArithSeqLength = function (A) {
    if (A.length == 0) return 0;
    A.sort((a, b) => a - b);
    var count = 1;
    var map = new Map();
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        //console.log('A数组',A);
        if (map.has(A[i])) continue;
        //console.log([...map]);
        for (let [key, value] of map.entries()) {
            console.log(value);
            for (let j = 0; j < value.length; j++) {
                if (isSequent(value[j], A[i])) {
                    value[j].push(A[i]);
                    //console.log('插入'+A[i]);
                    if (count < value[j].length) {
                        count = value[j].length;
                    }
                }
            }
            value.push([key, A[i]]);
        }
        map.set(A[i], [[A[i]]]);
        console.log('aaa');
        //可以优化的，长度不够的，不用算了。  
    }
    return count;
    function isSequent(arr, num) {
        if (arr.length == 0) return true;
        if (arr.length == 1) return false;//因为在29行已经加入了。
        return num - arr[arr.length - 1] == arr[arr.length - 1] - arr[arr.length - 2];
    }
};
/*
测试案例：
[20,1,15,3,10,5,8]  4
[9,4,7,2,10]  3
[3,6,9,12]   4
[0,8,45,88,48,68,28,55,17,24]   5    2   

*/