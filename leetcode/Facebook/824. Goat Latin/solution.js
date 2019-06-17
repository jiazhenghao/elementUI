/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    if (S.length == 0)
        return '';
    var arr = S.split(' ');
    var end = 'a';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 'a' || arr[i][0] == 'A' || arr[i][0] == 'e' || arr[i][0] == 'E'
            || arr[i][0] == 'i' || arr[i][0] == 'I' || arr[i][0] == 'o' || arr[i][0] == 'O'
            || arr[i][0] == 'u' || arr[i][0] == 'U' ) {
            arr[i] += 'ma' + end;
        } else {
            arr[i] = arr[i].substring(1) + arr[i].substring(0, 1) + 'ma' + end;
        }
        end = end + 'a';
    }
    var result = arr.join(' ');
    return result;
};

/*
Runtime: 52 ms, faster than 93.02% 
Memory Usage: 33.9 MB, less than 78.07%
*/