/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.nodesSorted = [];
    this.index = -1;
    this.inorder(root);
};
/*
inorder 
*/
BSTIterator.prototype.inorder = function(node) {
    if (node == null) {
        return;
    }
    this.inorder(node.left);
    this.nodesSorted.push(node.val);
    this.inorder(node.right);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.nodesSorted[++this.index];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index + 1 < this.nodesSorted.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/*
Runtime: 136 ms, faster than 91.20% 
Memory Usage: 48.3 MB, less than 40.89%
*/
