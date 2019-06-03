const randomArrayGenerator = require('./randomArrayGenerator');

/*
    To test
*/
var array = randomArrayGenerator(100);
console.log(array);

function insertSort(arr) {
    let begin = new Date();
    
    for (let i = 1; i < arr.length; i++) {
        for(let j = i; j >= 1; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }

    let end = new Date();
    console.log(end - begin);
    return arr;
}

insertSort(array);
console.log(array);

//length = 100000; time = 3663
//length = 50000; time = 806
//length = 25000; time = 211
//length = 10000; time = 43

