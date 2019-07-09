/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const IS_UNBALANCED = Number.NEGATIVE_INFINITY;

function getDepth(node) {
    if (!node) {
        return 0;
    }

    const l = getDepth(node.left);

    // do not continue if tree is unbalanced
    // use IS_UNBALANCED to exit from the recursive function
    if (l === IS_UNBALANCED) {
        return IS_UNBALANCED;
    }

    const r = getDepth(node.right);
    if (r === IS_UNBALANCED) {
        return IS_UNBALANCED;
    }

    if (Math.abs(l - r) > 1) {
        return IS_UNBALANCED;
    }

    return Math.max(l, r) + 1;
}

let isBalanced = function (root) {
    return getDepth(root) !== IS_UNBALANCED;
};

/*
Runtime: 56 ms, faster than 99.37% 
Memory Usage: 37.8 MB, less than 19.12% 
*/

