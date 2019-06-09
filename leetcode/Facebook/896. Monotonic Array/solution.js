var isMonotonic = function(array) {
    if (array.length == 0 || array.length == 1 || array.length == 2) 
        return true;
    
    if (array[0] < array[array.length - 1]) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1])
                return false;
        }
        return true;
    }
    else {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1])
                return false;
        }
        return true;
    }
};