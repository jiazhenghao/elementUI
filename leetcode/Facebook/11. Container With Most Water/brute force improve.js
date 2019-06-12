/*
set a benchmark 
I pick arr[0]  and arr[length - 1]
get the smaller one of arr[0] and 

the insert one cannot smaller than the 0 and length - 1


*/

var maxArea = function (arr) {
    let area = Math.min(arr[0], arr[arr.length - 1]) * (arr.length - 1 - 0);
    let standard = Math.min(arr[0], arr[arr.length - 1]);
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < standard) {
            continue;
        }
        else {
            for (let j = 0; j < arr.length; j++) {
                area = Math.abs(i - j) * Math.min(arr[j], arr[i]) > area ?
                    Math.abs(i - j) * Math.min(arr[j], arr[i]) : area;
            }
        }
    }
    return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/*
Did more calculation than before brute force
Runtime: 980 ms, faster than 9.08%
Memory Usage: 36 MB, less than 7.46%

*/