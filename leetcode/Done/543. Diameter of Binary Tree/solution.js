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
var diameterOfBinaryTree = function(root) {
    //ans表示经过几个节点
    var ans;
    ans = 1;
    depth(root);
    //path长度就是经过节点的总数-1
    return ans - 1;
    
    function depth(node) {
        if (node == null) return 0;
        var L = depth(node.left);
        var R = depth(node.right);
        //更新，要么是原来的经过节点个数，要么就是新的。
        ans = Math.max(ans, L+R+1);
        
        //表示有几个节点，包括自己，所以要 + 1
        return Math.max(L, R) + 1;
    }
};

/*
Runtime: 48 ms, faster than 99.86% 
Memory Usage: 37 MB, less than 70.45% 
*/