/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    var n = graph.length;
    //color里放节点。初始的颜色都是-1，-1表示未上颜色。0表示蓝色，1表示红色
    var color = Array(n).fill(-1);

    for (let start = 0; start < n; start++) {
        if (color[start] == -1) {
            //创建一个临时栈 
            let stack = [];
            stack.push(start);
            //绘制成蓝色
            color[start] = 0;
            
            while (stack.length != 0) {
                let node = stack.pop();
                for (let nei of graph[node]) {
                    if (color[nei] == -1) {
                        stack.push(nei);
                        color[nei] = color[node] ^ 1;//0,1 互换，用位运算很适合
                    }
                    else if (color[nei] == color[node]) {//颜色相同，就出错了。
                        return false;
                    }
                }
            }
        }
    }
    return true;
};

/*
Runtime: 56 ms, faster than 95.71% 
Memory Usage: 38.1 MB, less than 23.23%  
*/