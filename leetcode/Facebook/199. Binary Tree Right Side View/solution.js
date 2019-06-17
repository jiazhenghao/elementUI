/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (root == null)
        return [];
    if (root.left == null && root.right == null)
        return [root.val];
    var tempArray = [];//这张表里放BFS的每一层子节点数据
    var resultArray = [];
    var current = root;
    tempArray.push(current);
    //利用BFS进行遍历。
    while (tempArray.length != 0) {
        resultArray.push(tempArray[tempArray.length - 1].val);//把这层最右边的val推送到result数组里
        let tempLoopArray = [];
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].left != null) {
                tempLoopArray.push(tempArray[i].left);
            }
            if (tempArray[i].right != null) {
                tempLoopArray.push(tempArray[i].right);
            }
        }
        tempArray = tempLoopArray;
    }
    return resultArray;
};

/*
Runtime: 52 ms, faster than 98.16% 
of JavaScript online submissions for Binary Tree Right Side View.
Memory Usage: 34.3 MB, less than 37.42%
*/
