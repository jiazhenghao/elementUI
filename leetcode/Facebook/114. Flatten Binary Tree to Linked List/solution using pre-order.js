/*
pre-order traverse
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root == null) return null;
    var res = [];
    var current = root;
    
    readNode(current);
    
    for (let i = 1; i < res.length; i++) {
        current.left = null;
        current.right = res[i];
        current = current.right;
    }
    
    function readNode(node) {
        if (res.length == 0) {
            res.push(node);
            if (node.left != null) 
                readNode(node.left);
            if (node.right != null)
                readNode(node.right);
        }
        else {
            res.push(node);
            if (node.left != null) 
                readNode(node.left);
            if (node.right != null)
                readNode(node.right);
        }
    }
};

/*
Runtime: 64 ms, faster than 80.18% 
Memory Usage: 34.7 MB, less than 100.00%
*/