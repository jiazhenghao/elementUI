/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {//input ["abcd","dcba","lls","s","sssll"]
    const res = [], map = new Map(words.map((item, index) => [item, index]));
    //console.log(map);//Map { 'abcd' => 0, 'dcba' => 1, 'lls' => 2, 's' => 3, 'sssll' => 4 }
    if (!words || words < 2) return res;
    words.forEach((word, index) => {
        for (let i = 0; i <= word.length; i++) {
            let str1 = word.substring(0, i);
            let str2 = word.substring(i, word.length);
            if (isPal(str1)) {
                const revStr2 = str2.split('').reverse().join('');
                if (map.has(revStr2) && map.get(revStr2) !== index) {
                    res.push([map.get(revStr2), index]);
                }
            }
            if (str2.length > 0 && isPal(str2)) {
                const revStr1 = str1.split('').reverse().join('');
                if (map.has(revStr1) && map.get(revStr1) !== index) {
                    res.push([index, map.get(revStr1)]);
                }
            }
        }
    })

    return res;

    function isPal(str) {
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - 1 - i])
                return false;
        }
        return true;
    }
}

/*
using hashmap
先把所有情况放入一个hashmap中，然后考虑对于每一个单词，
将每个单词按照字符，从0到总长，从左到右分解。比如‘hello’
'' + 'hello'    ->   'olleh'+ '' + 'hello'
'h' + 'ello'    ->   'olle' +  'h' + 'ello'
'he' + 'llo'    
'hel' + 'lo'    
'hell' + 'o'    ->  'hell' + 'o' + 'lleh';
'hello' + ''    ->  'hello' + '' + 'olleh'
*/