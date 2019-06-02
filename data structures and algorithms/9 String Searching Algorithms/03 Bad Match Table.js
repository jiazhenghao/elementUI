// TRUTH

// Index    Value 
// ?        5
// T        1
// R        3
// U        2

function badMatchTable(pattern) {
    _defaultValue = pattern.length;
    _distances = new Map();
    for (let i = 0; i < pattern.length - 1; i ++) {
        _distances.set(pattern[i], pattern.length - i - 1);
    }
    return _distances;
}

var map = new badMatchTable("TRUTH");
console.log(map);
