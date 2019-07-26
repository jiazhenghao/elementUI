/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //A、B如果有一个为空，则返回null
    if (headA == null || headB == null)
        return null;
    //A、B如果一开始就一样，那就直接返回其中之一即可。
    if (headA == headB)
        return headA;
    
    var currentA = headA;
    var currentB = headB;
    
    //我给A的每个节点都加了previous 
    currentA.previous = null;
    while(currentA.next != null) {
        currentA.next.previous = currentA;
        currentA = currentA.next;
    }
    //如果我发现B的某一个节点已经有previous，我就知道这个节点就是公共节点的start point
    while(currentB != null) {
        if (currentB.previous === undefined) {
            currentB = currentB.next;
        }
        else {
            return currentB;
        }
    }
    
    return null;
};

/*
Runtime: 76 ms, faster than 98.78%
Memory Usage: 44.4 MB, less than 11.99%
*/