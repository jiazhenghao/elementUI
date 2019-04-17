/**
 * Q3
 * 从左往右计算
 */
console.log(7 > 100 > 5 == true);//false

/**
 * Q4
 * say是函数
 * 但say（）是看返回值的！！！
 */
const say = (name) => {
    return name + 6;
}
console.log(typeof say('6'));//string
