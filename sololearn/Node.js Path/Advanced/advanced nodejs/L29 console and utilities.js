// const fs = require('fs');
// const out = fs.createWriteStream('./out.log');
// const err = fs.createWriteStream('./err.log');
// const console2 = new console.Console(out, err);

// const util = require('util');

//try to make some logs in the files
// setTimeout(function () {
//     console2.log(new Date());
//     console2.error(new Error("WHOOS"));
// }, 2000);

//util.inspect(global, {depth:0});没有输出的
//console.dir(global, {depth: 0});

// console.time('test');
// console.timeEnd('test');
//test: 0.138ms

// **********************

// const util = require('util');
// const debuglog = util.debuglog('web');

// const server = require('http').createServer();

// server.on('request', (req, res) => {
//   debuglog('HTTP Request: %s', req.url);
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   res.end('Hello world\n');
// });

// server.listen(9013);

// **********************

const util = require('util');

module.exports.puts = util.deprecate(function () {
    for (var i = 0, len = arguments.length; i < len; ++i) {
        process.stdout.write(arguments[i] + '\n');
    }
}, 'puts: Use console.log instead');

// **********************


const util = require('util');
const EventEmitter = require('events');
//  The old way
function CustomEmitter() { }
util.inherits(CustomEmitter, EventEmitter);
CustomEmitter.prototype.write = function (data) {
    this.emit('data', data);
};
//  The new way
class CustomEmitter extends EventEmitter {
    constructor() {
        super();
    }
    write(data) {
        this.emit('data', data);
    }
}
const stream = new CustomEmitter();