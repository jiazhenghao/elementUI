// const {Writable} = require('stream');

// const outStream = new Writable({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     }
// });

// //process.stdin is a readable stream
// process.stdin.pipe(outStream);

//all these equals to below
//process.stdin.pipe(process.stdout);

// const {Readable} = require('stream');
// const inStream = new Readable();
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);
// inStream.pipe(process.stdout);

const {Readable} = require('stream');
const inStream = new Readable({
    read(size) {
        setTimeout(()=> {
            if (this.currentCharCode > 123) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    }
});
inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

process.on('exit', ()=> {
    console.error(
        `\n\ncurrentCharCode is ${inStream.currentCharCode}`
    );
});
//node L32\ implementing\ readable\ and\ writable\ stream.js | head -c6

process.stdout.on('error', process.exit);