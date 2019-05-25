const m1 = require('./lib/m1');
console.log('From index.js: ', m1);

/*
From m2.js: m1 is not loaded yet { id: 'm1', content: [ 1 ] }
From m1.js:  { id: 'm2', content: [ 2, 22, 222 ] }
From index.js:  { id: 'm1', content: [ 1, 11, 111 ] }
*/