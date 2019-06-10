/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    //先找到最多出现的那个字母的个数，然后这个 （数字-1）*n就是最大的空隙
    //1.空隙不能被填满，则ok，有多少填多少，剩下的空隙+所有 tasks.length就是答案
    //2.空隙全部填满了，则更加好，因为剩下的直接插到循环里，组成A-Z。
    //比如7A、7B、7C、6D、5E n只有3，那ABCDABCD紧凑循环，但E直接插在D后面，即可了。

    var map = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < tasks.length; i++) {
        map[tasks[i].charCodeAt(0) - 65]++;
    }
    map.sort(function(a, b) {
        return a - b;
    });

    let max_val = map[25] - 1;
    let idle_slots = max_val * n;

    for (let i = 24; i >= 0 && map[i] > 0; i--) {
        //必须要选小的那个，因为很可能第二大的那个和第一大相同，此时第二大已经比max_val大了
        idle_slots -= Math.min(map[i], max_val);
    }

    return idle_slots > 0 ? idle_slots + tasks.length : tasks.length;

};

/*
Runtime: 88 ms, faster than 99.22% 
Memory Usage: 39.1 MB, less than 86.45% 
*/