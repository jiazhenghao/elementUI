/*
换个思路，两次广搜，分别看pacific和atlantic的中的水都能流向哪里，逆过程，假设水从低处流向高处
然后看，如果2个大洋的水都能流到的地方，就是目标位置。
2 * BFS
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
    if (!matrix.length) return []
    const DIRS = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    const res = [], queue = []

    for (let c = 0; c < matrix[0].length; c++) {
        addPacific(matrix, -1, -1, 0, c, queue)
    }
    for (let r = 1; r < matrix.length; r++) {
        addPacific(matrix, -1, -1, r, 0, queue)
    }

    while (queue.length) {
        const p = queue.shift()
        DIRS.map(d => addPacific(matrix, p[0], p[1], p[0] + d[0], p[1] + d[1], queue))
    }

    for (let r = matrix.length - 1, c = 0; c < matrix[0].length; c++) {
        addAtlantic(matrix, -1, -1, r, c, queue, res)
    }
    for (let r = 0, c = matrix[0].length - 1; r < matrix.length - 1; r++) {
        addAtlantic(matrix, -1, -1, r, c, queue, res)
    }

    while (queue.length) {
        const a = queue.shift()
        DIRS.map(d => addAtlantic(matrix, a[0], a[1], a[0] + d[0], a[1] + d[1], queue, res))
    }

    return res
};

const addPacific = (matrix, or, oc, r, c, queue) => {
    if (or < 0 || matrix[r] && matrix[r][c] >= 0 && matrix[r][c] >= abs(matrix[or][oc])) {
        matrix[r][c] = -matrix[r][c] - 1  // mark visited from Pacific coast
        queue.push([r, c])
    }
};

const addAtlantic = (matrix, or, oc, r, c, queue, res) => {
    if (or < 0 || matrix[r] && typeof matrix[r][c] === 'number' && abs(matrix[r][c]) >= abs(matrix[or][oc])) {
        if (matrix[r][c] < 0) res.push([r, c])
        matrix[r][c] = '' + matrix[r][c]  // mark visited from Atlantic coast
        queue.push([r, c])
    }
};

const abs = (val) => val >= 0 ? parseInt(val) : -(parseInt(val) + 1);

/*
Runtime: 124 ms, faster than 51.37% 
of JavaScript online submissions for Pacific Atlantic Water Flow.
Memory Usage: 44.8 MB, less than 46.88%
*/
