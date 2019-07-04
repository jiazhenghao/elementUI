/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    if (root == null) return null;
    var nodes = [];
    inOrder(root);
    var newRoot = nodes[0];
    nodes[0].left = null;
    var current = newRoot;
    for (let i = 1; i < nodes.length; i++) {
        nodes[i].left = null;
        nodes[i].right = null;
        current.right = nodes[i];
        current = current.right;
    }
    return newRoot;

    function inOrder(node) {
        if (node == null)
            return;
        inOrder(node.left);
        nodes.push(node);
        inOrder(node.right);
    }
};
/*
Runtime: 140 ms, faster than 76.12% 
of JavaScript online submissions for Increasing Order Search Tree.
Memory Usage: 43.1 MB, less than 62.84% 
*/