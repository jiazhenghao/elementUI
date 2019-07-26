/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (head == null) return null;
    var current = head;
    var arr = [];
    while (current != null) {
        arr.push(current.val);
        current = current.next;
    }
    var root = generateBST(arr);
    return root;

    function generateBST(arr) {
        if (arr.length >= 3) {
            let index = Math.trunc(arr.length / 2);
            let node = new ListNode(arr[index]);
            node.left = generateBST(arr.slice(0, index));
            node.right = generateBST(arr.slice(index + 1));
            return node;
        }
        else if (arr.length == 2) {
            let node = new ListNode(Math.max(arr[0], arr[1]));
            node.left = generateBST([Math.min(arr[0], arr[1])]);
            node.right = null;
            return node;
        }
        else if (arr.length == 1) {
            let node = new ListNode(arr[0]);
            node.left = null;
            node.right = null;
            return node;
        }
    }
};
/*
Runtime: 64 ms, faster than 97.13% 
Memory Usage: 42.1 MB, less than 5.10%
*/