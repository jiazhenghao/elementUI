/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var diff = t.length;
    var result = '';
    var mapT = new Map();
    var mapS = new Map();
    
    for (let i = 0; i < t.length; i++) {
        mapT.set(t[i], mapT.get(t[i])+1 || 1);
    }
    console.log(mapT);
    
    var left = 0;
    while(!mapT.has(s[left])) {
        left++;
        if (left == s.length) {
            return '';
        }
    }
    var right = left;
    var toTheEnd = false;
    givenLeftFindRight(left);
    
    while (left < s.length - t.length) {
        // if (toTheEnd) {
        //     console.log('111111');
        //     return result;
        // } else {
            //console.log('aaaaa');
            //diff++;
            if (mapT.get(s[left]) >= 0) {
                diff++;
            }
            mapS.set(s[left], mapS.get(s[left]) - 1);
            mapT.set(s[left], mapT.get(s[left]) + 1);
            left++;//
            if (left == s.length) {
                return result;
            }
            while (!mapT.has(s[left]) || mapT.get(s[left]) < 0) {
                if (mapT.get(s[left]) < 0) {
                    mapT.set(s[left], mapT.get(s[left]) + 1);
                }
                left++;
                if (left == s.length) {
                    return result;
                }
            }
            //console.log(s[left]);
            givenLeftFindRight(left);
        //}
    }
    return result;
    
    function givenLeftFindRight(left) {
        while (diff > 0 && right < s.length) {
            if (mapT.has(s[right]) && mapT.get(s[right]) > 0) {
                diff--;
                mapT.set(s[right], mapT.get(s[right]) - 1);
                mapS.set(s[right], mapS.get(s[right]) + 1 || 1);
                right++;
            }
            else if (mapT.has(s[right]) && mapT.get(s[right]) <= 0) {
                mapS.set(s[right], mapS.get(s[right]) + 1 || 1);
                mapT.set(s[right], mapT.get(s[right]) - 1);
                right++;
            }
            else {
                right++;
            }
        }
        if (diff > 0) {
            toTheEnd = true;
        }
        else {
            if (right == s.length) {
                toTheEnd = true;
                if (result.length > right - left) {
                    result = s.substring(left, right);
                }
            }
            if (result=='') {
                result = s.substring(left, right);
            } else {
                if (result.length > right - left) {
                    result = s.substring(left, right);
                }
            }
        }
        //console.log('diff'+diff);
        //console.log(s.substring(left, right));
    }
};


// "ADOBECODEBANC"
// "ABC"

// "bdab"
// "ab"

// "bba"
// "ab"