/*
由于不能用循环，就要用stack和while来替代了。

搭建一个stack，parent节点先进去，然后推出，放到output的最后面。
紧接着右边进入output，再是左边节点进入output。
所以进栈的顺序就是先parent，pop parent。左边先进栈，右边后进。所以右边先计算。
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    var stack = [];
    var output = [];
    if (root == null) {
        return output;
    }

    stack.push(root);
    while (stack.length != 0) {
        let node = stack.pop();
        output.unshift(node.val);
        if (node.left != null) {
            stack.push(node.left);
        }
        if (node.right != null) {
            stack.push(node.right);
        }
    }
    return output;
};
/*
Runtime: 48 ms, faster than 94.83% 
Memory Usage: 33.7 MB, less than 96.86% 
*/