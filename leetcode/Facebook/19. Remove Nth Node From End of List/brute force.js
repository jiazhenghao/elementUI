var removeNthFromEnd = function(head, n) {
    var current = head.next;
    var count = 1;
    
    //先遍历一遍获得总长度
    while (current != null) {
        current = current.next;
        count++;
    }

    if (n > count || n <= 0) {
        return head;
    }
    else if (n == count) {
        var result = head.next;
        head.next = null;
        return result;
    }
    //再从头遍历，找到应该删除的那个节点
    else {
        let i = 1;
        current = head;
        while (i!= count-n) {
            i++;
            current = current.next;
        }
        let deleted = current.next;
        current.next = current.next.next;
        deleted.next = null;
        return head;
    }
};
/*
Runtime: 44 ms, faster than 99.96%
Memory Usage: 33.9 MB, less than 95.06%


*/