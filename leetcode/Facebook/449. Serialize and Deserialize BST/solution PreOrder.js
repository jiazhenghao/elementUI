/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = [];

    const preorder = node => {
        if (!node) return;
        result.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);

    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data || data.length === 0) {
        return null;
    }

    // in preorder the root will be first
    const root = new TreeNode(data[0]);

    // construct the rest of the tree
    for (let i = 1; i < data.length; i++) {
        let val = data[i];

        let node = new TreeNode(val);

        let next = root;

        while (next) {
            if (val < next.val) {
                if (next.left) {
                    next = next.left;
                } else {
                    next.left = node;
                    break;
                }
            } else if (val > next.val) {
                if (next.right) {
                    next = next.right;
                } else {
                    next.right = node;
                    break;
                }
            }
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
/*
Runtime: 68 ms, faster than 100.00% 
Memory Usage: 39.1 MB, less than 91.26% 
*/