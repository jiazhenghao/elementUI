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
var reverseList = function(head) {
    if (head == null) return null;
    var prev = null;
    var curr = head;
    while (curr!=null) {
        var nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};
/*
Runtime: 56 ms, faster than 88.96% 
Memory Usage: 34.9 MB, less than 75.78%
*/