/*
1、遍历2个linked list，推入2个stack中，
2、对2个stack进行pop，直到2个stack都为空
*/

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
var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode();
    let preHead = l3;

    let l1Stack = [];
    let l2Stack = [];
    let l3Stack = [];

    let carry = 0;

    while (l1 || l2) {
        if (l1) {
            l1Stack.push(l1.val);
            l1 = l1.next;
        }

        if (l2) {
            l2Stack.push(l2.val)
            l2 = l2.next;
        }
    }

    while (l1Stack.length || l2Stack.length) {
        let l1Val = l1Stack.length ? l1Stack.pop() : 0;
        let l2Val = l2Stack.length ? l2Stack.pop() : 0;
        let sum = l1Val + l2Val + carry;

        carry = Math.floor(sum / 10);
        l3Stack.push(sum % 10);
    }

    if (carry) {
        l3Stack.push(carry);
    }

    while (l3Stack.length) {
        l3.next = new ListNode(l3Stack.pop());
        l3 = l3.next;
    }

    return preHead.next;
};
/*
Runtime: 92 ms, faster than 100.00% 
Memory Usage: 39.2 MB, less than 25.62% 
*/