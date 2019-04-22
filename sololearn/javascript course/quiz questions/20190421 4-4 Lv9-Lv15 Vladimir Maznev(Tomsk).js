/**
 * Q5
 * concat 是字符串 拼接，所以a是 toString
 *  + 是运算，所以做valueOf
 */
var a = {
    valueOf: function() {
        return 3;
    },
    toString: function() {
        return 'a';
    }
};
console.log((a + 'b').concat(a));//3ba
