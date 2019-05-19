exports.id = 'm1';
exports.content = [1];

const m2 = require('./m2');
console.log('From m1.js: ', m2);

exports.content.push(11);
exports.content.push(111);
