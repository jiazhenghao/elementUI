const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++); // simulate CPU work
    res.write("hello welcome\n");
    res.end(`Handled by process ${pid}`);
}).listen(8088, () => {
    console.log(`Started process ${pid}`);
});