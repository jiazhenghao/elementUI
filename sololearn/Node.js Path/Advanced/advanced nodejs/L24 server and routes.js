//server: http.Server
const fs = require('fs');
const server = require('http').createServer();
const data = {};

server.on('request', (req, res) => {
    // req: http.IncomingMessage
    // res: http.ServerResponse
    //console.log(req.url);
    switch (req.url) {
        case '/api':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            break;
        case '/home':
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(fs.readFileSync(`.${req.url}.html`));
            // fs.readFile(`.${req.url}.html`,'utf-8',function(err,data){
			// 	if(err){
			// 		throw err ;
			// 	}
			// 	res.end(data);
			// });
            break;
        case '/':
            res.writeHead(301, { 'location': '/home' });
            res.end();
            break;
        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(9012);
//curl -i localhost:9012/about
//curl -i localhost:9012/home
//curl -i localhost:9012