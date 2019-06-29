/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    return traverse(s, t);

    function equals(x, y) {
        if (x == null && y == null)
            return true;
        if (x == null || y == null)
            return false;
        return x.val == y.val && equals(x.left, y.left) && equals(x.right, y.right);
    }

    function traverse(s, t) {
        return s != null && (equals(s, t) || traverse(s.left, t) || traverse(s.right, t));
    }
};

/*
Runtime: 68 ms, faster than 98.72% 
Memory Usage: 38.9 MB, less than 44.78% 
*/