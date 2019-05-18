// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;
// three lines equal to bellow
const { PI, E, SQRT2 } = Math;
// With require
const { readFile } = require('fs');
const circle = {
    label: 'circleX',
    radius: 2,
    precision: 5
};
// const circleArea = ({ radius }, { precision = 2 } = {}) =>
//     (PI * radius * radius).toFixed(precision);
// console.log(circleArea(circle));
// console.log(circleArea(circle, {precision: 4}));//12.5664
//console.log(PI); right 
//console.log(radius); wrong
//把对象circle传进去，但我只要用到属性radius，所以用{}
//这种写法熟悉以后，加强了代码的可读性，降低写起来时候的复杂
//12.57

//我们改写一下，把precision给到第一个参数的对象中去，
const circleArea = ({ radius, precision = 2}) =>
    (PI * radius * radius).toFixed(precision);
console.log(circleArea(circle));
//12.56637


