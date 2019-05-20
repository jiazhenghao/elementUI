const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++);//simulate CPU work
    res.end(`Handled by process ${pid}\n`);
}).listen(8081, () => {
    console.log(`Started process ${pid}`);
})

setTimeout(()=> {
    process.exit(1);
}, Math.random() * 100 * 1000);
