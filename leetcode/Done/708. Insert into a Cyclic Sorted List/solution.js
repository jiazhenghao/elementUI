/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (head == null) {
        var node = new Node(insertVal);
        node.next = node;
        return node;
    }
    if (head.next == head) {
        var newNode = new Node(insertVal, head.next);
        head.next = newNode;
        return head;
    }
    
    var inserted = false;
    var current = head;
    var count = 0;//当第二次访问到head的时候，我就知道这是一个无限循环了，可以插入了。
    
    while (!inserted) {
        count++;
        if (current.val == insertVal) {//第一种情况
            var newNode = new Node(insertVal, current.next);
            current.next = newNode;
            inserted = true;
            continue;
        }
        if (current.val > insertVal) {//第二种情况
            if (insertVal >= current.next.val || current.next.val >= current.val) {
                if (current == head && count > 1) { //针对无限循环做的处理。
                    var newNode = new Node(insertVal, current.next);
                    current.next = newNode;
                    inserted = true;
                    continue;
                }
                current = current.next;
                continue;
            }
            else {
                var newNode = new Node(insertVal, current.next);
                current.next = newNode;
                inserted = true;
                continue;
            }
        }
        if (current.val < insertVal) {//第三种情况， 这里其实也需要补充到 无限循环的情况。
            if (current.next.val >= insertVal || current.next.val < current.val) {
                var newNode = new Node(insertVal, current.next);
                current.next = newNode;
                inserted = true;
                continue;
            }
            else {
                current = current.next;
                continue;
            }      
        }
    }
    return head;
};


/*
Runtime: 788 ms, faster than 98.48% 
Memory Usage: 94.8 MB, less than 50.53%
*/

// {"$id":"1","next":{"$ref":"1"},"val":1}
// 2
// {"$id":"1","next":{"$ref":"1"},"val":1}
// 0

