var convert = function (str, numRows) {
    if (numRows == 1) {
        return str;
    }
    let strRes = "";
   
    var cut = (numRows - 3) * 2 + 4;
    
    var circle = (str.length - str.length % cut) / cut;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j <= circle; j++) {
            if (j == circle && (i + j * cut) > str.length) {
                    break;
            }
            else {
                strRes += str.charAt(i + j * cut);
            }
            if (j == circle && (cut - i + j * cut) > str.length) {
                break;
            }
            else {
                if (i != 0 && i != cut / 2) {
                    strRes += str.charAt(cut - i + j * cut);
                }
            }   
        }
    }
    return strRes;

};
console.log(convert("PAYPALISHIRING", 2));//PYAIHRNAPLSIIG
console.log(convert("PAYPALISHIRING", 3));//PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4));//PINALSIGYAHRPI

/**
Runtime: 92 ms, faster than 85.92% 
Memory Usage: 38.4 MB, less than 68.28% 
 */
/**
 * 
 * The average and the best and the worst always O(n)
 * 
 * 
 */