/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var current = head;
    var array = [];
    while (current != null) {
        array.push(current);
        current = current.next; 
        array[array.length - 1].next = null;
    }
    current = head;
    for (let i = array.length - 1, j=1; j <= array.length / 2 ;j++, i-- ) {
        current.next = array[i];
        if (j == array.length / 2 ) 
            array[i].next = null;
        else {
            array[i].next = array[j];
            current = current.next.next;
        }
    }
};
/*
Runtime: 80 ms, faster than 96.23% 
Memory Usage: 41.8 MB, less than 36.88%
*/