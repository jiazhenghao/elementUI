/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.data = [];
    //this.min = undefined;
    this.count = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.count++;
    this.data.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.count == 0) {
        return;
    }
    else {
        this.data.pop();
        this.count--;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.count == 0) {
        return null;
    } else {
        return this.data[this.data.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.count == 0) {
        return null;
    }
    let temp = this.data[0];
    for (let i = 1; i < this.data.length; i++) {
        if (temp > this.data[i])
            temp = this.data[i];
    }
    return temp;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */