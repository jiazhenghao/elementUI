/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    
    if (root == null)
        return result;
    
    var thisLevelResult = [];
    thisLevelResult.push(root);

    result.push(thisLevelResult.slice(0));
  
    thisLevelResult = nextLevel(thisLevelResult);
 
    while (thisLevelResult.length != 0) {
        result.push(thisLevelResult.slice(0));
        thisLevelResult = nextLevel(thisLevelResult);
    }
    
    //转化下，node改为node的val
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            result[i][j] = result[i][j].val;
        }
    }
    
    return result;
    
};

function nextLevel(arr) {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].left != null) {
            res.push(arr[i].left);
        }
        if (arr[i].right != null) {
            res.push(arr[i].right);
        }    
    }
    return res;
} 

/*
Runtime: 48 ms, faster than 99.02%
Memory Usage: 34.8 MB, less than 93.05%
*/