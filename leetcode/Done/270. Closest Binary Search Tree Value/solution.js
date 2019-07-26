/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (root == null) return null;
    var low;
    var high;
    var result;
    findNext(root);
    
    if (result !== undefined) return result;
    if (high === undefined) return low;
    if (low === undefined) return high;
    return target - low > high - target ? high : low; 

    function findNext(node) {
        if (target > node.val) {
            low = node.val;
            if (node.right != null) 
                findNext(node.right);
        } 
        else if (target == node.val) 
            result = target;
        else {
            high = node.val;
            if (node.left != null) 
                findNext(node.left);
        }
    }
};
/*
Runtime: 44 ms, faster than 100.00% 
Memory Usage: 37.7 MB, less than 62.92%
*/