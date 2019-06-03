console.log(parseInt('11000', 2));//24
console.log(parseInt('110000', 2));//48
console.log(parseInt('1100000', 2));//96
//所以，可变长数组，每次遇到2的N次方+1的时候，总的运算次数如下：
/*
    3       6
    5       12
    9       24
    17      48
    33      96
    65      192
    129     384
*/