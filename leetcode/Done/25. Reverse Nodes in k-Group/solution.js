/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (k == 1 || head == null)
        return head;
    //计算总长度
    var length = 1;
    var c = head;
    while (c.next != null) {
        c = c.next;
        length++;
    }
    //如果k比head的长度还长，那就不用玩了
    if (k > length) 
        return head;
    
    var iteration = Math.trunc(length / k);

    
    //当前值，一开始就是头
    var current = head;
    var count = 1;
    //新的头，一开始就是头
    var newHead = head;
    //为了后续连接用
    var connection;
    //返回值，即头部。
    var result;
    for(let j = 0; j < iteration; j++,count++) {
        if (j == 0) {
            while (count % k != 0) {
                count++;
                //定义老头就是原来的头
                let oldHead = newHead;
                //新头就是当前的下一个
                newHead = current.next;
                //当前值指向下一个的下一个
                current.next = current.next.next;
                //新头的下一个就是老头
                newHead.next = oldHead;
                //往下走
            }
            result = newHead;
        } else {
            connection = current.next;
            while (count % k != 0) {
                count++;

                let oldHead2 = current.next;
                //新头就是当前的下一个
                let newHead2 = connection.next;
                //当前值指向下一个的下一个
                connection.next = connection.next.next;
                //新头的下一个就是老头
                newHead2.next = oldHead2;
                //多的一步骤
                current.next = newHead2;
            }
            current = connection;
        }
    }
    return result;   
};

/*
Runtime: 60 ms, faster than 100.00%
Memory Usage: 37.8 MB, less than 31.13%
*/