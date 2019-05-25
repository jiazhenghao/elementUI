const eventEmitter = require("events");
const myEmitter = new eventEmitter();
setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});
//myEmitter.emit('TEST_EVENT');

//We can use setImmediate to let emit go into event loop.
//so after all codes was executed, emit will go.
