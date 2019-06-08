function convert(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == -1) {
            str += ')';
        }
        else {
            str += '(';
        }
    }
    return str;
}

var generateParenthesis = function(n) {
    if (n == 1) {
        return ['()'];
    }
    // if (n == 2) {
    //     return ['()()','(())'];
    // }

    var tempArray = [[1]];

    for (let i = 1; i < 2 * n; i++) {
        tempArray = plusOne(tempArray);
    }

    var stringArr = [];
    var str = '';
    for (let i = 0; i < tempArray.length; i++) {
        let sum = 0;
        for (let j = 0; j < tempArray[i].length; j++) {
            sum += tempArray[i][j];
            if (sum < 0) {
                break;
            }
        }
        if (sum == 0) {
            str = convert(tempArray[i]);
            stringArr.push(str);
        }
    }

    return stringArr;

};

function plusOne(array) {
    let arrRes = [];
    for (let i = 0; i < array.length; i++) {
        //javascript的深度复制
        let temp1 = array[i].slice(0);
        temp1.push(-1);
        let temp2 = array[i].slice(0);
        temp2.push(1);
        arrRes.push(temp1);
        arrRes.push(temp2);
        //console.log(temp1);
        //console.log(temp2);

    }
    //console.log(arrRes);
    return arrRes;
}

console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
//console.log(generateParenthesis(4));


/*
Runtime: 120 ms, faster than 5.94% 
Memory Usage: 74.1 MB, less than 5.06%
O((2^2n) * n)
For each sequence, we need to create and validate the sequence, 
which takes O(n) work.
*/