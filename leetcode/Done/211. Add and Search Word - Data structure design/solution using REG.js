/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.searchHelper = new Map();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let searchHeaper = this.searchHelper, len = word.length;
    if (searchHeaper.has(len))
        searchHeaper.get(len).push(word);
    else
        searchHeaper.set(len,[word]);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let reg = new RegExp('^'+word+"$"), words = this.searchHelper.get(word.length) || [];
    for(let i=0,len=words.length;i<len;i++){
        if (words[i].match(reg))
            return true;
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


/*
Runtime: 180 ms, faster than 95.94% 
Memory Usage: 65.1 MB, less than 69.86% 
*/