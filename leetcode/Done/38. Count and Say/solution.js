/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) 
        return "1";
    if (n == 2) 
        return "11";
    var temp = "11";
    for (let i = 0; i < n-2; i++) {
        temp = get(temp);
    }
    return temp;
};

function get(temp) {
    var i = 0;
    var count = 1;
    var str = '';
    while (temp[1] != undefined) {
        if (temp[0] == temp[1]) {
            count++;
            temp = temp.substring(1);
            continue;
        }
        else {
            str = str + count + temp[0];
            count = 1;
            temp = temp.substring(1);
            continue;
        }
    }
    str = str + count + temp[0];
    return str;
}

/*
Runtime: 48 ms, faster than 99.01% 
Memory Usage: 36.1 MB, less than 18.37%
*/