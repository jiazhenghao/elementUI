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
var maxPathSum = function(root) {
    var max_sum = -Infinity;
    max_gain(root);
    return max_sum;
    
    function max_gain(node) {
        if (node == null) return 0;
        
        var left_gain = Math.max(max_gain(node.left), 0);
        var right_gain = Math.max(max_gain(node.right), 0);
        //(1) the price to start a new path where `node` is a highest node
        var newpath = node.val + left_gain + right_gain;
        max_sum = Math.max(newpath, max_sum);
        //(2) return the max gain if continue the same path
        return node.val + Math.max(left_gain, right_gain);
    } 
};

/*
Runtime: 52 ms, faster than 100.00% 
Memory Usage: 41.4 MB, less than 61.22%
*/
