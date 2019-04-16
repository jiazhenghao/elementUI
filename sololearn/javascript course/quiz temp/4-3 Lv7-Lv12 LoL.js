/**
 * Q2
 */
var i = 0;
var a = {
    ['try' + ++i]: i + 1,
    ['try' + ++i]: i + 2
};
console.log(a.try1);//2
console.log(a.try2);//4
