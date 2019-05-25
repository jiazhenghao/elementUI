const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./L17 server')(client);

let command, args;
rl.on('line', (input) => {
    //console.log(input);
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});

server.on('response', (res) => {
    //console.log(`Response: ${res}`);
    process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(res);
    process.stdout.write('\n\> ');
})
