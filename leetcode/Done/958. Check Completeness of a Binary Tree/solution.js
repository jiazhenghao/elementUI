/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//var isTree;

var isCompleteTree = function(root) {
    if (root.left == null && root.right == null) 
        return true;
    if (root.left == null && root.right != null) 
        return false;
    
    var current = root;
    var arr = [];
    
    arr.push(current.left, current.right);
    current = current.left;
    
    //当某一层里有null了，就不该再继续下一次的工作。
    var encounterNull = false;
    
    while (current != null) {
        if (encounterNull != false) {
            return false;
        }
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == null) {
                encounterNull = true;
                continue;
            }
            arr[i].left == null? temp.push(null) : temp.push(arr[i].left);
            arr[i].right == null? temp.push(null) : temp.push(arr[i].right);
        }
        if (isCorrect(temp)) {
            arr = temp;
            current = current.left;
        }
        else {
            return false;
        }
    }
    return isCorrect(arr);
};

function isCorrect(temp) {
    var nullPointer;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] != null) {
            continue;
        }
        else {
            nullPointer = i;
            break;
        }
    }
    for (let j = nullPointer + 1; j < temp.length; j++) {
        if (temp[j] == null) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

/*
Runtime: 52 ms, faster than 97.58% 
Memory Usage: 35.7 MB, less than 46.34% 
*/