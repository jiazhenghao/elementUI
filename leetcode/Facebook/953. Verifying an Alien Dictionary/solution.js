/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if (words.length == 1) return true;
    let hashtable = new Map();
    for (let i = 0; i < order.length; i++) 
        hashtable.set(order[i], i);
    for (let i = words.length - 1; i > 0; i--) 
        if (!compare(words[i], words[i - 1])) return false;
    
    return true;
    
    function compare(word2, word1) {
        for (let i = 0; i < word2.length; i++) {
            if (word1[i] == undefined) return false;
            if (word2[i] == word1[i]) continue;
            if (hashtable.get(word2[i]) < hashtable.get(word1[i])) 
                return false;
            else 
                return true;  
        }
    }
};

/*
Runtime: 44 ms, faster than 99.74% 
Memory Usage: 34.1 MB, less than 67.07% 
*/