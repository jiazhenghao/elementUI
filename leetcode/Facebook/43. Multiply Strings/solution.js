var multiply = function (num1, num2) {
    //当其中任意一个数为0，则返回0即可。
    if (num1 == 0 || num2 == 0) {
        return "0";
    }

    //把每一个运算都放到sum里去，比如456*1203，把1000*456+200*456+0*456+3*456
    var sum = [];

    for (i = 0; i < num1.length; i++) {
        for (j = 0; j < num2.length; j++) {
            //如果没有，初次计算为undefined
            if (sum[i + j] == undefined) {
                sum[i + j] = num1[i] * num2[j];
            } else {
                sum[i + j] += num1[i] * num2[j];
            }
        }
    }
    //console.log(sum);

    sum.reverse();
    //对于进位进行计算。
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] > 9) {
            if (sum[i + 1] == undefined) {
                sum[i + 1] = Math.floor(sum[i] / 10);
            } else {
                sum[i + 1] += Math.floor(sum[i] / 10);
            }
            sum[i] = sum[i] % 10;
        }
    }
    return sum.reverse().join("");
};

/*
Runtime: 52 ms, faster than 99.84% 
Memory Usage: 35.6 MB, less than 83.56%
*/

console.log(multiply('1203', '456'));