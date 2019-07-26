/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    // the smallest (first) and the largest (last) nodes
    var first = null;
    var last = null;
    if (root == null) return null;

    helper(root);
    // close DLL
    last.right = first;
    first.left = last;
    return first;

    function helper(node) {
        if (node != null) {
            // left
            helper(node.left);
            // node 
            if (last != null) {
                // link the previous node (last)
                // with the current one (node)
                last.right = node;
                node.left = last;
            }
            else {
                // keep the smallest node
                // to close DLL later on
                first = node;
            }
            last = node;
            // right
            helper(node.right);
        }
    }
};
/*
Runtime: 640 ms, faster than 94.22% 
Memory Usage: 85.7 MB, less than 83.61% 
*/