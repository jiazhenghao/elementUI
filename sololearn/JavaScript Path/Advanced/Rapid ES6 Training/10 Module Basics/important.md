1. node v10 do not support import/export 
2. to use it the simplest way is to use babel
3. npm install -D babel-preset-env babel-register
4. create a start.js
5. require('babel-register')({
    presets: ['env']
});
module.exports = require('./base.js');
6. start with "node start.js"
7. import statements actually get hoisted.
8. default can be used only once as export