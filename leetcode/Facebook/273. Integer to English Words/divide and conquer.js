const BASIC = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TWENTIES = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const HUNDREDS = ['Hundred'];
const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) { return BASIC[0]; }

    let ans = '';
    for (let i = THOUSANDS.length - 1; i >= 0; i -= 1) {
        const divider = Math.pow(1000, i);
        if (num < divider) {
            continue;
        }
        ans += threePack(Math.floor(num / divider));
        ans += THOUSANDS[i] === '' ? '' : THOUSANDS[i] + ' ';
        num %= divider;
    }

    return ans.substring(0, ans.length - 1);
};

// num MUST BE less than 1000
function threePack(num) {
    let res = '';
    if (num >= 100) {
        res += BASIC[Math.floor(num / 100)] + ' ';
        res += HUNDREDS[0] + ' ';
        num %= 100;
    }
    if (num >= 20) {
        res += TWENTIES[Math.floor(num / 10)] + ' ';
        num %= 10;
    }
    if (num > 0) {
        res += BASIC[num] + ' ';
    }
    return res;
}

/*
Runtime: 52 ms, faster than 98.17% 
Memory Usage: 34.8 MB, less than 88.78% 
*/