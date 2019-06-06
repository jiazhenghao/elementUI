/*
From the beginning two elements to add in next elements one by one.

*/

var maxArea = function(arr) {
    let area = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((i - j) * Math.min(arr[i], arr[j]) > area) {
                area = (i - j) * Math.min(arr[i], arr[j]);
            }
        }
    }

    return area;

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

/*
Runtime: 688 ms, faster than 23.86%
Memory Usage: 35.7 MB, less than 38.80% 

The total runtime is O(n^2)

*/