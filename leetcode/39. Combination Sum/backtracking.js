var combinationSum = function (array, target) {
    array.sort(function (a, b) {
        return a - b;
    })

    if (array.length == 0)
        return [];

    //res就是最后的值，comb是一个成功的结果，函数的pos表示初始位置
    var res = [];
    var comb = [];
    helper(array, target, 0, comb, res);

    return res;
};

function helper(candidates, target, pos, comb, res) {
    for (let i = pos; i < candidates.length; i++) {
        let newTarget = target - candidates[i];
        //如果新目标值大于0，继续操作
        if (newTarget > 0) {
            comb.push(candidates[i]);
            //注定一定要用comb2去重新创建一个临时统计的，因为多个递归函数是互相共享的，如果
            //不分开来
            comb2 = comb.slice(0);
            helper(candidates, newTarget, i, comb2, res);
            //这一步非常关键，不退出，会把后面的helper里带进去刚才push进去的candidate[i]
            comb.pop();
            
        } 
        //如果新目标值等于0，表示找到了这么一个值
        else if (newTarget == 0) {
            // comb2 = comb.slice(0);
            // comb2.push(candidates[i]);
            // res.push(comb2);
            // return;
            comb.push(candidates[i]);
            res.push(comb);
            return;
        }
        //如果新目标值小于0，表达越界了，不用操作了。
        else {
            break;
        }
    }
}

//console.log(combinationSum([2, 5, 4, 3, 6, 7], 9));