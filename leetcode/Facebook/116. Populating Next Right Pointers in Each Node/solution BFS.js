/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root == null) {
        return root;
    }
    var stack = [];
    var current = root;
    root.next = null;
    stack.push(root);

    while (current.left != null) {
        let temp = [];
        for (let i = 0; i < stack.length; i++) {
            stack[i].left.next = stack[i].right;
            if (stack[i].next == null) {
                stack[i].right.next = null;
            } else {
                stack[i].right.next = stack[i].next.left;
            }
            temp.push(stack[i].left);
            temp.push(stack[i].right);
        }
        stack = temp;
        current = current.left;
    }
    return root;
};
/*
Runtime: 72 ms, faster than 99.14% 
Memory Usage: 39.7 MB, less than 36.65%
*/