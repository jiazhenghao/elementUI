/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
    if (s == '') return null;
    let length = s.length;
    let i = 0;
    let root = construct();
    return root;

    function construct() {
        if (i >= length || s[i] == ")") return null;
        //i超出范围或者遇到），代表一个节点结束。返回空节点。
        let num = "";
        while (i < length) {
            //i为左圆括号，往下走，不执行这个while
            while (i < length && s[i] != "(" && s[i] != ")") {
                num += s[i];
                i++;//必须要查找到右圆括号为止。
            }
            if (num) {
                break;
            }
            //如果i对应的值是(就要继续往前走，查找下一个
            i++;
        }
        let node = new TreeNode(+num);
        node.left = construct();
        node.right = construct();
        //当左右子节点都找到了以后，i就要+1，即遇到一个)以后。
        i++;
        return node;
    }
};


/*
Runtime: 68 ms, faster than 100.00% 
Memory Usage: 38.5 MB, less than 45.45%
*/
