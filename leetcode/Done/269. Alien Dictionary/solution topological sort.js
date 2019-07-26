//["wrt","wrf","erxy","ett","rftt","rfe"]
//["wrt","wrf","erxy","ett","rftt"]
//["wrt","wrf","erxy","ett","rftt"]
//["z","z"]
//["za","zb","ca","cb"]
//["wnlb"]

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length == 0) return "";
    if (words.length == 1) return words[0];
    var edges = new Set();
    var alph = new Set();
    var map = new Map();
    
    for (let i = 0; i < words.length - 1; i++) {
        if (!compare(words[i], words[i+1])) {
            return "";
        }
    }
    //console.log('aaaaaaaa');
    //console.log(edges);
    //console.log(alph);
    for (let v of edges) {
        if(!map.has(v[1])) {
            map.set(v[1], [v[0]]);
        } else {
            let arr = map.get(v[1]);
            arr.push(v[0]);
            map.set(v[1], arr);
        }
    }
    //console.log(map);
    var arrayAlph = [...alph];
    //console.log(arrayAlph);
    var res = "";
    while (arrayAlph.length != 0) {
        let cont = false;
        for (let i = 0; i < arrayAlph.length; i++) {
            if (!map.has(arrayAlph[i])) {
                cont = true;
                res += arrayAlph[i];
                let temp = arrayAlph[i];
                for (let [key,value] of map.entries()) {
                    if (value.indexOf(temp) != -1) {
                        let pos = value.indexOf(temp);
                        value.splice(pos, 1);
                        if (value.length == 0) {
                            map.delete(key);
                        } else {
                            map.set(key, value);
                        }
                    }
                }
                arrayAlph.splice(i, 1);
                break;
            }
        }
        //console.log(map);console.log(arrayAlph);
        if (!cont) return "";
    }
    return res;
    
    //return edges;
   
    function compare(word1, word2) {
        var i = 0;
        var result = true;//默认是true，针对["z","z"]
        for (; i < word1.length; i++) {
            if(word1[i] == word2[i]) {
                alph.add(word1[i]);
                continue;
            }
            else {
                //console.log(word1[i],word2[i]);
                if (!edges.has(word1[i]+word2[i])) {
                    edges.add(word1[i]+word2[i]);
                }
                alph.add(word1[i]);
                alph.add(word2[i]);
                if (edges.has(word2[i]+word1[i])) {
                    result = false;
                    break;
                } else {
                    result = true;
                    break;
                }
            }
        }
        var max = Math.max(word1.length, word2.length);
        for (;i < max; i++) {
            if (i < word1.length)
                alph.add(word1[i]);
            if (i < word2.length)
                alph.add(word2[i]);
        }
        return result;
    }
};
/*
Runtime: 76 ms, faster than 45.07% 
of JavaScript online submissions for Alien Dictionary.
Memory Usage: 40.1 MB, less than 5.00%
*/