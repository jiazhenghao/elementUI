var isValidBST = function (root) {
    return helper(root, null, null);
}

function helper(node, lower, upper) {
    if (node == null) return true;

    let val = node.val;
    if (lower != null && val <= lower) return false;
    if (upper != null && val >= upper) return false;

    if (! helper(node.right, val, upper)) return false;
    if (! helper(node.left, lower, val)) return false;
    return true;
}

/*
Runtime: 56 ms, faster than 98.71% 
Memory Usage: 37.3 MB, less than 47.74% 
*/