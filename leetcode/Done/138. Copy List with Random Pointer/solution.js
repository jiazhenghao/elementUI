/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head == null) return null;
    var visited = new Map();//这个题目的关键就是在于新老两个Node，要一一对应上，就行了。其实贼简单。
    
    var oldNode = head;
    var newNode = new Node(oldNode.val);
    visited.set(oldNode, newNode);
    
    while (oldNode!=null) {
        newNode.random = getClonedNode(oldNode.random);
        newNode.next = getClonedNode(oldNode.next);
        oldNode = oldNode.next;
        newNode = newNode.next;
    }
    
    return visited.get(head);
    
    function getClonedNode(node) {
        if (node != null) {
            if (visited.has(node)) {
                return visited.get(node);
            } else {
                visited.set(node, new Node(node.val, null, null));
                return visited.get(node);
            }
        }
        return null;
    }
};
/*
Runtime: 616 ms, faster than 97.96% 
Memory Usage: 100.5 MB, less than 58.67% 
*/