/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    var arr = (num + '').split('');
    var curr = arr.slice(0);
    arr.sort((a,b) => b - a);
    var i = 0;
    while (i < arr.length) {
        if (arr[i] == curr[i]) {
            i++;
            continue;
        }
        let j = arr.length - 1;
        while (curr[j] != arr[i]) { 
            j--;
        }
        let temp = curr[i];
        curr[i] = arr[i];
        curr[j] = temp;
        break;
    }
    return curr.join('');
};
/*
Runtime: 52 ms, faster than 90.27% 
Memory Usage: 33.8 MB, less than 71.43% 
*/