/**
 * @param {number[][]} grid
 * @return {number}
The basic idea is use BFS, start with each road, BFS the path to each house and 
get the total sum of distance.
I did a MxN search at first to count total house number, 
because there may be some part of the grid can only connect to part of the houses. 
And if you design your BFS to return the linked house number, then you can filter 
out a lot of roads which can only connect to part of the houses, which will save some running time.
 */
var shortestDistance = function(grid) {
    let width = grid[0].length, height = grid.length, dirs = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    let dist = 0, res = Infinity, house = 1, houseCount = 0, avoidArea = [], road = -1;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const num = grid[i][j];
            if (num === 1) {
                houseCount++;
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const num = grid[i][j];
            if (num <= 0 && avoidArea.indexOf(num) < 0) {
                let temp = bfs([[i, j, -1, 0]], house, num, road);
                if (temp < houseCount) {
                    avoidArea.push(road);
                } else {
                    res = Math.min(dist, res);
                }
                road--;
                house = house + 2;
                dist = 0;
            }
        }
    }
    return res !== Infinity ? res : -1;

    function bfs(queue, house, road, checkedRoad) {
        let hc = 0;
        while (queue.length > 0) {
            let y = queue[0][0], x = queue[0][1], direction = queue[0][2], path = queue[0][3];
            if (y > -1 && y < height && x > -1 && x < width) {
                const num = grid[y][x];
                if (num > 0 && num !== 2 && num <= house) {
                    grid[y][x] = house + 2;
                    dist += path;
                    hc++;
                } else if (num === road) {
                    grid[y][x] = checkedRoad;
                    for (let i = 0; i < 4; i++) {
                        if (i != 3 - direction) {
                            queue.push([y + dirs[i][0], x + dirs[i][1], i, path + 1]);
                        }
                    }
                }
            }
            queue.shift();
        }
        return hc;
    }
};