/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    var pre_idx = 0;
    //this.preorder = preorder;
    //this.inorder = inorder;
    var idx_map = new Map();
    // build a hashmap value -> its index
    var idx = 0;
    for (let val of inorder) {
        idx_map.set(val, idx++);
    }
    console.log(idx_map);
    return helper(0, inorder.length);

    function helper(in_left, in_right) {
        // if there is no elements to construct subtrees
        if (in_left == in_right) return null;
        // pick up pre_idx element as a root
        var root_val = preorder[pre_idx];
        var root = new TreeNode(root_val);

        // root splits inorder list
        // into left and right subtrees
        var index = idx_map.get(root_val);

        // recursion 
        pre_idx++;
        // build left subtree
        root.left = helper(in_left, index);
        // build right subtree
        root.right = helper(index + 1, in_right);
        return root;
    }
};
/*
Runtime: 72 ms, faster than 89.03%
of JavaScript online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
Memory Usage: 38.6 MB, less than 49.17%
*/
