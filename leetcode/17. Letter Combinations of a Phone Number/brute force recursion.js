function recursion(arrStr, arr) {
    var arrResult = [];
    if (arr.length == 0) {
        return arrStr;
    }
    if (arrStr.length == 0) {
        return arr;
    }
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arrResult.push(arrStr[i] + arr[j]);
        }
    }
    return arrResult;
}

console.log(recursion(['a', 'b', 'c'], ['d', 'e', 'f']));
console.log(recursion([
    'ad', 'ae',
    'af', 'bd',
    'be', 'bf',
    'cd', 'ce',
    'cf'
], ['g', 'h', 'i']));

var letterCombinations = function (str) {
    if (str.length == 0) {
        return [];
    }
    
    var arrRes = [];

    var map = [[], [], ['a', 'b', 'c'], ['d', 'e', 'f'], 
    ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], 
    ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

    var arrkey = [];
    for (let i = 0; i < str.length; i++) {
        arr1 = arrkey;
        arr2 = map[str.charAt(i) * 1];
        arrkey = recursion(arr1, arr2);
    }
    return arrkey;

};

console.log(letterCombinations("234"));
console.log(letterCombinations("23"));
console.log(letterCombinations("3"));

/*
Runtime: 48 ms, faster than 96.52%  
Memory Usage: 33.8 MB, less than 70.04% 

*/