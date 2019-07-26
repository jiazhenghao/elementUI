/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
    if (isIPv4(IP)) {
        return "IPv4";
    }
    if (isIPv6(IP)) {
        return "IPv6";
    }
    return "Neither";
};

function isIPv4(IP) {
    var arr = IP.split('.');
    if (arr.length != 4) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3 || arr[i].length == 0) return false;
        if (arr[i].length > 1 && arr[i][0] == 0) return false;
        if (isNaN(arr[i] * 1)) return false;
        if (arr[i] * 1 < 0 || arr[i] * 1 > 255) return false;
        let t = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let j = 0; j < arr[i].length; j++) {
            if (t.indexOf(arr[i][j]) == -1) {
                return false;
            }
        }
    }
    return true;
}

function isIPv6(IP) {
    var arr = IP.split(':');
    if (arr.length != 8) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4 || arr[i].length == 0) return false;
        let t = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let j = 0; j < arr[i].length; j++) {
            let temp = arr[i][j].toUpperCase();
            if (t.indexOf(temp) == -1) {
                return false;
            }
        }
    }
    return true;
}

/*
Runtime: 36 ms, faster than 100.00% 
Memory Usage: 33.9 MB, less than 40.28%
*/
