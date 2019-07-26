/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return [];
    var count = 0;
    var result = [];
    var arr = [];

    searchNode(root, arr);
    
    for (let i = 0; i < result[0].length; i++) {
        for (let j = 0; j < result[1].length; j++) {
            if (result[1][j] == result[0][i]) 
                return result[1][j];
        }
    }
    
    function searchNode(node, arr) {
        if (node.left == null && node.right == null) {
            arr.push(node); 
            if (node == p || node == q) {
                count++;
                result.push(arr);
            }
            return;
        }
        arr.push(node);
        if (node == p || node == q) {
            count++;
            result.push(arr);
        }
        if (count == 2) {
            return;
        }
        //往左或往右
        if (node.left != null)
            searchNode(node.left, arr.slice(0));
        if (node.right != null)
            searchNode(node.right, arr.slice(0));
    }
};

/*
heap out of memeory.

*/