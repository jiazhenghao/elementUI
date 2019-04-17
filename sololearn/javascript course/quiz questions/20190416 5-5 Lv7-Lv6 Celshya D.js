/**
 * Q4
 */
myBlock: {
    var a = 0;
    break myBlock;
    a = 1;
};
console.log(a);//0
console.log(typeof myBlock);//undefined
