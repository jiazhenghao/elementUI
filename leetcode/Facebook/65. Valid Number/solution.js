/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var trimmed = s.trim();
    if (trimmed == "" || trimmed == "." || trimmed == "-." || trimmed == "+.") 
        return false;
    if (/^(e|E|\.e|\.E|\+E|\+e|-e|-E)/.test(trimmed)) 
        return false;
    return /^(-|\+)?[0-9]*(\.([0-9]+)?)?((E|e)(\+|\-)?[0-9]+)?$/.test(trimmed);
};


// var isNumber = function(s) {
//     s = s.trim();
//     return s==="" ? false : !isNaN(s);
// };



/*
const signs = ['+', '-'];
var isNumber = function(s) {
    s = s.trim();
    if (s.length === 0) return false;
    
    const splits = s.split('e');
    if (splits.length === 0 || splits.length > 2) return false;
    if (splits.some(split => split.length === 0)) return false;

    for (let i = 0; i < splits.length; i++) {
        const str = signs.includes(splits[i][0]) ? splits[i].substring(1) : splits[i];
        let decimalFound = false;
        let numberFound = false;
        for (const ch of str) {
            if (ch === '.') {
                if (decimalFound || i === 1) return false;
                decimalFound = true;
            } else if (Number.isNaN(Number.parseInt(ch))) {
                return false;
            } else {
                numberFound = true;
            }
        }
        
        if (!numberFound) return false;
    }
    
    return true;
};
*/