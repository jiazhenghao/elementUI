/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {  
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        var maybeCel = new Array(n);
        maybeCel.fill(1);
        
        for (let i = 0; i < n; i++) {
            if (maybeCel[i] == 0) {
                continue;
            }
            for (let j = i+1; j < n; j++) {
                if (knows(i, j)) {
                    maybeCel[i] = 0;
                    break;
                } 
                else {
                    maybeCel[j] = 0;
                }
            }
        }
        for (let i = 0; i < maybeCel.length; i++) {
            if (maybeCel[i] == 1) {
                for (let j = 0; j < n; j++) {
                    if (!knows(j, i)) 
                        return -1;
                }
                for (let j = 0; j < n; j++) {
                    if (i == j) continue;
                    if (knows(i, j))
                        return -1;
                }
                return i;
            }
        }    
        return -1; 
    };
};

/*
Runtime: 76 ms, faster than 97.84% 
Memory Usage: 38.1 MB, less than 8.41% 
*/
//[[1,1],[1,1]]  //-1
//[[1,0,1],[0,1,1],[0,0,1]] // 2