/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stk = [];
    this.stk.push(nestedList);
};
/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    let stk = this.stk;
    if (stk.length <= 0)
        return false;
    if (stk[stk.length - 1].length <= 0) {
        stk.pop();
        return this.hasNext();
    }
    if (stk[stk.length - 1][0].isInteger())
        return true;
    else {
        let x = ((stk[stk.length - 1].splice(0, 1)[0]));
        stk.push(x.getList());
        return this.hasNext();
    }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    let stk = this.stk;
    if (stk[stk.length - 1][0].isInteger()) {
        let res = stk[stk.length - 1].splice(0, 1)[0];
        return res.getInteger();
    }
    else {
        let x = ((stk[stk.length - 1].splice(0, 1)[0]));
        stk.push(x.getList());
        return this.next();
    }
};
/*
Runtime: 80 ms, faster than 93.80% 
of JavaScript online submissions for Flatten Nested List Iterator.
Memory Usage: 43.8 MB, less than 81.58%
*/