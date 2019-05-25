const http = require('http');

// const req = http.request(
//     { hostname: 'www.baidu.com' },
//     (res) => {
//         console.log(res.statusCode);
//         console.log(res.headers);
//         res.on('data', (data) => {//data is a buffer
//             console.log(data.toString());
//         });
//     }
// );

//req: http.ClientRequest
const req = http.get(
    'http://www.baidu.com',
    (res) => {
        //res: http.IncomingMessage
        console.log(res.statusCode);
        console.log(res.headers);
        res.on('data', (data) => {//data is a buffer
            console.log(data.toString());
        });
    }
);

req.on('error', (e) => console.log(e));

console.log(req.agent);//http.Agent
// Agent {
//     _events: [Object: null prototype] { free: [Function] },
//     _eventsCount: 1,
//     _maxListeners: undefined,
//     defaultPort: 80,
//     protocol: 'http:',
//     options: { path: null },
//     requests: {},
//     sockets: { 'www.baidu.com:80:': [ [Socket] ] },
//     freeSockets: {},
//     keepAliveMsecs: 1000,
//     keepAlive: false,
//     maxSockets: Infinity,
//     maxFreeSockets: 256
//   }

//req.end(); when use get, it will not have to use req.end

//node L23\ http\ request\ from\ client.js | less

//By contrast, we can find the difference in HTTP Server
// server: http.Server
// const server = require('http').createServer();

// server.on('request', (req, res) => {
//   // req: http.IncomingMessage
//   // res: http.ServerResponse

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello world\n');
// });

// server.listen(8000);