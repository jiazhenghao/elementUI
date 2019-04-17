/**
 * Q3
 * 两个字符串比较的时候，是不转化为数字的，直接一位位地比
 */
console.log("2" > "12");//true
console.log("2" > 12);//false

/**
 * Q5
 */
function p(a, b) {
    if (b == 1)
        return a;
    else
        return a * p(a, --b);
}
console.log(p(2, 3));//8
