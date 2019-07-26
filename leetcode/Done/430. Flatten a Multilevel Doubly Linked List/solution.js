/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
*/
var flatten = function (head) {
    if (head == null) return null;
    var stack = [];
    flattenNode(head);
    var newHead = new Node(stack[0]);
    var current = newHead;
    for (let i = 1; i < stack.length; i++) {
        let temp = new Node(stack[i]);
        current.next = temp;
        temp.prev = current;
        current = current.next;
    }
    current.next = null;
    return newHead;

    function flattenNode(node) {
        if (node == null) return null;
        let curr = node;
        while (curr != null) {
            stack.push(curr.val);
            if (curr.child != null) {
                flattenNode(curr.child);
            }
            curr = curr.next;
        }
    }
};
/*
Runtime: 996 ms, faster than 96.17% 
Memory Usage: 127.2 MB, less than 95.08%
*/
