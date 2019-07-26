/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 * 
 * 思路比较清楚，创建一个k长度的priority队列
 * 当队列长度不满，一路加。加的时候，保证最大的一个在第一个，其余次序无所谓
 * 当队列长度满了，把后来的和第一个比较。大于等于的就不处理。如果小了，就入队列，把第一个踢掉。
 * 然后在这个长度为K的队列里把最大的找出来，然后把最大的继续放到第一个位置。
 */
var kClosest = function (points, k) {
    if (points.length < k) return points;
    let queue = new Array(k);
    let N = 0;
    for (let i = 0; i < points.length; ++i) {
        insert(points[i]);
    }
    return queue;

    function insert(item) {
        if (N < k) {
            queue[N++] = item;
            swim(N);
        } else if (less(item, queue[0])) {
            queue[0] = item;
            sink(1);
        }
    }

    function less(pointA, pointB) {
        return (Math.pow(pointA[0], 2) + Math.pow(pointA[1], 2)) < (Math.pow(pointB[0], 2) + Math.pow(pointB[1], 2));
    }

    function exchange(array, i, j) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }

    function swim(index) {
        if (index > k) return;

        while (index > 1) {
            let parent = Math.floor(index / 2);
            if (less(queue[index - 1], queue[parent - 1])) {
                return;
            }

            exchange(queue, parent - 1, index - 1);
            index = parent;
        }
    }

    function sink(index) {
        while (2 * index <= k) {
            let i = 2 * index;
            if ((i + 1) <= k && less(queue[i - 1], queue[i])) {
                i = i + 1;
            }

            if (less(queue[i - 1], queue[index - 1])) {
                break;
            }

            exchange(queue, index - 1, i - 1);
            index = i;
        }
    }

};
/*
N*Log(K)
Runtime: 172 ms, faster than 92.81% 
Memory Usage: 48.6 MB, less than 52.66% 
*/