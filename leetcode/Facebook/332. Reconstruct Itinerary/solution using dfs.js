/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    var length = tickets.length;

    var map = {
        JFK: []
    };

    var result = [];
    for (var i = 0; i < length; i++) {
        var from = tickets[i][0];
        var to = tickets[i][1];
        if (!map[from]) {
            map[from] = [];
            map[from].push(to);
        } else {
            map[from].push(to);
        }
    }

    for (var prop in map) 
        map[prop].sort();
    
    makeItinerary("JFK");    // dfs
    function makeItinerary(from) {
        var tos = map[from];
        while (tos && tos.length > 0) {
            makeItinerary(tos.shift());
        }
        result.unshift(from);
    }
    return result;
};

/*
Runtime: 76 ms, faster than 92.80% 
Memory Usage: 37.6 MB, less than 82.57%
*/