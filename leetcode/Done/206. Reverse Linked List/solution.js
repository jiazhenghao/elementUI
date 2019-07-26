/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head == null) return null;
    var current = head;
    var arr = [];
    while (current != null) {
        arr.push(current);
        current = current.next;
    }
    arr.reverse();
    var newHead = arr[0];
    current = newHead;
    for (let i = 1; i < arr.length; i++) {
        current.next = arr[i];
        current = current.next;
    }
    current.next = null;
    return newHead;
};
/*
Runtime: 52 ms, faster than 96.19% 
Memory Usage: 35 MB, less than 52.45%
*/