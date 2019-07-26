/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return node;
    //创建一个已克隆的大对象。
    var cloned = {};
    return clone(node);
    
    function clone(node) {
        //如果cloned里没node，则创建，加进去
        if ( !cloned[node.val] ) {
            var newNode = new Node(node.val);
            cloned[node.val] = newNode;
            //这个map方法太厉害了。map() 不会对空数组进行检测。 map() 不会改变原始数组。
            newNode.neighbors = node.neighbors.map(clone);
        }
        //如果cloned里已经有了。直接返回。
        return cloned[node.val];
    }
};

/*
Runtime: 84 ms, faster than 98.77% 
Memory Usage: 44.3 MB, less than 98.96% 
*/