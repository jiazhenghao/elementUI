/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k >= 52)
        return s.length;
    if (s == '' || k < 1)
        return 0;
    //容器里存了哪些字母进来的当前状态。容器的容量=k;
    var container = new Container(k);
    //output里存储着最大的长度，即返回值。
    var output = 0;
    
    for (let i = 0; i < s.length; i++) {
        let temp = container.insert(s[i]);
        if (output < temp) 
            output = temp;
    }
    
    return output;
    
    function Container(k) {
        this.capacity = k;
        this.current = [];
        this.stack = [];
        this.map = new Map();
        
        this.insert = function(char) {
            if (this.map.has(char)) {
                this.map.set(char, this.map.get(char) + 1);
                this.stack.push(char);
                return this.stack.length;
            } else if (this.current.length < this.capacity ) {
                this.stack.push(char);
                this.current.push(char);
                this.map.set(char, 1);
                return this.stack.length;
            } else {
                let tempChar = this.remove();
                while (this.map.has(tempChar)) {
                    tempChar = this.remove();
                }
                this.stack.push(char);
                this.current.push(char);
                this.map.set(char, 1);
                return this.stack.length;
            }
        };
        //能够优化的地方在于，现在是一个个从当前子字符串开始 往外推，但可以从current里面把最前的
        //一个字符推出去。
        this.remove = function() {
            let tempChar = this.stack.shift();
            if (this.map.get(tempChar) == 1) {
                this.current.shift(); 
                this.map.delete(tempChar);   
            } else {
                this.map.set(tempChar, this.map.get(tempChar) - 1);
            }
            return tempChar;
        };
    }
};
/*
Runtime: 80 ms, faster than 68.41% 
Memory Usage: 37.3 MB, less than 65.49%
*/

/*
"ecejdijlllksaczxba"    2       4
"eceba"                 2       3
"aa"                    1       2
*/