var toHex = function (num) {

    if (num === 0) return '0';

    var hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var hex = '';
    if (num > 0) {
        while (num !== 0) {
            hex = hexMap[num % 16] + hex;
            num = parseInt(num / 16);
        }
    } else {
        hex = toHex(0xffffffff - Math.abs(num) + 1);
    }
    return hex;
};
/*
Runtime: 48 ms, faster than 95.45% 
of JavaScript online submissions for Convert a Number to Hexadecimal.
Memory Usage: 33.7 MB, less than 77.55%
*/