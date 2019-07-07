/*
DFS到每个叶子，去找有还是没有
注意val不一定是正数
就算target在半当中被找到，不代表叶子就不会有，因为有负数的存在。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root == null) return false;
    else if (root.val == sum) {
        if (root.left == null && root.right == null) 
            return true;
        // else 
        //     return false;
    }
    
    if (root.left == null && root.right == null) {
        //console.log('111');
        return false;
    }
    else if (root.left != null && root.right == null) {
        //console.log('222');
        //console.log(root.left.val);
        return hasPathSum(root.left, sum - root.val);
    }
    else if (root.left == null && root.right != null) {
        // console.log('333');
        // console.log(root.right.val);
        return hasPathSum(root.right, sum - root.val);
    }
    else {
        // console.log('444');
        // console.log(root.left.val, root.right.val);
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
    
};