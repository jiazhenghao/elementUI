const randomArrayGenerator = require('./randomArrayGenerator');

/*
    To test
*/
var array = randomArrayGenerator(100000);
console.log(array);

function bubbleSort(arr) {
    let begin = new Date();
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 -i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let end = new Date();
    console.log(end - begin);
    return arr;
}

bubbleSort(array);
console.log(array);

//length = 100000; time = 18318     
//length = 50000; time = 4627       
//length = 25000; time = 1089       
//length = 10000; time = 188        



