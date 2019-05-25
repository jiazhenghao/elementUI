const server = require('http').createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text-plain' });

    // res.write('Hello world\n');

    // setTimeout(function () {
    //     res.write('Another Hello world\n');
    // }, 10000);

    // setTimeout(function () {
    //     res.write('Yet Another Hello world\n');
    // }, 2230000);

    res.end("Hello world\n");
})

server.timeout = 180000;//3分钟超时
server.listen(8011);
//curl localhost:8011
//curl -i localhost:8011
