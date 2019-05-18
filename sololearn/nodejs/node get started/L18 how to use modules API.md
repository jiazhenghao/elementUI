// Top-level API is a simple object (no need to use module.exports)
exports.language = 'English';
exports.direction = 'RTL';
exports.encoding = 'UTF-8';
//another file
const api = require('./1-object');
console.log(api.language, api.direction, api.encoding);

// Top-level API is a function

module.exports = title => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>${title}</title>
  </head>
  <body>

  </body>
  </html>
`;

const templateGenerator = require('./4-function');
const myTemplate = templateGenerator('Hello Node!');
console.log(myTemplate);