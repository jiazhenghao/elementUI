/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var count = 0;
    var result;
    inOrder(root);
    return result;
    
    function inOrder(node) {
        if (count >= k) return;
        if (node == null) return;
        
        inOrder(node.left);
        if (count == k-1) {
            result = node.val;
        }
        count++;
        inOrder(node.right);
    }
};
/*
Runtime: 60 ms, faster than 96.72%
Memory Usage: 39.7 MB, less than 35.73%
*/