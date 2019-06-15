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
var verticalOrder = function(root) {
    var result = new Map();
    if (root == null) {
        return [];
    }
    //root已经不为空了，把root放进result里面去。
    result.set(0, [root.val]);

    let result1 = [];
	let queue = [root];
    root.offset = 0;

	while(queue.length) {
		// 每一层的节点数
		let level = queue.length;
		let currLevel = [];
		// 每次遍历一层元素
		for(let i = 0;i < level;i++) {
			// 当前访问的节点出队
			let curr = queue.shift();
            traverse(curr);
			// 出队节点的子女入队
			curr.left ? queue.push(curr.left) : '';
			curr.right ? queue.push(curr.right) : '';
			currLevel.push(curr.val);
		}
		result1.push(currLevel);
	}

    //把result的map转化为array，再排序
    var arrayMap = Array.from(result);
    arrayMap.sort( function(a,b) {
        return a[0]-b[0];
    });
    var arrayResult = [];
    for (let i = 0; i < arrayMap.length; i++) {
        arrayResult.push(arrayMap[i][1]);
    }
    return arrayResult;

    function traverse(node) {
        if (node == null) 
            return;
        //如果左边子节点不为空，把它加进去result里
        if (node.left != null) {
            node.left.offset = node.offset - 1;
            if (result.has(node.offset - 1)) {
                let arr = result.get(node.offset - 1);
                arr.push(node.left.val);
                result.set(node.offset - 1, arr);
            } else {
                result.set(node.offset - 1, [node.left.val]);
            }
        }//如果右边子节点不为空，把它加进去result里
        if (node.right != null) {
            node.right.offset = node.offset + 1;
            if (result.has(node.offset + 1)) {
                let arr = result.get(node.offset + 1);
                arr.push(node.right.val);
                result.set(node.offset + 1, arr);
            } else {
                result.set(node.offset + 1, [node.right.val]);
            }
        }
    }
};

/*
Runtime: 60 ms, faster than 96.43% 
Memory Usage: 34.8 MB, less than 92.81% 
*/