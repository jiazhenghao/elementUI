/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) return '[]';
    var queue = [root];
    var res = '['+ root.val;
    
    while (queue.length != 0) {
        let temp = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left != null) {
                temp.push(queue[i].left);
                res += ',' + queue[i].left.val;
            } else {
                res += ',' + null;
            }   
            if (queue[i].right != null) {
                temp.push(queue[i].right);
                res += ',' + queue[i].right.val;
            } else {
                res += ',' + null;
            }
        }
        queue = temp;
    }
    return res + ']';
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var str = data.substring(1, data.length - 1);
    if (str == '') return null;
    var arr = str.split(',');
    var root = new TreeNode(arr[0]);
    var queue = [root];
    arr.shift();

    while (arr.length != 0) {
        let tempQueue = [];
        for (let j = 0; j < queue.length; j++) {
            let temp = arr.shift();
            if (temp != 'null') {
                queue[j].left = new TreeNode(temp);
                tempQueue.push(queue[j].left);
            } else {
                queue[j].left = null;
            }
            temp = arr.shift();
            if (temp != 'null') {
                queue[j].right = new TreeNode(temp);
                tempQueue.push(queue[j].right);
            } else {
                queue[j].right = null;
            }
        }
        queue = tempQueue;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/*
Runtime: 92 ms, faster than 70.64%
Memory Usage: 45.1 MB, less than 8.58% 
*/