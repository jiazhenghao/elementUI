/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    var current1 = l1;
    var current2 = l2;
    var merge;
    if (l1.val > l2.val) {
        merge = current2;
        current2 = current2.next;
    } else {
        merge = current1;
        current1 = current1.next;
    }

    var result = merge;
    while (current1 != null || current2 != null) {
        if (current1 == null) {
            merge.next = current2;
            break;
        }
        if (current2 == null) {
            merge.next = current1;
            break;
        }
        if (current1.val > current2.val) {
            merge.next = current2;
            merge = merge.next;
            current2 = current2.next;
        } else {
            merge.next = current1;
            merge = merge.next;
            current1 = current1.next;
        }
    }
    return result;
};

/*
Runtime: 52 ms, faster than 99.34% 
Memory Usage: 35.8 MB, less than 16.29%
*/

