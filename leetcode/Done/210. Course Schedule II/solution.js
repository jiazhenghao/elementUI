/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const dfs = (graph, invGraph, finished, course, res) => {
    if (graph[course].every(c => finished[c])) {
        finished[course] = true;
        res.push(course);

        if (!invGraph[course]) { return; }

        for (let neighbor of invGraph[course]) {
            if (!finished[neighbor]) {
                dfs(graph, invGraph, finished, neighbor, res);
            }
        }
    }
}

const findOrder = (numCourses, prerequisites) => {
    let graph = {}, invGraph = {}, finished = {}, res = [];

    for (let pre of prerequisites) {
        let c = pre[0], p = pre[1];

        if (!graph[c]) { graph[c] = []; }
        if (!invGraph[p]) { invGraph[p] = []; }

        graph[c].push(p);
        invGraph[p].push(c);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!graph[i]) {
            finished[i] = true;
            res.push(i);
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (!finished[i]) {
            dfs(graph, invGraph, finished, i, res);
        }
    }

    return res.length === numCourses ? res : [];
};
/*
Simple Graph + DFS solution, O(V + E) Time and Space
Runtime: 68 ms, faster than 89.86% 
Memory Usage: 40.6 MB, less than 27.61%

*/