/**
 * Q2
 */
function bin(num) {
    var res = "";
    while(num >0) {
        res = num % 2 + res;
        num = Math.floor(num / 2);
    }
    return res;
}
console.log(bin(6));//110
// 第一次循环是res=0+"" num = 3
// 第二次循环是res=1+"0" num = 1
// 第三次循环是res=1 + "10"
