/*
Instead of adding '(' or ')' every time, 
let's only add them when we know it will remain a valid sequence.
We can do this by keeping track of the number of opening and closing brackets we have placed so far.

We can start an opening bracket if we still have one (of n) left to place. 
And we can start a closing bracket if it would not exceed the number of opening brackets.

*/

var generateParenthesis = function (n) {
    let arr = [];
    backtrack(arr, '', 0, 0, n);
    return arr;
}
//ans是答案数组
//cur是字符串
//open，close是已经使用的open的个数，和已经使用的close的个数

function backtrack(ans, cur, open, close, max) {
    if (cur.length == max * 2) {
        ans.push(cur);
        return;
    }
    if (open < max)
        backtrack(ans, cur + "(", open + 1, close, max);
    if (close < open)
        backtrack(ans, cur + ")", open, close + 1, max);
}
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));

/*
Runtime: 52 ms, faster than 95.42% 
Memory Usage: 35.1 MB, less than 48.25%

Time Complexity : O(4n / √n￣)  
Each valid sequence has at most n steps during the backtracking procedure.
*/