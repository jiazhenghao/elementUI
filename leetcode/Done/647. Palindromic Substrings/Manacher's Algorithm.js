/*
https://www.jianshu.com/p/7dacc9a3c9a0
https://www.cnblogs.com/grandyang/p/4475985.html
*/

/*
https://www.jianshu.com/p/7dacc9a3c9a0
https://www.cnblogs.com/grandyang/p/4475985.html
*/

var countSubstrings = function (s) {
    var A = new Array(2 * s.length + 3);
    A[0] = '@';
    A[1] = '#';
    A[A.length - 1] = '$';
    var t = 2;
    for (const value of s) {
        A[t++] = value;
        A[t++] = '#';
    }
    var Z = new Array(A.length);
    Z.fill(0);
    var center = 0, right = 0;
    for (let i = 1; i < Z.length - 1; ++i) {
        if (i < right)
            Z[i] = Math.min(right - i, Z[2 * center - i]);
        while (A[i + Z[i] + 1] == A[i - Z[i] - 1])
            Z[i]++;
        if (i + Z[i] > right) {
            center = i;
            right = i + Z[i];
        }
    }
    var ans = 0;
    for (const v of Z) {
        if (v == 0) continue;
        else ans += Math.trunc((v + 1) / 2);
    }
    return ans;
}
/*
Runtime: 56 ms, faster than 97.68% 
of JavaScript online submissions for Palindromic Substrings.
Memory Usage: 35.7 MB, less than 52.92% 
*/

