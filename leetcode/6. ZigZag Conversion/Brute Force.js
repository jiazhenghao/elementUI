/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

*/

var convert = function (str, numRows) {
    if (numRows == 1) {
        return str;
    }
    // if (numRows == 2) {
    //     let strRes = "";
    //     for (let i = 0; i < str.length; i = i + 2) {
    //         strRes += str.charAt(i);
    //     }
    //     for (let j = 1; j < str.length; j = j + 2) {
    //         strRes += str.charAt(j);
    //     }
    //     return strRes;
    // }
    let strRes = "";
    // numRows = 3; cut = 4;
    // numRows = 4; cut = 6;
    // numRows = 5; cut = 8;
    // numRows = 6; cut = 10;
    // 0
    // 1               9
    // 2           8
    // 3       7
    // 4   6
    // 5
    var cut = (numRows - 3) * 2 + 4; 
    for (let i = 0; i < numRows; i++) {
        for(let j = 0; j < str.length; j++) {
            if (j % cut == i || j % cut == (cut - i)) {
                strRes += str.charAt(j);
            }
        }
    }
    return strRes;

};
console.log(convert("PAYPALISHIRING", 2));//PYAIHRNAPLSIIG
console.log(convert("PAYPALISHIRING", 3));//PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4));//PINALSIGYAHRPI

/**
Runtime: 152 ms, faster than 16.78% 
Memory Usage: 37.7 MB, less than 98.56%
 */
/**
 * 
 * The average and the best and the worst always O(n*m)
 * 
 * 
 */