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
function cloneGraph(graph) {
    if (!graph) return graph;
    var map = {};
    return traverse(graph);

    function traverse(node) {
        if (!map[node.val]) {
            var newNode = new Node(node.val);
            map[node.val] = newNode;
            newNode.neighbors = node.neighbors.map(traverse);
        }
        return map[node.val];
    }
}