const fs = require('fs');

function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        //return cb(new TypeError('argument should be string')); 这是一个不好的选择，因为要保持
        //都是异步，而不是一会异步，一会又同步。
        return process.nextTick(cb, new TypeError('argument should be string'));
    }
    fs.stat(fileName, (err, stats) => {
        if (err) {
            return cb(err);
        }
        cb(null, stats.size);
    });
}

// fileSize(__filename, (err, size) => {
//     if (err) 
//         throw err;
//     console.log(`Size in B: ${size}`);
// });
fileSize(1, (err, size) => {
    if (err) 
        throw err;
    console.log(`Size in B: ${size}`);
});

console.log('Hello!');