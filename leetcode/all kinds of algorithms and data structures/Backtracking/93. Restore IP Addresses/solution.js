/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    return recursion(s, 0, 1, new Map())
  };
  
  /**
   *  The main idea to solve the problem is similar to the 95 UniqueBianrySearchTreesII.
   *  The sort of the problems can be seen as a binary tree. Each point of the tree is the value. And the root to the leaf is one answear.
   *  For this case, take '222255' as the example. When we get the prefix '2.2', the rest of the string is '2255' which is needed to be cut to two part.
   *  So use an Array to store the probable solutions,  '2.255' and '22.55'. And the combine them with the prefix '2.2'.
   *  For each level, we do the same thing.
   * 这种感觉都是类似于全排列 跟95题很像
   * 这种东西都是类似一个全排列 就是有一个生成树
   * 可以通过递归去遍历整颗树
   * 因为每次遍历的子树他不是返回一个可能的结果
   * 所以 每层都有一个temp去保存当前层数的所有可能结果 然后返回给上一层 通过上一层进行排列组合
   * @param {string} str the origin string
   * @param {number} start start poisition
   * @param {number} level indicate where the poisition the number is
   * @param {Map} memo
   */
  function recursion(str, start, level, memo) {
    if (memo.has(start + '-' + level)) {
      return memo.get(start + '-' + level)
    }
    let temp = []
    // ip address can only be divied into 4 numbers
    if (level === 4) {
      if (validate(str.substring(start, str.length))) {
        temp.push(str.substring(start, str.length))
      } 
      return temp
    } 
    // the each number of ip address is 3 digits 
    for (let i = 1; i <= 3; i++) {
      // only the start position is valid then recursion
      if (start + i < str.length) {
        let array = recursion(str, start + i, level + 1, memo)
        for (let item of array) {
          if (validate(str.substring(start, start + i))) {
            temp.push(str.substring(start, start + i) + '.' + item)
          } 
        }
      }
    }
    memo.set(start + '-' + level, temp)
    return temp
  }
  
  /**
   * 
   * @param {String} str 
   */
  function validate(str) {
    if (str.length === 0 || str.length > 3 || (str.length > 1 && str.charAt(0) === '0'))
      return false
    return Number.parseInt(str) < 256
  }
  