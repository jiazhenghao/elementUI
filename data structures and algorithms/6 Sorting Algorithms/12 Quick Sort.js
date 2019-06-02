const randomArrayGenerator = require('./randomArrayGenerator');
/*
    To test
*/
var array = randomArrayGenerator(200000);
console.log(array);

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var begin = new Date();
var arr = quickSort(array);
var end = new Date();
console.log(end - begin);
console.log(arr);

//length = 200000; time = 35
//length = 100000; time = 29
//length = 50000; time = 11
//length = 25000; time = 8
//length = 10000; time = 7