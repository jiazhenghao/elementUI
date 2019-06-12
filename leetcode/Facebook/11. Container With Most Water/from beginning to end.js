var maxArea = function (arr) {
    var max = Math.min(arr[0], arr[arr.length - 1]) * (arr.length - 1 - 0);

    var leftIndex = 0;
    var rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        if (arr[leftIndex] < arr[rightIndex]) {
            let j;
            for (j = leftIndex+1; j < rightIndex; j++) {
                if (arr[j] > arr[leftIndex]) {
                    max = Math.min(arr[j], arr[rightIndex]) * (rightIndex - j) > max ?
                        Math.min(arr[j], arr[rightIndex]) * (rightIndex - j) : max;
                    break;
                }
            }
            leftIndex = j;
        }
        else {
            let j;
            for (j = rightIndex-1; j > leftIndex; j--) {
                if (arr[j] > arr[rightIndex]) {
                    max = Math.min(arr[j], arr[leftIndex]) * (j - leftIndex) > max ?
                        Math.min(arr[j], arr[leftIndex]) * (j - leftIndex) : max;
                    break;
                }
            }
            rightIndex = j;
        }
    }

    return max;

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/**
 * 
Runtime: 48 ms, faster than 99.53% of JavaScript online submissions for Container With Most Water.
Memory Usage: 36.1 MB, less than 7.07% of JavaScript online submissions for Container With Most Water.
O(n)
 * 
 */