/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    var stack = [];
    var depths = [];
    if (root == null) return 0;

    stack.push(root);
    depths.push(1);

    var depth = 0, current_depth = 0;
    while (stack.length != 0) {
        root = stack.pop();
        current_depth = depths.pop();
        if (root != null) {
            depth = Math.max(depth, current_depth);
            stack.push(root.left);
            stack.push(root.right);
            depths.push(current_depth + 1);
            depths.push(current_depth + 1);
        }
    }
    return depth;
};
/*
Runtime: 60 ms, faster than 85.83% 
of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 37.4 MB, less than 5.66% 
*/