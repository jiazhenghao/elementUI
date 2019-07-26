/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    var n = chars.length;

    var char = chars[0];
    var count = 1;

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] == char) {
            count++;
        } 
        else {
            if (count == 1) {
                char = chars[i];
            } 
            else {
                char = chars[i];
                chars.splice(i - count + 1, count - 1);
                i = i - count + 1;
                let arr = (count + '').split('');
                for (let j = 0; j < arr.length; j++) {
                    chars.splice(i, 0, arr[j]);
                    i++;
                }
                count = 1;
            }
        }
    }
    if (count != 1) {
        let arr = (count + '').split('');
        while (count != 1) {
            chars.pop();
            count--;
        }
        for (let j = 0; j < arr.length; j++)
            chars.push(arr[j]);
    }
    return n;
};
/*
Runtime: 60 ms, faster than 94.93% 
Memory Usage: 37.3 MB, less than 29.65%
*/