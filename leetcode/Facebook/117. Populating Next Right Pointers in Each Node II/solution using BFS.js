/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = root => {
    if (!root) { return null; }

    let q = [root];

    while (q.length) {
        let size = q.length, prev = null;

        for (let i = 0; i < size; i++) {
            let node = q.shift();
            node.next = prev;

            prev = node;

            if (node.right) { q.push(node.right); }
            if (node.left) { q.push(node.left); }
        }
    }

    return root;
};

/*
Runtime: 368 ms, faster than 88.48% 
of JavaScript online submissions for Populating Next Right Pointers in Each Node II.
Memory Usage: 67.7 MB, less than 95.45% 
*/