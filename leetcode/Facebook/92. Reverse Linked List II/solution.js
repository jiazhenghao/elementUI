/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    var count = 1;
    var stack = [];
    var current = head;
    while (current != null) {
        stack.push(current.val);
        current = current.next;
    }
    for (let i = 0; i < (n - m) / 2; i++) {
        let temp = stack[m - 1 + i];
        stack[m - 1 + i] = stack[n - 1 - i];
        stack[n - 1 - i] = temp;
    }
    var newHead = new ListNode(stack[0]);
    var curr = newHead;
    for (let i = 1; i < stack.length; i++) {
        curr.next = new ListNode(stack[i]);
        curr = curr.next;
    }
    return newHead;
};

/*
Runtime: 48 ms, faster than 95.18% 
of JavaScript online submissions for Reverse Linked List II.
Memory Usage: 34 MB, less than 11.24%
*/


