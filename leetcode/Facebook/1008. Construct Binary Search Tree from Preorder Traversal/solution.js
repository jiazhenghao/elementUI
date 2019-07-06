/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    var n = preorder.length;
    if (n == 0) return null;

    var root = new TreeNode(preorder[0]);
    var deque = [];
    deque.push(root);

    for (let i = 1; i < n; i++) {
        // take the last element of the deque as a parent
        // and create a child from the next preorder element
        var node = deque[deque.length - 1];
        var child = new TreeNode(preorder[i]);
        // adjust the parent 
        while (deque.length != 0 && deque[deque.length - 1].val < child.val)
            node = deque.pop();
        // follow BST logic to create a parent-child link
        if (node.val < child.val) node.right = child;
        else node.left = child;
        // add the child into deque
        deque.push(child);
    }
    return root;
};
/*
Runtime: 48 ms, faster than 99.18% 
of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
Memory Usage: 33.9 MB, less than 91.19%
*/

/*
Use for loop to iterate along the elements of preorder array :

1. Pick the last element of the stack as a parent node, and 
the the current element of preorder as a child node.

2. Adjust the parent node : pop out of stack all elements with the
 value smaller than the child value. Change the parent node at each pop node = stack.pop().

3. If node.val < child.val - put the child as a right child of the node : node.right = child.

4. Else - as a left child : node.left = child.

5. Push child node into the stack.
*/