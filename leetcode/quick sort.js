function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        console.log(partitionIndex);
        console.log(arr);
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
            console.log(arr);
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

quickSort([6,3,10,1,2,7,8,5,9,4]);
3,6,10,1,2,7,8,5,9,4
3,6,1,10,2,7,8,5,9,4
3,6,1,2,10,7,8,5,9,4
3,6,1,2,5,7,8,10,9,4
3,6,1,2,5,4,8,10,9,7

3,1,10,6,2,7,8,5,9,4
3,1,10,6,2,7,8,5,9,4
3,1,2,6,10,7,8,5,9,4
3,1,2,5,4,7,8,6,9,10


