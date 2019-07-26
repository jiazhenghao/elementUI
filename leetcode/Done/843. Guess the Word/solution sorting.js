/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = module.exports = function(wordlist, master) {
    wordlist.sort();//先排序
    var lst = [...wordlist];
    
    for (let i = 0; i < 10; ++i) {//10次机会
        let r = master.guess(lst[0]);//第一个数先猜
        if (r == 6) return;//6个都对，就不用猜了
        newList = [];//重构lst
        for (let j = 1; j < lst.length; ++j) {
            let ct = 0;
            for (let k = 0; k < 6; ++k) {
                if (lst[j].charAt(k) == lst[0].charAt(k)) {
                    ct ++;
                }
            }
            if (ct == r) {
                newList.push(lst[j]);//加入新的lst
            }
        }
        lst = newList;
    }
};
/*
Runtime: 48 ms, faster than 96.94%
of JavaScript online submissions for Guess the Word.
Memory Usage: 33.9 MB, less than 55.32%
*/