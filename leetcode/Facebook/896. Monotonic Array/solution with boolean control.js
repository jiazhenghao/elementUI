var isMonotonic = function (array) {
    if (array.length == 0 || array.length == 1 || array.length == 2)
        return true;

    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1])
            increasing = false;
        if (array[i] < array[i + 1])
            decreasing = false;
    }

    return increasing || decreasing;
};
/*
Runtime: 56 ms, faster than 100.00% 
Memory Usage: 40.6 MB, less than 29.56% 
*/