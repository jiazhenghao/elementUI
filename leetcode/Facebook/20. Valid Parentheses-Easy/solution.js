var isValid = function(s) {
    if (s.length == 0)
        return true;
    if (s.length == 1)
        return false;
    var stack = [];
    //to solve this problem, I use stack to mimic the sequence,
    //and the time complexity is always O(n)
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '{' || s.charAt(i) == '(' || s.charAt(i) == '[') 
            stack.push(s.charAt(i));
        else if ((s.charAt(i) == '}' && stack.pop() == '{') 
                 || (s.charAt(i) == ']' && stack.pop() == '[') 
                 || (s.charAt(i) == ')' && stack.pop() == '('))
                continue;
        else
            return false;
    }
    
    return stack.length == 0 ? true : false;
};