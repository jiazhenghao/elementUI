/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
    if (!root) { return []; }

    let q = [root], zigzag = [], upwards = true;

    while (q.length) {
        let size = q.length, level = Array(size);

        for (let i = 0; i < size; i++) {
            let node = q.shift();
            level[upwards ? i : size - i - 1] = node.val;

            if (node.left) { q.push(node.left); }
            if (node.right) { q.push(node.right); }
        }

        upwards = !upwards;
        zigzag.push(level);
    }

    return zigzag;
};
/*
Runtime: 48 ms, faster than 96.97% 
Memory Usage: 34.1 MB, less than 61.41% 
*/