const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.log("Before executing");
        console.time('execute');//time begin

        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');//time end
            this.emit('end');
            console.log('After executing');
        });
    }
}
const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));

const doneWithExcuet = () => console.log('Done with execute');
withTime.on('end', doneWithExcuet);

withTime.on('data', (data) => {
    console.log(`Length: ${data.length}`);
});
//有两个listener,则按照顺序来，用prependListener可以提前。
withTime.prependListener('data', (data) => {
    console.log(`hi, Length: ${data.length}`);
});

//removeListener
withTime.removeListener('end', doneWithExcuet);

//one way to deal with error
//withTime.on('error', console.error);

//another way to deal with error
// process.on('uncaughtException', (err) => {
//     console.log(err);
//     //do some cleanup
//     process.exit(1);//exit anyway
// });
//由于未知错误很多，cleanup的代码可能对于特定异常无效，可以用once
// process.once('uncaughtException', (err) => {
//     console.log(err);
//     //do some cleanup
//     process.exit(1);//exit anyway
// });


//withTime.execute(fs.readFile, '1122');
withTime.execute(fs.readFile, __filename);
// Before executing
// About to execute
// execute: 1.789ms
// Done with execute
// After executing

