/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length == 0)
        return null;
    if (lists.length == 1)
        return lists[0];
    //把空的linkedlist剔除
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] == null ) {
            lists.splice(i, 1);
            i--;
        }
    }
    if (lists.length == 0)
        return null;
    //将现有的第一次排序
    lists.sort(function (a, b) {
        if (a.val - b.val > 0) 
            return 1;
        else if (a.val - b.val == 0)
            return 0;
        else 
            return -1;
    });
    
    var root = lists[0];
    var current = lists[0];
    current.next = sortAndNext(lists);
    //把剩下的都依次找到并串起来
    while (current.next != null) {
        current = current.next;
        current.next = sortAndNext(lists);
    }
    return root;
};

function sortAndNext(lists) {
    if (lists[0].next == null) {
        if (lists.length == 1) {
            return null;
        }
        else {
            lists.shift();
             return lists[0];
        }
    }
    lists[0] = lists[0].next;
    lists.sort(function (a, b) {
        if (a.val - b.val > 0) 
            return 1;
        else if (a.val - b.val == 0)
            return 0;
        else 
            return -1;
    });
    return lists[0];
}
/*
Runtime: 104 ms, faster than 60.81% 
Memory Usage: 38 MB, less than 69.58% 
*/