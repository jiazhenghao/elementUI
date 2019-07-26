/**
 * @param {number[]} A
 * @return {number}
 * 我将问题复杂化了，给定一个unordered的数组。
 * 找出连续度最高的。
 * 但题目只是要求在顺序里找到。是按照array的顺序的。
 */
var longestArithSeqLength = function (A) {
    if (A.length == 0) return 0;
    if (A.length == 1) return 1;
    //A.sort((a, b) => a - b);
    var count = 1;
    var two = false;
    var map = new Map();
    //console.log(A);
    for (let i = 0; i < A.length; i++) {
        //console.log('A数组',A);
        if (map.has(A[i])) continue;
        //console.log([...map]);
        for (let [key, value] of map.entries()) {
            //console.log(value);
            for (let j = 0; j < value.length; j++) {
                if (isSequent(value[j], A[i])) {
                    value[j].push(A[i]);
                    //console.log('插入'+A[i]);
                    if (count < value[j].length) {
                        count = value[j].length;
                        console.log(value[j]);
                    }
                }
            }
            value.push([key, A[i]]);
            two = true;
        }
        map.set(A[i], [[A[i]]]);
        //console.log('aaa');
        //可以优化的，长度不够的，不用算了。  
    }
    if (count == 1 && two == true) {
        return 2;
    }
    return count;

    function isSequent(arr, num) {
        if (arr.length == 0) return true;
        if (arr.length == 1) return false;//因为在29行已经加入了。
        return num - arr[arr.length - 1] == arr[arr.length - 1] - arr[arr.length - 2];
    }
};

/*
[44,46,22,68,45,66,43,9,37,30,50,67,32,47,44,11,15,4,11,6,20,64,54,54,
    61,63,23,43,3,12,51,61,16,57,14,12,55,17,18,25,19,28,45,56,29,39,52,
    8,1,21,17,21,23,70,51,61,21,52,25,28]
*/