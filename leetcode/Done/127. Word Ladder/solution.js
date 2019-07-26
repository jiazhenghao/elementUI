/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var result = [0];
    var wordsUsed = [beginWord];
    find(beginWord, wordsUsed, wordList, endWord, result);
    return result;
};

function find(currentWord, wordsUsed, wordList, target, result) {
    var temp = [];
    //console.log(wordsUsed);
    for (let i = 0; i < wordList.length; i++) {
        if (wordsUsed.indexOf(wordList[i]) == -1 && wordMatch(currentWord, wordList[i])) {
            temp.push(wordList[i]);
        }
    }
    //console.log(temp);
    if (temp.length == 0)
        return;
    if ( temp.indexOf(target) != -1 ) {
        //每成功一个，就去比较，长度小的留下来，即可。
        if (result[0] == 0 || result[0] > wordsUsed.length + 1) {
            result[0] = wordsUsed.length + 1;
        }
        return;
    }
    else {
        for (let j = 0; j < temp.length; j++) {
            let arr = wordsUsed.slice(0);
            arr.push(temp[j]);
            find(temp[j], arr, wordList, target, result);
        }
    }    
    
}

function wordMatch(word1, word2) {
    var unmatch = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i])
            unmatch++;
    }
    return unmatch == 1;
}

console.log(ladderLength("qa","sq",["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]));



