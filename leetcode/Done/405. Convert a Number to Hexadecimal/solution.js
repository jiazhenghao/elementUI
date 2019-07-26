/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num === 0) return '0';
    const words = '0123456789abcdef';
    let r = '';
    let flag = 1;
    if (num < 0) {
        num = -num - 1;
        flag = -1;
    }
    while (num / 16) {
        r += words[`${num % 16}`];
        num = parseInt(num / 16);
    }
    r = r.split('').reverse().join('');
    if (flag === -1) {
        r = r.split('').map(_r => words[15 - words.indexOf(_r)]).join('');
        console.log(r);
        r = 'f'.repeat(8 - r.length) + r;
    }
    return r;
};
/*
Runtime: 60 ms, faster than 30.00% 
Memory Usage: 33.8 MB, less than 46.94% of
*/
