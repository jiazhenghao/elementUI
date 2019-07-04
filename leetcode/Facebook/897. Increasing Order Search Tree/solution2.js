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
var increasingBST = function(root) {
    if (root == null) return null;
    var nodes = [];
    inOrder(root);
    var newRoot = new TreeNode(nodes[0]);
    var current = newRoot;
    for (let i = 1; i < nodes.length; i++) {
        current.right =new TreeNode(nodes[i]) ;
        current = current.right;
    }
    return newRoot;
    
    function inOrder(node) {
        if (node == null) 
            return;
        inOrder(node.left);
        nodes.push(node.val);
        inOrder(node.right);
    }
};
/*
Runtime: 132 ms, faster than 88.19% 
of JavaScript online submissions for Increasing Order Search Tree.
Memory Usage: 43 MB, less than 68.24%
*/