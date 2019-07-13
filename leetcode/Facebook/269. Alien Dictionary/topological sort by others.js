var alienOrder = function (words) {
    var set = new Set();
    var map = new Map();
    var result = "";
    for (var word of words) {
        for (var c of word) {
            set.add(c);
        }
    }
    var count = set.size;
    for (var i = 1; i < words.length; i++) {
        var a = words[i - 1];
        var b = words[i];
        var wierd = true;
        for (var j = 0; j < Math.min(a.length, b.length); j++) {
            if (a[j] !== b[j]) {
                set.delete(b[j]);
                if (!map.has(b[j])) {
                    map.set(b[j], new Set());
                }
                map.get(b[j]).add(a[j]);
                wierd = false;
                break;
            }
        }
        if (wierd && a.length > b.length) {
            return "";
        }
    }
    var queue = Array.from(set);
    while (queue.length > 0) {
        result = result + queue[0];
        for (var [key, value] of map) {
            if (value.has(queue[0])) {
                value.delete(queue[0]);
                if (value.size === 0) {
                    queue.push(key);
                    map.delete(key);
                }
            }
        }
        queue.shift();
    }
    return result.length == count ? result : "";
};