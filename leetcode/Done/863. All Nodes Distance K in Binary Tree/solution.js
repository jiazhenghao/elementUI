/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    let nodes = [];
    if (K === 0) {
        nodes.push(target.val);
        return nodes;
    }
    traverse(nodes, root, target, K, 0);
    return nodes;
};

function traverse(nodes, root, target, K, val) {
    if (!root) return 0;

    // val === k if we are at k-distance from the target
    if (val === K) {
        nodes.push(root.val);
        return 0;
    }

    let left = 0;
    let right = 0;

    /*
      either we found the target or we have already found the target and
      propagate val + 1
    */
    if (root.val === target.val || val > 0) {
        left = traverse(nodes, root.left, target, K, val + 1);
        right = traverse(nodes, root.right, target, K, val + 1);
    } else {
        // else propgate 0
        left = traverse(nodes, root.left, target, K, val);
        right = traverse(nodes, root.right, target, K, val);
    }

    if (left === K || right === K) {
        nodes.push(root.val);
        return 0;
    }

    // Target node must return 1, other must return 0 if subtree doesn't have target
    if (root.val === target.val) {
        return 1;
    }

    /*
       if left or right is greater than 0, one of the subtree has the target
       Propagate the new value in the other subtree.
    */
    if (left > 0) {
        traverse(nodes, root.right, target, K, left + 1);
    }

    if (right > 0) {
        traverse(nodes, root.left, target, K, right + 1);
    }

    // if the subtree has target, return the distance from target + 1
    if (left > 0 || right > 0) {
        return left > 0 ? left + 1 : right + 1;
    }

    // else return 0
    return 0;
}
/*
Runtime: 56 ms, faster than 94.57% 
of JavaScript online submissions for All Nodes Distance K in Binary Tree.
Memory Usage: 35.1 MB, less than 97.50%
*/