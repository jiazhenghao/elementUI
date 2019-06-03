const randomArrayGenerator = require('./randomArrayGenerator');

/*
    To test
*/
var array = randomArrayGenerator(100000);
console.log(array);

function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

function mergeSort(array) {
    var len = array.length;
    if (len < 2) {
        return array;
    }

    var middle = Math.floor(len / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


var begin = new Date();
var arr = mergeSort(array);
var end = new Date();
console.log(end - begin);
console.log(arr);

//length = 100000; time = 1185
//length = 50000; time = 264
//length = 25000; time = 52
//length = 10000; time = 15

