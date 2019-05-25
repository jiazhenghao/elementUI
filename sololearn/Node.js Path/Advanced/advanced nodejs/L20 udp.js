const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

//server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UPD Server is listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);

//client
const client = dgram.createSocket('udp4');

// client.send('Plu is wonderful', PORT, HOST, (err) => {
//     if (err) throw err;
//     console.log('UDP messagen is sent');
//     client.close();
// });

const msg = Buffer.from('Pluralsight rocks');
client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) throw err;
    console.log('UDP message sent');
    client.close();
});