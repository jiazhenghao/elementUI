/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    if (A.length == 0) return [];
    if (A[0] >= 0) return A.map(a => a * a);
    if (A[A.length - 1] <= 0) return A.map(a => a * a).reverse();
    //[-9,-6,-6,-1,0,1,3,3,4,9,10]
    var negativeA = [];
    for (let i = 0; i < A.length;) {
        if (A[i] > 0) {
            break;
        } else {
            negativeA.unshift(Math.abs(A[i]));
            A.shift();
        }
    }
    //console.log(negativeA);//[0, 1, 6, 6, 9 ]
    //console.log(A);//[ 1, 3, 3, 4, 9, 10 ]
    var res = [];
    var p1 = 0;
    var p2 = 0;
    while (p1 != negativeA.length && p2 != A.length) {
        if (negativeA[p1] < A[p2]) {
            res.push(negativeA[p1]);
            p1++;
        }
        else {
            res.push(A[p2]);
            p2++;
        }
    }

    if (p1 == negativeA.length && p2 != A.length) {
        return res.concat(A.slice(p2)).map(a => a * a);
    }
    if (p2 == A.length && p1 != negativeA.length) {
        return res.concat(negativeA.slice(p1)).map(a => a * a);
    }
    return res.map(a => a * a);
};

/*
Runtime: 104 ms, faster than 97.90% 
Memory Usage: 43.1 MB, less than 68.34%
*/

