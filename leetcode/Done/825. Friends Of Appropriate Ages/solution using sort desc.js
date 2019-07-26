/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    ages.sort(function (a, b) {
        return b - a;
    });
    var res = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > 14) {
            for (let j = i + 1; j < ages.length; j++) {
                if (ages[j] > 0.5 * ages[i] + 7) {
                    if (ages[j] == ages[i])
                        res += 2;
                    else
                        res++;
                }
                else
                    break;
            }
        }
        else
            break;
    }
    return res;
};
/*
Runtime: 1448 ms, faster than 21.95%
Memory Usage: 38.5 MB, less than 26.92%
*/