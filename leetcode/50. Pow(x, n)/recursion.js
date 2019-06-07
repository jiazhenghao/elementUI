let m = {};
//把所有的数据都存入到一个大对象中，方便后续查找
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    if (n === -1) {
        return 1 / x;
    }
    
    if (x == 1) { return 1; }
    if (x == -1) { return n % 2 == 0 ? 1 : -1; } //-1^n = -1 for odd n, 1 for even n


    if (m[`${x}_${n}`]) {
        return m[`${x}_${n}`];
    }
    if (n % 2 === 0) {
        let v = myPow(x * x, n / 2);
        m[`${x}_${n}`] = v;
        return v;
    } else {
        let v = x * myPow(x * x, (n - 1) / 2)
        m[`${x}_${n}`] = v;
        return v;
    }
};

/*
Runtime: 64 ms, faster than 57.92%
Memory Usage: 34.4 MB, less than 24.05%


*/