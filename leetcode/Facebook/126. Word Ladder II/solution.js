/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
let findNeighbor = (word, wordList) => {
    let neighbors = [];
    const wn = word.length;
    wordList.forEach(c => {
        if (c !== word) {
            let count = 0;
            for (let i = 0; i < wn; i++) {
                if (word[i] !== c[i]) {
                    count++;
                }
                if (count > 1) {
                    break;
                }
            }
            if (count === 1) {
                neighbors.push(c);
            }
        }
    });
    return neighbors;
}

var findLadders = function (beginWord, endWord, wordList) {
    if (wordList.includes(endWord) === false) return [];
    //create neighborMap
    const nMap = {};
    wordList.forEach(word => {
        nMap[word] = findNeighbor(word, wordList);
    });
    nMap[beginWord] = findNeighbor(beginWord, wordList);

    const n = wordList.length;
    let paths = [[beginWord]];
    let maxLevel = n + 1, level = 1;
    let retArr = [], visited = [beginWord], visiting = [];
    //BFS on paths
    while (paths.length !== 0) {
        const path = paths.shift();
        const pn = path.length;
        const word = path[pn - 1];
        if (pn > level) {
            //set previous level word's neighbors to undefined
            visited.forEach(word => {
                nMap[word] = undefined;
            });
            visited = visiting;
            visiting = [];
            if (pn > maxLevel) {
                break;
            } else {
                level = pn;
            }
        }
        const neighbors = nMap[word];
        if (neighbors && neighbors.length !== 0) {
            neighbors.forEach(n => {
                if (nMap[n] !== undefined) {
                    const newPath = [...path, n];
                    visiting.push(n);
                    if (n === endWord) {
                        retArr.push(newPath);
                        maxLevel = level;
                    } else {
                        paths.push(newPath);
                    }
                }
            });
        }
    }
    return retArr;
};

/*
BFS 先把所有neighbor找出来，然后从起始点，到结尾的位置找出来。
没有方向，没有权重的图 的 边
每个节点visited 就填充true。

Runtime: 692 ms, faster than 57.20% 
of JavaScript online submissions for Word Ladder II.
Memory Usage: 77.9 MB, less than 43.75%
*/