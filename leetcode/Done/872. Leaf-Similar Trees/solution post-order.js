/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    var stack1 = [];
    postOrder(root1);
    var stack2 = stack1;//root1
    stack1 = [];
    postOrder(root2);//root2
    if (stack1.length != stack2.length) return false;
    for (let i = 0; i < stack1.length; i++) {
        if (stack1[i] != stack2[i]) return false;
    }
    return true;
    function postOrder(node) {
        if (node == null) {
            return;
        }
        postOrder(node.left);
        postOrder(node.right);
        if (node.left == null && node.right == null) {
            stack1.push(node.val);
        }
    }
};
/*
Runtime: 52 ms, faster than 91.31% 
Memory Usage: 34.8 MB, less than 74.52%
*/
