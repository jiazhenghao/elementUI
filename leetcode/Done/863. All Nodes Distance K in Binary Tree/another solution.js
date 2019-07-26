/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
    let res = [];
    printkdistanceNode(root, target, K);
    return res;

    function printkdistanceNodeDown(node, k) {
        if (node == null || k < 0)
            return;

        if (k == 0) {
            res.push(node.val);
            return;
        }

        printkdistanceNodeDown(node.left, k - 1);
        printkdistanceNodeDown(node.right, k - 1);
    }

    function printkdistanceNode(node, target, k) {
        if (node == null)
            return -1;

        if (node == target) {
            printkdistanceNodeDown(node, k);
            return 0;
        }

        let dl = printkdistanceNode(node.left, target, k);
        if (dl != -1) {
            if (dl + 1 == k) {
                res.push(node.val);
            }
            else {
                printkdistanceNodeDown(node.right, k - dl - 2);
            }
            return 1 + dl;
        }
        let dr = printkdistanceNode(node.right, target, k);
        if (dr != -1) {
            if (dr + 1 == k) {
                res.push(node.val);
            } else
                printkdistanceNodeDown(node.left, k - dr - 2);
            return 1 + dr;
        }
        return -1;
    }
};