var isValidBST = function (root) {
    //use in-order search, values go into an array,
    if (root == null)
        return true;
    var stack = [];
    //因为根本不会出现相等的数字的情况，所以那些复杂的逻辑都不要加，直接去判stack就行了。
    if (root.left != null) {
        search(root.left, stack);
    }
    stack.push(root.val);
    if (root.right != null) {
        search(root.right, stack);
    }
    //判stack了
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] >= stack[i + 1])
            return false;
    }
    return true;
};

function search(node, stack) {
    if (node.left != null) {
        search(node.left, stack);
    }
    stack.push(node.val);
    if (node.right != null) {
        search(node.right, stack);
    }
}
/*
Runtime: 60 ms, faster than 95.53% 
Memory Usage: 37.4 MB, less than 32.17% 
*/