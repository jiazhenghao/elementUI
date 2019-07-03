/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function* getNextStates(state) {
    for (let i = 0; i < 4; i++) {
        let n = parseInt(state[i]);

        let prefix = state.substring(0, i), suffix = state.substring(i + 1);

        let next = state[i] === '9' ? '0' : (n + 1).toString();
        let prev = state[i] === '0' ? '9' : (n - 1).toString();

        yield (prefix + next + suffix);
        yield (prefix + prev + suffix);
    }
}

const openLock = (deadends, target) => {
    let deadmap = {};
    for (let d of deadends) { deadmap[d] = true; }

    let q = ['0000'], moves = -1, used = {};

    while (q.length) {
        let size = q.length;
        //移动的步数
        moves++;

        for (let i = 0; i < size; i++) {
            let state = q.shift();//拿一个出来，看看能不能走通。

            //由于以下2个if的存在，找到了就跳出这个while了，找不到的
            //被第二个死结or使用过的 拦截掉，最后能耗尽q的所有元素。
            if (state === target) { return moves; }
            if (deadmap[state] || used[state]) { continue; }

            used[state] = true;//走过的就标注一把。重复走过来的，就打回了，此路不是最佳。

            for (let n of getNextStates(state)) {
                q.push(n);//直接把下一组可能的路线放进来。
            }
        }
    }
    //console.log(q);//到达这里的q都是为空的。
    return -1;
};
/*
Runtime: 340 ms, faster than 42.98% 
of JavaScript online submissions for Open the Lock.
Memory Usage: 60.3 MB, less than 18.92%
*/