/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (root == null) return [];
    var result = [];
    var arr = [];
    var res = [];
    searchNode(root, arr);

    for (let i = 0; i < result.length; i++) {
        let temp = '' + result[i][0];
        for (let j = 1; j < result[i].length; j++) {
            temp += '->' + result[i][j];
        }
        res.push(temp);
    }
    return res;

    function searchNode(node, arr) {
        if (node.left == null && node.right == null) {
            arr.push(node.val);
            result.push(arr);
            return;
        }
        arr.push(node.val);
        if (node.left != null)
            searchNode(node.left, arr.slice(0));
        if (node.right != null)
            searchNode(node.right, arr.slice(0));
    }
};

/*
Runtime: 52 ms, faster than 96.80% 
Memory Usage: 35 MB, less than 33.13%
*/