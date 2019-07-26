/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//  * @param {TreeNode} root
//  * @return {boolean}
/*
使用in order 排序，当inorder出来的数字的val值 是 从小到大的，那么就ok


*/

var isValidBST = function (root) {
    //use in-order search, values go into an array,
    if (root == null)
        return true;

    var stack = [];

    var bool = { x: undefined };

    if (root.left != null) {
        if (root.left.val < root.val) {
            search(root.left, stack, bool);
        }
        else {
            return false;
        }
    }
    stack.push(root.val);
    if (root.right != null) {
        if (root.right.val > root.val) {
            search(root.right, stack, bool);
        }
        else {
            return false;
        }
    }

    if (bool.x == false) {
        return false;
    }

    //判stack了
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] >= stack[i + 1])
            return false;
    }

    return true;
};

function search(node, stack, bool) {
    if (node.left != null) {
        if (node.left.val < node.val) {
            search(node.left, stack, bool);
        }
        else {
            bool.x = false;
            return;
        }
    }

    stack.push(node.val);

    if (node.right != null) {
        if (node.right.val > node.val) {
            search(node.right, stack, bool);
        }
        else {
            bool.x = false;
            return;
        }
    }
}

/*
Runtime: 60 ms, faster than 95.53% 
Memory Usage: 37.3 MB, less than 49.69% 

*/