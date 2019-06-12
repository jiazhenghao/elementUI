/*
Given a string, find the length of the longest substring without repeating characters.

*/

var lengthOfLongestSubstring = function (str) {
    var max = 1;
    var longestSubStart = 0;
    var longestSubEnd = 0;
    if (str.length == 1) {
        return 1;
    }
    for (let i = 1; i < str.length; i++) {
        var index = str.indexOf(str.charAt(i), longestSubStart);
        //console.log(index);
        if (index >= longestSubStart && index < i) {
            //发现重复了。
            longestSubStart = index + 1;
            longestSubEnd = i;
        }
        else {
            longestSubEnd++;
            if (longestSubEnd - longestSubStart + 1 > max) {
                max = longestSubEnd - longestSubStart + 1;
            }

        }

    }
    return max;

};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));