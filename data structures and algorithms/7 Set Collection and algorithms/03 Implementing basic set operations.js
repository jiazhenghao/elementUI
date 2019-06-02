function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

function symmetricDifference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}

var setA = new Set([1, 2, 3, 4, 5]);
var setB = new Set([2, 9, 8, 4, 0, -1]);

console.log(union(setA, setB));//Set { 1, 2, 3, 4, 5, 9, 8, 0, -1 }

console.log(intersection(setA, setB));//Set { 2, 4 }

console.log(difference(setA, setB));//Set { 1, 3, 5 }

console.log(difference(setB, setA));//Set { 9, 8, 0, -1 }

console.log(symmetricDifference(setA, setB));//Set { 1, 3, 5, 9, 8, 0, -1 }

function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}



