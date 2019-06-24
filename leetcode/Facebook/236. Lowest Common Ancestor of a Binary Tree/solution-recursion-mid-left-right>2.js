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
    var ans = null;
    recurseTree(root, p, q);
    return ans;
    
    function recurseTree(currentNode, p, q) {
        // If reached the end of a branch, return false.
        if (currentNode == null) return false;
        // Left Recursion. If left recursion returns true, set left = 1 else 0
        var left = recurseTree(currentNode.left, p, q) ? 1 : 0;
        // Right Recursion If right recursion returns true, set right = 1 else 0
        var right = recurseTree(currentNode.right, p, q) ? 1 : 0;
        // If the current node is one of p or q
        var mid = (currentNode == p || currentNode == q) ? 1 : 0;
        // If any two of the flags left, right or mid become True
        if (mid + left + right >= 2) {
            ans = currentNode;
        }
        // Return true if any one of the three bool values is True.
        return (mid + left + right > 0);
    }
};

/*
Runtime: 64 ms, faster than 92.27% 
Memory Usage: 42.3 MB, less than 19.62% 
*/