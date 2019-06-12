/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 使用递归
 */
var isMatch = function(text, pattern) {
    if (pattern=='' && text=='')
        return true;
    //判断第一个位置的字母是否匹配。
    var first_match = (text.length != 0 && (pattern.charAt(0) == text.charAt(0) || pattern.charAt(0)=='.') );
    
    if (pattern.length >= 2 && pattern.charAt(1) == '*') {
        //有两种方式，第一种就是直接跳过这个*，去比后面的。
        //第二种就是 看看第一个对得上不？对得上就比后续的text。
        return isMatch(text, pattern.substring(2)) || 
            (first_match && isMatch(text.substring(1), pattern));
    }
    else {
        //如果长度小于2，那就只比第一个。或者长度大于等于2了，但第二个不是*，则去比第一个且递归比剩下的。
        return first_match && isMatch(text.substring(1), pattern.substring(1));
    }
    
};

