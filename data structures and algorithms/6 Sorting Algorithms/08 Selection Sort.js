const randomArrayGenerator = require('./randomArrayGenerator');

/*
    To test
*/
var array = randomArrayGenerator(100000);
console.log(array);

function selectionSort(arr) {
    let begin = new Date();
    
    for (let i = 0; i < arr.length - 1; i ++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    let end = new Date();
    console.log(end - begin);
    return arr;
}

selectionSort(array);
console.log(array);

//length = 100000; time = 3763
//length = 50000; time = 970
//length = 25000; time = 251
//length = 10000; time = 43

