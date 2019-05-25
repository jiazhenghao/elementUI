// let exports = module.exports;这其实是执行的第一行代码！！！

// exports.id = 1; // this is ok
// exports = { id: 1 }; // this is not ok
// module.exports = { id: 1 }; // this is ok
// // WHY??

// var g = 42; // local to this file.

// require = function() {
//   return { mocked: true };
// }; 直接将require函数换一个

// const fs = require('fs');
// console.log(fs);

const printStars = require('./L09 printStars');
printStars(10, 'Hi!');

const art = require('./ascii-art');
//console.log(require.cache);
// delete require.cache['/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/advanced nodejs/ascii-art.js']
art();
art();