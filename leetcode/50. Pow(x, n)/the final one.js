let m = {};
//把数据都存下来，存在大对象里

var myPow = function (x, n) {
    //n等于0，-1，1
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    if (n === -1) {
        return 1 / x;
    }
    
    //x等于1或者-1
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
Runtime: 52 ms, faster than 97.62%
Memory Usage: 34.3 MB, less than 24.36%


*/