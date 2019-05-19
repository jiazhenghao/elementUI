const fs = require('fs');
const server = require('https').createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
})

//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes

server.on('request', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("HELLO WORLD!!!");
});

server.listen(443);
