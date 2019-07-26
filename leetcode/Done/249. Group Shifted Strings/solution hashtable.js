/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    var hashMap = new Map();// key'abc', value:0, 'bcd', 0, 
    var res = [];
    for (let i = 0; i < strings.length; i++) {
        if (hashMap.has(strings[i])) {
            res[hashMap.get(strings[i])].push(strings[i]);
        } else {
            res.push([]);
            res[res.length - 1].push(strings[i]);
            setHash(strings[i]);
        }
    }
    console.log(hashMap);
    return res;
    
    function setHash(str) {
        //console.log('aaaa');
        var index = res.length - 1;
        hashMap.set(str, index);
        var temp;
        var temp2 = str;
        for (let i = 1; i <= 25; i++) {
            //console.log(temp);
            temp = temp2;
            temp2 = '';
            //console.log(temp);
            for (let j = 0; j < temp.length; j++) {
                switch(temp[j]) {
                    case 'a': temp2 += 'b';break;
                    case 'b': temp2 += 'c';break;
                    case 'c': temp2 += 'd';break;
                    case 'd': temp2 += 'e';break;
                    case 'e': temp2 += 'f';break;
                    case 'f': temp2 += 'g';break;
                    case 'g': temp2 += 'h';break;
                    case 'h': temp2 += 'i';break;
                    case 'i': temp2 += 'j';break;
                    case 'j': temp2 += 'k';break;
                    case 'k': temp2 += 'l';break;
                    case 'l': temp2 += 'm';break;
                    case 'm': temp2 += 'n';break;
                    case 'n': temp2 += 'o';break;
                    case 'o': temp2 += 'p';break;
                    case 'p': temp2 += 'q';break;
                    case 'q': temp2 += 'r';break;
                    case 'r': temp2 += 's';break;
                    case 's': temp2 += 't';break;
                    case 't': temp2 += 'u';break;
                    case 'u': temp2 += 'v';break;
                    case 'v': temp2 += 'w';break;
                    case 'w': temp2 += 'x';break;
                    case 'x': temp2 += 'y';break;
                    case 'y': temp2 += 'z';break;
                    case 'z': temp2 += 'a';break;
                }
            }
            hashMap.set(temp2, index);
        }
    } 
};
//console.log(groupStrings(["abc","bcd","acef","xyz"]));
console.log(groupStrings(["a","z"]));
/*
Runtime: 60 ms, faster than 82.89% 
of JavaScript online submissions for Group Shifted Strings.
Memory Usage: 38.3 MB, less than 7.41% 
*/