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
var swapPairs = function(head) {
    if (head == null || head.next == null) 
        return head;
    
    //先换第一个、第二个
    var newRoot = head.next;
    head.next = head.next.next;
    newRoot.next = head;
    
    //指向第二个
    var pointer = newRoot.next;

    //如果第三个或者第四个，其中一个为空，就不用交换了
    if (pointer.next != null && pointer.next.next != null) {
        //第三个、第四个都为空，就交换。
        while (pointer.next != null && pointer.next.next != null) {
            //当前的第三个。
            let temp = pointer.next;
            //第二个的下一个变为第四个
            pointer.next = pointer.next.next;
            //第三个的下一个变为第四个的下一个。
            temp.next = pointer.next.next;
            //第四个的下一个变为第三个
            pointer.next.next = temp;
            //指针前进两位。
            pointer = pointer.next.next;
        }
    }
    
    return newRoot;
};

/*
Runtime: 44 ms, faster than 99.29% 
Memory Usage: 33.8 MB, less than 65.28% 
*/