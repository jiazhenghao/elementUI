/*
Approach 2: Iterating method using Stack
https://leetcode.com/problems/binary-tree-inorder-traversal/solution/
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var res = [];
    var stack = [];
    var curr = root;
    while (curr != null || stack.length != 0) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};