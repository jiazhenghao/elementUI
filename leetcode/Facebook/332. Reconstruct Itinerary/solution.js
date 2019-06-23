/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    if (tickets == null || tickets.length == 0) return [];
    var map = {};
    var result = [];

    tickets.sort(sortArray);
    for (var i = 0; i < tickets.length; i++) {
        if (tickets[i][0] in map) map[tickets[i][0]].push(tickets[i][1]);
        else map[tickets[i][0]] = [tickets[i][1]];
    }

    var key = 'JFK';
    var drawback = [];
    for (var i = 0; i < tickets.length; i++) {
        while (!(key in map) || map[key].length == 0) {
            drawback.push(key);
            key = result.pop();
        }
        result.push(key);
        key = map[key].shift();
    }
    result.push(key);
    while (drawback.length > 0) result.push(drawback.pop());

    return result;

    function sortArray(a, b) {
        if (a[0] == b[0]) return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0));
        return (a[0] < b[0] ? -1 : 1);
    }
};

/*
Runtime: 76 ms, faster than 92.80% 
Memory Usage: 38 MB, less than 51.38% 
*/