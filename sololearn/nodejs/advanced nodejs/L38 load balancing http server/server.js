const http = require('http');
const pid = process.pid;

let usersCount;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++);
    res.write(`Handled by process ${pid}\n`);
    res.end(`Users: ${usersCount}`);

}).listen(8081, () => {
    console.log(`Started process ${pid}`);
})

// ab -c200 -t10 http://localhost:8081/
//Requests per second:    0.12 [#/sec] (mean)

process.on('message', msg => {
    usersCount = msg.usersCount;
    //console.log(`Message from master: ${msg}`);
});