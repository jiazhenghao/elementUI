//////////////////////////////////////////////////////////////////////////////
//代码比较臃肿。这个解法的思路，是 xxxx ->0000的一个过程 x(0-9),先尝试将第一位往0靠，失败了，则反方向往0靠，再失败，则添加至死亡map。
//如果反方向没有失败，则将transferIdx指向自己，接下来下一顺位进行变化，循环这样走下去。
//////////////////////////////////////////////////////////////////////////////
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4 
// 5 5 5 5 
// 6 6 6 6
// 7 7 7 7
// 8 8 8 8 
// 9 9 9 9 
// 0 0 0 0
// 1 1 1 1 
// 2 2 2 2
// 3 3 3 3
// 5 5 5 5
// 6 6 6 6
// 7 7 7 7
// 8 7 7 7
// 9 7 7 7
//////////////////////////////////////////////////////////////////////////////
//以上只是解题思路，下面代码是debug的结果，还可以优化，或者有更简洁的写法
//////////////////////////////////////////////////////////////////////////////
//当前变化的索引key
var transferIdx;
//上下都不可动的map索引，如果全部不可动，则无解,比如动一下，就死了（在deadmap）中存在
var deadMap;
//一次性变化的起始索引，比如变化过程 0123,1230,2301，
var stepidx;
//一个获取当前未达到目标0的 数据存储索引 unArriveArr[0]是key unArriveArr[1]是v
var unArriveArr = [];
var openLock = function (deadends, target) {
    //如果0000也在deadends里，游戏就结束了。
    if (deadends.indexOf("0000") != -1) {
        return -1;
    }
    //把最终结果放到一个array里，array里有四位数字，arr是名字。
    let arr = target.split("");
    let lockMap = {};
    let step = -1;
    let isLast = false;
    deadMap = {};
    transferIdx = -1;
    stepidx = 0;
    for (let i = 0; i < arr.length; i++) {
        lockMap[i + ""] = parseInt(arr[i]);
    }

    while (lockMap["0"] != 0 || lockMap["1"] != 0 || lockMap["2"] != 0 || lockMap["3"] != 0) {
        let tmparr = getUnArrive(lockMap, stepidx);//以stepidx 和 transferIdx为条件，获取未到达的索引 (这里的到达，是指的从非0到0的一个过程)
        if (tmparr == null && transferIdx != -1) {
            tmparr = [];
            tmparr[0] = transferIdx + "";
            tmparr[1] = lockMap[transferIdx];
            isLast = true;
            transferIdx = -1;
        }
        if (!tmparr) { //都到达了，则成功
            break;
        }
        let tmpIdx = tmparr[0];
        let val, initialVal;
        val = initialVal = parseInt(tmparr[1]);
        val = limit(val);
        lockMap[tmpIdx] = val;
        let str1 = getMapStr(lockMap);
        if (deadends.indexOf(str1) != -1) {
            if (isLast) {
                isLast = false;
                step = -1;
                stepidx++;
                if (stepidx > 3) { //从4个索引开始的地方都找过了,无解
                    break;
                }
                for (let i = 0; i < arr.length; i++) { //以新的stepidx 重置map
                    lockMap[i + ""] = parseInt(arr[i]);
                }
                continue;
            }
            lockMap[tmpIdx] = limit2(tmparr[1] - (val - initialVal)); //往0近的方向走失败了，所以基于上个方向取反向差值 比如 3 -> 2=====>3-(2 - 3) = 4;
            str1 = getMapStr(lockMap);
            if (deadends.indexOf(str1) != -1) {
                deadMap[tmpIdx + ""] = 1;
                lockMap[tmpIdx] = initialVal;
                if (deadMap["0"] && deadMap["1"] && deadMap["2"] && deadMap["3"]) { //4个值都动不了，无解
                    step = -1;
                    break;
                }
            }
            else {
                transferIdx = tmpIdx;
                if (tmparr[0] == "3") { //第一轮末尾反方向了走一步 所以step++  造成了这样的一个下移的索引顺序过程3-0-1-2
                    step++;
                }
                else {
                    lockMap[tmpIdx] = initialVal;
                }
            }

        }
        else {
            deadMap["0"] = 0; //重置死亡map
            deadMap["1"] = 0;
            deadMap["2"] = 0;
            deadMap["3"] = 0;
            step++;
        }
    }
    if (step == -1) {
        return step
    }
    else {
        return step + 1;
    }
};

var getUnArrive = function (map, idx) {
    for (let key in map) { //这里分4步获取，是有个起点终点的讲究，或者说是环
        if (parseInt(key) > parseInt(transferIdx) && deadMap[key] != 1 && parseInt(key) >= idx) {
            let val = map[key];
            if (val != 0) {
                unArriveArr[0] = key;
                unArriveArr[1] = val;
                return unArriveArr;
            }
        }
    }
    for (let key in map) {
        if (parseInt(key) > parseInt(transferIdx) && deadMap[key] != 1 && parseInt(key) < idx) {
            let val = map[key];
            if (val != 0) {
                unArriveArr[0] = key;
                unArriveArr[1] = val;
                return unArriveArr;
            }
        }
    }
    for (let key in map) {
        if (parseInt(key) < parseInt(transferIdx) && deadMap[key] != 1 && parseInt(key) >= idx) {
            let val = map[key];
            if (val != 0) {
                unArriveArr[0] = key;
                unArriveArr[1] = val;
                return unArriveArr;
            }
        }
    }
    for (let key in map) {
        if (parseInt(key) < parseInt(transferIdx) && deadMap[key] != 1 && parseInt(key) < idx) {
            let val = map[key];
            if (val != 0) {
                unArriveArr[0] = key;
                unArriveArr[1] = val;
                return unArriveArr;
            }
        }
    }
    return null;
}
var getMapStr = function (map) { //转字符串
    return map["0"] + "" + map["1"] + "" + map["2"] + "" + map["3"] + "";
}
var limit = function (s) {
    if (s > 5) { //大于5 ++ 离0更近 
        s++;
    }
    else {
        s--;
    }
    return limit2(s);
}
var limit2 = function (s) {
    if (s > 9) {
        s = 0;
    }
    if (s < 0) {
        s = 0;
    }
    return s;
}
/*


*/