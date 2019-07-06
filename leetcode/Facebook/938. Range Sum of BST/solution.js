/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 * 主旨就是如果落在L-R里面了，就累加。
 * 否则就去左边 或者 右边 子节点里查找。
 */
var rangeSumBST = function (root, L, R) {
    var ans = 0;
    var stack = [];
    stack.push(root);
    while (stack.length != 0) {
        var node = stack.pop();
        if (node != null) {
            if (L <= node.val && node.val <= R)
                ans += node.val;
            if (L < node.val)
                stack.push(node.left);
            if (node.val < R)
                stack.push(node.right);
        }
    }
    return ans;
};
/*
Runtime: 156 ms, faster than 93.51% 
of JavaScript online submissions for Range Sum of BST.
Memory Usage: 67.2 MB, less than 39.56% 
*/