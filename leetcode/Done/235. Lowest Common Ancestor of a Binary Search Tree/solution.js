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
var lowestCommonAncestor = function (root, p, q) {
    if (root == null) return null;
    var current = root;
    while (current != null) {
        if (p == current || q == current)
            return current;
        if (p.val > current.val && q.val < current.val)
            return current;
        if (p.val < current.val && q.val > current.val)
            return current;

        if (p.val < current.val && q.val < current.val) {
            current = current.left;
        }
        if (p.val > current.val && q.val > current.val) {
            current = current.right;
        }
    }
};
/*
Runtime: 76 ms, faster than 88.10% 
of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 43.6 MB, less than 97.25%
*/
