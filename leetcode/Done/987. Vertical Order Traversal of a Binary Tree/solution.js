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
var verticalTraversal = function (root) {
    let nodes = [];
    let result = [];
    let currentIndex = -1;
    let currentX = null;
    const traversal = (root, x, y) => {
        if (!root) return;
        let data = {
            x: x,
            y: y,
            val: root.val
        };
        nodes.push(data);
        traversal(root.left, x - 1, y - 1);
        traversal(root.right, x + 1, y - 1);
    };
    traversal(root, 0, 0);
    nodes.sort(function (a, b) {
        if (a.x - b.x > 0) return 1;
        else if (a.x - b.x == 0) {
            if (b.y - a.y > 0) return 1;
            else if (a.y - b.y == 0) {
                return a.val - b.val;
            }
            else return -1;
        }
        else return -1;
    })

    for (node of nodes) {
        if (currentX === node.x) {
            result[currentIndex].push([node.val]);
        }
        else {
            currentIndex++;
            currentX = node.x;
            if (!result[currentIndex]) {
                result[currentIndex] = [node.val];
            } else {
                result[currentIndex].push([node.val]);
            }
        }
    }
    return result;
};
/*
Runtime: 56 ms, faster than 92.56% 
Memory Usage: 36.5 MB, less than 6.67% 
*/