/*
First BFS 
to find out all the deepest nodes;
Then from these nodes, 
count their parents until find a common ancestor.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
    if (!root || root.length === 0) return null;
    let parents = {};
    let depths = {};
    let goal;
    let max = -Infinity;
    function helper(root, depth, parent) {
        if (root) {
            if (depth > max) max = depth;
            parents[root.val] = [parent, root];
            if (depth in depths) depths[depth].push(root.val)
            else depths[depth] = [root.val];

            helper(root.left, depth + 1, root.val);
            helper(root.right, depth + 1, root.val);
        };

    };
    function findParent(arr) {
        let set = new Set([]);
        arr.forEach((e) => {
            set.add(parents[e][0])
        });
        if (set.size === 1) {
            goal = [...set][0]
        }
        else findParent(set)
    }
    helper(root, 0, root.val);
    if (depths[max].length === 1) {
        return parents[depths[max][0]][1]
    }
    else {
        findParent(depths[max]);
        return parents[goal][1]
    }
};
/*
Runtime: 64 ms, faster than 64.91% 
of JavaScript online submissions for Smallest Subtree with all the Deepest Nodes.
Memory Usage: 36 MB, less than 20.00% 
*/