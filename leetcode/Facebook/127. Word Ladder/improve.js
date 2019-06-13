/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/*
改进方案，把wordList转化为 Set，当28行，找match的时候，
把所有单词都推进temp，然后更新wordList。
这个方案有利于超大wordlist数组
*/


var map = new Map();

var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) == -1)
        return 0;

    var result = [0];
    var wordsUsed = [beginWord];
    find(beginWord, wordsUsed, wordList, endWord, result);
    return result[0];
};

function find(currentWord, wordsUsed, wordList, target, result) {
    var temp = [];
    for (let i = 0; i < wordList.length; i++) {
        if (wordMatch(currentWord, wordList[i])) {
            if (wordList[i] == target) {
                if (result[0] == 0 || result[0] > wordsUsed.length + 1) {
                    result[0] = wordsUsed.length + 1;
                }
                return;
            }
            else {
                temp.push(wordList[i]);
                //++裁剪wordlist +++
                wordList.splice(i, 1);
                i--;
                //++
            }
        }
    }
    if (temp.length == 0)
        return;
    // if (temp.indexOf(target) != -1) {
    //     //每成功一个，就去比较，长度小的留下来，即可。
    //     if (result[0] == 0 || result[0] > wordsUsed.length + 1) {
    //         result[0] = wordsUsed.length + 1;
    //     }
    //     return;
    // }
    else {
        if (wordsUsed.length + 2 > result[0] && result[0] != 0) {
            return;
        }
        //我们在这里裁剪wordList，不光要把temp[j]裁剪，要把所有的temp数组里的都去掉。
        // let words = wordList.slice(0);
        // for (let j = 0; j < temp.length; j++) {
        //     let n = words.indexOf(temp[j]);
        //     words.splice(n, 1);
        // }
        for (let j = 0; j < temp.length; j++) {
            let arr = wordsUsed.slice(0);
            arr.push(temp[j]);
            find(temp[j], arr, wordList.slice(0), target, result);
        }
    }

}

function wordMatch(word1, word2) {
    if (map.has(word1 + word2))
        return map.get(word1 + word2);

    var unmatch = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i])
            unmatch++;
        if (unmatch > 1) {
            map.set(word1 + word2, false);
            map.set(word2 + word1, false);
            return false;
        }
    }
    if (unmatch == 1) {
        map.set(word1 + word2, true);
        map.set(word2 + word1, true);
        return true;
    }
    else {
        map.set(word1 + word2, false);
        map.set(word2 + word1, false);
        return false;
    }
}

console.log(ladderLength("qa", "sq", ["si", "go", "se", "cm", "so", "ph", "mt", "db",
    "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to",
    "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au",
    "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm",
    "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa",
    "pi", "os", "uh",
    "wm", "an", "me",
    "mo", "na", "la",
    "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io",
    "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

console.log(ladderLength("cet", "ism", ["kid", "tag", "pup", "ail", "tun", "woo", "erg", "luz", "brr",
    "gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco",
    "pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won",
    "dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max",
    "jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie",
    "noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san",
    "pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi",
    "sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel",
    "hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen",
    "wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag",
    "ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw",
    "his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob",
    "gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie",
    "nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip",
    "cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat",
    "pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar",
    "cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap",
    "den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog",
    "ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any",
    "dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal",
    "keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due",
    "sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop",
    "haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad",
    "ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad",
    "elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan",
    "lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub",
    "bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew",
    "hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig",
    "hub", "low", "did", "tin", "get", "gte", "sox", "lei", "mig", "fig", "lon", "use", "ban", "flo", "nov", "jut",
    "bag", "mir", "sty", "lap", "two", "ins", "con", "ant", "net", "tux", "ode", "stu", "mug", "cad", "nap", "gun",
    "fop", "tot", "sow", "sal", "sic", "ted", "wot", "del", "imp", "cob", "way", "ann", "tan", "mci", "job", "wet",
    "ism", "err", "him", "all", "pad", "hah", "hie", "aim", "ike", "jed", "ego", "mac", "baa", "min", "com", "ill",
    "was", "cab", "ago", "ina", "big", "ilk", "gal", "tap", "duh", "ola", "ran", "lab", "top", "gob", "hot", "ora",
    "tia", "kip", "han", "met", "hut", "she", "sac", "fed", "goo", "tee", "ell", "not", "act", "gil", "rut", "ala",
    "ape", "rig", "cid", "god", "duo", "lin", "aid", "gel", "awl", "lag", "elf", "liz", "ref", "aha", "fib", "oho",
    "tho", "her", "nor", "ace", "adz", "fun", "ned", "coo", "win", "tao", "coy", "van", "man", "pit", "guy", "foe",
    "hid", "mai", "sup", "jay", "hob", "mow", "jot", "are", "pol", "arc", "lax", "aft", "alb", "len", "air", "pug",
    "pox", "vow", "got", "meg", "zoe", "amp", "ale", "bud", "gee", "pin", "dun", "pat", "ten", "mob"]));

